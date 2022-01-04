---
layout: post
title: "Front End Tooling with Vite-Ep09"
summary: "In this episode of the toolbox, I'll show you how to work with my favorite tooling platform called Vite. I've got a few surprises in the shorts segment and tons of other things to discuss...so let's get started"
hideDesc: true
video: OGymLdZ3svc
hero: /images/toolbox/EP09-Vite.png
thumb: /images/toolbox/EP09-Vite_tn.jpg
category: toolbox
---

# Toolbox Shorts

Let's get started with some shorts. There are new tools and articles that you should know about.

---

## OhMySh

[![Oh My Sh](http://pixelprowess.com/i/2021-10-20_23-04-34.png)](https://ohmyz.sh/)

Oh My Sh is for people who love to use the terminal and want some advanced features like auto-complete, search and others. My favorite feature is by far autocomplete, but you can also do a web search and lots of other stuff directly from the terminal.

### Fave Plugins

- [Auto Suggestions](https://github.com/zsh-users/zsh-autosuggestions)
- [Web Search](https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/web-search)

## QuickTip: Terminal History

If you're like me, you're probably used to hitting the up arrow in your terminal until you find a previous command…That can take a long time and it's pretty inefficient.

There's a much better way to do this, and that's with the history command.

Simply type in `history` and hit `enter`.

You'll get a list of all the previous commands you can run. Notice there's a number next to them. `!NUMBER`

You can type in an exclamation mark and then the number of the command and then hit return again. There's also a couple of other shortcuts you can use.

`!STRING` gets you the most recent command with the string you typed in.

To clear the history type in a `history -c` command

Of course, like everything else in linux, there's a pretty rich set of [additional options](https://ss64.com/bash/history.html).

---

# Vite

A lot of modern web development requires a build process for handling processing modules from Javascript, react, sass or supporting new features and there's a lot of tools for doing this, so, so what's the difference?

Vite is opinionated, so you give up a bit of control, but it gets you going quicker. I'm going to scaffold a new project with Vite.

By the way, you want to make sure that you have NodeJS 12 or greater to get it to work. Iit scaffolds the project for you, places it where you specify and it shows you the commands you need to run this project.

Vite uses an index.html file as the entry point of our application. It resolves references to scripts, even inline scripts with a type of module as well as css as code. There's no need for special placeholders and it also supports multiple html pages as entry points.

Vite also gives you a lot of advanced CSS features. For example, you can use PostCSS, import statements, it takes care of prefixing things if necessary and rebases all links inside the CSS for you. You can even use CSS modules and treat your CSS like a javascript object. It has built-in support for Sass, less and stylus.

Vite uses something called HRM. Hot Module Reloading means that…to speed up development, modules are updated individually without having to reload other modules. That makes Vite extremely fast.

### URLs

- [Vite Website](https://vitejs.dev)
- **[Finished Code](https://go.raybo.org/5_fJ)**: go.raybo.org/5_fJ

---

# PostFix

## Newsletter

I’m back writing articles for the [newsletter](<[https://go.raybo.org/5Tbq](https://go.raybo.org/5Tbq)>). Last week, I did a n article on an infamous Panamanian fighter, Roberto Duran, but I usually post these about every week

## Site

And of course, for all the latest on what I’m up to, visit my blog, [raybo.org](http://raybo.org), where you can find all of my latest work including courses, videos and the shorts. So if you remember you saw a cool tool, there’s a search at the top of the site where you can quickly get to one of the older shorts, or just click on the [shorts link](<[https://raybo.org/shorts/0/](https://raybo.org/shorts/0/)>).
