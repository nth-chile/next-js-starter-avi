
import { NextApiHandler } from 'next'
import axios from 'axios'
import { prependListener, prependOnceListener } from 'process';
import { allowedStatusCodes } from 'next/dist/lib/load-custom-routes';
var AWS = require('aws-sdk');

const handler: NextApiHandler = async (req, res) => {
  const { url, name } = req.query

  const encodedurl = encodeURIComponent(url as string)

  var snapshot = `https://api.apiflash.com/v1/urltoimage?access_key=${process.env.APIFLASH_ACCESSKEY}&delay=0&format=png&fresh=true&height=768&quality=100&response_type=image&thumbnail_width=400&width=1024&url=${encodedurl}`

  try {
    // Connect to AWS
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_S3ACCESSKEY,
      secretAccessKey: process.env.AWS_S3SECRETKEY
    });

    // URL TO BASE64
    const base64 = await axios.get(snapshot, { responseType: 'arraybuffer' })

    const key = `thumbs/${name}`

    // Post to AWS
    s3.putObject({
      ACL: 'public-read',
      Bucket: process.env.AWS_S3BUCKET,
      Key: key,
      Body: base64.data,
      ContentEncoding: 'base64',
      ContentType: 'image/png',
    }, (err) => {
      if (err) {
        console.log(err);
      }
    })

    const filepath = `https://${process.env.AWS_S3BUCKET}.s3.amazonaws.com/${key}`

    res.status(200).json({ filepath })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler