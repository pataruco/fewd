[![Netlify Status](https://api.netlify.com/api/v1/badges/c63e8be2-655b-4bd5-b18e-a5c2fae4d0c9/deploy-status)](https://app.netlify.com/sites/eager-agnesi-05fdb0/deploys)![CI](https://github.com/pataruco/fewd/workflows/CI/badge.svg)

# FEWD

## What it is?

Is a **monorepo** with content for Front-end Web Development course for [General Assembly London][ga] 🇬🇧

It is divided:

- [Web ](./web/readme.md): [React][react] app hosted in [Netlify][netlify] with the custom domain [**https://fewd.pataruco.dev**][site]
- [Labs](./labs/readme.md): Labs & exercises for each lesson
- [Homeworks](./homeworks/readme.md): Exercises for students outside class

## How to install

- Install [Git LFS plugin](https://git-lfs.github.com/)

  ```sh
  brew install git-lfs
  ```

- Clone this repo

  ```sh
  git clone git@github.com:pataruco/fewd.git
  ```

- Install dependencies

  ```sh
  yarn
  ```

## How to run locally

```sh
yarn workspace web start
```

## How to deploy

A [Github action][gh-actions] is set to deal with deployments to prod. To trigger a deployment

- Create a git release [tag][git-tag] with the following convention `R.<number>.<number>.<number>`

  ```sh
  git tag R.1.0
  ```

- Push tag to remote

  ```sh
  git push --tags
  ```

- You can check CI/CD build [here](https://github.com/pataruco/fewd/actions?query=workflow%3ACI)

- Make a tea 🫖

- Check [site][site] live

- 🚀

[react]: https://reactjs.org/
[netlify]: https://www.netlify.com/
[ga]: https://generalassemb.ly/locations/london
[gh-actions]: https://github.com/features/actions
[remark]: https://github.com/gnab/remark/
[remark-syntax]: https://github.com/gnab/remark/wiki/Markdown
[git-tag]: https://git-scm.com/book/en/v2/Git-Basics-Tagging
[site]: https://fewd.pataruco.dev/
