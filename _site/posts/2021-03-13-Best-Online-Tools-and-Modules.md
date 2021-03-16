---
layout: post
title: 'Best online Tools, Extensions and Modules to Get Started on your Next Web Development Project'
summary: "You've got a new project to build, but how to begin. Ohhh the many ways to go. Should I use React, Svelte or Vue.js. Bootstrap or Tailwind, which Bundler should I use. Heres some great ways to get going quickly."
hero: /images/posts/faster-1080p-thumbnail.jpg
thumb: /images/posts/fasterprojects_tn.jpg
vide: UQkhm_fQnOU

tags:
  - tutorial
  - video
  - web development
  - tooling
---

## Emmet

[![Emmet Screenshot](https://pixelprowess.com/i/2021-03-13_14-04-11.png)](https://www.emmet.io/)


First, let me go with Some of the easiest. If you use Visual Studio Code, it comes with [Emmet](https://www.emmet.io/) installed. Emmet is a toolkit for coding faster through quick shortcuts.

<div style="position:relative;height:0;padding-bottom:56.25%">
<iframe width="640" height="360" src="https://www.linkedin.com/learning/embed/coding-faster-with-emmet/understanding-type-child-and-sibling-selectors?claim=AQFwqHRMgbR34AAAAXgstV8ozoulcpGkyhnHY8QhPnMc2qdbBh7aJYazyE-kn6CGhNLWDJnhOUnOtOfyXQi6K7fqNJdRzMYqLJ6Bqi2r1IAbdvVvYXqxntfbjnx5W_lU51DHkND87Iwg7D750HUFgPdhpE0gZxP2ZPp7AqButB2pSb4VuNkq59EOISivJ-cbVpgUU40wTjU31_pRn2whuDDjR5raYBmYfq_ETlZ_GKndjSAPJNfhKRNMz_0OpA1H5znLeExZKC0GWL3iFfSmTpHDKgdToEkjkbhjj0g4QKYHPTmLUto8vJNqAGyBK_Fieuzd1Hc2aA46HS07cI9nY1K7DHh1NYbSUWihFbvEr0I5MFtOF-VDpzbQBIbbc5BqwctPyoFJtd6ySiIFDTboodSh4yz8K3o6LvUOldgG2fXzGtEPXggwKFys9yjXTqhB-Q_x4NWOf_WbnJDo7t4COixZ83soQ2t09pcfcgiLs-9PPmVX7VtXt5CbtC8wYDn_iYJ-O_EsrREFKveRDaCsVs4WU_EUuLwSgKge-r7mSOrwZQ3vWnpnAOxelLR9Gb-o-L24JDEze31y5--vownBP3S3pDlhqr5xI82eqgiYBeLF0mfc46lGcGpUHd6epn-chQwSjaWyVjp3ZlCTofo3INgcM4DDxxiIWCqYM4tnaaoDVtOJfDeYvUGEdVxZnJ2pErQ7goUKos7W-Dkm0QutHWXhVmWEsoBo6K5lbQ" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe></div><p><strong><a href="https://www.linkedin.com/learning/coding-faster-with-emmet/understanding-type-child-and-sibling-selectors?trk=embed_lil">Understanding type, child, and sibling selectors</a></strong> from <strong><a href="https://www.linkedin.com/learning/coding-faster-with-emmet?trk=embed_lil">Coding Faster with Emmet</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/ray-villalobos?trk=embed_lil">Ray Villalobos</a></strong></p>

One of the shortcuts available in emmet will create a quick HTML page. First, make sure you have an HTML page saved and type the `!` key. If you have auto-expansion turned on in your prefs (or you can hit `command-shift-p` and choose `Emmet: Exand Abbreviation`

You'll get a quick HTML page. You can tab through preset options like the title of the page and start working on your document right Away.

There's a lot more you can do with Emmet. Here's a great shortcut that will almost build an entire sidebar template for you.

![Emmet Sample](https://pixelprowess.com/i/started-emmet-sample.jpg)

Emmet is great for building little templates of content types you can add. Trust me, learning Emmet is well worth your time, I'm just scratching the surface on what you can do here.

## HTML Boilerplate

[![HTML Boilerplate](https://pixelprowess.com/i/started-html-boilerplate.jpg)](https://htmlboilerplates.com)


Another way to get started quickly on your page if you want a little some more flexibility is to use this website called [HTML Boilerplates](https://htmlboilerplates.com/)[.](https://htmlboilerplates.com.) It gives you the structure for different component that might need to go on your HTML page. It's not a ton of options, but it has a lot of the things that you'll need to have in your boilerplates to get going.

## Github Templates

[![Github Use template](https://pixelprowess.com/i/started-github.jpg)](https://github.com/new)

Another way you can start a [new project](https://github.com/new) is based on an old project. If you have a Github Repo, you can easily switch it to a template. Just go to the settings tab in your project.

Scroll down and turn on the Template repository checkbox. Your project will now have a 'Use this template' button.

![Github Use template](https://pixelprowess.com/i/started-github-usetemplate.jpg)

That will quickly create a new Github project that is a clone of a current project.

You can use this with another one of Github's great shortcuts. if you want to create a new Github repo, that's based on your template. You can use their shortcut URL [github.new](https://github.com/new/) and as a bonus, you can choose this or any other template you have saved like this.

![Github template](https://pixelprowess.com/i/started-github-template.jpg)

## Degit

[![Degit](http://pixelprowess.com/i/2021-03-15_01-47-33.png)](https://github.com/Rich-Harris/degit)

Ok, what if you want to create a project based on someone else's Github Repo, but you don't want to fork...or maybe you forgot to create a template based on the repo. You might even be looking to clone a specific branch and you definitely want to start off with a clean history.

This is where Degit has some advanced features that makes this easy. It is a CLI that you'll need to install globally

```bash
npm install -g degit
```

Once you've done that, you can easily clone any repo's latest state with a simple format.

```bash
degit planetoftheweb/bootstrap4layouts my-project
```

It assumes you'll be cloning from Github, but you can also specify others by prefixing a keyword like `degit bitbucket:user/project`

If you want to clone just a sub-directory, you can simply add slashes to read the right directory `degit planetoftheweb/bootstrap4layouts/build`, but you can also clone specific branches, releases or commit hashes.

The big advantage here is that you're cloning the repo without history, so you can grab a piece of a project to begin a new project easily.

## Create app
[![Create App](https://pixelprowess.com/i/started-createapp.jpg)](https://createapp.dev/)

For more advanced projects need more choices, you can try [Create App](https://createapp.dev/). It lets you choose different libraries like React, Svelte or vanilla JavaScript, build tools like WebPack, Parcel or Snowpack, UI Libraries like Bootstrap or Tailwind CSS.

Name your project, and you can either hit the download project button to get a zip file, or you can copy the terminal commands you'll need to set this up yourself.

## Vite
[![Vite](https://pixelprowess.com/i/started-vite.jpg)](https://vitejs.dev/)

Create App is cool and all, but what if you're not really into so many choices. You just need something super modern and quick, not so many choices between bundlers or build tools. My new favorite is [Vite](https://vitejs.dev/).

Some of the features include a live preview server, native javascript import commands, hot module replacement, support for CSS, JSX and typescript. Vite doesn't let you choose, it just uses Rollup, ESbuild and template support for React, Vue, VanillaJS and Lit-Element.

It's one of those things that just works.


