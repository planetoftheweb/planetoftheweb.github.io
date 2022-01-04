---
layout: post
title: "Customize Your Developer Tools-Ep15"
summary: "In this episode of the toolbox, we'll talk about the coming war of the dynamic hosting giants, then I'll show you several cool new tools including sandpack, supabase and mitosis. Plus, I'll give you a demo of two small libraries: MD Block from Lea Verou and Tippy.js."
hideDesc: true
video: AbtASxLxEyA
hero: /images/toolbox/episode15.jpg
thumb: /images/toolbox/episode15_tn.jpg
category: toolbox
---

Hello everyone this is Ray Villalobos and I stream about front-end and full stack tools Wednesdays at 1pm Eastern time 10am Pacific. So follow me and subscribe on all the social media things for more content. If you want to watch any past episodes, make sure you take a look at my blog...raybo.org.

---

# News

So, I've noticed some interesting things happening on the web recently, mainly that there are two players working to dominate the dynamic hosting space. Both of them had some large funding moves this week.

## Netlify

[![Netlify](/images/toolbox/2021-12-08_01-32-16.png)](https://www.netlify.com/)

First is Netlify, which raised 105 million dollars to 'transform the development of the modern web'. Netlify coined the term the JAMstack to indicate sites that were pre-rendered using Javascript APIs and Markdown. Basically this is what used to be called serverless or pre-rendered or static pages until people realized that the server needed to play a stronger role in the process.

They aqcuired [OneGraph](https://www.onegraph.com/), which is a GraphQL platform and started a 10 million dollar Jamstack Innovation fund as well as a million dollars in direct open source sponsorships. Zach Leatherman, the creator of Eleventy, which is what my blog raybo.org is currently running in works for Netlify.

Netlify also started a conference for the Jamstack called [Jamstack Conf](https://jamstackconf.com/), which ran online this year on Oct 6-7. I went to the first version of this conference, which was great. Online conferences don't really have the same pull.

[![Vercel](/images/toolbox/2021-12-08_02-41-28.png)](https://vercel.com/blog/series-c-102m-continue-building-the-next-web)

## Vercel

The second company is Vercel, which got $150 million dollars in series D funding. Vercel used to be known as Now, but changed it's name last year (I'm not a fan of the name Vercel). I am a client of Vercel and a big fan of their work. They created the [hyper](https://hyper.is/) terminal and originally now was one of the fastest way to deploy node.js based projects.

Vercel has thrown its support behind several important open source libraries like [webpack](https://webpack.js.org/), [astro](https://astro.build/), [babel](https://babeljs.io/), [parcel](https://parceljs.org/) and others.

Most notably, Vercel runs what's probably the most popular [React](https://reactjs.org/) open source Meta frameworks [Next.js](https://nextjs.org/).

This year, Vercel ran their own conference called [NextConf](https://nextjs.org/conf). Gillermo Rauch, the CEO of Netflix has often appeared at [GitHub Universe](https://githubuniverse.com/),

## Rich Harris

The most interesting move was the hiring of Svelte creator Rich Harris, to [work full time on the project](https://vercel.com/blog/vercel-welcomes-rich-harris-creator-of-svelte).

That was a real interesting move, it frees up Rich to work on Svelte full time and gives the company unique insight into one of the leading frameworks for the web. Svelte has always been the fourth framework. Angular, React, Vue and then Svelte.

I think that potentially this could signal a breakout year for Svelte and we're going to see serverless frameworks move towards a hybrid model where the server is still managing parts of the process, caching pre-rendered content as much as possible, but still working to deliver some of the dynamic aspects that the web really needs.

## The Future

I think that in 2021, you should look at a model that moves some of these frameworks to what [Remix](https://remix.run/) is doing. Remix moved almost completely back to the server, which honestly is where things belong. The cloud makes it easier to handle the pre-rendering that the server is doing.

---

# Toolbox Shorts

Let's get started with some shorts. There are new tools and articles that you should know about.

## Sandpack

[![CodeSandbox](/images/shorts/2021-12-06_17-01-01.png)](https://sandpack.codesandbox.io)

Sites like CodePen and JSBin provide code sandboxes that allow people to try code out. Although this might be a little self serving, I like this code sandbox creator library. I've been using CodePen and CodeSwing in my demos, but I always feel like it's safer if I could have my own version.

Looks like it's what React Docs is currently trying to use, so it feels like a pretty solid investment if you're looking to create code demos in your docs.

---

## Mitosis

[![Mitosis](/images/shorts/2021-12-07_17-00-52.png)](https://github.com/builderio/mitosis)

This is a unique idea in framework development. A framework designed to compile to other frameworks. It's also inspired by many other frameworks.

At first it looks surprisingly like React, but it also gets inspiration from just about everything else.

It looks so much like React components and hooks, but has a mutable state like Vue and compiles in the same way that Svelte compiles. The weird thing is that it doesn't just compile to JavaScript, but also other frameworks code.

I gotta say, that's the weirdest concept I've ever seen, but stay with me for a second. Imagine that you're building a component library for a bigger company that uses different frameworks, so you actually NEED to write the components in different languages.

Sounds like a heck of an edge case, but having a single language that takes the best of each of the frameworks, but produces code in all of them might be an advantage to at least two or maybe three people.

It's in Alpha, so be careful and good luck to you.

---

## Xtend UI

[![Xtend UI](/images/shorts/2021-12-07_17-27-54.png)](https://xtendui.com/)

One of the problems with Tailwinds is that it doesn't come with it's own components like Bootstrap, so a lot of solutions have come out to try to fix that shortcoming. XtendUI boasts a number of excellent components with animations and it happens to be framework agnostic.

If you look at the list of what it's built with, I have to agree with the choices. It uses Tailwind components to create the elements, vanilla javascript plugins like Popper and Feather icons that well respected to handle the rough spots. It also uses GSAP for the animations, which is another one of my favorites.

I think what killed this framework for me was the installation. The [docs](https://xtendui.com/intro/setup) use a pretty complicated set of steps to install the libraries and even then, you don't really get a build process with something like Vite. Feels like something you have to add to another existing project.

The animations are beautiful, although I feel like I'd get exhausted after a while. This also uses the non-jit version of Tailwinds that came out in version 2.1, so it feels a bit dated…but really…who can keep up.

---

## 30 SECONDS OF KNOWLEDGE

[![30 SECONDS OF KNOWLEDGE](/images/shorts/2021-12-07_17-54-04.png)](https://30secondsofknowledge.com)

I'm a sucker for replacement content extensions when you open a new tab, so I was excited to try this one which adds random code snippets that can help you learn the language of your choice. It's very customizable with over 900 snippets.

I added this to my chrome based browser…I love to use Brave and turned off some of the less desirable languages like C++ and Ruby (who needs them).

---

## MD Block

[![MD Block](/images/shorts/2021-12-08_01-07-02.png)](https://md-block.verou.me/)

It was created by one of the true geniuses of the web...Lea Verou in what she refers to as a [Yak Shaving incident](https://lea.verou.me/2021/11/on-yak-shaving-and-md-block-an-html-element-for-markdown/). In other words, she started to do one thing and then realized she needed another thing so in one of those crazy sprints she built this thing.

She wanted it to have zero dependencies, and be able to load external markdown files as well and also be compatible with prism (her other thing that's a syntax highlighter)

So, I created a [code swing for it](https://github.dev/planetoftheweb/swing-md-block), so you can try if you're interested.

---

## Supabase

[![Supabase](/images/toolbox/2021-12-08_03-32-26.png)](https://supabase.com/)

I've been drooling over this FireBase alternative for a while because I love Firebase so much that it seems like a viable open source alternative. But I realized that the beauty of Firebase is how simple it makes taking care of things.

It falls into the category of backend as a service and allows you to focus on building your app and not worrying about things like Real Time, Multi User offline and authentication features.

Firebase was a platform purchased by Google a while back. Google has been busy adding lots of features to the platform way beyond the original database.

The main difference I see is that Supabase uses a PostgresQL database, whereas Firebase uses noSQL. With the rise of GraphQL's popularity, I feel like I want to stick with Firebase until I find a good GraphQL alternative, which soupabase just announced.

---

## Tippy

I love small use libraries that do a great job regardless of the language. I found this great little library called Tippy.js. It's based on [popper](https://popper.js.org/), so it has that as a dependency.

It has a ton of great features. Compared to Popper, which is more of a positioning language, Tippy has a fuller set of utilities to let you control the look and feel of your popovers.

---

# Outro

Alright, thanks for watching. Don't forget to follow me on LinkedIn, YouTube or your favorite Social Media platforms @planetoftheweb.

You can catch old episodes of the toolbox at raybo.org. I'll see you next week for some more front end and full stack tooling

---

# PostFix

## Next Episode

This is the last episode of the year for The Toolbox and good news, some of the work we've been doing here is going to be featured in other places on LinkedIn and LinkedIn Learning.

I'm debating how often to do these. They're a lot of work so I feel like I could go to a bi-weekly show and then maybe do something to engage more directly with the community the other week.

Mountains are moving, seas are parting and you might see The Toolbox get a little bigger next year. In the meantime, have a Merry Christmas, a prosperous new year and keep tooling.
