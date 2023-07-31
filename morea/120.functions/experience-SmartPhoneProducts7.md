--- 
title: "SmartPhoneProducts7" 
published: true 
morea_id: experience-SmartPhoneProducts7
morea_type: experience 
morea_summary: "Using HTML form arrays"
morea_sort_order: 3 
morea_labels:
 - WOD
morea_start_date: "2019-05-31T00:00"
morea_end_date: "2019-06-04T00:00"
---

# Use HTML form arrays to select quantities from a table of Smart Phone products and display order. Validate user input, display errors where they occur and allow for recovery.

1. Start by copying the [SmartPhoneProducts6](../120.functions/experience-SmartPhoneProducts6.html) into a new JAVASCRIPT project. Check that the table displays properly.

2. In the item selection form change the textbox’s names to use HTML form arrays. That is, change the names  from quantity0, quantity1, quantity2, quantity3, quantity4 to quantity[0], quantity[1], quantity[2], quantity[3], quantity[4] corresponding to the index of the product array in $products used for that row.

3. Add validation of quantities entered into the quantity textboxes. Create a void validate_quantities() that puts error messages for invalid quantities in $_POST['quantity'] into a global $errors array.

4. Use the $errors array to display errors in the palace they occur and allow the user to fix the error and re-submit the form.


5. Make the quantity textboxes sticky (so the user does not have to re-enter all the quantities if they make a mistake).

You can view the [screencast solution here]() **NOT YET AVAILABLE** if you get stuck.

{% include wod-times.html Rx="<29 min" Av="29-35 min" Sd="35-50 min" DNF="50+ min" %}