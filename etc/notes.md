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

Questions for Jared
===================
-typescript message errors in VS Code