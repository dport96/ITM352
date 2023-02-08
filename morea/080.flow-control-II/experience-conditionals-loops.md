--- 
title: "Lab: Loops" 
published: true 
morea_id: experience-conditionals-loops
morea_type: experience 
morea_summary: "Learn about conditional expressions and loop statements"
morea_sort_order: 1 
morea_labels:
 - "Lecture Lab"
morea_start_date: "2023-02-14"
---
# Lab objectives
- Understand how to conditionally repeatedly execute statements
- Know how to break a loop, skip to the top of a loop, or terminate the program
- Understand the different forms of loops, how they are equivalent, and which form to use

# Instructions
Try to do as many of the exercises as possible, in the order listed. You may skip an exercise if it is impossible to accomplish the task described (for technical reasons). If you have trouble with an exercise, contact the instructor for help – do not just skip the exercise! You may work with a partner, but each of you must submit your individual work. Work should be done electronically on this document (cut and paste as needed but be careful of incorrect characters). Anything that involves code should be tried out in VS Code before submitting (you may cut and paste directly from VS Code). Submit work before the next class. If you cannot submit by this time, try to do so as soon as possible.

You may wish to open the [presentation slides](ITM352_flow_control_II.pptx) for convenience of viewing and copy-paste. When asked by the instructor do the lab exercises indicated. If you get done early, feel free to go on. If you are not done before the instructor indicates the next exercise, raise your hand and explain where you are at. Later parts often depend on completing previous parts so do not let yourself get behind and expect to catch up!

Note: Whenever you see something like \<Your Name\> and it's not obviously an HTML tag, it means replace this with you own information as indicated inside. e.g. replace \<Your Name\> with Joe (or whatever your name is).

For exercises that do not ask specific questions but have you perform tasks, copy any code you created and the output as your answer to the exercise. Some exercises ask for explanations. Make notes for your answer and complete these after class before submitting. Do not try to make complete answers if it keeps you from progressing!

Do all your code work in VS Code. Copy and paste from there. Please ask the instructor for help if you get stuck this is **NOT** a test.

# Submission
When we are done, submit work before the next class. If you cannot submit by this time, try to do so as soon as possible after class. Copy this lab with your answers and paste your into the Laulima assignment submission box to [Laulima Assignments](https://laulima.hawaii.edu). If you do not submit something to Laulima you will not get credit.

### *Do all your code in Node.js unless otherwise specified*

Start by creating a `Lab7` directory in your repo and create a file `products_data.js` and add the following variables:
```Javascript
 name1 = "HTC";
 price1 = 40.00;
 image1 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg";

 name2 = "Apple";
 price2 = 75.00;
 image2 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg";

 name3 = "Nokia";
 price3 = 35.00;
 image3 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg";

 name4 = "Samsung";
 price4 = 45.00;
 image4 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg";

 name5 = "Blackberry";
 price5 = 10.00;
 image5 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg";

console.log("Product variables loaded...");
```
Save the file. Open a terminal in the same directory and try `node products_data.js` and verify that you get the output `Product variables loaded...` on the Terminal window.

#### Exercise 1: While

Create a file `Ex1.js` and add the code `require("./products_data.js");` and save the file. Use Node to execute the code in `Ex1.js` and verify that you get the output `Product variables loaded...` on the Terminal window. You will want to become familiar with Node's `require` command as it enables you to load code and data from external files. 

a. Define a variable `num_products` equalling the number of items in `products_data.js`. Use a while loop to write a program that prints out (use `console.log()`)numbers until `num_products` is reached. You will need to use a ‘counter’ variable such as `number` and increment it, e.g. `number++`. Use a better variable name for this counter! Make sure that you initialize this counter BEFORE the loop starts! Start counting at number 1.

Hints : you want to test that a variable `number` is NOT equal to `num_products` and keep looping while this is TRUE. You may need to add `1` to the condition. The entire program should be around 5 lines of code.

Paste source code here:
```


```

b. Make a string template and use the expression `eval('name' + number)` to output the product name variables e.g. `name1`. Now add the `number` in front with a `.` after. After the loop, have it output `That's all we have!`
```


```

c. Change the first line in `products_data.js` to `var  name1 = "HTC";` and re-run `Ex1.js`. Explain what error you get and why you get it. The more general concept here is *Namespacing*. It's a bit complicated, but when a file is imported the code is executed in its own namespace. Variables defined in one namespace are not accessible in another (except globals, which are not variables). This is to avoid possible confusion on which variables are used in particular places (e.g. if the same variable name is used in different namespaces). If you want to transfer variables from an imported module, you will need to put the data into the `exports` object. For now, you can just use globals for everything. As your code gets more complicated and you start using many imported files ("modules"), you will need to use exports. **Remove the `var` in front of `name1` now.**
```




```

d. Rewrite your program in (b) to exit the loop if the number is greater than half `num_products`. Why do you need to change the conditional operator?

Hint: Take care to note that half `num_products` may not be a whole number. Counter values are whole numbers only.
```


```

#### Exercise 2: break, continue, terminating (3 minutes)

a) Rewrite your program in <mark>#1a</mark> (not 1b) to `break` the loop if `number` is greater than half `num_products`. When the program exits, output the line "That's enough!". Make the loop continue up to `num_products` rather than half as in (c).

