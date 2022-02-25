---
title: "MakingChange1"
published: true
morea_id: experience-makingChange1
morea_type: experience
morea_summary: "Implement a change making algorithm"
morea_sort_order: 2
morea_labels:
 - WOD
morea_start_date: "2021-10-20" 
morea_end_date: "2021-11-02"
---

# Write a program to make change for a given amount using the modulus operator

As described in class (screencast), implement the "greedy making change" algorithm to
determine the fewest number of quarters, dimes, nickels, and pennies needed to make 
change for a given number of pennies.

Use the modulus operator % to determine the amount left after dividing by an amount.

*Hint: The modulus will always be less than the amount you are dividing out since it is the
"remainder" or what's left after dividing by the amount. For example, `amount%25` will be a number
between 0-24 because if it were larger there would be at least one 25 that could have divided into
it. This automatically removes the "maximum" number of 25's from $amount.*

Suggestions:

 - Set the amount to make change for in pennies. That is, represent $1.75 as 175 pennies
 - Think through the basic algorithm before writing any code: 
  - You want the fewest coins so you will start by finding the largest number of quarters you can give. This is the same as keeping the quotient from dividing the amount by 25 and dropping the remainder. The remainder dropped (which is just the amount % 25) will be the the new amount. For this amount repeat the previous steps except use 10 (for dimes). Then repeat again with the remainder using 5 (nickels) and then after this the remainder will  
 - Start by writing out comments outlining the steps of your algorithm. Then implement each step one at a time and test at each step
 
If you get stuck, ask the TA or Instructor for the screencast solution.


{% include wod-times.html Rx="<10 min" Av="15 min" Sd="20 min" DNF="20+ min" %}