---
title: "Assignment 3 Code Examples"
published: true
morea_id: reading-code-examples
morea_summary: "Some examples useful for Assignment 3"
morea_type: reading
morea_sort_order: 3
morea_labels:
- Examples
morea_start_date: "2018-11-15T12:00"
---
# Three examples useful for Assignment 3. 
You can copy and paste the code in to VSCode to try these. You are welcome to use this code
in your assignment but _**please do give a reference**_ to what you use.

### Example 1: A simple multi-page products navigation and display. 

#### Note that this example does not require a custom server (unlike your Assignment 3). Much of the code will be simpler and easier to do on the server. Just be aware that you cannot copy this code into your server. The ideas are the same but it will be implemented a bit differently.

#### The first thing is to organize up the data in an easy to use format. Here we have an object with properties (i.e. "keys") are the product types that indicate a group of related products. Each product type key has a value that is an array of product objects that hold the information about a particular product. Instead of an array we could have used an object if we had unique names or id's for the products. This would be helpful if we ever have to "look up" an particular product. With an array you would have to search though it. With an object you would need only see if the unique key for the product exists in the object.

#### Save each of the items below in a file named at the top:

##### save as products.json
{% highlight json %}
{ 
    "gumballs":[ 
        {
            "name": "small gumball",
            "price": 0.1
        },
        {
            "name": "med gumball",
            "price": 0.05
        },
        {
            "name": "large gumball",
            "price": 0.25
        }
    ],
    "jawbreakers": [ 
        {
            "name": "small jawbreaker",
            "price": 0.10
        },
        {
            "name": "med jawbreaker",
            "price": 0.15
        },
        {
            "name": "large jawbreaker",
            "price": 0.35
        }
    ],
    "peanut butter cups": [
        {
            "name": "small peanut butter cup",
            "price": 0.50
        },
        {
            "name": "med peanut butter cup",
            "price": 0.60
        },
        {
            "name": "large peanut butter cup",
            "price": 0.75
        }
    ]
}
{% endhighlight %}

#### This code will load the JSON file of products data from the server and make it available in a web page. You may recall that we couldn't just load the file as a src to a script tag. We had to save the data as javascript code. This is a better way to handle sharing data between the client and server. You could also generate the JSON on the server rather than have it hand over the file.

