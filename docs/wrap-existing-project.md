---
id: wrap-existing-project
title: Wrap existing project
---

A lot of times, we want to use our existing project as a template. In these
cases, we don't need to manually copy code into our command template folder.
Scaffold Kit has an option to convert existing project to a command
automatically. Inside an existing Scaffold Kit app, run the following command.

```bash
scaffold-kit command command_name --copy-templates path/to/the-templates
```

then we can update the description and usage of this command, or add options
and modify templates into dynamic rendering. In the next section, we are going
to add options to an existing command and render our template with the options
that user specified.
