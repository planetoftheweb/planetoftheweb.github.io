---
layout: post
title: "Obsidian for Developers and Creators who Take Notes The Toolbox - Episode 03"
summary: "Obsidian is the tool that made me completely change my workflow and the way I write articles, notes, pretty much everything. We'll also cover some of other new tools including Flat Data, two awesome VSCode Extensions for coders, Nextra, the Next.js and React powered static site generator from Vercel and some of the cool things you can do from the recent CodeSpaces."
video: 6YJfZE8UUXg
hero: /images/toolbox/obsidian.png
thumb: /images/toolbox/obsidian_tn.jpg
category: toolbox
---

# Show Index

Chapters
00:00 Intro

# Toolbox Shorts

Let's start by going through the tools I'm super interested in right now. Things I'm either using or that are doing things that could make my life a lot easier.

## Flat Data

[![Flat Data Generator](https://octo.github.com/assets/projects/flat/flat.png)](https://go.raybo.org/5LMf)

ThIs is a really clever way to build a Github Action that makes it easier to process data from an API into a static site like Eleventy. It comes with a VSCode Extension that gives you an interface to create the YAML for the Github Action.

Once you get the YAML, it can be added into your actions folder and get processed by Github.

You can then plug this data into your project and it will create an static data file from the fetch. That means that you can use it to query an API for some data and have your static site generator build pages or read the data into your app.

---

## Snipped VS Code Extension

[![Advanced CSS Gradient Editor](https://i.imgur.com/NSCltwI.png)](https://marketplace.visualstudio.com/items?itemName=JeffersonLicet.snipped&ssr=true#overview)

Snipped is a VS Code Extension that makes it easier for you to share your code snippets by letting you take screenshots directly from VSCode. There's a lot of options for sharing code, but for me, I'm usually sharing a web snippet or something I've written myself. This is just about the quickest way to do it.

Here's some TailwindCSS code:

```html
<div class="text-center">
  <h1 class="mt-24 text-5xl px-6 font-extrabold text-green-500 tracking-tight">About Binaryville</h1>
  <p class="mt-4 max-w-2xl px-6 text-xl text-gray-500 mx-auto">
    On the edge of the world stands the progressive town of Binaryville, where technology is a way of life.
  </p>
</div>
```

You can either take a shot of the entire file, or make a selection first. To take the screenshot, you can just use the command palette. command shift P and type in snipped to take the screenshot.

It immediately shows up on a sidebar preview. There's a button to immediately post to twitter. You can copy to your clipboard or download as well. It'd be nice to have other social media options options there.

Notice that the text is selectable, although this is not a live preview. Also, you can't really copy and paste either. I'm hoping some of these are future updates. What you get when you export is an SVG.

---

## HTML End Tag Labels

[![HTML End Tag Labels](https://github.com/anteprimorac/vscode-html-end-tag-labels/raw/HEAD/images/screenshot-1.png)](https://marketplace.visualstudio.com/items?itemName=anteprimorac.html-end-tag-labels)
If you've ever coded with a framework that has a lot of classes, then you've run into a problem I call DIVitis. A problem where you end up with tons of closing DIV pairs, and you're not even sure what they pair up with.

The HTML End Tags extension shows you what element the current div is closing. This solves a huge problem because something I think a DIV is closing an element, but in reality, it's closing something else.

You can see that it is showing you the tags, classes and ids that this DIV is closing. I've been using this a while and that insight is real useful in figuring out if I'm closing the right tag.

---

## CodeSpaces & CodeSwing

[![CodeSpaces & CodeSwing](http://pixelprowess.com/i/2021-08-18_11-41-59.png)](https://github.dev/lostintangent/rock-paper-scissors)

You may have heard that CodeSpaces launched officially this week as a product for Enterprise clients. It's still available as a beta for users and the public release details are coming soon.

One of the cool additions is that you can now take any Github Repo and jump right into codespaces by just hitting the period. You can also create a link to a repo, by switching the Top Level Domain from dot com (.com) to dot dev (.dev). That lets people immediately dive into the code and gives you some unique opportunity.

You would use the period, when you wan to just jump into the code, whereas the DEV will let you create a link that takes someone to the code.

The one I'm showing you here shows how a product called CodeSwing, which is normally an extension to VS Code to let you create a practice environment for someone to have an interactive code tryout.

You might be thinking that this is a lot like Codepen and you'd be right, but what's different about it is that you can demo things that Codepen can't. A good example might be something like TailwindCSS's JIT compiler which re-writes the CSS output in real time as you code your HTML.

I'm definitely going to be using this in future courses.

---

## Nextra

[![Nextra](https://nextra.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fdemo.600511654fb73e0e5b7058d93a81c812.png&w=3840&q=75)](https://nextra.vercel.app/)

Nextra from Vercel...is a static site generator based on Next.js. This sounds like a Gatsby competitor. What's different between this and something like Eleventy is that because it's an app, it automatically generates sidebars, anchor links, routing, syntax-highlighting.

For someone like me who has a blog, one of the pains is just the technical updates. Things are constantly going out of date.

This will automatically generate multiple images for you and it automate things like i18n for usability and the page generation is handled by the 'server'. Another thing that's pretty attractive is support of MDX, which is a version of markdown that lets you add executable code into your markdown files.

That's always seemed something a bit gimmicky, but it's one of those technologies I've been meaning to try.

I feel like I have a lot of questions about this one, but it might be the solution for people who don't want to do so much of the technical lift themselves.

---

# Obsidian

I love anything that has markdown in it. It's made my live a lot easier. Every once in a while though, I find something that truly changes the way I work...for the better. Obsidian is a markdown tool like Rome Research or Notion that lets you do a lot more than just take notes. I think this is the one I've been looking for.

Let's take a look at what all the excitement is about.

## Obsidian

I'm really just getting started with Obsidian. At it's heart it's just another markdown editor. I've tried so many of them that I've lost count. The first thing that really appeals to me is that it doesn't try to ALSO write markdown documents, it's a markdown first editor.

As much as I liked things like Notion, It relies on doing all your writing through a database, so your markdown files become ingested by Notion. Obsidian leaves your files alone so you can use it to manage any type of markdown document. So I can easily drop my blog raybo.org inside obsidian and just write my articles. I can still drop into VSCode if I need to edit some of my Eleventy config or nunjunks code.

## Killer Feature: Links

Another great feature is that it lets you create links between files. That sounds obvious, but it's real smart about these links. Let's take a look at how that works. When I create a course, the first thing I write is my Table of Contents. I'm currently doing a course on Tailwind CSS. Here's what the markdown for the TOC looks like.

This looks real complicated, but if you're familiar with GitHub Flavored Markdown, you might recognize this as a list with check boxes.

There are links to the documents that I'm writing for my courses as well. Links in Obsidian start with double brackets `[[]]`. If I click on one of these, it will take me directly to that document. You can also hit the back button to get back to the list.

I can easily toggle the checkbox at any time while I'm writing by hitting `command-enter`. I can also preview this by hitting the button on the corner. In preview, I can put my mouse on top of the article and see a popup preview of that content without going there.

If I right click on the TOC, I can also choose a view that shows all these relationships called Graph View. You can see all of the relationships between all of your documents, but this local view just shows me the links in the current scope. The graph view is really just eye candy so far for me, but really cool eye candy.

In my TOCs, I add hashtags to indicate when a video will be a new movie and when it's something I've recorded previously that doesn't need an update.

In the sidebar you can see a list of all of your hashtags in all of your documents everywhere. To see those documents, you can simply click on the hashtag and your search sidebar shows you the documents using those tags. So everything is connected.

## Kanban Boards Plugin

Let's show you one more thing. I LOVE Kanban boards. They're my preferred way of managing to-dos in a two dimensional way. I'm keeping a board for this project.

This isn't a core feature, but something that can be added with a plugin. This Kanban view lets me keep track of what I'm doing with this project, so I can take a task and move it from one state to the other.

That's pretty cool, but this whole Kanban board is simply a task list written in Markdown. If I hit the three dots on the corner, I can switch to markdown mode and you can see the structure of the Kanban board. Sometimes it's more convenient to be able to see my board like this and after all, it's just markdown.

## Minor Disappointments

This brings me to one of the minor disappointments I have wit the editor. It's clearly not as good as Visual Studio Code or Atom, so it's missing the multiple cursor mode I use all the time. However, I can quickly open this file in one of those editors. I'll hit the three dots on the corner once again and choose Open in default app. For me, that's Atom. Anything I change in Atom will automatically update in Obsidian.

Since I write all of my slides and articles in Markdown, this is a superior workflow for me. Shockingly enough, Obsidian is a pretty new application and there are already hundredths of plugins you can use.

There are things like mind map views, charts, calendars, icons and lots more. I'm truly just scratching the surface. If you write in Markdown, this thing will quite possibly change your life.

# PostFix

## GitHub Code Challenges

I would be remiss if I didn't tell you that I have a new course out called [Github Code Challenges](https://www.linkedin.com/learning/github-code-challenges). Now, I know that GitHub isn't a coding language, but this was an opportunity to show you some interesting problems with their solutions. So, for example, how to work with bash scripts to automate Git, plus how to work with GitHub to save passwords, automate querying of online APIs and a lot more. Plus the course has some excellent music and graphics.

## Git and Github Tips you should know

Speaking of which next week, I'll be doing a special [live stream espisode](https://www.linkedin.com/events/newgitandgithubtipsyoushouldkno6832317597669748736/) of The Toolbox, where I'll show you some of my favorite Git and GitHub tips and tricks to celebrate the launch of my new course on GitHub Code Challenges.

## Morten's Live Stream 8/18/21

Also, my friend Morten has an exciting [Live Stream](https://www.linkedin.com/events/6830563558145839105/) coming up tomorrow, so check out his talk with Monika Bielskyte, where he'll be talking about Protopia Futures Framework and why design needs a makeover.

## Replay

Remember that if you missed part of the show, you can always catch the replay on my blog [raybo.org](https://raybo.org/) some time after the episode with full links to everything.
