---
id: execution-api
title: Execution API
---

| Index                                   |
| --------------------------------------- |
| [useTemplatesFrom](#usetemplatesfrom)   |
| [pushInstruction](#pushinstruction)     |
| [pushInstructions](#pushInstructions)   |
| [getInstructions](#getInstructions)     |
| [replaceInstructions](#replaceInstructions) |
| [revertInstruction](#revertInstruction) |
| [setExecutorOption](#setExecutorOption) |
| [resetExecutor](#resetExecutor)         |

## useTemplatesFrom

Tell Scaffold Kit executor where to find template files with relative filenames.
If called multiple times, the latter takes precedence.

| Field           | Type             | Description                    |
| --------------- | ---------------- | ------------------------------ |
| Parameter 1     | String           | The path to the templates dir. |
| Return value    | Void             |                                |

## pushInstruction

Push an instruction into the executor's instruction stack. Should be called
inside the execution block. This is a low level programming tool. For code
simplicity and readability, use [instruction shortcuts](instruction-api.md)
instead.

| Field           | Type                             | Description                           | Default value  |
| --------------- | -------------------------------- | ------------------------------------- | -------------- |
| Parameter 1     | Object\<String, Object &#124; Array\<Object\>\> | The instruction.       | Required       |
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
  replaceInstructions(reverse(map(getInstructions(), revertInstruction)));
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
  replaceInstructions(reverse(map(getInstructions(), revertInstruction)));
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
