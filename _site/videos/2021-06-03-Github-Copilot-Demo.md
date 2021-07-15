---
layout: post.njk
title: "GitHub Copilot Demo and Review"
summary: "Well...the secret about being a programmer is that you're always looking things up. Wether it's through MDN, the mozilla developer network. Github Copilot works sort of like AutoComplete, but it's a lot cooler. To use it, you can just try to write a function with a logical name and the AI will use billions of lines of code to give you something that...well might work."
thumb: "/images/videos/githubcopilot_tn.jpg"
hero: "/images/videos/githubcopilot.jpg"
video: "hiI-CTcXZZs"
category: videos
---

I had a chance to take a look at [Github CoPilot](https://copilot.github.com/) and I'm truly impressed. As a matter of fact, my mouth was open for quite a while when I was testing this. This is going to change the way you code.

If you want access to it, you can go to copilot.github.com and signup for access. Once you get access to it, it installs as a Visual Studio Code extension.

## The Problem

So...what problem is it trying to solve? Well...the dirty secret about being a programmer is that you're always looking things up. Wether it's through MDN, the mozilla developer network. It works sort of like AutoComplete, but it's a lot cooler. To use it, you can just try to write a function with a logical name.

```js
function generateRandomInt()
```

and here's what I get

```js
generateRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
```

Not bad, Copilot...not bad. You might be thinking...How dare copilot give me a function call. Shouldn't I be using arrow functions these days with const, etc. Your results depend on what you type as well as what else is on your page. Try typing:

```js
const generateRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
```

Yes it's reading the code on your current page to make a determinationm, but it won't read other files in your hard drive (at least not yet).

Let's try something else...let's say that you have a string with some tags for your site and you want to convert them into an array.

```js
function getTagsFromString()
```

and the first result:

```js
function getTagsFromString(str) {
  return str.split(",").map((tag) => tag.trim());
}
```

## Navigation

![Navigating through guesses](http://pixelprowess.com/i/2021-07-03_10-45-46.png)

If you don't like what you see, you can hit alt/option and one of the brackets to navigate through different possible solutions. Once you find one you like, you can hit the tab key. What it's doing in the background is using publicly available source code to synthesize a solution using what you type.

## See more results

![Top Results Option](http://pixelprowess.com/i/2021-07-03_10-47-05.png)

There's a cool option that allows you to see 10 of the top results, so you don't have to use the brackets.

You can even have it generate code from a comment you write like this:

//Search for string in object inside array

![Accept one of many options](http://pixelprowess.com/i/2021-07-03_10-51-12.png)
You type the comment and then hit return. Then hover over the suggestion and click on Open Copilot. You can review the suggestions you get back from the AI and accept the one that makes sense.

## JSON Data

I was thinking this might be a good way to get a some sample data to prototype an App with.

```js
// json list of people objects
```

Here, things start getting a little less useful. My first suggested solution looked something like this:

```js
var app = new Vue({
  el: '.searchbox',
  data: {
    content: [
      {
        "title": "A",
        "tags": "a,b,c",
        "link": "http://example.com/a"
      },
      {
        "title": "B",
        "tags": "a,b,c",
        "link": "http://example.com/b"
      },
      {
        "title": "C",
        "tags": "a,b,c"
```

First, this wasn't a Vue.js document, but it tried to give me a Vue.js solution. Also, it didn't exactly close the content object properly and it just quit on the last item, not including a link, although it had done that for every other item. It wasn't exactly a list of people either.

Down the list there's something that's more what I was looking for.

```js
var people = [
  {
    title: 'Bill Gates',
    tags: 'Bill Gates, Microsoft',
    description: 'Bill Gates is an American business magnate, philanthropist, and investor. He is the founder of Microsoft Corporation, along with Paul Allen and Andrew Busey. He is also the former CEO of Time Warner Inc. and former CFO of Citi Group. He is a member of the Board of Directors of The Bill and Melinda Gates Foundation. A major figure in the business and public relations fields, Gates is well-known for his work on the World Wide Web. He is the former CEO of Microsoft and a member of the Board of Directors of the Internet Corporation for Assigned Names and Numbers.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Bill_Gates_portrait.jpg/1200px-Bill_Gates_portrait.jpg'
  },
  {
    title: 'Steve Jobs',
    tags: 'Steve Jobs, Apple',
    description: 'Steve Jobs is an American business magnate, ceo, and former Apple Inc. creator. He is the former CFO of Apple Inc. and former chief software architect of NeXT. He is a member of the Board of Directors of the Bill and Melinda Gates Foundation.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Steve_Jobs_portrait.jpg/1200px-Steve_Jobs_portrait.jpg'
  },
  {
    title: 'Elon Musk',
    tags: 'Elon Musk,SpaceX',
    description: 'Elon Musk is an American business magnate, investor, and industrialist. He is the former CFO and COO of SpaceX, and the former CTO and COO of SpaceX.Musk was born and raised in South Africa and studied at the University of California, Berkeley. After working in the oil and gas industry, he joined the United States Air Force in the 1960s and was assigned to the space program. He was a member of the Air Force AirfieldCommand, and later became a member of the Air Force Airfield Command. After serving in the Air Force
```

Still an incomplete solution (notice the unclosed description string at the end). I wish I could specify how many samples but if I just needed some quick data to prototype I can work with this. This leads me to some of the disadvantages I'm seeing in CoPilot

## Disadvantages

The code isn't perfect. It can suggest old or deprecated solutions. It can guess the wrong language. Lots of things can go wrong here. However, what it does produce seems at least partially useful.

It isn't always easy to find exactly what you're looking for. I found myself trying to get a specific result, but not really liking any of the suggestions, so re-typing my comments until I got something useful.

Context matters, so what else is in the page asking the question makes a difference. It currently won't look at your other files, just the file you're looking at in order to generate suggestions. That's great.

## Conclusion

Once you get over the initial excitement of how cool this is, you start feeling a bit of frustration, but don't get me wrong. This is VERY useful and I have to give the AI more time to improve it's suggestions. According to Github. In an analysis they ran on Python code, the model got it right 43-57% of the time, but it's getting smarter.

This will also cost money and be part of a premium offering at some point. Because of the computational requirements, I don't expect it to be free for everyone, or at least have a free tier with some limits on usage.

Will it be perfect...no. Will it get smart enough to take over your job...heck no. But it will be helpful and usefyl immediately in the same way that autocomplete is helpful. Think of it as another tool to get you coding faster and more efficiently.
