--- 
title: "Lab: Conditionals and Branching" 
published: true 
morea_id: experience-conditionals-branching
morea_type: experience 
morea_summary: "Learn about conditional expressions and if-statements"
morea_sort_order: 1 
morea_labels:
 - "Lecture Lab"
morea_start_date: "2024-02-06T00:00"
---
# Lab objectives
- Know what conditional expressions are
- Understand how to conditionally execute statements

# Instructions
Try to do as many of the exercises as possible, in the order listed. You may skip an exercise if it is impossible to accomplish the task described (for technical reasons). If you have trouble with an exercise, contact the instructor for help – do not just skip the exercise! You may work with a partner, but each of you must submit your individual work. Work should be done electronically on this document (cut and paste as needed but be careful of incorrect characters). Anything that involves code should be tried out in VS Code before submitting (you may cut and paste directly from VS Code). Submit work before the next class. If you cannot submit by this time, try to do so as soon as possible.

You may wish to open the [presentation slides](ITM352_flow_control_I.pptx) for convenience of viewing and copy-paste. When asked by the instructor do the lab exercises indicated. If you get done early, feel free to go on. If you are not done before the instructor indicates the next exercise, raise your hand and explain where you are at. Later parts often depend on completing previous parts so do not let yourself get behind and expect to catch up!

Note: Whenever you see something like \<Your Name\> and it's not obviously an HTML tag, it means replace this with you own information as indicated inside. e.g. replace \<Your Name\> with Joe (or whatever your name is).

For exercises that do not ask specific questions but have you perform tasks, copy any code you created and the output as your answer to the exercise. Some exercises ask for explanations. Make notes for your answer and complete these after class before submitting. Do not try to make complete answers if it keeps you from progressing!

Do all your code work in VS Code. Copy and paste from there. Please ask the instructor for help if you get stuck this is **NOT** a test.

# Submission
When we are done, submit work before the next class. If you cannot submit by this time, try to do so as soon as possible after class. Copy this lab with your answers and paste your into the Laulima assignment submission box to [Laulima Assignments](https://laulima.hawaii.edu). If you do not submit something to Laulima you will not get credit.
 
In this lab we will use conditional (boolean) expressions and conditional statements (if-statements) to keep score and present game information.

Start by creating a `Lab6` directory in your repo and add a copy of your `SmartPhoneProducts1_3` project from the previous Lab and rename it  `SmartPhoneProducts1_4`. Start your http-server and load the `products_display.html` page then open the JS console in your browser. 


#### Exercise #1: Conditional Expressions (total 6 minutes)
Add the following spans to the Hits and Spins `<p>`:
```
You win:<span id="win_span">pending...</span>
```

a) Write a Javascript statement that sets the `innerHTML` of the `win_span` whenever `spins`  is less than **twice** the `hits` and `false` otherwise. Do you need to convert the value of the expression to a `String`? Reload the page and try clicking and mouseover the images. Put your new code here:
```

```

b. Modify the expression so that it is `false` unless `hits` is less than `spins` (use the `&&` operator). New code here:
```

```

c. Declare a varible `over_half` and initialize it with `false`. Use an assignment operator expression that sets `over_half` to `true` once the `hits` and `spins` conditions are met as in (b) above and it never changes to `false` after (this is called a "flag" variable). Use `over_half` for the `innerHTML` of the `win_span`. New code here:
```

```

#### Exercise #2: if statements (total 10 minutes)

a. Write an if-statement that will only increment `spins` and set the image spinning `onmouseover` only when the image is not already spinning. This is to avoid additional spin counts when mousing over an already spinning image. You know the image is spinning if `className` has `rotate` in it. New code here:
```

```

b. Now write an if-else statement that will only increment `hits` and stop the image spinning `onclick` only when the image is already spinning. If the image is not spinning when `onclick` set it spinning. Explain why the else is needed for this. Code and explanation here:
```

```

c. What is the problem if you use `this.className='item'` rather than `if(this.className=='item')` in exercise (a) above?
```

```


#### Exercise #3: if-else if (On Your Own)

You want to add a progress to win indicator to `SmartPhoneProducts1_4` that sets the `win_span` to `On your way` when `hits/spins > 0` then to `Almost there!` when `hits/spins > 1/4` and finally to `You win!` when `hits/spins > 1/2` and `hits < spins`. Try out the following “nested if-statement” code that sets the `win_span` to indicate progress towards winning. Initialize a variable `progress` to `Pending...` and add the following code into the `onclick` and `onmouseover` event attributes of each `<section>`: 

 
```Javascript
// -- Winning progress depends on hits/spins
let hits_spins_ratio = hits/spins;
if ( hits_spins_ratio > 0 ) {
    progress = 'On your way!';
    if ( hits_spins_ratio >= 0.25 ) {
        progress = 'Almost there!';
        if ( hits_spins_ratio >= 0.5 ) {
            if( hits < spins) { 
                progress = 'You win!';
            }
        }
    }
}
else {
    progress = 'Get going!' ;
}

```
This code should replace the `over_half` code in Exercise #1. Test that you get the expected progress indications when mousing over and clicking a section. 

Your task for this exercise is to rewrite the above code using if-elseif-else statements to remove the nested if-statements. Hint: don’t just replace “if” statements with “if-else” in the above. You will have to move the end }’s too! Consider example hits_spins_ratio of 0, .1, .2, and .5 and make sure that the correct progress message is set for each.

Paste source code here
```



````
 

 

 

 

Extra Credit:



Create a `switch` statement that switches on the value of a variable called month.  The value of month will be a string containing the name of the month, e.g. “January”, “February”, etc.  Use the switch statement to set the value of the variable num_days, which should contain the correct number of days in the month.  Make sure that your switch contains a “default” branch, in case the value of month is not set correctly.  Output an error in the default branch and set the value of month to -1 (i.e., a value that indicates that an error has occurred).



Paste source code here

