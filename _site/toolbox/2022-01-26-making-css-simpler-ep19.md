---
layout: post
title: "How to Make CSS Design Simpler - Ep 19"
summary: "In this episode of The Toolbox, I'll go over some of the complexity that's plaguing CSS and making specificity harder to figure out. We'll look at WHAT frameworks are doing to help you develop simpler ways of designing sites. The pace of the web is relentless...and that's why you need The Toolbox."
hideDesc: true
video: feAPtBN-SOI
hero: /images/toolbox/episode19.png
thumb: /images/toolbox/episode19_tn.jpg
category: toolbox
---

# Shorts

Let's start by going over some cool sites that I think you should know about. They're related to our topic today, so it's about where things are going and how you can make things simpler.

## Rising Stars

[![Rising Stars](/images/shorts/2022-01-21_12-34-50.png)](https://go.raybo.org/7ARI)

[This site](https://go.raybo.org/7ARI) looks at the popularity of front end tools, based on their GitHub stars and ranks them as. Some pretty interesting results. Although React is sitting at number one, Vue, which is split into two repos, is technically bigger. But the shocker is that Svelte has officially blown past Angular in popularity. Sorry Google."

## Doodle Ipsum

[![Doodle Ipsum](/images/shorts/2022-01-21_14-00-28.png)](https://doodleipsum.com/)

Gotta get a quick demo going and are tired of using the same three pictures of you pets. We'll then there's [Doodle Ipsum](https://doodleipsum.com/). Sort of like a Lorem Ipsum for random pictures. Could be great in a pinch.

## Simple CSS

[![Simple CSS](/images/shorts/2022-01-21_13-25-15.png)](https://simplecss.org)

This is a [set of stylesheets](https://simplecss.org) that lets you create a web page without any classes. Feels like the way HTML should work. The page looks pretty good as is and of course can be customized, but that's almost besides the point. Great for demos that look great out of the box.

# Intro

A while back, I was looking at the State of CSS report and the most interesting part of the report is in the [technologies section](https://go.raybo.org/7AQ3), which shows you the user satisfaction versus interest for most CSS technologies out there.

Under satisfaction, SASS is clearly the winner. There are other things that people are pretty happy with here like PostCSS, Styled Components...which seems crazy to me, but is a way to write CSS with javascript. I haven't given that enough time, so at some point, I'm just going to have to go explore that, plus BEM, which is a structure for how you name your classes.

Interesting to note that Bootstrap is dipping under the adopt threshold in this graph, and most of the frameworks are in the assess section.

# Why The Complexity

The thing that started me on this topic was watching this [great video](https://go.raybo.org/7AQ2) from Una Kravets about one of the upcoming features in CSS called Layers. It's pretty much what you're probably thinking.

[There's a codepen](https://go.raybo.org/7AQ7) where you can play with it. Basically, it lets you arrange pieces of CSS into layers. What struck me though is how much more complicated the specificity will get once people start putting CSS in layers and layers.

One of the other more hyped features for CSS are [Container Queries](https://go.raybo.org/7AQA). Container queries are like media queries, but they don't have to be relative to a viewport, you to control the layout based on the width available to the current item. Super powerful, but also additional complexity.

Just think of how far the [display property](https://go.raybo.org/7AQC) has come in just a few years.

## My Take On Frameworks

I see frameworks as attempt to solve problems not addressed by the main languages. The things that happen on frameworks today are the features you'll see on CSS tomorrow.

A lot of things from SASS like variables and calculations have made it into CSS. There's also a lot of things from SASS that are trying to make it back as well...like [conditionals](https://go.raybo.org/7AQC), [nesting](https://go.raybo.org/7AQU).

So, it's always a good idea to take a look at what's happening with frameworks to see the future of CSS.

## How Frameworks Solve Complexity

I just finished recording an update to a course [on Sass](https://sass-lang.com/). Sass has been around for 15 years now...15 years. That is like several lifetimes in web terms. A lot of the features that we have in CSS today and that are coming online are things people have had in SASS for years.

It's not a bad language to learn to this day and as you saw earlier, user satisfaction is huge. Here's a few things that are in SASS that you'd probably drool for in CSS.

You have the ability to [extend classes](https://go.raybo.org/7ARD), so that new classes will be based on old ones. You have all of these [color modification](https://go.raybo.org/7ARC) classes which are super handy.

# Where are they going?

Some frameworks are using CSS variable presets to help you build complex designs in a way that can be easier to follow.

There's a lot of frameworks like [Assembler CSS](https://asmcss.com) that are moving towards this sort of model. Closer to what we do in the style tag. This is great for component based architectures, but not as good if you have a lot of repetitive work.

[PollenCSS](https://www.pollen.style/), for example offers a preset of CSS variables that give you a design system that you can use to design things. I did a demo of how you can use these to create a [responsive design](https://go.raybo.org/7ASq) a while back.

# Tailwind's Utility First Approach

[Tailwind CSS](https://tailwindcss.com/) is an interesting framework that focuses has a Utility First Approach. If you haven't used it yet, it will feel really weird and you might not like it at first, but it's basically like trying to go closer to the computed tab in your browser.

Here's [some examples](https://go.raybo.org/7ASP) that will show you how to make something look like buttons of different widths.

# Demo -- Open Props

I'm noticing the rise of several frameworks that are an enhancement to existing CSS variables. This one is called Open Props.

## Links

- [Rising Stars](https://go.raybo.org/7ARI)
- [Doodle Ipsum](https://doodleipsum.com)
- [Simple CSS](https://simplecss.org)
- [State of CSS - Tech](https://go.raybo.org/7AQ3),
- [Una Kravets Layers](https://go.raybo.org/7AQ2)
- [CSS Layers Sample](https://go.raybo.org/7AQ7)
- [CSS Container Queries](https://go.raybo.org/7AQA).
- [CSS Display Property](https://go.raybo.org/7AQC)
- [MDN Conditionals](https://go.raybo.org/7AQC)
- [CSS Nesting Module](https://go.raybo.org/7AQU).
- [Sass](https://sass-lang.com/)
- [SASS Extend Sample](https://go.raybo.org/7ARD)
- [SASS Color Mods](https://go.raybo.org/7ARC)
- [Assembler CSS](https://asmcss.com)
- [PollenCSS](https://www.pollen.style/)
- [Pollen CSS Sample](https://go.raybo.org/7ASq)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Sample](https://go.raybo.org/7ASP)
