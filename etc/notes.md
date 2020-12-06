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
-how to make enabling / disabling ui state change
-how to make individual inputs into a component so i can build this rapidly (eg. landingpageform)
-how to include <!-- --> in tsx files?
-how to get toggle-icon component working
-how to wire up pagination
* why does page seem to fire off multiple times?

TODO
================
* Store user_id in globally accessible variable
* Configure custom fields within Auth0 (username, user_id?) 
- Store billing info from Stripe
* Update instance -> Figure out load balancing on AWS
- Working domain on AWS
* Working SSL on AWS
- Stats updated on CTA clicks and page calls
- Add background image searching
- Site design implementation in Tailwind
- Stripe swap out credentials
* wire up enable / disable
* wire up pagination
* toggle between table and card view
- center align Create New Button
- swap out stripe deets
* refactor landingpage and editlandingpage into one form
- add cloning
* iframe / equivalent for owners.
- copy url to clipboard
* how to get the auth0 info outside of nav-primary (eg. nav-secondary)
- set a min-width on the landingpage cards

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