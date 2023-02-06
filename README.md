#Update local database credentials in config folder > db.js
#execute "npm install" in the terminal
#execute "npm run dev" in the terminal


#Routes
/users/

**http request get, post, delete and put are on same route.**

##(GET) - Fetch all users

##(POST) - Create new user

sample body param:

{
"userName": "user3",
"password": "password3",
"firstName": "fname3",
"lastName": "lname3",
"address": "address3",
"postCode": "postCode3",
"contactNumber": "cnumber3",
"email": "email3"
}

##(DELETE) - Delete existing user

sample body param:

{
"userIds": ["user3","user1"]
}

##(PUT) - Update exisiting user

sample body param:

{
"userName": "user3",
"password": "password3",
"firstName": "fname3",
"lastName": "lname3",
"address": "address3",
"postCode": "postCode3",
"contactNumber": "cnumber3",
"email": "email3"
}
  
/users/id

##(GET) - Fetch existing user by userName
  
 
