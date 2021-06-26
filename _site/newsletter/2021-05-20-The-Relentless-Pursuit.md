---
layout: post.njk
title: "The Relentless Pursuit"
summary: "Feeling better, I go over how my failure at photography is a perfect example of how I approach...well everything. I have a new video and I talk about the ways I'm editing, recording and writing differently these days."
hero: /images/posts/relentlesspursuit.png
thumb: /images/posts/relentlesspursuit_tn.jpg
tags:
  - Apply Newsletter
---

Years ago I took a picture of my daughter. It was just about the worst picture ever taken. Minutes later, my wife took a picture a few feet away from where I had taken the bad picture and it was amazing! The difference was the light was better where she took her picture, but I didn't know that at the time.

<div class="article-side-image">

![One of my photos from my photography days](https://media-exp1.licdn.com/dms/image/C4E12AQFsjrxft3bUqg/article-inline_image-shrink_1500_2232/0/1621558172012?e=1629331200&v=beta&t=XZaMvaCOooyHHL-R1IIVBdOoRIixOl9xIM-sgF5CqdY)

</div>

That started me down a rabbit hole of learning about light, f-stops, shutter speeds and more. I really enjoyed photography for a while because it's something that can be both technical and creative, but at some point. I sort of figured out the technical bits and it wasn't as exciting as before.

My two huge influences was this book called Light, Science and Magic and Strobist...just in case you want to learn yourself.

## Just Like The Web

The thing about the web is that it is always changing. Although React has really been the winner in the Full Stack development wars; Languages are both still actively adding features. I just read about a small CSS feature the other day that is poised to make big changes called Container Queries. There's a good article on CSS Tricks you can read here.

<div class="article-side-image">

<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6801300947470467072" height="1034" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

</div>

It allows you to base an element's size on the size of its container. It's one of those simple things that will prove really useful. Some people (me included), find that constant change, both exhilarating and utterly frustrating. Unlike photography, there is something new and very technical that I can learn every week.

However, I'm stressed that even though I'm paid to be constantly learning, it's too much. I can't keep up. But there's not much I can do there. It's part of the job.

## I'm...partially...back

After a few weeks not publishing a new video, I made a new Apply video about adding elements to the DOM.

As you know, I'm doing these to figure out how Live Action works or should work with training videos. It's a fun distraction for me. I figure I'd share some of the things I've been testing in this video.

## Cheesy Thumbnails

I'm trying out a new thumbnail format. I hate the thumbnails with the people in them...specially when they make the real weird faces, but well, I guess it's worth a try. If this thing blows up, I don't know if I can make a good duck face or the fake surprise face. I'm secretly hoping it doesn't do incredibly well, now that I mention that.

I don't like seeing myself on camera, which makes it weird for me to add more live action. But I think there's something about having a person explaining things on screen. Research backs this up, but it's a whole different way of writing than what I'm used to.

![Editing Video](https://media-exp1.licdn.com/dms/image/C4E12AQHAXz59n_dDVA/article-inline_image-shrink_1500_2232/0/1621560139954?e=1629331200&v=beta&t=3e-5Nr6atQyyWpj_5EZjfbhsGliW5dahApija4gU0Ck)

In the thumbnail I have an overlay of some code. To do that, I'm using RayVeal to generate the code and created a template that uses a green background. It makes it easier to composite that into the video. I just have to remember to stand to one side. It's a good way of getting both the face and the code.

Since it's based on Reval.js, it's really easy to create code like this that automatically color codes and highlights as I'm advancing. You can easily do step by step highlights with a cool format.

```html
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="1" aria-label="Slide 2"></button>
</div>
```

Notice the stuff in the [] square brackets. It's how you tell reveal.js which line numbers you want to highlight automatically. It takes care of the color coding and highlighting for you. If you ever have to do a code demo, this is awesome.

## Automating Typing

I make it a habit to type in every line of code in my courses. I don't like videos that paste or just show you a bunch of code and then sort of talk about what was done. However, it's crazy hard to do and often requires tons of do-overs.

![Keyboard Maestro](https://media-exp1.licdn.com/dms/image/C4D12AQGHgnScIIT5jg/article-inline_image-shrink_1000_1488/0/1621565626729?e=1629331200&v=beta&t=Pm_B0hXaowi0pO7qBA0z8LbXmbhFTOJLOsMw1v0cpnA)

I've been trying out this new App called [Keyboard Maestro](https://www.keyboardmaestro.com/main/). It's a macro app that will record everything you do and play it back. I tried lots of different things here, but what worked well is to have it retype short snippets. It lets you add different types of delays to the typing so it looks more natural.

Our typing is always sped up by editors, so this isn't a big deal, but it does look more natural. Spoiler alert: If you pay attention, you'll notice that I even added some typing sounds. For a bit of added `realism`.

## Swinging the Code

In the past, I've used CodePen to record the coding, but it's really messy. The reloading causes things to jump around and it doesn't have one feature that is a must if you're typing all your code for a live demo...Git.

![Kaleidoscope](https://media-exp1.licdn.com/dms/image/C4D12AQG3s0vlUPY1hw/article-inline_image-shrink_1500_2232/0/1621566560013?e=1629331200&v=beta&t=swnDhuD02mEwgTyAZwWe1E8HDpmIJs70wwyTK7RrMyk)

I use Git so that when I type the code, I can see the difference between what I am typing and what I was supposed to have typed. When I save, I use an app called [Kaleidoscope](https://kaleidoscope.app/) that lets me see the difference between the two.

![Code Swing](https://media-exp1.licdn.com/dms/image/C4D12AQGB26mxmrLUUw/article-inline_image-shrink_1500_2232/0/1621566445126?e=1629331200&v=beta&t=QS6hFqdjuPGVWLSIFFPgzRvQDWX_5AuDuMpMFMTU-gE)

So, I've switched to [CodeSwing](https://marketplace.visualstudio.com/items?itemName=codespaces-Contrib.codeswing). It's a Visual Studio Code plugin that is almost exactly like CodePen, but it's just a folder, so I can add my usual plugins, track it with Git and export it to a CodePen if I want to. So far, it's working better.

## The New New Process

So now, I'm writing the code, then I write a script that focuses on just the explanation (the part that I'm performing on screen). I edit the live action and then I copy and paste bits of code into Keyboard Maestro and record that. Drag that into the video timeline and add the code bit by bit.

## Are you Still Here?

That's probably more than you ever wanted to know about why and how I'm going about doing these videos. It's going to be an eternal work in progress, but I'm really having fun learning. A lot of these things are great for online demos, so maybe you'll find it useful.

Next week I'm on vacation with my wife for a rare outdoorsy trip (Gosh I hope there's internet!!!). I'm going out on a limb there too

Once I'm back to 100%, I'll be doing another 'The Launch' episode and I'll try to get back to a regular video posting schedule. If there's anything you want to know about, let me know.
