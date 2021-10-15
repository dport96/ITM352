--- 
title: "Invoice4" 
published: true 
morea_id: experience-Invoice4
morea_type: experience 
morea_summary: "Use functions to generate an invoice of products"
morea_sort_order: 2 
morea_labels:
 - "WOD"
morea_start_date: "2021-10-15"
morea_end_date: "2021-10-19"
---

# Use functions to generate an invoice
In this WOD you want enable the invoice to generate the table of items from an array of product objects from SmartPhoneProducts3 and an array of quantities for those products. The quantities data may not be good and must be validated before used and feedback given if invalid.

1. Start with a copy of [Invoice3](../090.algorithms/experience-Invoice3.html) and rename it "Invoice4". Check that the table displays properly. Fix any problems present.

2. Define an array `quantities` and initialize it with some example product quantities. The index of a product object in `products` should be used as the index in `quantities` for that products quantity. e.g. `quantities[i]` represents the quantity of the product `products[i]`. Replace all the quantity variables with this array e.g. replace `quantity1` with `quantities[0]`.
   
3. Now get the `product_data.js` file from `SmartPhoneProducts3` and save it here. Load this file in the HEAD (as in `SmartPhoneProducts3`) then use this product data object for the invoice and delete products data variables used previously. Convert all the product variables to use the `products` object (as in `SmartPhoneProducts3`).

5. Create a function with **interface** `void generate_item_rows(array product_quantities_array)`. Copy the code that produces the first row in the table and copy it into this function. Make a loop for this code that goes through `product_quantities_array`. This loop should produce all the rows of items for the table. Delete all the invoice rows and call this function using `quantities` as the parameter. Be sure that you leave the initialization of `subtotal` above the function call (it should be a global variable). `extended_price` can be local to the function. The table should look the same as it did previously.
   
6.  Add a conditional to the `generate_item_rows()` function to skip calculating `extended_price` and printing the table row if the quantity is 0.
   
7. Copy the function `isNonNegInt()` from Lab11 and use it in `generate_item_rows()` to check that a quantity is valid before writing the table row. If a value is invalid, have it skip the calculation and printing the table row. Test that this function performs as expected by putting various invalid quantities in `quantities`. 
   
8. Rather than skipping printing item rows with bad quantities, modify what is printed to output the specific errors in the quantity table cell corresponding to that product. Errors should use <span style="color:red;">red</span> text and all errors should be displayed. When there is an error, the `extended_price` should be set to `""` to avoid fouling up the subsequent invoice calculations.

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

If you get stuck you can view a [screencast solution](https://youtu.be/S-cOOAH3CtI)

{% include wod-times.html Rx="<25 min" Av="25-30 min" Sd="35-40 min" DNF="40+ min" %}