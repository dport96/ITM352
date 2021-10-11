--- 
title: "Lab 10: Object and Arrays I" 
published: true 
morea_id: experience-objects-arrays
morea_type: experience 
morea_summary: "Learn About Collections and Simple Objects and Arrays"
morea_sort_order: 1 
morea_labels:
 - "Lecture Lab"
morea_start_date: "2021-10-05"
---

# Instructions
Try to do as many of the exercises as possible, in the order listed. You may skip an exercise if it is impossible to accomplish the task described (for technical reasons). If you have trouble with an exercise, contact the instructor for help – do not just skip the exercise! You may work with a partner, but each of you must submit your individual work. Work should be done electronically on this document (cut and paste as needed but be careful of incorrect characters). Anything that involves code should be tried out in VS Code before submitting (you may cut and paste directly from VS Code). Submit work before the next class. If you cannot submit by this time, try to do so as soon as possible.

You may wish to open the [presentation slides](ITM352_Objects_Arrays.ppt) for convenience of viewing and copy-paste. When asked by the instructor do the lab exercises indicated. If you get done early, feel free to go on. If you are not done before the instructor indicates the next exercise, raise your hand and explain where you are at. Later parts often depend on completing previous parts so do not let yourself get behind and expect to catch up!

Note: Whenever you see something like \<Your Name\> and it's not obviously an HTML tag, it means replace this with you own information as indicated inside. e.g. replace \<Your Name\> with Joe (or whatever your name is).

For exercises that do not ask specific questions but have you perform tasks, copy any code you created and the output as your answer to the exercise. Some exercises ask for explanations. Make notes for your answer and complete these after class before submitting. Do not try to make complete answers if it keeps you from progressing!

Do all your code work in VS Code. Copy and paste from there. Please ask the instructor for help if you get stuck this is **NOT** a test.

# Submission
When we are done, submit work before the next class. If you cannot submit by this time, try to do so as soon as possible after class. Copy this lab with your answers and paste your into the Laulima assignment submission box to [Laulima Assignments](https://laulima.hawaii.edu). If you do not submit something to Laulima you will not get credit.

#### Exercise 1. (total 10 minutes)
a. (5 minutes) Make a copy of the [Invoice1 WOD](../../morea/060.expressions-operators/experience-invoice1.html). In the area where you define the product variables, create a Javascript object called `product1` with attributes appropriate for the information that is used to display the invoice for the first product listed in the invoice. Set the properties for this product e.g. set productName to iPhone 7, set price to $47.95 etc. Put your `product1` object code here:
```




```


b. Where ever you used variables for the product represented by `product1`, replace them with the corresponding object property. e.g. `price1` may be `product1.price` or `product['price']`. You will need to make changes in the calculations and in the place the table is displayed. Put your code changes here:
```




```


c. (2 minutes) Show how you would change the quantity property in the `product1` object to 0. Add this after the object definition and check that the invoice changes as expected. Put your new invoice output here:
```




```

d. (2 minutes) Show how you would add a new property to `product1` called `SKU#` with value `1234`. Put your example code here:
```




```

e. (2 minutes) Show how you would remove the `SKU#` property from `product1`. Put your example code here:
```




```

#### Exercise 2. (total 14 minutes)
a. (3 minutes) Declare a simple indexed array called `product_quantities` of quantities for the products listed in Invoice1 and put it above the product variable definitions. Put your array code here:
```




```

b. (3 minutes) Given the array specified in 1a above, use it to assign the quantity values for all the products rather than directly in the quantity variables and quantity property for `product1`. Put your code changed here:
```




```


c. (2 minutes) Show how you would print out the size (i.e. number of elements) of the array in 1a. Put your code example here:
```




```


d. (1 minute) Add a new element (another product quantity) to the end of `product_quantities`. Put your code here:
```




```

e. (1 minute) Show how you would delete the just added element in `product_quantities`. Put your code here:
```




```

f. (1 minute) Given your array in `product_quantities` above, explain what is wrong with the statement, and what the statement will, in fact, print:

```Javascript
document.write(product_quantities[20]);
```

#### Exercise 3. (8 minutes)
a. Given your array in `product_quantities` above, use a for loop to iterate through the array, printing each element in its own row of a table. The result should look something like:

<table style="border: 1px solid black;text-align: center;">
<tr style="border: 1px solid black;"><th style="border: 1px solid black;">Product #</th><th>Quantity</th></tr>
<tr style="border: 1px solid black;"><td style="border: 1px solid black;">1</td><td>0</td></tr>
<tr style="border: 1px solid black;"><td style="border: 1px solid black;">2</td><td>4</td></tr>
<tr style="border: 1px solid black;"><td style="border: 1px solid black;">3</td><td>2</td></tr>
<tr style="border: 1px solid black;"><td style="border: 1px solid black;">&vellip;</td><td>&vellip;</td></tr>
</table>

b. Copy the following code:

```Javascript 
// array of all products
// corresponds to product_quantities array
// product_quantities[i] is the quantity for products[i]
products = [
 { 'name': 'small gumball', 'price': 0.02 },
 { 'name': 'medium gumball', 'price': 0.05 },
 { 'name': 'large gumball', 'price': 0.07 },
 { 'name': 'small jawbreaker', 'price': 0.06 },
 { 'name': 'large jawbreaker', 'price': 0.10 }
];
```
Modify your program in (a) to add name, prices, and extended costs columns to the table for products objects given the `products` array.

Put your code or a link to the code in your repo here:
```


```

#### Exercise 4. Using DOM objects dynamically
Sometime you will need to create and add DOM objects after the page is loaded. When you create a DOM object it will need to be added to the document `node` by inserting or appending (which is the same as adding it to the HTML hierarchy)

a. Modify your problem in Exercise 3 to append a new row to the table when the table is clicked on. Start by getting the `<tbody>` object of the table. Then use `document.createElement('tr')` to create a new table row object which you will use the `appendChild()` method of the `<tbody>` object to add to the table. After this, use a loop to add the same number of`<td>` objects to the new row object as the first row in the table (use can get this number from the table object  using `.rows[0].cells.length`). 

Put your code or a link to the code in your repo here:
```


```

b. Now add `<input type="button" value="Delete Last Row">` after the table. Write code in the `onclick` event attribute for this to delete 

Put your code or a link to the code in your repo here:
```


```

c. (Extra Credit) Above the table, Add the style `tr:hover {background-color: yellow;}` so you will see which table row is selected. If this row is clicked, have it delete this row. Change the `Delete last row` button to `Add new row` and make it add a new row when clicked.

Put your code or a link to the code in your repo here:
```


```

#### EXTRA CREDIT EXERCISE: 
a. Create an indexed array or an indexed array with an indexed array called TicTacToe and assign either "X" or "O" to each of the 9 elements. Now print out an HTML table that displays the contents of TicTacToe. You must use a "for" loop (or loops) to traverse the array. The final product should look like:

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-baqh{text-align:center;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-baqh">x</th>
    <th class="tg-baqh">o</th>
    <th class="tg-baqh">x</th>
  </tr>
  <tr>
    <td class="tg-baqh">o</td>
    <td class="tg-baqh">x</td>
    <td class="tg-baqh">o</td>
  </tr>
  <tr>
    <td class="tg-baqh">x</td>
    <td class="tg-baqh">o</td>
    <td class="tg-baqh">o</td>
  </tr>
</table>  

b. Now start the array(s) off empty. Now make it so when you hover over a cell it is highlighted. If clicked it cycles `"X","O",""`. Use the array to keep track of what is in the cells and display. Do not directly change the cell. Have fun playing tic-tac-toe!
test
