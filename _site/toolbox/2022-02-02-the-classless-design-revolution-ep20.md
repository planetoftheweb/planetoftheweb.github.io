---
layout: post
title: "The Classless CSS Design Revolution - Ep 20"
summary: "In this episode of The Toolbox, I'll go over some of the best ways you can design websites with little to no styles. I'll also do a demo of my favorite of all the minimalist classless frameworks Pico.css and I'll let you decide if it's the right thing for your next site. The pace of the web is relentless...and that's why you need...The Toolbox."
hideDesc: true
video: IYN8c4YhqHc
hero: /images/toolbox/episode20.jpg
thumb: /images/toolbox/episode20_tn.jpg
category: toolbox
---

Hello everyone this is Ray Villalobos and I stream about front-end and full stack tools Wednesdays at 1pm Eastern • 10am Pacific. Follow me and subscribe on all the social media things for more content. If you want to watch any past episodes, make sure you take a look at my blog...raybo.org.

[![Simple.css](/images/toolbox/2022-02-02_10-55-30.png)](https://simplecss.org/)

Last week in the shorts, I covered a small framework called [Simple.css](https://simplecss.org/). It's a great way to build a super simple website using no css. The basic styles are nice, but clearly basic.

I know I'm onto something, when I post about a library and my friend Morton [drops me a bomb in the comments]. So I thought...I wonder if there's anything else out there like it. So I went down a rabbit hole and found lots of options and one called Pico.css that I thought was interesting enough for a demo.

Before we do that, let's go over some interesting things I found on the web this week.

# Shorts

## SVG Export

[![SVG Export](/images/shorts/2022-02-02_10-28-16.png)](https://go.raybo.org/7HG5)

I often need to get a logo or an SVG for a tutorial or even a project I'm working on, and it'd be nice to be able to resize and convert the graphics without having to download or photoshop them. This excellent Chrome Plugin will let you do just that and lots more.

## Type It

[![TypeIt](/images/shorts/2022-02-02_10-31-28.png)](https://www.typeitjs.com/)

Animations are a great way to get your visitor's attention, so I'm noticing a lot more sites that will type some text while you're scrolling. Type It is a paid tool ($20) that lets you animate text on the screen through a javascript library. Super flexible.

## Free Logo Maker

[![Free Logo Maker](/images/toolbox/2022-02-02_11-27-48.png)](https://go.raybo.org/7HN3)

This is a charming logo maker from the folks at NameCheap, the domain name service. It's an app that creates a logo for you based on font choices. Honestly, it's sort of cheesy, but I like that it lets you modify your choices after you go through the options.

Plus it gives you links to the fonts and icons. You could easily replace this with some icon fonts. I wouldn't use this professionally, but again. If you need to do a demo and don't want to spend design mocking up a logo...this is pretty cool.

# Minimalist CSS Frameworks

As I mentioned after looking for sites like Simple.css, I found plenty of sites that were trying to do similar things. Here's some of what I found.

## Markdown CSS

[![Markdown CSS](/images/toolbox/2022-02-02_11-19-36.png)](https://go.raybo.org/7HN7)

This is probably the simplest. It's not really a library or framework like the others, just a set of styles for those like me who enjoy writing markdown.

However, I think the splendor style here is one of the best of the whole list I put together. It feels like the styles here are trying to be for something you'd enjoy reading.

I think these styles would work well as a series of defaults or a great starter template. Perhaps with something like [md-block](https://md-block.verou.me), from Lea Verou, which lets you just insert markdown straight onto HTML via a simple tag. I covered that library in a previous episode.

## Water.css

[![Water.css](/images/toolbox/2022-02-02_11-00-19.png)](https://watercss.kognise.dev/)

The first one that caught my attention was this one called Water.css. It is much more basic than simple.css, I like that it has a light and dark theme already, plus it's super tiny at 3.27kb.

It doesn't use a grid, there's no navigation or components and is clearly very basic. one feature it does have is that there's a bookmarklet and it can help you replace styles on an existing site so that it becomes more readable.

This one, unlike Simple, is more of a CSS reset, but I think it's the type of reaset I wish browsers had by default. Think of how many styles it takes to normalize and then override form elements to make them look consistent and nice accross platforms.

The defaults were built in the mid 90's. It really feels like the defaults haven't progressed that much since then.

## AtriCSS

[![AtriCSS](/images/toolbox/2022-02-02_11-07-57.png)](https://go.raybo.org/7HHu)

This one looks pretty similar to water, but it does come with a navigation and multiple themes. I think the default midnight-green looks the best.

I like the rounded edges in the images and the way that attributes are used to create alternative styles. For example, the way buttons have a secondary or a disabled option. I know that disabled is a thing, but I'm not too sure about the secondary option.

It does have a container wrapper, and a way to make a button full width or have more of an inline look.

It even has a way to create a footer. It's more like it since I think it gets closer to offering what you'd need for a basic site.

## Bahunya

[![Bahunya](/images/toolbox/2022-02-02_11-13-57.png)
https://hakanalpay.com/bahunya/](https://go.raybo.org/7HIi)

I thought this one looked real nice, but it is a bit controversial because it uses a [hamburger menu](https://hakanalpay.com/bahunya/installation.html) by default. It's debatable that everyone knows what to do with that menu, but it's an option

This one does have the option of [customizing the color](https://hakanalpay.com/bahunya/customization.html) through the use of CSS variables. Some of the more advanced frameworks use this option, which I think is pretty slick.

One thing I don't like is the use of fonts here. It tries to use Century Schoolbook by default, but lets you override it. I prefer using the system defaults instead.

## MVP CSS

[![MVP CSS](/images/toolbox/2022-02-02_11-34-44.png)](https://go.raybo.org/7HLe)

This is one that is going a little bit beyond classless. It's a minimalist style sheet so it tends to have a few more options.

I actually like the light version of this one better than the dark version. If there's anything missing here is some documentation. You can look at the [QuickStart template](https://andybrewer.github.io/mvp/mvp.html) to see how things are done.

# Demo: Pico.CSS

[![Pico CSS](/images/toolbox/2022-02-02_11-39-17.png)](https://picocss.com/)

After going through this journey I landed on this one called Pico.css. I feel it's by far the best one with a ton of customization options, great looking defaults, excellent documentation and a lot of features I didn't see in other places.

# Conclusion

I'm curious as to what you think and when you think this sort of approach might be useful.

For me, I know that I can use this in demos. There's a lot of times I want to have a nice default override that will help me focus on a JavaScript lesson, not the styles.

I could see where if I wanted to print some Markdown, or just send someone to a basic GitHub Pages, this could be super useful. It's just another one of those things that would be great to keep in your Toolbox.

## Links

- [Simple CSS](https://simplecss.org)
- [SVG Export](https://go.raybo.org/7HG5)
- [Type It](https://go.raybo.org/7HG5)
- [Free Logo Maker](https://go.raybo.org/7HN3)
- [Markdown CSS](https://go.raybo.org/7HN7)
- [md-block](https://md-block.verou.me)
- [Water.css](https://watercss.kognise.dev/)
- [Atri CSS](https://go.raybo.org/7HHu)
- [Bahunya](https://go.raybo.org/7HIi)
- [MVP CSS](https://go.raybo.org/7HLe)
- [Pico CSS](https://picocss.com/)
