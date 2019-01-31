---
id: command-options
title: Command options
---

It's natural to use command line options to tweak the command behavior. And the
options have description and type definition with them. Scaffold Kit supports
this feature well.

Command options looks like this:

```js
createCommand({
  options: [
    {
      name: 'gitInit',
      type: Boolean,
      description: "whether running 'git init' after creating the project.",
      defaultValue: false,
      saveToPreference: false
    },
    {
      name: 'port',
      type: Number,
      description: 'the port number that the app is listening to.',
      defaultValue: 4000,
      saveToPreference: false
    },
    {
      name: 'main',
      type: String,
      description: 'the entry file name.',
      defaultValue: 'server',
      saveToPreference: false
    },
  ]
});
```

Scaffold Kit uses
[command line args](https://github.com/75lb/command-line-args) internally.
However there are some differences. The `name` of the option is specified as
camel cased string, in the command line, its input is dasherized.
`saveToPreference` is whether saving this option value into the scaffold tool
.rc file. This is a file that holds the config values of the options.

When viewing the help, you will see command options are showing with nice
description and layout.

```text
Command options

  --git-init               whether running 'git init' after creating the project.
  --port number            the port number that the app is listening to.          
  --main string            the entry file name.  
```

In the execution block, we can tweak the execution behavior by checking the
options value.

```js
if (options.gitInit) {
  runShellCommand({
    command: 'git init'
  });
}
```

We can also pass the option values to the rendering template. See the next
section [template rendering](template-rendering.md).
