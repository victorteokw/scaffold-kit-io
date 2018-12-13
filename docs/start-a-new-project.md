---
id: start-a-new-project
title: Start a new project
---

The first thing of creating a scaffold tool is to create a new project. Instead
of `npm init`, installing the dependencies manually and create files manually,
Scaffold Kit provides an easy way to create a starter project which contains the
boilerplate code that every scaffold Kit app needs.

First, install `scaffold-kit-cli` globally. `scaffold-kit-cli` is also a
scaffold tool based on Scaffold Kit that generates Scaffold Kit projects.

```bash
npm install scaffold-kit-cli -g
```

In this guide, we are going to create a blog scaffold tool. We create a
new project with `scaffold-kit-cli` and name it `blog`.

```bash
scaffold-kit app blog --git-init
```

The option `--git-init` automatically run `git init` in the destination
directory. Navigate into `blog`, we see several files being created.
