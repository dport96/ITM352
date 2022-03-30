--- 
title: "Assignment 3" 
published: true 
morea_id: experience-Assignment3
morea_type: experience 
morea_summary: "Build an eComm site"
morea_sort_order: 3 
morea_labels:
 - Assignment
morea_start_date: "2022-04-20"
morea_end_date: "2022-05-13"
---

# Assignment 3: Adding Sessions to your e-Commerce Web-site
---

### Scenario: 

The director was pleased with your past project, but she says that
 a friend of hers, who is involved in a similar project used "sessions and cookies" to secure and personalize the website for each user. She asks **you and your partner(s)** to 

1) add a shopping cart feature to the website so that users can shop at their leisure, 
2) enable arbitrary navigation of multiple product pages, 
3) email the user the completed invoice for each transaction, 
4) maintain a user's state (i.e. whether they are logged in), 
and (extra credit) allow a user to edit their information.  

**Warning!** _Do not simply assign tasks to each team member and assume everyone's parts will work together!_ There are many serious dependencies in the requirements for this assignment. Make sure your team is very clear on these and ensure that they are satisfied (i.e. tested).

This assignment involves the following requirements (in addition to all requirements for previous assignments):

*   **Temporarily storing and displaying a user's information from transactions while logged in:** users should be able to select multiple products and quantities on any product page. The selections must be stored in a "cart" where users can later view, add, or delete items from this cart and ultimately "check out" and create an invoice. Keep in mind that the cart does not necessarily need exist on its own page. For example, you may have a "conceptual cart" whose information is used to fill out the user-selected quantities on each product page as the pages are visited.
*   Product pages will not longer automatically go to login after selecting items. Therefore _You will need to have some way to enable to user to stop shopping and "check out" the items in their cart._
*   **Having multiple pages:** There should be at least _four (4) separate pages_ of product options in your main application for your user to choose from. Therefore, you may need to have several versions of your items or service (e.g. if you are selling cell phones, maybe you will offer Sprint on one page, AT&T on another, Mobi on another). Must be able to _navigate easily_ back and forth between product pages using _navigation bar_.
*   **Sending an email to users about their transactions:** When the user completes their transaction, their invoice information should be shown on a checkout page, and this same information should be emailed to the user.
*   **State:** The _user's identity, login status, and number of items in shopping cart_, needs to be maintained even when the user is not currently at the site. This information needs to be displayed on every page. Optionally for **extra credit** maintain other pertinent info such as last page visited, last visit date and time, etc.  
*   **Extra credit: Information Editor:** The user should be able to view and edit account information. This includes deleting their entire account.
*   **Extra credit: Keep shopping cart between login** When the user logs in, if they had a non-empty shopping cart previously, use this shopping cart. If they have a non-empty shopping cart before logging in, ask them if they want to merge it with the previous shopping cart, use only the previous, or dump the previous cart and use only the current.

#### Some general tips:

*   For this assignment, you will want to make use of _Sessions and Cookies_ from the class lab.
*   There are MANY online resources and examples for implementing shopping carts and you are welcome to take inspiration and use code from them. Be sure to clearly reference and document what you use! 
*   If you need help, consult the Assignment3 code examples, past labs and WODs before asking for help. When you ask for help the more specific you can be about what you need help with the more likely you will get something helpful!
*   You should also try searching on Google or your favorite search engine for information on the problem(s) you are having (e.g. sessions+php). As an ITM major, it is _expected_ that you are able to find information online because there won't always be an instructor or classmate around to help you.
*   If you have tried the above but still need some assistance, the instructor can help you with _specific_ questions. Email is probably the best way to get help since the instructor isn't always available in person at any given time and class periods are too short to address detailed problems.

**_Remember to start early and finish early!!_** You know how important this is!!!


**Other Requirements:**

