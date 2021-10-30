---
title: "Lab 13: Server Side Form Processing and Web Applications"
published: true
morea_id: experience-server-side-form-processing
morea_type: experience
morea_summary: "Using Javascript for web services"
morea_sort_order: 4
morea_labels:
 - Lab Lecture
morea_start_date: "2021-11-02"
---
# Lab objectives
- Learn to use the Express Framework
- Understand server-side form processing
- Processing form data from GET, POST, and server-side data validation
- Creating and using micro-services in web applications

### Instructions: 
Open the [presentation slides](ITM352_Web_Services.ppt). 

We will work through these exercises and address any questions and provide examples. When asked by the instructor do the lab exercises listed. Use Javascript unless asked to do otherwise.

Do all your code work in VSCode unless otherwise instructed. Please ask the instructor for help if you get stuck this is **NOT** a test.

Copy code and submit your answers on Laulima


#### Exercise #1:
Create a Lab13 folder in your repo and a new file SimpleServer.js and copy the following into this file:

```Javascript
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    console.log(req.headers); //output the request headers to the console
    res.writeHead(200, { 'Content-Type': 'text/html' }); // set MIME type to HTML 
    res.write(`<h1>The server date is: ${Date.now()}</h1>`); //send a response to the client
    res.write('<h1>The client date is: <script>document.write( Date.now() );</script></h1>'); // send another response
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

console.log('Hello world HTTP server listening on localhost port 8080');
```

Open a terminal and run it using node.js. Open a browser and make a request to localhost:8080

a) Why is this a "dynamic" web page? What is processed on the client and what is processed on the server? Why are the dates different even though they are obtained from the same clock (on the same machine)? What would happen if the server was run on a different machine than the browser?

b) Does the request matter? How is the route for the HTTP request handled?

c) When you do a "view source" in the browser, where did the Javascript code executed on the server go ? Why isn't it inside a `<script>` tag?

**NOTE** You may wish to install and use the npm application `nodemon` to automatically restart node after changes are saved in a file.

#### Exercise 2: A Better Server Side for Web Applications

a. To do server side processing for a Web application we must set up the server to handle any request. Express makes setting up a web server for a web application easy. Install Express using `npm install express` in your terminal. Let's start things by setting up a server that will respond to any HTTP request by sending back the type of request and the URL path from the request. Put the following code in a file called `info_server_Ex2a.js`:
```Javascript 
var express = require('express');
var app = express();
app.all('*', function (request, response, next) {
    response.send(request.method + ' to path ' + request.path);
});
app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here
```
In the terminal, start the server `node info_server_Ex2a.js` and then in a browser try various URLs such as `localhost:8080` and `localhost:8080/xxx/yyy`. What is the response you get and why? Explain how express handles routing an HTTP request on the port it is listening to.

b. Add a route to match with a `GET` request to the path `test`.  Put this above the `app.all()` route. Test it with and without `test`.Explain why the `app.all()` route does not get handled anymore. Now move it below `app.all()` to and verify you get the expected response. Now add `next();` after the response in `app.all()` and explain why you get an error in the console output. Now change the `response.send()` to `console.log()` in `app.all()` and explain why this no longer throws an error. It is recommended that you put this `app.all()` code in when you are developing a web app to see what requestes the server is receiving. 


c. [Using middleware] Now we will enable the server to respond to request for static files (files that are not intended to have any server-side processing) that are located in a directory called `public` (this is often called the "document root" directory). We will do this by making use of Express `static` middle Make a copy of `info_server_Ex2a.js` and name it `info_server_Ex2c.js` 

Before the app.listen add the following add the following:
```Javascript
app.use(express.static('./public'));
```
Terminate the previously running server (with ctrl-C) and run `info_server_Ex2c.js`. Create a simple html file `hello.html` that outputs `<h1>Hello from <your name>!<h1>` and save it in the `public` directory. Use a browser with the following URL `http://localhost:8080/hello.html` and see what response you get. Try `localhost:8080/xxx` and explain what response you get. Make a copy of `hello.html` and rename it `hello.txt`. Now try `localhost:8080/hello.txt` and explain the response. Do you think the `app.use()` middleweare must be placed at the bottom of the routing functions?

d. Copy your `order_page.html` from Exercise 4 in Lab 12 to the `public` directory. Change the `action` attribute of the form to `localhost:8080/process_form`. Make sure `method="POST"` in the form tag. Try `http://localhost:8080/order_page.html` in your browser and submit the form. Look at the console.log output and the response you get and explain.


#### Exercise 3: Server Side Processing of Form Action

