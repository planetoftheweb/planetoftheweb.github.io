---
layout: post.njk
title: "The Unmounted Horse"
summary: "There are times when it's best to abandon something you're doing. Perhaps it's a habit, or a framework, something that in the long term isn't going to pay off. When's the right time to do it? lets talk about it."
hero: /images/newsletter/unmount.png
thumb: /images/newsletter/unmount_tn.png
category: newsletter
---

It's natural for people to hold on to things that are working well for them. But sometimes, it's time to let go.

> When the Horse is Dead...It's time to Dismount

Some would argue that perhaps you've waited too long and at some point, you should have put that horse out to pasture. A lot of us are riding dead horses on the web, and we're perfectly fine with that.

The market, however, has other ideas and is constantly shifting to new things; This isn't always bad. I consider myself a blue collar coder. I don't mind people using older technology if it works fine for them.

Go ahead and use jQuery, Sass and FlexBox. Who cares if the cool kids are using Grid, React and Custom Properties. I'm not trying to make you change.

I'm just saying that sometimes there's tons of value to change.

## The Horse is Alive and Well

I have plenty projects running on some older frameworks, so there are definitely times when it's perfectly fine to stay with what you have. You have to be careful that software doesn't present security issues, but basically, if it ain't broke, don't fix it.

<div class="article-side-image">

![Mojo](/images/newsletter/unicorndabbing.png)

</div>

A Good example of when the horse isn't dead is Syntactically Awesome Stylesheets (Sass). It has been around for more than 15 years. That's like 200 solar cycles in web years.

It has industry wide adoption compared to other libraries. Some people say that you can do the same thing with CSS, but that's not true.

If you add PostCSS with a few plugins, you can do some of the same things, plus if you consider Custom Properties (CSS Variables) being similar to Sass Variables, but you'd have to squint your eyes. Custom properties don't process, so I'll quote Mr. Scott.

> Aye. And if my grandmother had wheels, she'd be a wagon.

It's wishful thinking to say that if you hook up 12 things together that it would equal something else. Sass works fine as is today. I'm surprised that CSS hasn't caught up to Sass, I'm not sure it will ever be able to.

## When To UnMount

But there are times when it makes sense to change things. It's not that things are broken, but the good of the many outweigh the good of the few (me and my Star Trek references). Basically changing has a lot of tangible benefits.

jQuery is a good example of something you should change. It did a marvelous job of doing a few things. First, the magical selector engine. To this day, it does a lot of things that JS DOM access doesn't do well.

<div class="article-side-image">

![Mojo](/images/newsletter/horserider.png)

</div>


But more and more frameworks and libraries make accessing the DOM less efficient. This started with React's virtual DOM and is obvious on tools like Svelte and Solid. Although the latter don't use a virtual DOM, they make manual DOM access unnecessary.

One other reason I used jQuery for was AJAX access. JavaScript's [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) offers superior asynchronous access. What you can do with Fetch is easier and more efficient than what jQuery could do.

Now, I'm fine with you using jQuery for legacy content, but for newer stuff, it's time to unMount.

