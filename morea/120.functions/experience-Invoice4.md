--- 
title: "Invoice4" 
published: true 
morea_id: experience-Invoice4
morea_type: experience 
morea_summary: "Use functions to generate an invoice of products"
morea_sort_order: 2 
morea_labels:
 - "WOD"
morea_start_date: "2022-03-02"
morea_end_date: "2022-03-08"
---

# Use functions to generate an invoice
In this WOD you want enable the invoice to generate the table of items from an array of product objects from SmartPhoneProducts3 and an array of quantities for those products. The quantities data may not be good and must be validated before used and feedback given if invalid.

1. Start with a copy of [Invoice2](../070.flow-control-I/experience-invoice2.html) and rename it "Invoice3". Check that the table displays properly. Fix any problems present.

2. Now get the `product_data.js` file from `SmartPhoneProducts3` and save it here. Delete the product data variables at the top if the file and replace it with `<script src="./product_data.js"></script>` then use the `products` array of product objects for the invoice (as in `SmartPhoneProducts3`). Note: you will not be using the image property for anything in this WOD. Hint: Use the regular expression `item([0-9]+)` to find all uses of the variables `item1`,`item2`, ... and replace with `products[$1-1].brand` to change them into `products[1-1].brand`,`products[2-1].brand`, ... The reason we use `$1 -1` is that the variables numbering starts with 1 whereas the array first element is index 0. You can use a similar regEx to find and replace the other variables. For `price` you may want to use `(?<!_)price([0-9]+)` to avoid matching with `extended_price`

3. Define an array `quantities` and initialize it with some example product quantities. The index of a product object in `products` should be used as the index in `quantities` for that products quantity. e.g. `quantities[0]` represents the quantity of the product `products[0]`. Replace all the quantity variables with this array e.g. replace `quantity1` with `quantities[0]`. Check that the table looks the same as Invoice2 but with smartphone products and quantities from the `quantities` array. Hint: use a regEx like you did in (2).
   
4. Move the tax, shipping, and grand total calculations to just after the **last** product row is output. Leave the extended price and subtotal calculation where they are. Check that the table looks the same. 

5. Delete the extended price calculations. Replace the subtotal calculation with `var subtotal = 0`.

6. At the **top** of the file, create a function with **interface** `void generate_item_rows(array product_quantities_array)`. Copy the code that produces the first row in the invoice table and copy it into this function. Put this code in a loop, `for(let i in array product_quantities_array)`, that goes through `product_quantities_array` (not `quantities`) to produce all the rows of items for the table. Add above the `document.write()` for the row, `let extended_price = product_quantities_array[i] * products[i].price` and use this where you output the extended price in the row. Below the `document.write()` add the code `subtotal += extended_price`. Be sure to change the `extended_price1` with `extended_price1` and change the indices for `products` and `quantities` to `i`

7. Delete all the invoice rows and in its place, call this function using `quantities` as the parameter. Check that the table displays as expected. Note that your extended prices, tax, shipping, and total should work.
   
8.  Add a conditional inside the loop of the `generate_item_rows()` function to `continue` if the product quantity is 0. This should skip printing out a row that has no quantity. Put some 0's in your `quantities` array and check that these products do not appear on the invoice.
   
9. Copy the function `isNonNegInt()` from the Functions lab and use it in `generate_item_rows()` to check that a quantity is valid before writing the table row. If a value is invalid, have it skip the calculation and printing the table row. Test that this function performs as expected by putting various invalid quantities in `quantities`. For this, use a separate conditional statement form the one you used above.
   
10. Rather than skipping printing item rows with bad quantities, modify what is printed to output the specific errors in the quantity table cell corresponding to that product. Errors should use <div style="color:red;">red</div> text and all errors should be displayed. When there is an error, the `extended_price` should be set to `0` to avoid fouling up the subsequent invoice calculations.

