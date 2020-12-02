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
-how to make individual inputs into a component so i can build this rapidly (eg. landingpageform

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
