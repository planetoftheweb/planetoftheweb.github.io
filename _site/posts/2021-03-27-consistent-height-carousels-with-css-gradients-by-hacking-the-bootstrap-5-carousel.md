---
layout: post
title: "Hacking the Bootstrap 5 Carousel: Consistent Height Carousels with CSS Gradients and Object Fit"
summary: "The Bootstrap Carousel is one of the the most popular components in Bootstrap 5, but we have the technology to improve it and at the same time learn about some of my favorite new css features object-position and object-fit."
hero: /images/posts/hackingbootstrap-gradients.png
thumb: /images/posts/hackingbootstrap-gradients_tn.jpg
video: KHF6nysy0-c
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

## Proportionally Cropping and Positioning an Image

A typical Bootstrap 5 Carousel cycles through a series of images and although you can crop them to be the same proportions, sometimes you need them to fit within a specific height.

Here's the problem. The documentation tells you to add an an image with a class of `d-block w-100` That means that it will shrink or stretch the image to whatever height will fit in the width. But what if the images aren't exactly the same height or proportions?

<iframe height="500" style="width: 100%;" scrolling="no" title="Carousel Problem" src="https://codepen.io/planetoftheweb/embed/a2b7ad19ff91e2abc857e74c387c96e8?height=265&theme-id=dark&default-tab=html,result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/planetoftheweb/pen/a2b7ad19ff91e2abc857e74c387c96e8'>Carousel Problem</a> by Ray Villalobos
  (<a href='https://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

When the image changes so does the height of the container. If you put the carousel above some content, the content beneath the images will shift as you try to read the content. Very annoying.

## Object Fit & Object Position to the rescue

To fix this we can use some newer CSS properties that you may have not heard of. If you're familiar with how backgrounds work, you know that you can set the `background-size` attribute to cover and the browser will proportionally resize the background to fit the space available.

You can do the same thing with a regular image using [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit). To get this to look right, you can combine it with [object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position) to center the image.

```css
#carouselHero .carousel-item img {
  object-fit: cover;
  object-position: center;
  height: 50vh;
  overflow: hidden;
}
```

You can also set a height with the `vh` (viewport height) measurement and add `overflow:hidden;` so any extra bit of image will get chopped off. Although `50vh` means that the image will be 50% of the viewport height in this case, you can set that to any height you want.

Now the image centers and fits in the space alloted proportionately. That's what I'm talking about!

<iframe height="500" style="width: 100%;" scrolling="no" title="Carousel Height Fixed" src="https://codepen.io/planetoftheweb/embed/5289da10b0bd1875e6a9d00845b7aa58?height=265&theme-id=dark&default-tab=html,result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/planetoftheweb/pen/5289da10b0bd1875e6a9d00845b7aa58'>Carousel Height Fixed</a> by Ray Villalobos
  (<a href='https://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Browser Support

The `object-fit` and `object-position` properties have pretty good modern browser support as well, so you can use them like you use background gradients whenever you need to fit an image to a container.

<script src="https://cdn.jsdelivr.net/gh/ireade/caniuse-embed/public/caniuse-embed.min.js"></script>

<p class="ciu_embed" data-feature="mdn-css__properties__object-fit" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">

## Gradients with Captions

Another problem happens when you want to put some text on top of an image, but the color of the image and the text are too similar, so the text disappears.

<iframe height="500" style="width: 100%;" scrolling="no" title="Bootstrap 5 Carousel  No Gradient" src="https://codepen.io/planetoftheweb/embed/e704af499d5d29e942a15831adc6ae75?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/planetoftheweb/pen/e704af499d5d29e942a15831adc6ae75'>Bootstrap 5 Carousel  No Gradient</a> by Ray Villalobos
  (<a href='https://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

That's when adding a gradient can come in handy. The best way to do it is to add the gradient on top of the image, but behind the caption, so you can still select the text in the caption. To do that we can use the :before pseudo element selector. It's sort of like adding an extra element before an existing element, and then adding the gradient on that element.

```css
#carouselHero .carousel-item:before {
  content: "";
  background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5));
  display: block;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
}
```

A few important things to note here. We have to include a `content: ''` property, otherwise the browser will assume this is an empty element and not display it at all.

You can see that I'm setting a gradient with a direction from top to bottom and transparent to 50% black. That way I can still see the photo beneath.

Set the display to block, and then include some metrics to make sure the gradient is in the right place.

The position will be absolute so that it's relative to the parent component, I'm making the gradient start 0 pixels from the top and be the full width of the browser and the same height as the parent. You can create a shorter gradient that doesn't take up the whole image if you want to as well.

I set the image and the gradient to be 100% of the viewport width in these examples. Now, let's take a look at our new carousel.

<iframe height="500" style="width: 100%;" scrolling="no" title="Bootstrap Carousel-Gradient Overlay" src="https://codepen.io/planetoftheweb/embed/4c1525feeb827abc69f69665462e09c1?height=265&theme-id=dark&default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/planetoftheweb/pen/4c1525feeb827abc69f69665462e09c1'>Bootstrap Carousel-Gradient Overlay</a> by Ray Villalobos
  (<a href='https://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Now that's some great improvements you can make to Bootstrap 5 carousels with some simple CSS.
