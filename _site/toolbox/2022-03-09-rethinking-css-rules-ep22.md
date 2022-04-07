---
layout: post
title: "Rethinking CSS Rules - Ep 22"
summary: "In this episode of The Toolbox, we'll take a look at 8 new and old CSS libraries and the way they're changing how you'll be writing CSS in the future. The pace of the web is relentless...and that's why you need...The Toolbox."
hideDesc: true
video: B0eI5RT1-Hw
hero: /images/toolbox/episode22.jpg
thumb: /images/toolbox/episode22_tn.jpg
category: toolbox
---

Hello everyone this is Ray Villalobos and I stream about front-end and full stack tools Wednesdays at 1pm Eastern • 10am Pacific. Follow me and subscribe on LinkedIn and YouTube for more content. If you want to watch any past episodes, make sure you take a look at my blog raybo.org.

So, I've been on a journey lately with The Toolbox. It's more of a mission to explore new frameworks and ideas.

As I'm going through this, I realized that what it's done for me is to change my perspective as to where CSS and JavaScript are trying to go.

Frameworks always drive the development of things like CSS, so I'm going to go through all the frameworks I've been working with lately and show you where CSS is going, what each one is good for and some of the pitfalls in each.

Hey Take a second and write down which frameworks you've used in the comments and maybe what you like.

---

## Pico CSS