a. Make a copy of `info_server_Ex2c.js` and name it `info_server_Ex3.js` and add the following code after the `app.all()` statement:
```Javascript
app.use(myParser.urlencoded({ extended: true }));
app.post("/process_form", function (request, response) {
   response.send(request.body); 
});
```
Unfortunately Express does not provide functions to decode the body of an HTTP request so you will need to write this yourself or add one. Fortunately there's a good one available! In your terminal (and be sure you are in the directory where `info_server_Ex3.js` is located), type `npm install body-parser`. After the installation is complete, in `info_server_Ex3.js` add the statement `var myParser = require("body-parser");` after the `var app = express();` statement. Now run `info_server_Ex3.js`. Try `localhost:8080/order_page.html` and verify that that you get the post data from the what you typed into the textbox after submitting the form. If this works, you have just done server-side processing of a POST from a web form. Congratulations!

b. In `order_page.html` cut the code that checks query string for `quantity_textbox` into `info_server_Ex3.js` (the `if (typeof GET['quantity_textbox'] != 'undefined'))` statement) and paste it **over** the `response.send(POST);` statement (i.e. delete the statement) in `app.post()` and change `GET` to `POST`. Copy the function `isNonNegInt()` from `order_page.html` and paste it into the top or bottom of `app.post()`. Change the ``document.write(`Thank you for purchasing ${q} things!`)`` to ``response.send(`Thank you for purchasing ${q} things!`);`` and delete `window.stop();` and an ``else response.send(`${q} is not a quantity! Press the back button and try again.`);`` to the if-statement. Try `localhost:8080/order_page.html` with valid and invalid quantites and verify that it works as expected. 


#### Exercise 4: Micro-services and web applications 
Often you need to do complex processing and responses on the server. A good design practice to help manage this is to separate out functionality and provide **micro-services.** 

Make a copy of `info_server_Ex3.js` and name it `info_server_Ex4.js`. 

a. [Separating functionality] It's best not to clutter up the server code with the details of responding to requests. We can always create functions and move the code out of the way or put them in a file and load it in as a library. In `info_server_Ex4.js` cut and paste all the code and move it into a function called `process_quantity_form (POST, response)`. replace all the code in `app.post()` with `process_quantity_form(request.body, response);`

b. [Shared data micro-service] You often have to use the same data in multiple places. It's always best to have one central source for shared data rather than duplicate sources, especially if this data is dynamic (changes frequently). For web applications, the common way to handle this is providing a data service on the server (sometimes called a *&**micro-service**). The data source can be a code, a file, accessing a database or more generally another server (such as a directory server). Let's implement a basic data service for our web application that shares product information for use in a form and the processing the form. For JSON data an easy way to do this is put the JSON into a file as a variable and load it in as a module. In your directory with `info_server_Ex4.js`, create a file called `product_data.json` and put the following data in it:
```JSON
[
  {  
  "model":"Apple iPhone XS",  
  "price": 990.00
  },
  {  
  "model":"Samsung Galaxy",  
  "price": 240.00  
  }
];
```
At the top of `info_server_Ex4.js` put 
```Javascript
var products = require('./product_data.json');

app.get("/product_data.js", function (request, response, next) {
   response.type('.js');
   var products_str = `var products = ${JSON.stringify(products)};`;
   response.send(products_str);
});
``` 

and in the `process_quantity_form()` function add to the top
```Javascript
let model = products[0]['model'];
let model_price = products[0]['price'];
``` 


Replace the response with `<h2>Thank you for purchasing ${q} ${model}. Your total is \$${q * model_price}!</h2>` and now try out different quantities.

