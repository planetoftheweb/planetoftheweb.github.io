---
layout: post.njk
title: "SolidJS: React Flavored Pre-rendered Components"
summary: "SolidJS is a framework that tries to create a simpler and faster environment by combining the best features from React and Svelte."
hero: /images/posts/demo-solidjs.jpg
thumb: /images/posts/demo-solidjs_tn.jpg
hideDesc: true
video: WSvmEG7HPyE
category: posts
tags:
  - full stack development
  - Svelte
  - JavaScript

---

SolidJS is one of those frameworks that tries to modernize and simply React style development by relying on components that are then rendered in a way that's similar to Svelte.

That delivers faster applications with components that are familiar to write, but have some improvements over React.

It's main focus is on delivering more performant applications and uses Vite for it's build process, so it has a lot of modern features like hydration, suspense, streaming and more.

One of the reasons I wanted to take a peek was because it had some of the highest user satisfaction in the latest state of javascript survey although some of the smallest usage.

Let's take a look at how you'd build a simple app with it.

It doesn't have a build tool, so you install this with degit like you do with svelte. 

```
npx degit solidjs/templates/js demo-solid
cd demo-solid
npm i
code ./
npm run dev
```


There's a few package.json files and this pnpm lock file. I use npm, so this isn't really 

You get a Vite config file. Vite has really taken over the build processes of almost all modern frameworks. That's pretty impressive

You can see the index file here, which has no imports except for the index.jsx file. 

Remember that Solid is going to use Vite to process things for you, so this file will be managed by your setup.

Notice the div with the ID or root. That's where your app goes.

The whole app is in the src folder.

Assets is where your publicly available files are.

Lets look at the index.jsx, which is your extry point. Notice that it does work with the JSX format, but since it's going to be processed, there are some improvements.

It's importing the library's render method and also the CSS...this would be your global CSS.

It's also importing App.js. This is your main component where the rest of the app is placed.

The render function looks for a root element in the index.html file.

App.jsx

In the App.jsx, you have two imports. One for the SVG. notice that it goes into a variable as well as the styles from the module.css. If you're not used to this, it's CSS in jS where the CSS classes will be available to your project as an object.

Notice the class calls here reference that object and then the class name.

The image call also references our SVG. This is part of how Vite works and a lot of other frameworks are using this as well.

Just in case you didn't notice, although this is JSX, you get to use class instead of className like you would do in react. However, there must still be a single component. So the DIV here is acting as that component.

Also, there were no imports, this component is a simple function. That feels very javascripty. Not quite as easy and natural as Svelte, but this is an improvement over React and it's really designed to feel very familiar and similar to React.


Alright, let's get down to what's different. 