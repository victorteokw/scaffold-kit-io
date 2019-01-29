---
id: create-first-command
title: Create first command
---

Now we have a brand new boilerplate app. Let's create our first command.

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

Let's navigate into the corresponding template folder, and delete it's auto
generated placeholder file `_init.txt`. Create a new file named `_index.html`
with the following content.

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
title. In the next post, we are going to create a command that creates blog
post.
