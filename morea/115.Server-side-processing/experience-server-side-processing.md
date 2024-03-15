---
title: "Lab: Introducing Server Side Processing using Node.js"
published: true
morea_id: introducing-server-side-processing
morea_summary: "Examples of using Javascript and Node.js to pre-process a webpage."
morea_type: experience
morea_url: 
morea_labels:
  - Follow Along
morea_sort_order: 2

morea_start_date: "2024-03-28T00:00"
---
# Lab objectives
- Understand how web pages are requested from a server
- Understand how web page requests are handled by server and the role of files and document root
- Understand how web pages are constructed in a browser from HTML, CSS, and the DOM
- Understand HTTP and web server - browser communication 

# Instructions
Try to do as many of the exercises as possible, in the order listed. You may skip an exercise if it is impossible to accomplish the task described (for technical reasons). If you have trouble with an exercise, contact the instructor for help – do not just skip the exercise! You may work with a partner, but each of you must submit your individual work. Work should be done electronically on this document (cut and paste as needed but be careful of incorrect characters). Anything that involves code should be tried out in VS Code before submitting (you may cut and paste directly from VS Code). Submit work before the next class. If you cannot submit by this time, try to do so as soon as possible.

You may wish to open the [presentation slides](ITM352_Server_Side_Processing.ppt) for convenience of viewing and copy-paste. When asked by the instructor do the lab exercises indicated. If you get done early, feel free to go on. If you are not done before the instructor indicates the next exercise, raise your hand and explain where you are at. Later parts often depend on completing previous parts so do not let yourself get behind and expect to catch up!

Note: Whenever you see something like <Your Name> and it's not obviously an HTML tag, it means replace this with you own information as indicated inside. e.g. replace <Your Name> with Joe (or whatever your name is).

For exercises that do not ask specific questions but have you perform tasks, copy any code you created and the output as your answer to the exercise. Some exercises ask for explanations. Make notes for your answer and complete these after class before submitting. Do not try to make complete answers if it keeps you from progressing!

Do all your code work in VS Code. Copy and paste from there. Please ask the instructor for help if you get stuck this is **NOT** a test.

# Submission
When we are done, submit work before the next class. If you cannot submit by this time, try to do so as soon as possible after class. Copy this lab with your answers and paste your into the Laulima assignment submission box to [Laulima Assignment Lab://laulima.hawaii.edu). If you do not submit something to Laulima you will not get credit.

The presentation is at
[server side processing using JAVASCRIPT presentation slides](ITM352_Server_Side_Processing.ppt)

#### Exercise #1: 
What is "server side" processing mean? How can this make web pages dynamic?







#### Exercise #2:

Create a Lab4 folder in your repo and a new file `Ex2.js` and copy the following into this file:

```javascript
const http = require('http');

//create a server object:
http.createServer(function (req, res) {
    console.log(req.headers); //output the request headers to the console
    res.writeHead(200, { 'Content-Type': 'text/html' }); // set MIME type to HTML 
    res.write('<h1>The date is: ' + Date.now() + '</h1>'); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

console.log('Hello world HTTP server listening on localhost port 8080');
```
Open a terminal and run it using node.js. OPen a browser and make a request to localhost:8080 

a) Why is this a "dynamic" web page?


b) Does the request matter? Where is the route handled?


c) When you do a "view source" in the browser, where is the Javascript code?



#### Exercise #3:
Make a copy of the file `Ex2.js` and change the name to `Ex3.js` then change line:

```javascript
res.write('<h1>The date is: ' + Date.now() + '</h1>'); //write a response to the client
```
to

```javascript
res.write('<h1>The date is:<script>document.write( Date.now() );</script></h1>'); //write a response to the client
```
Save the file, stop node.js and re-run (the new code needs to be loaded into Node.js)

Now, explain why this is the same result as the previous dynamic web page example, but also explain how it is different.


#### Exercise #4: Page redirection

It is is common that a web app will need to direct the user to a different page other than the one requested. Say you want the user to be sent to google.com after requesting something from the server. This can be done in various different ways as we will explore. First make a copy of the file `Ex3.js` and change the name to `Ex4.js`.

##### Task1: Redirect on the client with HTML. 

Change the string inside the `res.write()` to respond to HTTP requests with 

```HTML
<META http-equiv ="refresh" content="0;URL=http://www.google.com">
```

 Stop and restart node.js and go to localhost:8080 to verify you get directed to google.com. Now stop node.js and go to localhost:8080 and verify you get a page not found.

##### Task 2: Redirect on the client with Javascript:
Copy the `res.write()` line and paste it below the original. In the copied change the string inside the `res.write()` of the copied line to respond to HTTP requests with

```Javascript
<script>window.location = "http://www.apple.com"</script>;
```
Stop and restart node.js and go to localhost:8080 to verifiy you go to apple.com. Notice that you no longer go to google.com even though the HTML redirect is still there! Now stop node.js and go to localhost:8080 and verify you go get a page not found.  

##### Task 3: Redirect by changing the routing on the server:

Copy the `res.writeHead()` line and replace the string in the copy with: 
 
 ```Javascript
 res.writeHead(301, { "Location": "http://amazon.com"}); 
```
 Stop and restart node.js and go to localhost:8080. Notice that you no longer go to apple.com even though the Javascript redirect is still there. Now stop node.js and try going to localhost:8080. Did you get a page not found? 
 
Questions to discuss:
Explain how these each work differently and when you might choose one way over another. Which ones would enable you to use the browser "back" or history? Hint: the server side redirect can not be stopped or changed by the user.

#### Exercise #5: Mixing client and server processing to modify DOM objects
First make a copy of the file `Ex3.js` (note, this is from **Exercise 3** not 4) and change the name to `Ex5.js`.
In your server code, replace
```javascript
res.write('<h1>The date is:<script>document.write( Date.now() );</script></h1>'); //write a response to the client
```
with

```javascript
  res.writeHead(200, { 'Content-Type': 'text/html' }); // set MIME type to HTML 
  res.write("<body></body><script>document.body.style.backgroundColor= 'rgb("
    + Math.floor(Math.random() * 255) + ','
    + Math.floor(Math.random() * 255) + ','
    + Math.floor(Math.random() * 255) + ")';</script>"
  ); //write a response to the client
```
Stop node.js and restart with the new code. View the page then try refreshing a few time. Now view the page source. Explain how this blends both client and server side processing.