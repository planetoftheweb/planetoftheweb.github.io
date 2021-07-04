---
layout: post
title: "Best Bootstrap 5 Features-Turn a button into a checkbox or radio form element"
summary: "Bootstrap 5 has a lot of new features, but sometimes it's the smaller things that really impress me. Let's take a look at just one of those new features. Making something that looks like a button behave like a checkbox or radio element"
hero: /images/posts/bootstrapbuttoncheckboxes.png
thumb: /images/posts/bootstrapbuttoncheckboxes_tn.jpg
category: posts
tags:
  - tutorial
  - video
  - web development
  - CSS
  - bootstrap
  - bootstrap 5
  - checkbox
  - button
---

Creating these is pretty easy, but it feels a bit strange. Let's start with the code for a regular checkbox.

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="dolores_ck" />
  <label class="form-check-label" for="dolores_ck"> Dolores </label>
</div>
```

The container gets a `form-check` class, the input field a `form-check-input` class and the label the `form-check-label`. The other important thing is that the `id` on the input matches the `for` field in the label so that when you click on the label, the checkbox activates.

## Checkbox Buttons

To make these look like a checkbox, we just change the `form-check-input` class to a `btn-check` class and the `form-check-label` class so that it has a btn class as well as one of the contextual color classes...for example `btn btn-outline-info`. The outline classes work the best here because they will visually change a lot better when activated than the regular classes.

```html
<div class="form-check">
  <input class="btn-check" type="checkbox" value="" id="dolores_ck" />
  <label class="btn btn-outline-info" for="dolores_ck"> Dolores </label>
</div>
```

You don't really need the `form-check` container anymore, but the container itself will be handy if you want to create a button group. Let's try that. First, we'll create a number of extra buttons.

```html
<div class="form-check">
  <input class="btn-check" type="checkbox" value="" id="dolores_ck" />
  <label class="btn btn-outline-info" for="dolores_ck"> Dolores </label>

  <input class="btn-check" type="checkbox" value="" id="bubbles_ck" />
  <label class="btn btn-outline-info" for="bubbles_ck"> Dolores </label>

  <input class="btn-check" type="checkbox" value="" id="cosmo_ck" />
  <label class="btn btn-outline-info" for="cosmo_ck"> Dolores </label>
</div>
```

## Multiple Buttons with btn-group

And change that `form-check` class to a `btn-group` class. Let's also add the `checked` property to one of our buttons.

```html
<div class="btn-group" role="group" aria-label="Robot toggle group">
  <input type="checkbox" class="btn-check" id="dolores_ck" autocomplete="off" />
  <label class="btn btn-outline-info" for="dolores_ck">Dolores</label>

  <input type="checkbox" class="btn-check" id="bubbles_ck" autocomplete="off" checked />

  <label class="btn btn-outline-info" for="bubbles_ck">Bubbles</label>

  <input type="checkbox" class="btn-check" id="cosmo_ck" autocomplete="off" />
  <label class="btn btn-outline-info" for="cosmo_ck">Cosmo</label>
</div>
```

Some cool things are happening here. Notice that the actualy inputs are hidden from view, but technically still there. Our labels become our buttons, and it's really important that our for field is referencing the ID of the button because that's what activates things.

## What about radio buttons?

What if we wanted to use radio buttons instead of checkboxes. Well, then the rules are a bit different. First you have to change the input types from `checkbox` to `radio`.

```html
<div class="btn-group">
  <input class="btn-check" type="radio" value="" id="dolores_ck" />
  <label class="btn btn-outline-info" for="dolores_ck"> Dolores </label>

  <input class="btn-check" type="radio" value="" id="bubbles_ck" checked />
  <label class="btn btn-outline-info" for="bubbles_ck"> Dolores </label>

  <input class="btn-check" type="radio" value="" id="cosmo_ck" />
  <label class="btn btn-outline-info" for="cosmo_ck"> Dolores </label>
</div>
```

Now we just have to add a name to each input and make sure they are the same for all three buttons with the values being different from each field.

```html
<div class="btn-group">
  <input class="btn-check" type="radio" name="robotChoice" value="dolores" id="dolores_ck" />
  <label class="btn btn-outline-info" for="dolores_ck"> Dolores </label>

  <input class="btn-check" type="radio" name="robotChoice" value="bubbles" id="bubbles_ck" checked />
  <label class="btn btn-outline-info" for="bubbles_ck"> Dolores </label>

  <input class="btn-check" type="radio" name="robotChoice" value="cosmo" id="cosmo_ck" />
  <label class="btn btn-outline-info" for="cosmo_ck"> Dolores </label>
</div>
```

This is a pretty cool new input type that doesn't even look like a form, but allows you to capture data in the same manner. Pretty nifty.

Here's the finished codepen, if you want an interactive version.

<iframe height="800" style="width: 100%;" scrolling="no" title="Bootstrap 5 - Button Groups" src="https://codepen.io/planetoftheweb/embed/xxgerRq?height=300&theme-id=27192&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/planetoftheweb/pen/xxgerRq'>Bootstrap 5 - Button Groups</a> by Ray Villalobos
  (<a href='https://codepen.io/planetoftheweb'>@planetoftheweb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
