---
layout: post.njk
title: "The Distinctive Difference"
summary: "There's a discussion that goes around and around in developer circles. No, it's not the 'gif' versus 'jif' argument or whether tabs are better than spaces. It's surprisingly, the definition of what the word framework means."
hero: /images/newsletter/differences.png
thumb: /images/newsletter/differences_tn.jpg
category: newsletter
---

Putting my cards on the table. Everyone knows that tabs which convert to 2 spaces are best...It's pronounced jiff because that's what the creator of the format called it, no semicolons at the end of JavaScript statements (who needs them), single quotes are superior because you can fit double quotes in them and Curly braces don't go on their own line (please). However, if I'm working on your project, I'll do it whichever way you want these...even when you're wrong. 🤓

Now that I've eliminated 2/3rds of all developers reading this newsletter, do a search on Bing (I work for Microsoft…ok?) for the word framework, let's take a look at the results.

![Framework Definition](/images/newsletter/2021-12-03_15-09-20.png)

Clearly the bots managing the search results at Bing were written in C#, because while technically 100% correct, it's not what I'm looking for. Thankfully, the extremely helpful (remember who I work for) Bing gives me a Wikipedia entry which provides more context.

![Software Framework](/images/newsletter/2021-12-03_15-14-39.png)

Got that. Should be super clear now.

I can tell a software developer wrote this because it adds a bunch of fancy sounding words that don't really explain things further. That's how we developers talk...I'm sorry. I mean, this definition could describe just about any piece of software.

## Giving it a Shot

You're probably wondering (or you stopped reading a while back) what my definition would be, so here it is.

To me, a framework is a structure in a piece of software that, when followed, gives you additional benefits.

A good example of a framework is something like Bootstrap. Bootstrap is a set of styles and JavaScript that you add to a project. By themselves, these files don't do much to your page. If you add no classes or properties, it barely modifies your page.

To really make it work, you have to understand the structure, how Bootstrap wants you to write elements. The additional classes and format of how you add them is what gives you the benefits.

To create a button, for example, you add the `btn` class to an element, but that's not enough. You have to also add `btn-primary` or other contextual classes to really get a button that looks and acts like one.

A library, on the other hand, might have a function that sorts through a series of objects. It's like a group of utilities that save you time. Frameworks are built from libraries and that's why it's so difficult to tell when they graduate from a library.

## A Distinction without a Difference

The real point I want to make isn't what the difference is. It's that people care too much about things like this, that don't really matter. In logic, this is called a distinction without a difference. Arguing over differences that really don't matter.

![Bootstrap 3](/images/newsletter/2021-12-03_15-39-29.png)

Bootstrap in version 3, used to boast that it was the most popular framework. But in version 4, they became the most popular library. Not a lot really changed except that someone got the idea that the difference really mattered.

What's even more confusing is that [Angular](https://angular.io/) calls itself a Platform, [React](https://reactjs.org/) calls itself a Library, but [Vue.js](https://vuejs.org/) is a framework. Svelte on the other hand, calls React and Vue frameworks, but argues that IT IS the most loved framework.

Then there's the rise of what I call the Meta Frameworks. Things like [Astro](https://astro.build/) are frameworks that can use other frameworks.

So if you find yourself trying to explain the difference between the two, don't worry about it too much. The people who wrote most of the frameworks can't even get it straight because there's a fine line between the two.

If you find someone obsessed with the distinction, just walk away…there's better ways to spend your valuable time. Possibly learning one of the new frameworks.

# The Toolbox

<iframe src="https://www.linkedin.com/video/embed/live/urn:li:ugcPost:6871202339995344896" height="600" width="900" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

This week on the Toolbox I talk about some news about Twitter, Google and Facebook. In the stream, I discuss the one thing that interests me about Meta and the future world of virtual environments.

I also talk about Meta Frameworks, specially the aforementioned Astro, and then do a live demo so you can get the feel of what it's like to work with it.

At its core, Astro is a static site builder. In that way it's like [Eleventy](https://www.11ty.dev), or [Gatsby](https://www.gatsbyjs.com/) or [Next.js](https://nextjs.org/) and others. There's a great page on their site that compares how Astro [stacks up against other frameworks](https://docs.astro.build/comparing-astro-vs-other-tools/). It's surprisingly thorough, so take a look at that if you're thinking of using it.
