---
title: "Lab: HTML Forms and Javascript"
published: true
morea_id: experience-html-forms
morea_type: experience
morea_summary: "Using Javascript to process HTML forms"
morea_sort_order: 4
morea_labels:
 - Lab Lecture
morea_start_date: "2022-10-11"
---


### Instructions: 
Open the [presentation slides](ITM352_Forms.ppt). 

We will work through these exercises and address any questions and provide examples. When asked by the instructor do the lab exercises listed. Use Javascript unless asked to do otherwise.

Do all your code work in VSCode unless otherwise instructed. Please ask the instructor for help if you get stuck this is **NOT** a test.

Copy code and submit your answers on Laulima


#### Exercise 1: Using Form Elements (3 minutes)

a. Create a file called `order_page.html` in the current directory and add textbox with label "quantity desired:". Add a `<span id='qty_textbox_message'>Enter a quantity</span>` after the textbox. Use the `onkeyup` attribute to to set the `innerHTML` for the span to the value of the textbox when when something is typed in the textbox. Use the `this` object reference of the textbox object to access its `value` property.

b. Add `id="quantity_textbox"` to the textbox. Create a function `checkQuantityTextbox` and move the code you used in (a) to this function. Check that it works the same.

c. Add the function `isNonNegInt` from Lab11 and use it to check what is input into the textbox and display errors in the span if there are errors. 

d. There is small logical error in the `isNonNegInt` function. When the value is not a number, does it make sense to also say it's not an integer? add code to fix this!

#### Exercise 2: Simple Processing of User Input (3 minutes)

a. In `order_page.html` add a button element with value `Purchase` that when pressed displays a new page `Thank for you for ordering xxxx things!` where `xxxx` is whatever was in the textbox. If you use `document.write()` after the page is loaded it will replace the current page rather than adding to it (since it will not know where to add to the page). This is one way to create a new page without loading anything from the server. Another way that does not create a new page (maybe preserving CSS styling and layout) is to replace the innerHTML of the page body `document.body.innerHTML = 'xxx` Define a function `displayPurchase()` to make this new or updated page and use it as the value for the `onclick` attribute of the button.

b. Make use of the `isNonNegInt` function to only display the new page if a non-negative quantity was entered (validate the input). If there are errors, it should stay on the current page and allow the user to make corrections.

#### Exercise 3: Passing data using form submit (5 minutes)
a. Add a `<form>` element with `name="quantity_form" action="display_purchase.html" method="GET"` and change the input to a **submit button** and remove the `onclick` attribute. Change the `id` to a `name` attribute for the textbox. 

Create the file `display_purchase.html`. When the form is submitted, the data for the textbox will be in the query string when `display_purchase.html` is requested (from the form action). You can get the query string from the current document with `document.location.search`.  Put at the top of the file:
```Javascript
let params = (new URL(document.location)).searchParams;
```
which will put the query string parameters into a `URLSearchParams` object which you can use `params.get("quantity_textbox")` to get the query string value for `quantity_textbox` and `params.has("quantity_textbox")` will return a boolean `true` if the query string has key `quantity_textbox` and use this in an if-statement to output `Thank for you for ordering xxx things!` only if the query string has key `quantity_textbox`. 

Look at the output in the terminal from the server. Explain why you see a new GET request and why it's different than the original page request. Explain where the query string in the request comes from. 
```

```

b. Now add the `isNonNegInt` function to `display_purchase.html`. If the data is invalid (not a non-negative integer) then have it output `Invalid quantity. Press the back button and try again.`

#### Exercise 4: Self-processing form (total 8 minutes)

a. It is not ideal to have the user hit the back button when there is an error. It's better to display the error on the page it occurred. Modify `order_page.html` to be self-processing by changing the form action to `""`. Copy the code in `display_purchase.html` that uses the query string to output the purchase. 

Try out valid and invalid values. Note that unlike before, this write adds to the page rather than replacing it since the page is reloaded when the form is submitted. You can use `window.stop()` at the point you wish to stop the page from loading.

b. When there is an invalid entry why does value in the textbox vanish? To make the textbox "sticky" when there is an invalid quantity submitted you can get the previous value of the textbox from the query string and set the value if the textbox to it anytime *after* the textbox is loaded (or after the page is loaded). If you do not, the textbox object will not have been defined and you will get an error accessing it. Add the following code after the textbox is defined:
```Javascript
if (params.has('quantity_textbox')) {
    quantity_form["quantity_textbox"].value = params.get('quantity_textbox');
    checkQuantityTextbox(quantity_form["quantity_textbox"]);
}
```

#### Exercise 5: Page redirection and passing data (On Your Own)

It is is common that a web app will need to direct the user to a different page other than the one requested. Say that after `quantity_form` is submitted you want the user to be sent to `display_purchase.html` if the quantity input is valid or stay on the same page if it is invalid and show the errors. This can be done in various different ways as we will explore in subsequent labs.

In `order_page.html` in replace the `document.write()` statement with `window.location.href = "display_purchase.html" + document.location.search;` and remove the `window.stop` statement.

Notice that this is a way you can validate data and show errors where they occur rather than make the use hit the back button.


#### Exercise 6: POST method vs GET method (On Your Own)
a) (3 minutes) Change the form method from GET to POST. Look at the output in the terminal from the server. Explain why you see a new POST request and why it's different than the GET request. Why didn't the value from the textbox get passed? Why is there no query string"? 

b) (3 minutes) Explain how a POST request must be processed. When is it advantageous to use the POST method and when is it advantageous to use the GET method?

