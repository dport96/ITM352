---
title: "Lab: Server Side Form Processing and Web Applications"
published: true
morea_id: experience-server-side-form-processing
morea_type: experience
morea_summary: "Using Javascript for web services"
morea_sort_order: 4
morea_labels:
 - Lab Lecture
morea_start_date: "2022-10-18"
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
Create a Lab12 folder in your repo and a new file SimpleServer.js and copy the following into this file:

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

b) Does the request matter? How is the route for the HTTP request handled? Explain the the output you see in the terminal. Where does this output come form? Why doesn't `console.log()` in the server output to the browser console? Explain what the `req` and `res` objects are and where they come from.

c) When you do a "view source" in the browser, where did the Javascript code executed on the server go ? Why isn't it inside a `<script>` tag? Can you use DOM objects on the server?

d) Change `Date.now()` to `Date()`. Save the file and refresh the browser. Why didn't you see the changes? Stop and restart the server. Why didn't you see the changes? Now refresh the browser page and explain why you now see the changes.

**NOTE** You may wish to install and use the npm application `nodemon` to automatically restart node after changes are saved in a file.

#### Exercise 2: A Better Server Side for Web Applications

a. To do server side processing for a Web application we must set up the server to handle any request. Express makes setting up a web server for a web application easy. Install Express using `npm install express` in your terminal. Let's start things by setting up a server that will respond to any HTTP request by sending back the type of request and the URL path from the request. Put the following code in a file called `info_server_Ex2a.js`:
```Javascript 
var express = require('express');
var app = express();
app.all('*', function (request, response, next) {
    response.send(request.method + ' to path ' + request.path);
});
app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback
```
In the terminal, start the server `node info_server_Ex2a.js` and then in a browser try various URLs such as `localhost:8080` and `localhost:8080/xxx/yyy`. What is the response you get and why? Explain how express generally handles an HTTP request (discuss routing via `app.<HTTP request>()`, middleware via `app.use()`).

b. Add a route to match with a `GET` request to the path `test`.  Put this above the `app.all()` route. Test it with and without `test`.Explain why the `app.all()` route does not get handled anymore. Now move it below `app.all()` to and verify you get the expected response. Now add `next();` after the response in `app.all()` and explain why you get an error in the console output. Now change the `response.send()` to `console.log()` in `app.all()` and explain why this no longer throws an error. It is recommended that you put this `app.all()` code in when you are developing a web app to see what requests the server is receiving. 


c. [Using middleware] Now we will enable the server to respond to request for static files (files that are not intended to have any server-side processing) that are located in a directory called `public` (this is often called the "document root" directory). We will do this by making use of Express `static` middleware component. Make a copy of `info_server_Ex2a.js` and name it `info_server_Ex2c.js` 

Before the app.listen add the following add the following:
```Javascript
app.use(express.static(__dirname + '/public'));
```
Terminate the previously running server (with ctrl-C) and run `info_server_Ex2c.js`. Create a simple html file `hello.html` that outputs `<h1>Hello from <your name>!</h1>` and save it in the `public` directory. Use a browser with the following URL `http://localhost:8080/hello.html` and see what response you get. Try `localhost:8080/xxx` and explain what response you get. Make a copy of `hello.html` and rename it `hello.txt`. Now try `localhost:8080/hello.txt` and explain the response. Change `<your name>` to your full name in `hello.html`. Save the file and reload the page. Why didn't you have to stop and start the server to see the changes? Do you think the `app.use()` middleware must be placed at the bottom of the routing functions?

d. Copy your `order_page.html` from the HTML Forms lab into  `public` (you may also use your products order page for Assignment 1 or `products_display.html` from the Store1 WOD). Why do you need top put this here? Put `localhost:8080/order_page.html` in your browser and submit the form. Look at the `console.log` output and the response you get and explain what you see. Now change the action of the form to be `hello.html` with `GET` as the method. Save the file, refresh the page, then submit the form. Explain how this works it terms of a request to  the server, processing on the servers, and the response from the server. Be sure to discuss how the express.static() middelware is involved. What do you see in the address box in your browser? Did the query string come form the server or the request to the server when you submitted the form?

e. In `order_page.html` change the method in the form to `POST`, save and reload the page and submit. Look at the console output from the server and explain why the `hello.html` page no longer appears. What do you see in the address box in your browser? Explain this.


#### Exercise 3: Server Side Processing of Form Action

a. Make a copy of `info_server_Ex2c.js` and name it `info_server_Ex3.js` and add the following code after the `app.all()` statement (why after and not before?):
```Javascript
app.post("/process_form", function (request, response) {
   response.send(request.body); 
});
```
Now run `info_server_Ex3.js`.   In `order_page.html` change the action in the form to `process_form` and make sure the method in the form is `POST`, save and try `localhost:8080/order_page.html` in a browser and submit the form. Explain why the page appears even though there is no file named `process_form` in `public`. Explain why you do not need to use `process_form.html` in the action. How does the browser know that the response from the server is content-type text/html? What if you wanted the content-type to be text/text (hint: what would happen if you added `res.type('txt')` before `res.send()` in your `process_form` route?)?

