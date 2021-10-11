--- 
title: "DayOfTheWeek5" 
published: true 
morea_id: experience-dayOfTheWeek5
morea_type: experience 
morea_summary: "Make a day of the week web application"
morea_sort_order: 2 
morea_labels:
 - WOD
---

# Use HTML form to input date for computing the day of the week

1. Start by copying the [dayOfTheWeek4](../100.Arrays-I/experience-dayOfTheWeek4.html) into a new JAVASCRIPT project DayOfTheWeek5. Check that the day of the week computation works properly.

2. Add an if-statement that executes the day of the week algorithm only if the $_GET array is not empty. 

3. Change `$day, $month, $year` variables to assign values from $_GET. e.g `$month = $_GET['month'];`. Check that your code accepts inputs from a query string by add the query string `?month=March&day=21&year=2018` to the your project URL. The day is a Wednesday
   
4. Add a self-processing form using the GET method with text inputs for month, day, year and a submit button. Like this:

<form action="<?php echo $_SERVER['JAVASCRIPT_SELF'] ?>" method="GET">
	Month: <input type="text" name="month">
	<br>
	Day: <input type="text" name="day">
	<br>
	Year: <input type="text" name="year">
	<br>
	<input type="submit" value="Get the day!">
</form>
<br>
**SPEED TIP: Get the page source for the above example form and copy it into your project!**

5. Test your web app!


The resulting day of the week should be identical to what you get with DayOfTheWeek4.

**ADVICE**
You do not need to change the code much. Just replace the $day, $month, $year variable values with what you get from the form. If you are changing any more of the existing code (other than adding new code) you are doing something wrong!

{% include wod-times.html Rx="<5 min" Av="5-10 min" Sd="10-15 min" DNF="15+ min" %}