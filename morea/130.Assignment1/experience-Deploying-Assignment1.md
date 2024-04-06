--- 
title: "Deploying Assignment 1" 
published: true 
morea_id: experience-Deploying-Assignment1
morea_type: experience 
morea_summary: "How to Deploy your application on Google Cloud"
morea_sort_order: 4
morea_labels:
 - Instructions
morea_start_date: "2024-04-04T00:00"
---
When you arr done with Assignment 1 you will need to deploy it 


# How to deploy a Node application to Google Cloud

[Google Cloud Platform (GCP)](https://cloud.google.com/) is one of the three major cloud computing platforms, alongside Amazon Web Services (AWS) and Microsoft Azure. Google Cloud Platform is widely used by businesses and organizations of all sizes for various cloud computing services, including infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS). 

You will deploying your Node.js applications to GCP using their App Engine service. Here is a step-by-step guide:

## GCP setup

The first few steps involve setting up a project on GCP

### 1. Sign up with Digital Ocean

First, go to [Google Cloud](https://cloud.google.com/free?utm_source=google&utm_medium=cpc&utm_campaign=na-none-all-en-dr-sitelink-all-all-trial-b-gcp-1707554&utm_content=text-ad-none-any-DEV_c-CRE_665665924786-ADGP_Hybrid+%7C+BKWS+-+MIX+%7C+Txt-Containers-Google+Cloud+Marketplace-KWID_43700077225653226-kwd-576266368948-userloc_9032759&utm_term=KW_gcp+marketplace-ST_gcp+marketplace-NET_g-&gad_source=1&gclid=CjwKCAjwtqmwBhBVEiwAL-WAYTjP2Xda9az-IF2vncJqdjHNzSqjbMTPO7KUdvQ1WVNoUc0hZbIdixoCc4EQAvD_BwE&gclsrc=aw.ds&hl=en) and click on the _**Get started for free**_ button to create an account.

You will need to supply a credit card for identification purposes. It will not be charged. If you stay within the free tier services you will not incur any charges (not even to your free $300 credit). All your work for ITM 352 will easily stay within the free tier. However, please take care not to accidentally authorize billable services!

Note: If you are unable to sign-up with your UH email account, use another gmail account (if you have one) or create a new gmail account.

### 2. Create new project

Go to the [Managed Resources](https://console.cloud.google.com/cloud-resource-manager?walkthrough_id=resource-manager--create-project&start_index=1&_ga=2.129458895.212008679.1712198867-34770965.1712197323&_gac=1.256002809.1712175763.CjwKCAjwh4-wBhB3EiwAeJsppBJ1_8WaiWeSaXi9B5G3AtDLVozS8O8XksOgnkgtGZcBmiinyh6NKxoCvI8QAvD_BwE#step_index=1) and create a new project:
(see Managing and Creating Projects)


{% include medium-img.html url="reading-digital-ocean-3.png" %}

## Local setup

The remainder of this sample deployment will be done on your laptop.

### 4. Clone a copy of meteor-application-template-react

Go to the [github repo for meteor-application-template-react](https://github.com/ics-software-engineering/meteor-application-template-react), and click on "Use this template" to create a copy of this repo in your personal GitHub account, then clone it to your laptop.

Next, run "meteor npm install" and "meteor npm run start" to verify that the application runs correctly in your local environment.

### 5. Install Install Google Cloud SDK: (if you haven’t already done so)



### 9. Run gcloud deploy

Now you can bundle up your Meteor application, send it over to the Droplet, and start it running on your Droplet.

For more details on the deploy command, see [https://meteor-up.com/docs.html#deploying-an-app](https://meteor-up.com/docs.html#deploying-an-app).

## 10. View your deployed application


For example:

{% include medium-img.html url="reading-digital-ocean-5.png" %}



You may want to watch the screencast on [Deploying and Submitting Assignment 1](https://youtu.be/KIa49E8Jc7g) if you find the above instructions confusing.