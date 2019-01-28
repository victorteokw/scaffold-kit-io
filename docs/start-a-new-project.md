---
id: start-a-new-project
title: Start a new project
---

The first thing of creating a scaffold tool is to create a new project. The
primitive way of creating a new node.js project is to run `npm init`. Scaffold
Kit is a much advanced tool. Instead of `npm init`, installing the dependencies
manually and create files manually, we use Scaffold Kit CLI to create a starter
project.

First, install `scaffold-kit-cli` globally. This is the scaffold tool based on
Scaffold Kit that generates Scaffold Kit projects.

```bash
npm install scaffold-kit-cli -g
```

In this guide, we are going to create a blog scaffold tool. We create a new
project with `scaffold-kit-cli` and name it `blog`.

```bash
scaffold-kit app blog --git-init
```

The behavior of option `--git-init` is to automatically run `git init` in the
destination directory. Navigate into `blog`, we see several files being created.
The 3 most noticable files are:
* `package.json` - the node.js project manifest file
* `lib/app.js` - the file that being executed when running the command
* `lib/blog.js` - the definition of our blog scaffold tool

Now navigate to `package.json`, a lot of places are marked as TODO.

```json
{
  "name": "blog",
  "version": "1.0.0",
  "description": "TODO: Please update description here.",
  "homepage": "TODO: Please update homepage here.",
  "author": {
    "name": "TODO: Please update author name here.",
    "email": "TODO: Please update author email here."
  },
  "repository": "TODO: Please update repository here.",
  "license": "TODO: Please update license here."
}
```

let's replace the TODOs and update the fields in this file.

```json
{
  "name": "blog",
  "version": "1.0.0",
  "description": "The blog scaffold tool.",
  "homepage": "http://blog.example.com",
  "author": {
    "name": "Author Ex",
    "email": "author@example.com"
  },
  "repository": "https://github.com/yourname/blog.git",
  "license": "MIT",
  "bin": {
    "blog": "lib/blog.js"
  },
  "files": [
    "lib"
  ],
  "scripts": {
    "test": "jest"
  },
  "dependencies": {
    "scaffold-kit": "^0.1.8"
  },
  "devDependencies": {
    "eslint": "^5.12.1",
    "eslint-config-man": "^1.0.4",
    "eslint-plugin-jest": "^22.1.3",
    "jest": "^24.0.0",
    "scaffold-kit-quality-testing": "^0.1.2"
  }
}
```

Now link the blog scaffold tool we've just created into our command line.

```bash
npm link
```

Now type `blog` in our command line, we see our pretty help message with
version, description and usage.

```text
Blog 1.0.0

  The blog scaffold tool.

Usage

  blog <command> [args ...] [options ...]

Commands

  Blog doesn't have any commands yet.
```

In the next tutorial, we're going to create our very first command.