*   Fix any shortcomings in assignment #2 (all the things that should have worked in #2 should now work in #3)
*   The site must be navigable to any page at any time. For example, the user should be able to go to product page 1 when they are on product page 3. You will likely want to enable this by adding a navigation bar. Think about what you are used to seeing on a web application. 
*   You will need to provide a reasonable index page that "starts" the user into your site. The user should not be forced to start here, but if they don't know where to go, it starts here and enables them to go to where they might want to be. Use index.php as your home page.
*   Unlike Assignment 2, you must allow your user to login or register *any time* before showing an invoice, not just after or before selecting products. 
*   Your application should be designed in a way that it is easy to add, change, remove products and product pages.
*   _**Well-designed user interface.**_ You are expected to improve the design of your application *significantly*
    *   High usability, easy to learn. For usability you may use different form elements such as select boxes for quantity selections instead of textboxes. You must still validate any data submitted by the user even if the interface "guards" against the user inputting something invalid.
    *   Realistic e-commerce site (should seem real)
*   _**Personalize the pages**_
    *   After logging in from the login page, save the user's ID (e.g. user name) in the session array and/or cookie. NOT in a query string.
    *   Each page (other than login and registration) should display the relevant personal information about the user - user name or name, login status, number of items in cart
    *   The invoice and email must make use of the user's personal information (name, address, etc.). You may wish to add additional information to the registration or ask the user for this at checkout.
    *   After using the application or making a purchase, the last page should say "Thank you, <user's name> for your <use of this application>" and other relevant user info (e.g. shipping address for invoice).
    *   If the user logged in previously without logging out, you will not make them log in again (unless they were away for an extended period of time) and their shopping cart will contain the items they had selected on the previous visit.
	*   You must implement some way to enable the user to logout without checking out. After checking out the user is always logged out and their shopping cart is emptied or destroyed. 
    *   **Extra credit: When the user logs in, put the user back on the page they were at during the last visit. Say what time they last were at your store. If they had items in their cart previously without checking out they should still be there.**
*   _**Security**_
    *   A customer should not be able to checkout without first logging in. If a user registers, automatically log them in.
    *   A user should automatically be logged out after some reasonable period of inactivity (no less than 5 mins and no more than 30 mins). This is to avoid enabling someone to access a users account if they left their machine/phone for an extended period of time or if they are using a shared/public machine.
    *   Use sessions or cookies this time to keep the customer from doing a checkout without being logged in. It should not matter if the customer came from the login or registration page or any other page. The user should be able to login or register at any time before checking out. If they try to checkout without being logged in, redirect them to login.
    *   Think of the basic ways a hacker might try to gain access to the system, get user information, or crash the system so it cannot be used (denial of service attack). Add defences against this. For example, do not allow a user to use more than a reasonable number if characters in a textbox (imagine if someone entered a million characters as their user name!). Another example is do not let users enter characters that are used for special purposes such as separators in your registration data. e.g. 'my;hacked;user;name' could cause major issues if the data format uses ';' as separators. Even worse, do you allow anyone to access the user registration data? Perhaps you put it in the document root for your static web server?
    *   **_Extra credit: Protect passwords and user ID's from being viewed by doing some kind of encryption._**

