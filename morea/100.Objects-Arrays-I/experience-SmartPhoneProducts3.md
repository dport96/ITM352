--- 
title: "SmartPhoneProducts3" 
published: true 
morea_id: experience-SmartPhoneProducts3
morea_type: experience 
morea_summary: "Use a loop and arrays to generate a table of Smartphone products"
morea_sort_order: 2 
morea_start_date: "2024-02-21T00:00"
morea_end_date: "2024-02-29T23:59"
morea_labels:
 - WOD
---

# The objective of this WOD is to use a loop and arrays rather than `eval()` to generate a table of Smart Phone products

1. Start by copying the [SmartPhoneProducts2](../080.flow-control-II/experience-SmartPhoneProducts2.html) into a new project. Check that the table displays properly.

2. Create a new file `products_data.js` in the same directory as you are working here. **NOTE: If you already have this file skip to step 3.** Cut the product data variables in the `<head>` and paste it into this file. Add the following to the `<head>` to load this code when this page load the HEAD element:
   ```HTML
<script src="./products_data.js"></script>
```
(Note this is similar to Exercise #5 in Lab 8)

3. Convert the product variables into product information *objects* `product1, product2, ..., product5` with properties `image`, `brand`, and `price` to hold the respective information about that product. You should use find and replace rather than manually rewriting the code. It's possible to write a regular expression that will convert the product variables into objects all in one find and replace but it's probably faster to use three separate regEx find and replaces :]

4. Create an array called `products` to hold all the five product objects.

5. Go back to `products_display.html` and write a loop to generate the table using the array and object defined above. The loop should not be "hard-coded" with the number of products and should work based on the number of product objects in the array. Hint: use  `for (i = 0; i < products.length; i++)` or `for (i in products)` or `for (product of products)`. Talk about which one you use and why.
   

The final display should look identical to SmartPhoneProducts2 and have **no** product `evals()` and no product information variables.

If you get stuck, ask the TA or Instructor for the screencast solution. 

{% include wod-times.html Rx="<7 min" Av="7-14 min" Sd="14-20 min" DNF="20+ min" %}