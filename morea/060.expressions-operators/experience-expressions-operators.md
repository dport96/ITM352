--- 
title: "Lab 6: Expressions and Operators" 
published: true 
morea_id: experience-expressions-operators
morea_type: experience 
morea_summary: "Learn About Expressions and Operators"
morea_sort_order: 1 
morea_labels:
 - "Lecture Lab"
morea_start_date: "2021-09-21"
---
# Lab objectives
- Know what expressions are and how they are evaluated in JS
- Understand operations and precedence

# Instructions
Try to do as many of the exercises as possible, in the order listed. You may skip an exercise if it is impossible to accomplish the task described (for technical reasons). If you have trouble with an exercise, contact the instructor for help – do not just skip the exercise! You may work with a partner, but each of you must submit your individual work. Work should be done electronically on this document (cut and paste as needed but be careful of incorrect characters). Anything that involves code should be tried out in VS Code before submitting (you may cut and paste directly from VS Code). Submit work before the next class. If you cannot submit by this time, try to do so as soon as possible.

You may wish to open the [presentation slides](ITM352_expressions_operators.pptx) for convenience of viewing and copy-paste. When asked by the instructor do the lab exercises indicated. If you get done early, feel free to go on. If you are not done before the instructor indicates the next exercise, raise your hand and explain where you are at. Later parts often depend on completing previous parts so do not let yourself get behind and expect to catch up!

Note: Whenever you see something like \<Your Name\> and it's not obviously an HTML tag, it means replace this with you own information as indicated inside. e.g. replace \<Your Name\> with Joe (or whatever your name is).

For exercises that do not ask specific questions but have you perform tasks, copy any code you created and the output as your answer to the exercise. Some exercises ask for explanations. Make notes for your answer and complete these after class before submitting. Do not try to make complete answers if it keeps you from progressing!

Do all your code work in VS Code. Copy and paste from there. Please ask the instructor for help if you get stuck this is **NOT** a test.

# Submission
When we are done, submit work before the next class. If you cannot submit by this time, try to do so as soon as possible after class. Copy this lab with your answers and paste your into the Laulima assignment submission box to [Laulima Assignment Lab 6](https://laulima.hawaii.edu). If you do not submit something to Laulima you will not get credit.

In this lab we will use expressions to keep score and present game information.

Start by creating a `Lab6` directory in your repo and add a copy of your `SmartPhoneProducts1_2` project from Lab3 and rename it  `SmartPhoneProducts1_3`. Start your http-server and load the `products_display.html` page then open the JS console in your browser. 

#### Exercise 1: Precedence 
Declare and initialize the following variables:

age =  \<your age\>

fav_num = \<your favorite number\>

day_of_birth = \<calendar day of your birthday\>

month_of_birth = \<calendar month of your birthday\>

a.     Write a program that will output the results for the following two expressions:
```Javascript
age + fav_num / day_of_birth * month_of_birth

(age + fav_num) / day_of_birth * month_of_birth
```

b. Explain why you get different values for the two expressions even they are nearly identical. 


#### Exercise #2:     Implicit and Explicit Type Casting DNF > 3 minutes)

a) Use the console to inspect the expression `1.2 + "34" + 01067 * true` and explain the steps in the evaluation of this expression that lead to the value 1.234567. What data type is this expression?



b) In the expression  `1.2 + "34" + 01067 * true`  explicitly cast the `"34"` to a number and also re-cast another value to fix the warning (if you got one). Explain why the expression now evaluates to `602.2`. Did you get a warning? If so, explain why or why not.



#### Exercise #3:     Autoincrement and Autodecrement, unary operators and precidence 

In `SmartPhoneProducts1_3` let's count the number of clicks (hits) and mouseovers (spins) and display these counts on the page:

a) Write a Javascript expressions that increases the `hits` and `spins` by one and add these to the `onclick` and `onmouseover` event attributes. Put these in the place so that the `hit_span` and `spin_span` update with the new values. Initialize `hits` and `spins` to 0. Reload the page and try clicking and mouseover the images. 

Put your new code here:
```

```

b) Modify the above to use the `++` operator. Try using it before and after and explain why you get the same results:
```

```


c) Now use the `++` operator directly in the assignments of `hits` and `spins` to the `innerHTML` of `hit_span` and `spin_span`. Try both pre-increment and post-increment and explain the difference and which one is probably desired:
```

```

