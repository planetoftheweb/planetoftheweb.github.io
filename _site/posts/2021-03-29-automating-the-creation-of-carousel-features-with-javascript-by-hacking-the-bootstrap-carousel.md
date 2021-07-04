---
layout: post
title: "Hacking the Bootstrap Carousel: Automating the Creation of Carousel Features Using JavaScript"
summary: "If you often add indicators and controls to your Bootstrap 5 carousel, you can make that process easier using JavaScript to generate those for you, requiring only additional classes."
hero: /images/posts/hackingbootstrap-javascript.png
thumb: /images/posts/hackingbootstrap-javascript_tn.jpg
category: posts
tags:
  - tutorial
  - video
  - web development
  - CSS
  - Bootstrap
  - Bootstrap 5
  - Carousel
---

## Making life easier

Some things are just easier for computers to do, so whenever I run into something that I think the computers SHOULD be doing, I'm inspired to code. Case in point, The default Bootstrap 5 Carousel has a couple of optional elements that look like this.

<iframe height="500" style="width: 100%;" scrolling="no" title="Bootstrap 5 Carousel with JavaScript" src="https://codepen.io/planetoftheweb/embed/45d7029f68c0b6fef4f418610e0781cf?height=265&theme-id=dark&default-tab=html,result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/planetoftheweb/pen/45d7029f68c0b6fef4f418610e0781cf'>Bootstrap 5 Carousel with JavaScript</a> by Ray Villalobos
  (<a href='https://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The first of the two components are carousel indicators, which look like this:

```html
<div class="carousel-indicators">
  <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="1" aria-label="Slide 2"></button>
</div>
```

The trick here is that the `data-bs-slide-to` parameter tells Bootstrap's JavaScript which slide to go to. Of course there's a aria label that needs to have the right label as well. So for every photo you want used in this indicator, you're supposed to add one of these buttons. That looks just like the type of thing we'd want to automate. Let's take a look at some code to do this and then we'll break it down.

```js
const insertIndicators = document.querySelectorAll(".carousel-indicators");

insertIndicators.forEach((carouselIndicators) => {
  const id = carouselIndicators.parentNode.id;
  if (id !== null) {
    const carouselItems = carouselIndicators.parentNode.querySelectorAll(".carousel-item");
    carouselItems.forEach((item, index) => {
      let el = document.createElement("button");
      el.type = "button";
      el.dataset.bsTarget = `#${id}`;
      el.dataset.bsSlideTo = `${index}`;
      el.ariaLabel = `Slide ${index}`;
      if (index == 0) {
        el.className = "active";
        el.ariaCurrent = "true";
      }
      carouselIndicators.appendChild(el);
    });
  }
});
```

## Selecting Carousels

In the first part of this code, we need to select not just a specific carousel, but all carousels on the page, so that this will work with any carousel without having to specify it's ID.

```js
const insertIndicators = document.querySelectorAll(".carousel-indicators");

insertIndicators.forEach((carouselIndicators) => {
  const id = carouselIndicators.parentNode.id;
  ...
});
```

The `querySelectorAll` lets you select a list of items on a page. We're going to use just a `<div class="carousel-indicators>` to identify if we want indicators on an existing carousel, so this will select any carousels that have this option in them.

## Getting all the Images

Now, we'll need to go through each of the carousels on the page and get each of their IDs and put them in a variable called id with: `const id = carouselIndicators.parentNode.id;`.

```js
...
if (id !== null) {
  const carouselItems = carouselIndicators.parentNode.querySelectorAll(
    ".carousel-item"
  );
}
```

As we go through each carousel, we want to first, make sure that even though a carousel HAS the indicator class, that it also has an id. Then count the `carousel-item` classes so we know how many indicators we'll need to create.

## Creating the Indicators

To create the indicators, we're going to go through each of the items in the carousel and then create elements.

```js
...
carouselItems.forEach((item, index) => {
  let el = document.createElement("button");
  el.type = "button";
  el.dataset.bsTarget = `#${id}`;
  el.dataset.bsSlideTo = `${index}`;
  el.ariaLabel = `Slide ${index}`;
  if (index == 0) {
    el.className = "active";
    el.ariaCurrent = "true";
  }
  carouselIndicators.appendChild(el);
});
...
```

Creating elements is pretty easy, you use `document.createElement("button")` and then add all of the same properties and values that would normally go in an indicator. When we want to use a `data` attribute we have to write it a bit different. So something like `data-bs-target`, we write that in camel case. `dataset-bsTarget`. When necessary we pass along the id.

The first one of the indicators gets a couple of extra properties. They get the class of 'active'; because this is JavaScript, we have to use and an `aria-current` property of true.

Finally, we just append this new element to the `carouselIndicator` element. The nice thing is that we don't have to worry about how many carousel items we have. Here's what this looks like with a CodePen for the code.

<iframe height="500" style="width: 100%;" scrolling="no" title="Bootstrap 5 Carousels Automatica Indicators" src="https://codepen.io/planetoftheweb/embed/NWdRJMR?height=265&theme-id=dark&default-tab=html,result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/planetoftheweb/pen/NWdRJMR'>Bootstrap 5 Carousels Automatica Indicators</a> by Ray Villalobos
  (<a href='https://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Automating Arrows

The arrows are a bit simpler. Once again, let's take a look at the finished code to create these and then discuss.

```js
const insertButtons = document.querySelectorAll(".carousel-buttons");

insertButtons.forEach((buttonIndicators) => {
  const id = buttonIndicators.parentNode.id;
  if (id !== null) {
    buttonIndicators.innerHTML = `
    <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    `;
  }
});
```

We start with something similar by looking for all of the items on the page with a div of `carousel-buttons`. In the same way we make sure that each of these have a parent with an ID associated with them.

```js
insertButtons.forEach((buttonIndicators) => {
  const id = buttonIndicators.parentNode.id;
  if (id !== null) {
    ...
  }
});
```

Now, although we could create elements just like we did before, it's just easier to use the `innerHTML` method and pass along the HTML for the buttons.

```js
buttonIndicators.innerHTML = `
<button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
`;
```

This way, you can just add an element `<div class="carousel-buttons"></div>` whenever you want to add arrows to a carousel.
