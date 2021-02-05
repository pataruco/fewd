# FEWD

## Web

## What it is?

[React][react] app hosted in [Netlify][netlify] with the content slides for Front-end Web Development for [General Assembly London][ga] 🇬🇧

## How to run locally

```sh
yarn workspace web start
```

## Content

### Slides

Slides are written in remark markdown syntax, you can check more about the syntax [here][remark-syntax]

Slides are stored inside the [public folder (`./public/slides`)](./public/slides/readme.md)

### Homeworks

All homeworks are stored in the [homework package](../homeworks/readme.md)

Each homework has a main folder with the following structure

```text
homework-name
|
|- readme.md
|- starter-code
    |-index.html
    |-styles
    |-scripts
    |-readme.md
|- solution-code
    |-index.html
    |-styles
    |-scripts
    |-readme.md
starter-code.zip
solution-code.zip
```

The idea behind it, is to have in the same repo a reference for the homework with a link to download a zip

### Labs

All labs are stored in the [labs package](../labs/readme.md)

Each labs has a main folder with the following structure

```text
lab-name
|
|- readme.md
|- starter-code
    |-index.html
    |-styles
    |-scripts
    |-readme.md
|- solution-code
    |-index.html
    |-styles
    |-scripts
    |-readme.md
starter-code.zip
solution-code.zip
```

The idea behind it, is to have in the same repo a reference for the lab with a link to download a zip

[react]: https://reactjs.org/
[netlify]: https://www.netlify.com/
[ga]: https://generalassemb.ly/locations/london
[gh-actions]: https://github.com/features/actions
[remark]: https://github.com/gnab/remark/
[remark-syntax]: https://github.com/gnab/remark/wiki/Markdown
[git-tag]: https://git-scm.com/book/en/v2/Git-Basics-Tagging
[site]: https://fewd.pataruco.dev/
