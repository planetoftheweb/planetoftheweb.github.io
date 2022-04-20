---
layout: post
title: "Can Svelte Save JavaScript - Ep 24"
summary: "In this episode of The Toolbox, we'll take a look the framework I wish was the most popular...SvelteJS. Plus, some great tools in the shorts segment including Svelte and React utilities...You'll also find out why I think Svelte can save JavaScript. The pace of the web is relentless and that's why you need the Toolbox"
hideDesc: true
video: k4n5XIqCGq8
hero: /images/toolbox/episode24.jpg
thumb: /images/toolbox/episode24_tn.jpg
category: toolbox
---

Hello everyone this is Ray Villalobos and I stream about front-end and full stack tools Wednesdays at 1pm Eastern • 10am Pacific. Follow me and subscribe on LinkedIn and YouTube for more content. If you want to watch any past episodes, make sure you take a look at my blog raybo.org.

I tend to love frameworks that are easier for humans to program. I always feel like things should be simpler, not harder for developers to do. I've said in the past that because of that, my favorite framework is Vue.js. That's true, but there's another framework that I wish was the best and that's Svelte.

# Shorts

Let's take a look at some of the cool interesting projects.  A lot of them are related to Svelte.

## Svelte

[![Svelte](/images/toolbox/2022-04-13_10-08-44.png)](https://svelte.dev/)

Most of the shorts are going to be about Svelte this week, so we'll get kicked off with the main site Svelte.dev. This is a great playground for the platform, which includes a REPL tool that lets you try out some of the features in the framework. There's also a tutorial that uses the REPL took to walk you through some lessons.


## Svelte Kit

[![Svelte Kit](/images/toolbox/2022-04-13_12-00-48.png)](https://kit.svelte.dev)

Svelte Kit is Svelte's answer to NextJS or other frameworks. This is I think where Svelte breaks down a bit. It's nowhere near as modern as Next and it's been truly under development for quite a while. I'm really hoping this improves with all 'Extra' time Rich has now.

## Svelte Cubed

[![Svelte Cubed](/images/toolbox/2022-04-13_12-03-29.png)](https://svelte-cubed.vercel.app/)

One of the things that Svelte does really well is provide hooks to animation states that make it easier to create complex movements. Like VueJS, it's a great framework for animations. If you thiknk about it, that makes sense since newspapers, where Rich came from often use a lot of complex animations and infographics. So this is a set of tools built on top of Svelte that let you work with probably the most popular 3d animation library called Three.js.


[![Degit](/images/toolbox/2022-04-13_12-06-52.png)](https://github.com/Rich-Harris/degit)

Another strange thing about Svelte is that you don't use a CLI to start up a project, you simple make a copy of an existing repo. You use this library called Degit. It's so good that I often use it on other projects to help me clone repos without any history. It's super flexible with tons of options.


## PreviewJS

[![PreviewJS](/images/toolbox/2022-04-13_12-09-22.png)](https://previewjs.com/)
Lets you preview your React components within Visual Studio Code. It's great because it lets you see how it will look without having to start a server. You can pass along properties and supports storybook. There's even a pro edition if you want to support the developer with a few extra options.


## Mantine

[![Mantine](/images/toolbox/2022-04-13_12-13-03.png)](https://mantine.dev)
This is a pretty nice looking component library for React. Themmeable, reponsive and compatible with Gatsby, Remix or NextJS. Looks pretty full features. I thought it was cool, but I'd love to know if there's something else people are using.


## Svelte Course

[![Svelte Course](/images/toolbox/2022-04-13_12-16-22.png)](https://go.raybo.org/7pyX)

Before I get started with Svelte, I just wanted to mention that I did a course on it and made it available for free on LinkedIn learning so if you follow me, it will be free for 24 hours using this link.

I put all the links in the comments, so if you're coming in late, just scroll to the top of the comments on LinkedIn, or you can look for them on Raybo.org and YouTube.


---

# Can Svelte Save JavaScript?

Svelte is a JavaScript framework that tries to do something different by helping you write truly reactive code without the virtual DOM...and it does it in style by helping you write less code. It's seen a rise in popularity in the last few years that has [surpassed others](https://go.raybo.org/7pzX) to hang within the top five frameworks recently.

It's tied for the number one spot in terms of user satisfaction and I think I agree with that because it feels very familiar.

## Less Code

Let's talk a bit about it's best feature and that's the fact that it helps you write less code. The language compiles to JavaScript...hopefully you got the joke in the title. The answer is that it's true that Svelte can save JavaScript because it compiles to JavaScript. So Svelte is higly optimized JavaScript compiler.

However, I think that Svelte is also in the fight for simplicity over complexity. Recently the developer of Svelte...Rich Harris got hired by Vercel to work on the project full time. So this was a side project while Rich was working for the New York Times

The more you use Svelte, the more you realize how simple it is. Take a look at [this code sample](https://svelte.dev/blog/write-less-code).

You don't have to import the react library, you don't worry about creating a main container for your HTML. You don't need to remember to write className instead of class and it's super easy to do two way data-binding with the bind attribute.

There's no useEffect...which I think is poorly named. It treats you like a human and takes care of the complexity of the language for you.

You can really pick this framework up quickly.

## No Virtual DOM

Okay, this is going to sound weird at first because the big deal about React is that it introduced the concept of the Virtual DOM. With it, you just worry about updating the state...or data and it takes care of updating the interface for you.

The thing is, that can be innefficient. because Updating the interface is a lot of work for the browser because it's constantly calculating the differences in code as the user works with the application.

So instead of relying on an engine that keeps track of the DOM. Svelte creates optimized code that does what you want it to do.
npm start


## Links

Svelte: https://svelte.dev/
Degit: https://go.raybo.org/7q0T
Finished Code: https://go.raybo.org/7pzG
Svelte Course: https://go.raybo.org/7pyX

Svelte Kit: https://kit.svelte.dev
Svelte Cubed: https://svelte-cubed.vercel.app/
ThreeJS: https://threejs.org/
PreviewJS: https://previewjs.com/
Mantine: https://mantine.dev
Degit: https://go.raybo.org/7q0T
Finished Code: https://go.raybo.org/7pzG
Svelte Course: https://go.raybo.org/7pyX
Blog: https://raybo.org
LinkedIn Profile: https://www.linkedin.com/in/planetoftheweb/
YouTube: https://www.youtube.com/planetoftheweb
