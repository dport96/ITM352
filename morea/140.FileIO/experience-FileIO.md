--- 
title: "Lab: File I/O" 
published: true 
morea_id: experience-FileIO
morea_type: experience 
morea_summary: "Learn About File I/O"
morea_sort_order: 1 
morea_labels:
 - "Lecture Lab"
morea_start_date: "2024-04-11T00:00"
---

### Instructions: 
When asked by the instructor do the lab exercises listed. Use JAVASCRIPT unless asked to do otherwise.
Do all your code work in VS Code. Please ask the instructor for help if you get stuck this is **NOT** a test.

**YOU MUST SUBMIT YOUR ANSWERS TO THE EXERCISES ON THE LAULIMA ASSIGNMENT LISTED ABOVE**

#### Exercise 1: Reading text files (7 minutes)

Create a text file using notepad (or your favorite text editor) with a few bits of user information data in JSON format. Save the following to a file `filename = 'user_data.json'`
```JSON
{
"dport": {"name": "Dan Port", "password": "portspassword", "email": "dport@hawaii.edu"},
"kazman": {"name": "Rick Kazman", "password": "kazmanpassword", "email": "kazman@hawaii.edu"},
"itm352": {"name": "ITM 352", "password": "grader", "email": "itm352@hawaii.edu"}
}
```

a) Use `require()` to load and parse `user_data.json` into an object and assign it to `users_reg_data` and output this object to the console. Use the object to get the password information for the username `kazman`.

b) Write a small program that uses `readFileSync(filename, 'utf-8')` to open and read this file and assign the return value to `data` use `JSON.parse()` to convert the JSON string into an object and assign it to `users_reg_data` variable and output this object to the console. Explain why you might use this was to load the data rather than `require()`. Don't forget to remove the `require()` statement used in (a). Hint: what if the data is not JSON?  

c) CRUD stands for Create, Read, Update, and Delete, which are the four basic operations that can be performed on data in a database or a computer system. These operations are fundamental to file I/O. Explain what CRUD operations are needed and where they are needed in Assignment 1.

d) Discuss how ease and efficiency of CRUD operations are affected by the format of the data in a file. For the format suggested here (JSON), explain the pros and cons of this data format.



#### Exercise 2: Existence and Filesize (total 6 minutes)

a) (4 minutes) Modify your program in #1 to only open the file if it exists using `fs.existsSync(filename)`

b) (2 minutes) Modify program in part (a) to print out the size of your user_data.dat file using `fs.statSync(filename)`. Have it output to the console `user_data.json has xxx characters` where `xxx` is the filesize.

#### Exercise 3: Processing a login (4 minutes)

a) Add the following to your program from #2
```Javascript
const express = require('express');
const app = express();


app.use(express.urlencoded({ extended: true }));

app.get("/login", function (request, response) {
    // Give a simple login form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not

});

app.listen(8080, () => console.log(`listening on port 8080`));
```
Now add code to the app.post() callback function to check if a username and password submitted in the form match a username and password stored in `users_reg_data`. If so, generate a `<username> logged in` page. If not, redirect back to the login page. If you had data from another page, how might keep this data around until a successful login?

#### Exercise #4: Adding to or modifying a File (6 minutes)
a) In your program just after you define the `users_reg_data` object, add a new user information as follows:
```Javascript
username = 'newuser';
users_reg_data[username] = {};
users_reg_data[username].password = 'newpass';
users_reg_data[username].email = 'newuser@user.com';
```
Now after this code write the `users_reg_data` object to `user_data.json` using  `JSON.stringify()` and `fs.writeFileSync()`. Note this will overwrite the previous data in the file.

a) Add the following to your program in (a):
```Javascript
app.get("/register", function (request, response) {
    // Give a simple register form
    str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
<input type="email" name="email" size="40" placeholder="enter email"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
 });

 app.post("/register", function (request, response) {
    // process a simple register form

 });
 ```
Add code to the callback of `app.post("/register")` that adds the submitted form data to `users_reg_data` then saves this updated object to `user_data.json` using `JSON.stringify()` as you did in (a). Redirect to the login page when done and test that the new user can login.

c) Add code in `app.post("/register")` that checks if the username does not exist in `users_reg_data` (it is suggested you use `users_reg_data.hasOwnProperty(username)`) and that the password and repeat_password match. If both are true, then save the new user info as in (b) above. If not, redirect to the register page. Hint: Put the code you wrote in (b) inside an if-statement.

#### Bonus Extra Credit: 
a) Make the login form "sticky" so when they redisplay the user does not have to re-enter their information. Do this either by (1) Making the login page use data in a query string to fill the form. (2) have the server add the data to the form when the page os generated

b) Make the login page indicate a login error. Either (1) a delayed HTTP redirect form the page, or (2) Pass the error to the page form the server and have the page display the error