---
layout: post.njk
title: "Svelte - The Alternative JavaScript Framework"
summary: "NextJS is a Meta Framework that gives you almost every feature you wish React had for building apps and sites."
hero: /images/posts/sveltedemo.jpg
thumb: /images/posts/sveltedemo_tn.jpg
hideDesc: true
video: yy_4uJMq3Zs
category: posts
tags:
  - full stack development
  - Svelte
  - JavaScript

---

Svelte is a JavaScript framework that tries to do something different.

It promises to help you write less code offering a truly reactive experience with no virtual DOM. After trying it for a week, I feel like it's the framework I wish everybody was using.

It's seen a dramatic [rise in popularity(https://2021.stateofjs.com/en-US/libraries/front-end-frameworks/#front_end_frameworks_experience_ranking)] in the last few years that puts it within the top five frameworks.

The reason it's so popular is that it feels...well familiar. Let's build a quick search component so you can learn how it works.



# Installation
Even the installation process is different than other platforms. Instead of having a CLI, you start your project using a template and a utility called [degit](https://github.com/Rich-Harris/degit).

This is actually a wonderful utility that can help you quickly clone an existing repo without any history.

```bash
npx degit sveltejs/template demo-svelte
cd demo-svelte
npm install
npm run dev
npm init
```

Because you're making a clean copy of a repo, you'll need to run npm init.

```
git add .
git commit -m "first commit" 
```


## Config
Let's take a look at what you get when you install the project.

This is a pretty simple project, You'll notice a configuration file at the bottom.

Svelte uses [Rollup](https://rollupjs.org/) which is a module bundler for JavaScript developed by the creator of Svelte...Rich Harris. This is the same bundler that Vite uses, so I 'm a fan.

The config file will handle the live preview, the loading of other files and the exporting of the project.

Then there's the classic folders.

`public` is where you put files that you want published directly on the server.

`scripts` is where you would add scripts for special purposes. You can see one here that can help you set the project up for TypeScript.

`src` is where your project will be. 

`src/main.js` is the entry point for the application. This is where you import Svelte and look for a tag in your HTML page

In this case, it's looking for the body of the document, so it's designed to take over a whole page. 

We're passing some data to our application here...the variable world. This would be a global variable accessible to every page.

and then we export the default app. If you've used React or Vue, this should make sense to you.

`src/app.svelte` is where the real work happens.

There are three parts to every Svelte component. The Script, the HTML and the style.

This makes a lot of sense to me. I think components should have these three parts. The css is scoped to the component...makes sense.

Part of the reason I love this framework is that it is designed to let you write less code. 


A few things. It doesn't freak out if you don't create a container for the HTML.

Also, this isn't JSX, so you can use a style attribute here. You can use class instead of classname.

I don't have to export a module that returns something. The export statement just lets me initialize the variable. It's picking up the value from the global `main.js` file, but I can just declare the value here.

