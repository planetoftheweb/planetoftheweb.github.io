---
layout: post
title: What's New with CSS Frameworks - Ep 26
summary: In this episode of The toolbox, I'll talk about WHERE some of the newest CSS frameworks are taking us, including a demo of all of the new CSS features of the MOST popular...Bootstrap. The pace of the web is relentless and that's why you need the Toolbox
hideDesc: true
video: sfNGIwK-r8E
hero: /images/toolbox/episode26.jpg
thumb: /images/toolbox/episode26_tn.jpg 
category: toolbox
type: post
---

Hello everyone this is Ray Villalobos and I stream about front-end and full stack tools Wednesdays at 1pm Eastern • 10am Pacific. Follow me and subscribe on LinkedIn and YouTube for more content. If you want to watch any past episodes, make sure you take a look at my blog raybo.org.

## The Most Popular

Over the last several episodes, you've seen me go over a lot of CSS and JavaScript frameworks. It's been pretty interesting to get an overview of where things are. The thing is, all frameworks are like living organisms. Always changing and adjusting.

Last week, Bootstrap did something interesting, they released a minor version as a Beta for the first time. So [version 5.2 is a beta release](https://blog.getbootstrap.com/2022/05/16/using-bootstrap-css-vars/), not a full release.

Another framework [Tailwind CSS](https://tailwindcss.com/), which has become one of my favorites, has focused on smaller, more frequent updates after version 3.0 that give it parity with current CSS changes.

And there are up and comers like Open Props and UnoCSS that are trying to challenge the way we're thinking about CSS.

Let's take a look at the Trends of where these are going.

## What's Wrong with CSS?

So, first of, why do you need to use these frameworks? The truth is you don't need then. But then again, you also don't need cars. Sure, they help you get somewhere faster by giving you a streamlined way to generate speed and they're a lot more comfortable than riding a bike. I live in Florida with like 90% humidity, so I don't even like to be outside in the summer. I prefer to go from Air Condiditioning to Air Conditioning.

## What are they helping you with?

Sometimes people think that something like [Bootstrap](https://getbootstrap.com/) is helping you with the design of a site, but in reality it's giving you a lot of components that help you build things faster. Things like [Carousels]((https://getbootstrap.com/docs/5.2/components/carousel)), [Cards](https://getbootstrap.com/docs/5.2/components/card/#content), [Button Groups](https://getbootstrap.com/docs/5.2/components/button-group/#content). They help you build a consistent design language that's easy to use and has been well tested by tens of thousands of people.

When you're using plain CSS, you have to create this yourself from scratch. 

The documentation on the Bootstrap site is so good, that it often includes small usability and [accessibility](https://getbootstrap.com/docs/5.2/getting-started/accessibility/) tips. I like to think of something like Bootstrap as the design system I would have designed myself, if I had time to design one.

I've done this before and although it's great, I don't want to do that for every project.

## Fixing HTML

One of the things that frameworks try to do is to fix some of the problems with HTML. There's a couple of issues. First is that there are small variations in the way HTML looks between browsers and platforms.

The way that browsers have tried to fix this in the past is through something called CSS Resets. Attempting to synchronize the way different browsers work.

Frameworks have adopted interesting ways of doing this. Bootsrap, for example uses a reset called [normalize.css](https://nicolasgallagher.com/about-normalize-css/).

The interesting thing is that it doesn't try to make things look exactly the same by asking, for example for a specific font. It tries to be more sensible by preserving existing sensible defaults...say the font the current device likes too use, but also tries to make styles looks similar.

## Ignoring CSS

Tailwind CSS, on the other hand, does something completely different with it's own approach called [preflight](https://tailwindcss.com/docs/preflight), it goes beyond normalize and gets rid of margins, unstyles headings, lists and then makes images block level.

It's quite jarring, but basically Tailwind is making all elements on the page the same. You want a margin? you're going to have to add it bud. It's an interesting approach that makes sense for what Tailwind CSS is doing.

## Making Defaults Look Good

There's also a whole [family of frameworks](https://picocss.com/) like PicoCSS that try to make the basic tags look good.

I love this framework because it's a great set of starter styles that work great. I feel like I always en up adjusting things when I work with it, but when I first discovered it, I wondered why the basic tags look so awful in browsers.

Does anyone keep the small sans serif fonts? Why do the form elements have to look like they were designed in the 90's.

There's a couple of worthwhile mentions on this category as well. M-Dash lets tries to make the [defaults look good](https://m-docs.org/examples) too, but it also gives you a way to expand default tags to add component functionality. So, for example, [alerts](https://m-docs.org/alert) look great and function well. The library adds and m and a dash and then defines common components that are easily styled and modified.

[Lit](https://lit.dev/) is also worth a mention. Web Components were going to change the world a few years ago. Basically they allowed you to create your own custom html elements. But the language to define these was challenging. 

Other Javascript Frameworks like [React](https://reactjs.org/) provided a simpler way to do this, so it sort of prevented Web Components from taking off.

Lit is an attempt to bring the Web Component language back into the fold by letting you code web components in a language that is more familiar. I'm not sure it's goinng to beat React, but it's worth a shot.


## What CSS Can't Do

The other thing that frameworks can do is add a layer of convenience on top of CSS. That's why CSS always feels a bit behind these frameworks.

If you think of something like [Sass](https://sass-lang.com/), which has been around for 15 years...an eternity in Web terms, it has a lot of features still missing in CSS. For example, the [ability to modify colors easily](https://sass-lang.com/documentation/modules/color).

But there also things like the [parent selector](https://sass-lang.com/documentation/style-rules/parent-selector) and [Mixins](https://sass-lang.com/documentation/at-rules/mixin) that make your life easier.

[![Wheeelbarrow Engine](https://s-media-cache-ak0.pinimg.com/600x315/96/4a/56/964a5606d7b54f5953165fb98993a989.jpg)](https://i.pinimg.com/736x/d3/b3/52/d3b35266aa6ba226382bf0da1ff6ee39.jpg)


Sure, you might say that if you add [postCSS](https://postcss.org/) with three or four plugins that you'd get something that's similar to Sass, but that's like saying that if you add a wheelbarrow to an engine that you'd have the same thing as a truck.

## It's About the Variables

15 years ago, one of the most stricking changes in Sass were variables. For the first time, you could [create a variable](https://sass-lang.com/documentation/variables), say for a color and then use it throughout your designs.

So CSS now has its own version of variables, which are technically called [Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties). Alright, I have a small problem with the way that the people who make these decisions name things to make them more confusing.

I think this highlights a problem with CSS. That when you change things, you have to make them backwards compatible, so whereas Sass variables make immediate sense, CSS variables are honestly a bit confusing.

They are accessed through the var function and theen are called with double dashes. Variables are [defined in a special :root](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#using_the_root_pseudo-class) section of your site so that they're available to all of your styles.

So, what are some frameworks doing with this? Some frameworks like [Pollen](https://www.pollen.style/) define a set of variables for you as a great starter set. This is something you could easily create them yourself, but these are some great presets that give you scales so that your designs look the same.

Another one attempting this is [Open Props](https://open-props.style/), which also gives you a preset of CSS variables, but it gives you a better way to control it. It lets you load only the parts you need and has additiona features like gradients, shadows, aspect ratios and animation functions.

## Down with the Cascade

One of the big problems designers attempt to solve is overriding the Cascade. The cascade is the C in CSS and is lets the browsers resolve conflicts between styles. So if two styles are trying to do the same thing, the cascade decides which one to use.

With a lot of frameworks, you end up undoing a lot of what previous styles established. The first big framework to do this is Tailwind CSS. That's what made it so popular. They call this a [utility-first approach](https://tailwindcss.com/docs/utility-first).


This solves the problem with overriding since the styles are explicitly defined in each element's class. That means you never have to worry about the cascade.

There is a lot more going on with tailwind. In recent versions, Tailwind switched to a [Just In Time Approach](https://tailwindcss.com/docs/configuration). You tell Tailwind CSS where the HTML and JavaScript that will use it are and then it creates a custom CSS file that includes only the CSS that you asked for in those documents.

Another revolutionary addition is the ability to use custom styles, so that instead of relying on the pre-built sizes or scales, you can specify just about any [arbitrary value](https://tailwindcss.com/docs/adding-custom-styles). Tailwind will build you a custom CSS file for that.

I don't think the best part of Tailwind is any of the above. To me the favorite thing is that way that it handles states. You can ask tailwind to do something depending on the [state of the element](https://tailwindcss.com/docs/hover-focus-and-other-states). 

So you can modify the CSS when someone hovers over an element, on any pseudo classes, on media queries etc. This fundamentally changes the way you write and even think about CSS...for the better.

## Contenders

There's a few contenders that are attemptint to do what Tailwind CSS is doing, so there are frameworks like [Master UI](https://styles.master.co/), that offer a similar language based on state with some ehanced features like animation and shorter class names. This is an interesting project.

Another one is [UnoCSS](https://uno.antfu.me), which came out of a project that was an attempt to make a better Tailwind CSS before it had a Just In Time compiler called WindiCSS. This is an attempt at improving on Just In Time, but I'm afraid the documentation isn't as thorough yet. It's definitely one to watch.

Another real interesting project is [Assembler CSS](https://asmcss.com/). This isn't trying to mimic Tailwind CSS directly. It's attempting to create a language [based on the CSS style](https://asmcss.com/docs/1.x/) tag.

This makes a lot of sense because Tailwind is basically doing things that you could almost do with a style tag. So this framework [embraces the style tag](https://asmcss.com/docs/1.x/core-concepts.html).

It's language is a combination of the style tag, but with talwind inspired states, classes and custom elements.

## What's the World Coming To

So that's where we are with CSS frameworks right now. My thoughts are that all in one component frameworks are great for getting quick sites up and running, but for component based projects Tailwinds and it's contenders are the future.

## Bootsrap 5.2beta1 Demo

Let's take a look at Bootstrap 5.2 now.

## Redesigned Documentation

![Redesigned Docs](/images/posts/bootstrap52.png)

The first thing you'll notice about this new version is that the whole site has been redesigned from scratch. It still has a bit of a Bootstrap classic flair, but if you look closely, you'll notice that the purple is a bit brighter than usual. I always thought it was weird that although the purple isn't really part of the [color utilities](https://getbootstrap.com/docs/5.2/utilities/background/), it still appears as an option in the variables and is the color used for the site.

Another very slight change is that the edges are a bit rounder and some of them are also a bit darker. Very minor changes you probably won't even notice, but it does make it feel a bit more modern.

## Variables

The really big change is the addition of configuration variables for a lot of the built in components.

This is why the update is considered to be huge, although other than this, there's not that much that you'd consider actual new features.

I can see that making a large number of variables for tons of the components would take a long time. This also prepares them for a new feature called dark mode. Coming soon on version 5.3.

## Text Background Helpers

Another new change is the addition of a `.text.bg.*` helpers. These will automatically set a background color and at the same time set up a reasonable foreground color. With previous versions you could use the `.bg-*` classes, but then the fonts wouldn't have enough contrast, so you'd also have to set up new `.text-*` classes.

This is a shortcut, but you can still use the old classes if you want to further customize the colors of your foreground text.

## Responsive OffCanvas

The OffCanvas component, which slides content in and out of the sides of your screen now has a few responsive variations, so that you can trigger it only at certain sizes with `.offcanvas-{sm|md|lg|xl|xxl}`.

## Thicker Table Dividers
There is a change to table dividers so that the thicker borders are now part of an optional class you can use.

## Scrollspy
A welcome change to scrollspy is that it was re-written t use the Intersection Observer API. This is a JavaScript API that makes it easier to do things based on when items appear on screen. That means you don't need relative parent wrappers and you no longer need the offset configuration.

## Forms
A simple addition of a new .form-check-reverse classs means that you can now flip the order of labels and checkboxes or radio buttons. This is a minimal change, but it's about time.

## Tables
In addition to the traditional striped rows, you can now use a .`table-striped-columns` class to do the same thing to column. I can see that I'd ever use that, but it's a nice option.

# Coming Soon
Soon I'll be addding interviews

# Links
Bootstrap 5.2 Demo: https://go.raybo.org/8AbG


It's the biggest bootstrap release since version 5 of the framework...and the most notable thing is the addition of a bunch of css variables that make it easier to customize everything. Bootstrap is getting ready to welcome dark mode into the fold and this beta release prepares you for just that.

There's some other goodies, so let's break down all of the CSS changes with demos of the cool new features in the world's most popular HTML, CSS, and JS library.