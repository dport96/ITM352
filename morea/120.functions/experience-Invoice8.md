--- 
title: "Invoice8" 
published: true 
morea_id: experience-Invoice8
morea_type: experience 
morea_summary: "Using HTML form arrays"
morea_sort_order: 3 
morea_labels:
 - WOD
---

# Validate user input, display errors where they occur and allow for recovery.

1. Start by copying the [Invoice7](../120.functions/experience-Invoice7.html) into a new JAVASCRIPT project. Check that the table displays properly.

2. Add validation of quantities entered into the quantity textboxes. Create a function void validate_quantity(int $value) that checks if $value is a whole number and if not saves error messages for invalid quantity selections to be displayed under the textbox the error occurred.

3. Use the $errors array to display errors in the palace they occur and allow the user to fix the error and re-submit the form.


4. Make the quantity textboxes sticky (so the user does not have to re-enter all the quantities if they make a mistake).


{% include wod-times.html Rx="<15 min" Av="15-20 min" Sd="20-25 min" DNF="25+ min" %}