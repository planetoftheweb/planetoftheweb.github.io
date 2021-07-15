---
layout: post
title: Ep. 00 - JavaScript is Definitely Weird
summary: "In this...the unofficial Episode 0. I take a look at an article on why npm audit is broken, check out the AppSumo sale, a  query language for Wikipedia, important changes to Git and struggle through the JS is weird test."
video: GjfHjnfIA9E
hero: /images/site/thetoolbox-illustration.png
thumb: /images/site/thetoolbox_tn.png
category: toolbox
tags:
  - thetoolbox
---

## NPM and the Boy Who Cried Wolf

[![NPM and the Boy Who Cried Wolf](http://pixelprowess.com/i/2021-07-14_10-00-56.png)](https://go.raybo.org/4zWW)

[NPM](https://www.npmjs.com/), the tool that is installed with [NodeJS](https://nodejs.org/en/)...which most web developers use everyday has a false positive approach that creates a 'boy who cried wolf' problem. This great article from [Dan Abramov](https://mobile.twitter.com/dan_abramov) is a deep dive into why that's a problem and potential fixes.

The main problem is that it over reports vulnerabilities and dependency problems, so for example, almost everytime I write a blog post, I notice that some dependency is out of date, often with a high severity. As vulnerabilities are found on projects, NPM records and mentions this, which is a great thing.

However, because my site is a static site, I don't publish code that has these dependencies. That's one of the problems this article talks about. Some of the suggestions for fixing things are: **Move dependency to devDependencies** to make sure things the published site doesn't need don't get published. **Inline all dependencies during publish** ([Vite](https://vitejs.dev/) does this), so that once things are transpiled into the published site, they dependency issue goes away.

---

## AppSumo Day Sale

[![AppSumo Day Sale](http://pixelprowess.com/i/2021-07-14_11-26-38.png)](https://appsumo.com/)

This is a limited time deal, but the site is always awesome. AppSumo has a lot of up and coming apps often offered with lifetime deals. I've found so many useful apps here like Publr and Switchy. They have some specials that are set to last only for a couple of days.

- I like the concept of [GetTerms](https://appsumo.com/products/getterms/), since these days sites and apps require privacy policies. This gives you some reasonable one size fits most privacy policy. I'd gotten in on this deal before.
- [OneStream Live](https://appsumo.com/products/onestream-live/) lets you both live stream, but also schedule pre-recorded live streams and it will take care of simulcasting it in multiple social media platforms for you. I bought this one when it was previous offered, but I'm still using [StreamYard](https://streamyard.com/), which does some of the same things, but lets you also have multiple guests. Still, for a one time deal, OneStream looks pretty sweet.
- Who doesn't love stickers. [StickerMule](https://appsumo.com/products/stickermule/) will often run special deals on things like die cuts and regular stickers. They're offering Holographic Stickers this time for only $9. This one's a little harder to find on the site, but it's well worth it.

You can use the code SUMODAY for 10% off and there's lots more deals and it runs from July 13-16th.

---

## Wikipedia QL

[![Wikipedia QL](http://pixelprowess.com/i/2021-07-14_11-48-35.png)](https://github.com/zverok/wikipedia_ql)

This [npm project](https://github.com/zverok/wikipedia_ql) is a tool for querying Wikipedia. It's a NodeJS module that uses the [Wikipedia API](https://en.wikipedia.org/wiki/Wikipedia:API) to retrieve metadata in an easy to digest JSON format. It runs on and returns easy to part JSON data. I like that at the end of the NPM project it shows some reasons why this is a better approach than other solutions provide by and for Wikipedia.

---

## Git Restore and Switch

![Git Switch and Restore](http://pixelprowess.com/i/2021-07-14_11-53-21.png).

There's been some recent changes to Git, the most popular version control system for web developers. The `git checkout` command had been doing the work of switching to commits and branches as well as restoring the state of commits. That work has now been split into two different commands, `git restore` and `git switch`.

The most important thing to remember is that you use `git switch -c BRANCHNAME` to create a new branch instead of `git restore .` to switch to a branch. The old way of switching to a branch is deprecated, but still works and might be removed in the future, so you might as well start getting used to it.

---

## JS is Weird

[![JS is Weird](http://pixelprowess.com/i/2021-07-14_12-22-29.png)](https://jsisweird.com/)

I'm not big on quizzes...they bring back old memories of bad teachers, but I really think you should take [this quiz](https://jsisweird.com/). It's full of questions about JavaScript's quirkiness, so this isn't about learning useful code for your next project. and the best part of the quiz is not the questions, but at the end, the site provides thorough explanations of why the developer chose to write his own query language.

### See you next week

The best way to keep up with what I'm up to is to follow me on Linkedin at [linkedin/in/planetoftheweb](https://www.linkedin.com/in/planetoftheweb/). I'm also on all of the other less superior social media platforms at planetoftheweb.
