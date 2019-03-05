---
id: execution-api
title: Execution API
---

| Index                                   |
| --------------------------------------- |
| [useTemplatesFrom](#usetemplatesfrom)   |
| [pushInstruction](#pushinstruction)     |
| [pushInstructions](#pushinstructions)   |
| [getInstructions](#getinstructions)     |
| [replaceInstructions](#replaceinstructions) |
| [reverseInstruction](#reverseinstruction) |
| [setExecutorOption](#setexecutoroption) |
| [resetExecutor](#resetexecutor)         |

## useTemplatesFrom

Tell Scaffold Kit executor where to find template files with relative filenames.
If called multiple times, the latter takes precedence.

| Field           | Type             | Description                    |
| --------------- | ---------------- | ------------------------------ |
| Parameter 1     | String           | The path to the templates dir. |
| Return value    | Void             |                                |

## pushInstruction

Push an instruction onto the executor's instruction stack. Should be called
inside the execution block. This is a low level programming tool. For code
simplicity and readability, use [instruction shortcuts](instruction-api.md)
instead.

| Field           | Type                             | Description                           | Default value  |
| --------------- | -------------------------------- | ------------------------------------- | -------------- |
| Parameter 1     | Object\<String, Object &#124; Array\<Object\>\> | The instruction.       | Required       |
| Return value    | Void                             |                                       |                |

### Example

```js
// push single instruction
pushInstruction({
  'createFile': {
    from: '_README.md',
    at: 'README.md',
    context: { title: "New Website Title" }
  }
});

// push multiple instructions
pushInstruction({
  'createFiles': [
    {
      content: 'module.exports = {};',
      at: 'emptyObject.js'
    },
    {
      content: 'module.exports = null;',
      at: 'null.js'
    }
  ]
});
```

## pushInstructions

Push multiple instructions onto the executor's instruction stack. Should be
called inside the execution block. This is a low level programming tool. For
code simplicity and readability, use [instruction shortcuts](instruction-api.md)
instead.

| Field           | Type                             | Description                           | Default value  |
| --------------- | -------------------------------- | ------------------------------------- | -------------- |
| Parameter 1     | Array\<Object\<String, Object &#124; Array\<Object\>\>\> | The instructions. | Required   |
| Return value    | Void                             |                                       |                |

### Example

```js
// push multiple instructions in a single call
pushInstructions([
  {
    createFile: {
      from: '_.gitignore',
      at: '.gitignore'
    }
  },
  {
    keepDirectoryInGit: {
      at: 'doNotDelete'
    }
  }
]);
```

## getInstructions

Get all instructions from the executor. The instructions are copied. You cannot
modify the instructions directly here. To replace all instructions in the stack,
use [replaceInstructions](#replaceinstructions).

| Field           | Type                             | Description                           | Default value  |
| --------------- | -------------------------------- | ------------------------------------- | -------------- |
| Return value    | [Instruction](data-types.md#instruction) | The instruction object.       |                |

## replaceInstructions

Replace the instructions in the executor's instruction stack.

| Field           | Type                             | Description                           | Default value  |
| --------------- | -------------------------------- | ------------------------------------- | -------------- |
| Parameter 1     | [Instruction](data-types.md#instruction) | The instruction object.       | Required       |
| Return value    | Void                                     |                               |                |

## reverseInstruction

Get a new instruction which has the opposite behavior to the given instruction.
For example, given `createFile` at `some/path`, the return value is `deleteFile`
at `some/path`.

| Field           | Type                             | Description                           | Default value  |
| --------------- | -------------------------------- | ------------------------------------- | -------------- |
| Parameter 1     | [Instruction](data-types.md#instruction) | The given instruction.        | Required       |
| Return value    | [Instruction](data-types.md#instruction) | The reverse instruction.      |                |

## setExecutorOption

Setting the overall default behavior of the executor.

| Field           | Type                             | Description                           | Default value  |
| --------------- | -------------------------------- | ------------------------------------- | -------------- |
| Parameter 1     | String                           | The option key.                       | Required       |
| Parameter 2     | Any                              | The option value.                     | Required       |
| Return value    | Void                             |                                       |                |

### Example

```js
// Setting executor option in the app before execution hook.
const path = require('path');
const appPackage = require('../package.json');
const { createApp } = require('scaffold-kit/app');
const { setExecutorOption } = require('scaffold-kit/executor');

const app = createApp({
  appName: 'Amur',
  commandName: 'amur',
  description: appPackage.description,
  version: appPackage.version,
  rcFile: '.amurrc.json',
  options: [
    {
      name: 'overwrite',
      type: Boolean,
      description: 'whether overwrite existing file.',
      defaultValue: false,
      saveToPreference: false
    },
    {
      name: 'mockInstall',
      type: Boolean,
      description: 'update dependency list without installing.',
      defaultValue: false,
      saveToPreference: false
    },
    {
      name: 'silent',
      type: Boolean,
      description: 'whether suppress output.',
      defaultValue: false,
      saveToPreference: false
    }
  ],
  commands: {
    'app': path.join(__dirname, './commands/app'),
    'model': path.join(__dirname, './commands/model'),
    'schema': path.join(__dirname, './commands/schema'),
    'resolver': path.join(__dirname, './commands/resolver'),
    'resource': path.join(__dirname, './commands/resource'),
    'nestable': path.join(__dirname, './commands/nestable'),
    'uploader': path.join(__dirname, './commands/uploader'),
    'destroy': path.join(__dirname, './commands/destroy')
  },
  beforeExecution: ({ options }) => {
    if (options.overwrite) {
      setExecutorOption('overwrite', true);
    }
    if (options.silent) {
      setExecutorOption('silent', true);
    }
    if (options.mockInstall) {
      setExecutorOption('mock', true);
    }
  }
});

module.exports = app;
```

## resetExecutor

Clear all cached executor data and reset the executor to the initial status.

| Field           | Type                             | Description                           | Default value  |
| --------------- | -------------------------------- | ------------------------------------- | -------------- |
| Return value    | Void                             |                                       |                |