**IMPORTANT NOTE**
You will notice that the `request.body` is empty. Unfortunately Express does not decode the body of an HTTP request by default so you will need to write this yourself or add the express `urlencoded` middleware with the code below: 
```Javascript
app.use(express.urlencoded({ extended: true }));
```

Now restart `info_server_Ex3.js` and try `localhost:8080/order_page.html` and verify that that you get the post data from the what you typed into the textbox after submitting the form. 

Congratulations! You have just done server-side processing of a POST from a web form.

b. In `info_server_Ex3.js` delete the `response.send(request.body);` statement and replace with:
```Javascript
    var q = request.body['quantity_textbox'];
    if (typeof q != 'undefined') {
    response.send(`Thank you for purchasing ${q} things!`);
    } 
```

Try `localhost:8080/order_page.html` with valid and invalid quantities and verify that it works as expected. How can you test that the check for `quantity_textbox` in the POST request works as expected?

c. How could we validate the data from the POST on the server? Copy the function `isNonNegInt()` from the functions Lab (or form the Invoice3 WOD) and paste it into the top or bottom of `app.post()`. Use this function in an if-statement to check if `q` is a non-negative integer. If not, respond with `Error: ${q} is not a quantity. Hit the back button to fix.`.


#### Exercise 4: Micro-services and web applications 
Often you need to do complex processing and responses on the server. A good design practice to help manage this is to separate out functionality and provide **micro-services.** 

Make a copy of `info_server_Ex3.js` and name it `info_server_Ex4.js`. 

a. [Shared data micro-service] You often have to use the same data in multiple places. It's always best to have one central source for shared data rather than duplicate sources, especially if this data is dynamic (changes frequently). For web applications, the common way to handle this is providing a data service on the server (sometimes called a **micro-service**). The data source can be a code, a file, accessing a database or more generally another server (such as a directory server). Let's implement a basic data service for our web application that shares product information for use in a form and the processing the form. For JSON data an easy way to do this is put the JSON into a file as a variable and load it in as a module. Get the `products_data.js` file you used in [SmartPhoneProducts3](../100.Objects-Arrays-I/experience-SmartPhoneProducts3.html) and copy it in your directory with `info_server_Ex4.js`. Change the name of this file to `product_data.json` and remove all Javascript and leave only the JSON.

After `app.all()` in `info_server_Ex4.js` put 
```Javascript
var products = require(__dirname + '/product_data.json');

app.get("/product_data.js", function (request, response, next) {
   response.type('.js');
   var products_str = `var products = ${JSON.stringify(products)};`;
   response.send(products_str);
});
``` 

and in the function for the post route for `process_form` add to the top
```Javascript
let brand = products[0]['brand'];
let brand_price = products[0]['price'];
``` 


Replace the response with `<h2>Thank you for purchasing ${q} ${brand}. Your total is \$${q * brand_price}!</h2>` and now try out different quantities.

In the head tag of `order_page.html` add the line `<script src="./product_data.js"></script>`. Note that the path does NOT include the `public` directory. Why is this? Before the form (or in the top of the form) add 
```Javascript
document.write(`<h3>${products[0]["brand"]} at \$${products[0]["price"]}</h3>`);
````
Reload  `order_page.html` and verify that the Apple iPhone XS product is used in both the form and response to processing that form. Now change some of the information for the 0th element in `product_data.json` and verify that both `order_page.html` and `info_server_Ex4.js` use the updated information. How would you change which product in the JSON data is being used here?

c. [Shared dynamic data micro-service] Let&quot;s say you want to keep track of how many of each item have been purchased and display this on the `order_page.html`. Rather than create a new micro-service for this, we will use the existing `product_data.js` micro-service by noting that the `products` array variable is loaded into memory when the server starts. If it is modified, the modified array is what is provided by the `product_data.js` micro-service and not the original `product_data.json` file (why?).

In `info_server_Ex4.js` start by adding `products.forEach( (prod,i) => {prod.total_sold = 0});` to add a `total_sold` property to each product object after the `products` is defined. Now, in the route for `process_form`, before you generate the receipt, add the quantity purchased to the `total_sold` property for that product. Make sure you cast or convert the quantity purchased to a `Number` (why?). Stop and restart your server (why?).

Lastly, add 
```Javascript
    for (i in products) {
        document.write(`<h4>${products[i]["total_sold"]} ${products[i]["brand"]} have been sold!</h4>`);
    }
