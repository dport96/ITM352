--- 
title: "SmartPhoneProducts1 with variables" 
published: true 
morea_id: experience-SmartPhoneProducts1vars
morea_type: experience 
morea_summary: "Use variables to display information about Smartphone products"
morea_sort_order: 2 
morea_labels:
 - "WOD"
morea_start_date: "2022-02-02"
morea_end_date: "2022-02-08"
---

# Use variables to output Smart Phone products

The goal of the WOD is to use variables to eliminate hard-coding the information for displaying products. We also want to separate the product data from the rest of the code to make it easier to maintain and change. 

1. Start by copying SmartPhoneProducts1. If you don't have a working version of SmartPhoneProducts1 you can get a zip file with a copy [here](../040.dynamic-web-pages/SmartPhoneProducts1.zip). You may also use any of the SmartPhoneProducts1 variants but you may find the spinning images annoying! Rename the folder SmartPhoneProducts1_variables, load the products_display.html page and check that the  display is as in SmartPhoneProducts1. You may also use SmartphoneProducts1_1 if you prefer. **NOTE** If your images do not appear note that The image sources have moved to `http://dport96.github.io/ITM352/morea/080.flow-control-II` (you may have 090 and now it's 080)

1. In `products_display.html` add the following variables to the `<head>` to serve as the product data:
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

1. Find all the `<h2>` elements and replace them with `<h2><script>document.write(name1)</script></h2>`. It is suggested you find the elements using the regEx `<h2>.*</h2>`

2. Find all the `<p>` elements and replace them with `<p>$<script>document.write(price1)</script></p>`. 

3. Find all the `<img>` elements and replace them with `<img id="image1_id"><script>image1_id.src = image1;</script>`. 

4. Now starting at the second `<section>`, change the variables from `name1` to `name2`, `price1` to `price2`, `image1` to `image2`. Do the same for the subsequent sections but using the respective section number for the change e.g. in section 3 change the 1's to 3's.

5. Create a file `products_data.js` in the same directory as `products_display.html` and add the line `console.log("Product variables loaded...");`. Cut and paste all the variable declarations from the `<head>` into this file. To load and execute the javascript in `products_data.js` change the empty `<script></script>` in the `<head>` to `<script src="./products_data.js>"</script>`

6. Verify that your display looks exactly like SmartPhoneProducts1 and that "Product variables loaded... appears in the console when the page loads.

You can view the [screencast solution here](https://youtu.be/2KZXM2TDljQ) if you get stuck.  

{% include wod-times.html Rx="<11 min" Av="11-20 min" Sd="20-30 min" DNF="30+ min" %}


