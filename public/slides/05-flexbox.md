# 05 Flexbox

---

<BackgroundChange />

## Agenda

- Recap
- **Introduction**
  - What is not
  - What is it?
  - Why we should use it?
- **Explanation**
  - Core concepts
  - How it works
    - Main & cross axes
    - Flex container and flex items
  - Flex container
  - Flex items
- **Next steps**

---

<BackgroundChange />

## Let's talk about Space Jam

![space jam](https://upload.wikimedia.org/wikipedia/en/1/14/Space_jam.jpg)

## [Official website](https://spacejam.com/)

---

<BackgroundChange />

## Let's talk about Ling Cars

![Ling face](https://images.lingscars.com/images/index/ling-face.png)

## [Website](https://www.lingscars.com/)

---

<BackgroundChange />

## What is not?

- CSS property
- Box sizing
- Another kind of grid

---

<BackgroundChange />

## What it is ?

Officialy it's name is

### [CSS Flexible Box Layout Module](https://www.w3.org/TR/css-flexbox-1/)

> _"...In the flex layout model, the children of a flex container can be laid out in any direction, and can “flex” their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent."_

From W3C Candidate Recommendation, 19 October 2017

distribution between items in an interface and powerful alignment capabilities.

When we describe flexbox as being one dimensional we are describing the fact that flexbox deals with layout in one dimension at a time (row or column). This can be contrasted with the **two-dimensional model** of _CSS Grid Layout_, which controls columns and rows together.

---

<BackgroundChange />

## Why we should use it?

[Can I use Flexbox?](https://caniuse.com/#feat=flexbox)

- No coming changes on the distant [future](https://www.w3.org/TR/?title=flex)
- Is the default layout on native web development

---

<BackgroundChange />

### Before we start...

Let's talk about `direction` & `align`

[CodePen](https://codepen.io/pataruco/pen/pZZmNK/)

---

<BackgroundChange />

## How it works?

<CodePane language="css">
  {`.row {
  display: flex;
}`}
</CodePane>

![Flex axes](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox/flex_terms.png)
![Flex box sandbox](https://codepen.io/pataruco/pen/XBPmqj)

---

<BackgroundChange />

## Flex container

An area of a document laid out using flexbox is called a **flex container**. To create a flex container, we set the value of the area's container's display property to flex.

<CodePane language="css">
  {`.row {
  display: flex;
}`}
</CodePane>

As soon as we do this the direct children of that container become **flex items**.

---

<BackgroundChange />

## Flex container

### `flex-direction`

How flex items are placed in the flex container defining the main axis and the direction

<CodePane language="css">
  {`.container {
  display: flex;
  flex-direction: row;
  flex-direction: column;
  flex-direction: row-reverse;
  flex-direction: column-reverse;
}`}
</CodePane>

---

<BackgroundChange />

## Flex container

### `flex-wrap`

Specifies whether flex items are forced into a single line or can be wrapped onto multiple lines.

<CodePane language="css">
  {`.container {
  display: flex;
  flex-wrap: wrap;
  flex-wrap: nowrap;
  flex-wrap: wrap-reverse;
}`}
</CodePane>

---

<BackgroundChange />

## Flex container

### `flex-flow`

Is is a shorthand property for `flex-direction` and `flex-wrap` individual properties.

<CodePane language="css">
  {`.container {
  display: flex;\n
  /* flex-flow: <'flex-direction'> and <'flex-wrap'> */
  flex-flow: row nowrap;
  flex-flow: column wrap;
  flex-flow: column-reverse wrap-reverse;
}`}
</CodePane>

---

<BackgroundChange />

## Flex container

### `justify-content`

Defines how the browser distributes space between and around content items along the **main-axis** of their container.

<CodePane language="css">
  {`.container {
  display: flex;\n
  /* Positional alignment */
  justify-content: center;
  justify-content: flex-start;
  justify-content: flex-end;
  justify-content: left;
  justify-content: right;\n
  /* Distributed alignment */
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
  justify-content: stretch;
}`}
</CodePane>

---

<BackgroundChange />

## Flex container

### `align-items`

Sets the `align-self` (flex item property) value on all direct children as a group. It controls the alignment of items on the **cross axis**

<CodePane language="css">
  {`.container {
  display: flex;\n
  /* Basic keywords */
  align-items: normal;
  align-items: stretch;\n
  /* Positional alignment */
  align-items: center;
  align-items: flex-start;
  align-items: flex-end;
  align-items: baseline;
}`}
</CodePane>

---

<BackgroundChange />

## Flex container

### `align-content`

Handles the remaining space between and around content items along the **cross-axis** with multiple lines.

<CodePane language="css">
  {`.container {
  display: flex;\n
  /* Basic keywords */
  align-content: center;
  align-content: flex-start;
  align-content: flex-end;\n
  /* Baseline alignment */
  align-content: baseline;\n
  /* Distributed alignment */
  align-content: space-between;
  align-content: space-around;
  align-content: space-evenly;
  align-content: stretch;
}`}
</CodePane>

---

<BackgroundChange />

## Flex items

To have more control over flex items we can target them directly. We do this by way of three properties

- `flex-basis`
- `flex-grow`
- `flex-shrink`
- `flex`
- `align-self`
- `order`

<BackgroundChange />

## Flex items

### `flex-basis`

Specifies the initial main size of a flex item. This property determines the size of the content-box

<CodePane language="css">
  {`.container {
  display: flex;
}\n
.item {
  flex-basis: 33%;
}`}
</CodePane>

---

<BackgroundChange />

## Flex items

### `flex-grow`

Specifies what amount of space inside the flex container the item should take up. The flex grow factor of a flex item is relative to the size of the other children in the flex-container.

<CodePane language="css">
  {`.container {
  display: flex;
}\n
.item {
  flex-grow: 1;
}`}
</CodePane>

---

<BackgroundChange />

## Flex items

### `flex-shrink`

Flex items will shrink to fill the container according to the flex-shrink number, when the default size of flex items is larger than the flex container.

<CodePane language="css">
  {`.container {
  display: flex;
}\n
.item {
  flex-shrink: 1;
}`}
</CodePane>

---

<BackgroundChange />

## Flex items

### `flex`

Is a shorthand property that sets `flex-grow`, `flex-shrink`, and `flex-basis`.

<CodePane language="css">
  {`.container {
  display: flex;
}\n
.item {
  flex: 1 1 25%;
}`}
</CodePane>

---

<BackgroundChange />

## Flex items

### `align-self`

Aligns flex items of the current flex line overriding the align-items value. If any of the item's cross-axis margin is set to auto, then align-self is ignored.

<CodePane language="css">
  {`.container {
  display: flex;
}\n
.item {
  align-self: center; /* Put the item around the center */
  align-self: flex-start; /* Put the flex item at the start */
  align-self: flex-end; /* Put the flex item at the end */
}`}
</CodePane>

---

<BackgroundChange />

## Flex items

### `order`

Specifies the order used to lay out a flex or grid item in its flex container. Items within the same container are laid out in ascending order according to their order values. Elements with the same order value are laid out in the order in which they appear in the source code.

<CodePane language="css">
  {`.container {
  display: flex;
}\n
.item {
  order: 1;
  order: -1;
}`}
</CodePane>

---

<BackgroundChange />

## Lab

Do [Flex Froggy](https://flexboxfroggy.com/)

---

<FrontPage title="End of presentation" />
