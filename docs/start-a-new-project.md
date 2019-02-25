---
id: start-a-new-project
title: Start a new project
---

The first thing of creating a scaffold tool is to create a new project. The
primitive way of creating a new node.js project is to run `npm init` and create
files manually. However, we don't use that. Scaffold Kit is a much advanced
tool. We use Scaffold Kit CLI to create a starter project.

First, install `scaffold-kit-cli` globally.

```bash
npm install scaffold-kit-cli -g
```

After installing, type `scaffold-kit` in the command line to check if it's
successfully installed. If successfully installed, you will see it's nice
formatted help message.

In this guide, we are going to create a blog scaffold tool and name it 'blog'.
Type the following command in the command line.

```bash
scaffold-kit app blog --git-init
```

The behavior of option `--git-init` is to automatically run `git init` in the
destination directory. Navigate into `blog`, we see several files being created.
The 3 most noticable files are:
* `package.json` - the node.js project manifest file
* `lib/blog.js` - the entry file that being executed when user runs this program
* `lib/app.js` - the app definition of our blog scaffold tool

Now navigate to `package.json`, a lot of places are marked as TODO.

```js
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
  "license": "TODO: Please update license here.",
  // ...
}
```

Let's replace the TODOs and update the fields in this file.

```js
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
  //...
}
```

So far, so good. Let's look at the app definition file `lib/app.js`.

```js
const appPackage = require('../package.json');
const { createApp } = require('scaffold-kit');

const app = createApp({
  appName: 'Blog', // the app's human readable name
  commandName: 'blog', // the app's command line executable name
  description: appPackage.description, // get app definition from package.json
  version: appPackage.version, // get app version from package.json
  rcFile: '.blog.json', // the option serialization file
  options: [ // define app options here ...
  ],
  commands: { // link app commands here ...
  }
});

module.exports = app; // finally export this app definition
```

The meaning of each field is commented on each line, for a complete app
definition documentation, see [API documentation: data types](data-types.md).

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

In the `Commands` section, we see there aren't any commands in this scaffold
tool. In the next tutorial, we're going to create our very first command.
