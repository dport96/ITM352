--- 
title: "Lab: Cookies and Sessions" 
published: true 
morea_id: experience-Cookies-Sessions
morea_type: experience 
morea_summary: "User data management with Cookies and Sessions"
morea_sort_order: 1 
morea_labels:
 - Lab Lecture
morea_start_date: "2022-11-17"
---

### Instructions: 
**YOU MUST SUBMIT YOUR ANSWERS TO THE EXERCISES ON THE LAULIMA ASSIGNMENT FOR THIS LAB**

#### Exercise 1: Cookie basics

a. (5 minutes) Copy the server and registration_data.json from Lab 14 and rename it ex1.js. Install the cookie-parser middleware (use npm install). Put at the top
```Javascript
var cookieParser = require('cookie-parser');
app.use(cookieParser());
```
 Add a route to handle a GET to `set_cookie` and have it send a cookie with data `<your name>`. Create another route to handle a GET to `use_cookie` that tests if the cookie exists and responds with `Welcome to the Use Cookie page <your name>` from its information when it does. Test this. Stop the server and restart. Try requesting `use_cookie` again. Why is the name information still there?  



b. (3 minutes) In the browser console use the following javascript:

alert("cookie is: " + document.cookie);

Is the cookie data be stored on the client or server? How did it get there? Is it secure from tampering? 



c. (3 minutes) Modify `set_cookie` in (a) to set a cookie that expires in 5 seconds after it is used. Request `set_cookie` then `use_cookie`. Wait five seconds, then request `use_cookie` again. What happens? 



#### Exercise 2: Session basics

a. (5 minutes) Save a copy of ex1.js as ex2.js. Install the express-session middelware. Add the following to load the middleware:
```Javascript
var session = require('express-session');

app.use(session({secret: "MySecretKey", resave: true, saveUninitialized: true}));
```
Write a route to GET `use_session` that prints out `welcome, your session ID is <sess id>` where `<sess id>` is the value of `session.id` in the request object. What is this and where did the `session` object come from?


b. (3 minutes) Look at a neighbor’s output for part (a). Is it the same or different? Explain this! 

c. (3 minutes) Request `use_session` again. Did you get the same output as in (a)? If you go to google.com then request `use_session` again do you get the same output? What if you quit the browser and restart? Explain why or why not it should be the same. If you used another browser would you get the same output? If you cleared cookies in your current browser what would happen?

d. (5 minutes) Modify the GET to login route to display the last time a user logged in. When a user logs in successfully, update it to the current time. If it's a user's first visit, make the current time `first visit!`. Try refreshing the page a few times then logging in again.

e. (3 minutes) Where is the session data stored? Can you think of any security issues with this? If you re-start your server, what happens to the session data? What might be a better place to store session data?



#### Exercise 3: maintaining login status with cookies

a. (6 minutes) Add code to the post to login route that sets a cookie `username` to the username for when a succesful login occurs. Then write if-statement that checks if the cookie for `username` is defined and if so and prints out `Welcome <username>` at the top of the login page. 

b. (5 minutes) Try typing in different usernames. Does the welcome change? Why or why not?

c. (4 minutes) Now go to google.com and then request login again. Why does the `Welcome <username>` message stay around even when there was no posting of the form?

d. Explain how you could use cookies to keep a user logged and how the server could use this to give or refuse access to various requests. How could you make it keep a user automatically log out a user after 5-mins of inactivity?   

#### Exercise 4: 

a. (4 minutes) Modify the code you wrote in #2 to use `session.destroy()` at the bottom of use_session and re-load the page. What happened to the session id? 

c. (4 minutes) Now request a login. What happened to the last login time?


#### Exercise 5: Applying cookies and session (On your own)
Let's say your e-commerce site has multiple product pages. 

a. How can you use cookies to keep a user logged when moving back and forth between pages? How could you use cookies to handle security and personalization in Assignment #3?

b. How can you use sessions to handle multiple users shopping at the same time on your site?

c. How can you use sessions to implement a "shopping cart" for your e-commerce site so users could move back and forth between product pages (or even away from the site) and still get their selections to the invoice page?

