---
layout: post
title: "What Web Designers/Developers Should Learn in 2022-Ep17"
summary: "In this episode of The Toolbox, I'm going to talk about what css, javascript and new frameworks you should learn in 2022. Plus, sites you should know about, and I'll go over every new feature in Tailwind CSS 3. The pace of the web is relentless...and that's why you need The Toolbox."
hideDesc: true
video: IwvyuqjOeNE
hero: /images/toolbox/episode17.jpg
thumb: /images/toolbox/episode17_tn.jpg
category: toolbox
---

Hello everyone this is Ray Villalobos and I stream about front-end and full stack tools Wednesdays at 1pm Eastern time 10am Pacific. So follow me and subscribe on all the social media things for more content. If you want to watch any past episodes, make sure you take a look at my blog...raybo.org.

A big part of my job is to try to stay on top of new technologies for web developers. After 16 episodes of the Toolbox I have to admit...I had no idea how deep the rabbit hole was.

So what I wanted to do this year in the Toolbox is to give you a show that helps you stay up to date. I'll be covering all of the new frameworks, javascript/css trends and also interviewing some people who do the work.

Spend an hour learning each week and I'll try to keep you up to date with what's going on. In the live show, I'll let you ask questions, but you can watch the shows later on your own time, if it doesn't work on your schedule.

Let's begin with what I call The Bits, some sites that I found useful recently. You can find all these in the shorts section of raybo.org.

### State of CSS

https://2021.stateofcss.com

I know I pointed this one out before, but I use this site so much to guide me in what to learn. Every year, they do a survey and ask questions about the usage for new technologies. This survey can actually help you learn new features that you may have missed. It's closed right now, but you can go over the results. I did a deep dive of it in the last episode.

## State of JS

https://2020.stateofjs.com

The State of jS survey is of course focused on just JavaScript. This one's a bit older, but it can give you a good reference to see the usage of certain features. If you don't know about some of the features and they are being heavily used. Chances are that you should get some practice with them to stay current.

## ES Proposals

https://www.proposals.es

Another way to stay current is to look at this site that has the status of what's being added to EcmaScript (AKA JavaScript) each year.

## JavaScript as a Second Language

https://go.raybo.org/6uWw

Shameless plug, I just released a course called JavaScript as a Second language on LinkedIn Learning that goes over some of these new features as well as recent javascript trends with lots of graphics and code. I try to show you JavaScript in the same way that I learned english, using examples in context.

Check it out, it's a completely new type of course, so if you like it, give a good review and let people know you want more of that type of content.

# What's New

Let's talk a bit about some of the things that happened in the world of web development and where things are going. We'll start with CSS.

## CSS

CSS is one of the fastest moving languages, way more so than JavaScript. Whereas JavaScript is getting more incremental changes, CSS is seeing a lot more new features.

https://2021.stateofcss.com/en-US/features/layout

If you look at the state of CSS survey, you'll notice that the big news in CSS is that Grid has finally become something you need to be comfortable with to stay competitive. In 2021, 83% of respondents said they have used it.

There's a new feature called subgrid. It's very new and still in flux, so keep an eye on it, but definitely know how to work with CSS Grid.

You can see that people are super comfortable using Flexbox for layout with more than 98% people saying they've used it last year.

There's a lot of other features here, you can see that although writing modes, where you can specify right to left and left to right orientation is somethign people haven't used yet, but it's being added to every framework, so it's important.

I like position: sticky. Logical properties are also awesome. I did a video on CSS Clamp, so check out raybo.org if you want to see how awesome it is.

Something that's getting a lot of press is container queries. It's still very much a feature that's in flux, so not many people have used it, but you're going to see a lot of videos about it in the next year. It lets you define responsiveness, not just at the viewport, but each individual HTML tag can respond to how much room it has on the page.

In terms of shapes and graphics, we're finally getting the ability to define geometric shapes, clipping paths, effects, masks and blend modes in CSS. You should really see design take a leap forward once people get used to these.

There's a couple of other smaller features that are pretty cool. Intrinsic sizing lets the browser take into account the space that the text takes up.

I also love object-fit, which gives you all of the features you could use with backgrounds now with images. So you can ask an image to fit a certain space proportionately.

Lots of other cool features, but I think those are the top features you should learn if you haven't already. Part of what I plan to do the rest of the year is to show you some of these on The Toolbox in a bit more context.

## CSS Frameworks

A lot of interesting things are happening in the world of frameworks. Sass is still heavily used everywhere in the real world, but most of its features have been added to or plan to be added to regular CSS.

Bootstrap is also still incredibly popular and I love Bootstrap 5, but things like Tailwind CSS as well as WindiCSS, and others are starting to nip at its heels.

Tailwinds is quickly becoming the de-facto standard for Component Based Architectures like React, Vue and Svelte. The Utility based approach is superior when working with those frameworks, but not if you're just using straight HTML. More about this on the demo.

