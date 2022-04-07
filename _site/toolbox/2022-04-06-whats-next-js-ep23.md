---
layout: post
title: "What's Next JS - Ep 23"
summary: "In this episode of The Toolbox, we'll take a look the most popular React Meta Framework called NextJS. It's an almost magical set of tools that can help you build a site or app quickly. I'll also talk about some exciting new tools in the shorts including new sass and css frameworks...or libraries...or whatever you call them. Yeah the pace of the web is relentless and that's why you need the Toolbox"
hideDesc: true
video: oGhg6wXoxXc
hero: /images/toolbox/episode23.jpg
thumb: /images/toolbox/episode23_tn.jpg
category: toolbox
---

Hello everyone this is Ray Villalobos and I stream about front-end and full stack tools Wednesdays at 1pm Eastern • 10am Pacific. Follow me and subscribe on LinkedIn and YouTube for more content. If you want to watch any past episodes, make sure you take a look at my blog raybo.org.

It's been a while since I had one of these episodes, so I apologize. Just been super busy. When we get to course publishing, it's like a black hole of time just opens up right beside us.

As you know, I've been exploring new frameworks and I'm super surprised that the pace of the web continues to be relentless. Let's take a look at some recent tools that are piquing my interest.

# Shorts

Let's take a look at some of the cool projects that I found interesting lately. I feel like I have a backlog of these.

## ScrollMovie.js

[![ScrollMovie.js](/images/toolbox/2022-04-07_01-53-25.png)](https://nagatapote.github.io/scroll-movie/)

I'm going to start you off with something ridiculously cute. This is a library to let you animate a background element on scroll.

## Sublime Merge

[![Sublime Merge](/images/toolbox/2022-04-07_01-53-35.png)](https://www.sublimemerge.com/)

This is a new Git Client from the makers of my favorite previous editor...Sublime Text. It looks pretty amazing and like sublime it's super fast.

So, it feels less like a GUI editor than the GitHub client. I think that if you're still a user of Sublime Text, then you'll probably love this editor.

## JSON Visio Editor

[![JSON Visio Editor](/images/toolbox/2022-04-07_01-54-11.png)](https://jsonvisio.com/editor)
I use JSON in a lot of project, so this was a new approach to previewing JSON objects visually. Super Cool interface, you can change the orientation of the nodes and there's a few other ways to control the interface.

## MDash

[![MDash](/images/toolbox/2022-04-07_01-54-49.png)](https://m-docs.org/)
This is a strange new library that gives you components that are based on regular HTML tags, so they're easy to learn and tiny. It pushes web standards whenever possible.

This reminds me a bit of Pico.css that it makes your existing elements look great without having to use a bunch of styles.

If you look at the form element, for example, you can see that you simply create a web standards based form and it makes it look and function great.

For places where HTML elements dont' already exist, it lets you use special versions of the tag that start with m-dash.

## Cirrus

[![Cirrus](/images/toolbox/2022-04-07_01-55-41.png)](https://www.cirrus-ui.com/)

This is a real interesting Development because it's basically Tailwind CSS, but for Sass. The advantage is that all of the configuration is done in sass instead of through JS config.

This is somewhat of a design system as well that looks pretty nice. Like Tailwind CSS it reduces the file size by only exporting what you're using in your project.

---

# What's Next.js

[![NextJS](/images/toolbox/2022-04-07_01-56-23.png)](https://nextjs.org/)

Next.js is a meta framework that adds features on top of React to help you build sites and applications. You see, React is awesome, but it doesn't have everything you need, it really focuses on letting you build interfaces.

In reality you need a few more things. If you look in the site, you can see that there's a lot of fancy words, so let's break some of the best parts down.

### Hybrid Rendering

First is you go to a page on the web, you contact a server that feeds you the page.

In recent years, platforms figured that a lot of what a server gives you is information that doesn't change depending on who you are, so it can -pre-build or render a page with say...my latest courses because that's not really different for everyone.

On other sites like Facebook or LinkedIn, the page is full of information personalized for you...say like the latest events you personally signed up for.

So Hybrid rendering gives you the best of both worlds, it lets you build sites that have pre-rendered data that doesn't change and add information from personalized data.

### Smart Routing

Routing means that certain paths will automatically map to URLs for your site and that you can easily use the data from those URLs to help send data or commands back to the server.

The routing also does something called pre-fetching, so that pages that you might be loading next are pre-fetched

### CSS Support

Out of the box Sass and CSS module support, although you still need a sass installation. Easy to add something like Tailwind CSS or a post processor.

It also supports something called styled-jsx, which lets you easily add CSS to each component or modify the global styles. There is support for other CSS in JS styles.

### Pre Fetching & Hydration

Next.js pre-renders every page, creating HTML for each page it needs in advance.

It loads the minimum amount of JavaScript necessary, but it will wait until the page loads before interactive components are available.

You can choose to have the pre-rendering happen locally or on the server and choose which method on a page by page basis.

### Dev Environment

This is pretty common, but of course, Next has a pretty modern development environment with a live reload, fast refresh, code splitting and optimized bundling. It's pretty awesome out of the box.

### Image Optimization

Next.js optimizes images on-demand, when users request them. They are lazy loaded by default...which means that only images that are in the user's viewport will be loaded and new images will load when they scroll into view.

They will also avoid cumulative layout shift. This can be real annoying when you go to a site and the loading of elements will cause an item element to shift positions.

### Utility Components

Like the `<Head>` component will help you take care of common tasks.
The `<Script>` component will let you load scripts.
Styled JSX will allow you to load CSS that's scoped to a component, page, or globally.

## Links

https://nagatapote.github.io/scroll-movie/
https://www.sublimemerge.com/
https://jsonvisio.com/editor
https://m-docs.org/
https://www.cirrus-ui.com/
https://nextjs.org/
https://github.com/planetoftheweb/nextdemo
