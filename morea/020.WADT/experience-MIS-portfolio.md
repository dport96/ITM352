--- 
title: "E0: MIS Portfolio" 
published: true 
morea_id: experience-MIS-portfolio 
morea_type: experience 
morea_summary: "Create a professional portfolio for yourself"
morea_sort_order: 1 
morea_start_date: "2024-01-12T00:00"
morea_end_date: "2024-01-18T23:59"
morea_labels: 
- Essay
---

# E0: Create an MIS Portfolio

## Objectives
1. Introduce GitHub and obtain a GitHub account
2. Become **familiar** with popular web application technologies and frameworks (JSON, YAML, Markdown, HTML, CSS, Jekyll, GitHub and GitHuB pages, web servers)
3. Create a publicly accessible professional portfolio
4. Understand collaborative development by introducing yourself (virtually) to the class by adding your portfolio to the MIS Portfolios repository

## Tasks

For this assignment you will create a professional technical portfolio for your budding MIS career aspirations and add it to the [MIS Portfolios gallery](https://dport96.github.io/mis-portfolios/). You will update this throughout 352 and you can use this as a venue to showcase your work, experience in your MIS courses, projects, technical essays, and of course your resume. You will be introduced to a **lot** of useful web-application technologies that may be a bit intimidating. You are not expected to master all these technologies! Your objective is to become familiar with them and understand how they are used in creating and hosting your MIS portfolio. We will dive further into technologies as the semester progresses. The primary task is to get set up with GitHub, understand JSON and YMAL notation, and learn how to create and edit a GitHub repository for your portfolio. You will also learn to work within the MIS Portfolios collaborative project to add your MIS portfolio to the public gallery. 

Before continuing, take a look at the [MIS Portfolios gallery](https://dport96.github.io/mis-portfolios/) to see some example MIS portfolios.

**Task 0.** (This step should not be needed if you have started the WADT lab) If you are not familiar with GitHub and do not have a GitHub account go though the [Hello World introduction to GitHub]( https://guides.github.com/activities/hello-world/). If you already have a GitHub account and are familiar with using GitHub you can skip this task. After running through this tutorial you should have a GitHub account and know how to create a repository, add files and edit files in a repository, and view GitHub pages in a repository. 

**Task 1.** Go to the [Techfolios GitHub project](http://techfolios.github.io/) and read the Home page (it's very short!). After this, read the [Overview](https://techfolios.github.io/docs/overview) then find the [Quick Start](https://techfolios.github.io/docs/quick-start/overview) link (or use the link here) and carefully follow the steps to create a GitHub account and create a repo from the "template" Techfolio repository for your personal TechFolio (this will become your MIS portfolio). Since the JSON resume is long and complex, it's suggested you use a [JSON editor](https://www.cleancss.com/json-editor/) to help you avoid JSON syntax errors such as the very common "leaving trailing commas" at the end of a list). We will be using JSON throughout the class, so you may wish to go through the [10-min introduction to JSON](https://beginnersbook.com/2015/04/json-tutorial/) first to help you avoid such common errors.

**Task 2.** Check that your MIS portfolio works and it's publicly accessible. Make sure you know the URL for accessing it. For example, [https://dport96.github.io/](https://dport96.github.io/). If it doesn't work it may be that your JSON is invalid. Use something like [JSON viewer, editor, formatter, linter](http://jsonviewer.stack.hu/) to check and fix your JSON. You may also try using VSCode with a JSON Intellsense or "linter" extension. Write a short "introduce yourself" essay and add it to the Essays in your MIS portfolio.


**Task 3.** Follow the submission instructions below to add your portfolio to the [MIS Portfolios gallery](https://dport96.github.io/mis-portfolios/). Keep in mind that this is site is publicly accessible to the entire world so avoid anything embarrassing and keep it professional. Also you will be modifying a shared project and a simple mistake can keep the page from building or worse. So be careful to follow the instructions and check that things work. If you break something, it's better to revert back to the original and get help. 

When you are done, your portfolio **MUST** at minimum have the following:

 1. Your full name ("name" in bio.json) and title ("label" in bio.json, something like "Shidler Undergraduate" is fine)
 2. What your major is and when you expect to graduate (put this in "summary" in bio.json)
 3. A picture of yourself so people can recognize you in class! ("picture" in bio.json, upload your image to the images folder in your MIS Portfolio repo or if you want to be extra fancy, encode your image to base64 and store it as a data:image in "picture" in bio.json. You can use an online tool like [hotjar](https://www.base64-image.de/) for this if you like.)
 4. <mark>An essay</mark> on why you decided to major in MIS or take ITM 352 (for example "My friend is an MIS major and suggested it." or "I went to the MIS Splash event and found MIS might be a good major for me." (You should have done this in Task 2 above.). <mark>NOTE:</mark> You need to add this as an additional file under **essays**. See [Configure Essays](https://techfolios.github.io/docs/quick-start/configure-essays) in the Techfolios Quick Start. It is suggested you modify one of the example essays rather than create a new one. Be careful of setting the YAML and date correctly or your portfolio may fail to build.
 5. Clean up your portfolio by removing any of the examples such as example essays and projects.

You are welcome to do more! See the [MIS Portfolios gallery](https://dport96.github.io/mis-portfolios/) for examples.
 
Remember that EVERYONE in the class will be seeing your portfolio and essays! So avoid anything that may appear unprofessional.

Throughout the semester you will be asked to post BLOG essays about class on your message board. You are expected to look at other students BLOGs but not copy them. You will find your fellow students have many interesting and useful things to share. If you use ChatGPT (or similar AI tools) take care in editing the content to ensure it is reflective of what you want to share and provides specifics for your experience. These tools tend to provide overly general and unsubstantial responses that are easily seen as AI generated.

## Submission instructions:

This assignment must be completed by the *first week of class*. To submit and receive credit, you must submit link to your portfolio published by GitHub to the E0 assignment on Laulima. In addition to this, you must also add your portfolio to the [MIS Portfolios GitHub](https://github.com/dport96/mis-portfolios). Here are the detailed instructions to follow once you have completed your MIS portfolio as above:

**Check that the JSON in your bio.json is properly formatted.** It's very easy to leave syntax errors that will cause your portfolio card to fail to load in the MIS Gallery. Go to [https://jsonformatter.curiousconcept.com/#](https://jsonformatter.curiousconcept.com/#) and put `https://{your portfolio URL}/_data/bio.json` in the box. Replace `{your portfolio URL}` with the URL for your portfolio. For example, I would put `https://dport96.github.io/_data/bio.json` in the box. Hit the Process button. If you see any errors, you will need to go back and fix them in your bio.json file. If your errors are not too bad, it may give you properly formatted JSON at the bottom that you can copy and paste.

**A.** Go to [https://github.com/dport96/mis-portfolios](https://github.com/dport96/mis-portfolios).

**B.** Scroll down to the folder named _data and click on it. Then scroll to the file "members.yml". Click on that file name to display its contents. Click on the pencil button on the top right of the screen to bring up a browser-based editor with the contents of the file. The top section will look like this:
<style>
  code mark {
    background-color: yellow;
    font-weight: bold;
  }
</style>

<div class="language-yaml highlighter-rouge"><div class="highlight"><pre class="highlight">
<code>
<div id="members_div" class="s">xxx</div>
</code></pre></div></div>

{% assign month =  "now" | date: "%-m" | times: 1 %}
{% if month <= 5 %}
{% assign semester = "Spring " %}
{% elsif month <= 7 %}
{% assign semester = "Summer " %}
{% else %}
{% assign semester = "Fall " %}
{% endif %}
{% assign year = "now" | date: "%Y" %}

<script>
  function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}
  async function getMembers() { 
    const url1 = 'https://raw.githubusercontent.com/dport96/mis-portfolios/master/_data/members.yml'
    const response = await fetch(url1);
    const data = await response.text();
    const srchStre = "# Students here";
    let i = data.indexOf(srchStre) + srchStre.length + 1;
    members_div.innerHTML = data.substring(0,i-1).replace(/\n/g, "<br />");
    members_div.innerHTML += '<br>&quot;{{ semester | append: year | append: " Students:&quot;" }}<br><mark>PUT YOUR PORTFOLIO URL HERE</mark><br>   - student.github.io';
  }
  getMembers();
</script>

Insert a new line at the **start** of the appropriate section (e.g. right after &quot;{{ semester | append: year | append: " Students:&quot;" }} ) as indicated in the <mark>highlighted</mark> text above to include your own url that points to your portfolio. Be sure to start the new line with a &quot;`-`&quot; and then a **space**. If there is no appropriate section, *you are the first!* so you have the honor of adding &quot;{{ semester | append: year | append: " Students:&quot;" }} (just use the same format you see in the other sections). Take care not change any other lines in this file!

**C.** When you are done, scroll to the bottom and click the "Propose file change" button. In the next window, press the "Create pull request" button (optionally you can add a little request note). On the next window *DO NOT DO ANYTHING*. Your request to add your portfolio has been submitted and the instructor or TA will review and approve your request (and give you credit for this assignment). These requests must be manually reviewed and processed by me or the TA. Don't expect this to happen immediately! You will be notified if there is a problem or if your portfolio has been added to the gallery.

**D.** Check your email for a note from GitHub that your pull request has been approved then check [https://dport96.github.io/mis-portfolios/all/](https://dport96.github.io/mis-portfolios/all/) to ensure your portfolio correctly appears in the gallery. Your portfolio may not appear at all in the gallery even with an approved Pull request as the instructor may have disabled or removed your portfolio entry. Check comments on your Pull request. If your portfolio does not display correctly or does not display at all in the gallery, check that your entry members.yml is correct, check that your JSON in bio.json is valid, fix and create another pull request. 


This is a **graded** assignment. You will be given credit once your instructor verified your portfolio appears in the gallery and meets the requirements specified in Task 3 above.
