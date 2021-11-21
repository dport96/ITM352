---
title: "Assignment 2 Code Examples"
published: true
morea_id: reading-code-examplesA2
morea_summary: "Some examples useful for Assignment 2"
morea_type: reading
morea_sort_order: 3
morea_labels:
- Examples
morea_start_date: "2021-11-18"
---
# Some examples useful for Assignment 2. 
You can copy and paste the code in to VS Code to try these. You are welcome to use this code
in your assignment but please do give a reference to what you use.



### A simple login processing example. 

#### This is an example server that produces a login form and when submitted check if the password for username matches. The login information is taken from `request.body` which mean it could have come form a FORM post. User data is simply stored as an object the usernames converted to lowercase as keys. This example also illustrates one way to do a case-insensitive check of the username for logging in.   

{% highlight javascript %}
var express = require('express');
var app = express();

var users_reg_data = 
{
"dport": {"password": "portpass"},
"kazman": {"password": "kazpass"}
};

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
            user_quantity_data['username'] = the_username;
            response.send(`User ${the_username} is logged in`);
        } else {
            response.send(`Wrong password!`);
        }
        return;
    }
    response.send(`${the_username} does not exist`);
});

var listener = app.listen(8080, () => { console.log('server started listening on port ' + listener.address().port) });

{% endhighlight %}

### Reading and writing user info to a JSON file (FileIO example1).

#### It will create a new user data file if one doesn't exist and add "Joe Newguy". If there is a userdata file it will print out what users are there and add a new Joe Newguy with the next available number. The data file is not easily edited by humans. Also all the user data must be loaded or written at once which could be slow if you have a lot of users!

{% highlight javascript %}
var express = require('express');
var app = express();
var fs = require('fs');

// user info JSON file
var filename = "./user_info.json";


if (fs.existsSync(filename)) {
    var stats = fs.statSync(filename);
    data = fs.readFileSync(filename, 'utf-8');
    users_reg_data = JSON.parse(data);
} else {
    console.log(filename + ' does not exist!');
}

