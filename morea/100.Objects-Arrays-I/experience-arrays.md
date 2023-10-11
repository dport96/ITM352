--- 
title: "Lab: Object and Arrays I" 
published: true 
morea_id: experience-objects-arrays
morea_type: experience 
morea_summary: "Learn About Collections and Simple Objects and Arrays"
morea_sort_order: 1 
morea_labels:
 - "Lecture Lab"
morea_start_date: "2023-10-03T00:00"
---

# Instructions
Try to do as many of the exercises as possible, in the order listed. You may skip an exercise if it is impossible to accomplish the task described (for technical reasons). If you have trouble with an exercise, contact the instructor for help – do not just skip the exercise! You may work with a partner, but each of you must submit your individual work. Work should be done electronically on this document (cut and paste as needed but be careful of incorrect characters). Anything that involves code should be tried out in VS Code before submitting (you may cut and paste directly from VS Code). Submit work before the next class. If you cannot submit by this time, try to do so as soon as possible.

You may wish to open the [presentation slides](ITM352_Objects_Arrays.ppt) for convenience of viewing and copy-paste. When asked by the instructor do the lab exercises indicated. If you get done early, feel free to go on. If you are not done before the instructor indicates the next exercise, raise your hand and explain where you are at. Later parts often depend on completing previous parts so do not let yourself get behind and expect to catch up!

Note: Whenever you see something like \<Your Name\> and it's not obviously an HTML tag, it means replace this with you own information as indicated inside. e.g. replace \<Your Name\> with Joe (or whatever your name is).

For exercises that do not ask specific questions but have you perform tasks, copy any code you created and the output as your answer to the exercise. Some exercises ask for explanations. Make notes for your answer and complete these after class before submitting. Do not try to make complete answers if it keeps you from progressing!

Do all your code work in VS Code. Copy and paste from there. Please ask the instructor for help if you get stuck; this is **NOT** a test.

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
a. Create a new file Ex3a.html and copy the array `product_quantities` you used in Exercise #1 into this file. 
Use a for loop to iterate through the `product_quantities` array, printing each element in its own row of a table. The result should look something like:

<table style="border: 1px solid black;text-align: center;">
<tr style="border: 1px solid black;"><th style="border: 1px solid black;">Product #</th><th>Quantity</th></tr>
<tr style="border: 1px solid black;"><td style="border: 1px solid black;">1</td><td>0</td></tr>
<tr style="border: 1px solid black;"><td style="border: 1px solid black;">2</td><td>4</td></tr>
<tr style="border: 1px solid black;"><td style="border: 1px solid black;">3</td><td>2</td></tr>
<tr style="border: 1px solid black;"><td style="border: 1px solid black;">&vellip;</td><td>&vellip;</td></tr>
</table>

*Hint: inspect this page source and copy the HTML that made the table as a start.*

b. Make a copy of Ex3a.html and name it Ex3b.html. Add the following code:

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
Modify your program to add name, prices, and extended costs columns to the table for products objects given the `products` array.

Put your code or a link to the code in your repo here:
```


```

#### Exercise 4. Using DOM objects dynamically (On Your Own)
Sometimes you will need to create and add DOM objects after the page is loaded. When you create a DOM object it will need to be added to the document `node` by inserting or appending (which is the same as adding it to the HTML hierarchy)

a. Copy Ex3b.html and name it Ex4a.html. Modify your program to append a new row to the table when the table is clicked on. Start by putting `onclick="new_row = this.appendChild(document.createElement('tr'));"` in the `<tbody>` element of the table to create and add a new row element to the table. After this, add `new_cell = new_row.appendChild(document.createElement('td'));`  to add a cell element to the new row. Use the `new_cell` reference to set the `innerHTML` of the cell to `xxx`. Check that this works by clicking the table a few times. Now use a loop to add the same number of`<td>` objects to the new row object as the first row in the table. If you are in the tbody element, you can get the the number of cells in the first row of the table using `this.rows[0].cells.length`.

Put your code or a link to the code in your repo here:
```


```

Explain why you must work with the DOM objects rather than `document.write()` to change the page after it has been loaded:
*Hint: The page is the `document` DOM object which is a kind of a collection (like an array) of DOM objects. When the HTML is loaded, the HTML entities become DOM objects that are added to `document`.*
```


```

b. Copy Ex4a.html and name it Ex4b.html. Now add `<input type="button" value="Delete Last Row">` after the table. Write code in the `onclick` event attribute for this to delete the last row. Start by giving the tbody an id `invoice_table`. Then use this id and `.rows.length` to get the number of rows. Use this value and the `.deleteRow()` method of the tbody object to delete the row.  

