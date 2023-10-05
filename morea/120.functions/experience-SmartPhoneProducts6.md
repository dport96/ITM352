--- 
title: "SmartPhoneProducts6" 
published: true 
morea_id: experience-SmartPhoneProducts6
morea_type: experience 
morea_summary: "Using HTML form arrays"
morea_sort_order: 3 
morea_labels:
 - WOD
morea_start_date: "2019-05-29T00:00"
morea_end_date: "2019-05-31T23:59"
---

# Use a function to display an HTML form to select quantities from a table of Smart Phone products and also to display order

1. Start by copying the [SmartPhoneProducts5](../110.HTML-forms/experience-SmartPhoneProducts5.html) into a new JAVASCRIPT project. Check that the table displays properly.

2. Make this a one-file, self-processing page by eliminating process_order.php. You will need to add logic to switch between selecting product quantities and displaying the order.

3. Create a function with interface void display_products(array $products_to_display [, bool $has_posted_quantities]). This function will take the multi-dimensional array of products $products_to_display and print the HTML table with quantity selection textboxes by default. If an optional $has_posted_quantities is TRUE, just the quantities in the post from the textboxes will be shown in place of the selection textboxes.  

4. Use display_products() to display the selection table and order tables.

5. Don't forget to not print the submit button if the selections are being displayed i.e. $has_posted_quantities is TRUE.


You can view the [screencast solution here](https://youtu.be/SHMozKQ-44k) 

{% include wod-times.html Rx="<18 min" Av="18-28 min" Sd="28-38 min" DNF="38+ min" %}