---
title: "Lab: Web Pages and Web Server Basics"
published: true
morea_id: experience-severs-UIBasics
morea_type: experience
morea_summary: "Learn details of web servers and web pages, build simple e-comm web page"
morea_sort_order: 1
morea_start_date: "2022-01-18"
morea_labels:
 - In Class Lab
---
# Lab objectives
- Understand how web pages are requested from a server
- Understand how web page requests are handled by server and the role of files and document root
- Understand how web pages are constructed in a browser from HTML, CSS, and the DOM
- Understand HTTP and web server - browser communication 

# Instructions
Try to do as many of the exercises as possible, in the order listed. You may skip an exercise if it is impossible to accomplish the task described (for technical reasons). If you have trouble with an exercise, contact the instructor for help – do not just skip the exercise! You may work with a partner, but each of you must submit your individual work. Work should be done electronically on this document (cut and paste as needed but be careful of incorrect characters). Anything that involves code should be tried out in VS Code before submitting (you may cut and paste directly from VS Code). Submit work before the next class. If you cannot submit by this time, try to do so as soon as possible.

You may wish to open the [presentation slides](Web UI Basics.pptx) for convenence of viewing and copy-paste. When asked by the instructor do the lab exercises indicated. If you get done early, feel free to go on. If you are not done before the instructor indicates the next exercise, raise your hand and explain where you are at. Later parts often depend on completing previous parts so do not let yourself get behind and expect to catch up!

Note: Whenever you see something like <Your Name> and it's not obviously an HTML tag, it means replace this with you own information as indicated inside. e.g. replace <Your Name> with Joe (or whatever your name is).

For exercises that do not ask specific questions but have you perform tasks, copy any code you created and the output as your answer to the exercise. Some exercises ask for explanations. Make notes for your answer and complete these after class before submitting. Do not try to make complete answers if it keeps you from progressing!

Do all your code work in VS Code. Copy and paste from there. Please ask the instructor for help if you get stuck this is **NOT** a test.

