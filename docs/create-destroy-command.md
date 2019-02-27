---
id: create-destroy-command
title: Create destroy command
---

In the previous 2 sections, we created two commands that create and update
files. A modern scaffolding tool is not only focusing on generating things. As
a powerful tool in hand, it interacts with user in a lot of aspects.

This time, with powerful Scaffold Kit, we create a `destroy` command that
deletes the files we've generated, and rollbacks the files we've updated.

## Create destroy command

Let's generate a new command named destroy.

```bash
scaffold-kit command destroy
```

Let's try destroy the blog post we just generated.

```bash
blog destroy post "Today's Post"
```

See what happens? The `rollbacker` of previous code takes effect. When we create
a command named destroy, Scaffold Kit CLI creates a boilerplate of destroy
command which behavior is what we want most of the time.

Now we've finished our blog scaffold tool. Congratulations!

You can navigate to next guide post if you are not interested in what goes on
behind the scenes.

## Destroy in depth

The destroy command file has two parts:
1. dynamic options resolving
2. the execution of 'black magic'

The option definition looks like this:

```js
options: (input) => {
  const command = loadCommand(app, input.args[0]);
  return getCommandOptions(app, command, input);
},
```

It reads the original command name from the arguments and loads the requested
command. It then uses `getCommandOptions` to get it's command options.

The execution looks like this:

```js
execute: async ({ args, options, wd }) => {
  const [commandName, ...commandArgs] = args;
  await executeCommand(
    app,
    loadCommand(app, commandName),
    { args: commandArgs, options, wd }
  );
  replaceInstructions(reverse(map(getInstructions(), revertInstruction)));
}
```

It uses `executeCommand` to execute the original command. Remember that it's
not immediately executed. We revert every instruction in the executor
instruction stack and reverse their order. When Scaffold Kit is executing the
instructions, it executes the opposite of the original instructions.

Scaffold Kit has a very strong meta programming and instruction inspecting
mechanism. This is what makes powerful features like destroying implemented
easily. There are much more possibilities for us to explore.
