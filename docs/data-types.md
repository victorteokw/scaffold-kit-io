---
id: data-types
title: Data types
---

| Index                                  |
| -------------------------------------- |
| [App](#app)                            |
| [Command](#command)                    |
| [ExecutionFunc](#executionfunc)        |
| [ExecutionContext](#executioncontext)  |
| [Option](#option)                      |
| [Behavioral](#behavioral)              |
| [BehavioralValue](#behavioralvalue)    |

## App

The app object represents an app.

| Field             | Type                             | Required | Description                              |
| ----------------- | -------------------------------- | -------- | ---------------------------------------- |
| `appName`         | String                           | Required | The tool's human readable name.          |
| `commandName`     | String                           | Required | The tool's command line executable name. |
| `version`         | String                           | Required | The tool's version.                      |
| `description`     | String                           | Required | Single line description of the tool.     |
| `usage`           | String                           | Optional | The tool's command line usage.           |
| `rcFile`          | String                           | Optional | The tool's .rc file name.                |
| `options`         | Array\<[Option](#option)\>       | Required | The tool's command line options.         |
| `commands`        | Object\<String\>                 | Required | The tool's command map which keys are command string names and values are absolute paths of the command file. |
| `behaviorals`     | Array\<[Behavioral](#behavioral)\> | Optional | The tool's behavioral definitions.     |
| `beforeExecution` | [ExecutionFunc](#executionfunc)  | Optional | The app's before execution hook.         |
| `afterExecution`  | [ExecutionFunc](#executionfunc)  | Optional | The app's after execution hook.          |

## Command

The command object represents a command.

| Field             | Type                             | Required | Description                              |
| ----------------- | -------------------------------- | -------- | ---------------------------------------- |
| `description`     | String                           | Required | Single line description of the command.  |
| `usage`           | String                           | Optional | The command's command line usage.        |
| `options`         | Array\<[Option](#option)\>       | Required | The command's command line options.      |
| `executeInProjectRootDirectory` | Boolean            | Optional | Whether jump to project's root dir.      |
| `execution`       | [ExecutionFunc](#executionfunc)  | Optional | The execution of the command.            |
| `beforeExecution` | [ExecutionFunc](#executionfunc)  | Optional | The command's before execution hook.     |
| `afterExecution`  | [ExecutionFunc](#executionfunc)  | Optional | The command's after execution hook.      |
| `composedOf`      | Array\<String\>                  | Optional | Composing command names.                 |
| `composingParams` | Object                           | Optional | Additional executing params passed to execution of composing command. |
| `composeOptions`  | Boolean                          | Optional | Whether get options from composing command definitions. |

* For atomic command, `execution` is required, and `composedOf` must not be specified.
* For compound command, `composedOf` is required, and `execution` must not be specified.

## ExecutionFunc

| Type           | Parameters | Return value |
| -------------- | ---------- | ------------ |
| Async Function | [ExecutionContext](#executioncontext) | [ExecutionContext](#executioncontext) or Void |

In the `beforeExecution`, if you return any field defined in `ExecutionContext`,
the field in the following execution context is automatically updated. Simply
speaking, you can modify execution context in `beforeExecution` hook by
returning some fields in it.

## ExecutionContext

The execution context represents an execution's context.

| Field     | Type             | Description                    |
| --------- | ---------------- | ------------------------------ |
| `wd`      | String           | The current working directory. |
| `args`    | Array\<String\>  | The command line arguments.    |
| `options` | Object\<String\> | The command line options.      |

## Option

The option object represents command line option definition. It's a extension of
[command-line-args](https://github.com/75lb/command-line-args)'s option object.

| Field              | Type    | Required | Description                                  |
| ------------------ | ------- | -------- | -------------------------------------------- |
| `name`             | String  | Required | The camel cased string of the option's name. |
| `saveToPreference` | Boolean | Optional | Whether automatically save this option's value into `.rc` file. |

See [command-line-args](https://github.com/75lb/command-line-args) package for more fields.

## Behavioral

The behavioral object represents a behavioral definition.

| Field             | Type                                       | Required | Description                            |
| ----------------- | ------------------------------------------ | -------- | -------------------------------------- |
| `name`            | String                                     | Required | The behavioral's human readable name.  |
| `description`     | String                                     | Required | The behavioral's description.          |
| `optionName`      | String                                     | Required | The behavioral switcher option's name. |
| `values`          | Array<[BehavioralValue](#behavioralvalue)> | Required | The behavioral's values.               |

## BehavioralValue

The behavioral value object represents a behavioral's value.

| Field             | Type                             | Required | Description                                |
| ----------------- | -------------------------------- | -------- | ------------------------------------------ |
| `name`            | String                           | Required | The behavioral value's name.               |
| `description`     | String                           | Required | The behavioral value's description.        |
| `options`         | Array\<[Option](#option)\>       | Required | The behavioral value's additional options. |
