---
title: "JAVASCRIPTCalc"
published: true
morea_id: experience-JAVASCRIPTCalc
morea_type: experience
morea_summary: "A WOD using JAVASCRIPT expressions for a simple calculator."
morea_sort_order: 3
morea_labels:
 - Individual WOD 
---

### JAVASCRIPTCalc

For this WOD you will create a simple "running calculator"
You **must** use expressions and variables to compute the various needed values dynamically. 
That is, do not "hard code" the computations. You should be able to change
the variable values and the calculator will compute the correct values. Each step uses the result from the previous step.
 
 1. Define two variables X and Y to store two
different numbers.

 2. Compute X+Y then output the sum to the screen. Save the result in a **new variable.**

 3. Square the result above (multiply the result by itself), then output to the to the screen.

 4. Divide the result above by X + Y then output to the
screen.

 5. Get the decimal part of above (subtract the integer of the result) and then output the decimal part to the screen.

#### Specifications

 - **Output statements** explaining what the computation is doing. For "1 + 2 = 3" for each result. 

 - All values should be printed with **6 decimal places**.

 - Put the statements in a table with header "JAVASCRIPTCalc"
 
An example output is:

<table style="border-collapse: inherit; width: 514px;" border="0" bordercolor="BLACK" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <td align="center" width="43%" colspan="5">
                        <b>
                            JAVASCRIPT Calc
                        </b>
                    </td>
                </tr>
                <tr><td>1.230000</td><td>+</td><td>4.560000</td><td>=</td><td>5.790000</td></tr><tr><td>5.790000</td><td>x</td><td>5.790000</td><td>=</td><td>33.524100</td></tr><tr><td>33.524100</td><td>/</td><td>5.790000</td><td>=</td><td>5.790000</td></tr><tr><td>5.790000</td><td>-</td><td>5.000000</td><td>=</td><td>0.790000</td></tr> 

            </tbody>
</table>


#### HINTS:
 - Do **not** start with Invoice1 WOD which is somewhat similar but you likely won't get much reuse from this code because you will need to delete most of it. Might be best to start fresh!
 - **copy the HTML from the example table given in this WOD** and just replace the hard coded values with the expressions. Start by view "page source" for this page and copy the example output HTML table. This will provide a template to start with and guide in what you need to do. Remove all the table rows except the header and the first row. 
 - Use printf() to format and print each row in the table. A format of %.6f will give 6 decimal points of a float. Use this printf() to output an entire table row by inside the table HTML `<?php printf(); ?>`. Use the HTML for the first table row to create a general format for the printf() and do the computations in the function arguments.  For example `printf('<tr><td>%.6f</td><td>%s</td><td>%.6f</td><td>=</td><td>%.6f</td></tr>', $result, '+', $y, $result += $y);`
 - Since you will be writing a lot of simple variations on this code, once you get it working for the first row you should copy it for every row you need to output and then modify it.
 - Use the example output to test your program (i.e. set X = 1.23 and Y = 4.56)
 - Use the same "holder" variable to store the result of each computation so you can use the result in a subsequent computation without having to re-calculate. e.g. `$result = $result - $x;` where $result was computed in a previous step. 



{% include wod-times.html Rx="<10 min" Av="10-15 min" Sd="20 min" DNF="20+ min" %}

If you get stuck please ask the instructor for help.