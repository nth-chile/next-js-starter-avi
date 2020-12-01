create-landingpage.ts
 - overrode the sql stored proc with inline sql since it was returning 2 arrays. Need to fix and restore

get-landingpage-by-url.ts
 - overrode the sql stored proc with inline sql since it was not working.

get-landinpages.ts
- overrode the user_id with varUser_id = 1, since auth isn't working.

api/edit-landingpage.ts
- blank info being passed to stored proc

api/create-landingpage.ts
- blank info being passed to stored proc

components/landingpageform
- not able to use the returned pageurl in the stored proc to redirect to router.

api/create-landingpage
- add user warning if pageurl already exists inside the form itself

Questions for Jared
===================
-Can't get the login status to change
-Can't get the API to fire after creating a new user
-typescript message errors in VS Code
-how to access the json.pageurl info in components/landingpageform/index.tsx
-how to pass in data into props so we can manipulate nav component (see api/landingpage/[pageurl.tsx])