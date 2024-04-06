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
When you are done with Assignment 1 you will need to deploy it 


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

Go to the [Managed Resources](https://console.cloud.google.com/cloud-resource-manager?walkthrough_id=resource-manager--create-project&start_index=1&_ga=2.129458895.212008679.1712198867-34770965.1712197323&_gac=1.256002809.1712175763.CjwKCAjwh4-wBhB3EiwAeJsppBJ1_8WaiWeSaXi9B5G3AtDLVozS8O8XksOgnkgtGZcBmiinyh6NKxoCvI8QAvD_BwE#step_index=1) and select CREATE PROJECT:
(see [Managing and Creating Projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects) for details on creating a new project)

{% include medium-img.html url="deployment-1.png" %}

Then fill in the project name and click on the CREATE button:

{% include medium-img.html url="deployment-2.png" %}

Make a note of the Project ID so that you will recognize it later.

See https://cloud.google.com/resource-manager/docs/creating-managing-projects if you have trouble creating a new project.

## Local setup

The remainder of this sample deployment will be done on your laptop.

### 3. Go to your project directory and open a terminal

Do an `npm init` and answer the questions. When it asks for the git repository, you can leave it blank or put in the URL of your GitHub repository for this application e.g. `https://github.com/dport96/Port_Dan_Assignment1`

After answering the questions at the prompts, make sure `package.json` has:
```json
"scripts": {
"start" : "node server.js"
}
```
Ensure your Node.js application is properly structured with a package.json file specifying dependencies and an entry point (e.g., server.js). Make sure your application is listening on the correct port. Google App Engine expects applications to listen on port 8080.

Test that your application starts with `npm start`


### 4. Install Install Google Cloud SDK: (if you haven’t already done so)

Download and install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install-sdk) if you haven't already done so. Choose the appropriate operating system for your environment. This SDK includes the gcloud command-line tool, which you'll use to interact with GCP.

### 4. Run gcloud init

Use the following command to initialize your GCP project: `gcloud init`

Follow the prompts to log in, select your GCP project, and configure the default settings.

See [Setting up the Cloud SDK](https://cloud.google.com/sdk/docs/quickstart) for more information.

### 4. deploy your application

Create an `app.yaml` file in the top-level directory and put in
```yaml
runtime: nodejs20
```

Now use the gcloud app deploy command to deploy your Node.js application to Google App Engine:

`gcloud app deploy`

This command uploads your application's source code to GCP, builds and packages it, and deploys it to App Engine. Follow the instructions and answer the questions when asked.

## 5. View your deployed application
After the deployment is successful, you can access your application using the following URL:

`https://[YOUR_PROJECT_ID].appspot.com`

Replace [YOUR_PROJECT_ID] with the ID of your GCP project.

For example:

{% include medium-img.html url="deployment-3.png" %}


You may want to watch the screencast on [Deploying and Submitting Assignment 1]() if you find the above instructions confusing.
