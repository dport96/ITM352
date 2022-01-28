--- 
title: "Lab: Data Types and Variables" 
published: true 
morea_id: experience-data-types-variables 
morea_type: experience 
morea_summary: "Learn About Data, Variables, and Simple Expressions"
morea_sort_order: 1 
morea_labels:
 - "Lecture Lab"
morea_start_date: "2022-02-01"
---
# Lab objectives
- Understand data is managed and the role of data types
- Understand how to declare and initialize a variable
- Understand how to use variables is simple expressions

# Instructions
Try to do as many of the exercises as possible, in the order listed. You may skip an exercise if it is impossible to accomplish the task described (for technical reasons). If you have trouble with an exercise, contact the instructor for help – do not just skip the exercise! You may work with a partner, but each of you must submit your individual work. Work should be done electronically on this document (cut and paste as needed but be careful of incorrect characters). Anything that involves code should be tried out in VS Code before submitting (you may cut and paste directly from VS Code). Submit work before the next class. If you cannot submit by this time, try to do so as soon as possible.

You may wish to open the [presentation slides](ITM352_data_types_variables.ppt) for convenience of viewing and copy-paste. When asked by the instructor, do the lab exercises indicated. If you get done early, feel free to go on. If you are not done before the instructor indicates the next exercise, raise your hand and explain where you are at. Later parts often depend on completing previous parts so do not let yourself get behind and expect to catch up!

Note: Whenever you see something like \<Your Name\> and it's not obviously an HTML tag, it means replace this with you own information as indicated inside. e.g. replace \<Your Name\> with Joe (or whatever your name is).

For exercises that do not ask specific questions but have you perform tasks, copy any code you created and the output as your answer to the exercise. Some exercises ask for explanations. Make notes for your answer and complete these after class before submitting. Do not try to make complete answers if it keeps you from progressing!

Do all your code work in VS Code. Copy and paste from there. Please ask the instructor for help if you get stuck this is **NOT** a test.

# Submission
When we are done, submit work before the next class. If you cannot submit by this time, try to do so as soon as possible after class. Copy this lab with your answers and paste your into the Laulima assignment submission box to [Laulima Assignment Lab://laulima.hawaii.edu). If you do not submit something to Laulima you will not get credit.

In this lab we will use data types and variables to customize the game and present scoring information.

Start by creating a `Lab4` directory in your repo and add a copy of your `SmartPhoneProducts1_1` project from Lab3 and rename it  `SmartPhoneProducts1_2`. Start your http-server and load the `products_display.html` page then open the JS console in your browser. 

#### Exercise 1: Data types 
For each kind of data presented state what data type it is and an example of using it in `SmartPhoneProducts1_2`. Note that in the console everything will automatically be put into `console.log()` to output, so you can just type the expression in the console. 
```
"Jenny"
25
25.5
true
[10,0,2,0,0]
{ "phone type": "iPhone", price: 123.45 }
undefined
null
```

Can you name one data type that is not in the above?
```

```

#### Exercise 2: Variables 
How and where you declare a variable will affect 'scope' which is something we will explore in more detail later. For now we are interested mostly in when you can use a variable.

## Replace this with SmartPhoneProducts1_variables?

a. In the `<head>` define a constant `store_name` and assign the string \<your full name\>. Load the page and explain what you get when you `typeof store_name` in the console. Explain why you get an error when you try `store_name = "xxx";`. What about `var store_name = "xxx";`? Explain why this is useful.
```

```

b. Define variable `hits` using `var`, and `spins` without it and initialize them with positive integers where `hits < spins`. Reload the page and use the console to report the variables are set to the expected values data types. Try to `delete` these variables and explain why you cannot delete `hits` but you can delete `spins`:
```

```

c. In the console compute `hits`/`spins` and report what data type this is:
```

```

d. In the console, assign the boolean `true` to the variable `is_game_over` and use `typeof` to explain why this is different than assigning `"true"` to `is_game_over`: 
```

```

#### Exercise 3: Using variables for output in an HTML page 

a. Use the variable and `document.write(store_name)` to display your name in the `<header>`. For example

<font style="font-family:times;font-weight: bold; font-size=32px;">Dan's Used Smart Phone Store</font>
<br>

Reload the page and explain how this dynamically changes the page. Note: you may need to "force reload" the page if caching is enabled.
```

```
Change the declaration of `store_name` to `var` and reload the page. Now in the console, assign `xxx` to the `store_name` variable. Explain why this did not change the name on the page.
```

```
 Then move the declaration and assignment of `store_name` from the `<head>` to the bottom of the file and reload the page. Does your name still appear? Explain:
 ```

 ```

Move the assignment of `store_name` back to the `<head>` but leave the declaration. Reload the page and explain why your name now appears:
```

```

Now `document.write(store_name)` to display your name in the `<footer>`. For example

<font style="font-family:times;font-weight: bold; font-size=32px;">Your One Stop For Used Phones - Dan's</font>
<br>

Explain why it's better to define the variable `store_name` then write it into the document rather than 'hard code' the name directly into the document:
```

```

b. At the bottom of the file, define variables `hits`, `spins` and initialize them with positive integers where `hits` is less than `spins`. Reload the page and use the console to report the variables are set to the expected values data types:
```

```

In your `<header>` after the `<h1>` title add 
```
<p style="text-align: center; font-weight: bold;">
Hits:<span id="hits_span">0</span>
Spins:<span id="spins_span">0</span>
</p>
```
Reload the page and in the console and set the `innerHTML` of the `<span>`'s to the respective `hits` and `spins` variables and verify the changes to the page. Now in the `<head>` set the `innerHTML` of the `<span>`'s to the respective `hits` and `spins` variables. Reload the page, look at the console and explain the errors you see and why the page did not change. 
```

```

Now move the assignments to the `<span>`'s above the variable assignments at the bottom of the file. Reload the page and explain why the hits and spins show `undefined`:
```

```
Now move the assignments below the variable assignments and explain why the values show in the `<span>`'s as desired:
```

```
Now move the assignments to be the value of the `onload` event attribute for the `<body>` element (at the top of the file). Explain why this works even though the assignments come before the `<span>`'s and variables are defined:
```

```
Lastly, move the assignment of the `innerHTML` for `hits_span` to be executed in the `onclick` event attribute and similarly for the `spins_span` for the `onmouseover` event attribute for all the `<sections>` Reload the page and try clicking and mouseover the images. In the console, try setting different values of `hits` and `spins` and try clicking and mouseover the images (do not reload the page!). Put an example of the `onclick` and `onmouseover` code here:
```

```