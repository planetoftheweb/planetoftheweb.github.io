---
layout: post.njk
title: "Pico CSS, The Exquisitely Classless Web Design Framework"
summary: "CSS frameworks are awesome, but they can often be a pain to work with. The classes you have to write get complex quickly. The main concept behind Pico is to let you create as much content as possible with little or no classes."
hideDesc: true
hero: /images/posts/picocss.png
thumb: /images/posts/picocss_tn.jpg
video: JPzC_sbBfyY
category: posts
tags:
  - full stack development
  - css
  - css frameworks
---

Pico CSS is a framework that gives you a great looking sight with minimal or no classes. It feels like what writing HTML should be instead of the convoluted mess of classes, containers, etc.

## Compared to Bootstrap

Let me show you an example. Let's take a look at the code for building a bootstrap navigation.

The approach is simple, use native HTML tags whenever possible, while encouraging attributes that modify the look of the tag.

## Only 10 Classes

There is a completely classless version of the framework or a version that has only 11 classes in the framework.

- container
- container-fluid
- grid
- secondary
- contrast
- headings
- outline
- close
- modal-is-open
- modal-is-opening
- modal-is-closing

You can see what the navigation looks like right here. If you want something with a logo in it, you would just create an additional list item with an SVG in it. You can see that by inspecting the navigation for the website.

## Accordions

Another notoriously difficult component is the accordion. With Pico, all we have to do is create a details tag with some content in it. In Bootstrap, Accordions are one of the toughest things to do properly because you have to include all types of classes, IDs and even data attributes.

## Buttons

Elements like buttons are just as simple. The basic button looks great without any classes, and if you need a button to be an inline element, you just add a roll of button.

There's also a couple of classes that you can use to create a secondary and a contrast style, and then you can create an outline by using the Outline variant. Contrast that with how you do buttons in something like Telling CSS, which makes you add an insane amount of classes for even something as simple as a basic button.

## Layouts

npm start

If you add a figure as a wrapper container, you can make any content scroll horizontally. There is also a classless version of the framework, and in that case you use the header name and footer Tags and they'll act as a container to define a centered viewport.

For that, you're going to need to load a slightly different version of the framework. You can redefine some of the CSS variables, and that way you can customize any of the variables that come with the framework. There's also a SAS version of the library where you can customize the variables and create a customized version of Pico.
