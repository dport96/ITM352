--- 
title: "Assignment 1 workshop" 
published: true 
morea_id: experience-Assignment1_workshop
morea_type: experience 
morea_summary: "A workshop on building a Simple Product Selection Application"
morea_sort_order: 4
morea_labels:
 - Workshop
 - Follow Along
morea_start_date: "2021-11-09"
---
Before this workshop you should have started Assignment1 and have at minimum:

- JSON file of product information
- a page that displays your products
- an invoice page that uses quantities and products
- a server.js file that sets up a static page server and displays requests received

**Some advice on obtaining the above can be found in the [getting started with Assignment1 screencast](https://youtu.be/3YJsgGSL_uc).**

Download and open the [Assignment 1 Workshop slides](A1_Workshop_ITM352.ppt).

You may wish to download, unzip, and copy into your project folder the [Design examples for Assignment1](Assignment1_Design_Examples.zip) 

This workshop will discuss three architectural designs for Assignment #1:

![architectural designs](architectures.png)

Miscellaneous other useful things for Assignment #1 will also be discussed.

`server.js` for the workshop
```Javascript
var express = require('express');
var app = express();

var myParser = require("body-parser");
app.use(myParser.urlencoded({ extended: true }));

// load product info
var products_array = require('./products.json');

app.get("/public/product_data.js", function (request, response, next) {
   var products_str = `var products = ${JSON.stringify(products)};`;
   response.send(products_str);
});

// Routing 

// monitor all requests
app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});

// Serve up products_array in memory as JS for loading in client script
app.get("/products.js", function (request, response, next) {
   var products_str = `var products_array = ${JSON.stringify(products_array)};`;
   response.send(products_str);
});

// Process POST request from purchase form. Form element name is assumed to be quantity_textbox 
app.post("/purchase", function (request, response) {
   let POST = request.body;
   if (typeof POST['quantity_textbox'] != 'undefined') {
       q = POST['quantity_textbox'];
       if(isNonNegInt(q)) {
         response.send(`Thank you for purchasing ${q} things!`);
       } else {
         response.send(`${q} is not a quantity!`);
       }
   }; 
   response.end();
});

// route all other GET requests to files in public 
app.use(express.static('./public'));

// start server
app.listen(8080, () => console.log(`listening on port 8080`));

function isNonNegInt(q, returnErrors = false) {
  errors = []; // assume no errors at first
  if (Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
  if (q < 0) errors.push('Negative value!'); // Check if it is non-negative
  if (parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
  return returnErrors ? errors : (errors.length == 0);
}
```