[![Pico CSS](/images/toolbox/2022-03-09_01-20-46.png)](https://picocss.com/)

Alright, let's talk about one of my favorite new finds called [Pico CSS]. This framework is probably the simplest of all frameworks. Think of it as a reset that rewrites the way a site look when it DOESN'T use any classes.

Notice that in order to write a form, you just use the input fields without any classes...and they look great.

I did a bit of a [sample](https://github.dev/planetoftheweb/swing_pico) so you can see how it works. It's a pretty decent layout and I have to say it has very minimal CSS.

This made me think about the fact that the browser defaults haven't changed in years. Most browsers still use serif fonts and buttons are rendered in a style that looks like it's from an old version of windows.

We spend so much time resetting CSS, then cleaning up the defaults to a reasonable and acceptable level just to get going on any project.

<lite-youtube videoid="JPzC_sbBfyY"></lite-youtube>

---

## Bootstrap

[![Bootstrap](/images/toolbox/2022-03-09_00-51-51.png)](https://getbootstrap.com/)

Alright, so let's start with Bootstrap. The world's most popular Front End Framework.

### The Good

- It's just a great way to create simpler sites.
- You can prototype entire sites without having to worry about the design and then have a designer come back and make adjustments to make it unique.
- 76k stars on GitHub
- A great set of components: Buttons, Navigation, Alerts, Cards and the ever popular carousel. Bootstrap has just about everything you need to build modern sites. Ready to go out of the box.

### The Bad

- Overly complex class naming conventions.

This isn't actually Bootstrap's fault. It inherited this from ideas like [BEM](http://getbem.com/naming/) and something called SMACSS. The main concept is to provide a [consistent naming structure](http://getbem.com/naming/).

What ends up happening is that items that need a lot of elements require a great number of classes. The [accordions](https://codepen.io/planetoftheweb/pen/gOgdyZq?editors=1000), for example. I'll be honest with you...out of all the things I've ever had to build for a course, this was the toughest to get right. I was literally terrified when I recorded how to work for this element because it's very easy to miss something.

### When To Use It

Having said that, If I was building simpler sites, Bootstrap is really my comfort framework. I go to it when I need to build something with just HTML, CSS and JavaScript.

When I want something that does everything I need in one place.

It's really gotten a lot better at being easy to override.

Have you ever or do you still use Bootstrap?

---

## SASS

[![Sass](/images/toolbox/2022-03-09_00-59-47.png)](https://sass-lang.com/)

Let's talk about Sass next. I just finished the update on our Sass course. It hasn't seen a ton of changes until very recently. As a matter of fact, I've been trying to do the Sass update for years, but something else crucial always came up, so I kept on pushing it back.

By the time I got to it, I was wondering if it was even relevant today...and that's when I saw this:

[![2020 State of JS Survey](/images/toolbox/2022-03-09_01-03-56.png)](https://2020.stateofcss.com/en-US/technologies/)

This is one of the annual surveys I keep track of to see what the industry is doing...and there it was. Sass was the only framework that was on that sweet spot. Top right of the poll. That means that it was the one that people were most satisfied with and also most used.

I think that we as teachers are always promoting the hottest new framework...and you forget what people are actually using. In the case of Sass, it actually reminded me that people love this framework.

As I got back to it, I realized why I missed it. Sass variables are superior than CSS variables. The fact that the framework is processed means that it can do things that plain CSS can't.

Case in point, take a look at [parent selectors](https://codepen.io/planetoftheweb/pen/wvrbPYE?editors=1100), something still missing in CSS. Plus the ability to extend existing classes makes it an amazing framework. I still truly love this one.

Sass is 15 years old and if I had to create a larger site where I had to implement a design system, I would honestly think about using it instead of just regular CSS.

Do you use Sass at work still?

---

## Pollen

[![Pollen CSS](/images/toolbox/2022-03-09_11-09-28.png)](https://www.pollen.style/)

One of the improvement that CSS has made in the past few years is of course variables. They were inspired by Sass, but as I mentioned I don't think they're as flexible as the ones that SASS provides.

However an interesting category of frameworks has arrived that provides you a set of variables to use on your projects.

It gives you a set of scales, like sizes for things, a color palette, a simple grid and more.

This is no different than you using your own variables, but it's a great way to get started and the framework looks pretty nice.

You can see an [example project](https://www.pollen.style/) using GitHub.dev. This is really no different than creating your own set of variables, but it's a great pre-built starting group of styles that you can use.

One of the things that scales do is keep your design consistent, so the sizes in one part of your document match styles in other places.

If you have used something like Tailwind, you'll notice that the scales and the color structures have been inspired by Tailwind CSS. I think no other platform other than maybe bootstrap has had such a dramatic effect on other libraries.

Do you use CSS variables heavily? Or do you go for something like Sass?

<lite-youtube videoid="Cl2uFIUXqeQ"></lite-youtube>

---

## Open Props

[[Open Props](/images/toolbox/2022-03-09_11-12-08.png)](https://open-props.style/)

Pollen is nice, but if you're really want to use CSS variables, you'll eventually want something more flexible.

When I used Open Props, I felt like it's a set of variable structures. The cool thing here is that everything is so much more customizable than in Pollen. Variables are structured into different pieces, and you can import just what you need, or npm install the project and import what you need.

Whereas the variables in Pollen try to keep the Tailwind CSS model, I think Open Props has it's own way of doing things. So, font sizes scales use a number 1, 2, etc, whereas Tailwind has a different naming structure.

Here's a codeSwing, so you can [see it in action](https://github.dev/planetoftheweb/swing-openprops/tree/finished). It's a simple demo, but you'll get an ide of how it works.

Basically, Open Pros is a more pro version of variables than Pollen. If you love using variables to design your projects, then this is the way to go.

<lite-youtube videoid="tKMNFQE64fA"></lite-youtube>

---

## Tailwind CSS

[[Tailwind CSS](/images/toolbox/2022-03-09_01-35-30.png)](https://tailwindcss.com/)

That brings us to the present day. Let's talk about the framework that really changed things and that's Tailwind CSS.

It came out of nowhere to very quickly rise to the top of the pack.

What changed was that a new generation of JavaScript frameworks that were component based. Angular, React Vue and now Svelte changed the way people built apps and sites.

Tailwind uses this approach called Utility First. It seems like a crazy thing to do. The classes mimic almost exactly every CSS class out there. So there are display properties, margin, padding, grid, flexbox. Chances are, if the class exists in CSS, then there is a duplicate in Tailwinds.

But that's not really it's best feature.

The best feature is the ability to use modifiers to control how the components behave in different states. You can see that there are hover states, media query states and even dark mode states.

The revolutionary thing is that by placing the styles right on the components, there is no overriding ever. The component CSS is right there on the components themselves.

Tailwind doesn't have any components like Bootstrap, so there's no shortcut for building a button class, for example. That's actually one of it's weaknesses.

Also, as you can see, Tailwind is a bit wordy when it comes to classes. Even doing simple headlines or buttons require a ton of classes. There are ways around it but it's definitely not something you want to use if you have to repeat a lot of content and you're not using a component architecture.

For simpler sites, it's just not the right framework.

<lite-youtube videoid="1LfMMOJzB-o"></lite-youtube>

---

## Windi CSS

[![Windi CSS](/images/toolbox/2022-03-09_11-53-45.png)](https://windicss.org/)

I have to give a mention to WindiCSS. It was basically an attempt to make something that worked like Tailwind CSS 2, but way more performant. It's basic improvement was a Just In Time Compiler.

It features a language that is an exact clone of Tailwinds. There is very little difference between the two so you can move between them easily. Maybe something called Attributify mode is something I haven't yet seen in Tailwind CSS.

The problem with using this framework today is that Tailwind CSS 3 now has a Just In Time compiler, so it isn't as compelling as it used to be anymore.

<lite-youtube videoid="3PSu4tGWeq8"></lite-youtube>

---

## Assembler CSS

[![Assembler CSS](/images/toolbox/2022-03-09_11-32-39.png)](https://asmcss.com/)

Now we're getting into the crazy and experimental ideas...although I might consider something like Pico CSS and Tailwinds in the same vein.

One of the features of Tailwind CSS that people question is the way that Tailwind CSS classes are really just clones of regular CSS styles. So people ask...why not just USE the CSS style tag...Isn't that the same thing.

I would agree that it's almost the same thing, except that what makes Tailwind really powerful is the modifiers.

Well Assembler lets you use the style tag...sort of. The [basic idea](https://asmcss.com/docs/1.x/core-concepts.html) is that you define your styles just like you would with the style attribute.

But you use the x-style attribute instead of the style attribute. Now...that's a made up attribute, but shockingly enough it's technically valid HTML.

One of the advantages of Tailwind CSS is that it gives you a lot of pre-built variables for sizes and colors...for example. Well, Assembler also has them...not only that, for the most part, they mimic the scale and format that Tailwind CSS uses. So you have sizes like md, sm, lg, etc.

Now, the other thing that's cool about Tailwind CSS is the modifiers. Well, Assembler has them too and again, they're pretty similar to Tailwind CSS, but you have to use pipe characters because CSS styles already use the colons.

The other cool feature is that it supports Mixins. Reusable snippets of code. The way that these are supported is brilliant. They use CSS variables. If you want to use them everywhere, you simply define them in the root section.

To configure things, you can use `data-` attributes.

The whole thing can be installed through a CDN link.

Assembler feels like what Tailwinds would be if it was done today. Honestly, I'm scared of using it because I really haven't seen people be too interested in it.

This also feels like where CSS might go if it starts adopting some of Tailwind's concepts.

<lite-youtube videoid="iNaDoE0qBwI"></lite-youtube>

---

## UnoCSS

[![Uno CSS](/images/toolbox/2022-03-09_12-07-57.png)](https://unocss.antfu.me/)

I feel like I have to mention this product here called UnoCSS. From the makers of WindiCSS. The developer who created Windi is now workinng on this new framework.

It doesn't yet have a lot of documentation, but what it has sounds pretty cool. Way faster performance than Tailwinds. No core utilities, just a bunch of presets.

One of the weird and interesting features is that it supports the classes from multiple frameworks, so that would make it easier to switch.

You can import the presets you want.

The way that it lets you write rules is pretty similar to what Talwinds is doing through configuration.

This is pretty interesting stuff but a bit too experimental...even for me. Maybe I'll come back to it some day.
