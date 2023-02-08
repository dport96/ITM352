---
title: "Invoice1"
published: true
morea_id: experience-invoice1
morea_type: experience
morea_summary: "A WOD using JS expressions to generate a sales receipt."
morea_sort_order: 2
morea_labels:
 - Practce WOD 
morea_start_date: "2023-02-03"
morea_end_date: "2023-02-14"
---

For this WOD you will create a sales receipt for a sale that contains **at least five different products** (with prices of your choosing). You **must** use expressions and variables to compute the various needed values dynamically. That is, do not "hard code" the computations. You should be able to change the variable values and the sales receipt will compute the correct values.  

Here is an example of what your invoice should look like (you can vary the look a bit if you wish): 
<div>
<table border="2">
  <tbody>
    <tr>
      <th style="text-align: center;" width="43%">Item</th>
      <th style="text-align: center;" width="11%">quantity</th>
      <th style="text-align: center;" width="13%">price</th>
      <th style="text-align: center;" width="54%">extended price</th>
    </tr>
    <tr>
      <td width="43%">Gillette Sensor 3 Razor</td>
      <td align="center" width="11%">2</td>
      <td width="13%">$1.23</td>
      <td width="54%">$2.46</td>
    </tr>
    <tr>
      <td width="43%">Barbasol Shaving Cream</td>
      <td align="center" width="11%">1</td>
      <td width="13%">$2.64</td>
      <td width="54%">$2.64</td>
    </tr>
    <tr>
      <td width="43%">Nautica Cologne</td>
      <td align="center" width="11%">1</td>
      <td width="13%">$6.17</td>
      <td width="54%">$6.17</td>
    </tr>
    <tr>
      <td width="43%">Rubbing Alcohol</td>
      <td align="center" width="11%">3</td>
      <td width="13%">$0.98</td>
      <td width="54%">$2.94</td>
    </tr>
    <tr>
      <td width="43%">Colgate Classic Toothbrush</td>
      <td align="center" width="11%">12</td>
      <td width="13%">$1.89</td>
      <td width="54%">$22.68</td>
    </tr>
    <tr>
      <td colspan="4" width="100%">&nbsp;</td>
    </tr>
    <tr>
      <td style="text-align: center;" colspan="3" width="67%">Sub-total</td>
      <td width="54%">$36.89</td>
    </tr>
    <tr>
      <td style="text-align: center;" colspan="3" width="67%"><span style="font-family: arial;">Tax @ 5.75%</span></td>
      <td width="54%">$2.12</td>
    </tr>
    <tr>
      <td style="text-align: center;" colspan="3" width="67%"><strong>Total</strong></td>
      <td width="54%"><strong>$39.01</strong></td>
    </tr>
  </tbody>
</table>

</div>

Tasks:
1. Create a directory **Invoice1** and add a file **invoice.html**. At the top of this file put a Javascript comment brifely describing what this file is. Use the `/* ... */` to make a multi line comment.

1. Under the comment form above, add a single line comment `// Product Data` then underneath define varaibles for just one product:
```Javascript
        // Product 1
        var item1 = 'Gillette Sensor 3 Razor';
        var quantity1 = 2;
        var price1 = 1.23;
```
Copy this and paste it 4 times. Change the variable names `item2, item3, ...` and corresponding values.

1. Add variables `extended_price1, extended_price2, ...` and corresponding expressions to compute the extended price for each product. Cooment this section `// Compute extended prices`

1.  Add the products' extended prices together to get an overall subtotal for the sale. Comment this section.

1.  Calculate sales tax **using 5.75% as your tax rate** and display the tax amount. Comment this section.

1.  Add together the subtotal and the tax amount to get a grand total. We won't worry about shipping or other costs for now. 

1. Add HTML to display the basic table. Create a template for one product row. to display the item, quantity, price, extended price. 

1. You have two choices in generating the product rows:

Option 1: Put the row template into a `document.write()` then string templates to fill in the product data in the row cells. Copy and paste this 4 times and change the variables as needed for each product line. 

Option 2: Add an `id="invoiceTable"` to the table. Remove the product row template. In its place use 
```Javascript
    // item row 1
   var row = invoiceTable.insertRow();
   row.insertCell().innerHTML = item1; 
   row.insertCell().innerHTML = quantity1;
   row.insertCell().innerHTML = price1.toFixed(2);
   row.insertCell().innerHTML = extended_price1;
```
Copy and paste this 4 times and adjust the variable names.

1. In the Sub-total row, use  `document.write()` inside the cell for the sub-total or set this cell `id="subtotal_cell"` and then set `.innerHTML` to the subtotal value. Don't forget to add a `$` sign.

1. In  the tax row, do the same as above. Use `.toFixed(2)` to format the tax to 2 decimals.

1. In the Total row, do the same as above and use `.toFixed(2)` to format the grand total to 2 decimals. Display your grand total in **bold** print.  

<font face="arial">
HINT:
  <br>
Do not try to create the HTML table first. Start by simply printing each row in the table as an individual line. When you have everything calculating and printing correctly, add in the table tags.&nbsp; (You could even try viewing the HTML for *this* page and copy the HTML table in the example above and then use it to change what you print in your print statement.)
 <br> <br>
HINT:
   <br>
Use string templates to `document.write()` entire rows of the table rather than mixing in many little `document.write()` scripts
  <br>
HINT:
   <br>
Check the output as you work rather than waiting until the end. It will be faster and easier to fix problems as they occur!
  <br>
</font>
  
#### Quality Checklist: 

  <font face="arial">
      
<table cellpadding="5">
  <tbody>
    <tr>
      <td>
        Is your code commented?
      </td>
      <td>
        <br>
      </td>
    </tr>
    <tr>
      <td>
        Minimum five products?
      </td>
      <td>
        <br>
      </td>
    </tr>
    <tr>
      <td>
        Prices not hard coded?
      </td>
      <td>
        <br>
      </td>
    </tr>
    <tr>
      <td>
        Subtotal is calculated correctly?
      </td>
      <td>
        <br>
      </td>
    </tr>
    <tr>
      <td>
        Sales tax is calculated correctly?
      </td>
      <td>
        <br>
      </td>
    </tr>
    <tr>
      <td>
        Total is calculated correctly?
      </td>
      <td>
        <br>
      </td>
    </tr>
    <tr>
      <td>
        Amounts only have 2 decimal places?
      </td>
      <td>
        <br>
      </td>
    </tr>
    <tr>
      <td>
        HTML table display?
      </td>
      <td>
        <br>
      </td>
    </tr>
  </tbody>
</table>
</font>
<br>

{% include wod-times.html Rx="<20 min" Av="30 min" Sd="40 min" DNF="40+ min" %}

If you get stuck you can watch an [example solution screencast here](https://youtu.be/TtjYoevG3VQ).