---
title: "Athletic Software Development"
published: true
morea_id: reading-athletic-software-development
morea_summary: "An 'athletic' approach to software development education using Workouts of the Day."
morea_type: reading
morea_sort_order: 3
morea_start_date: "2022-09-01T10:30"
---

# An athletic approach to software development

[CrossFit](http://www.crossfit.com/) has the concept of a "Workout of the Day"
([WOD](http://www.crossfit.com/cf-info/faq.html#General0)), which is a short
duration, high intensity set of exercises.  In this class, I adapt this
concept to software system development education.  My hope is that by focusing on
the speed with which you implement high quality solutions to short development
problems, you will:

  1. Gain fluency with your tools and technologies.
  2. Gain the ability to focus and enter the "flow state" during software development.
  3. Become more productive and useful in "bursty" development environments like [startup weekends](http://startupweekend.org/) and of course your class labs and application development assignments which are always limited in time and and within distracted environments.

Timing your workout is important! It enables you to **tangibly measure** your improvement!

## Rx, Av, Sd, DNF

For each WOD, I provide the following timing information:

  * Rx (As prescribed): Finishing the WOD in Rx time indicates mastery of the material tested by the WOD.
  * Av (Advanced): Finishing the WOD in Av time indicates superior performance.
  * Sd (Standard): Finishing the WOD in Sd time indicates acceptable performance.
  * DNF (Did not finish): If you take longer than Sd time, then you have taken an unusually long amount of time or were unable to complete the WOD.

Here is an example:

{% include wod-times.html Rx="<8 min" Av="8-13 min" Sd="13-18 min" DNF="18+ min" %}

So, in this example, completing the
WOD in 8 minutes or less is "as prescribed", 8 to 13 minutes is
"Advanced", 13 to 18 minutes is "standard", and taking longer than 18 minutes is
unacceptably slow. 

Note that simply stopping work at a certain time does not
mean you achieved the associated standard: your solution must have acceptable quality as well.

## Practicing with WODs

For each module, I provide WODs as homework assignments,
which you can time on your own. Before starting a WOD, I recommend you review
and study the associated material so that you do not spend valuable seconds
during the WOD doing "research". For grading purposes, the criteria is that you solve the problem with acceptable quality under the DNF cut-off time. You submit a <b>screencast</b> of you performing the WOD <b>narrating</b> your solution. You record your last performance time (as indicated by the screencast) and reference to the screencast and code repository to the WOD Assignment on Laulima. This is your "WODvelope Card" and you are responsible for maintaining it accurately and keep it up to date. If you do not update this or it is inaccurate you may not receive proper credit. 

**Your grade does not depend upon whether you performed at Rx, Av, or Sd levels, only that you complete the WOD correctly before the DNF cutoff time.**

The general procedure for a WOD is as follows:

  1. Read the WOD instructions carefully
  2. Prepare to do the WOD by starting a new project, copying any needed files or materials, set a timer to sound an alarm at the DNF time
  3. Start your screencast recoerding then start a timer and perform the WOD. Some screencasting applications show you the recording time which also may be used as your timer. It is suggested you record your desktop rather than a single application as you will frequently be going back and forth from coding to checking your application in the browser or terminal. 
  4. If the DNF time has passed, stop working, stop the timer and screencast recording, delete your project and go to Step 1.
  5. When you finish the WOD before DNF time, stop your timer and screencast and record your time. 
  6. Check your work and verify that it meets the WOD requirements. If not, delete your project and go to Step 1.
  7. Push your WOD project files to your repo and update, upload your screencast to YouTube, and update your WOD card on Laulima (under the WOD Assignment) with your WOD results, link to the directory of your WOD files in your repo, and screencast URL on YouTube. The grader will use the information on your WODvelope in Laulima to review your repo and screencast then assign credit.

### Get Tools For Your Workout

Get some form of timer to keep track of your WOD time (also to use in class). You can use anything online such as 

[http://www.online-stopwatch.com/](http://www.online-stopwatch.com/) or [http://www.timeanddate.com/timer/](http://www.timeanddate.com/timer/) or install something 
to your browser such as [https://chrome.google.com/webstore/detail/timer/edebbhkhcaafmolanelponjjanocpacd?hl=en](https://chrome.google.com/webstore/detail/timer/edebbhkhcaafmolanelponjjanocpacd?hl=en)

To record your WOD screencast, you do not need special screencast software. For Mac you have several free options:
- ##### Quicktime Player (this comes installed with OSX so just look for it in your Applications)
- [OBS Studio](https://obsproject.com/)
- [Monosnap](https://monosnap.com/welcome)
- [Apowersoft](https://www.apowersoft.com/mac-os-screen-recorder)
- [VideoLAN](https://www.videolan.org/vlc/index.html)

For Windows, you can try:
- [Windows 10’s built-in Game bar](https://www.pcmag.com/how-to/how-to-capture-video-clips-in-windows-10)
- [ActivePresenter](https://atomisystems.com/activepresenter/)
- [OBS Studio](https://obsproject.com/)
- [Flashback Express](https://www.flashbackrecorder.com/express/)
- [VideoLAN](https://www.videolan.org/vlc/index.html)
  
Notes: 
 * You may repeat the WOD as many times as you wish get under DNF. If you do you get under DNF before the WOD is due you should submit whatever you have done and record your result as DNF.   
 
 * If you get stuck, for "WODs" there will usually be a screencast demonstrating a solution. You are not required to perform the WOD exactly as indicated in the screencast. You are encouraged to watch the screencast to the point that you are unstuck and then try the WOD. Do not watch the screencast before attempting the WOD at least once! The WODs are designed to build your skill and you this will slow your progress. Non-WODs do not come with screencast solutions.
 
 * Do not simply copy the code from the screencast! You will get very little out of the WOD by doing this. It will take much longer than you think, you will make a lot of mistakes, and you will not improve your development skill. Only your screencast copying skill will improve. You have been warned!

* Below is an example of how to record your WOD progress on a WODvelope. You can copy this and submit this card to Laulima to ensure you get credit for all your WODs.

<table border="1" style="border:2.0px solid black">
	<thead>
		<tr>
			<td style="border-color:black; border-style:solid; border-width:1.0px">
			<p style="text-align:center"><strong>WOD</strong></p>
			</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px">
			<p style="text-align:center"><strong>(Rx, Av, Sd, DNF)</strong></p>
			</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px">
			<p style="text-align:center"><strong># Attempts</strong></p>
			</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px"><strong><span style="background-color:#f1c40f">Screencast URL</span></strong></td>
			<td style="border-color:black; border-style:solid; border-width:1.0px">
			<p style="text-align:center"><strong>Repo URL</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; border-style:solid; border-width:1.0px">
			<p style="text-align:center">BrowserHistory1</p>
			</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">Rx</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">3</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center"><a href="https://youtu.be/TDsEUNk3WwA">https://youtu.be/TDsEUNk3WwA</a></td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center"><a href="https://github.com/dport96/ITM352_F19_repo/tree/master/WODs/BrowserHistory1">https://github.com/dport96/ITM352_F19_repo/tree/master/WODs/BrowserHistory1</a></td>
		</tr>
		<tr>
			<td style="border-color:black; border-style:solid; border-width:1.0px">
			<p style="text-align:center">BrowserHistory2</p>
			</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:black; border-style:solid; border-width:1.0px">
			<p style="text-align:center">BrowserHistory3</p>
			</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
		</tr>
		<tr>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
			<td style="border-color:black; border-style:solid; border-width:1.0px; text-align:center">&nbsp;</td>
		</tr>
	</thead>
</table>

* FINAL NOTE! 
WODs are a valuable tool for rapidly building your skill and confidence. It's up to you to use them to your advantage. You easily cheat, take shortcuts, etc. and get away with it. We will not be monitoring or policing this. But if you do cheat, you only cheat yourself out of improving your skill and confidence. As will exercise, you will not get the joy and satisfaction of true accomplishment that you get from an honest effort and seeing your own growth and improvement.   