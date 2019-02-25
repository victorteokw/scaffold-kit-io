---
id: create-first-command
title: Create first command
---

Now we have a brand new boilerplate app. Let's create our first command. (If you
don't know how to create a new project, please read
[Start a new project](start-a-new-project)).

## Design scaffolding tool structure

Before we start, we need to design our scaffolding tool's command structure.
That is, how many commands do we need. Which command take part in which
function. How do these commands relate to and interact with each other.

We design our blog scaffolding tool to be like this:

* `init` command - generate a new blog site
* `post` command - create a new blog post in an existing site
* `destroy` command - remove generated content

We only create `init` command in this post. In the next two posts, we are
going to create `post` and `destroy` command.

## Create command with a command

Let's create a command named `init`. We want to design our command this way:
`blog init "Blog Title"`. When running this command, we get a brand new blog
app with an index page.


```bash
scaffold-kit command init
```

Let's navigate into the newly created `lib/commands/init/index.js`. And update
it's description and usage.

```text
description: 'Create a new blog app.',
usage: 'blog init "Blog Title"',
```

## Create templates

Let's navigate into the corresponding template folder, and delete it's auto
generated placeholder template file `_init.txt`. Create a new file named
`_index.html` with the following content.

```html
<html>
<head>
  <title>Home - <%= title %></title>
</head>
<body>
  <h1><%= title %></h1>
  <ul id="posts">
  </ul>
</body>
</html>
```

Open `lib/commands/init/index.js`, and add this line at the top of execution
block.

```js
options.title = args[0] || 'Untitled Blog';
```

This will pass the blog title to the template.

Save the files and let's run the command in a new empty folder.

```bash
blog init "Tech Blog"
```

Now open the browser to view the newly created page. It's an empty page with a
title. Isn't it amazing? Now if you want to build command fast and see the
stunning results, you can go ahead to next article. If you want to learn more
about the ins and outs, see the next section.

## Command execution demystified

The main part of the generated command file looks like this.

```js
module.exports = createCommand({
  description: 'Create a new blog app.',
  usage: 'blog init "Blog Title"',
  executeInProjectRootDirectory: true,
  options: [
  ],
  execute: ({ options, args, wd }) => {
    const templates = path.join(__dirname, 'templates');
    useTemplatesFrom(templates);
    const dontCreateMap = {
      // File creation test map
      // '.gitignore': options.useGit
    };
    const nameMap = {
      // Remap filenames here
      // 'command.js': `${options.name}.${options.extension}`
    };
    iterateTemplateFilesFromDirectory(
      templates,
      ({ templateName, filename }) => {
        if (!dontCreateMap[filename]) {
          createFile({
            from: templateName,
            at: nameMap[filename] || filename,
            context: options
          });
        }
      }
    );
  }
});
```

* `description` is a human readable description of the command. It will
be displayed in both the app's help message and the command's help message.

* `usage` is a command line style usage that displays in user's help
message.

* `executeInProjectRootDirectory` means when executing this command, the
current working directory is automatically set to the project's root directory.
This prevents generating files into a subdirectory when user is typing the
command in a subdirectory.

* `options` has the same structure with app's
option definitions. We will learn more about it in the following articles.

* `execute` function is the most important role in this file. It's parameters
are `options`, `args` and `wd`.
  * `options` - command line options.
  * `args` - command line arguments.
  * `wd` - working directory.

Internally Scaffold Kit has an instruction stack. All the instruction functions
we called are not executed immediately. They are pushed into this instruction
stack. After our command executes, Scaffold Kit takes our instructions, combine,
reorder and optimize them into a queue. And then get these instructions
executed.

* `useTemplatesFrom` is a executor instruction. It tells executor where
to find template files from.
* `createFile` is the most important executor instruction. It has several
arguments.
  * `from` the relative or absolute path to the template file.
  * `at` the relative destination location to the working directory.
  * `content` the file content. Exclusive with `from`.
  * `context` the rendering context. See
  [Template rendering](template-rendering.md) for more information.

For a complete list of instruction functions, see
[Instruction API](instruction-api.md).

## Next

In the next post, we are going to create a command that creates blog
post and update the index file.
