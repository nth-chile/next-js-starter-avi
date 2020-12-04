
import { NextApiHandler } from 'next'
//import { query } from '../../lib/db'
var AWS = require('aws-sdk');
//var request = require('request');


//AWS.config.loadFromPath('./config.json');
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_S3ACCESSKEY,
    secretAccessKey: process.env.AWS_S3SECRETKEY
});


const handler: NextApiHandler = async (req, res) => {
  const { url } = req.query 
  //const url = encodeURIComponent(`${window.origin}/landingpage/${LANDING_PAGE_ID}`)
  
  //@ts-ignore
  const encodedurl = encodeURIComponent(url)

  var snapshot=`https://api.apiflash.com/v1/urltoimage?access_key=85047c91a2b54d23a5b4cd6f16acd66f&delay=0&format=png&fresh=true&height=768&quality=100&response_type=image&thumbnail_width=400&width=1024&url=${encodedurl}`


  try {

    //CALL AMAZON
    console.log(snapshot);

    res.status(200).json({message: snapshot})


  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler


// //#SECTION1 - PUT SNAPSHOT INTO S3
// var options = {
//     uri: snapshot,
//     encoding: null
// };
// request(options, function(error, response, body) {
//     if (error || response.statusCode !== 200) { 
//         console.log("failed to get image");
//         console.log(error);
//     } else {
//         s3.putObject({
//             Body: body,
//             Key: path,
//             Bucket: process.env.AWS_S3BUCKET
//         }, function(error, data) { 
//             if (error) {
//                 console.log("error downloading image to s3");
//             } else {
//                 console.log("success uploading to s3");
//             }
//         }); 
//     }   
// });


















//#SECTION2
// var AWS = require('aws-sdk');
// var request = require('request');

// AWS.config.loadFromPath('./config.json');
// var s3 = new AWS.S3();

// function put_from_url(url, bucket, key, callback) {
//     request({
//         url: url,
//         encoding: null
//     }, function(err, res, body) {
//         if (err)
//             return callback(err, res);

//         s3.putObject({
//             Bucket: bucket,
//             Key: key,
//             ContentType: res.headers['content-type'],
//             ContentLength: res.headers['content-length'],
//             Body: body // buffer
//         }, callback);
//     })
// }

// put_from_url('http://a0.awsstatic.com/main/images/logos/aws_logo.png', 'your_bucket', 'media/aws_logo.png', function(err, res) {
//     if (err)
//         throw err;

//     console.log('Uploaded data successfully!');
// });