There's a couple of interesting things happening here: first, some frameworks are adopting Tailwinds Utility approach and taking it further. I covered in a previous episode how Windi CSS is a Tailwinds clone that brought the JIT approach. I did an episode on that too.

Another interesting contender is something that sounds even crazier than Tailwinds...Assembler CSS (https://asmcss.com/). It's like a clone of Tailwinds that uses CSS variables instead of pre-built classes. I did a video on a previous episode. You have to see it to believe it.

Finally, there's UnoCSS, from the developer who made Windi. This is an Atomic CSS framework that claims to be 200 times faster than the tailwinds even with the Just In Time compiler.

Now, I wouldn't worry too much about these last few frameworks unless you've got some time to burn, but the utility approach is so good that we're seeing a lot of experimentation of where this can go next.

# JavaScript

Let's talk about JavaScript. As I mentioned, most of the additions to the language aren't super revolutionary, but it means that There's some features that you should be super comfortable with.

The module system is one of these. JavaScript is fully modular today, so you should be super comfortable with the import command.

JavaScript now has async/await functions that make the execution of code more predictable. To understand Async/Await, you should have a good understanding of promises. The course JavaScript as a Second Language I mentioned earlier has some videos on this.

If you're getting started, make sure you can read arrow functions well because otherwise JavaScript will seem like spaghetti, same thing with the spread syntax and error handling. I added all these to my new course, so go watch that or we have lots of other stuff.

Which reminds me, if you follow me on LinkedIn, I'll make this course free.

# Javascript Frameworks

The real action in JavaScript is happening in the Framework front. Of course there's the big three frameworks, React Vue and Angular.

If I was out looking for a job right now, I would definitely learn React. It's truly dominant and it's also constantly evolving, so it's the most marketable of the frameworks.

However, if I was building a personal project, I'd probably go for Vue.js. I say it again and again. It's my favorite framework...real easy to learn and it just makes a ton of sense. The fact that you can use it by adding a simple script tag is pretty slick.

Angular is still around, but not as dominant as it used to be. You might still find companies using this. Honestly, learn React, these frameworks are somewhat related so picking up a new one once you learn one of them isn't a huge deal.

Now, if you're itching to try something new, check out Svelte. Svelte gets rid of the killer feature in React and Vue...the Virtual DOM. The virtual DOM makes things easier, but at a performance cost. Svelte pre-compiles the code so that you don't need.

I think Svelte is going to have a breakthrough year. This year, Vercel hired Rich Harrys, the creator of Svelte full time just so he can work on Svelte. https://vercel.com/blog/vercel-welcomes-rich-harris-creator-of-svelte

So, as amazing as Svelte is, up to now, it's been a part time job for Rich, who used to work at the New York Times and created it on his 'free' time.

I want to make an honorable mention to another framework that I've really enjoyed using called [AlpineJS](https://alpinejs.dev/). This is a small javascript framework that is real fun to use. It's really meant for small projects and I did do a demo of this in a previous episode.

It's easy to learn with only 15 attributes, six propertie and 2 methods to learn. It feels as fun as jQuery used to feel when it was cool, but it's all modern.

## The Rise of the Meta Frameworks

The other thing to know is that there are these new meta frameworks that aren't real frameworks in themselves, but frameworks that use other frameworks.

The most important one of these is Astro. It's still in heavy development and I did a demo of this in a recent episode, so make sure you check that out. Everyone I know is super excited about this.

The main features are partial hydration, so it can load javascript only when needed, like when an element appears on the page and works with the other frameworks I mentioned.

There are two new developments on this front that are super interesting. First is Hydrogen, which is a framework from the shopping platform called Shoppify. What's interesting about this one is that it uses a module based approach to load and modify content independently of what else is going on in the page.

If I was to guess what's going to happen, I'd say that this is the future of frameworks. Serverless tools 11ty changed the way that we created sites by pre-rendering content.

But rendering things is what the servers are really good at, so I see an attempt to move things back to the server, so there is a framework called Remix that focuses on this.

Since the servers are also usually using CDNs and caching, we can do something called Edge computing where the work of creating dynamic sites and static content is handled and manage by the server.

## Other Tools

Honorable mentions go to two tools that are becoming dominang and might be something you spend some time with.

The first is Vite...from the makers of Vue.js. Today, we often need build tools to manage the process of processing our code and converting it to code usable by the browser. There have been lots of things that try to solve this problem like Grunt, Gulp, Webpack, Snowpack.

The list is real long, but I'm seeing more and more projects use Vite. Of course I've already covered this in a previous Toolbox episode.

Finally, I've also seen a lot of tools move at least part of it's processor intensive tools to Rust instead of JavaScript. Rust is a language that is friendly and offers some nice memory management. I'm not too familiar with it, but it feels like a trend.

# Tailwind CSS 3

Alright, so let's get to the Tailwind CSS demo.

Tailwind CSS 3 is a new version of the utility-first CSS framework that shook the world a few years ago. Let's take a look at why it's gotten so dominant so quickly and what's changed in the latest version.
