get-landinpages.ts
- switch main parameter from email to user_id once we figure out how to keep that in server memory

components/landingpageform
- UI: check if the pageurl exists before submitting so the user can adjust it if so...

Auth0 hooks
- When we get code online, update the hooks to use domains and remove create user api post from nav (line 29)

api/landingpage-create.ts
- hacked together by using user email instead of user id. Need to fix this once we figure out how to get user_id.

API security
- use Auth0 api

Questions for Jared
===================
- how to put functionality behind a modal confirm message
* how to include google analytics / javascript libraries in jsx pages
* how to protect APIs from bad actors?
* how to use cookies in react

TODO
================
* Store user_id in globally accessible variable - IMPORTANT!!
* Configure custom fields within Auth0 (username, user_id?) 
- Store billing info from Stripe
* Update instance -> Figure out load balancing on AWS
- Working domain on AWS
- Working SSL on AWS
- stats dashboard
- stats page
- stats survey
- Add background image searching
- Stripe swap out credentials
* toggle between table and card view
* iframe / equivalent for owners.
- show 404 / message when a landing page is disabled
- animation placeholder (skeleton / font-flow) for landingpages while loading
* security on APIs - https://auth0.com/docs/libraries/auth0-react#call-an-api
* html templates in mysql?
- capture audiences via custom referrer urls (premium)
- error when redir on edit, after changing pageurl
- s3 bucket isnt overwriting filenames on pageurl edit

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
# UPLOAD FILES VIA SSH (FILEZILLA)
# START THE SERVER
cd /home/bitnami/projects/kingslandingpage
yarn
sudo yarn dev
NEED: yarn build <-- when ready to test the build?


TOOLS
===============
Software
- Visual Studio Code
- MySQL Workbench
- Chrome
- Github Desktop
- Terminal

Libraries
- Next.js
- MySQL
- Express
- Node.js
- Tailwind
- Tailwind UI

SaaS
- AWS
- Github
- Vercel??

APIS
- APIFLASH
- Auth0
- Stripe
- Filestack??
- Unsplash??


Future Company CULTURE
=======
* Remote: Responsive and Proactive comm's to work well.
- Travel:
-- Optional in person flexspaces (can't be shared with the company)
-- Quarterly in person all hands.
- Communication:
-- Document: ev.er.y.thing. Assume the target audience is someone new joining the team and getting up to speed on their own.
-- Responsive: Respond to email the moment received (eg. dont open if not able to reply)
-- Contextual: Slack -> quick disposable questions and answers / conversation; Email -> longform discussions that may be useful for raw log archival; Google Docs -> final concise output of decisions from conversations