---
layout: post
title: "MiniMasonry, Simple.css, Rust, Iles and Big WindiCSS demo"
summary: "In this episode of the toolbox, we'll take a peek at some new libraries like minimason and simple.css, then talk about how Rust is taking over the web, plus we'll look at some major new major frameworks like Remix and Iles. Then, I'll show you a demo of WindiCSS, a contender that offers some improvements over TailwindCSS. It's not in your mind, the pace of the web is relentless...so to keep up...it's time, for the Toolbox"
hideDesc: true
video: i-maN7uHAn4
hero: /images/toolbox/ep13.jpg
thumb: /images/toolbox/ep13_tn.jpg
category: toolbox
---

Hello everyone this is Ray Villalobos and I stream about front-end and full stack tools Wednesdays at 1pm Eastern time 10am Pacific. So follow me and subscribe on all the social media things for more content. If you want to watch any past episodes, make sure you take a look at my blog...raybo.org.

---

# Shorts

There's a lot going on, so lets talk about the shorts, where I cover what's happening on the world of full stack development.

## MiniMasonry.js

A lightweight dependency Free library for building masonry layouts. These are a great way to organize photos of difference sizes and were popularized by social media websites. Looks like something I'd love to do a demo of in an upcoming episode. Do you think this is still a good layout? https://spope.github.io/MiniMasonry.js/

## Simple.css

This is quite possibly the simplest libray you'll find. It's meant to give you a decent enough look with a minimal of markup. Whereas most CSS frameworks make you use complex CSS classes, this one assumes that you'll be using just regular markup. This is a good option if you just need to get something up quickly.

