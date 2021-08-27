---
layout: post
title: "GitHub Tools You Should Now -- The Toolbox Episode 04 -- Special Launch Edition"
summary: "I'm celebrating the release of my new course: GitHub Code Challenges. So, in a special launch edition of The Toolbox, I go over some of the latest GitHub Tools and updates as well as some of my favorite GitHub tips you should already know."
video: "bagdajYKNN4"
hero: /images/toolbox/githubtools.png
thumb: /images/toolbox/githubtools_tn.jpg
category: toolbox
---

# Toolbox Shorts

Since this is a special episode of the Toolbox, I'm going to go over some of the GitHub Tools, plus an extension you should definitely add to GitHub.

## CodeSpaces

[![CodeSpaces with CodeSwing](http://pixelprowess.com/i/2021-08-18_11-41-59.png)](https://github.dev/lostintangent/rock-paper-scissors)

This is the tool that is going to change how developers work. It's basically Visual Studio Code in your browser, but it's deeply integrated into GitHub. Everything you can do with Visual Studio Code, you can do with [CodeSpaces](https://github.com/features/codespaces).

Recently GitHub announced a quick way to jump into CodeSpaces. You can hit a period in any repo to start CodeSpaces. You can also change the URL of the repo to .dev instead of .com. That way you can easily share a link directly into a repo, so for example, here's a link to one of my courses on [TailwindCSS](https://github.dev/linkedInLearning/tailwind-css-2841311)

I demoed this on last week's episode, but this works really well with a tool called [CodeSwing](https://marketplace.visualstudio.com/items?itemName=codespaces-Contrib.codeswing) that lets you build a CodePen directly into VSCode, but with all of the power of GitHub.

## Copilot
[![Copilot](http://pixelprowess.com/i/2021-08-26_17-36-59.png)](https://copilot.github.com/)

Another popular new tool is GitHub CoPilot. This is an AI tool that's sort of the next generation of auto-complete. It's an artificial intelligence tool that writes entire functions for you in many programming languages based on the context of your code.

Copilot uses a new algorithm based on GPT3 called Codex, which focuses on software source code. It works with many programming languages, specially those with well established code bases.

## GitHub Issues

[![GitHub Issues](http://pixelprowess.com/i/2021-08-26_17-38-37.png)](https://github.com/features/issues)

Something else that's not quite out, but I'm pretty excited about is the changes to GitHub Issues. GitHub has all these cool features that can help you organize your code project. That's usually done with a Kanban board, but they're working on something that is more like a table mode. It lets you look at your projects' status a bit easier.

## GitHub CLI
[![GitHub CLI](http://pixelprowess.com/i/2021-08-26_17-40-47.png)](https://cli.github.com)

Now GitHub also has a command line interface, that's a terminal tool that lets you issue commands directly from GitHub. Where this can come in handy is with something like issues. You can create issues directly from the command line while working on a project.

They just announced a [2.0 version](https://github.blog/2021-08-24-github-cli-2-0-includes-extensions/) of the tool which also lets developers create extensions for the CLI, so I'm excited to see what other developers create with this.

## GitHub for Mobile
[![GitHub for Mobile](http://pixelprowess.com/i/2021-08-26_17-42-11.png)](https://github.com/mobile/)
If you're a maintainer, it can be a hassle to keep up with your projects, so the mobile app for Github gives you the ability to peek into your inbox, comment on issues and do things away from your computer.

Recently, they announced a feature that allows you to [block users](https://github.blog/2011-06-01-block-the-bullies/) who are being disruptive. That's a welcome addition to an already capable platform.

## Git Lens
[![](https://raw.githubusercontent.com/eamodio/vscode-gitlens/main/images/docs/revision-navigation.gif)](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
Visual Studio code has a lot of built in GitHub functionality, but one tool that you gotta install is GitLens. It turbo charges what Visual Studio code can do.

My favorite feature is that it lets you do a git diff not just with the last commit, but with any branch or tag in your project. I use this all the time.

---

# My Favorite Github Tips

Enough about the tools, lets dive into some of my favorite tips. The first is a couple of changes to git that you'll probably notice in more and more tutorials.

## Restoring

There's a new way to restore files. It's an addition to git 2.2, so eventually you'll see it being used more and more. You can issue a `git restore` command instead of the old git checkout command. Checkout had too many responsibilities in Git, so they've added a few commands that are more targeted.

```bash
git restore README.md
# git restore .
# git checkout .
```

You can still use git checkout command. I think restore makes more sense since checkout can be used in other ways.

## Ignoring Files

To take care of ignoring files, you can create a `.gitignore` file at the root level of your project. Inside that file, you can add any type of file or pattern that you want to ignore.

```bash
.DS_Store
.vscode/
authentication.js
node_modules
notes/
**/*-todo.md
```

You can add an entry for the .DS_Store file as well as the .VSCode folder.

Another common one is a file called `node_modules`. This is create by npm when working on web projects.

If your project requires it, you can add a file here to store authentication tokens, API keys, etc.

You can also add a `notes/` folder here for local notes about the project you don't want to share.

Or you can create a special extension and add the notes anywhere in your project.

```bash
git config --global core.excludesfile [file]
```

If you're going to be using the same ignore files in many projects, you can also add this as a config variable pointing to a file in your hard drive. You can add many things to your config variables that makes using git easier.

## Copying a branch

```bash
git switch NAME
git switch -c NAME
# git checkout -b NAME
```

> >

With the git switch command we can switch to or create a new branch and switch to it. It will have the same history as the current branch.

This is the same as the old git checkout command.

## Git Clean

```bash
git clean -n # dry run
git clean -d # directories
git clean -f # force
```

Git clean is pretty simple. It lets you remove all untracked files and directories from your branch quickly. This is a nice way of removing old files that you don't need anymore.

It has a lot of options, but the ones I find really useful are -n, which will show you which files are going to be deleted, and -d, which will delete directories.

Be careful with these commands because they're permanent.

## Github TLDs
![Creating a new Repo](http://pixelprowess.com/i/2021-08-26_17-52-54.png)

GitHub has a bunch of TLDs (Top Level Domains) that you can use to do quickly take care of tasks.

- `github.new` or `repo.new` - Creates a new repo
- `gits.new` - In the same way, it creates a new gist immediately.
- `github.dev` - Start up a CodeSpaces environment.

## Shortcuts

Github has a number of shortcuts you can use to do things. 

- `shift-?` - If you only remember one shortcut, remember shift-? inside any github page, it gets you a list of all the shortcuts.

- One shortcut you might not be familiar with, you can hit the `t` key on any project to search through files immediately.

## GitHub Special Profile

[![Github Special Profile](http://pixelprowess.com/i/2021-08-26_17-52-54.png)](https://github.com/planetoftheweb)

You can really customize your profile and it's pretty easy. All you have to do is create a repo that is named with your account name. My account is `planetoftheweb`, so my special repo is `https://github.com/planetoftheweb/planetoftheweb`

There's a lot more that I could do here and you can find samples of people with all types of special additions, but I think it's nice to have a profile with a description and a picture.

# New Course: Github Code Challenges

We have this really cool series of courses on LinkedIn Learning called Code Challenges.

![Github Code Challenges](http://pixelprowess.com/i/2021-08-25_08-41-20.png)

I made the course free for 24 hours by going to this link. Make sure you are on LinkedIn and are following me and you should have access to the course for 24 hours after you first watch it. https://go.raybo.org/5WZc

The concept is that you start off by presenting the viewer with a challenge, and then show them how you solved it.

For This course, I tried picking challenges that were things that I was doing in my day to day life. So, for example you can see some simpler challenges at the beginning where I show you how to clone repos with empty histories, using the Github CLI to create an issue from the terminal and deleting all the commit history.

Let's take a look at an example. For this sample, the challenge is to generate a secret using Github and then do something practical with it.

<div style="position:relative;height:0;padding-bottom:56.25%"><iframe width="640" height="360" src="https://www.linkedin.com/learning/embed/github-code-challenges/use-hidden-secrets-in-projects?autoplay=false&claim=AQEAqiiB3MpwTwAAAXuEeo2KlbTviWV_F77P95blzb6Xd-Y9W3ijW8ODbdNSAb6F0MhlhRnWnn2plsh2eRuz5mqBez1fLDjJwpfShihhXd2Eq8-zSVmdu7TwzOkoQ48Z5PTy9vjOc8IcYuNCtJClY9S40QenxAGsU_gvqZ4EuFrguAQyJlQzEnZylAZdWiGaMJ-t-P4eAjCosigt9prKp5iN3accBIouMwMw8mzx7_3vnfGdUkFEhfdjmkdn1rJwETKkuVN6PFJtbaL4QX0_n1Ctt90ErORreMjV379vxlciQ5wZcvDKVVrVBqxNNnSYCOWbO3YZSzG2BhOojSCVJZUP2j0Dw_VnocyetN_8gJoJpyImvCwyzmlhTYk-mL6JZB7eJLQ0Hb06saiJp-gLnwAJAMbAA-f1LJNBUY091rcRDec7C3A3lQaPIJH4MJaLXvL9GVN4qtz9NEaQ8DU80W1CzZ9Lwave6SGTZh7KOLOJJwUNp6PuBzIP-V8OaufLtFItpsez0KzWPxsw7AWbqIfB76MljbAKZcXMRmaMDwBTNkAU0ppxe25E0T19_p3bshSDjpQ-0VnxIP1Y2oDcG_i5NJ12IgoAkep_DMLSbWytuJLYE9gkOOJe46p1FnC4Mh7A80-cGwMjB3857zub3haPiYaVKacxc-xHqadg4om1cd254Kv4-KkRDV6zx9ii8uxucGAaF1QkMYcHmdIw5XmWnjWC2vU_p97lV1bXzN0&lipi=urn%3Ali%3Apage%3Ad_learning_content%3B%2BOJuXg8PQ864Erg2upp6Gg%3D%3D&licu" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe></div><p><strong><a href="https://www.linkedin.com/learning/github-code-challenges/use-hidden-secrets-in-projects?trk=embed_lil">Use hidden secrets in projects</a></strong> from <strong><a href="https://www.linkedin.com/learning/github-code-challenges?trk=embed_lil">GitHub Code Challenges</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/ray-villalobos?trk=embed_lil">Ray Villalobos</a></strong></p>

Let's take a look.

## Watch it for Free

You can watch this course for free on LinkedIn Learning by using a special link that I have right here. Before you do that. Make sure you are following on LinkedIn so you can have access for 24 hours once you start watching it. The course is under an hour long so it should be easy to watch in one sitting.

# PostFix

## Tailwind CSS's JIT Mode

Speaking of which next week, I'm going to do an episode of the Toolbox on Tailwind CSS's Just in Time Mode. From a new course that I've been working on. It helps you generate a CSS file that analyzes your documents to see which classes you're using and builds a custom file for you.

It also lets you do superpowers, like creating custom sizes and colors by using bracket notations. Is it a Bootstrap Killer? You'll have to wait until next week to find out.

See you next Wednesday at 1pm. Follow me for details.
