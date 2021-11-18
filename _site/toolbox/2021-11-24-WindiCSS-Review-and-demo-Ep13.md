---
layout: post
title: "TITLE"
summary: "In this episode of the toolbox, ...so let's get started"
video: VIDEOID
hero: /images/toolbox/IMG.jpg
thumb: /images/toolbox/IMG_tn.jpg
category: toolbox
---

Hello everyone this is Ray Villalobos and I stream about front-end and full stack tools Wednesdays at 1pm Eastern time 10am Pacific. So follow me and subscribe on all the social media things for more content. If you want to watch any past episodes, make sure you take a look at my blog...raybo.org.

---

# Shorts

Let's get started with some shorts. There are new tools and articles that you should know about.

## MiniMason.js

A lightweight dependency Free library for building masonry layouts. https://spope.github.io/MiniMasonry.js/

## Simple.css
- [Simple CSS](https://simplecss.org/)
- spin something up very quick
-  A good looking `sans-serif` local font stack.
-  Typographic best practices.
-  Automagic flipping to dark mode.
-  Fully responsive.
-  Sensible defaults that format standard HTML elements.
-  Super lightweight; **less than 4 KB in size**.

---


## Rust
- [Rust](https://www.rust-lang.org/)

Deno
esbuild
Rome

most loved programming language [six](https://insights.stackoverflow.com/survey/2016#technology-most-loved-dreaded-and-wanted)

used at [Facebook](https://engineering.fb.com/2021/04/29/developer-tools/rust/), [Apple](https://twitter.com/oskargroth/status/1301502690409709568), [Amazon](https://aws.amazon.com/blogs/opensource/why-aws-loves-rust-and-how-wed-like-to-help/), [Microsoft](https://twitter.com/ryan_levick/status/1171830191804551168), and [Google](https://security.googleblog.com/2021/04/rust-in-android-platform.html)

https://stork-search.net/


## Iles
- [Iles](https://iles-docs.netlify.app/guide/introduction

From this article (https://css-tricks.com/does-the-next-generation-of-static-site-generators-make-building-sites-better/)
- Ship zero JavaScript by default. Interactive bits are opt-in — that’s what the islands metaphor is all about. Astro and îles do it at the per-component level and [SvelteKit](https://kit.svelte.dev/) prefers it at the [page level](https://kit.svelte.dev/docs#ssr-and-javascript-prerender).
-   Additional fanciness around controls for when hydration happens, like “when the browser is idle,” or “when the component is visible.”
-   Use a fast build tool, like [Vite](https://vitejs.dev/) which is Go-based [esbuild](https://esbuild.github.io/) under the hood. Or Rust-based [swc](https://swc.rs/) in the case of [Next 12](https://nextjs.org/blog/next-12).
-   Support multiple JavaScript frameworks for componentry. Astro and îles do this out of the box, and another example is how [Slinkity](https://slinkity.dev/) brings that to [Eleventy](https://www.11ty.dev/).
-   File-system based routing.
-   Assumption that Markdown is used for content.


# Main Event

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


---
# Outro

Next week, I'm 

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

-  **Subscribe**: [Apply Newsletter](<[https://go.raybo.org/5Tbq](https://go.raybo.org/5Tbq)>)

DESCRIPTION
