---
title: "Lab: Using and Creating Functions"
published: true
morea_id: experience-functions
morea_type: experience
morea_summary: "JAVASCRIPT functions"
morea_sort_order: 4
morea_labels:
 - Lab
morea_start_date: "2022-09-29"
---
# Lab objectives

# Instructions
Try to do as many of the exercises as possible, in the order listed. You may skip an exercise if it is impossible to accomplish the task described (for technical reasons). If you have trouble with an exercise, contact the instructor for help – do not just skip the exercise! You may work with a partner, but each of you must submit your individual work. Work should be done electronically on this document (cut and paste as needed but be careful of incorrect characters). Anything that involves code should be tried out in VS Code before submitting (you may cut and paste directly from VS Code). Submit work before the next class. If you cannot submit by this time, try to do so as soon as possible.

You may wish to open the [presentation slides](ITM352_Functions.ppt) for convenience of viewing and copy-paste. When asked by the instructor do the lab exercises indicated. If you get done early, feel free to go on. If you are not done before the instructor indicates the next exercise, raise your hand and explain where you are at. Later parts often depend on completing previous parts so do not let yourself get behind and expect to catch up!

Note: Whenever you see something like \<Your Name\> and it's not obviously an HTML tag, it means replace this with you own information as indicated inside. e.g. replace \<Your Name\> with Joe (or whatever your name is).

For exercises that do not ask specific questions but have you perform tasks, copy any code you created and the output as your answer to the exercise. Some exercises ask for explanations. Make notes for your answer and complete these after class before submitting. Do not try to make complete answers if it keeps you from progressing!

Do all your code work in VS Code. Copy and paste from there. Please ask the instructor for help if you get stuck this is **NOT** a test.

# Submission
When we are done, submit work before the next class. If you cannot submit by this time, try to do so as soon as possible after class. Copy this lab with your answers and paste your into the Laulima assignment submission box to [Laulima Assignments](https://laulima.hawaii.edu). If you do not submit something to Laulima you will not get credit.


**IMPORTANT NOTE:** Starting with this exercise and for all subsequent homework exercises, assignments, and exams we will expect the code that you hand in to be properly commented, to use meaningful variable names, and to use proper indentation!!!! This is a very good habit to get into.

#### Exercise 1: Functions (5 minutes)

a. Name three functions that we have used in class thus far and give an example of how each of them may be used. Note that conditionals such as `while()` and `if()` are not functions.

1)

2)

3)

b. For your example function (1) above, in the browser consol or using `node -i`, just type the function name and explain what output you get and why. Assign the function to the variable `xxx` and show how you would use this variable in your example for (1) rather than the function name. Why does this work and explain what the `()` operator does.
```


```



#### Exercise 2: Using a function and function documentation (13 minutes)

a. (5 minutes) Define the variable `attributes  =  "<name>;<age>;<major>"`. Using W3 schools find and read the documentation for an appropriate function that might be used to cut up a string into an array of parts that were separated by a given character in that string. e.g. "a;b;c" would give an array of parts ["a","b","c"] if asked to separate by ";".  Give an example of calling this function and the resulting output if any to get the name, age, and major substrings in `attributes`:
```


```




b. (3 minutes) How many parameters does this function take?  How do you know what the parameters are and what values they expect? Is it necessary to place the parameters in a certain order? Why/why not?
```


```




c.  (4 minutes) What parameters are required? What are optional? How did you know? Give an example of using an optional parameter for this function.
```


```






d. (2 minutes) Is the function named appropriately? Explain why or why not.
```


```






e. (5 minutes) Explain why it is not necessary to give the string in `attributes` as a parameter to the function. How does this work and why this is better than putting the string directly in the function call. Why is this different than `parseInt()` where you do have to put the string in as an argument? 
```


```




#### Exercise 3: return values (5 minutes)
```Javascript
attributes  =  "<name>;<age>;<age + 0.5>;<0.5 - age>" ;
``` 
Use the function you found in (2) and assign the return value to `pieces` and use this and a loop to print out the parts you get when separating by ";" and the data type of each part (use `typeof`).

a. (5 minutes) Use `typeof` to find out what data type `pieces` is. Explain where the value stored in `pieces` came from. Explain why the data type of `pieces` is different than the data type of the parts in `attributes`. What problem might you have if you try to use these parts as the data types they are intended to be?
```


```

b. (5 minutes) Lookup (or guess) a function that would "invert" `pieces` back into a string. Use this function to invert the array `pieces` into a string of the elements separated with "," rather than ";".
```


```


#### Exercise 4: Defining a Function (total 7 minutes)
a. (4 minutes) One of the challenges with splitting a string into parts is that the parts will be strings. This kind of thing happens frequently and if those parts are intended to be other data types we will have to check ("validate") that they are the data type intended. 

