---
title: "DayOfTheWeek2"
published: true
morea_id: experience-dayOfTheWeek2
morea_type: experience
morea_summary: "Use simple branching to determine day of the week"
morea_sort_order: 2
morea_labels:
 - WOD
---

# Use conditional statements in the algorithm to determine the day of the week from a date

Start by copying the [DayOfTheWeek1](../070.algorithms/experience-dayOfTheWeek-algorithm.html)
WOD. Check that it still works.

Replace the var vars for step10 and step13 with conditional statements. For example in step10 you might use `if($month == 'January') $step10 = 28;`

Your program should not use **any** var vars when you are done. Take care to replace all the var vars used.

Hint: Using if-elseif or switch is probably better than many single if-statements. 

Speed hint: Make use of the variables you already have defined rather than re-type everything. If you are good with find and replace using regular expressions you can really speed up changing things and avoid errors! This was how I was able to do it in less than 5 mins.

Something to ponder when you are done: Why might it be "better" to use conditional statements than var vars for handling step10 and step13? 

{% include wod-times.html Rx="<5 min" Av="5-10 min" Sd="10-15 min" DNF="15+ min" %}