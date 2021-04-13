---
layout: post
title: "Hacking the Bootstrap 5 Carousel: Building Sidebar Carousels with CSS"
summary: "You don't have to a single carousel on a page, they work really well on sidebars to cycle through content, getting attention by using their sliding or fading features."
hero: /images/posts/hacking-bootstrap-sidebar.png
thumb: /images/posts/hacking-bootstrap-sidebar_tn.jpg
video: 0-1aD5M40js
tags:
  - tutorial
  - video
  - web development
  - CSS
  - Bootstrap
  - Bootstrap 5
  - Carousel
---

## Carousels as Sidebars

I'm going to start with a carousel as a sidebar item. You can insert as many carousels as you want using Bootstrap 5 as long as you include an individual id for each one. Although they will work without the ID most of the time, some of the interface elements like controls and indicators will get confused.

<iframe height="500" style="width: 100%;" scrolling="no" title="Bootstrap 5 Carousel as a Background Item" src="https://codepen.io/planetoftheweb/embed/84f2537b6d0252523f36ce043e9a53bd?height=265&theme-id=dark&default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/planetoftheweb/pen/84f2537b6d0252523f36ce043e9a53bd'>Bootstrap 5 Carousel as a Background Item</a> by Ray Villalobos
  (<a href='https://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

To get this working, I've added some CSS to align the carousel to the right.

```css
#carouselSidebar {
  display: inline-block;
  float: right;
  width: 400px;
}
```

You could use columns to position the sidebar, but this way it will move with the content in the article.

## Equalizing Proportions

The images aren't the same proportions and therefore heights, so I'm going to use a trick that I covered when I wrote an article on [building consistent height carousels](/posts/2021-03-27-consistent-height-carousels-with-css-gradients-by-hacking-the-bootstrap-5-carousels/).

```css
#carouselSidebar .carousel-item img {
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  height: 210px;
}
```

Using [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) and [object-position](object-position) with the `overflow:hidden` property, I can set the height of the image and make them proportionally the same size.

<iframe height="500" style="width: 100%;" scrolling="no" title="Bootstrap 5: Consistent Height Sidebar" src="https://codepen.io/planetoftheweb/embed/540c3c572ce63d86f141877f475c7592?height=265&theme-id=dark&default-tab=result&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/planetoftheweb/pen/540c3c572ce63d86f141877f475c7592'>Bootstrap 5: Consistent Height Sidebar</a> by Ray Villalobos
  (<a href='https://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Fixing the Overlay Text

That's useful, but as you can see the sidebar's text is being displayed on top of the image. That's not good for our sidebar, but it's super easy to fix. All we have to do is remove the `caption-caption` from the caption container.

<iframe height="500" style="width: 100%;" scrolling="no" title="Bootstrap 5 Fixing Text Overlay" src="https://codepen.io/planetoftheweb/embed/8fa7a202215230586c1e28207cc8f358?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/planetoftheweb/pen/8fa7a202215230586c1e28207cc8f358'>Bootstrap 5 Fixing Text Overlay</a> by Ray Villalobos
  (<a href='https://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Adjusting the Arrows and Indicators

The problem is that the arrows indicators you can use to go to the previous and next image appear to be gone. They're still there, but since they're centered, they happen to be in the area with the text.

To fix these, we need to position them manually based on the size of our image.

```css
#carouselSidebar .carousel-control-prev,
#carouselSidebar .carousel-control-next {
  align-items: flex-start;
  top: 80px;
}

#carouselSidebar .carousel-indicators {
  align-items: flex-start;
  top: 180px;
}
```

This will place the image and the arrows in the proper place. You need to calculate these manually and make sure that you adjust the height and margin; otherwise they will run on top of the text, but it's not a big deal.

<iframe height="500" style="width: 100%;" scrolling="no" title="Bootstrap 5 Sidebar Carousel with Fixed Controls and Indicators" src="https://codepen.io/planetoftheweb/embed/f834ee4f343a7f76239085bad7dbcc19?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/planetoftheweb/pen/f834ee4f343a7f76239085bad7dbcc19'>Bootstrap 5 Sidebar Carousel with Fixed Controls and Indicators</a> by Ray Villalobos
  (<a href='https://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Stretched Links

One of the newer features in Bootstrap is the ability to take a link in a component and stretch it so that it cover it's container. You can take advantage of that feature in our carousel and that way you don't have to make a link for both the image and the headline.

```html
<a
  href="https://raybo.org"
  class="h5 d-block mt-2
    stretched-link
    text-decoration-none
    text-secondary"
  >Slide 01</a
>
```

All you have to do is add a `stretched-link` class to the link and it will travel up to a container that has a `position: relative` property. This is working well with our carousel, but remember that sometimes you have to add that manually.

There's a few other interesting things going on with the link. You'll notice that it's actually an anchor tag that's been styled to look like a level 5 headline. Sort of nice that bootstrap has that. Because it's a link, it would normally run as an inline element, but we can quickly switch that to a block level element with `d-block`. Links don't normally have additional margins, so we can add 2 units of margin with `mt-2`.

If you don't add the `text-decoration-none`, because it's a link it will have an underline and the `text-secondary` class gives it a gray tint instead of the loud blue color.