Put the following code into a function called `isNonNegInt` that takes a string parameter `q` and validates that the value of this string is a non-negative integer.
```Javascript
errors = []; // assume no errors at first
if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
```
This code will collect any validation errors in the `errors` array. Have the function return `true` if after checking everything the array is empty and `false` if not (Hint: use the  expression `(errors.length == 0)` ). Write a loop to test this function using the `pieces` array. This program should be very short, about 5 lines, if you have defined the function properly. Be sure you know the difference between defining a function and using it. 
```


```

b. Add an optional boolean parameter `returnErrors` that when `true` returns the array of all the errors rather than a boolean.  Rewrite your test to use this and have the same output. Hint: use the ternary expression `returnErrors ? errors : (errors.length == 0)`. Why is it better to return an array rather than just a boolean?
```


```
 



c. Following good function naming conventions, rename the function you created in (a) and explain briefly why it is or is not an appropriate name that follows the conventions. Rename the parameter and add comments to the top of the function that explains what the function does and how to use it.
```


```


d. (3 minutes) You need to check that the quantities of 10 kinds of products the user selected in your store are valid.  Explain the benefit of creating and using the function you created rather than repeating the code to do the validation 10 times. 
```


```

#### Exercise 5: Functions and variable scope
Define the following functions in the console or `node -i` :
```
function junk1() {
    for(i1=1; i1<=2; i1++){console.log(i1);}
    return `i1 is ${i1}`;
}


function junk2() {
    for(var i2=1; i2<=2; i2++){console.log(i2);}
    return `i2 is ${i2}`;
}

function junk3() {
    for(let i3=1; i3<=2; i3++){console.log(i3);}
    return `i3 is ${i3}`;
}
```
a.  Execute `junk1()` then `i1` explain why `i1` is defined outside the function.
```


```

b.  Execute `junk2()` then `i2` explain why you get `Uncaught ReferenceError: i2 is not defined` when you try to use `i2` outside the function.
```


```

c.  Execute `junk3()` then `i3` explain why you get `Uncaught ReferenceError: i3 is not defined` for each of these and why the return value `i3 is 3` does not appear as it does for the previous examples (that is, you cannot use `i3` outside the function or outside the for-loop).
```


```


#### Exercise 6: Callback functions, anonymous functions (do this on your own)
A callback function is when you give a function as a parameter to a function call. The idea here is that the function being called will use (invoke) this function inside itself to perform some action or routine and then "call back" to the caller when it's done (although in some situations this is not done). In Javascript functions are "asynchronous" meaning that when they are called they execute in a separate "thread" which runs at the same time as the thread that called the function. This means that the function does not have to complete executing its code before continuing to execute code after the function is called. This is both useful and troublesome. Useful since you can execute multiple things at the same time (in parallel). Troublesome in that you cannot rely on using the result of a function call in subsequent code (or in other functions).  A callback function is useful here, particularly in Javascript, for addressing these issues:

- You want to ensure that some code runs only after something else happened (synchronous). DOM events are a good example of this. e.g. `document.onload = "function doStuff(){ ... }"` 
- You want to generalize the behavior of a function. For example, you have a sort function but you want it to be able to set the way it compares values such as reversing the order or rules for comparing things that are not numerical or alphabetical. 

Define a function `checkIt` with 1st parameter `item` and 2nd parameter `index`
```
console.log(`part ${index} is ${(isNonNegInt(item)?'a':'not a')} quantity`);
```

a. Use `checkIt` as a callback function in the `.forEeach()` method for the array `pieces` you defined in Exercise 3. Put your code and output here:
```

```

b. Do the same as above but define an **anonymous** function for the callback directly in the `.forEeach()`. Start with `pieces.forEeach((item,index) => {} )` then copy the code block for `checkIt` and paste it inside the `{}`. Do not add an additional `{}`. NOTE: this is **very** simple. There is not much to do here. Explain the benefit of using an anonymous function rather than defining `checkIt` in this example:
```


```

c. [using callback to deal with asynchronous operation] Asynchronicity means that if JavaScript has to wait for an operation to complete, it will execute the rest of the code while waiting. JavaScript is a *single-threaded* programming language. It carries asynchronous operations via the *callback queue* and *event loop*. Let's look at how this works and how it affects how you write your code. Suppose that you need to develop a script that downloads a picture from a remote server and process it after the download completes. Copy the code below which simulates this:
```Javascript
function download(url) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        picture_data = "image data:XOXOXO";
    }, 3* 1000);
    return picture_data;
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://www.example.comt/big_pic.jpg';
process( download(url) );
```
Run this code and explain why it tries to process the image before downloading it and why `picture` is undefined:
```




```
Now add `callback` as a second parameter to `download` then replace `return picture_data;` with `callback(picture_data);` Change `process( download(url) );` to `download(url, process);` (note that we are passing the fucntion `process` as the `callBack` paramater to `download`). Now check that the image now processes after the download as desired. 



#### BONUS: 
Create a function that takes an array of numbers, called `monthly_sales` (a list of monthly sales amounts), and a tax rate (`tax_rate`) as inputs. The function must return an array called `tax_owing`, which consists of one entry for every entry in `monthly_sales` indicating the tax owing for that entry.