---
id: command-api
title: Command API
---


| Index                                   |
| --------------------------------------- |
| [createCommand](#createcommand)         |
| [executeCommand](#executecommand)       |
| [loadCommand](#loadcommand)             |
| [getCommandOptions](#getcommandoptions) |

## createCommand

Create an Scaffold Kit command. Used for defining the scaffold tool command.

| Field           | Type                             | Description                 |
| --------------- | -------------------------------- | --------------------------- |
| Parameter 1     | [Command](data-types.md#command) | The command definition.     |
| Return value    | [Command](data-types.md#command) | The created command object. |

### Example

```js
module.exports = createCommand({
  description: 'Create a model file.',
  options: [
    {
      name: 'modelDir',
      type: String,
      description: 'where database model files are located.',
      defaultValue: 'models',
      saveToPreference: true
    }
  ],
  executeInProjectRootDirectory: true,
  execute: ({ wd, args, options }) => {
    // ... the execution
  }
});
```

## executeCommand

Execute a Scaffold Kit command. You don't need to call this most of the times.
Used for advanced meta programming. For example, the famous `destroy` command.

| Field           | Type                             | Description                           | Default value  |
| --------------- | -------------------------------- | ------------------------------------- | -------------- |
| Parameter 1     | [App](data-types.md#app)         | The app which the command belongs to. | Required       |
| Parameter 2     | [Command](data-types.md#command) | The command object.                   | Required       |
| Parameter 3     | [ExecutionContext](data-types.md#executioncontext) | The execution context. | Required    |
| Return value    | Void                             |                                       |                |

### Example

```js
// the execution of the destroy command
execute: async ({ args, options, wd }) => {
  const [commandName, ...commandArgs] = args;
  await executeCommand(
    app,
    loadCommand(app, commandName),
    { args: commandArgs, options, wd }
  );
  replaceInstructions(reverse(map(getInstructions(), reverseInstruction)));
}
```

## loadCommand

Load an app's command by its command name.

| Field           | Type                             | Description                           | Default value  |
| --------------- | -------------------------------- | ------------------------------------- | -------------- |
| Parameter 1     | [App](data-types.md#app)         | The app which the command belongs to. | Required       |
| Parameter 2     | String                           | The command's name.                   | Required       |
| Return value    | [Command](data-types.md#command) | The loaded command.                   |                |

### Example

```js
// the execution of the destroy command
execute: async ({ args, options, wd }) => {
  const [commandName, ...commandArgs] = args;
  await executeCommand(
    app,
    loadCommand(app, commandName),
    { args: commandArgs, options, wd }
  );
  replaceInstructions(reverse(map(getInstructions(), reverseInstruction)));
}
```

## getCommandOptions

Get a command's option list. A command's options definition can be dynamic.
Sometimes it's an array, sometimes it's value is an function. Sometimes a
command is a compound command, you can not get it's command options directly
from the command object. Always use this function when you want to get a
command's options.

| Field           | Type                             | Description                           | Default value  |
| --------------- | -------------------------------- | ------------------------------------- | -------------- |
| Parameter 1     | [App](data-types.md#app)         | The app which the command belongs to. | Required       |
| Parameter 2     | [Command](data-types.md#command) | The command object.                   | Required       |
| Parameter 3     | [ExecutionContext](data-types.md#executioncontext) | The execution context. | Required    |
| Return value    | Array\<[Option](data-types.md#option)\> | The command's option list.     |                |

### Example

```js
// a simple implementation of destroy command's options
options: (input) => {
  const command = loadCommand(app, input.args[0]);
  return getCommandOptions(app, command, input);
},
```