```
to `order_page.html` above the quantity textbox. Reload `order_page.html` and test that the total sold values change after every purchase.

#### Exercise 5: Passing data to client from a server
There are often times you will want to pass data from the server to a client. Unfortunately, HTTP does not support "push" data from the server (at least HTTP/1 does not). That is, you cannot just send data to the client, even if you have an open connection from the server to the client. Because of this, data can only be passed from the server to the client in response to a request. There are generally two ways to do this. One way is to put the data into a query string and have the server re-direct to the page that needs the data adding this query string. Another way is to have the page *fetch* the data from a micro-service. The difference is that the first way will leave the page (the current document will be overwritten) while the second will stay on the page (the current document remains). We will try the query-string approach since it is simpler.

Make a copy of `info_server_Ex4.js` and name it `info_server_Ex5.js`. Start by copying the code in the route for `process_form` on your server that generates the receipt (including the `isNonNegInt` function) into a new file `receipt.html` and put this in the `public` directory (you may also use your invoice page for Assignment 1 or `invoice.html` from the Store1 WOD). At the top of this file load the `products` data as done in `order_page.html` and also add the code:
```Javascript
        let params = (new URL(document.location)).searchParams;
        var q = params.get('quantity');
```
This code will read the query string and place the keys and values into a URLSearchParams object (`params`) for easy access to the data in the query string. Now remove any use of `request` (you are on the client now so this is not defined) and replace all uses of `response` with `document.write` (again, you are on the client which is the receiver of a response). Remove the code that increases the `total_sold` (yup, this is a server side thing and cannot be done in the client).

On your server, replace the `response.send()` with `response.redirect('receipt.html?quantity=' + q);`. This will tell the browser (the client) to do a GET request for the file `receipt.html` with a query string with key `quantity` and value whatever is in the variable `q` (which is the quantity purchased). Quit and restart the server, reload `order_page.html` to test.


d. Modify the response on the server to redirect back to `order_page.html` when there is an error with the query string `?error=Invalid%20Quantity&quantity_textbox=' + q`. In  `order_page.html` where you check if the query string has `quantity_textbox`, also check if the query string has key `error` and put its value in an alert panel (i.e. "Invalid Quantity").

(**Extra Credit**) Create a micro-service to validate a quantity and respond an invoice. Have `order_page.html` fetch the invoice and display it after the purchase button is pressed. This should be done without leaving (or reloading) `order_page.html`. Hint: do not have an action for the the form or change it so that it does the fetch to the micro-service rather than POST to the server.

#### Exercise 6: Processing multiple inputs (On Your Own) 
Let's make it possible to select quantities of a product from the shared products data. Copy `info_server_Ex5.js` and name it `info_server_EC.js`. Copy `order_page.html` and rename it `order_page_multiple.html`. 

Task 1: Make `order_page_multiple.html` display inputs for all products in `product_data.json`. Replace the `<form>` element with
```HTML
    <form name='quantity_form' action="process_form" method="POST">
        <script>
            for (i in products) {
                document.write(`<h3>${products[i]["brand"]} at \$${products[i]["price"]} (${products[i]["total_sold"]} sold)</h3>`);
                document.write(`
        <label for="quantity_textbox">quantity desired:</label>
        <input type="text" name="quantity_textbox[${i}]" onkeyup="checkQuantityTextbox(this);">
        <span id="quantity_textbox[${i}]_message">Enter a quantity</span>
        `);
            }
        </script>
        <br>
        <input type="submit" value='Purchase'>
    </form>
```
Now replace the `checkQuantityTextbox()` with
```Javascript
        function checkQuantityTextbox(theTextbox) {
            errs = isNonNegInt(theTextbox.value, true);
            document.getElementById(theTextbox.name + '_message').innerHTML = errs.join(", ");
        }
```
Run `info_server_EC.js` and request `order_page_multiple.html` and verify that all the products in `products.json` display. Test the `checkQuantityTextbox` function by trying vaid and invalid quantities. Review the changes made in the code and make sure you understand why were made and how they work!

Task 2: Process multiple quantities of products from the submitted form. In `info_server_EC.js` replace the code in the callback function in the route for post to `/process_form` (i.e. in the `{}`'s for `app.post("/process_form", function (request, response)` with
```Javascript
    receipt = '';
    let qtys = request.body[`quantity_textbox`];
    for (i in qtys) {
        q = qtys[i];
        let brand = products[i]['brand'];
        let brand_price = products[i]['price'];
        if (isNonNegInt(q)) {
            products[i]['total_sold'] += Number(q);
            receipt += `<h3>Thank you for purchasing: ${q} ${brand}. Your total is \$${q * brand_price}!</h3>`; // render template string
        } else {
            receipt += `<h3><font color="red">${q} is not a valid quantity for ${brand}!</font></h3>`;
        }
    }
    response.send(receipt);
    response.end();
```
**Note: do not delete the isNonNegInt function definition if you put it here.**

Run `info_server_EC.js` and try entering quantities for the products displayed! Do you see how things are connected through the shared data in `product_data.json`? Did you see how naming your form elements with `[]`'s puts all the form data into an array? By the way, you can use this to create objects. Just use strings rather than numbers in `[]`.

**extra credit** When there are errors, see if you can pass the data and errors back to `order_page_multiple.html` to display problems and allow the user to fix and resubmit the form. You can do this by making a copy of the products array, adding an `errors` property for each product with values the errors (if any), then generating a query string from this new array (you can use a `URLSearchParams` to conveniently create a query string from the new array).
