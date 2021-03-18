---
layout: post
title: 'JSL: ES2020 Optional Chaining Operator...explained with cats'
summary: "JavaScript's Optional Chaining Operator, also known as the conditional ternary operator is one of those cool new features in ES2020 that you need to know."
hero: /images/posts/jsl-optionalchaining.jpg
thumb: /images/posts/jsl-optionalchaining_tn.jpg
video: TLb0FyS2p2c

tags:
- javascript 
- tutorial 
- javascript2020 
- optionalchaining 
- frontenddeveloper 
- fullstackdeveloper 
- developer 
- webdesign
- JSL

---

## Optional Chaining

Optional Chaining. It looks like a question mark next to a period, but there's a lot of hidden power in that punctuation.

```js
?.
```

## AKA The Ternary Conditional Operator

It's also known as the ternary conditional operator because it combines some of what the ternary operator does together with the chaining operator, normally called dot notation.

It's similar to the traditional dot syntax which lets you access an object and its properties.

Say you have a list of cats you need to keep track of. You might have some data that looks like this to track them.

```js
const cats = [
  name: 'Sniggles',
  breed: 'Cyrmic',
  fur: {
    color: 'calico'
  }
  //...other cats
];
```

## Using Dot Notation Syntax

You can use dot notation to get to the fur color. That would look like this:

```js
const myColor = cats[0].fur.color;
// returns 'calico'
```

But what if in your list of animals, you have a cat that has no fur?

```js
const cats = [
  //...previous cats
  name: 'Mojo',
  breed: 'Sphynx',
  //...other cats
];
```

## The Error With Missing Objects

The problem here is that JSON data, specially when working with a NoSQL database doesn't necessarily return all of the fields, so we can't guarantee that we'll have a fur object available.

In that case, you'd get an error from the compiler. And it's not one of those easy to find errors. It's one of those that implies you're an idiot.

## Ternary Operator Fix

You can try fixing it by using the ternary operator like this:

```js
const myColor = (cats[0].fur.color) ? cats[0].fur.color : '';
```


What we're doing here is a short version of an if...then statement. First, we test for the cats color and if it's undefined or null, then return an empty string, which is similar. But honestly, that's not the most readable code.

## Optional Chaining Fix

The Optional Chaining operator performs this test for you.

```js
const myColor = cats[0].body?.fur.color
```

If the fur object doesn't exist, it will return undefined instead of null so you don't get the error. That's also much easier to read. Ternary statements are awesome, but they always give me a headache.


## Browser Support

This is one of JavaScript's 2020 features and browser support is spotty.

<script src="https://cdn.jsdelivr.net/gh/ireade/caniuse-embed/public/caniuse-embed.min.js"></script>

<p class="ciu_embed" data-feature="mdn-javascript__operators__optional_chaining" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false"></p>

So make sure you're using a transpiler like [Babel](https://babeljs.io/) if you want this to work in older browsers.

## More Info

Learn more about [Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) on MDN.