# Submission
When we are done, submit work before the next class. If you cannot submit by this time, try to do so as soon as possible after class. Copy this lab with your answers and paste your into the Laulima assignment submission box to [Laulima Assignment Lab://laulima.hawaii.edu). If you do not submit something to Laulima you will not get credit.


#### Exercise #1: HTTP and client-server communication
Task 1: Open your workspace in VS Code and create a folder `Lab2`. In this folder, create an empty file name it `hello-world.text` then copy the following code into it:
```HTML
<h1>Hello World!</h1>
```
Task 2: Open a terminal in the `Lab2` directory (or `cd` to this directory) and start an http-server (that one you installed in Lab 1) `node ../server.js` Remember that if you do not specify `--rootdir` then it will default to `.` means the "web server document root will be in the current directory". 

Task 3: Open a browser and make a request to `localhost` port `8080` with the `HTTP` protocol and no path. What do you see and where did this come from? Now copy and paste the console output (IN VS Code) here. Explain what this is and where it came from. 

Task 4: Now click on `hello-world.text` or type `http://localhost:8080/hello-world.text`. Explain what this is and where this came from. Is this HTML? Explain why or why not. Again, look at the console output and explain.

Task 5: Exit your http-server process (by hitting ctrl-c usually). Refresh your webpage or retype your request. Explain why the page does not load. Now change the file extension from `.text` to `.html`. 

Go to the terminal re-run your http-server and refresh the web-page. Why do you **not** see the HTML code and now the page renders as you expected?  

Task 6: Exit your http-server process again. Make sure it has stopped and you are at the command prompt!


#### Exercise #2: HTTP-Server as a web page file server
Task 1: In your terminal `cd` to the parent directory of Lab2. Start an http-server and make `Lab2` be the root directory.

Task 2: Create a sub-directory in Lab2 `SmartPhoneProducts1` and create an empty file in it called `store.html`. In the file use the [Emmet "doc" abbreviation](https://code.visualstudio.com/docs/editor/emmet) to add an HTML document boilerplate. Now change the file name to `store.text`

Taks 3. Add a title `Smartphone Store Home` and a top-level heading in the body `<your name> Used Smart Phone Store`. Go to the URL `localhost:8080/SmartPhoneProducts1/store.text` to view the page. What did you see in the console output? What do you see in the browsers address bar? Explain this! Why is the web page not rendering? (i.e. the HTML is shown, not the web page it is supposed to create). Change the filename extension from .text to .html, page-back, refresh the page , click the renamed link and check that the web page looks as expected. Explain this. 

Task 4. Create a new file in SmartPhoneProducts1 "products_display.html", add an HTML document boilerplate (EMMET doc), title it "Smartphone Products", add a top-level heading "<your name> Used Smart Phone Store". 

Task 5. In your browser, page-back and type in the URL needed to get products_display.html. Note the GET request in the console output and the address in the browser address box. Check that the page displays as expected. 

#### Exercise #3: A simple home page for a web application

Task 1. Rename store.html to "index.html", type `localhost:8080/SmartPhoneProducts1/` into the address bar of your browser. Explain what happened and why this is expected and useful.

Task 2: Create a folder "Images" in your SmartPhoneProducts1 folder and right-click on the following image and "save image as" into this new folder:

<img src="phone_globe.jpg" height="25%" width="25%">

Task 3: Display this image with `height="50%" width="50%"` after the top-level heading. 

Task 4: Add a hyperlink to the products_display.html page for this image. Add another top-level heading after this link "Click the image to enter store!" 

Task 5: Add CSS to the HEAD element that styles the BODY element with `text-align: center` and `background: red`

**Note:** You may find it more convenient to use an auto-refresh server such as live-server, fast-live-reload, or reload. Install this now if you wish. 

#### Exercise #4 (On Your Own): A simple products display page

Going back to your products_display.html file. Build page sections as follows:

- Get the JSON data at [products_info.json](products_info.json) and covert each list item into an HTML section by replacing all the `{` with `<section class="item">` and replace all the `},` with `</section>`

- Replace the `[` JSON list delimiters with `<div><main>` and `]` with `</main></div>` (do this manually!)

- In each section, make the name values second-level headers `<h2>`. Use find RegEx with `"name": "(.*)",` and replace with RegEx with `<h2>$1</h2>` or do this manually!

- In each section, put the price values in paragraphs (i.e. enclose them inside `<p></p>`). Put a `&dollar;` in front of the value inside the paragraph tags. Modify the find and replace RegEx you did previously.

- For each image value, covert it to an `<img>` with the `src` attribute the value.

- Add a header element above the div with a top-level header "Used Smartphone Store"

- Similarly add a footer below the div with a top-level header "Your One Stop Phone Shop"

- Create a style sheet "products-style.css" and link it in the HEAD. Reload the page and open Chrome dev tool (Inspect the page), click on sources, double click products-style.css. Edit directly in the Chrome tool editor (if you are not using Chrome you can edit in VS Code and reload the file as needed):
     - Style the body element `width: 800px; margin: 0 auto;`
     - Size the img elements for the item class  200px by 200px
     - Align the text for h1,h2 elements to center
     - Style the main element: 
```css     
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
```
add the image phone_globe.jpg as a background with no-repeat center. Change the color for text in this element so the text shows up well with this background image. 

     - Style the div children of body:
```css
  border: 5px solid black;
  display: flex;
```
    - Organize your CSS by adding comments and moving the CSS into the following sections:
```css
/* General */  
...
/* Typography */  
...
/* block styling */  
...
/* Form styling */  
...
/* Styling the products display */ 
... 
```
The `...` is where you put your CSS rules. Don't add the dots!

Here's an example of what the products display page should look like when you're done (you can inspect page source):

<iframe src="products_display.html" style="height:210px;width:210px;" scrolling="no" frameBorder="0"></iframe>   

#### Extra stuff:

In your index.html add the following to STYLE element in the HEAD
```css
        img {
            border: 1px solid #ddd;
            /* Gray border */
            border-radius: 4px;
            /* Rounded border */
            padding: 5px;
            /* Some padding */
            width: 150px;
            /* Set a small width */
        }

        /* Add a hover effect (blue shadow) */
        img:hover {
            box-shadow: 0 0 5px 1px black;
        }
```
#### Extra credit! 
Create a more elegant and useful products display. Here's an example (click to enlarge):

<a  href="SmartPhoneProducts1-elegant-display.png">
<img src="SmartPhoneProducts1-elegant-display.png" alt="SmartPhoneProducts1-elegant-display" height="25%" width="25%" >
</a>

There are many online tools and references that may be helpful in creating web pages by hand. Here are some to try out:

[HTML WYSIWYG editor](https://html-css-js.com/html/)

[CSS cheatsheet and generator tool](https://htmlcheatsheet.com/css/)

[HTML goodies](https://html-online.com)

