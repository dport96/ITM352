---
title: "Assignment 2 Code Examples"
published: true
morea_id: reading-code-examplesA2
morea_summary: "Some examples useful for Assignment 2"
morea_type: reading
morea_sort_order: 3
morea_labels:
- Examples
morea_start_date: "2024-04-16T12:00"
---
# Some examples useful for Assignment 2. 
You can copy and paste the code in to VS Code to try these. You are welcome to use this code
in your assignment but please do give a reference to what you use.



### A simple login processing example. 

#### This is an example server that produces a login form and when submitted check if the password for username matches. The login information is taken from `request.body` which mean it could have come form a FORM post. User data is simply stored as an object the usernames converted to lowercase as keys. This example also illustrates one way to do a case-insensitive check of the username for logging in.   

{% highlight javascript %}
const express = require('express');
const app = express();

let users_reg_data = 
{
"dport": {"password": "portpass"},
"kazman": {"password": "kazpass"}
};

app.use(express.urlencoded({extended:true}));

app.get("/login", function (request, response) {

// Give a simple login form
str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
response.send(str);
});

app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    the_username = request.body['username'].toLowerCase();
    the_password = request.body['password'];
    if (typeof users_reg_data[the_username] != 'undefined') {
        if (users_reg_data[the_username].password == the_password) {
            response.send(`User ${the_username} is logged in`);
        } else {
            response.send(`Wrong password!`);
        }
        return;
    }
    response.send(`${the_username} does not exist`);
});

let listener = app.listen(8080, () => { console.log('server started listening on port ' + listener.address().port) });
{% endhighlight %}

### Reading and writing user info to a JSON file (FileIO example1).

#### It will create a new user data file if one doesn't exist. If there is a userdata file, it will a new user information object so long as the username is not already registered (case insensitive). It will also check if a username was entered and if the password and password repeat entered are the same. If there are errors, it will go back to the register page and show the errors where they occur. The data file is not easily edited by humans because it is in JSON. Also all the user data must be loaded or written at once which could be slow if you have a lot of users!

{% highlight javascript %}
const express = require('express');
const app = express();
const fs = require('fs');

let errors = {}; // keep errors on server to share with registration page

app.use(express.urlencoded({extended:true}));

// user info JSON file
let filename = "./user_info.json";


if (fs.existsSync(filename)) {
    let stats = fs.statSync(filename);
    data = fs.readFileSync(filename, 'utf-8');
    users_reg_data = JSON.parse(data);
} else {
    console.log(filename + ' does not exist!');
    users_reg_data = {};
}

app.get("/register", function (request, response) {
// Give a simple register form
        str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" > 
${ (typeof errors['no_username'] != 'undefined')?errors['no_username']:''}
${ (typeof errors['username_taken'] != 'undefined')?errors['username_taken']:''}
<br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="password" name="repeat_password" size="40" placeholder="enter password again">
${ (typeof errors['password_mismatch'] != 'undefined')?errors['password_mismatch']:''}
<br />
<input type="email" name="email" size="40" placeholder="enter email"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
    response.send(str);
    
});

app.post("/register", function (request, response) {
    // process a simple register form
    username = request.body.username.toLowerCase();

    // check is username taken
    if(typeof users_reg_data[username] != 'undefined') {
        errors['username_taken'] = `Hey! ${username} is already registered!`;
    }
    if(request.body.password != request.body.repeat_password) {
        errors['password_mismatch'] = `Repeat password not the same as password!`;
    } 
    if(request.body.username == '') {
        errors['no_username'] = `You need to select a username!`;
    }
    if(Object.keys(errors).length == 0) {
        users_reg_data[username] = {};
        users_reg_data[username].password = request.body.password;
        users_reg_data[username].email = request.body.email;
        fs.writeFileSync(filename, JSON.stringify(users_reg_data));
        console.log("Saved: " + users_reg_data);
        response.send(`${username} has been registered.`);
    } else {
        response.redirect("./register");
    }
});

let listener = app.listen(8080, () => { console.log('server started listening on port ' + listener.address().port) });

{% endhighlight %}


### Reading and writing user info to a file using flat files (FileIO example2).

#### This is pretty much the same as FileIO example as above except the file format is simple and easily editable by humans. It defines a function get_user_info() which returns a user info object if found in the file, undefined if not in the file. It's done line by line and quits when username is found. This is more efficient for large data files. 

```Javascript
const fs = require('fs');
const express = require('express');
const app = express();

// get entire file as array of lines of user info data
let filename = "./user_info.dat";
if (fs.existsSync(filename)) {
    data = fs.readFileSync(filename, 'utf-8');
    // split data by new line
    let lines = data.split(/\r?\n/);

} else {
    console.log(filename + ' does not exist!');
    const lines = [];
}

app.use(express.urlencoded({extended:true}));

app.get("/login", function (request, response) {

// Give a simple login form
str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
response.send(str);
});

app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    the_username = request.body['username'].toLowerCase();
    the_password = request.body['password'];
    let user_info = get_user_info(the_username);
    console.log(user_info);
    if (typeof user_info != 'undefined') {
        if (
            
            user_info.password == the_password) {
            response.send(`User ${the_username} is logged in`);
        } else {
            response.send(`Wrong password!`);
        }
        return;
    }
    response.send(`${the_username} does not exist`);
});

let listener = app.listen(8080, () => { console.log('server started listening on port ' + listener.address().port) });

function get_user_info(a_username) {
    // go through lines and look for username. If found, returns object with user data, otherwise returns undefined.
    // Format is assumed to be username;password;fullname
    let user_data = undefined;
    for(i in lines) {
        let user_data_array = lines[i].split(';');
        if(user_data_array[0] == a_username) { // found it!
            user_data = {'password': user_data_array[1], 'name': user_data_array[2]};
            break; 
        }
    }
    return user_data;
}
```

