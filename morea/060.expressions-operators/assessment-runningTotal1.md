---
title: "Individual WOD: RunningTotal1"
published: true
morea_id: assessment-runningTotal1
morea_type: assessment
morea_sort_order: 1
morea_outcomes_assessed:
 - outcome-expressions-operators

morea_chartjs_data: "[2, 4, 1, 22]"
morea_chartjs_labels: '["Rx", "Av", "Sd", "DNF"]'
morea_chartjs_caption: |
  This WOD asked you to modify Invoice1 to compute the subtotal without storing all the extended prices and hard-coding sum all these variables. It is a more general way to handle this that easily adapts to adding or removing items in the invoice. This will be important later when you wish to compute an invoice based on items selected by a user.   
  

  Discussion:

     * This was the first WOD focused only on programming. 24% completion rate. Last WOD was 41% completion. Many people who completed last time did not this time. This is a little unusual. 
     * A number of people seemed to struggle with this WOD. Much of this may be reading the instructions and hints. Please be sure to ask questions **before** the WOD starts about confusing areas and seek help if you get stuck during the WOD. You **do not** have time to figure it out on your own during the WOD!  
     * Quite a number of people seemed to not understand enough how Invoice1 worked. For example, they did not understand that the tax and total must be calculated **after** the subtotal is calculated. This is why these expressions had to be moved from the top of the table to after the last item row (since the extended prices and hence the subtotal are being computed when each item row is displayed rather than in advance). 
     * Remember to take your time and work step by step. Even though there is a time limit, rushing will usually lead to errors that will take a long time to find and fix.
     * Generally people felt they could do this WOD if the instructions were not so detailed. Keep in mind that you are not required to follow the instructions. If you have an idea on how to do something that will get the same result, you should just do it!
---

{%  include assessment-chartjs-wod.html  Rx="<5 min" Av="10 min" Sd="15 min" DNF="15+ min or incorrect"  %}