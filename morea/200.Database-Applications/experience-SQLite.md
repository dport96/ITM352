--- 
title: "SQL and SQLite in JAVASCRIPT" 
published: true 
morea_id: experience-SQLite
morea_type: experience 
morea_summary: "SQL Database in JAVASCRIPT with SQLite"
morea_sort_order: 1 
morea_labels:
 - Lab Lecture
morea_start_date: "2018-11-27"
---

## Instructions: 

### Check that sqlite3 is configured and working:
{% highlight php %}

class MyDB extends SQLite3 {

    function __construct() {
	// uncomment the appropriate statement bewlow for your OS
//      $this->open('/tmp/users.db');  // For Mac or Linux
// 		$this->open('C:\Windows\Temp\users.db'); // for Windows
    }

}

if (!($db = new MyDB)) {
    die($db->lastErrorMsg());
} else {
    echo "Opened database successfully<br>";
}

$db->exec('DROP TABLE IF EXISTS foo');
$db->exec('CREATE TABLE foo (bar STRING)');
$db->exec("INSERT INTO foo (bar) VALUES ('This is a test')");

$result = $db->query('SELECT bar FROM foo');
var_dump($result->fetchArray());

$db->close();

{% endhighlight %}

### Use the following functions to convert your Assignment 2 or Assignment 3 registration data to a database

{% highlight php %}

function create_users_table($db) {

    $db->exec('DROP TABLE IF EXISTS USERS');

    $sql = <<<EOF
      CREATE TABLE USERS
      (
      USERNAME  TEXT  PRIMARY KEY NOT NULL,
      NAME      TEXT,
      PASSWORD  TEXT    NOT NULL,
      EMAIL     CHAR(50)
      )
EOF;

    $ret = $db->exec($sql);
    if (!$ret) {
        echo $db->lastErrorMsg();
    } else {
        echo "Table created successfully<br>";
    }
}

function update_user_from_info_array($db, $user_info_array) {

    foreach ($user_info_array as $key => $value) {
        $sets[] = "$key = '$value' ";
    }

    $sql = "UPDATE USERS SET " . implode(',', $sets) . " WHERE USERNAME='{$user_info_array['USERNAME']}'";

    $ret = $db->exec($sql);
    if (!$ret) {
        echo $db->lastErrorMsg();
    }
}

function add_user($db, $user_info_array) {
    $fields = implode(',', array_keys($user_info_array));
    $values = implode("','", $user_info_array);

    $sql = "INSERT INTO USERS ($fields) VALUES ('$values')";
    $ret = $db->exec($sql);
    if (!$ret) {
        echo $db->lastErrorMsg();
    }
}

function get_user_info_array($db, $username) {
    $sql = "SELECT * FROM USERS WHERE USERNAME='$username'";
    // note how we user query() here rather than exec()
    $ret = $db->query($sql);
    if (!$ret) {
        echo $db->lastErrorMsg();
    }

    return $ret->fetchArray(SQLITE3_ASSOC);
}

function delete_user($db, $username) {
    $sql = "DELETE from USERS where USERNAME='$username'";
    $ret = $db->exec($sql);
    if (!$ret) {
        echo $db->lastErrorMsg();
    }
}

{% endhighlight %}

### Here is some examples of using the functions

{% highlight php %}

class MyDB extends SQLite3 {

    function __construct() {
        $this->open('/tmp/users.db');
    }

}

if (!($db = new MyDB)) {
    die($db->lastErrorMsg());
} else {
    echo "Opened database successfully<br>";
}

// If you don't already have a users table or you want to delete all the users
create_users_table($db);

// add a new user
$new_user = array(
    'USERNAME' => 'xxx',
    'NAME' => 'xxx Test User',
    'PASSWORD' => 'xxx',
    'EMAIL' => 'xxx@hawaii.edu'
);
add_user($db, $new_user);

// update the users info and check if it updated
$updated_user = array(
    'USERNAME' => 'xxx',
    'NAME' => 'yyy Test User',
    'PASSWORD' => 'yyy',
    'EMAIL' => 'yyy@hawaii.edu'
);
update_user_from_info_array($db, $updated_user);
var_dump(get_user_info_array($db, 'xxx'));

// delete a user and see if got deleted (also a way to check if a user exists)
delete_user($db, 'xxx');
var_dump(get_user_info_array($db, 'xxx'));

$db->close();

{% endhighlight %}