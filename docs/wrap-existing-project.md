---
id: wrap-existing-project
title: Wrap existing project
---

In the previous articles, we created a simple blog scaffold tool which works
with few files. In a real world scenario, a scaffold tool creates a lot of
files. This requires a lot of template files to be created. Most of the times,
we are converting our existing project to a project template. To copy these
files is cumbersome. Scaffold Kit realized this problem and thus created a
simple way to convert existing project to a generation command.

```bash
scaffold-kit command command_name --copy-templates path/to/the-templates
```

The option `--copy-templates` tell Scaffold Kit to create templates from
`path/to/the-templates` instead of the default template placeholder file. This
command can also accept options `--ignore-files` and `--ignore-dirs`. The values
are relative paths to `path/to/the-templates`. When specified, these ignored
files and directories are not copied. Scaffold Kit automatically ignores `.git`
and `node_modules` for you.

After copying the templates into the command, we can update the description and
usage of this command.

Depend on user command line options and arguments, the scaffold tool command
should have different behaviors. In the following articles, we are going to
learn defining command options and template rendering.
