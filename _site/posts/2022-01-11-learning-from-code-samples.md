---
layout: post.njk
title: "Learning from Code Samples"
summary: "Code screenshots have taken over social media timelines. Although they get a ton of engagement, how should you use them to learn and perhaps as a way to help your development team or your interviews get better."
hero: /images/posts/developer-coding.png
thumb: /images/posts/developer-coding_tn.jpg
video: WJvSpZo38r8
category: posts
tags:
  - full stack development
  - javascript
---

My social media timeline is often full of posts like this [meme from reddit](https://go.raybo.org/6zR5) or a lot of code screenshots.

<img src="https://preview.redd.it/6s55ecvvl4a81.jpg?width=640&crop=smart&auto=webp&s=9398c9703a6d25b08a4b88b9b033e3b280349f3f" alt="Coffee Script Challenge">
 
These short snippets can be a good exercise to practice how to approach learning.

I've convereted this to text for you.

```js
// If you can read this code, you could
// probably use a free cup of coffee.

var your_drink;
var reverse = function (s) {
  return s.split("").reverse().join("");
};
var bartender = {
  str1: "ers",
  str2: reverse("rap"),
  str3: "amet",
  request: function (preference) {
    return preference + ".Secret word: " + this.str2 + this.str3 + this.str1;
  },
};
bartender.request(your_drink);
```

I can see why people love these. For programmers, it's a quick high five and you get a bit of a high from getting the right answer.

The interesting thing about this code is that some of it is a bit peculiar.

## The Output

So what's the correct answer that would get you a free drink? Well, that depends. Technically, this code doesn't output anything. There's no console.log statement, so you could argue that, but it probably won't get you a free drink. You could add a console.log statement to take care of that.

```js
console.log(bartender.request());
```

If you do that, you realize that the output of the code is:

```js
undefined.Secret word: parameters
```

Okay, you'll probably get the drink if you tell the bartender the secret word is `parameters`, unless he's a developer...then some arguments may unsue. What if he mentioned that you forgot about undefined? And why is that even happening?

Well, the culprit is this line:

```js
var your_drink;
```

It's a declaration without an assignment. That's weird, but not unheard of. This would be better if you made an assignment with the declaration.

```js
var your_drink = "";
```

If you do that, then the output would be:

```js
.Secret word: parameters
```

The period is weird, so then you can tell the bartender that this definitely code from a junior developer, but that might get you kicked out without a drink. Just smile and go with it.

You probably noticed that it's using var instead of let or const..gasp! Which one you should you really use? My personal approach is that it doesn't matter as long as you know how they are different.

The value of `your_drink` doesn't change in the code, so I guess if I was pressed I'd use a const. But it's practically irrelevant to the result and a bit of a red herring

Let's look at the next few things.

```js
var reverse = function (s) {
  return s.split("").reverse().join("");
};
```

Here's a function that takes in a value and returns a reversed string. This is a pretty common pattern, but I was wondering if there was an easier way to do this. Splitting into empty strings from the parameter seems weird.

After reading about the [reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) method on MDN, I remembered that reverse doesn't work on strings, just on arrays. Hence the weird way that you have to split things and then reassembled them.

Do I think JavaScript should add a reverse method for strings...um...probably not.

You could modernize this method by re-writing it to use arrow functions.

```js
reverse = (myString) => myString.split("").reverse().join("");
```

That does look nicer, but I'm always wondering if the function declaration syntax is clearer in this casee. Also, I don't think that s is a real good variable name here... I guess it stands for string, so I'm going to change that to myString. If you're using a processor, it's all going to be minimized so I prefer clearer variable names.

```js
var bartender = {
  str1: "ers",
  str2: reverse("rap"),
  str3: "amet",
  ...
};
```

Let's look at the object definition. It starts off with three strings. The second one calls our previous method. I wonder if I could just move the functionality of the method inside the object.

```js
  str2: "rap".split("").reverse().join(""),
```

It's only being used once, so that sort of makes sense, but then you can't really use the method anywhere else. Then I thought I might create the reverse as a method of the object.

```js
  ...
  str3: "amet",
  reverse: function(myString) {
    return myString.split("").reverse().join("");
  },
```

Then I'd have to update the the call on the request method to match.

```js
  ...
  this.reverse(this.str2) + this.str3 + this.str1;
  ...
```

At this point, I'd be wondering what my goal is here. If I'm trying to make this harder to read, to get only the real dedicated developers to use this, then I'm on the right track. Otherwise, I seem to be overthinking this.

Maybe that's the point. If I was a developer manager, I think it'd be a good exercise to have someone bring some code like this and do a presentation about how they would improve it, discuss the ways to make it better and maybe try and write tests for it. In this case, the exercise,not the solution is the point.

I also think that this type of problem that isn't too stressful, but shows you how a developer approaches a problem is a better type of interview problem, specially if you let them know that how they solve the problem isn't what you're looking for, but how they approach the solution. That's what matters anyways.
