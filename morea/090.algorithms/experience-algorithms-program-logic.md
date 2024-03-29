--- 
title: "Lab: Algorithms and Program Logic" 
published: true 
morea_id: experience-algorithms-program-logic
morea_type: experience 
morea_summary: "Learn About Algorithms and Program Logic"
morea_sort_order: 1 
morea_labels:
 - "Lecture Lab"
morea_start_date: "2024-03-05T00:00"
---
# Lab objectives
- Understand how to think about computing problems 
- Know what an algorithm is and their use in programming
- Experience implementing amd constructing algorithms 
- Understand the logical requirements for an algorithm 

# Instructions
Try to do as many of the exercises as possible, in the order listed. You may skip an exercise if it is impossible to accomplish the task described (for technical reasons). If you have trouble with an exercise, contact the instructor for help – do not just skip the exercise! You may work with a partner, but each of you must submit your individual work. Work should be done electronically on this document (cut and paste as needed but be careful of incorrect characters). Anything that involves code should be tried out in VS Code before submitting (you may cut and paste directly from VS Code). Submit work before the next class. If you cannot submit by this time, try to do so as soon as possible.

You may wish to open the [presentation slides](ITM352_algorithms.ppt) for convenience of viewing and copy-paste. When asked by the instructor do the lab exercises indicated. If you get done early, feel free to go on. If you are not done before the instructor indicates the next exercise, raise your hand and explain where you are at. Later parts often depend on completing previous parts so do not let yourself get behind and expect to catch up!

Note: Whenever you see something like \<Your Name\> and it's not obviously an HTML tag, it means replace this with you own information as indicated inside. e.g. replace \<Your Name\> with Joe (or whatever your name is).

For exercises that do not ask specific questions but have you perform tasks, copy any code you created and the output as your answer to the exercise. Some exercises ask for explanations. Make notes for your answer and complete these after class before submitting. Do not try to make complete answers if it keeps you from progressing!

Do all your code work in VS Code. Copy and paste from there. Please ask the instructor for help if you get stuck this is **NOT** a test.

# Submission
When we are done, submit work before the next class. If you cannot submit by this time, try to do so as soon as possible after class. Copy this lab with your answers and paste your into the Laulima assignment submission box to [Laulima Assignments](https://laulima.hawaii.edu). If you do not submit something to Laulima you will not get credit.

#### Exercise 1:  Algorithms (DNF 30+ minutes)
Let’s try seeing an algorithm from the computer’s perspective to get a better idea of the challenge of programming to solve a problem. The following is a “flowchart” that describes an algorithm to determine a day of the week from a date with year between 1000-9999. You likely will not immediately see how this process will result in solving the problem!

<img src="day-of-week-flowchart.jpg" alt="" style="max-width: 100%;max-height: 100%;" height="700px" width="800px">

<div>
<img src="mod-7-calendartable.jpg" alt="" style="max-width: 100%;max-height: 100%;">
<img src="Leap Year Flowchart.png" alt="" style="max-width: 100%;max-height: 100%;" height="200px" width="200px">
<img src="keysToDays.png" alt="" style="max-width: 100%;max-height: 100%;" height="150px" width="150px">
</div>

a. (6 minutes) Implement the above algorithm using expressions and operators to determine the day of the week you were born on and list that day here. Implement each step and the calculations you used as a series of variables $step1, $step2, etc. Use `node -i` to perform the calculations and print out the results you need along the way. For example, using the date 8/3/2013 in the flowchart you might perform the following steps in node: 

```Javascript
step1=13;
step2=parseInt(step1/4);
step3 = step2 + step1;
step4 = 2; // Not Jan, so look at month before on table
step6 = step4 + step3;
... 
```

Hint: `parseInt()` will take a float and drop the decimal part which would be dropping the remainder of division. Alternatively you can use `Math.floor()` to round-down to the nearest integer value. You can get the remainder and forget the quotient after dividing by using the modulus operator `%`. 

Put your calculation steps and day your were born on (last step) here:

 

#### Exercise #2: Algorithmic Logic (DNF 20+ minutes)

a. Go to the [RobotSim emulation](RobotSim/RobotSim.html). Try the following:

- Move the robot to the top of the grid. 
- Reset the robot, move the robot to the top of the grid.
- Write out in robot commands (in the yellow textbox) steps you used to move the robot to the top of the grid. place the robot at 0,0,north. Excecute your steps and verify the robot moves to the top of the grid and does not get stuck at the block.
- Reset the robot and execute your steps. One more time, reset the robot and execute your steps. Explain why you were not able to always move the robot to the top of the grid.


b. Create a flowchart or pseudocode similar to what you saw in the lecture for an algorithm that will keep a robot moving around in a closed room with obstructions. Make sure you do not assume the robot has intelligence or any capability beyond the basic commands for movement, successful execution of movement, repeating commands, and reporting if a command was successful. You have two problems to solve:

(1) keep the robot moving forever

(2) the robot should never get stuck in front of a wall or block

Put your chart or psudocode or code here:
```




```

c. Write out in robot commands the algorithm you specified in (b). You can only use the `move()`, `left()` and `right()` methods to `controller`. If the `move()` command is successful, it returns a boolean value you can use. Any Javascript statment can be used. For example, `while(x) { }` can be used to repeat everything inside the `{}`’s so long as `x` is `true` and stops when `x` is `false`. You can negate a boolean value by placing a `!` in front. For example, `!true` will result in `false`. Hint: you can do this very simply using either two `while()` loops or one `while()` and one `if()` statement. Test to check your algorithm works! 

** Extra credit** You can *try out* your algorithm using the fancy online [robot simulation](https://scratch.mit.edu/projects/340532/). If you use this, it is suggested you modify the existing program that make a sound when the robot hits something. You may also have to deal the the edges of the room as they are not walls and the robot doesn't bounce off them! There is a condition "if on edge bounce" you can use. 

Put your commands or screenshot of your Scratch code here:
```




```

c) Even though your algorithm solves the problems (1) and (2), there are conditions that can cause **undesirable results*. Can you think of what some of these might be and how you might deal with them? Hint: consider that the algorithm does not solve the problem of moving around the *entire* room.

 

 

#### Exercise #3: Program Logic and Problem Solving (DNF 8+ minutes)
Try the following code in your browser. Replace the contents of `firstname` and `lastname` with your name:

```HTML
<span id="firstname">Rick</span>, <span id="lastname">Port</span>
<br>
<input type="button" value="Swap" 
    onclick="
    firstname.innerHTML = lastname.innerHTML;
    lastname.innerHTML = firstname.innerHTML;
    ">
```

The above algorithm tries to swap the HTML inside the `firstname` and `lastname` span elements when the button is pressed. It will **not** work!

Explain what’s wrong with the above algorithm and fix it. **Hint:** it does not require more than a few new lines of code and no conditional statements (if- and loops). Put your new code and explanation here:
```




```

#### Extra Credit Exercise:
Design an algorithm that algorithm that will get the robot to move around the entire room. It's doesn't have to do the efficiently (like in using the fewest moves). Implement your algorithm in the Robot Emulator as in Exercise 2d. Hint: think or a pattern that would cover the entire room and how you can get the robot to implement this pattern. Think carefully about what it means to turn 4 times but not in the same place.