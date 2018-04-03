![Ghost Compatability](http://img.shields.io/badge/Compatible%20with%20Ghost-v1%20+-brightgreen.svg) ![Ghost Compatability](http://img.shields.io/badge/Compatible%20with%20Ghost%20LTS-v0.11.11%20+-brightgreen.svg)

Frontier — A Ghost starter theme with Webpack and Bootstrap
======================================================

**This starter theme is intended as a blank slate for developers working on custom Ghost themes. Based on a fork of the lovely [Undefined](https://github.com/curiositry/undefined-ghost-theme) from [Curiositry](https://github.com/curiositry). (Check out their other Ghost themes!) I'm also inspired by the excellent [Sage starter theme](https://github.com/roots/sage) for Wordpress.**

## Features

- **Bootstrap 4** ...along with jQuery and Popper.js for full BS4 functionality.

- **Webpack 4 & BrowserSync 2**  Check the `build` folder for config, but in a nutshell CSS is run through postcss, js is run through Babel, and fonts and images are moved to the assets folder without any processing. Webpack doesn't touch .hbs templates.

- **Ghost v1 Compatible** Tested in several versions of Ghost ^1.0.0.

- **Fully Templated** Frontier uses all the same template files as **Undefined**—A homepage with post teasers, author pages, tag pages, navigation menu, subscribe form, metadata... all the files needed in a blog, not just the minimum files needed to run Ghost.

## Getting started

- { 1 }: **Download / clone theme**

- { 2 }: **Install** Run `npm install`, this was configured using Node 6.9.0

- { 3 }: **Dev** Run `npm run start` to open a BrowserSync session

- { 4 }: **Build** Two options here. Ideally, [configure a CI server to build theme assets](https://jamesfacts.com/building-a-continuous-integration-pipeline-for-your-ghost-theme/), or run `npm run build:prod` locally and upload `assets` dir with the standard issue Ghost theme files.
