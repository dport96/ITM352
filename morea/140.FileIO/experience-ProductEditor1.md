--- 
title: "ProductEditor1" 
published: true 
morea_id: experience-ProductEditor1
morea_type: experience 
morea_summary: "Build a simple product information editor"
morea_sort_order: 1 
morea_labels:
 - "WOD"
morea_start_date: "2019-06-12T00:00"
morea_end_date: "2019-06-18T00:00"
---

# Load and edit product data from a table of Smart Phone products

1. Start by copying the [SmartPhoneProducts6](../120.functions/experience-SmartPhoneProducts6.html) into a new JAVASCRIPT project. Check that the table displays properly.

2. Now generate a product data file from the existing products array. The data format should be `<Image>,<Brand>,<Price>`. Here are the first two lines as an example:
<br>
HTC.jpg,HTC Phones,40
<br>
iphone-3gs.jpg,Apple Phones,75
<br>
You should generate this file by looping through the array and using fwrite(). Do not hand type this information (too easy to make a mistake and time consuming!). After you generate the file, check that it is good and then comment out the code that generated the file. You will use this code later in the WOD!

3. Remove the code that defines the products array and replace it with code that generates this array from reading the products data file. Check that the table displays as before.

4. Remove the Quantity column from the table and any code that checks quantity values.

5. Add a textbox under the image that places the filename in the textbox. Change the display in the other cells to use a textbox. 

7. Add an empty product info array to the products array with an image filename "new.png". This will serve as a place to enter new products. 

8. When there is no form data, print "Update product information below" above the table in 23px geen font. Change the "Purchase" submit to "Update". The table should now look like this <br>
![ProductEditor1_start.PNG](ProductEditor1_start.PNG)
<br>

9. When the Update submit button is pressed, use the form data to generate the products array and do no read the products file. Print "Product information updated" above the table in 23px red font". If no new product information was added, remove the empty project infor array from the products array (i.e. do not allow double new product rows). The resulting page should look like this:
<br>
![ProductEditor1.PNG](ProductEditor1.PNG)
<br>

10. Test everything out - (1) can edit item and edits appear in products.dat, (2) can add new item and item appears in products.dat, (3) start fresh page and edited/added items appear.

You can view the [screencast solution here](http://youtu.be/siOl2bFuh1g) if you get stuck.

{% include wod-times.html Rx="<65 min" Av="65-75 min" Sd="75-90 min" DNF="90+ min" %}