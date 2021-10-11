--- 
title: "Assignment 1" 
published: true 
morea_id: experience-Assignment1
morea_type: experience 
morea_summary: "Build a Simple Product Selection Application"
morea_sort_order: 3 
morea_labels:
 - Assignment
morea_start_date: "2021-03-12"
morea_end_date: "2021-03-30"
---
 

### Assignment 1: Creating an e-Commerce Web-site


#### Scenario:
The marketing director of a company selling <<_you choose the product_\>> approaches you to help her design an e-commerce website for his company. She asks you to design a website that will display _at least_ _5 different products or services_ to the user, from which they can choose _multiple quantities_ of any combination of the products or services. She asks you to perform a check to make sure that the user has entered _valid quantities_ and to then calculate the sales total, including tax and shipping/handling costs.

After completing this assignment, you should have learned the following:

*   Inventing and implementing a complete information system  
*   Building a reasonable user interface
*   Processing user input
*   Interpreting and following development requirements

**Note:** You will not need to provide the actual products/services. However, you should build your application as if it will be used for this! 

_The main requirements for this assignment are the following:_

1.  Use arrays (of objects) to display items in a table.
*   Use forms to process information. 
*   Allow users to select and process multiple products/services.

**Getting Started:** You can either choose to create a project on your own that meets the above requirements or you can follow the step-by-step guide below to help you create the project.

_**VERY IMPORTANT:**_ _You must comment all of your code!_  You may even want to create a comment on what you are trying to do before you code. The comments are for explaining what your code is used for in the program. This way when we help you, we will know what is going on. Not only because this is required, it will also help you later on when working in group projects. It may be hard for others to understand your code without clear, detailed comments. _Also remember to include your name (as author), date, and a brief description of what the code does at the top of the file._

**Part (A)**

(0) Create a directory for your application. You *MUST* name it `<your lastname>_<your firstname>_Assignment1`. This is needed for when you deploy your application on the ITM-VM server.

(1) Make a JSON object for each of your products and include the relevant details for the product such as name, "price", description, etc. You will need to identify each item you are offering by a unique name or number.  

_ Example_ :

If you were selling cell phones, for each phone you would make an array containing all that particular product's information such as name/"model" number, maker (e.g. Huawei, Samsung, Apple), description, "price", "image", etc. Such as

```JSON 
{  
  "model":"Apple iPhone XS",  
  "price": 990.00,  
  "image": 'AppleXS.jpg'
} 
```

(2) Then you should make a "master" products array to hold all of the products you created in step (1).  In other words, you will create an array of objects.  
  

_Example_ :

Continuing with cell phone example, you would make a JSON array that holds all of the individual cell phone objects.
```JSON
[
  {  
  "model":"Apple iPhone XS",  
  "price": 990.00,  
  "image": 'AppleXS.jpg'
  },
  {  
  "model":"Samsung Galaxy",  
  "price": 240.00,  
  "image": 'Samsung_Galaxy.jpg'
  }
]
```
If you plan on using only one file to both display products and create an invoice in response to user selections (i.e. a self-processing page), then assign your JSON array to a variable, say `products_array` and put it at the top or bottom of your file. If you plan on using different files to display products and and then process an invoice, save the JSON array in a file, say `products.json` and then load it at the top of the file where you need the data using `let products_array = require('./product_data.json');` However you get the JSON array, you can then loop through the it with either `for()`, `while()`, or `.foreach()` to display the descriptions of the items.  