Hint: Create a single if-statement to break at the specified condition.

Paste source code here:
```

```

b) Rewrite your program in #2a to skip items greater than 25% of `num_products` age up to 75% of `num_products`. When the program skips these values it should output the line "&lt;item name&gt; is sold out!".Your output should look like this:
```
1. HTC
Apple is sold out!
Nokia is sold out!
4. Samsung
5. Blackberry
```

Hint : Modify the if-statement with two boolean expressions connected by an `&&`. Before continuing the loop print out the skipped value message. Move the counter increment inside the while conditional and change the counter to start at 0.

Paste source code here
```

```


c) Rewrite your program in #2b to stop executing the program entirely (exit the process) if `number` is greater than half. When terminating it should output the line "Don't ask for anything else!" and you should not see "That's all we have!"

Hint : this will require a single if-statement to throw an error or do a `process.exit()` call.

Paste source code here
```

```

#### Exercise 3: for-loop (5 minutes)

a. Rewrite your program in #2 using a **for-loop** instead of a while-loop.

Paste source code here
```


```

b. Rewrite the program from part (a) using the condition `eval("typeof name"+i) != 'undefined'` This enables you to print products for a sequence of variables `name1, name2, name3, ...`. Try adding a new product to `products_data.js` with variables `name6`,`price6`,`image6`. Did it display? Try removing the last **two** products. Explain the benefits of using this loop over setting the condition on `num_products`. Do you need the variable `num_products` anymore? 

Paste source code here:
```

```


#### Exercise 4: Using loops to repeat code (On Your Own)
__*For this Exercise you will do everything in a web page.*__

The objective of this exercise is to dynamically generate a products page from the variables defined in `products_data.js`. 

a. Create a file `products_display.html` add the following to the `<head>`:
```HTML
<script src="./products_data.js"></script>
```
Start http-server and verify that there is a `GET products_data.js` in the terminal window when `products_display.html` is loaded. Inspect the page and verify that the product data variables are defined and the `Product variables loaded...` message appears in the browser console. Explain why this message appears here and not in the terminal window:
```


```

b. Make an `<table border="1">` and a header row with **Number** and **Item**. Use a loop and a string template with `document.write()` to output rows of product names and product number. Your table should look like this:
<table border="1">
    <tr><th>Number</th><th>Item</th></tr> 
    <tr><td>1</td><td>HTC</td></tr>
    <tr><td>2</td><td>Apple</td></tr>
    <tr><td>3</td><td>Nokia</td></tr>
    <tr><td>4</td><td>Samsung</td></tr>
    <tr><td>5</td><td>Blackberry</td></tr>
</table>

**TIP:** Inspect the HTML for the table above. It will show you what HTML to use!

Explain why this is probably a better way to generate the table this way rather than repeated copies of the table rows:
```


```