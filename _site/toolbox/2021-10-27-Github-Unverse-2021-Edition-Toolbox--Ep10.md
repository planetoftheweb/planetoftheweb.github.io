---
layout: post.njk
title: "Github Universe/TailwindCSS 3-Ep10"
summary: "In this special GitHub Late edition of the Toolbox, I'll talk about my favorite Universe announcements, then, I'll share a new exciting Tailwind CSS 3.0 Alpha feature and one more tip in searching through your terminal history. It's Wednesday, October 27 and this is episode 10. Let's get started."
hideDesc: true
video: YZL5_v-vz98
hero: /images/toolbox/toolbox-ep10.png
thumb: /images/toolbox/toolbox-ep10_tn.jpg
category: toolbox
---

## DevContainers.json

[![DevContainers.json](/images/posts/1635351326659.jpg)](https://docs.github.com/en/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project)

This wasn't so much a new feature, but an excellent demo about a little known way to configure your codespaces. CodeSpaces is huge and this allows you to preconfigure a codespace so that it can do things like:

- Modify your settings
- Preload Extensions
- Run an install script
- Run a start script

You can see a good example of that in my tailswing template, which is a great way to play with CodeSwings if you have access to codespaces.

```json
{
  "extensions": ["codespaces-contrib.codeswing"],
  "postCreateCommand": "npm install",
  "postStartCommand": "npm start"
}
```

Super simple, install these extensions, run the npm install to install modules before the pen gets started, then run the npm start command.

## Got Issues?

[![Github Issues](/images/posts/2021-10-27_19-23-12.png)](https://github.com/features/issues)

It's not just me anymore, now everyone's got issues…That's GitHub Issues. This is a fantastic new way to track your projects with more of a table view as opposed to the traditional Kanban Board.

![Github Issues Look](/images/posts/2021-10-27_11-40-31.png)

With the new table views, you get everything that you'd expect in a table that's more than just a pretty view, So for example, you can sort tables by columns, look at labels, assignments, etc.

![Timeline](/images/posts/2021-10-27_12-34-23.png)

We even got a bit of a future preview as to what's coming, including timelines, which you can see above from the demo, as well as insights, which will be a graphical way to look at the projects.

![Timeline](/images/posts/2021-10-27_12-33-27.png)

To get to these new projects, just go to your account and click on the projects tab. I couldn't get to projects from an individual repo right now, I don't know if that's just because it's previous project or if it hasn't been rolled out to existing projects yet. Although it isn't finished, this looks like the next great Github Productivity feature.

## Command Palette

![Command Palette](/images/posts/1635353060737.jpg)
The Biggest little feature announced at Github Universe has got to be the addition of the command palette.

If you blinked, you missed it, so just go into anywhere on Github and just like in VSCode, you can hit command K (control-k). Check out how quickly you can get to repos, projects, popular repos, issues. etc.

Glad I disabled eye blinking this morning.

## Copy Raw Button

![Copy Raw](/images/posts/1635354867552.jpg)

I caught another awesome small, but big feature. Now, if you want to copy the raw version of some code block, you can simply hit the copy button and get the raw contents of the file.

That does save me a few steps. Whew!!!

### Tailwinds CSS JIT CDN

[![Tailwind CSS](/images/posts/1635347098251.jpg)](https://www.youtube.com/watch?v=QAIdYGslQGo)

Tailwind CSS is getting close to launching a version 3 of their platform, which includes support for the JIT compiler in their CDN. All you need to do is add a script tag.

[![TailSwing CDN Sample](/images/posts/2021-10-27_19-20-48.png)](https://github.dev/planetoftheweb/tailswing-cdn)

```html
<script src="https://cdn-tailwindcss.vercel.app?plugins=typography"></script>
```

That's a game changer because it will give you a much smaller build using CDNs instead of having to install the JIT compiler.

I'm going to find it harder and harder to use Bootstrap, although it's still best for when you need something with components and if you don't want a huge amount of classes in your markup.

You can read more about it on the Tailwind 3 Alpha [Release Notes](https://github.com/tailwindlabs/tailwindcss/releases/tag/v3.0.0-alpha.1).

## Terminal Search

![Terminal Search](/images/posts/2021-10-27_19-50-00.png)

Last week, I showed you how to find old commands using History and that was a pretty popular tip. Someone mentioned in the comments the seach feature, so I looked it up and it's pretty awesome. Just hit `control-r`, then type in the command you're looking for in history.

You can keep on hitting control-r to go backwards through history. To go forwards, hit `control-s`. A bit harder to remember, but muscle memory will eventually burn than into your brain.

## Markdown with Benefits

I just learned about a new plugin to the popular [markdown-it](https://github.com/markdown-it/markdown-it) library called [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs). It lets you add attributes to a markdown file, so it's easy to add classes to your markup.

```html
# header {.style-me} paragraph {data-toggle=modal}
```

You can add them in curly braces and then add class names or even attributes as above. I needed to do this so that code I write in Elventy for a blog had the class of table added to the table tag. That's a bit more challenging to achieve, but it goes like this:

```html
| Name | Value | | ------------------------------ | --------- | | **Planet of Origin** | Graykor 5 | | **Number of Eyes** | 2 | | **Favorite Earth
Music Genre** | jazz | ... {.table}
```

The secret is adding two spaces for the class. Then it looks something like this.

![Table with Proper class](/images/posts/2021-10-27_20-05-03.png)