(note: the best thing to do in this exercise is to first try things and then explain the results)

d) Now use the `++` operator on `hit_span.innerHTML` and `spin_span.innerHTML`. Does it matter if you pre- vs post-increment? Explain why this works and one benefit of this approach:
```

```

#### Exercise #4:     Assignment operators 


a. Use the `+=` assignment operator on `hit_span.innerHTML` to increase the hits by 2 whenever there is an `onclick`. Explain why this doesn't work and show how to fix it:
```

```
Revert your code to use the variables `hits` and `spins` to keep track of the clicks and mouseovers.



#### Exercise 5:    Assigning variables with expressions 

Add the following spans to the Hits and Spins `<p>`:
```
Hit/Spin:<span id="hit_spin_span">0</span>
```

a)  Write a Javascript statement that assigns the expression `hits_span.innerHTML/spins_span.innerHTML` to the `innerHTML` of the `hit_spin_span` whenever `<section>` is clicked or mouseover. Should you explicitly cast things to `Number` data? Would it be better to use the variables `hits` and `spins`? Reload the page and try clicking and mouseover the `<sections>` Put your new code here and explain what the data types are and discuss the questions:
```

```


#### Exercise 6:    String expressions 
a. Create variables `first_name` and `last_name` and assign your first and last name to these. Create a string expression via concatenation where your first name is **Bold** and your last name is in *italics* and both are in a <font size="200%">VERY LARGE</font> font. Use this expression where you display your name in the `<header>`. For example:
<center>
<span style="font-size: 600%;"> 
<b>Dan</b><i> Port</i>'s
</span>
<h1>Used Smart Phone Store</h1>
</center>

b. Use a **string template** to output a 2-column HTML table in the `<footer>` that looks like this:

<table border="1" style="margin-left: auto; margin-right: auto; text-align: center;">
    <tr><th colspan="2"><h1>Your One Stop For Used Phones - D.P.'s</h1></th></tr>
    <tr><td>1.</td><td><br />Copyright @ Dan Port</td></tr>
    <tr><td>2.</td><td>2021</td></tr>
    <tr><td>3.</td><td>11:15 AM</td></tr>
</table>

Start by inspect this page source and find the `<table>` above and copy the HTML table source and use `document.write()` to output this as a string template using backticks `\`` rather than quotes. 


In the table header for this string, replace `D.P.` with `${}` and put inside an expression that uses `[]`'s with `first_name` and `last_name` to create an expression to to display your initials ad `Your One Stop For Used Phones - <initials>'s`. Include periods after each initial and an 's after. 

In the the first table row, replace `Dan Port` with a string template expression gives `<first_name> <last_name>`  (don't forget the space between the strings!).  Above the `document.write()` add a variable `line=1`, then in the the first table row, replace `1.` with a string template expression to indicate the current line number and increments `line`. Replace the line numbers in the other table rows with a string template expression to indicate the current line number and increment after. 

Above the `document.write()` add a variable `now = new Date()`. The `now` variable will contain a `Date object` with the current date and time from the clock for where the javascript code is running (which for this exercise is a browser on your machine). Note that `Date` objects are "static" and `now` only gives the time when the assignment is made. It is not a "running clock". Look up a reference to the `Date` object (e.g. look at W3 Schools) to find methods that would return the year and hours and minutes from the date stored in `now`. Use this in a string template in the second table row to replace `2021` with the current year. 

On the third table row, replace `11:15 AM` with a string template expression using the appropiate methods to get the current hours and minutes from `now` (a `Date` object). For the hours, use the expression `(hours + 11) % 12 + 1` to convert 25-hour time to 12-hour time. To get the AM/PM, use the *ternary expression* `(hours < 12)?'AM':'PM'`. Before you use this expression, test that this expression gives AM for hours < 12 and PM for hours > 12. Be careful to note that the ternary operator `?` has *lower* precedence than the `+` operator which may cause the expression not to evaluate to what you expect. Put your string template code here:
```


```



#### Exercise 7: Formatting floats 

Use the `toFixed()` method for a `Number` to format the `hits`/`spins` for `hit_spin_span` to 2 decimal points. You can use this on the expression directly and do not need to create a new variable. Explain why the result is a `String` and put your code here:
```

```