--- 
title: "SmartPhoneProducts2" 
published: true 
morea_id: experience-SmartPhoneProducts2
morea_type: experience 
morea_summary: "Use a loop to generate a table of Smartphone products"
morea_sort_order: 2 
morea_labels:
 - "WOD"
morea_start_date: "2021-10-01"
morea_end_date: "2021-10-05"
---

# Use a loop to generate a table of Smart Phone products

**NOTE:** You should have looked a the [JavaScript `eval()` Function](https://www.w3schools.com/jsref/jsref_eval.asp) reading before attempting this WOD. If you have not you will not be able to do this WOD!

The goal of the WOD is to use a loop and a generic `<section>` to eliminate the redundant code for displaying the products. We also wish to generate the product display from the data rather than hard code each section.

#### If you did [SmartPhoneProducts1 with Variables](http://localhost:4000/morea/050.variables_data_types/experience-SmartPhoneProducts1_variables.html) make a copy of this, rename it SmartPhoneProducts2 and skip to step 3

1. Start by copying SmartPhoneProducts1. If you don't have a working version of SmartPhoneProducts1 you can get a zip file with a copy [here](../040.dynamic-web-pages/SmartPhoneProducts1.zip). You may also use any of the SmartPhoneProducts1 variants but you may find the spinning images annoying! Rename the folder SmartPhoneProducts2, load the products_display.html page and check that the  display is as in SmartPhoneProducts1. You may also use SmartphoneProducts1_1 if you prefer. **NOTE** If your images do not appear note that The image sources have moved to `http://dport96.github.io/ITM352/morea/080.flow-control-II` (you may have 090 and now it's 080)

2. In `products_display.html` for add the following variables to the `<head>` to serve as the product data:
```Javascript
        var name1 = "HTC";
        var price1 = 40.00;
        var image1 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg";

        var name2 = "Apple";
        var price2 = 75.00;
        var image2 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg";

        var name3 = "Nokia";
        var price3 = 35.00;
        var image3 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg";

        var name4 = "Samsung";
        var price4 = 45.00;
        var image4 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg";

        var name5 = "Blackberry";
        var price5 = 10.00;
        var image5 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg";
```

3. Make a copy of the last `<section>` and paste it underneath. Then convert this duplicate section into string template and use `document.write()` to output it. Reload the page and verify you get a duplicate section (you should see 6 sections now).

4. Now use templates (`${}`) to replace the innerHTML of `<h2>` with the variable `name1`, and the same for `<p2>` using the variable `price1`, and the src for the `<img>` use the variable `image1`. Test that the page still appears as expected. Now above the `document.write()` add a variable `i` and initialize it to 1. Use `eval()` in the templates to generate the variable names using `i` e.g.   `eval("name" + i)`. Check that the page displays as expected. Now change `i` to 2 and check that the first section is now the same as the second section. Delete the original 5 `<sections>` (the ones not in the string template). Check that section 2 is the only one displayed. 

5. Now use a for-loop in place of the variable initialization to loop on the `document.write()` and change `i` from 1 until `eval("typeof name"+i) != 'undefined'`. Check that the page now displays as it originally did.  

You can view the [screencast solution here](https://youtu.be/Ob7nYOB5eZQ) if you get stuck.  

{% include wod-times.html Rx="<14 min" Av="14-20 min" Sd="25-30 min" DNF="30+ min" %}


