---
title: "Invoice2"
published: true
morea_id: experience-invoice2
morea_type: experience
morea_summary: "A WOD using expressions to generate a sales receipt."
morea_sort_order: 3
morea_labels:
 - WOD 
morea_start_date: "2021-09-24"
morea_end_date: "2021-09-30"
---

For this WOD you will modify the [Invoice1](../060.expressions-operators/experience-invoice1.html) with an algorithm to determine shipping cost. Here are the the requirements: 

1. Be sure to fix any problems from Invoice1 before continuing! 
2. Add a new line in the receipt for shipping. 
3. Calculate shipping based on the order; it should be based on the sub-total and use stepped shipping amounts ($2 shipping on a subtotal of up to $50, $5 shipping for an order up to $100, 5% for $100 or more). This must be a general solution that works for **any** set of items, not just an example invoice. No hard-coding values!
4. Print out the shipping charge above your total. 
5. Calculate the total now based on subtotal, tax, and shipping. 
6. Display the total in bold font.

<span style="font-weight: bold;"> </span>
<p> <font face="arial"><span style="font-weight: bold;">Example output:</span>
    </font></p>
<table style="border-collapse: collapse; width: 514px; height: 319px;"
       border="2" bordercolor="#111111" cellpadding="0" cellspacing="0">
    <tbody>
        <tr>
            <td align="center" width="43%"><b>Item</b></td>
            <td width="11%"><b>quantity</b></td>
            <td style="text-align: center;" width="13%"><b>price</b></td>
            <td style="text-align: center;" width="54%"><b>extended price</b></td>
        </tr>
        <tr>
            <td width="43%">Gillette Sensor 3 Razor</td>
            <td align="center" width="11%">2</td>
            <td style="text-align: center;" width="13%">$ 1.23</td>
            <td style="text-align: center;" width="54%">$&nbsp; 2.46</td>
        </tr>
        <tr>
            <td width="43%">Barbasol Shaving Cream</td>
            <td align="center" width="11%">1</td>
            <td style="text-align: center;" width="13%">$ 2.64</td>
            <td style="text-align: center;" width="54%">$&nbsp; 2.64</td>
        </tr>
        <tr>
            <td width="43%">Nautica Cologne</td>
            <td align="center" width="11%">1</td>
            <td style="text-align: center;" width="13%">$ 6.17</td>
            <td style="text-align: center;" width="54%">$&nbsp; 6.17</td>
        </tr>
        <tr>
            <td width="43%">Rubbing Alcohol </td>
            <td align="center" width="11%">3</td>
            <td style="text-align: center;" width="13%">$ 0.98</td>
            <td style="text-align: center;" width="54%">$&nbsp; 2.94</td>
        </tr>
        <tr>
            <td width="43%">Colgate Classic Toothbrush </td>
            <td align="center" width="11%">12</td>
            <td style="text-align: center;" width="13%">$ 1.89</td>
            <td style="text-align: center;" width="54%">$22.68</td>
        </tr>
        <tr>
            <td colspan="4" width="100%">&nbsp;</td>
        </tr>
        <tr>
            <td colspan="3" width="67%">Sub-total</td>
            <td style="text-align: center;" width="54%">$36.89</td>
        </tr>
        <tr>
            <td colspan="3" width="67%"> <font face="arial"> Tax @ 5.75%</font></td>
            <td style="text-align: center;" width="54%">$&nbsp; 2.12</td>
        </tr>
        <tr>
            <td colspan="3" rowspan="1" valign="top">Shipping </td>
            <td style="text-align: center;">$&nbsp; 2.00 </td>
        </tr>
        <tr>
            <td colspan="3" width="67%"><b>Total</b></td>
            <td style="text-align: center;" width="54%"><b>$41.01</b></td>
        </tr>
    </tbody>
</table>
<br>
<font
        face="arial"><b><span style="font-weight: bold;">OUR SHIPPING POLICY
            IS:</span>A subtotal $0 - $49.99 will be $2 shipping<br>
        A subtotal $50 - $99.99 will be $5 shipping<br>
        Subtotals over $100 will be charged 5% of the subtotal amount</b></font>
<font
        face="arial">
<br><br>		
<b>HINT</b>: Be sure to test out your code for different
    item quantities to be sure that all of your code is working properly!</font>
  

#### Quality Check list: 

 - Good code comments
 - Shipping calculated correctly for different amounts
 - Total calculated correctly
 - All requirements for Invoice1 still met

{% include wod-times.html Rx="<9 min" Av="9-18 min" Sd="18-25 min" DNF="25+ min" %}

If you get stuck you can watch an [example solution screencast here](https://youtu.be/voV10EnWLkA). 