Put your code or a link to the code in your repo here:
```


```

c. Copy Ex4b.html and name it Ex4c.html. Above the table, Add the style `tr:hover {background-color: yellow;}` so you will see which table row is selected. If this row is clicked, have it delete this row. Change the `Delete last row` button to `Add new row` and make it add a new row when clicked. Essentially you are switching the behavior for clicking a row and clicking the button. There are several ways you can implement this. You should think this through carefully and implement it bit by bit testing each change along the way. Here is a suggested way:
- Replace the code in the onclick for the button with the code that creates a new row from the onclick in the table. Check that when the button is pressed a new row is added.
- In the `<tr>` element, add code to onlick that tells `invoice_table` to delete the row `this.rowIndex` when the row is clicked. Check that when the row is clicked, it is removed from the table.
- You will notice that when new rows are added, the background color does not change when you mouseover (hover) and when you click on the row it does not get removed from the table. This is because the newly added row does not have the onclick set to anything and the style applied to the table rows is only applied when HTML entities are converted into DOM objects. Since we are directly creating the tr DOM object, it does not have the onclick set or the tr style applied to it. Rather than add these manually, we can use `invoice_table.rows[1].cloneNode(true)` to make a copy of the first invoice table row DOM object which already has the onclick and style set. Modify the code in the onlick of the button to do this rather than make a new tr object. Note that you will not be using `createElement()` anymore and you will be modifying the cells (td) in the copy of the tr and no longer creating them. Don't overthink this or write (or copy) a lot of code. You will find the code for this is shorter and simpler than the code you had before.

Put your code or a link to the code in your repo here:
```


```

#### EXTRA CREDIT EXERCISE: 
a. Create 3x3 indexed array `TicTacToe` (an array with 3 arrays as values where each array has 3 elements) with "X" or "O" in each of the 9 elements. Now print out an HTML table that displays the contents of TicTacToe. You must use two "for" loops. One loop to index the rows and another inside this loop to index the columns. The final product should look like:

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

b. Now initialize the array cells with the `-` string. Add the following styles 
```
    td:hover {
        background-color: chartreuse;
    }
    td {
        height:25px;width:20px;text-align:center;cursor:cell;
    }
```
Add a `div` under the table with `id=status_div` and the innerHTML `X goes first`. Define an array `marks =["X","O"]` and a variable `move_num = 0`. In the `onclick` for each `<td>` add code that first checks that `this.innerHTML` is `-`. If so, set `this.innerHTML` to `marks[move_num%2]`. Set `status_div.innerHTML = marks[(++move_num)%2] + ' goes'`. Have fun playing Tic Tac Toe!

c. (HARD!) When you set the mark in the table cell, also set the `TicTacToe` array for the element at the current row and column to `marks[move_num%2]` to keep track of what is in the cells. You can "flatten" the `TicTacToe` array into a strting using `board_str = TicTacToe.map(e => e.join('')).join('')`. Now define a regular expression `const re = /^(?:(?:...){0,2}([OX])\1\1|.{0,2}([OX])..\2..\2|([OX])...\3...\3|..([OX]).\4.\4)/g` which will match if there is a win in `board_str` (i.e. three in a row of either X or O). You can use `win = re.exec(str)` to check for a match. If there is no match, `win` will be `null`. If there is a match, `win` will be an array with the matching string in the first element and if it matched with "X" or "O" in one of the other elements. Use this and an if-else to determine if the game was won or a draw (use `(move_num + 1) === 9` or `board_str.includes('-')===false` to determine that all moves have been made). If no win or draw, display who's move it is as you did in (b).

d. (SUPER HARD!!) Make the computer play "O" by modifying the `onclick` so that after a move is made with "X", you algorithmically determine the best place to put an "O" and put it there (in the array and in the table). To find the best move you can implement for following strategy:

i. 	Loop through the `TicTacToe` array and check if there is an open square that will be a win for O, if so, move there. If not, try step (ii).

ii. Check if there is an open square that would block a win for O in the next turn. You can do this b looping through the `TicTacToe` array and for each empty cell add an "O" and check if it's a win for O. If so, move X there. If not, try step (iii).

iii. 	If no winning or blocking move is found, prioritize a move to an open square in this order - center, corners, edges. You can represent this as an array of indices for the `TicTacToe` array `moveOrder = [[1,0], [0,0], [0,2], [2,0], [2,1], [0,1], [1,0], [1,2], [2,1]];` loop through this array and stop for the first empty square with an index in `moveOrder` and put X at that index.