**NOTE for Spring 2021** You may use a javascript file like `products_data.js` in the (SmartPhoneProducts3)[https://dport96.github.io/ITM352/morea/100.Objects-Arrays-I/experience-SmartPhoneProducts3.html] WOD if you are not using a server. 

(3) Create a server to serve your application. This includes serving your products data (in whatever manner you choose), display products page, validating purchase data, and providing an invoice for a purchase. Your server *MUST* be named `server.js`. This is needed for when you deploy your application on the ITM-VM server.

**NOTE for Spring 2021** Using a server is optional. If you are not going to use a server to process the products form, use the following for your `server.js` file:
```Javascript
var express = require('express');
var app = express();

app.use(express.static('.'));
app.listen(8080, () => console.log(`listening on port 8080`));
```

_Example_ :

The cell phone display may look something like this (you should always include "image"s of each product but you do not need to have any product filtering as is shown here):  

<iframe src="SmartPhoneProducts3/products_display.html" style="height:375px;width:320px;" scrolling="no" frameBorder="0"></iframe>  

See [SmartPhoneProducts3](../100.Objects-Arrays-I/experience-SmartPhoneProducts3.html) or right-click on the above frame and view it's source for an example of generating a page from a JSON array of product data. 

For Assignment 1 the products data might be loaded as Javascript from the server by placing the following HTML at the top of the file needing the data:
```HTML
<script src="./product_data.js" type="text/javascript"></script>
```
The JSON data is assigned to the `products` variable and saved in the file `product_data.js` which is made available by the `GET` request to the server (this could be as simple as placing the file in the servers document root if you set up a static file web server):
```Javascript
products = 
[
  {  
  "model":"Apple iPhone XS",  
  "price": 990.00,  
  "image": 'AppleXS.jpg'
  },
  {  
  "model":"Samsung Galaxy",  
  "price": 240.00,  
  "image": 'Samsung_Galaxy.jpg'
  }
];
```
See [Lab 13 Excercise 3c](../115.Server-side-processing/experience-server-side-form-processing.html) for an example.

**Part (B)**

(1) Create an HTML form to ask customers which items they wish to purchase and process this form.  

(2) Either use a combination of an HTML file and Javascript files, or use a single "self processing form" that can both generate a form and process it.

(3) The form displayed will allow customers to select the item that they want and the quantity they want in a text box. You will also need a submit button on the form.  

(4) **The form must be submitted to the server as a POST.** While it is possible, and maybe even convenient to use a GET, for this assignment, you must process the form data (eventually) on the server though a POST request. 
  

_Example_ :

For the cell phone example, we might change the display to allow for customer input as shown below:  

 <iframe src="SmartPhoneProductsA1_Example/products_display.html" style="height:375px;width:320px;" scrolling="no" frameBorder="0"></iframe> 

See [Lab 13 Ex. 4 for an example of multiple form inputs and processing](../115.Server-side-processing/experience-server-side-form-processing.html) or right-click on the above frame and view it's source for an example of getting and processing form data. 

(5) You **must use data validation** on the **server** to ensure the customer entered valid data.  Note: if valid data is not entered, display a specific error message and direct the user to enter valid data. And you must do this validation in your Javascript code **on the server**. For this assignment you can not, for example, use a drop-down list to constrain a user to enter only integer quantities. The data must be validated _before_ it is used for the invoice. You cannot just validate the data on the client unless you can guarantee your data comes from that client.

**NOTE for Spring 2021** You do not have to validate the data on the server. You still **must** validate the data before generating the invoice, but this can be done on the products display page or invoice page.

_Example_ :

For the cell phone example, you should make sure that the customer entered valid quantities in the quantity boxes for each item # (1 to 5) or anything at all. If the customer entered -2.3 for item #1, you might display "Please input a non-negative integer" and enable the customer to re-enter number.

(6) Once you have ensured the customer has entered valid data on the server, you then display the purchase information in an invoice. Don't forget to include tax and shipping if necessary. But specify that the tax and/or shipping are unique to the order (don't just use a fixed shipping cost for any purchase). All output should be properly formatted (e.g. if there was a dollar amount such as $125.39 it should have two decimal points and a dollar sign).  
  

_Example_ :

<iframe src="SmartPhoneProductsA1_Example/invoice.html?quantity0=2&quantity1=&quantity2=33&quantity3=-3&quantity4=33&purchase_submit=Purchase%21" style="height:375px;width:320px;" scrolling="no" frameBorder="0"></iframe> 

See [SmartPhoneProducts3t](../100.Objects-Arrays-I/experience-SmartPhoneProducts3.html) for an example of processing an invoice from an array of products and quantities or right-click on the above frame and view it's source for an example. You do not have to generate the invoice exactly in this way. You may generate the invoice page on the server (either directly or from a template), or generate it on the client (but you still must collect and validate the form POST data on the server). 

**NOTE for Spring 2021** You do not have to validate form POST data on the server. You do not have to POST the form (you may use GET).

**IMPORTANT NOTE**
You **may* use code from the above examples providing that you clearly specify a reference as code comments in the places where the code is used in your application. You *must* not use the same design for the interface and you do not want to copy the design for processing the form as it will *not* meet the requirements for this assignment. If you use code without providing a clear reference from any source, including code provided in class examples and labs, your assignment score will be severely penalized. If you copy the Assignment1 examples and just change the data and the images you will receive 0 points for the assignment.  

(7) When you have a fully functional store (products page and invoice), choose a site template and re-design your website. It is suggested you use a [W3 Schools template](https://www.w3schools.com/w3css/w3css_templates.asp), however you may use any template you wish (such as [Bootstrap Templates](https://www.w3schools.com/bootstrap/bootstrap_templates.asp)). **NOTE** You *may not* just copy the design in the Assignment1 examples or WODs and substitute your products/services. These do not use templates! Also the design is awful.


**_Checklist:_**

After completing the assignment make sure that you have addressed all of the below. Note: Having all of these does not guarantee an 'A' but you _must_ have them.

*   Meets all functional requirements (displays products, allows user to select product, allows user to select quantities, displays invoice with sensible tax and shipping charges along with totals, uses server to share products data and validate purchase data)
*   Commented--get in the habit now!  Put author's name and program description as comments in files. Credit given to original author when using "borrowed" code.
*   Used descriptive file names and meaningful variable names.
*   Employs good code formatting.
*   Defined and used arrays and objects for your item inventory.
*   Created tables via array data and loops.
*   Good data validation (does not allow invalid choices, responds appropriately to invalid data).
*   Good user interface design (easy to use and intuitive)
*   No extra files or redundant data.
*   Correct output. No parse errors or warnings.
*   Tested on the class server, using the itm352student account, saved in a folder with your name in the Assignment1 sub-folder
*   Use a website HTML template to make your site look attractive and flexible. 
* (OPTIONAL: EXTRA CREDIT) Have a fixed quantity of products available in your products data. Do not allow purchases of more than is available.  
    

**_ONE LAST TIME:_** You _must_ comment all of your code (you may even want to create a comment on what you are trying to do before you code). The comments are for explaining what your code is used for in the program. That way when we help you, we will know what is going on. Not only because this is required, this will also help you later on when working in group projects because it may be hard for others to understand your code. _Also remember to put your name (as the author of the code) and program description in the first part of your comments._

**Submission:**  
See the Assignment 1 instructions on Laulima. Note that you will need to make your code available and deploy it on ITM-VM for the grader.