---
layout: post.njk
title: "Should I bother learning Astro?"
summary: "I don't like learning new things as much as the next person, but when everyone starts screaming about the next new framework everyone 'loves', I begin to understand why too much curiosity can be a bad thing."
hero: /images/posts/learningastro.png
thumb: /images/posts/learningastro_tn.jpg
video: YYl5BPePwTM
category: posts
tags:
  - full stack development
  - javascript
  - frameworks
---

There's something about trying out new frameworks that I just don't like. Just like anyone else, I feel like what I'm using just fine at the moment. But I'm always curious when Ieveryone starts talking about the next cool thing.

I'm lucky to have a job where I get to try these things out, so here, so here's my take on Astro. I'll give you a rundown on what makes astro special as well as it's shortcomings. Finally,

## The heck is Astro?

At its core, Astro is a static site builder. In that way it's like Eleventy, or Gatsby or Next.js and others. There's a great page on their site that compares how Astro [stacks up against other frameworks](https://docs.astro.build/comparing-astro-vs-other-tools/). It's surprisingly thorough, so take a look at that if you're thinking of using it.

Every new framework has to have a new hook, something that makes it different and hopefully better than what came before. For astro that is a feature called hydration. It's the though that your scripts shouldn't load if the page isn't ready to use them yet. This can make for a much faster experience.

I appreciate performance just as much as the next person, but it's never been a reason for me to love something new. When I worked for Tribune Interactive, I spent about a month squeezing every kilobyte out of my CSS files, so I care…I really care…but it doesn't help when a single image is way larger than any CSS I ever wrote.

Still, the concept is solid and this framework is much more than just about hydration.

## It's a Baby

![Astro 2.1](/images/posts/2021-11-30_01-00-49.png)

As far as frameworks Go, Astro is still a baby at only version .21, it's practically a newborn, but don't let that fool you. It's a baby like when a Terminator is fully born with some impressive features.

However, keep that in mind if you want to do something with it today. In the last version, the [internals were re-written](https://astro.build/blog/astro-021-release/) to use Vite as the build engine (good choice) as well as Go for the compiler.

## Any Framework

Interesting enough, I'm noticing more and more frameworks that offer the option of using other frameworks, multiple frameworks or nothing at all. I'm not sure I'd ever need a ton of frameworks, but that's interesting and the type of open mindedness I like.

It's one of the things that makes me leery about using something like Next, Gatsby and others, I don't want to be married to a specific framework, so that's a plus. It's why I'm currently using Eleventy, it's dirt simple and doesn't try to do too much.

## Markdown Components

This is one of those features I didn't understand until I gave it a try. I love markdown, but I've never really been too much of a fan of MDX, which tries to combine the best of markdown with the worst of JSX (or the best if you're into it), Basically, I dislike the concept of taking something beautifully simple like Markdown with YAML and making people write embedded JavaScript.

## Routing

Astro generates routes that map to URLs when you publish a site. it assumes that you'll start your files in the source/pages directory and pretty much everything in there gets turned into a route.

Files are nicely organized into a series of folders mostly inside an `src` folder.

- `src/components` - small pieces of code in js, react, vue, whatever
- `src/layouts` - page templates and small layouts
- `src/pages` - pages, which can be either `.astro` or `.md` files
- `public` - Anything you want to just be copied into the root of the site.

## Single File Components

Files with an `.astro` extensions are single file components. They can be as simple as an html snippet.

One of the interesting features is that styles created with the `<style>` tag are scoped to these components, so that you don't have to worry about style names colliding with other styles. They are optimized with the build for you.

Another is the addition of dynamic components with the use of a frontmatter script. The frontmatter is what normally goes inside two codefences `---` that you often see containing some YAML on other static site builders.
