---
title: "Getting GitHub Tools"
published: true
morea_id: reading-GitHubTools-doc
morea_summary: "GitHub Tools"
morea_type: reading
morea_sort_order: 1
morea_start_date: "2024-01-11T12:00"
---
# About
GitHub has desktop and command line (terminal) tools you will need to manage your class repository and use in VS Code

# Get Git tools
- Go to the [Git download page](https://git-scm.com/downloads) and download the Git install file for  your system (you should probably get the installer binaries rather than any other method such as homebrew or Xcode). 

When installing *if* it asks about `Adjusting your PATH environment` select the `Use Git and optional tool from the Command Prompt` option. Use the defaults for everything else. 

After installation, open the `Git Bash` application (you may have to search for it in Spotlight or Explorer) and at the prompt set your Git username with the command (run from Git Bash). On the mac, it's possible to just use the Terminal app rather than Git Bash.

`git config --global user.name "USERNAME"`

Where USERNAME is your GitHub username.

Next, set the email address associated with your Git account (again from Git Bash) with the command:

`git config --global user.email "EMAIL"`

Where EMAIL is the email address associated with your Git account.
<br>
- After installing Git, go to [https://desktop.github.com/](https://desktop.github.com/) to download and install GitHub Desktop. After installing, open GitHub Desktop and sign in using your GitHub account. Select your hello-world repo to verify you have access to your GitHub account.