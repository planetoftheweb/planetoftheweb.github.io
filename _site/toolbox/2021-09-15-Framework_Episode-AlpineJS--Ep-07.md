---
layout: post
title: "What New Framework should you try next -- The Toolbox Ep 07"

summary: "In this episode of the toolbox, we take a look at Alpline.js. an up and coming frameworks that rewires your mind and like Tailwind CSS lets you do everything with only the HTML file. I’ve got lots of Toolbox shorts, GitHub tips and I’ll let you take a peek at what I’m working on next in JSL."
hideDesc: true
video: lTolSal2qgY
hero: /images/toolbox/episode07.jpg
thumb: /images/toolbox/episode07_tn.jpg
category: toolbox
---

Hello everyone this is Ray Villalobos and I stream about front-end and full stack tools Wednesdays at 1pm Eastern time 10am Pacific. So follow me and subscribe on the social media things for tons more content. If you want to watch any past episodes, make sure you take a look at my blog...raybo.org.

# Toolbox Shorts

Let's get started with some shorts. There are new tools and articles that you should know about.

---

## Draw.io

[![Draw.io](http://pixelprowess.com/i/2021-09-15_09-57-24.png)](https://draw.io)

Weeks ago, I found a pretty neat Mac and iPad App called Flowchart Designer 3. Well, now that I found Draw.io, I feel like a fool, there’s a cool new site you can try called draw.io that is just as capable, free and online. There’s even a [VSCode extension](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio), which means you can also use this on a codespace or on github.dev.

---

## FrontMatter

[![Front Matter](http://pixelprowess.com/i/2021-09-15_10-15-45.png)](https://frontmatter.codes/)

This is a Headless CMS right inside Visual Studio code, so you can use it to edit your blog posts if you’re using something like Eleventy, but it also works with Hugo, Hexo, Jekyll, Next, Gatsby and more. One of the features I really love is the ability to quickly search through the different files on my blog. Plus it gives you tons of stats and helps you generate the content.

---

## MARP for VS Code

[![MARP for VSCode](http://pixelprowess.com/i/2021-09-15_09-42-10.png)](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)

I keep hearing about this new way of creating presentations called MARP for Markdown Presentation and it’s growing into more than just a simple way to create slides with Markdown. It’s a whole ecosystem for creating your presentations with a built-in ecosystem. So, you can use all types of additions like [directives](https://marpit.marp.app/directives) to customize how you create these. Well, there’s now a VSCode Extension that lets you live preview your presentations quickly. I’m now switching from [rayveal.js](https://rayveal.tech/#/) just yet, but I’m definitely getting jealous of what this can do.

---

## GitHub.dev Tips

[![GitHub.dev Tips](http://pixelprowess.com/i/2021-09-15_09-48-38.png)](https://dev.to/lostintangent/10-awesome-things-you-can-do-with-github-dev-5fm7)

You know I’ve been a huge fan of codespaces and GitHub.dev, which lets you quickly jump into a practice environment by using the period key on any repo. Jonathan Carter, who manages the project at GitHub, wrote an article detailing some of the things you can do with the tool. For example you can use it no just on branches, but also on individual files or selections in your text. While difffing files. My brain has been rewired.

---

## GitIgnore.io

[![GitIgnore.io](http://pixelprowess.com/i/2021-09-15_03-15-16.png)](https://go.raybo.org/5jb2)

This site is sort of like a search engine for gitignore files. Those are files that git will ignore and not send to a service like Github. Type in your operating system or framework and it will show you a file you can use as a .gitignore with a nice interface.

---

# Git Tips

Gitignore files are super useful, and you can create a global version using the git config command. Git config is one of those things every developer uses when they install git to set up their default name and email and then forgets about. Let’s go over a couple of ways you can use it to make your life easier.

# Global Gitignore File

If you’re a developer who uses git, specially on a Mac, the operating system creates invisible files like .DS_Store file to keep track of file operations. The same thing happens in an npm projects, which creates a node_modules folder.

To prevent that from happening, you can create a .gitignore file that tells git not to send those to your repo when you push things.

You can create a global version of that file, so that it ignores files in all your new projects automatically.

We can do that in our home directory by using the touch command `touch ~/.gitignore_global`

You can add things in there you can to ignore all the time.

If you haven’t done so already, go ahead and add the code command to your paths, so you can use it in any terminal. You can do that in the command palette and type in `shell...`

I’m going to keep things simple and just add a couple of files.

Now we can use VSCode to open our files `touch ~/.gitignore_global`

```
node_modules
.DS_Store
```

Now that we have this file we can modify git’s globals using the git core variable. That’s going to allow us to specify the excludefile option and point that to the location of our new file.

Now, when we initialize a repo, it will use our defaults to ignore files in the future.

`git config --global core.excludesfile ~/.gitignore_global`

Git config is really easy and lets you

## Default branch name

There are lots of config variables that you can change. A pretty common one you can use is to change the default branch name to main.

`git config --global init.defaultBranch main`

By the way, you can use this in a case by case basis.

```
git init --initial-branch=main
git init -b main
```

now, whenever you create a new repo, it will use main as the default branch name instead of master.

This will work in versions of git 2.28.0 and newer. You can find out which version of git you’re running using. `git --version`

---

In addition to setting up a global .gitinore file, I use git config to set up my default difftool, which is Kaleidoscope. There’s lots of other [customizations](https://git-scm.com/docs/git-config#_configuration_file) you can do.

```
git config --list
git config --global core.editor
git config --global help.autocorrect 1
git config --global diff.tool winmerge
git config --global merge.tool
```

---

# JSL Nullish Coalescing

Let’s take a look at one of the projects I’m currently working on.

I wanted to give you a sneak peek into something that I'm working on, and that's a project called JavaScript as a second language. In that course, I'm creating a series of videos and each video happens to be on a JavaScript topic and I'm showing you how they work by context, which is how I learned English as a second language. So I created this example to explain something called nulish coalescing operator. It's this operator right here. I'm using the technique here called the short circuit, which is pretty common, but you may have seen it with the or operator.

When JavaScript evaluates the statement. If the part of the left of the or is true, then it doesn't need to evaluate the second part. And that's because if either of these statements is true, then the whole thing is true. And as a matter of fact, JavaScript doesn't evaluate the right side of the equation. If the first part is true, there's no need to do that.

Now you can use the short circuit to create a default value, and that's exactly what I'm doing right here. This technique is fantastic, but the logical OR operator has a problem. It will execute the right hand side of the equation if the left hand side has any falsey value. So if Lama ID happens to be null or undefined, it would return a random image, which is what I want, except for when I want to initialize the Lamas right here, I want to pass the index of the first item, which would be this image right here.

The problem is that when I'm passing zero, it interprets that as a false value because when working with booleans zero means false and one means true. That's what the Nullish Coalescing operator is there to fix. If I change this back to question Mark question Mark, notice that it is showing me the plain Lama. It only changes when I hit the switch button right here. Now, if I had the logical or here as I did before, it would sometimes give me a random Lama.

It will always execute the right hand side of the operation, even if I use zero as the index for LlamaID, and that's what this whole series is about. It's showing you how these things work in a context of building something like an app. It also tries to be a lot of of fun, and that's why I'm using Llamas.

I’m really excited about the project, so I’ll probably give you more peeks into the things I’m building as time passes by.

---

# Alpine.js

Last week, I showed you a new CSS framework called assembler CSS, which I think is where CSS platforms might be going in the future. As I traveled the web, I stumbled over this framework called AlpineCSS. It’s been called the Tailwind CSS of JavaScript frameworks. Let’s take a look.

The killer feature of this framework is it’s simplicity. It looks weird when you first encounter it. One of the big selling points is how few things you have to remember. If you think about how bloated React, Vue or other frameworks get over time, the simplicity of this approach has a lot of value.

There are only 15 attributes, 6 properties and 2 methods to remember…that’s it. Otherwise, you use regular javascript with some pretty modern features.

> SET UP

Let’s open up a codeswing in Visual Studio Code. This is an extension you can install for quick demos.

- We’ll need to add the Alpine extension. We can do that in codeswing.
- Let’s go ahead and add Bootstrap to this.

## Approach

The interesting approach with Alpine is that it is meant to use just HTML. Like with Tailwind CSS, you can use the HTML file to do everything. This is weird, but you can build your whole app without touching a separate JavaScript file…if it feels weird, just go with me on this one.

## Template and x- directives

This framework uses two important HTML features you might not be too familiar with. First is the use of x- directives. Directives are nothing more than commands and like with other frameworks, the commands are stored in custom directives with Alpine.js

This is valid HTML and as a matter of fact technically reserved for user agent use, so it’s guaranteed never to collide with any HTML.

## x-data

The other features is the use of the template tag. It’s a way to create content that won’t be rendered immediately when the page loads. I think this framework best embraces the template tag. More on that later.

What lets Alpine know that it needs to control an element is the addition of an x-data wrapper on a set of tags.

The tag isn’t just an identifier, it’s also how you manage state within the app.

```html
<div x-data="{ name: 'Groceries' }"></div>
```

You can pass a regular JavaScript object here as the parameter. To output the name, you can add it into another directive called x-text.

```html
<div x-data="{ name: 'Groceries' }">
  <h1 x-text="name"></h1>
</div>
```

Here’s how you would add a count to the button

```html
<div x-data="{ name: 'Groceries', count: 0 }"></div>
```

And finallly the button.

```html
<button x-on:click="count++" class="btn btn-primary position-relative" type="button">
  count
  <span
    x-text="count"
    class="position-absolute top-0 start-100 
			translate-middle badge rounded-pill bg-secondary"
  >
  </span>
</button>
```

Let’s switch the button to an input field, so I can show you how Alpine handles two way data binding, which is the ability of an input field to track the value of a variable. If the user modifies the Input Field OR the value somewhere else, then both change to reflect the new value. It’s quite a powerful technique.

```html
<div class="input-group mb-3">
  <input x-model="count" type="text" class="form-control" />

  <button x-on:click="count++" class="btn btn-primary position-relative" type="button">
    add
    <span
      x-text="count"
      class="position-absolute top-0 start-100
			translate-middle badge rounded-pill bg-secondary"
    >
    </span>
  </button>
</div>
```

Next, let’s take a look at what it would take to build a ToDo type app with what we’ve learned.

```html
<div
  x-data="{ 
  name: 'Groceries',
  current: '',
  list: ['Grapes'],
  count: 0,
  add() {this.list.push(this.current)}
  }"
  class="container w-50 d-flex flex-column mt-4 justify-content-center"
>
  <h1 x-text="name"></h1>

  <div class="input-group mb-3">
    <input x-model="current" type="text" class="form-control" />
    <button x-on:click="add" class="btn btn-primary position-relative">
      add
      <span
        x-text="list.length"
        class="position-absolute top-0 start-100 
        translate-middle badge rounded-pill bg-secondary"
      >
      </span>
    </button>
  </div>

  <ul class="list-group">
    <template x-for="item in list">
      <li class="list-group-item" x-text="item"></li>
    </template>
  </ul>
</div>
```

---

# PostFix

## Apply Newsletter

If you want to find out what's in store for next week's episode of The Toolbox, then check out my newsletter called Apply...get it as in call and apply in JavaScript.

I publish that every week on about Thursdays. Here's the [last edition](https://www.linkedin.com/pulse/changing-history-ray-villalobos/). If you're a LinkedIn member, you can subscribe to it. It's a bit different than my technical courses and starts with some thoughts on whatever is happening.

## New Course Bootstrap 5: Transitioning from Bootstrap 4

I’ve got a new course that covers how to transition from Bootstrap 4 to Bootstrap 5.

<div style="position:relative;height:0;padding-bottom:56.25%"><iframe width="640" height="360" src="https://www.linkedin.com/learning/embed/bootstrap-5-transitioning-from-bootstrap-4/welcome-to-a-next-generation-bootstrap?autoplay=false&claim=AQEl4FHh_ta6kQAAAXvySGzon8r_CV693wpbVF6RQQkHLRSzzspesV2k23U30_bz1VVwBFktQ0Hz5cAZeXRVKKSFu-RZ_nXpTrEcDMSWlOstHgMl3c0pkLHz7Ter5n_Mksb1PBOhCy9BmEpu8sU7Bx8TNade2-0IBRn4Uhw8vh4s1bFGXblXw2MNjG3355BLjy8vtFnHloHQErMKVk6ZOuVi9PKHJlYycZrR4xgDE90lVdZ4U7wx2qowpS50n0IejWTzCRzZH-D3q8KM546fQgVNaeI_m_Skybd09hBPOFuMAeiI3Jz99fSqjXjLkB-DmH-_tn1HetXhO27qqNO2rLJUpMbNQODOmKm7iJxavkflC-h5Oui5-zLk8TtNuHT0QWzWHbstLox0ajKreuDHJ-OlRJ0EnkA6Pv7SRP50qk0R4Or-FNxe-Fy-edyV9m4kURSeolHtBjHGGiBSuQmQcck7nV5_VSEpNGwffMYd3FV0YhLj7BodRdJmgN0IlXzSYl8qX_I5i-Cfs4j6vfje-5O6sff4ESdvSNkPUS9BTgZJ9vSL4pbFIwr2bMLibJ6Sr-jFsHlC2QQfKhf6CHLArzjByb9lYgydWaYmL3IdY5C6iEHq9_Pcta8W6bxYTU3G-mH8VrTzObqW9QqM_ncpbO4NS1VlPR4AS4nhfIQNs6GdMQAtJtqWFjOvZ23dX5h9BoVnUYDrM2g93d3Biixf6oS-SIEdGqBz5gTFdN-jCrI&lipi=urn%3Ali%3Apage%3Ad_learning_content%3BL07VGoybRKa%2FlbW5TI7m1w%3D%3D&licu" mozallowfullscreen="true" webkitallowfullscreen="true" allowfullscreen="true" frameborder="0" style="position:absolute;width:100%;height:100%;left:0"></iframe></div><p><strong><a href="https://www.linkedin.com/learning/bootstrap-5-transitioning-from-bootstrap-4/welcome-to-a-next-generation-bootstrap?trk=embed_lil">Welcome to a next-generation Bootstrap</a></strong> from <strong><a href="https://www.linkedin.com/learning/bootstrap-5-transitioning-from-bootstrap-4?trk=embed_lil">Bootstrap 5: Transitioning from Bootstrap 4</a></strong> by <strong><a href="https://www.linkedin.com/learning/instructors/ray-villalobos?trk=embed_lil">Ray Villalobos</a></strong></p>
