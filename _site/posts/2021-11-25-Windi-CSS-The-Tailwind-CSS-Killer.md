---
layout: post.njk
title: "Windi CSS: Is it a Tailwind CSS Killer?"
summary: "When it was released, Tailwind CSS is of those frameworks that made everyone notice. Popularity, breeds competition and there's a contender that's been gaining ground called WindiCSS. Let's take a look at why you'd want to consider it, and then we'll build something with it."
hideDesc: true
video: 3PSu4tGWeq8
hero: /images/posts/windi.jpg
thumb: /images/posts/windi_tn.jpg
category: posts
---

Tailwind's utility based approach is [a bit controversial](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/), but it's perfect for today's component focused frameworks like React and Svelte. I've really grown to enjoy it.

The problem with Tailwind CSS 2 is that it has a ton of classes which will create large files unless you use the PurgeCSS option.

WindiCSS was created to solve some of these problems with a JIT compiler that is a central part of how it works. Newer versions of Tailwind introduced something called the JIT compiler to fix this, which will be a standard when version 3.0 comes out soon.

- Fully compatibile with Tailwind v2.0
- Zero dependencies: no PostCSS or Autoprefixer
- First class integration: Vite, Rollup and it also offer it's own CLI, if you want to roll your own build process.
- Condensed manual
- Additional Features

### Variant Groups

- Variant Groups[#](https://windicss.org/features/#variant-groups)

Group variants with parenthesis

```
<div class="bg-white dark:hover:(bg-gray-800 font-medium text-white)"/>
```

### Extended Breakpoint Control

Extended responsive breakpoint control gives you a way to declare better ranges of media queries.

```
<div class="p-1 md:p-2 <lg:p-3"></div>
```

### Reusable components

Quickly combine utilities to create reusable components using a windi.config file. The regular Tailwinds can do the same, but I think the configuration is a bit easier to follow in WindiCSS without the @apply keyword.

`windi.config.js`

```
export default {
  shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md'
  },
}
```

```
<div class="btn">More Info</div>
```

### RTL Support

Right to left support for languages that need it.

```
<div class="text-green-400 rtl:(text-red-400 text-right)"></div>
```

### Visual Analyzer

You can use a visual analyzer through npx, or by downloading the VSCode extension. It gives you some excellent information about your application.

### No JIT

The newest version of TailwindCSS has one advantage and that's the CDN JIT version, which lets you build a custom css file from a CDN. That makes it easier to do demos, but iit means that you're going to need a build process to try out Windi. There is, however a cool [online playground](https://windicss.org/play.html).

A visual analyzer tool for [Windi CSS](https://github.com/windicss/windicss). Browse your utility usages, get an overview of your design system, identify "bad practices", and more!