app.get("/register", function (request, response) {

// Give a simple register form
        str = `
<body>
<form action="" method="POST">
<input type="text" name="username" size="40" placeholder="enter username" ><br />
<input type="password" name="password" size="40" placeholder="enter password"><br />
<input type="password" name="repeat_password" size="40" placeholder="enter password again"><br />
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
    if(typeof sers_reg_data[username] != 'undefined') {
        response.send(`Hey! ${username} is already reguistered!`);
        return;
    }
    users_reg_data[username] = {};
    users_reg_data[username].password = request.body.password;
    users_reg_data[username].email = request.body.email;
    fs.writeFileSync(filename, JSON.stringify(users_reg_data));
    console.log("Saved: " + users_reg_data);

    response.send(`${username} has been registered.`);
});

{% endhighlight %}


### Reading and writing user info to a file using flat files (FileIO example2).

#### This is pretty much the same as FileIO example1 excpet the file format is simple and easily editable by humans. Even though all the data is loaded or written from an array, it's done line by line which offers the possibility for searching for a particular user or appending (or editing) a single user without having to process the entire file into an array (thus is more efficient for large data files).

{% highlight php %}
<?php

set_time_limit(5);
/*
 * File I/O Example 1
 * This file contains two functions for reading data from a file into an array and writing data to a file from an array.  The format
 * matters since the functions implode the array with a given seperator in the array element order
 *
 */

$reg_data_file = "./registration_data.dat";  //  location and name of the data file
// call the read file fucntion  which will return an array of user info that was serialized previously
$my_users = get_users_array($reg_data_file);
// now print out all the users and their info by looping through the array
if (!empty($my_users)) {
    foreach ($my_users as $username => $user_info_array) {
        printf('%s  has username <b>%s</b> and password <i>%s</i> <br>', $user_info_array['name'], $username, $user_info_array['password']);
    }
}
// now lets add a new user to the registration file (the information could have easily
// come from an HTML form post). Note how the new user array has to have exactly the same keys as 
// each array in $my_users.
$new_user = array('password' => 'easytoguess', 'name' => 'Joe Newguy',);
// we make a unique username by adding one more than the total number of users in $my_users. 
// If it were not unique when we load the array from the registration data file
// it would just replace the old array entry with the same key
$user_num = count($my_users); // why do we not have to +1 here?
$new_username = 'joenew' . $user_num;
// ok, got the new username, so must add $new_user to the registration data file to make the change persistant
// this is done by calling the add_new_user() function and passing it the $new_user array
// and $new_username (the data it will write to the file)
add_new_user($new_username, $new_user, $reg_data_file);

print "New user $new_username added to registration file";

// DONE!

function get_users_array($filepath) {
// This function reads the file at $filepath and returns an
// array. It is assumed that the file being read is in the format created by
// the add_new_user() function
    if (file_exists($filepath)) {
        $fp = fopen($filepath, 'r');
        $users_array = array();
        while (!feof($fp)) {
            $data_line = trim(fgets($fp));
            if (!empty($data_line)) {
                $parts = explode(';', $data_line);
                // add line of user data to the $users_arrey with username as the key
                $users_array[$parts[0]] = array('password' => $parts[1], 'name' => $parts[2]);
            }
        }
        fclose($fp);
        return $users_array;
    }
    return array();
}

function add_new_user($username, $user_info_array, $filepath) {
// This function adds $username to an imploded $user_info_array then appends it
// to the file at $filepath. The file may then be converted
// into an array using the get_users_array() function    

    $fp = fopen($filepath, 'a'); // need to open for appending to add new user at the end
    if (!empty($user_info_array)) {
        fwrite($fp, "$username;{$user_info_array['password']};{$user_info_array['name']}\n"); // this assumes a data format of username;password;name but user data must not contain a semicolon ';' because it is the field seperator 
    }
    fclose($fp);
}

?>
{% endhighlight %}

##### Here is a sample registration data that might be created with the above functions. You can also edit or create this kind of file easily in Excel or a simple text editor.

{% highlight text %}
dport;dppass;Dan Port
itm352;graderpass;ITM352 Grader
psud;ppass;Perfect Student
{% endhighlight %}

### Reading and writing individual user info to a file using flat files (FileIO example3).

#### This is a variation on FileIO example2 searching for a particular user or appending (or editing) a single user without having to process the entire file into an array (thus is more efficient for large data files).

{% highlight php %}
<?php

set_time_limit(5);
/*
 * File I/O Example 3
 * This file contains two functions for finding user information given a username and editing or adding a new user.  The  of the
 * data file is assumed to be:
 *
 * username;password;name
 *
 */

$reg_data_file = "./registration_data.dat";  //  location and name of the data file. File must be readable and writable to web server!
// call the get user info function  which will read the data file looking for a given username and return a userdaa array if found
$username = 'itm352'; // the username to look for
$user_info_array = get_user_info($username, $reg_data_file);
// now print out all the user info given in the array if found
if (!empty($user_info_array)) {
    printf('%s  has username <b>%s</b> and password <i>%s</i> <br>', $user_info_array['name'], $username, $user_info_array['password']);
} else {
    print "No user $username found";
}

// now lets add a new user by creating a new unser info array and then save it using the edit_user_info file function (the information could have easily
// come from an HTML form post). Note how the new user array has to have exactly the same keys as the $user_info_array
$new_user_array = array('username' => 'joenew', 'name' => 'Joe Newguy', 'password' => 'easytoguess');
// we add the new user by first checking if this username exists. If so, we add a number to the end and check if this new name 
// exists. We repeat this until we find a username that doesn't already exist.
$user_num = 0;
while (!empty(get_user_info($new_user_array['username'], $reg_data_file))) {
    $new_user_array['username'] = 'joenew' . $user_num++;
}
// ok, got the new user name, so must update the registration data file to make the change persistant
// this is done by calling the edit_user_info() function and passing it the $users array (the data it will write to the file)
// because this is a new username the function will just append it to the end of the file
add_new_user($new_user_array, $reg_data_file);

print "New user joenew$user_num added to registration file";

// DONE!

function get_user_info($the_username, $filepath) {
    /*
     * comments left out out purposefully
     */
    if (file_exists($filepath)) {
        $fp = fopen($filepath, 'r');
        while (!feof($fp)) {
            $data_line = trim(fgets($fp));
            if (!empty($data_line)) {
                $parts = explode(';', $data_line);
                if ($parts[0] == $the_username) {
                    // Found $the_username as a username in the file! So return an array with the name and password
                    // Note that we don't really need the username in $parts[0] since it's passed in to the function
                    // but this may be useful if you are doing a case insensitive serach and want to get the username 
                    // exactly as it is stored in the data file
					fclose($fp);
                    return array('username' => $parts[0], 'password' => $parts[1], 'name' => $parts[2]);
                }
            }
        }
		fclose($fp);
        return array(); // if we get here the we checked though the entire file and did not find $the_username so we return an empty array
    }
    die("Filename $filepath does not exist! Exiting.");
}

function add_new_user($the_user_info_array, $filepath) {
    /*
     * comments left out out purposefully
     */
    $fp = fopen($filepath, 'a'); // need to open for appending to add new user at the end
    if (!empty($the_user_info_array)) {
        fwrite($fp, implode(';', $the_user_info_array) . "\n"); // this assumes the order of the data in $the_user_info_array is username;password;name
    }
    fclose($fp);
}

?>

{% endhighlight %}

### Putting errors from the server on the client
As you might expect, the advice is always to think through carefully what you want, try to do something as simple as possible first to get tt started, test that, then make expand on it. So actually there are three general ways to handle displaying errors on the page. One is just sending the data back (as you already had) and have the page (client) re-do the validations and put the errors in when you re-input the data into the form (i.e. making it sticky). Second is to have the server send back the errors in addition to the data from the server (as you are doing now) and then put the errors in when you re-input the data into the form (so when you are making an input sticky you just add the error if there is one for it). Third, is you generate the page entirely on the server and as you do this you just add the errors when as the page is generated (this is much easier than it sounds).