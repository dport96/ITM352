---
title: "Invoice 3"
published: true
morea_id: experience-Invoice3
morea_type: experience
morea_summary: "Implement a running subtotal for Invoice1."
morea_sort_order: 2
morea_start_date: "2021-10-20"
morea_end_date: "2021-10-23"
morea_labels:
 - WOD
---

### Modify Invoice2 to compute the running subtotal 


For this WOD start with [Invoice2](../070.flow-control-I/experience-Invoice2.html). You will be changing the way the subtotal is computed for the extended prices. Rather than compute all the extended prices and store them in variables and then sum all these variables, you will compute and use the extended price and add this to a "running total" at the time when an invoice item row is printed. The problem you are addressing is removing the hard-coded redundant variables and redundant code in outputting the invoice rows and this more general rather than hard-coded.

You **must** use expressions and variables to compute the various needed values dynamically. 
That is, do not "hard code" the computations. You should be able to change
the variable values and new values will be computed. Some steps may use results from previous steps.
 
 1. As you did in `SmartPhoneProducts2`, create a loop to generate the table rows and uses `eval()` to get the variable values in this loop. Above the code that outputs product 1, use a for-loop with the condition `eval("typeof item"+i) != 'undefined'` that loops over the `document.write()`. Delete the code that outputs the other rows. Your table should look the same as before.
   
 2. Just above the loop that generates the table rows, initialize your `subtotal` to 0.

 3. Move **all** the tax and total expressions after the code that prints the table rows (outside the loop) but **above** the code that prints the subtotal row.

 4. In the loop, directly above the code that prints out the item table row, add an expression that computes the extended price for that item using the `eval()` expressions to get the variable values as in the table row. Assign this value to the variable `extended_price` and use this in the table row e.g. replace `eval('extended_price'+i)` with `extended_price`.  
 
 5. Add a statement after the above statement that **adds** `subtotal = subtotal + extended_price`. This is the "running total" that adds all the extended prices as they are output.
 
 6. Remove all the statements that compute and saves the extended prices.
 
 7. Remove the statement that computes `subtotal` from the sum of the extended prices.
   
 8.  Check that the table matches the original Invoice1 table.


#### Specifications

 - All dollar values should be printed with **2 decimal places**. Use `.toFixed(2)`

 - You should not have more than one variable for storing the extended price.
 
#### Hints

 - This is a **lot** easier than it may seem. Take it very **slow**, carefully, and step by step.
 
 - After each change, run the application to see if it works as expected (up to what you have done). Do not try to do everything at first! Multiple mistakes will be slow and difficult to find and fix!
 
You can view the [screencast solution here](https://youtu.be/CSrt7vtnqLY) if you get stuck.  

{% include wod-times.html Rx="< 7 min" Av="7-15 min" Sd="15-25 min" DNF="25+ min" %}