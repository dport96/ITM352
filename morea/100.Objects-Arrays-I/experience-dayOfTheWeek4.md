--- 
title: "DayOfTheWeek4" 
published: true 
morea_id: experience-dayOfTheWeek4
morea_type: experience 
morea_summary: "Use arrays to represent conversion tables"
morea_sort_order: 2 
morea_labels:
 - WOD
---

# Use array to for key-month and day of week tables for computing the day of the week

1. Start by copying the [dayOfTheWeek2](../080.flow-control-I/experience-dayOfTheWeek2.html) into a new JAVASCRIPT project. Check that the day of the week computation works properly.

2. Convert the key-month if-statements into a single associative array. For example `if($month == 'January') $step4 = 1;` becomes `$month2key['January'] = 1;`

3. Now add a statement for step 4 to 'look up' the key-month from the month using the $month2key array. This should be simply be asking for an array element e.g. `$step4 = $month2key['January'];` will assign the key-month 1 for step 4. 

4. Convert the step 7 if-statements into a single numeric array. For example `if($step7 == 1) $step8 = 'Sunday';` becomes `$num2day[1] = 'Sunday';

3. Now add a statement for step 8 to 'look up' the day of the week form a step 7 number using the $num2day array. This should be simply be asking for an array element e.g. `$step8 = $num2day[1];` will assign the day 'Sunday' for step 8 given the step 7 value of 1.

The resulting day of the week should be identical to what you get with DayOfTheWeek3.

**ADVICE**

Since you have to make a lot of detailed changes but they are very similar, either copy and paste many copies on an example of what you need OR make good use of find and replace with regular expressions. It is NOT advised to manually change each line as you will likely introduce typos with will be difficult to spot.

{% include wod-times.html Rx="<5 min" Av="5-10 min" Sd="10-15 min" DNF="15+ min" %}