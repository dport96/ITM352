---
title: "Lab1: GitHub, VS Code, web pages, web servers, local/global servers"
published: true
morea_id: experience-install-WADT
morea_type: experience
morea_summary: "web pages, installing, configuring, and test running a local web server, using a global web server"
morea_sort_order: 1
morea_start_date: "2021-08-26"
morea_labels:
 - Screencast [xxx min]
 - In Class Lab
---

{% assign repo = "ITM352_" %}
{% assign m =  "now" | date: "%-m" | times: 1 %}
{% if m <= 5 %}
{% assign repo = repo | append: "S" %}
{% else %}
{% assign repo = repo | append: "F" %}
{% endif %}
{% assign year = site.time | date: '%y' %}
{% assign repo = repo | append: year | append: "_repo" %}

# Here are the presentation slides and screencast for the class lecture

Open the [WADT presentation slides](ITM352_WADT.pptx). 

In class we will see examples, answer questions, and discuss what's on for next class. 

Open the [WADT screencast](https://) *NOT AVAILABLE YET*

# Lab objectives
After completing this lab you should be set up with and understand how to make use of the web application development tools we will be using. In particular:
- Set up a GitHub repo for your labs and assignments. Understand the use of a repository.
- Understand what VS Code is and how to use it
- Understand what web pages are and using VS Code to develop them
- Installing a local web server for development and understanding what a local web server is and what we will use it for
- Understand what a global web server is and how to use the class web server

# Instructions
Try to do as many of the exercises as possible, in the order listed. You may skip an exercise if it is impossible to accomplish the task described (for technical reasons). If you have trouble with an exercise, contact the instructor for help – do not just skip the exercise! You may work with a partner, but each of you must submit your individual work. Work should be done electronically on this document (cut and paste as needed but be careful of incorrect characters). Anything that involves code should be tried out in VS Code before submitting (you may cut and paste directly from VS Code). Submit work before the next class. If you cannot submit by this time, try to do so as soon as possible.

For exercises that do not ask specific questions but have you perform tasks, copy any code you created and the output as your answer to the exercise.

# Submission
 **COPY this entire page and paste it, with your answers, into the Laulima assignment submission box for this assignment**

###  1. Creating and using a local repository
**If you have not installed the git tools or GitHub Desktop skip this exercise. Just create a folder on your desktop called  `{{ repo }}`**

  - Go to GitHub.com, sign in using your github account and select your `hello-world` repo (that you created from the [Hello World GitHub guide](https://guides.github.com/activities/hello-world/)). Go to Settings and change the repo name to `{{ repo }}`. Change the README.md if you wish.
  - Clone this repo and open it in VS Code. You can clone it in GitHub or use GitHub desktop (or any other way you wish that works). 

*What is the URL for your GitHub `{{ repo }}`?*

*What is the path to the local `{{ repo }}`?*

###  2. Using VS Code to create a web page
VS Code is a file editor designed to help build applications (code). Web applications are built from files with instructions that the server and browser process. Let try making a web page and viewing it in a browser.

  - In the repo folder, create a new folder inside called "Lab1", create file in this folder `<your Last_First name>_hello.html`. Edit this file "Hello from `<your first name>`!". **Don't forget to save this file after you make changes!**
  - Open a browser, navigate to the file you created or drag and drop it into the browser from a file explorer (you may find it easier to right-click on the file in VS Code and Open in Finder/Explorer). 
  
  *Explain here why you see text in the browser window. Is this a web page?*

  - Edit the file to add your **last name** and enclose your full name between `<b>` tags and then enclose all the text in between `<html>` tags. Save a refresh your browser. 
  
  *Explain here why you do not see the code for the tags in the browser window:*

  - In VS Code file manager right-click, in terminal, or in explorer/finder, change the file extension to `.txt`. In your browser window change the `.html` in the filename in the address bar to `.txt` and reload the window.

  *Explain here why you **do** see the code for the tags in the browser window:*

  - In VS Code, in front of `Hello` type `<i` 
  
  *Explain why you do not get the Intellisense help for HTML anymore:* 

  - Change the file extension back to `.html`. Find an HTML tag that will italicize text. Use this tag to italicize your entire greeting. Save and reload your browser window. 

  *Explain why you **do** get the Intellisense help for HTML now and why you **do not** see the html in the browser window:* 


###  3. Installing and using http-server as a local web server
For convenience and speed we will test applications on our own machine before deploying to a server. Applications that need only serve static pages can use a simple web server that accesses the static pages (documents) from a single directory (the document root). The http-server package will do this for us without any configuration or coding.  

  - Open a terminal in VS Code, check that you have node.js `node --version`
  - Add the http-server package `npm install http-server -g` *Note for Mac users: you may need to add `sudo` to the front of this to override file permissions.*
  - Check the run options with `http-server --help`
  - Start the local http-server and use the current directory as the document root by typing `http-server .`
  - Open a browser to `http://localhost:8080/<your Last_First name>_hello.html` and verify it is served rather than loaded directly into the browser (you should see `http://localhost:8080/<your Last_First name>_hello.html` rather than the file path)

**NOTE:** If the server fails to run and you get a `port already in use` error you may have another process using port 8080. Try changing the port to something else like 8081 and try running again. ** 

  *Go to the terminal window in VS Code and copy and paste here the output after you started http-server. Explain what this output is:*

  *Explain how the page in the browser window was loaded. Why is the URL path not the same as the filepath for the file in your Lab1 directory?*

  - Hit ctrl-c to stop http-server. Reload or refresh the page in your browser. 

  *Explain why you do not see the page anymore:*

  *Explain here how this is different than what you did previously. Is your file now a web page?*

### 4. Local vs Global web servers
There really is no difference between the web server such as you installed on your laptop for class and any other web server on the internet. It's really a matter of accessibility. A local web server is accessed though the URL `http://localhost` where localhost is always set to the IP address `10.0.0.1` or `127.0.0.1` (which is also known as the "local loopback"). Anytime you try to connect to localhost you will always be connecting to your own machine. So if you set your web server's address to be localhost it then can only be accessed from your machine regardless if it is connected to the internet (or any network). A global web server simply has it's address set to some globally accessible IP address (and possibly an internet registered domain name).

You should always develop your web applications locally and then "publish" them--after careful testing--to a global web server (that is if you want the outside world to be able to access it). For our class we have made available to you the global web server [http://itm-vm.shidler.hawaii.edu/itm352student](http://itm-vm.shidler.hawaii.edu/itm352student) and this is where you should test all your applications if they are intended to be used non-locally.

  
#### Testing the class web server as your global Web server

Locate the file you created to test your local web server from exercise 3 above.

  1. Use SFTP or SSH or a file transfer tool such as [CyberDuck](https://cyberduck.io/?l=en) to upload it to the ITM 352 student class webserver at itm-vm.shidler.hawaii.edu/itm352student/<your class section>. The "htdocs" or document root folder to store your web files on the class server is actually called `public_html`, but when you log in it will take you directly to this location so you won't see it. You cannot write files to this directory so you will need to go to `Section_Port` or `Section_Kazman` depending on which class section you are in. Make a note of this as you will need to add this to URL to access your file.
    
   - username is `<ask instructor>` with password `<ask instructor>` you must use port 8615  You can try this link or copy and paste it into the Server textbox [sftp://itm352student@itm-vm.shidler.hawaii.edu:8615/](sftp://itm352student@itm-vm.shidler.hawaii.edu:8615/)

   See [http://www.hawaii.edu/askus/692](http://www.hawaii.edu/askus/692) for more information on SSH/sFTP 
   
  2. Access your web page by typing in `http://itm-vm.shidler.hawaii.edu/itm352student/<your class section>/<your Last_First name>_hello.html` For example `http://itm-vm.shidler.hawaii.edu/itm352student/Section_Port/Port_hello.htm`
   
  
  If you are using Cyberduck here is what your open connection should look like this:
  
  ![cyberduck_config](cyberduck_config.png)
 
#### Answer the following questions:

*How do you make websites?*

*What's the difference between a local and global webserver?*

*How do webservers, local or global, work with VS Code?*