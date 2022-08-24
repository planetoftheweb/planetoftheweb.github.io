---
layout: post
title: "DevOps Tips for Impatient Developers - Ep 31"
summary: "In this special episode of The Toolbox, I talk to Michael Jenkins about something every full stack developer should master...DevOps, plus the importance of volunteering, the magic of the cloud and wether GitHub Actions can deliver a professional CI/CD pipeline. The Pace of the web is relentless...and that's why you need, The Toolbox."
hideDesc: true
video: -Azr_5hNruQ
hero: /images/toolbox/episode31.jpg
thumb: /images/toolbox/episode31_tn.jpg 
category: toolbox
type: post
---

Hello everyone this is Ray Villalobos and I stream about front-end and full stack tools Wednesdays at 1pm Eastern • 10am Pacific. Follow me and subscribe on LinkedIn and YouTube for more content. If you want to watch any past episodes, make sure you take a look at my blog raybo.org.

You can find an article for Today's episode and all the links for the show.

## Turn on the Bell Icon
Also, make sure you check out my [my profile](https://www.linkedin.com/in/planetoftheweb/) and click on the bell icon. You can't see it on your own profile, but if you follow me, it's where the bell icon is. I'll go to [michael's profile](https://www.linkedin.com/in/michaelpjenkins/) to show you.
[]()
## Industry News

Lets quickly review some of the latest industry news:

### Git Merge 2022

[Git Merge 2022](https://github.blog/2022-08-23-the-full-lineup-for-git-merge-2022-revealed/) If you can't wait for the big GitHub Universe conference in November, you might want to check out this smaller conference in Chicago September 14-15. The workshops look really good with some beginner as well as a monorepo spring cleaning talk. Almost a third of the speakers work at GitHub.


### GitHub Pages, now with actions
[GitHub Pages](https://github.blog/2022-08-10-github-pages-now-uses-actions-by-default/) A small, but important change with GitHub pages is that they now use GitHub Actions by default. So this is now under your [settings under pages](https://github.com/planetoftheweb/slides_jsfunctions/settings/pages)

You now have the classic option that let you use either the docs folder from a specific branch, but now when you choose GitHub actions, it will let you use pre-built actions for Jekyll or server a static HTML page. The interesting bit is that you can create your workflow. So far, I've been using this awesome [action from James Ives](https://github.com/JamesIves/github-pages-deploy-action) that publishes your build process to a separate branch and then lets you deploy that branch to GitHub Pages.

If you've ever watched any of my courses, you know that I use my own variant of Reveal.js called RayVealjs to serve [markdown slides](https://raybo.org/slides_jsfunctions). I've been really working hard on an update that uses this process to make the whole thing easier to build, so look for a big update soon based on this actions based deploy method.

They also provide a set of workflows for [popular build tools](https://github.com/actions/starter-workflows/tree/main/pages), although I don't see one for vite yet.

## Vite

When Vite first came out, I was already looking for a better tooling solution for building sites. I went through a process of analysing all the existing options and noticed it was the new thing. As soon as I tried it, I went right to it, so it's great that it's got a new version.

If you haven't used it before, what I love about it is how much you get out of the box and how intuitive it is. It has all the modern features like Hot Module Reloading, which makes rebuids are super fast, even when you reconfigure something while in development. Support for Sass, JSX, TypeScript. 

It's made by the folks who gave us Vue.js, which I thought always had the best CLI experience. I recently updated my slides app to version 3 and I didn't have to change anything. If you take a peek at [the changelog](https://vitejs.dev/) for version 3, you'll notice some minor things like port changes, dropping support for older versions of node.

I really love their [meta.glob](https://vitejs.dev/blog/announcing-vite3.html) improvements. This allows you to import whole folders of content and it's now way more flexible allowing you to make an array of imports at once. If you want to read about their new features, check out their [blog post](https://vitejs.dev/blog/announcing-vite3.html).

### Unplugin Icons

Lately, I've been using the [Bootstrap Icon library](https://icons.getbootstrap.com/) for most of my icon needs, but even with more than 1600 icons, often I can't find what I need, so the concept of this library is to give you access to more than 100 different icon libraries and easily call in a single icon into a module. It works with regular JS, Vite and all the frameworks the cool kids are using. You can even load up your own custom icons. That seems like a great idea.

## Patterns Book

Finally, Addy Osmani has had this book on [JavaScript patterns](https://www.patterns.dev/) for quite a while and now he's updated it with Lydia Hallie with tons of examples, code sandboxes and animations. If you want to learn some beginner to advanced JavaScript patterns you should totally check this out.


## Toolbox Talks

So, I've been talking to a lot industry professionals recently on something I'm calling [Toolbox Talks](https://www.youtube.com/playlist?list=PL1ezw_kTxXOm-x2kWZBRI5MMMxNDGHM4v) so far, I've interviewed Carlos Solis, Ronnie Sheer and Christina Truong.

This week, I'm continuing that talking to Michael Jenkins, a super talented technologist who started out with as a serious electronics engineer, before he discovered the power of DevOps.

Let's Listen In

## Q&A

## Goodbye
I have to go right into course production next, so I might be gone for a couple of weeks, then I other interviews in the works. Let me know what you want me to cover in the comments


## Links
- [Git Merge](https://github.blog/2022-08-23-the-full-lineup-for-git-merge-2022-revealed/)
- [GitHub Pages](https://github.com/planetoftheweb/slides_jsfunctions/settings/pages)
- [Pages Deploy Action](https://github.com/JamesIves/github-pages-deploy-action)
- [Markdown Slides Project](https://raybo.org/slides_jsfunctions)
- [Starter GitHub Action Workflows](https://github.com/actions/starter-workflows)
- [Vite 3](https://vitejs.dev/)
- [Vite Improvements](https://vitejs.dev/blog/announcing-vite3.html)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [JavaScript Patterns](https://www.patterns.dev/)
- [Toolbox Talks](https://www.youtube.com/playlist?list=PL1ezw_kTxXOm-x2kWZBRI5MMMxNDGHM4v)
- [DevOps Tips](https://go.raybo.org/9s02)
- [Advanced Actions](https://go.raybo.org/9s1-)
- [Nailing Your DevOps Interview](https://go.raybo.org/9s2V)
- [Michael's Profile](https://www.linkedin.com/in/michaelpjenkins/)
- [Michael's Courses on LinkedIn](https://go.raybo.org/9s2V)
- [Michael on Twitter](https://twitter.com/managedkaos)
- [Ray's Blog](https://raybo.org)
- [Ray on LinkedIn](https://www.linkedin.com/in/planetoftheweb)