--- 
title: "Invoice3" 
published: true 
morea_id: experience-Invoice3_1
morea_type: experience 
morea_summary: "Invoice3: Use a loop to generate am invoice for products"
morea_sort_order: 3 
morea_labels:
 - "WOD"
---

# Use a loop to generate an invoice

This WOD is very similar to [SmartPhoneProducts2](experience-SmartPhoneProducts2.html) but just a little more complex due to having to perform calculations inside a loop.

1. Start by copying [Invoice2](../080.flow-control-I/experience-invoice2.html) into a new JAVASCRIPT project. Check that the invoice displays as expected.

2. Your product data variables should have names with numbers at the end like `$item1, $quantity1, $price1` and similarly for the other products. If not, rename the variables now.  

3. Write a loop to generate the table using the variables defined above. You will need to create the identifiers for the variables using a string and a counter inside the loop as per the [variable variables](reading-var-var.html) reading. Hint: delete all the code that prints the product rows in the table except one. Put this this inside a loop and change the variables used in this row to variable-variables that you create from the loop variable. 

Your final invoice display should look **identical** to Invoice2.
4. Now do the same as (3) to perform the calculations used in the table. This needs to be done *before or while* the table is generated! 

HINT: It's easiest (for now) to create TWO separate loops. One loop to compute the extended prices and subtotal. The other loop to print the rows of the table. Both these loops will have the **same** conditions! If you know how to do this is one loop while the table is generated then do this instead.

HINT2: To calculate the subtotal, rather than do this after the loop exits, compute it **inside** the loop as a "running subtotal" (as in the [RunningTotal WOD](https://dport96.github.io/ITM352/morea/060.expressions-operators/experience-runningTotal.html)) just after you compute an extended price. That is, just add the current extended price to the current subtotal: `$subtotal = $subtotal + $extended_price`. Don't make this harder than it is! All that you are doing is "putting values in a bag" to sum them up. For example `$x = $a1+$a2+$a3` is the same as `$x=0; for($i=1; $i<=3; $i++) {$a_ident = 'a'.$i; $x = $x + $$a_ident; }`

Be sure to initialize `$subtotal = 0` **above** the loop otherwise you will be using a `$subtotal` at first with no value set (and get a variable not defined warning) or if you put it inside the loop you will reset it to 0 each time the loop runs (bad!).   

{% include wod-times.html Rx="<10 min" Av="15-20 min" Sd="25 min" DNF="35+ min" %}