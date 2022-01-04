---
layout: post.njk
title: "The Relentless Pace"
summary: "A big part of my job is to try to stay on top of new technologies for web developers. This year after 16 episodes of the Toolbox I have to admit...I had no idea how deep the rabbit hole was. Here's a few things I learned, and more importantly what you should try to learn in 2022."
hero: /images/newsletter/relentlesspace.png
thumb: /images/newsletter/relentlesspace_tn.jpg
category: newsletter
---

Lately in the episodes of my series called [The Toolbox](https://raybo.org/toolbox/0/), I started to add a tagline that captured the way I feel about keeping up with being a developer.

> The pace of the web is relentless

Most of the courses I'd been doing are what we call 'screen cap'. It works well, but I'd always wondered if there was a better way. The Toolbox has been a source of experimentation in the past year. Here's a clip so you can see what I've been up to.

<lite-youtube videoid="3PSu4tGWeq8"></lite-youtube>

My plan was to try to do something weekly; One or two actionable tips covering new, cutting edge material: new frameworks, JS/CSS features, news, great new tooling and maybe an interview here and there. The sort of stuff that wouldn't work as part of my courses.

In doing that, I've realized how hard it is to keep up with things, even for someone whose full time job depends on it. Here's some of the trends I discovered in the year.

## What's New in Web Development

[WindiCSS](https://windicss.org/) tried to disrupt Tailwind CSS 2 with a compiled approach, but then, Tailwind CSS 2.1 experimented with a JIT compiler. The developer of WindiCSS started a new project called [UnoCSS](https://unocss.antfu.me/), which is an atomic approach similar to [AssemblerCSS](https://asmcss.com/).

![No alt text provided for this image](https://media-exp1.licdn.com/dms/image/C4E12AQE1FsG6rnJccQ/article-inline_image-shrink_1500_2232/0/1641220505922?e=1646870400&v=beta&t=IXENZB3PUxaKfU6WgsFGBlDGcaK6A-jQNdMg3RX3B4I)

At the end of the year Tailwind CSS responded with a new version 3, which puts the JIT compiler up front as a core feature. It is rapidly taking over the component-based web, so if you're using things like React, Vue or Svelte, give you should learn how it works. it will change the way you do things.

![No alt text provided for this image](https://media-exp1.licdn.com/dms/image/C4E12AQHLBbxe-Y2FfA/article-inline_image-shrink_1000_1488/0/1641216727953?e=1646870400&v=beta&t=tXP5fztDC4dmUVkrH0mGoeei1dWKJ_HLo_ZB2lOcdVg)

In the land of Javascript frameworks, we got regular updates to the main players, including React, Vue and Angular. Plus we saw the rise of the Meta Frameworks. Frameworks that use other Frameworks (Vue, React, Svelte). That means something like [Astro](https://astro.build/) and [Isles](https://iles-docs.netlify.app/).

Astro looks so promising you should pay attention to it. The way that it uses partial hydration to load javascript when the element that needs it is loaded is unique. It works really well with just JavaScripts or any other framework, it really seems like the future and a lot of people are taking notice.

[![No alt text provided for this image](https://media-exp1.licdn.com/dms/image/C4E12AQFM9HgxR2v7ng/article-inline_image-shrink_1000_1488/0/1641216779734?e=1646870400&v=beta&t=5GnwGZH9YQrFYyvhSx2VYNAPQnzNuZ_yxFlntrs9sYI)](http://astro.build/)

## Important Investments

Last year we saw companies like [Vercel](https://vercel.com/) and [Netlify](https://www.netlify.com/) got large infusions of cash. Vercel made some strategic investments, hiring Rich Harris, the main developer of [Svelte](https://svelte.dev/) and also buying up [TurboRepo](https://turborepo.org/). Keep an eye on Svelte, it's due to have a breakthrough year.

<lite-youtube videoid="uQntFkK8Z54"></lite-youtube>

Definitely watch this interview from the folks at Vercel where Rich talks about the future of the platform. Also, here's a course I did that's an introduction to Svelte.

### Frameworks Will Run Server-assisted

![No alt text provided for this image](https://media-exp1.licdn.com/dms/image/C4E12AQGt-vhxb9XA_w/article-inline_image-shrink_1500_2232/0/1641217567556?e=1646870400&v=beta&t=S_ZMkCx2TPadvI7qZRBw8xAqR8u2mhVxffb59PXMTMQ)

New frameworks like Shopify's [Hydrogen](https://hydrogen.shopify.dev/) and [Remix](https://remix.run/) are going back to the server. Servers are great at caching, storing and processing lots of data. The Serverless movement tried to make life easier by pre-rendering content, but shouldn't the server do that anyways. It's a pain to pre-render content locally and then upload it, so why not let the server do it. That's where these frameworks are trying to go.

<lite-youtube videoid="YYl5BPePwTM"></lite-youtube>

### JavaScript

[![No alt text provided for this image](https://media-exp1.licdn.com/dms/image/C4E12AQGJi7y9P8neRw/article-inline_image-shrink_1500_2232/0/1641222792170?e=1646870400&v=beta&t=akRE8P75SiVzkRw4fUZFSdeNpHZ3WonjX7C1BYjdOhs)](http://www.proposals.es/)

The l[anguage is changing](https://www.proposals.es/), but no longer by leaps and bounds. If you haven't already, get some experience with modules, arrow functions, destructuring, intersection observer, pure functions. There's been a few additions to the language operators like &&= ?. that are really interesting and useful. Other methods like replaceAll and promise.any are also real interesting.

### CSS

If you don't know CSS Grid yet, you should probably spend some time with it. You don't need it for everything, but it's superior in some ways and it's becoming a standard in the industry. The upcoming sub-grid looks interesting, but it means that grid will be getting more and more overtly complex.

You should learn about object fit (Tailwinds example above, it works just like CSS), since it helps your images work like the older backgrounds. Container queries is another hot topic, but it's been in flux so I'd wait a while to bother about it. Everyone is going to be making some videos about it though. You should also check out feature queries, gap, scroll snap, :is/:where. There's also filters and shapes that are going to change what people can do with layouts.

## How to Stay Up to Date

[![No alt text provided for this image](https://media-exp1.licdn.com/dms/image/C4E12AQE760mWc7hVSQ/article-inline_image-shrink_1500_2232/0/1641223485914?e=1646870400&v=beta&t=IM_Sd1GeOxxQmAhsb7aAsluKnkZN4DIhJmyVE2ySHcE)](http://raybo.org/toolbox/0/)

My goal this year is to make keeping up with the web part of [The Toolbox](https://raybo.org/toolbox/0/). I'll do a weekly episode with breaks when I have to. I'll be covering emerging frameworks, JavaScript/CSS trends, hot new tools and feature interviews with people doing the work.

![No alt text provided for this image](https://media-exp1.licdn.com/dms/image/C4E12AQH8PLIybTyqAg/article-inline_image-shrink_1500_2232/0/1641223581079?e=1646870400&v=beta&t=uDY769pAHKBHMld32NN_Rou5Katk6wmw5Q8SVGOorBs)

> Come with me if you want to learn

I'll give you an overview of a topic, like a framework, and then show you a sample of how that topic works in a practical way. Something small to follow along with so that you can learn things without it taking too much time. If you keep up with the episodes, at the end of the year, there's a lot that we'll learn together.

This year, The Toolbox will be available as a live stream with parts of it moving to courses on LinkedIn learning. Should be super exciting and fun, so I hope you'll join me.

## First Episode

![No alt text provided for this image](https://media-exp1.licdn.com/dms/image/C4E12AQFgOWw9VINy0w/article-inline_image-shrink_1500_2232/0/1641223742695?e=1646870400&v=beta&t=qH81ZMMtNWXeRHeyya--1adJQAu4c5f87olFypONs_U)

Don't miss the first action packed episode of the Toolbox this Weds, 10am PST, 1pm Eastern time. I'll be covering the changes to Tailwind CSS version 3, what you should learn next year, plus the usual tools and tips in the Bits (the new name for shorts).
