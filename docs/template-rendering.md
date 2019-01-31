---
id: template-rendering
title: Template rendering
---

The current version Scaffold Kit supports ejs template rendering.

When creating a file or appending a file from a template, the instructions
accept a parameter named context, which will be passed to the template file and
render them out. See the example.

### The execution

```js
createFile({
  from: '_app.js',
  at: 'app.js',
  context: {
    port: options.port
  }
});
```

### The template

```js
const Koa = require('koa');
const app = new Koa();
// ... your setup code goes here
app.listen(<%- port %>);
```

The option port is passed into the template, when creating the file, the real
port number that specified by option default or user command line input are
rendered.

To learn more about Scaffold Kit instructions, see instruction documentation.
For the usage and documentation of ejs, see [ejs website](https://ejs.co/).
