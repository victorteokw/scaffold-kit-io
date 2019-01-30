---
id: create-destroy-command
title: Create destroy command
---

In the previous section, we learned how to generate code automatically. In this
section, we are going to learn how to destroy or simply speaking, delete code.

Let's generate a new command named destroy.

```bash
scaffold-kit command destroy
```

Let's try destroy the blog post we just generated.

```bash
blog destroy post "Today's Post"
```

See what happens? The `rollbacker` of previous code takes effect. When we
create a command named destroy, Scaffold Kit CLI creates a boilerplate of
destroy command which behavior is what we want most of the time.
