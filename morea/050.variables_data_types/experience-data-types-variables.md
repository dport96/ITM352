--- 
title: "Lab: Data Types and Variables" 
published: true 
morea_id: experience-data-types-variables 
morea_type: experience 
morea_summary: "Learn About Data, Variables, and Simple Expressions"
morea_sort_order: 1 
morea_labels:
 - "Lecture Lab"
morea_start_date: "2023-01-31"
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

##### Using SmartPhoneProducts1_2

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

#### Exercise 3 (on your own): Using variables for output in an HTML page 

##### Using SmartPhoneProducts1_2

a. Use the `store_name` __constant__ you defined in Exercise 2 and `document.write(store_name)` to display your name in the `<header>`. For example if `const store_name = "Rick Kazman;"` the header will display:

<font style="font-family:times;font-weight: bold; font-size=32px;">Rick Kazman's Used Smart Phone Store</font>
<br>

Experiment 1: Reload the page and explain how this dynamically changes the page. Note: you may need to "force reload" the page if caching is enabled.
```

```
Experiment 2: Change the declaration of `store_name` from `const` to `var` and reload the page. Now in the console, assign `xxx` to the `store_name` variable. Explain why this did not change the name on the page.
```

```

Experiment 3: Move the declaration and assignment of `store_name` from the `<head>` to the __bottom__ of the file and reload the page. Explain why your name does not appear in the header anymore:
 ```

 ```

Experiment 4: Move the **assignment** of `store_name` back to the `<head>` but leave the **declaration** `var store_name;` at the bottom. Reload the page and in the console type `window.store_name`. Explain why your name now appears and why `store_name` is a global variable:
```

```

Experiment 5: Now use `document.write(store_name)` to display your name in the `<footer>`. For example

<font style="font-family:times;font-weight: bold; font-size=32px;">Your One Stop For Used Phones - Rick Kazman's</font>
<br>

Explain why it's better to define the variable `store_name` and use `document.write()` to write it into the document rather than 'hard code' the name (in two places) directly into the document:
```

```

b. At the **bottom** of the file, define variables `hits`, `spins` and initialize them with `0` and `1` respectively. Reload the page and use the console to report the variables are set to the expected values and data types:
```

```

Experiment 1: In your `<header>` after the `<h1>` title add 
```
<p style="text-align: center; font-weight: bold;">
Hits:<span id="hits_span">0</span>
Spins:<span id="spins_span">0</span>
</p>
```
Reload the page and in the **console** type `hits_span.innerHTML = hits; spins_span.innerHTML = spins;` and verify you see the expected changes to the page. This code assigns hits and spins variables to the `innerHTML` property of the `hits_span` and `spins_span` DOM objects. Now add this assignment code to the `<head>`. Reload the page, look at the console and explain the errors you see and why the page did not change:
```

```

Experiment 2: Now move the assignment code from the `<head>` to just **below** the variable assignments you have at at the **bottom** of the file. Reload the page and explain why the hits and spins show in the `<span>`'s as desired and why you had to put the assignments **below** the variable declarations:
```

```

Experiment 3: Now **delete** the assignments and replace the `<body>` tag (near the top of the file) with `<body onload="hits_span.innerHTML = hits; spins_span.innerHTML = spins;">`. Explain why this works even though the assignments are **above** the variable declarations (Hint: `onload` is an event that occurs after the page is rendered from the HTML):
```

```

Experiment 4: Lastly, move the assignment of the `innerHTML` for `hits_span` to be executed in the `onclick` event attribute and similarly for the `spins_span` for the `onmouseover` event attribute for all the `<sections>` Reload the page and try clicking and mouseover the images. In the console, try setting different values of `hits` and `spins` and try clicking and mouseover the images (do not reload the page!). Put an example of the `onclick` and `onmouseover` code here:
```

```