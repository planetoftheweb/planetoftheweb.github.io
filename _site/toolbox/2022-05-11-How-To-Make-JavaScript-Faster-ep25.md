---
layout: post
title: How to Make Javascript FSTR - Ep 25
summary: In this episode of The toolbox, I'll show a demo of the framework with the
  highest satisfaction rating. We'll talk about why it so fast and why it's
  making React look... old. Plus, we'll go over a big industry survey to find
  out where the front end is going. The pace of the web is relentless and that's
  why you need the Toolbox
hideDesc: true
video: ZCv0_1AgdNY
hero: /images/toolbox/episode25.jpg
thumb: /images/toolbox/episode25_tn.jpg
category: toolbox
type: post
---

Hello everyone this is Ray Villalobos and I stream about front-end and full stack tools Wednesdays at 1pm Eastern • 10am Pacific. Follow me and subscribe on LinkedIn and YouTube for more content. If you want to watch any past episodes, make sure you take a look at my blog raybo.org.

## The Most Popular

So, I've been looking at a lot of frameworks lately and in the last episode, I was covering Svelte, which is probably now my new favorite framework even though in the past it's been Vue.js.

However, as I was exploring Svelte, one thing kept bothering me about covering that framework.

Although it's really climbing in the rankings each year, in terms of popularity, it's still not the most popular framework. In the last State of JavaScript survey that happened to be SolidJS.

[![State of JS Survey](/images/posts/2022-04-27_06-35-00.png)](https://2021.stateofjs.com/en-US/libraries/front-end-frameworks)

I mean, I feel like everyone today should learn React because it's so dominant, but I'm starting to feel like React is showing it's age.

## Why is React so old?

I'll give  you a couple of examples. If you're a new learner and you're trying to learn React. You might end up at the [Documentation on this page](https://reactjs.org/docs/components-and-props.html).

I know I have some React peeps here. Let me ask you...is this the way you write React?

With Classes? heck no. Modern React devs use Hooks, and there's definitely nobody using code like that...unless you're trying to learn it from the manual. 

[![React Example](/images/posts/2022-05-13_10-58-10.png)](https://reactjs.org/)

Why start off showing someone the way they're NOT going to be using the platform?

I'm being nitpicky about this one, but bear with me. React is now at version 18. 

## React Concurrency

One of the big new features was concurrency, something they announced a long time ago, but are now just releasing.

I love what concurrency is doing and the React Team did a good job of makint it easy to update.

[![Concurrency](/images/posts/2022-05-13_11-00-51.png)](https://reactjs.org/blog/2022/03/29/react-v18.html)

With [Concurrency](https://reactjs.org/blog/2022/03/29/react-v18.html), you get these new hooks that give you lot of fine grained control over how things are rendered, so instead of rendering things sequentially, the rendering engine can prioritize urgent updates.

It's brilliant, but the part that bothers me is that I feel like React is sort of piling on additional features for advanced users, but not really doing much to innovate. The innovation is happening with things like SolidJS.

## State of the FrontEnd

Alright...before we get into SolidJS, let's take look at some of the cool things I found on the web.

I'm going to replace the shorts this week with a new State of Front End survey, because there are some pretty interesting things in there.


[![State of the Front End](/images/posts/2022-05-13_11-02-57.png)](https://tsh.io/state-of-frontend/)

You probably know I'm a big fan of industry surveys and I found a new one called the State of the FrontEnd with 3700 respondents from 125 countries. I mean, it's a smaller survey, but it covers different things from the usual State of JS or CSS.

I like some of the insights provided by companies on this survey. Interesting to see Remix already showing up in some of these places. That thing is going to be HUGE in the industry, so make sure you check out the older episodes of The toolbox.

I have to disagree with Chris Coyier on his analysis of Sass and Custom variables. Yes, they're assome, but there's a lot of goodness in Sass that is still hard to replicate. I consider myself more of a blue collar coder, so I'm always thinking if something's not broke maybe it doesn't need fixing.

Have you used some of the other solutions like Emotion and Chakra...Haven't even ever heard of them...sounds like another episode might have to spin up.

TypeScript is continuing to eat the world. I feel like I really need to dig into it deeper with results like this. Are you already using typescript?

## SolidJS

[![SolidJS](/images/posts/2022-05-13_11-06-47.png)](https://www.solidjs.com/)

SolidJS is a React inspired library focused on performance. What makes it special is that it forgoes the use of a virtual DOM.

I know, that's the groundbreaking feature in React, but if you think about it, you don't really need it. So Basically Solid is what would happen if Svelte and React had a baby.

It pre-compiles your scripts. That means that you can write code that looks like it's JSX or JavaScript, but gets translated to something that's extremely fast javascript.

Although React is also translating  your code, but it does a few things differently. There's a piece of React that runs in your client that's always analyzing the DOM and making changes to it. We call that the virtual DOM. 

The virtual DOM analyzes the page, so that it only redraws things when it has to. 

Now the virtual DOM isn't necessarily a bad thing. If you really want to get into it. As a matter of fact, it's is a super efficent way to do things. Some of the fastest performing frameworks in the world are Virtual DOM libraries.

Here's a few things you should look at when comparing:

- [The Virtual DOM is Pure Overhead](https://svelte.dev/blog/virtual-dom-is-pure-overhead)
- [Performance Comparison](https://javascript.plainenglish.io/javascript-frameworks-performance-comparison-2020-cd881ac21fce)
- [Performance Benchmarks](https://krausest.github.io/js-framework-benchmark/2020/table_chrome_87.0.4280.66.html)

It also has the highest satisfaction rating, according to the latest State of JS survey. Let's go ahead and build a simple search application with components that will show you some of its popular features. Satellite is one of those things that you install with digit. So what we do is NPX and then digit. Then we can specify one of the templates.


## Links
- State of JS: go.raybo.org/83N_
- State of Front End: go.raybo.org/83O1
- React: https://reactjs.org
- Virtual DOM Overhead: go.raybo.org/83O7
- JS Performance Article: go.raybo.org/83OL
- Ultimate JS Benchmarks: go.raybo.org/83ON
- Degit: go.raybo.org/7q0T
- Svelte: svelte.dev
- SolidJS: solidjs.com
- PicoCSS: picocss.com
- Finished Code: go.raybo.org/82oB
- LinkedIn: linkedin.com/in/planetoftheweb/
- YouTube: youtube.com/planetoftheweb
- Blog: Raybo.org