##### save as functions.js
{% highlight javascript %}
// This function asks the server for a "service" and converts the response to text. 
function loadJSON(service, callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('POST', service, false);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

// This function makes a navigation bar from a products_data object

function nav_bar(this_product_key, products_data) {
    // This makes a navigation bar to other product pages
    for (let products_key in products_data) {
        if (products_key == this_product_key) continue;
        document.write(`<a href='./display_products.html?products_key=${products_key}'>${products_key}<a>&nbsp&nbsp&nbsp;`);
    }
}
{% endhighlight %}

##### save as index.html
{% highlight HTML %}
<head>
<script src="./functions.js"></script> 
<script>
var products_data;
loadJSON('get_products_data', function(response) {
     // Parsing JSON string into object
     products_data = JSON.parse(response);
});
var this_product_key = ''
</script>
</head>
<body>
    Go to: <br>
<script> nav_bar(this_product_key, products_data);</script>
</body>
</html>
{% endhighlight %}

#### Below will display a product page based on the product_key in the query string. The product_key must match a key in products.json for the products to display (this is mostly to automatically create the links on the index.html page). There is also a navigation bar that automatically creates the page links from the products.json keys. 

##### save as display_products.html
{% highlight HTML %}
<head>
    <script src="./functions.js"></script>
    <script>

        // get the query string
        let params = (new URL(document.location)).searchParams;
        if (params.has('products_key')) {
            var products_key = params.get('products_key');
        } else {
            document.write('no products key in query string');
            document.stop;
        }

        var products_data;
        loadJSON('get_products_data', function (response) {
            // Parsing JSON string into object
            products_data = JSON.parse(response);
        });
    </script>
</head>
<center>
    <script> nav_bar(products_key, products_data);</script>
</center>

<script>

    // This function takes a string assumed to be a key in the products array above to display and select the corresponding products
    var order_str = '';
    // get the particular products to display
    products = products_data[this_product_key];
    if (params.has('Submit')) {
        // grab the quantities from the query string
        order_str = 'Your order is:<br>';
        for (i = 0; i < products.length; i++) {
            order_str += `You want ${params.get(`quantities[${i}]`)} of ${products[i]['name']}<br>`;
        }
    } else {
        order_str += `<h1>Please select what ${products_key} you want</h1><br>`;
        // We put the whole table in the form so that anything entered in it will get submitted
        order_str += `
            <FORM action="" method="GET">
            <INPUT TYPE="HIDDEN" NAME="products_key" VALUE="${products_key}">
                <TABLE BORDER>
                    <TR><TD><B><BIG>Description</TD><TD><B><BIG>Price</TD><TD><B><BIG>Quantity Desired</TD></TR>`;

        for (i = 0; i < products.length; i++) {
            order_str += `<TR><TD>${products[i]['name']}</TD><TD>${products[i]['price']}</TD><TD>
                <INPUT TYPE="TEXT"  name="quantities[${i}]"></TD></TR>`;
        }
        order_str += `</TABLE><br>
<INPUT TYPE="SUBMIT"  name="Submit" value="Select">
</FORM>`;
    } // this closes the else for the form and table display
    document.write(order_str);
</script>
{% endhighlight %}


### Example 2: A simple shopping cart example. 

#### Because the quantities are always taken from the session (i.e. the 'cart'), this is also an example of using a session to make a form sticky. 
{% include small-img.html url="shopping_cart_session.png" %}

##### Save this as display_products.html
{% highlight HTML %}
<head>
    <script src="./functions.js"></script>
    <script>
        var products_data;
        var total = 0;
        loadJSON('get_products_data', function (response) {
            // Parsing JSON string into object
            products_data = JSON.parse(response);
        });
        loadJSON('get_cart', function (response) {
            // Parsing JSON string into object
            shopping_cart = JSON.parse(response);
            for (pk in shopping_cart) {
                total += shopping_cart[pk].reduce((a, b) => a + b);
            }
        });

        // get the query string
        let params = (new URL(document.location)).searchParams;
        if (params.has('products_key')) {
            var this_product_key = params.get('products_key');
        } else {
            document.write('no products key in query string');
            document.stop;
        }
        nav_bar(this_product_key, products_data);
    </script>
</head>
<h2>You have <span id="cart_total">0</span> items in your shopping cart</h2>
<script>
    cart_total.innerHTML = total;
// This function takes a string assumed to be a key in the products array above to display and select the corresponding products
    var order_str = '';

    order_str += `<h1>Please select what ${this_product_key} you want</h1><br>`;
    // We put the whole table in the form so that anything entered in it will get submitted
    order_str += `<FORM action="/add_to_cart" method="GET">
                <INPUT TYPE="HIDDEN" NAME="products_key" VALUE="${this_product_key}">
                    <TABLE BORDER>
                        <TR><TD><B><BIG>Description</TD><TD><B><BIG>Price</TD><TD><B><BIG>Quantity Desired</TD></TR>`;
    products = products_data[this_product_key];
    for (i = 0; i < products.length; i++) {
        order_str += `<TR><TD>${products[i]['name']}</TD><TD>${products[i]['price']}</TD><TD>
                    <INPUT TYPE="TEXT"  name="quantities[${i}]" value="${(typeof shopping_cart[this_product_key]!='undefined')?shopping_cart[products_key][i]:0}"></TD></TR>`;
    }
    order_str += `</TABLE><br>
    <INPUT TYPE="SUBMIT"  name="Submit" value="Select">
    </FORM>`;
    document.write(order_str);
</script>
{% endhighlight %}

#### We add a server to handle the sessions to keep track of different users data when they go from page to page. We also use the server to provide "microservices" to give product info and session data.

##### Save the following as server.js
{% highlight javascript %}
var express = require('express');
var app = express();

var session = require('express-session');
var products_data = require(__dirname + '/products.json');

app.use(express.urlencoded({ extended: true }));
app.use(session({secret: "MySecretKey", resave: true, saveUninitialized: true}));

app.all('*', function (request, response, next) {
    console.log(`Got a ${request.method} to path ${request.path}`);
    // need to initialize an object to store the cart in the session. We do it when there is any request so that we don't have to check it exists
    // anytime it's used
    if(typeof request.session.cart == 'undefined') { request.session.cart = {}; } 
    next();
});

app.post("/get_products_data", function (request, response) {
    response.json(products_data);
});

app.get("/add_to_cart", function (request, response) {
    var products_key = request.query['products_key']; // get the product key sent from the form post
    var quantities = request.query['quantities'].map(Number); // Get quantities from the form post and convert strings from form post to numbers
    request.session.cart[products_key] = quantities; // store the quantities array in the session cart object with the same products_key. 
    response.redirect('./cart.html');
});

app.get("/get_cart", function (request, response) {
    response.json(request.session.cart);
});

app.use(express.static(__dirname + '/public'));
app.listen(8080, () => console.log(`listening on port 8080`));
{% endhighlight %}


### Example 3: Creating an invoice to both print and email (also example of node mailer component) example

##### Add the following to the server.js file from previous example. You may wish to add a "checkout" button or link to this route in the cart.html page.

{% highlight javascript %}
app.get("/checkout", function (request, response) {
// Generate HTML invoice string
  var invoice_str = `Thank you for your order!<table border><th>Quantity</th><th>Item</th>`;
  var shopping_cart = request.session.cart;
  for(product_key in products_data) {
    for(i=0; i<products_data[product_key].length; i++) {
        if(typeof shopping_cart[product_key] == 'undefined') continue;
        qty = shopping_cart[product_key][i];
        if(qty > 0) {
          invoice_str += `<tr><td>${qty}</td><td>${products_data[product_key][i].name}</td><tr>`;
        }
    }
}
  invoice_str += '</table>';
// Set up mail server. Only will work on UH Network due to security restrictions
  var transporter = nodemailer.createTransport({
    host: "mail.hawaii.edu",
    port: 25,
    secure: false, // use TLS
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    }
  });

  var user_email = 'phoney@mt2015.com';
  var mailOptions = {
    from: 'phoney_store@bogus.com',
    to: user_email,
    subject: 'Your phoney invoice',
    html: invoice_str
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      invoice_str += '<br>There was an error and your invoice could not be emailed :(';
    } else {
      invoice_str += `<br>Your invoice was mailed to ${user_email}`;
    }
    response.send(invoice_str);
  });
 
});
{% endhighlight %}



