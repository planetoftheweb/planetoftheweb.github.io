---
layout: post.njk
title: "The Course Hustle"
summary: "This week, still recuperating, I walk you in detail through what it took to put together my latest Bootstrap 5 Essential Training course. I talk about adding a 15% challenge of something new in every project...which sometimes balloons to like 40%, but once you're committed, you can't stop...won't stop."
hero: /images/posts/thecoursehustle.png
thumb: /images/posts/thecoursehustle_tn.jpg
category: newsletter
---

Well, I'm still a bit ill this week, but definitely on the mend, so although I'm taking it easy, I'm still plugging along forward. It's giving me some time to reflect on what's going on. I thought I'd give you a bit of info about how I put together a course. Specifically the one I just finished before I got all sick.

The huge Bootstrap 5 update happened this week and I'm always surprised at how popular those simple posts are. Almost 140 reactions as of this writing. People really love that thing. Bootstrap definitely has its detractors, but it's like how in High School, I wouldn't admit to listening to Menudo, but hey, one of their band members was a neighbor.

What I really love about Bootstrap is how well it's built. It's not just that it makes things easier to use, but even the documentation and the attention to things like usability is pretty amazing.

## The 15% Solution

I've often mentioned that I try to learn something new with every course I build. I call it the 15% solution because I figure that I can easily add 15% of something new to a course and that it won't take me too long to do (that's the theory anyways). It is time that is spent beyond just figuring out what is new about the new version of what course. Here's a behind the scenes breakdown on what I did for this Bootstrap 5 course, so you can see it in action.

The hardest part of doing a course like an Essential Training course is simplifying the large quantity of options available on the docs. The documentation is just overkill with way too many examples that don't focus on the core of what you need to learn. So part of what I have to do is simplify things.

[![MindNode Mind Mapping Application](https://media-exp1.licdn.com/dms/image/C4E12AQFNSlayVxcLtg/article-inline_image-shrink_1500_2232/0/1620931382857?e=1629936000&v=beta&t=JU46Ic30Toi669mZOE-_2N5qREomkYzfH6EcLinKZdI)](https://mindnode.com/)

The way I approach this is by building a huge mind-map using this App called [MindNode](https://mindnode.com/). It lets me organize all of the features (the above is just a small sample of the huge amount of options). The thing is that the way you teach something isn't the same way you document something. I start out just typing in every single feature of the platform and then re-organize it to fit an outline that makes sense.

It's specially hard to teach things in the order you should learn them...assuming that you might use the course as a reference instead of sequentially. I can't assume that you've watched any other video or show you something that I haven't discussed earlier in the outline. Making this outline is a pretty big headache.

![Bootstrap 5 Slides](https://media-exp1.licdn.com/dms/image/C4E12AQGGuThiRpNoAw/article-inline_image-shrink_1500_2232/0/1620932004212?e=1629936000&v=beta&t=GQg27qBzk3IAKzu5LXt6q09p1aaseLUhc4eP0CS2YSk)

Once you get the outline done, then you can start mapping out the course. This involves a large amount of writing, but also building out the CodePens that explain the concepts in context. In the course, I've made over 100 CodePens with examples of how to use almost every feature.

The docs are great and have pretty great examples, but what they miss is how you would actually use that feature in a realistic sense. That's what I try to do with the codepens.

![](https://media-exp1.licdn.com/dms/image/C4E12AQE5aMvSz3GoVQ/article-inline_image-shrink_1500_2232/0/1620932098023?e=1629936000&v=beta&t=9vFGkebD195yN85hJ6GeMFHH_5ZDfFeLHYPoDg5y-Hs)

I write everything using MarkDown using a project called [RayVeal.js](https://rayveal.tech/#/). That lets me write my lessons and scripts (what I say) and converts that to [slides](http://raybo.org/slides_bootstrap5/#/) and a [website](http://raybo.org/slides_bootstrap5/#/). One of the disadvantages of our videos on LinkedIn Learning is that the links are something you have to manually type into a browser instead of being a clickable link (don't ask).

## RayVeal

RayVeal, of course is a clone of the great [Reveal.js](https://revealjs.com/) with some added functionality that does two things. First it let's me write all my slides in a folder as a series of markdown files. Second, it builds a website that people can use to have easier access to the links and the scripts I use to record. For that part, I use [Eleventy](https://www.11ty.dev/), one of the best static site generators out there.

[![Vite Tooling](https://media-exp1.licdn.com/dms/image/C4E12AQHRKKzkYWUBOg/article-inline_image-shrink_1500_2232/0/1620932501812?e=1629936000&v=beta&t=Q1GWljD2eH0DMyVCpfvBoviW8KbBzpiSlz89bkBfoys)](https://vitejs.dev/)

## Oh Yeah, the 15%

For this last version of the Bootstrap course, I decided to use Vite, a tooling platform that is fantastically awesome, but not exactly easy to combine with Eleventy.

This decision really slowed me down, but as always, if you're not pushing yourself a bit on everything you do, then you get stagnant and that's not good for this career. I spent a big chunk of prep time just getting things to work, re-writing things that didn't work and plugging along.

![Slide Example](https://media-exp1.licdn.com/dms/image/C4E12AQGYglB8Ww_T-g/article-inline_image-shrink_1500_2232/0/1620932810795?e=1629936000&v=beta&t=rvEW_6fXp1UwZ_4gW_j7lF2laI222aviqRQSMNtMSZc)

I ended up with a much nicer sidebar list because that was one of the plugins I couldn't get Eleventy to stop giving me all types of security notices about. Just look at that beauty.

Unfortunately, my 15% solution for learning something new with each project, sometimes turns into like 30% or 40%. But once you've committed, there's no going back. Which honestly is part of the approach. Sort of a sink or swim type of thing. I can always use an earlier version of the RayVeal platform (trust me, I thought about it for this project many times)

I always feel better about pushing my projects forward a bit every time. Some people think Hustle is a bad word these days, but it's just another word for putting in the work. It's something I enjoy. I can't wait to get back to it.