If you want something that feels like React and is a ton of fun take a look at [AlpineJS](https://www.youtube.com/watch?v=AyxAwnc6zN8&list=PL1ezw_kTxXOl2kuQTYLpBq5uoK7R_DcKr&index=2&t=129s). It's great for progressive projects where you don't want to use a complex build process. Plus, it provides an amazing templating language.


## What Have I Been Doing?

Since I haven't published since January, you may be wondering what I've been doing. 


### Courses Published

<div class="ratio ratio-16x9">

<iframe src="https://www.linkedin.com/video/embed/live/urn:li:ugcPost:6859285219204227072" height="284" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>

<iframe width="640" height="360" src="https://www.linkedin.com/learning/embed/tailwind-css-3-essential-training/why-utility-first-frameworks-matter?autoplay=false&claim=AQGS5g5U_glnnwAAAYDR26N2OFfAuVy8vDzXDm5kra8TrOoDTMAcjYY8j9yveVvGdcSPT8GvlxfCD9570eYbnbSdsoYkdpHuwWTYtQO2AQkUWP3ZPk3H7Pn9wQoDSjCXUtCsasnc1YhIs8__0tcJglNDVnXO0wRuKBXy0sjaMTtz5lFLjruXAcL4wkd5jsFbpTeUKk7QEa9UQPIr0W6qpLiQZLBgszHY79dvR53kkW7tC2V-wtZ6StUOMDLLbKOvlNyCaUhGoEP99Bt9LauiD6mwxcEHexTlw3s77QTpKgrtBPQDZWLsmPmXahfQM3YJprmKD1vjo26pRAHTZdkbAKfMxIwl_QE_diL4N4E-Tm-b8ImT772xL5KRIJ_Mqz1QwbBhxqYYBZ7IMn7sWZiv1bfKzYWtK6ZZJf1rMDyeCwtOr0NLu01KTNZIHm1ZRh6yVMjf1lDPw-GToFM3r7siNIYyxyU1R3LZeD9jjdGrbLD45Pp3-4VBk5iWLPpcb28laxZFefAmNaYKd02k2UmLTzh3Ra52hom-8S5rVq49gN7jD2ezYEuXPv_SdF9PMvI0F4GqJr06rD565I3wPyYYcJEGFGinqqx1RYxyQtLO3afHjNDkavuhfN95hL_G3B8fl3HgBFb62Lx60xOWGkqBcnM-9dJe1ba8ovP5Tl3gcCF0ueZW8iJG0VThBdQoxl-e9os_2krS5GgGpqmBAy1f0H98vnS7lSFvpOe5IkJ0gcDbcJl1X5n4k8tKH7WtnzXi1i-hxatwhHpCYiNyeBHpuPI984Mud9cpkKGgNEdUCn0XX4pdmTxTLntLlZtliLt17Q1BAwLh2ECDEqJR2gk5-csU1nDYTl_jO_T-DJqV1ILrSGsIvpOD0INOuCrKCOUL6A5OnYhZpoif0cfjrtig8tLZI7KMZa5bX0YAOPwU9fxJMPo7GmboOLAmJCoUCIXfrPjd30IsJHlCtpc4jU1vDPgDEvR5lF0c9zTvEacyckIbEcGniO4aLnjFA6p92J7UGF0B-vTvTrKqYP1Xr_JOCPHqVEA5Poe9DC6s5oc-RgtGX5wbGZZ6uhnx3qCA2kiuNS8x59ReB2spoBfjFDKEBGkZ-J77TNgZ5haMdx6U9-EisxVm7VP-DaeesDk5T3Q7_w4Nx1RUKNNhs31-3cpj4GbqeE9OOta390-yfxgk4JHvLO4&lipi=urn%3Ali%3Apage%3Ad_learning_content%3BYS63E4yOSQClb39PSVAoNA%3D%3D&licu" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe>

</div>
		

Well, since then, I've published five courses, including [Tailwind CSS 3 Essential Training](https://www.linkedin.com/learning/tailwind-css-3-essential-training?u=104), [Tech Trends](https://www.linkedin.com/learning/tech-trends?u=104), [Sass Essential Training](https://www.linkedin.com/learning/sass-essential-training-15630917?u=104) and [Publishing Apps and Sites with GitHub](https://www.linkedin.com/learning/publishing-apps-and-sites-with-github?u=104).

## The Toolbox

<div class="ratio ratio-16x9">

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL1ezw_kTxXOkc1vNC9fbHYyVv69nqzCeN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

The Toolbox has also been expanding having covered some of the hottest new Frameworks and Libraries including [SolidJS](https://www.youtube.com/watch?v=WSvmEG7HPyE&list=PL1ezw_kTxXOl2kuQTYLpBq5uoK7R_DcKr&index=1&t=54s), [AlpineJS](https://www.youtube.com/watch?v=AyxAwnc6zN8&list=PL1ezw_kTxXOl2kuQTYLpBq5uoK7R_DcKr&index=2&t=129s), [AstroJS](https://www.youtube.com/watch?v=OJU99zHr-mI&list=PL1ezw_kTxXOl2kuQTYLpBq5uoK7R_DcKr&index=4&t=1s), [Svelte](https://www.youtube.com/watch?v=yy_4uJMq3Zs&list=PL1ezw_kTxXOl2kuQTYLpBq5uoK7R_DcKr&index=5&t=179s), [NextJS](https://www.youtube.com/watch?v=DPpQL4rCLeM&list=PL1ezw_kTxXOl2kuQTYLpBq5uoK7R_DcKr&index=6&t=3s), [Remix](https://www.youtube.com/watch?v=Tr_hqWta1Yk&list=PL1ezw_kTxXOl2kuQTYLpBq5uoK7R_DcKr&index=7&t=170s) and [Open Props](https://www.youtube.com/watch?v=tKMNFQE64fA&list=PL1ezw_kTxXOl2kuQTYLpBq5uoK7R_DcKr&index=12) to name a few.