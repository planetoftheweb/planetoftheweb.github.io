---
layout: post.njk
title: "Supreme Assistance"
summary: "This week, I talk about the large amount of code people copy from Stack Overflow and a recent ruling from the US Supreme court that makes it a-ok."
hero: /images/posts/supreme-assistance.svg
thumb: /images/posts/supreme-assistance_tn.jpg
tags:
  - Apply Newsletter
---

I'm never as busy as when I'm trying to finish a course. Specially something like the Bootstrap course I'm going through. It's by far, the largest topic I cover. It got me thinking about how much of the work we do relies on the help we give one another.

I didn't invent [Bootstrap](https://getbootstrap.com/). It was created by a team of people from Twitter who later released it as an Open Source project. It's the most popular front-end toolkit, but it's also a great expression of love from a community that helps each other.

![Stack Overflow](https://media-exp1.licdn.com/dms/image/C4E12AQFwKOqDxrEeIA/article-inline_image-shrink_1500_2232/0/1618931604994?e=1629936000&v=beta&t=AuQgLUflOF3Hy4_j1myawzSfmbcdtq_oewdY5ecSMMY)

## Nobody Memorizes Solutions

This week, I read about the amount of code that people copy from Stack Overflow. They apparently added some code to track [how many times](https://stackoverflow.blog/2021/04/19/how-often-do-people-actually-copy-and-paste-from-stack-overflow-now-we-know/) people used command-C while looking at one of their pages (sneaky sneak Stack Overflow).

> One out of every four users who visits a Stack Overflow question copies something within five minutes of hitting the page

[Stack Overflow](https://stackoverflow.com/questions) is where developers go for answers. It's more useful than using a search engine, which is my second go to after the documentation.

<div class="article-side-image">

![Developer Working on a Terminal on the phone](https://media-exp1.licdn.com/dms/image/C4E12AQE6O8ApWsnefw/article-inline_image-shrink_1500_2232/0/1618931372285?e=1629936000&v=beta&t=9YXpIk87MtgJhQuG_LoTO4khqs51J3Y5HiKY8EHDTEo)

</div>

If you're a new developer like many of us who suffer from Imposter Syndrome, the first thing you should learn is that everyone copies code. Don't believe me? The US Supreme Court [sided with Google](https://www.cnet.com/news/supreme-court-sides-with-google-over-oracle-in-case-of-android-code/) over a dispute with Android over copying its code.

Google copied about 11,500 lines of Java code from Sun Microsystems in creating its popular Android OS.
Once again...thanks Google for making it safe to copy all the code I need. Nice search engine too.

## The Problem with Documentation

Here's a beauty I had to look up in Stack Overflow this week.

```js
var toastElList = [].slice.call(document.querySelectorAll(".toast"));
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option);
});
```

This is from the documentation on Bootstrap toasts. Which could be one of the more complicated to implement components in Bootstrap.

<div class="article-side-image">

![The End of the Internet Cartoon](https://media-exp1.licdn.com/dms/image/C4E12AQGKcMbIU8NGSg/article-inline_image-shrink_1000_1488/0/1618933345205?e=1629936000&v=beta&t=QOMMQLokIJeZIhSnrRVKgVFVGde-2p4AWUTw-XDZxB8)

</div>

`[].slice.call`?!?! What the...even the heck does that mean? IDK. [Stack Overflow to the rescue](https://stackoverflow.com/questions/2125714/explanation-of-slice-call-in-javascript). Well, I'd explain it to you if I understood it well enough myself. Honestly, I think the link does a better job although that sounds like a great future episode of Apply...once I finish this course and figure it out myself.

The problem with some documentation is that Developers love to use examples that are harder to understand if they're cool. They like to show off, but it makes it harder for people to learn.

That example didn't even work for what I needed to do, which was click on a button to turn on the toast notification. This is the code I needed.

```js
document.querySelector("#basicToastBtn").onclick = function () {
  new bootstrap.Toast(document.querySelector("#basicToast")).show();
};
```

You can see it in action on this codepen I made for my upcoming course. Simpler? IDK, but at least it works!

<p class="codepen" data-height="600" data-theme-id="27192" data-default-tab="html,result" data-user="planetoftheweb" data-slug-hash="vYgVBGb" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Bootstrap 5 - Basic Toasts">
  <span>See the Pen <a href="https://codepen.io/planetoftheweb/pen/vYgVBGb">
  Bootstrap 5 - Basic Toasts</a> by Ray Villalobos (<a href="https://codepen.io/planetoftheweb">@planetoftheweb</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## It's not your fault

I say all that to let you know that it's not you being dumb. Even good documentation suffers from the problem of developers forgetting not everyone understands the latest, greatest way of doing something.

Don't worry, Google (I feel contractually obligated to say Bing here) and Stack Overflow all you want. You're not dumb, sometimes the code samples are. The web's got your back and you've got the US Supreme Court's permission to copy that code with confidence.

Now be bold the rest of your week