*   _**Sending email using JAVASCRIPT**_
    *   You will likely want to use the nodemailer module (https://nodemailer.com/about/). You are welcome to find and use other mail functions or examples from the net. Whatever works!
    *   When mailing from JAVASCRIPT you must specify a valid SMTP server. For computers on the UH network (like db-itm.shidler.hawaii.edu) you can always use `mail.hawaii.edu` but when your server is not running on the UH network this SMTP server will likely be blocked and your email will fail to send. It is possible to use Gmail's SMTP server (smtp.gmail.com) but it would need to use your gmail (or UH) username and password to authorize and access.
    *   You may also need to set the "From:" mail header. If you get a warning saying that mail could not be sent due to missing "From" header, then add it to your mail command. 
    *   Hint: to send your receipt via email, use the same receipt that you print now. Create the receipt as a string rather than printing directly to the screen and then print this string then you can also use it as the message parameter for mail().
    *   Make sure you test sending email on both your local machine and the itm-vm server!
*   Extra credit: Editing of user information:
    *   If a user goes to the registration page and they are logged in it should at least let the user view their registration information (except password!). If the user is not able to update their information, make sure the register submit button is not enabled or not displayed at all. Also the textboxes should be disabled or not used. For extra credit, enable the user to change information they registered after logging in. The updated information should be saved.  
        _The information kept for each user is: username, full name, password, email._
    *   _**Hint: You can likely modify the existing registration page to display the user's information. Start by reading the user's information then setting the "sticky" form values to the information just read.**_

**Shopping cart use-cases**
Your shopping cart must be able to do the following:
*   View the cart's contents and total cost (list of items bought, tax, and other charges)
*   Add items to a shopping cart
*   Remove items from the cart
*   Check out and purchase

There is no requirement in how the above are done. Just that it is possible. You do not need a separate cart editor page. For example, you may allow the user to edit the invoice page. Note that many of the cart functions will already be handled in the product pages.

**Check-out use-case scenario:**

*   Display the contents of the cart along with the tax and total cost breakdown in an invoice page and ask the customer if they accept_before completing a transaction._
*   If the customer accepts the terms, send them to a confirmation page (with all the user's information and the invoice) and automatically send the customer the confirmation in an email using the mail function**(see page 111 and 236 of your JAVASCRIPT textbook)**
*   Finally, destroy all variables in the session so that when the user returns, the cart is empty.
*   **_Extra Credit: If items are not checked out (purchased) in some amount of time (you decide how long), remove the user's session and notify the user that their shopping cart has been emptied (Session Expiration)_**

**Final steps:**

Run and test your program before and after uploading to the class Web server. To test you must place all your files in the Assignment3 folder on the class web server,using the itm352student account, in a sub-folder called <Lastname\_team\_member1>_<Lastname\_team\_member_2>  
  

**Submission:**  
Submit a single zip file containing all your code and any other necessary files (e.g. images)to Laulima Assignment 3 AND post to the class website  
  

**_VERY IMPORTANT:_**You should still have the username "itm352" with password "grader" set in your program to enable grading of your assignment. And you should still have either index.html or index.htm to start your program.

_**Checklist:**_

*   Put author's name(s) and program description as comments in files
*   Meaningful comments throughout; good formatting and variable names  
*   Credit for use of others' code. Do not copy an Assignment 3 from a previous class. They will not meet the current requirements and you will ruin your experience in designing and constructing a full web application! 
*   No parse errors or warnings
*   Sensible design for use of sessions and cookies
*   Good modularization
*   Reasonable file name(s)
*   Good UI design
*   No incorrect output
*   Good data validation (does not allow invalid choices)
*   No extra (unused) files
*   No redundant data
*   All major assignment requirements met
*   All minor assignment requirements met
*   Redirect to appropriate page after successful login
*   Redirect to appropriate page after successful registration and automatically log in new user
*   Fixed shortcomings in Assignment #2
*   Each page after login should display the user's name or other personalization info, login status, and shopping cart info (at least # of items) no matter which page the user came from (even outside the application)
*   When checking out, the invoice should thank the customer personally for their order
*   Customer should not be able to view non-checkout pages without first logging in or registering
*   At least 4 pages with at least 3 products or services on each page
*   Allow users to choose more than one of each of 3 products or services
*   Provide shopping cart functionality  
*   Must be able to add items to the cart when looking at products or services
*   Must be able to view the cart's contents 
*   Can remove items from the cart when viewing
*   Displays a check out and purchase option when viewing cart (which may be the same as product pages)
*   Displays the contents of the cart along with the tax in an invoice page and ask the customer if they accept
*   Displays the invoice and ask to accept terms before final checkout and email of invoice
*   (extra credit) Allows users to edit their registration information (edits should be saved)
*   Email order confirmation page with complete invoice information
*   Destroy all variables in the session so that when the user returns (logs in) the cart is empty
*   Update of authorship from previous assignments
*   DID YOU TEST THAT EVERYTHING WORKS WHEN INSTALLED ON THE CLASS server?
*   (extra credit) Timed session expiration
*   (extra credit) Encrypt passwords