--- 
title: "Deploying Assignment 1" 
published: true 
morea_id: experience-Deploying-Assignment1
morea_type: experience 
morea_summary: "How to Deploy and Submit Your Application"
morea_sort_order: 4
morea_labels:
 - Instructions
morea_start_date: "2023-11-16T00:00"
---

Submit to Laulima Assignment1 in the "assignment text" text area below a link to your code and any other necessary files (e.g. images) in your personal classwork GitHub repo.

Also, you must "deploy" a working version to the class server itm-vm.shidler.hawaii.edu/itm352student in the following folder:

**Assignment1**

You will need to upload (using Cyberduck or other SFTP utility) to this location. Put all your application code in a folder named &lt;lastname&gt;_&lt;firstname&gt;_Assignment1, For example, Port_Dan_Assignment1. Inside this folder, you must have a file with the exact name "server.js" that when run with node will server your application. Your server should be set to listen on port 8080 since this is the only port we can guarantee is not blocked.

Provide a link to your home page that starts your application when your server is running on ITM-VM . The grader will use this link to test your application.

Copy and paste the following template into the submission box and replace the examples with your submission info:

<table class="MsoTableGrid" style="border-collapse:collapse; border:solid windowtext 1.0pt">
	<tbody>
		<tr>
			<td style="border-style:solid; border-width:1.0pt; padding:0.0in 5.4pt 0.0in 5.4pt; vertical-align:top; width:233.75pt" width="312">
			<p style="margin-left:0.0in; margin-right:0.0in; margin-top:0.0in"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong>Assignment 1 Code</strong></span></span></p>
			</td>
			<td style="border-left:none; border-style:solid; border-width:1.0pt; padding:0.0in 5.4pt 0.0in 5.4pt; vertical-align:top; width:233.75pt" width="312">
			<p style="margin-left:0.0in; margin-right:0.0in; margin-top:0.0in"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><a href="https://github.com/dport96/ITM352_F19_repo/tree/master/Assignment1" rel="noopener" style="color: blue;text-decoration: underline;" target="_blank">https://github.com/dport96/ITM352_F19_repo/tree/master/Assignment1</a></span></span></p>
			</td>
		</tr>
		<tr>
			<td style="border-style:solid; border-top:none; border-width:1.0pt; height:32.8pt; padding:0.0in 5.4pt 0.0in 5.4pt; vertical-align:top; width:233.75pt" width="312">
			<p style="margin-left:0.0in; margin-right:0.0in; margin-top:0.0in"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><strong>Assignment 1 start page on ITM-VM</strong></span></span></p>
			</td>
			<td style="border-bottom:solid windowtext 1.0pt; border-left:none; border-right:solid windowtext 1.0pt; border-top:none; height:32.8pt; padding:0.0in 5.4pt 0.0in 5.4pt; vertical-align:top; width:233.75pt" width="312">
			<p style="margin-left:0.0in; margin-right:0.0in; margin-top:0.0in"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"><a href="http://itm-vm.shidler.hawaii.edu:8080/products_store.html" rel="noopener" style="color: blue;text-decoration: underline;" target="_blank">http://itm-vm.shidler.hawaii.edu:8080/products_store.html</a></span></span></p>

			<p style="margin-left:0.0in; margin-right:0.0in; margin-top:0.0in"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"></span></span></p>
			</td>
		</tr>
		<tr>
			<td style="border-style:solid; border-top:none; border-width:1.0pt; padding:0.0in 5.4pt 0.0in 5.4pt; vertical-align:top; width:233.75pt" width="312">
			<p style="margin-left:0.0in; margin-right:0.0in; margin-top:0.0in"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"></span></span></p>
			</td>
			<td style="border-bottom:solid windowtext 1.0pt; border-left:none; border-right:solid windowtext 1.0pt; border-top:none; padding:0.0in 5.4pt 0.0in 5.4pt; vertical-align:top; width:233.75pt" width="312">
			<p style="margin-left:0.0in; margin-right:0.0in; margin-top:0.0in"><span style="font-size:12.0pt"><span style="font-family:&quot;Times New Roman&quot;,serif"></span></span></p>
			</td>
		</tr>
	</tbody>
</table>

Click on the links above for examples of what this is.

**\*\* NOTE \*\***

**BE SURE TO THOROUGHLY TEST YOUR APPLICATION ON THE CLASS WEBSITE AS THIS IS WHERE THE GRADER WILL LOOK AT IT.**

**You can test your application on the ITM-VM server by going to** 

[http://itm-vm.shidler.hawaii.edu:4000/AppServer](http://itm-vm.shidler.hawaii.edu:4000/AppServer)

And follow these steps:

1\. If any of the listed projects says "Online" click them one at a time (wait 3 seconds after each click for an update) until all say "Stopped" or "Not running"

2\. Click your project folder and wait until the display shows it is "Online"

3\. Open another browser window and go to your applications start page using the server http://itm-vm.shidler.hawaii.edu:8080. Ideally, you have an index.html home page that starts your application with just http://itm-vm.shidler.hawaii.edu:8080

4\. Test your application. When done, go back to the window with [http://itm-vm.shidler.hawaii.edu:4000/AppServer](http://itm-vm.shidler.hawaii.edu:4000/AppServer) and click your folder again. Wait to see that it updates to "Stopped" or "Not running"

You may want to watch the screencast on [Deploying and Submitting Assignment 1](https://youtu.be/KIa49E8Jc7g) if you find the above instructions confusing.