##### Here is a sample registration data that might be created with the above functions. You can also edit or create this kind of file easily in Excel or a simple text editor.

{% highlight text %}
dport;dppass;Dan Port
itm352;graderpass;ITM352 Grader
psud;ppass;Perfect Student
{% endhighlight %}

### Putting errors from the server on the client
As you might expect, the advice is always to think through carefully what you want, try to do something as simple as possible first to get tt started, test that, then make expand on it. So actually there are three general ways to handle displaying errors on the page. One is just sending the data back (as you already had) and have the page (client) re-do the validations and put the errors in when you re-input the data into the form (i.e. making it sticky). Second is to have the server send back the errors in addition to the data from the server (as you are doing now) and then put the errors in when you re-input the data into the form (so when you are making an input sticky you just add the error if there is one for it). Third, is you generate the page entirely on the server and as you do this you just add the errors when as the page is generated (this is much easier than it sounds). See the **Reading and writing user info to a JSON file (FileIO example1)**
above for an example of this.

### Passing transient data through login or registration pages to invoice
One problem in Assignment 2 is that you have form data in the products page that needs to be held until you get to the invoice page while you post form data from login or registration. There are two methods for passing transient data from one page to another. The first is to keep the data in a query string and pass the query string from one page to another. The second is to hold the data on the server until it's needed. 

Here is an example of using a query string:
```Javascript
const { concatSeries } = require('async');
const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

let users_reg_data = 
{
"dport": {"password": "portpass"},
"kazman": {"password": "kazpass"}
};

app.get("/invoice", function (request, response) {
    // Give a simple invoice using query string data
    response.send(`You want ${request.query['quantity']} items`);
    });

app.get("/select_quantity", function (request, response) {

    // Give a simple quantity form
    str = `
    <body>
    <form action="" method="POST">
    <input type="text" name="quantity" size="40" placeholder="enter quantity desired" ><br />
    <input type="submit" value="Submit" id="submit">
    </form>
    </body>
        `;
    response.send(str);
    });

app.post("/select_quantity", function (request, response) {
    // Redirect to login page with form data in query string
    let params = new URLSearchParams(request.body);
    response.redirect('./login?'+ params.toString());
});

app.get("/login", function (request, response) {
    console.log(request.params.toString());
// Give a simple login form
let params = new URLSearchParams(request.query);
str = `
<body>
<form action="?${params.toString()}" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
response.send(str);
});

app.post("/login", function (request, response) {
    let params = new URLSearchParams(request.query);
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    the_username = request.body['username'].toLowerCase();
    the_password = request.body['password'];
    if (typeof users_reg_data[the_username] != 'undefined') {
        if (users_reg_data[the_username].password == the_password) {
            response.redirect('./invoice?'+ params.toString());
        } else {
            response.send(`Wrong password!`);
        }
        return;
    }
    response.send(`${the_username} does not exist`);
});

let listener = app.listen(8080, () => { console.log('server started listening on port ' + listener.address().port) });
```

Here is an example of using a variable on the server. This is a very simple approach but has the problem that it does not associate the quantity form data with a particular user so it's possible that the invoice for a given user will not match with the quantity form that user posted. It could be overwritten if another quantity form is submitted before the user logs in and goes to the invoice. This problem is solved by using sessions which will be discussed in a upcoming Lab.

```Javascript
const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

let users_reg_data = 
{
"dport": {"password": "portpass"},
"kazman": {"password": "kazpass"}
};

var quantity_form_data;

app.get("/invoice", function (request, response) {
    // Give a simple invoice using query string data
    console.log(request);
    response.send(`You want ${quantity_form_data['quantity']} items`);
    });

app.get("/select_quantity", function (request, response) {

    // Give a simple quantity form
    str = `
    <body>
    <form action="" method="POST">
    <input type="text" name="quantity" size="40" placeholder="enter quantity desired" ><br />
    <input type="submit" value="Submit" id="submit">
    </form>
    </body>
        `;
    response.send(str);
    });

app.post("/select_quantity", function (request, response) {
    // Redirect to login page with form data in query string
    quantity_form_data = request.body;
    response.redirect('./login');
});

app.get("/login", function (request, response) {

// Give a simple login form
str = `
<body>
<form action="?${request.query}" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="submit" value="Submit" id="submit">
</form>
</body>
    `;
response.send(str);
});

app.post("/login", function (request, response) {
    // Process login form POST and redirect to logged in page if ok, back to login page if not
    the_username = request.body['username'].toLowerCase();
    the_password = request.body['password'];
    if (typeof users_reg_data[the_username] != 'undefined') {
        if (users_reg_data[the_username].password == the_password) {
            response.redirect('./invoice');
        } else {
            response.send(`Wrong password!`);
        }
        return;
    }
    response.send(`${the_username} does not exist`);
});

let listener = app.listen(8080, () => { console.log('server started listening on port ' + listener.address().port) });
```