---
id: app-api
title: App API
---

| Index                                  |
| -------------------------------------- |
| [createApp](#createapp)                |
| [executeApp](#executeapp)              |

## createApp

Create an Scaffold Kit app. Used for defining the scaffold tool app.

| Field           | Type                     | Description             |
| --------------- | ------------------------ | ----------------------- |
| Parameter 1     | [App](data-types.md#app) | The app definition.     |
| Return value    | [App](data-types.md#app) | The created app object. |

### Example

```js
const app = createApp({
  appName: 'Amur',
  commandName: 'amur',
  description: appPackage.description,
  version: appPackage.version,
  rcFile: '.amurrc.json',
  options: [
    {
      name: 'orm',
      type: String,
      description: 'the ORM to use.',
      defaultValue: 'mongoose',
      alias: 'o',
      saveToPreference: true,
      behavioral: true
    },
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
```

## executeApp

Execute the created Scaffold Kit app.

| Field           | Type                     | Description                      | Default value  |
| --------------- | ------------------------ | -------------------------------- | -------------- |
| Parameter 1     | [App](data-types.md#app) | The created app.                 | Required       |
| Parameter 2     | Array\<String\>          | The command line arguments list. | `process.argv` |
| Return value    | Void                     |                                  |                |

### Example

```js
#!/usr/bin/env node
const { executeApp } = require('scaffold-kit/app');
const app = require('./app');

executeApp(app, process.argv);
```