In the head tag of `order_page.html` add the line `<script src="./product_data.js"></script>`. Note that the path does NOT include the `public` directory. Why is this? Before the form (or in the top of the form) add 
```Javascript
document.write(`<h3>${products[0]["model"]} at \$${products[0]["price"]}</h3>`);
````
Reload  `order_page.html` and verify that the Apple iPhone XS product is used in both the form and response to processing that form. Now change some of the information for the 0th element in `product_data.json` and verify that both `order_page.html` and `info_server_Ex4.js` use the updated information. How would you change the product being used here?

c. [Shared dynamic data micro-service] Let's say you want to keep track of how many of each item have been purchased and display this on the `order_page.html`. Rather than create a new micro-service for this, we will use the existing `product_data.js` micro-service by noting that the `products` array variable is loaded into memory when the server starts. If it is modified, the modified array is what is provided by the `product_data.js` micro-service and not the original `product_data.json` file (why?).

Start by adding `products.forEach( (prod,i) => {prod.total_sold = 0});` to add a `total_sold` property to each product object after the `products` is defined. Now, in `process_quantity_form()`, before you generate the receipt, add the quantity purchased to the `total_sold` property for that product. Make sure you cast or convert the quantity purchased to a `Number` (why?). Stop and restart your server (why?).

Lastly, add `<h4>${products[i]["total_sold"]} ${products[i]["model"]} have been sold!</h4>` to `order_page.html` after the quantity textbox. Reload `order_page.html` and test that the total sold values change after every purchase.

#### Exercise 5: Passing data to client from a server
There are often times you will want to pass data from the server to a client. Unfortunately, HTTP does not support "push" data from the server (at least HTTP/1 does not). That is, you cannot just send data to the client, even if you have an open connection from the server to the client. Because of this, data can only be passed from the server to the client in response to a request. There are generally two ways to do this. One way is to put the data into a query string and have the server re-direct to the page that needs the data adding this query string. Another way is to have the page *fetch* the data from a micro-service. The difference is that the first way will leave the page (the current document will be overwritten) while the second will stay on the page (the current document remains). We will try the query-string approach since it is simpler.

Start by copying the code that generates the receipt into a new file `receipt.html` and put this in the `public` directory. At the top of this file load the `products` data as done in `order_page.html` and also add the code:
```Javascript
        let params = (new URL(document.location)).searchParams;
        var q = params.get('quantity');
```
This code will read the query string and place the keys and values into a URLSearchParams object (`params`) for easy access to the data in the query string.

On your server, in `process_quantity_form()` replace the `response.send()` with `response.redirect('receipt.html?quantity=' + q);`. This will tell the browser (the client) to do a GET request for the file `receipt.html` with a query string with key `quantity` and value whatever is in the variable `q` (which is the quantity purchased). Quit and restart the server, reload `order_page.html` to test.



d. (**Extra Credit**) Create a micro-service to validate a quantity and respond an invoice. Have `order_page.html` fetch the invoice and display it after the purchase button is pressed. This should be done without leaving (or reloading) `order_page.html`. Hint: do not have an action for the the form or change it so that it does the fetch to the micro-service rather than POST to the server.

#### Extra Credit Exercise 5: Processing multiple inputs 
Let's make it possible to select quantities of a product from the shared products data. Copy `info_server_Ex4.js` and name it `info_server_Ex5.js`. Copy `order_page.html` and rename it `order_page_Ex5.html`. 

Task 1: Make `order_page_Ex5.html` display inputs for all products in `product_data.js`. Replace the `<form>` element with
```HTML
    <form name='quantity_form' action="process_form" method="POST">
        <script>
            for (i in products) {
                document.write(`<h3>${products[i]["model"]} at \$${products[i]["price"]}</h3>`);
                document.write(`
        <label for="quantity_textbox">quantity desired:</label>
        <input type="text" name="quantity_textbox[${i}]" onkeyup="checkQuantityTextbox(this);">
        <span id="quantity_textbox[${i}]_message">Enter a quantity</span>
        `);
            }
        </script>
        <br>
        <input type="submit" value='Purchase' name="purchase_submit_button">
    </form>
```
Now replace the `checkQuantityTextbox()` with
```Javascript
        function checkQuantityTextbox(theTextbox) {
            errs = isNonNegInt(theTextbox.value, true);
            document.getElementById(theTextbox.name + '_message').innerHTML = errs.join(", ");
        }
```
Make sure you understand what changes were made and why!

Task 2: Process multiple quantities of products from the submitted form. In `info_server_Ex5.js` replace `process_quantity_form()` with
```Javascript
function process_quantity_form(POST, response) {
    if (typeof POST['purchase_submit_button'] != 'undefined') {
        receipt = '';
        let qtys = POST[`quantity_textbox`];
        for (i in qtys) {
            q=qtys[i];
            let model = products[i]['model'];
            let model_price = products[i]['price'];
            if (isNonNegInt(q)) {
                receipt += `<h3>Thank you for purchasing: ${q} ${model}. Your total is \$${q * model_price}!</h3>`; // render template string
            } else {
                receipt += `<h3><font color="red">${q} is not a valid quantity for ${model}!</font></h3>`;
            }
        }
        response.send(receipt);
        response.end();
    }
}
```
Run `info_server_Ex5.js` and try entering quantities for the products displayed! Do you see how things are connected through the shared data in `product_data.json`? Did you see how naming your form elements with `[]`'s puts all the form data into an array? By the way, you can use this to create objects. Just use strings rather than numbers in `[]`.
