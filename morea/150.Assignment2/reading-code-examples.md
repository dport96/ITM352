---
title: "Assignment 2 Code Examples"
published: true
morea_id: reading-code-examplesA2
morea_summary: "Some examples useful for Assignment 2"
morea_type: reading
morea_sort_order: 3
morea_labels:
- Examples
morea_start_date: "2020-04-23"
---
# Some examples useful for Assignment 2. 
You can copy and paste the code in to VS Code to try these. You are welcome to use this code
in your assignment but please do give a reference to what you use.



### A simple login processing example. 

#### The login information is taken from $_GET which mean it could have come form a query string or a FORM post. User data is simply stored as arrays in $users using the usernames converted to lowercase as keys. This example also illustrates one way to do a case-insensitive check of the username for logging in.   

{% highlight php %}
<?php
// a user record is an array with all the info we want to know about the user
$user1 = array('username' => 'dport', 'password' => 'something');
$user2 = array('username' => 'itm352', 'password' => 'grader');
// put all the users on an array with usernames as the keys so we ensure they are unique and it's easy to get a user record 
// (just use their usename to access this array). The keys are converted to lowercase so we can check the username independent of 
// case when enterd by the user duing login
$users[strtolower($user1['username'])] = $user1;
$users[strtolower($user2['username'])] = $user2;

// Only check login when the login button was pressed
if (array_key_exists('login_submit', $_GET)) {
    // ok, user pressed login submit button so see if the username exists before checking the password. We change the 
    // username entered to lowecase ($_GET['username']) to eliminate differeces in case (and this matches the keys in $users)
    if (array_key_exists(strtolower($_GET['username']), $users)) {
        // ok, found the username, get the password for thei user from their user record and see if it matches

        if ($_GET['password'] == $users[strtolower($_GET['username'])]['password']) {
            echo "correct!! {$_GET['username']} logged in.";
            die;
        } else {
            echo 'wrong password, try again';
        }
    }
    // The username was not found so have the user try again
    else {
        print "User {$_GET['username']} not found. Try again!<br>";
    }
}
?>
<form action = '<?php echo $_SERVER['JAVASCRIPT_SELF'] ?>' method= 'get'>
    Username: <br>
    <INPUT TYPE="TEXT"  name="username" value = "<?php if (isset($_GET['username'])) echo $_GET['username'] ?>"><br>
    Password: <br>
    <INPUT TYPE="password" name = 'password'><br><br>
    <INPUT TYPE="SUBMIT" name = 'login_submit' value="Login">
</form>
{% endhighlight %}

### Reading and writing user info to a file using serialized arrays (FileIO example1).

#### It will create a new user data file if one doesn't exist and add "Joe Newguy". If there is a userdata file it will print out what users are there and add a new Joe Newguy with the next available number. The data file is not easily edited by humans. Also all the user data must be loaded or written at once which could be slow if you have a lot of users!

{% highlight php %}
<?php
set_time_limit(5);
/*
 * File I/O Example 1
 * This file contains two functions for reading data from a file into an array and writing data to a file from an array.  The format does
 * not matter since the functions simply read and write a serialized array and so as long as you are reading the file from which
 * an array was serialized the array will have the same format.
 *
 */

 $reg_data_file = "./serialized_registration_data.dat"; 	//  location and name of the data file
 // call the read file fucntion  which will return an array of user info that was serialized previously
 $my_users = arrayfile_to_array( $reg_data_file);
 // now print out all the users and their info by looping through the array
 if(!empty($my_users)) {
	 foreach($my_users as $username => $user_info_array) {
	 	printf('%s  has username <b>%s</b> and password <i>%s</i> <br>',
	 	                              $user_info_array['name'], $username, $user_info_array['password']);
	 }
 }
// now lets add a new user to $my_users and then save it using the write file function (the information could have easily
// come from an HTML form post). Note how the new user array has to have exactly the same keys as each array in $my_users
$new_user = array('name'=>'Joe Newguy', 'password'=>'easytoguess');
// we add the new user by adding the $new_user array to $my_users with a unique username for the key
// we make the username unqique by adding one more than the total number of users in $my_users. If it were not unique it
// would just replace the old array entry with the same key
$user_num = count($my_users); // why do we not have to +1 here?
$my_users['joenew'.$user_num] = $new_user;
// ok, got the new user in $my_users, so must update the registration data file to make the change persistant
// this is done by calling the array_to_arrayfile() function and passing it the $users array (the data it will write to the file)
array_to_arrayfile($my_users,  $reg_data_file);

print "New user joenew$user_num added to registration file";

// DONE!

function arrayfile_to_array($filepath) {
// This function reads the file at $filepath and returns an
// array. It is assumed that the file being read is a
// serialized array (created using array_to_arrayfile)
	  $fsize = @filesize($filepath);
	  if ($fsize > 0) {
	    $fp = fopen($filepath, "r");
	    $encoded = fread($fp, $fsize);
	    fclose($fp);
	    return unserialize($encoded);
	  }
	  else
	      echo "$filepath does not exist!";
}

function array_to_arrayfile($theArray, $filepath) {
// This function serializes an array in $theArray and saves it
// in the file at $filepath. The file may then be converted
// back into an array using the arrayfile_to_array() function)

	  if($fp = fopen($filepath, "w+")) {
	    $encoded = serialize($theArray);
	    fwrite($fp, $encoded);
	    fclose($fp);
	  }
	  else
	    echo "Unable to write array to $filepath";
}

?>
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