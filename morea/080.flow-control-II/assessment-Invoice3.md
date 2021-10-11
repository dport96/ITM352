---
title: "WOD: Invoice3"
published: true
morea_id: assessment-Invoice3
morea_type: assessment
morea_sort_order: 1
morea_outcomes_assessed:
 - outcome-flow-control-II
morea_chartjs_data: "[7, 4, 3, 2]"
morea_chartjs_labels: '["Rx", "Av", "Sd", "DNF"]'
morea_chartjs_caption: |
  Invoice3 was similar to SmartPhoneProducts2 WOD with a little algorithm thing for the subtotal like the RunningTotal WOD. 
  
  Here is an [example solution]({{ site.baseurl }}/morea/090.flow-control-II/Invoice3.zip) based on the hints given

  Discussion:

     * Absolutely incredible 88% completion rate!!! Even more incredible is the that 79% of the completions were better than Sd (in fact 64% of these were Rx!!!). This was NOT an easy WOD (last semester over 70% DNF'ed). This is clear evidence that you are making progress and that your skill is measurably improving. I'm very proud :) Keep up this excellent work and it will pay off greatly. But don't get complacent. There's still a lot do learn and it's time to challenge yourself even more! 
     * The main issue seemed to be confusion on how to use var-vars for calculations (especially in a loop) and for printing in the product rows. It was easy to make a mistake! Many people defined `$extended_price_ident` but then forgot to actually calculate the extended price `$$extended_price_ident = $$price_ident * $$quanity_ident` after defining the identifiers.
     * If you just went through the screencast solution for SmartPhoneProducts2 and did not try to use var-vars yourself first you may have not fully understood what they are and how to work with them. :(
     * For formatting with printf and using var-vars it was exactly the same as SmartPhoneProducts2, just using the var-vars rather than the individual variables. So again, if you did not take the time to understand this in the WOD you may have trouble making a slightly different format.
     * A number of people found computing the subtotal in a loop confusing. This was the only algorithmic aspect of the WOD and the instructions said exactly how to do it. You practised implementing this algorithm in the RunningTotal WOD. Make sure you understand well enough how to implement an algorithm and why it's needed here. For the WOD we let people pass without implementing the running total in the loop. But for your own sake, if you did not implement this, go back to the WOD and do it now. This is something need to know how to do for the assignments coming up soon!
     * We spent some attention on taking an efficient development approach rather than simply working fast. This starts by not rushing to write code and making sure we are clear on what's wanted and have some ideas on how to do things first. Next, when writing code many folks are still typing in lengthy statements that they could have copied from something and adapted. Also implementing "one-bit-at-a-time" then testing even if it's only partially done is **essential**. The more you do before testing the more errors you are likely to make. Looking for multiple errors in a lot of code takes much more time than repeatedly looking for one error in a little bit of code! 
     * For the next WOD please ask yourself if you actually understand the concepts after you successfully complete the WOD. If there is any doubt, go back to the readings! Ask yourself if you are being efficient in your approach. If not, what can you do to be more efficient and **TRY** this using the WOD!

---

{%  include assessment-chartjs-wod.html Rx="< 10 min" Av="10-25 min" Sd="25 min" DNF="35+ min or incorrect"  %} 