# 07 Responsive Web development

---

<BackgroundChange />

# Agenda

- Types of layouts
- Relative units
- Media Queries
- Flexible Images
- Responsive Images

---

<BackgroundChange />

# Responsive design overview

- Fluid containers
- Media queries
- Flexible images

---

<BackgroundChange />

# Fixed vs responsive

Checkout these **fixed** sites

- [Space Jam](https://spacejam.com/)
- [Ling's Cars](https://www.lingscars.com/)

---

<BackgroundChange />

# Fixed vs responsive

Checkout these **responsive** sites:

- [General Assembly](https://generalassembly.com)
- [Wikipedia](https://en.wikipedia.org/wiki/Star_Wars)
- [Red Badger](https://www.red-badger.com)

---

<BackgroundChange />

# Fixed vs responsive

The important takeaway is that a responsive site uses the same codebase to achieve optimised layout across multiple screens.

---

<BackgroundChange />

# Fixed layout

- Simple and a good starting point
- Gives more control
- Easier to build
- Still works on mobile - pinch & zoom Relies on a container of fixed width

---

<BackgroundChange />

# Fluid layout

- Sized in percentages (or relative units)
- Everything is relative
- It's all about proportions

---

<BackgroundChange />

# Relative units

Further to sizing our containers in percentages, we can size other UI components (`font-size`, `margin`, `padding`, etc.) in relative units which cascade and build a system of proportions.

---

<BackgroundChange />

# Relative units

Common units of measurement for these components are:

- `em`
- `rem`
- `vw` and `vh`

---

<BackgroundChange />

## `em` vs `rem`

### `em`

- Sized based on the width of the letter "M"
- Size is relative to the parent

<CodePane language="css">
  {`body {
  font-size: 16px;
}\n
h1 {
  font-size: 2em; /*font size is 32px */
}`}
</CodePane>

[CodePen](https://codepen.io/pataruco/pen/dxGRjM)

---

<BackgroundChange />

# `em` vs `rem`

# `rem`

- Stands for **root** `em`.
- Based on the font-size of html (root) element

---

<BackgroundChange />

# Media queries

## Media Types

The two main media types are `print` and `screen`
This means we can write CSS for screen devices (laptops, tablets, mobiles) and different CSS for printing a web page out.

<CodePane language="css">
  {`@media only screen and (max-width: 800px) {
  /*styles only apply when viewport is up to 800px */
}`}
</CodePane>

[Codepen](https://codepen.io/pataruco/pen/bXErem)

---

<BackgroundChange />

# Media queries

There are lots of things we can query about the media, these are the most common.

```css
width | min-width | max-width
height | min-height | max-height
orientation
aspect-ratio | min-aspect-ratio | max-aspect-ratio resolution | min-resolution | max-resolution
```

Separate multiple clauses with `and` and negate with `not`

---

<BackgroundChange />

# Mobile display

To make our Media queries work we need to add this special metatag to the headin our HTML.

<CodePane>{`<meta name="viewport" content="width=device-width, initial-scale=1" />`}</CodePane>

---

<BackgroundChange />

# Using media queries

<CodePane language="css" highlightStart={13} highlightEnd={17}>
  {`.row {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}\n
.column {
  flex-basis: 100%;
  flex-grow: 1;
  flex-shrink: 1;
}\n
@media screen and (min-width: 600px) {
  .row {
    flex-direction: row;
  }
}`}
</CodePane>

---

<BackgroundChange />

# Media queries

## Mobile first

- Start with a single column
- Add Media queries using `min-width`
- Performance benefits
- Slightly less code

---

<BackgroundChange />

# Media queries

## Desktop first

- Start with the full-width version
- Add media queries using `max-width`
- Can be more intuitive
- Can cause trouble scaling complex layout to narrow screen

---

<BackgroundChange />

# Media queries

## Breakpoints

When building a responsive site we often have some common breakpoints where we want major changes to occur. These are normally described as "mobile styles", "tablet styles" or "desktop styles".
Or small, medium or large screens.

---

<BackgroundChange />

# Media queries

## Breakpoints

We want to use generic breakpoints that approximate most devices at these screen sizes so we don't design layouts for specific devices.
I tend to use `500px` to approximate mobile and `800px` to approximate tablets and `1200px` to approximate desktops

---

<BackgroundChange />

# Media queries

## Tweakpoints

Having generic breakpoints is good but you will often need to tweak different styles to make the content or your layout look it's best.
We call these tweak points and they can take any pixel value to wrangle your layout into its best shape.

---

<BackgroundChange />

# Media queries

You can either put all of your media queries in one place in your stylesheet (at the bottom to ensure no specificity issues).
Or you can have multiple `@media` declarations throughout your stylesheet, setting up responsive styles directly beneath your initial CSS.

---

<BackgroundChange />

# Flexible images

Images have fixed dimensions that can break our fluid layouts.

We can make them flexible by setting `max-width`

<CodePane language="css">
  {`img {
  max-width: 100%;
  display: block;
  height: auto;
}`}
</CodePane>

---

<BackgroundChange />

# Responsive images

<CodePane>
  {`<img
  srcset="
    elva-fairy-320w.jpg 320w,
    elva-fairy-480w.jpg 480w,
    elva-fairy-800w.jpg 800w
  "
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy"
/>`}
</CodePane>

[CodePen](https://codepen.io/pataruco/pen/KOVXNM)

---

<BackgroundChange />

# Responsive images

<CodePane>
  {`<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="Elva dressed as a fairy"
/>`}
</CodePane>
---

<BackgroundChange />

# Responsive images

<CodePane>
  {`<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>`}
</CodePane>

---

<BackgroundChange />

# Tools

Responsive Design testing can be tricky.
Here are some tools to help:

- [Chrome](https://developers.google.com/web/tools/chrome-devtools/) / [Firefox Dev Tools](https://developer.mozilla.org/en-US/docs/Tools)
- [BrowserStack](https://www.browserstack.com/)

---

<FrontPage title="End of presentation" />
