---
title: "MakingChange2"
published: false
morea_id: experience-makingChange2
morea_type: experience
morea_summary: "Extend a change making algorithm"
morea_sort_order: 2
morea_labels:
 - WOD
---

# Write a program to make change with the fewest coins given a limited amount of change

Starting with MakingChange1 extend the algorithm to
determine the fewest number of coins you can change given you have a set number of quarters, dimes, nickels to use (you are starting with pennies which would be the maximum number of coins).

Here is a working version of [MakingChange1](MakingChange1.zip)


Suggestions:

- Think this through before writing any code! You will not have to change the code much here. Do not do more than you need to! Do not do anything that you are not sure of!

- Start by defining three variables `$available_quarters, $available_dimes, $available_nickles` with example values for the available quarters, dimes, and nickels. Use an easy test case such as `$amount=100; $available_quarters=1; $available_dimes=2; $available_nickles=3`

- For each coin amount, you can not use more than the number of coins available for that amount. So when you compute the largest number of coins you can give in that amount, you will use the **minimum** of this and the number of coins in that amount available. You can use the `min(a,b)` function to return the smallest of `a` and `b`. For example, `$quarters = min($available_quarters, (int) ($amount / 25));` would give the largest available number of quarters for `$amount`

- You will not be able to use the modulus operator since you may not have used the maximum number of coins for a given denomination. You will need to subtract off the amount you actually use. For example, after computing the number of `$quarters` the amount remaining will be `$leftover = $amount - $quarters*25;` rather than `$leftover = $amount%25;` as you had originally.

- Proceed one thing a time and test as you go. Do not try to do it all at once then test and fix!
 

{% include wod-times.html Rx="<5 min" Av="10 min" Sd="20 min" DNF="20+ min" %}