The final display of the invoice should look like Invoice3 except the item table rows have SmartPhoneProducts. For example:

  <table border="2">
    <tbody>
      <tr>
        <th style="text-align: center;" width="43%">Item</th>
        <th style="text-align: center;" width="11%">quantity</th>
        <th style="text-align: center;" width="13%">price</th>
        <th style="text-align: center;" width="54%">extended price</th>
      </tr>
    <tr>
      <td width="43%">Apple</td>
      <td align="center" width="11%">1 </td>
      <td width="13%">$75</td>
      <td width="54%">$75</td>
    </tr>
    
    <tr>
      <td width="43%">Nokia</td>
      <td align="center" width="11%">2 </td>
      <td width="13%">$35</td>
      <td width="54%">$70</td>
    </tr>
    
    <tr>
      <td width="43%">Samsung</td>
      <td align="center" width="11%">3 </td>
      <td width="13%">$45</td>
      <td width="54%">$135</td>
    </tr>
    
    <tr>
      <td width="43%">Blackberry</td>
      <td align="center" width="11%">4 </td>
      <td width="13%">$10</td>
      <td width="54%">$40</td>
    </tr>
    
      <tr>
        <td colspan="4" width="100%">&nbsp;</td>
      </tr>
      <tr>
        <td style="text-align: center;" colspan="3" width="67%">Sub-total</td>
        <td width="54%">$320.00
        </td>
      </tr>
      <tr>
        <td style="text-align: center;" colspan="3" width="67%"><span style="font-family: arial;">Tax @
            5.75%</span></td>
        <td width="54%">$
          18.40
        </td>
      </tr>
      <tr>
        <td style="text-align: center;" colspan="3" width="67%">Shipping</td>
        <td width="54%">$
          16.00
        </td>
      </tr>
      <tr>
        <td style="text-align: center;" colspan="3" width="67%"><strong>Total</strong></td>
        <td width="54%"><strong>$
            354.40</strong></td>
      </tr>
    </tbody>
  </table>
  <div>
    <br><b>
      OUR SHIPPING POLICY IS:A subtotal $0 - $49.99 will be $2 shipping
      A subtotal $50 - $99.99 will be $5 shipping
      Subtotals over $100 will be charged 5% of the subtotal amount
    </b> </div>

<hr>
Here is an example of the invoice with quantity errors:

  <table border="2">
    <tbody>
      <tr>
        <th style="text-align: center;" width="43%">Item</th>
        <th style="text-align: center;" width="11%">quantity</th>
        <th style="text-align: center;" width="13%">price</th>
        <th style="text-align: center;" width="54%">extended price</th>
      </tr>
    <tr>
      <td width="43%">HTC</td>
      <td align="center" width="11%">1</td>
      <td width="13%">$40</td>
      <td width="54%">$40</td>
    </tr>
    
    <tr>
      <td width="43%">Apple</td>
      <td align="center" width="11%">-1<br><span style="color:red;">Negative value!</span></td>
      <td width="13%">$75</td>
      <td width="54%">$0</td>
    </tr>
    
    <tr>
      <td width="43%">Nokia</td>
      <td align="center" width="11%">2.1<br><span style="color:red;">Not an integer!</span></td>
      <td width="13%">$35</td>
      <td width="54%">$0</td>
    </tr>
    
    <tr>
      <td width="43%">Samsung</td>
      <td align="center" width="11%">-3.2<br><span style="color:red;">Negative value!<br>Not an integer!</span></td>
      <td width="13%">$45</td>
      <td width="54%">$0</td>
    </tr>
    
    <tr>
      <td width="43%">Blackberry</td>
      <td align="center" width="11%">cat<br><span style="color:red;">Not a number!<br>Not an integer!</span></td>
      <td width="13%">$10</td>
      <td width="54%">$0</td>
    </tr>
    
      <tr>
        <td colspan="4" width="100%">&nbsp;</td>
      </tr>
      <tr>
        <td style="text-align: center;" colspan="3" width="67%">Sub-total</td>
        <td width="54%">$
          40.00
        </td>
      </tr>
      <tr>
        <td style="text-align: center;" colspan="3" width="67%"><span style="font-family: arial;">Tax @
            5.75%</span></td>
        <td width="54%">$
          2.30
        </td>
      </tr>
      <tr>
        <td style="text-align: center;" colspan="3" width="67%">Shipping</td>
        <td width="54%">$
          2.00
        </td>
      </tr>
      <tr>
        <td style="text-align: center;" colspan="3" width="67%"><strong>Total</strong></td>
        <td width="54%"><strong>$
            44.30</strong></td>
      </tr>
    </tbody>
  </table>
  <div>
    <br><b>
      OUR SHIPPING POLICY IS:A subtotal $0 - $49.99 will be $2 shipping
      A subtotal $50 - $99.99 will be $5 shipping
      Subtotals over $100 will be charged 5% of the subtotal amount
    </b> </div>

If you get stuck you can ask the instructor or TA for a screencast solution.

{% include wod-times.html Rx="<25 min" Av="25-30 min" Sd="35-40 min" DNF="40+ min" %}