---
title: "Assignment 1 results"
published: true
morea_id: assessment-Assignment1
morea_type: assessment
morea_sort_order: 1
morea_outcomes_assessed:
 - outcome-assignment1
morea_chartjs_data: "[1,2,5,9,5]"
morea_chartjs_labels: '["3.5<3.6","3.6<3.7","3.7<3.8","3.8<3.9","3.9<=4.0"]'
morea_chartjs_caption: |

  Assignment 1 is the first full application extending the concepts from the SmartPhone 6 (or 7) WOD.

  Discussion:

    * Most pople took this assignment seriously and did a very good job!
    * Some people seemed to copy someone else's code (possibly from the other 352 section or a previous 352 student) and just added different pictures and product info. If you did this you needed to **credit the original author of the code.** Second, you are missing the point of the assignment if you do not try to build your own application. If your code is mostly the same as someone else's you will find assignment 2 extreemly tough. If you worked together with someone, you need to say this in your comments. If you used someone elses code, you need to say this. In assignment 2 I will be much stricter about this. *Do not submit someone elses code as your own!*
    * Common issues:
    
      * A large number of people made use of the code from the SmartPhone 6 WOD but did not give credit (or a reference) for this code. SmartPhone 6 was not designed for Assignment 1 and it will cause major headaches if you use it blindly. Also you will spend more time trying to get it to work and it will be lower quality than if you just wrote the code yourself.
      * A lot of people uploaded the nbproject folder to the class website. This is NOT part of your application code.
      * A number of people just copied the boring interface from the SmartPhone 6 WOD or just dumped the products on the screen. In assignment 2 I will be looking to see that you develop a nice interface approprite for your e-commerce site. IMPRESS ME! You know how to use HTML/CSS. Maybe try a framnwork like Bootstrap.
      * A lot of people forgot to validate if the user actutually selected any items (i.e. not all quanties are 0) which led to "empty invoices"
      * Some peole forgot to not print products in the invoice that had 0 quantity
      * A few people did not make use of custom functions
      * Product data redundancy was a problem for a bunch of folks. In Assignment 2 you must not have any data or code redundancy.
      * So many people forgot to display a shipping policy! How are users supposed to know why the shipping cost is what is displayed?
    
    * Kudos
     
      * A few people made use of HTML5 textbox attributes to handle the validation in the client (i.e. browser). This is a great thing! But you must also validate in the backend (server) in case the data did not come directly from your form. I could show you some fun hacker tricks for applications that do not validate in the backend!        
---

{%  include assessment-chartjs.html  %}