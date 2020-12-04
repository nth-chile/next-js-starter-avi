get-landinpages.ts
- switch main parameter from email to user_id once we figure out how to keep that in server memory

api/edit-landingpage.ts
- blank info being passed to stored proc

api/create-landingpage.ts
- blank info being passed to stored proc

components/landingpageform
- UI: check if the pageurl exists before submitting so the user can adjust it if so...

Auth0 hooks
- When we get code online, update the hooks to use domains and remove create user api post from nav (line 29)

api/create-landingpage.ts
- hacked together by using user email instead of user id. Need to fix this once we figure out how to get user_id.

index.ts
- Enable / disable ui state isnt updating (but works in the db)

Questions for Jared
===================
-typescript message errors in VS Code sidebar (eg why does api/disable-landingpages.ts say there are 2 problems with file?)
-how to make enabling / disabling ui state change
-how to make individual inputs into a component so i can build this rapidly (eg. landingpageform)
-how to debug create-landingpage form (not sure what broke)
-how to know when console / info is used by the browser or server??

TODO
================
* Add stripe integration for user subs
* Store user_id in globally accessible variable
* Integrate design template for landing page
* Configure custom fields within Auth0 (username, user_id?) 
* Update instance -> Figure out load balancing on AWS
- Working domain on AWS
* Working SSL on AWS
- Finish wiring up stored procedure and form
* Figure out how to detach instances from command line so site stays online

GIT INSTRUCTIONS
================
git commit -a -m "message"
git push (send to github)
git stash
git add <filedirectory> (no carats)
git commit --amend "message" (post a quick change)
:wq <- when accidentally entering git CLI in terminal

LIGHTSAIL AWS INSTALL INSTRUCTIONS
===============
## GET RID OF THE DEFAULT APACHE PORT 80 SERVICE
cd /opt/bitnami
./ctlscript.sh stop apache
# install ssl - see here: https://aws.amazon.com/premiumsupport/knowledge-center/linux-lightsail-ssl-bitnami/
sudo /opt/bitnami/bncert-tool
# START THE SERVER
cd /home/bitnami/projects/kingslandingpage
yarn
sudo yarn dev


TOOLS
===============
Libraries
- Next.js
- MySQL
- Express
- Node.js

SaaS
- AWS
- Github
- Vercel

APIS
- APIFLASH
- Auth0
- Stripe


APIFLASH
https://api.apiflash.com/v1/urltoimage?access_key=85047c91a2b54d23a5b4cd6f16acd66f&delay=0&format=png&fresh=true&height=768&quality=100&response_type=image&thumbnail_width=400&url=http%3A%2F%2Flogolo.co&width=1024


AWSFILEUPLOAD CODE
------------------
const fs = require('fs');
const AWS = require('aws-sdk');

// Enter copied or downloaded access id and secret here
const ID = '';
const SECRET = '';

// Enter the name of the bucket that you have created here
const BUCKET_NAME = 'test-bucket-1242tsr';;


// Initializing S3 Interface
const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const uploadFile = (fileName) => {
    // read content from the file
    const fileContent = fs.readFileSync(fileName);

    // setting up s3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: 'cat.jpg', // file name you want to save as
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err
        }
        console.log(`File uploaded successfully. ${data.Location}`)
    });
};

// Enter the file you want to upload here
uploadFile('cat.jpg');


# UPLOAD FROM URL

var AWS = require('aws-sdk');
var request = require('request');

AWS.config.loadFromPath('./config.json');
var s3 = new AWS.S3();

function put_from_url(url, bucket, key, callback) {
    request({
        url: url,
        encoding: null
    }, function(err, res, body) {
        if (err)
            return callback(err, res);

        s3.putObject({
            Bucket: bucket,
            Key: key,
            ContentType: res.headers['content-type'],
            ContentLength: res.headers['content-length'],
            Body: body // buffer
        }, callback);
    })
}

put_from_url('http://a0.awsstatic.com/main/images/logos/aws_logo.png', 'your_bucket', 'media/aws_logo.png', function(err, res) {
    if (err)
        throw err;

    console.log('Uploaded data successfully!');
});