- [Simple CSS](https://simplecss.org/)
- spin something up very quick
- A good looking `sans-serif` local font stack.
- Typographic best practices.
- Automagic flipping to dark mode.
- Fully responsive.
- Sensible defaults that format standard HTML elements.
- Super lightweight; **less than 4 KB in size**.

---

## Rust

[Rust](https://www.rust-lang.org/)

You may be wondering what's going on with the web since so many projects are moving at least part of their engines to a newer programming language called Rust instead of JavaScript. According to one of the Stack Overflow surveys, Rust was the most loved programming languages, preferred by almost 84% of programmers six years in a row.

The proof is the amount of popular projects using Rust like Deno, esbuild, Rome, Parcel, Vite…it's being used by companies like Facebook, Amazon, Apple, Microsoft and Google.

Rust helps programmers work with large amounts of data in a very efficient way. It uses a unique and automated memory management approach. Although it's early, it's definitely something to take a peek at.

## Iles

[Iles](https://iles-docs.netlify.app/guide/introduction

The hot new trend in frameworks is something called partial hydration. It basically means that your interactivity is not loaded until it's needed. A lot of new frameworks are adopting that approach including this one called Iles.

From this article (https://css-tricks.com/does-the-next-generation-of-static-site-generators-make-building-sites-better/)

- Ship zero JavaScript by default. Interactive bits are opt-in — that’s what the islands metaphor is all about. Astro and îles do it at the per-component level and [SvelteKit](https://kit.svelte.dev/) prefers it at the [page level](https://kit.svelte.dev/docs#ssr-and-javascript-prerender).
- Additional fanciness around controls for when hydration happens, like “when the browser is idle,” or “when the component is visible.”
- Use a fast build tool, like [Vite](https://vitejs.dev/) which is Go-based [esbuild](https://esbuild.github.io/) under the hood. Or Rust-based [swc](https://swc.rs/) in the case of [Next 12](https://nextjs.org/blog/next-12).
- Support multiple JavaScript frameworks for componentry. Astro and îles do this out of the box, and another example is how [Slinkity](https://slinkity.dev/) brings that to [Eleventy](https://www.11ty.dev/).
- File-system based routing.
- Assumption that Markdown is used for content.

## Remix

https://remix.run/

Just this Monday, a new framework was released that was hard to ignore called Remix. I've never seen the level of pre-marketing about a new framework. This is a React based framework that is really the evolution of a popular project called React Router.

They used to charge big bucks for it, but now it's an open source project that is free to use. The killer feature here is that it takes the web full circle.

Remember the days where we handle most things in the server…we'll bellbottom and server side code is back with Remix. However, it takes the best of what we've learned about the new web like mostly static content, simple routing and super fast loading.

One of the interesting approaches is the ability to create something called nested routes. So a page can have sub-sections that load separately. The huge advantage is sort of like what happens with modern build tools like HMR or Hot Module replacement.

Sub-routes can load separately than other routes, so updates happen way quicker since only a small portion of the page has to be reloaded.

# Demo

Alright Let's get to the main even, which is the demo of cool stuff. Today, we're taking a look at WindiCSS, it's trying to outdo TailwindCSS, which is becoming a dominant library in the web space.

## WindiCSS

https://windicss.org/

- on-demand alternative
- faster load times
- Full compatibility with Tailwind v2.0
- Zero dependencies: does not rely on PostCSS and Autoprefixer
- JIT default
- Vite

### Additional cool features

- Variant Groups[#](https://windicss.org/features/#variant-groups)

Apply utilities to the same variant by grouping them with parentheses.

```
<div class="bg-white dark:hover:(bg-gray-800 font-medium text-white)"/>
```

Extended responsive breakpoint control.

```
<div class="p-1 md:p-2 <lg:p-3"></div>
```

- Important Prefix[#](https://windicss.org/features/#important-prefix)

Prefix any utility classes with `!` to set them as `!important`.

```
<div class="text-red-400 !text-green-300">Green</div>
```

- Reusable components

Quickly combine utilities to create reusable components.

windi.config.js

```
export default {
  theme: {
    /* ... */
  },
  shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
}
```

```
<div class="btn hover:btn-green"></div>
```

- Dark Mode[#](https://windicss.org/features/#dark-mode)

```
<div class="text-black dark:text-white"></div>
```

[Learn more](https://windicss.org/features/dark-mode)

- RTL[#](https://windicss.org/features/#rtl)

```
<div class="text-green-400 rtl:(text-red-400 text-right)"></div>
```

[Learn more](https://windicss.org/features/rtl)

- Directives[#](https://windicss.org/features/#directives)

Tailwind-like `@apply`, `@screen` directives are fully supported.

```
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 hover:bg-blue-700 text-white;
  padding-top: 1rem;
}
```

- Visual Analyzer[#](https://windicss.org/features/analyzer.html#visual-analyzer)

[![](https://img.shields.io/badge/a-windicss--analysis-gray?logo=github&label=)](https://github.com/windicss/windicss-analysis)[![](https://img.shields.io/npm/v/windicss-analysis?color=cb0200&label=%20&logo=npm)](https://www.npmjs.com/package/windicss-analysis)[![](https://img.shields.io/badge/a-%40antfu-48B0F1?label=)](https://github.com/antfu)

A visual analyser tool for [Windi CSS](https://github.com/windicss/windicss). Browse your utility usages, get an overview of your design system, identify "bad practices", and more!

---

# Outro

Ooo, there's a lot going on, so I'm thinking of doing maybe Astro next week since I've been meaning to try a demo of that. It finally got a new interesting release where it was re-written in Go, powered by Vite and it addedd MDX style components. I mean, I feel like they're begging me to try it now.

Alright, thanks for watching. Don't forget to follow me on LinkedIn, YouTube or your favorite Social Media platforms @planetoftheweb.

You can catch old episodes of the toolbox at raybo.org. I'll see you next week for some more front end and full stack tooling

---

##

[![TITLE](IMG)](URL)

DESCRIPTION

---

# TITLE

DESCRIPTION

<lite-youtube videoid="6YJfZE8UUXg"></lite-youtube>

<div class="article-side-image">

</div>

### URLs

- **[TITLE](LINK)**: TYPEDLINK
- **[TITLE](LINK)**: TYPEDLINK
- **[TITLE](LINK)**: TYPEDLINK

---

# PostFix

## Next Episode

[![IMG_URL](TITLE)](LINK)

DESCRIPTION

---

## Newsletter

[![IMG_URL](TITLE)](LINK)

- **Subscribe**: [Apply Newsletter](<[https://go.raybo.org/5Tbq](https://go.raybo.org/5Tbq)>)

DESCRIPTION
