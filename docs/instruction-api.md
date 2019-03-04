---
id: instruction-api
title: Instruction API
---

| Index                                         |
| --------------------------------------------- |
| [createFile](#createfile)                     |
| [createFiles](#createfiles)                   |
| [deleteFile](#deletefile)                     |
| [deleteFiles](#deletefiles)                   |
| [appendFile](#appendfile)                     |
| [appendFiles](#appendfiles)                   |
| [detachFromFile](#detachfromfile)             |
| [detachFromFiles](#detachfromfiles)           |
| [updateFile](#updatefile)                     |
| [updateFiles](#updatefiles)                   |
| [rollbackFile](#rollbackfile)                 |
| [rollbackFiles](#rollbackfiles)               |
| [updateJSONFile](#updatejsonfile)             |
| [updateJSONFiles](#updatejsonfiles)           |
| [rollbackJSONFile](#rollbackjsonfile)         |
| [rollbackJSONFiles](#rollbackjsonfiles)       |
| [installDependency](#installdependency)       |
| [installDependencies](#installdependencies)   |
| [removeDependency](#removedependency)         |
| [removeDependencies](#removedependencies)     |
| [runShellCommand](#runshellcommand)           |
| [runShellCommands](#runshellcommands)         |
| [undoShellCommand](#undoshellcommand)         |
| [undoShellCommands](#undoshellcommands)       |
| [keepDirectoryInGit](#keepdirectoryingit)     |
| [keepDirectoriesInGit](#keepdirectoriesingit) |

## createFile

Create a new file at given path.

| Field    | Type    | Description                                                |
| -------- | ------- | ---------------------------------------------------------- |
| content  | String  | The file's template string. Exclusive with `from`.         |
| from     | String  | Where to copy the file template. Exclusive with `content`. |
| at       | String  | The destination path.                                      |
| context  | Object  | The rendering context.                                     |

## createFiles

Create new files at given paths.

## deleteFile

Delete an existing file at given path.

| Field    | Type    | Description                                                |
| -------- | ------- | ---------------------------------------------------------- |
| at       | String  | Where the file locates.                                    |

## deleteFiles

Delete existing files at given paths.

## appendFile

Append content to an existing file at given path.

| Field    | Type    | Description                                                |
| -------- | ------- | ---------------------------------------------------------- |
| content  | String  | The new content's template string. Exclusive with `from`.  |
| from     | String  | Where to copy the file template. Exclusive with `content`. |
| at       | String  | The path of the file to be appended.                       |
| context  | Object  | The rendering context.                                     |

## appendFiles

Append content to existing files at given paths.

## detachFromFile

Remove file content at the bottom from an existing file at given path.

| Field    | Type    | Description                                                         |
| -------- | ------- | ------------------------------------------------------------------- |
| content  | String  | The content to be removed's template string. Exclusive with `from`. |
| from     | String  | Where to get the content's template. Exclusive with `content`.      |
| at       | String  | The name of the file.                                               |
| context  | Object  | The rendering context.                                              |

## detachFromFiles

Remove file content at the bottom from existing files at given paths.

## updateFile

Update an existing file at given path.

| Field      | Type             | Description                                                                |
| ---------- | ---------------- | -------------------------------------------------------------------------- |
| updator    | String -> String | The content updator. Take the original content and return the new content. |
| rollbacker | String -> String | The content rollbacker. Used for reverse transforming `rollbackFile`.      |
| at         | String           | The path of the file to be updated.                                        |

## updateFiles

Update existing files at given paths.

## rollbackFile

Rollback an existing file at given path. It takes the same arguments with
`updateFile`.

## rollbackFiles

Rollback existing files at given paths.

## updateJSONFile

Update an existing JSON file at given path.

| Field      | Type             | Description                                                                   |
| ---------- | ---------------- | ----------------------------------------------------------------------------- |
| updator    | Any -> Any       | The content updator. Take the original JSON object and return the new object. |
| rollbacker | Any -> Any       | The content rollbacker. Used for reverse transforming `rollbackJSONFile`.     |
| at         | String           | The path of the JSON file to be updated.                                      |

## updateJSONFiles

Update existing JSON files at given paths.

## rollbackJSONFile

Rollback an existing JSON file at given path. It takes the same arguments with
`updateJSONFile`.

## rollbackJSONFiles

Rollback existing JSON files at given paths.

## installDependency

Install a dependency to the working project.

| Field   | Type     | Description                                          |
| ------- | -------- | ---------------------------------------------------- |
| package | String   | The package's name.                                  |
| version | String   | The package's version.                               |
| dev     | Boolean  | Whether save to `dependencies` or `devDependencies`. |

## installDependencies

Install dependencies to the working project.

## removeDependency

Uninstall a dependency from the working project.

| Field   | Type     | Description                                          |
| ------- | -------- | ---------------------------------------------------- |
| package | String   | The package's name.                                  |

## removeDependencies

Uninstall dependencies from the working project.

## runShellCommand

Run a shell command in the working directory.

| Field          | Type     | Description                              |
| -------------- | -------- | ---------------------------------------- |
| command        | String   | The shell command to be executed.        |
| reverseCommand | String   | The reverse command. (the undo command)  |

## runShellCommands

Run shell commands in the working directory.

## undoShellCommand

Undo a shell command in the working directory. It takes the same arguments with
`runShellCommand`.

## undoShellCommands

Undo some shell commands in the working directory.

## keepDirectoryInGit

If the given path is empty, creates a `.keep` file at the given path, else does
nothing.

| Field    | Type    | Description                 |
| -------- | ------- | --------------------------- |
| at       | String  | The path to be git kept.    |

## keepDirectoriesInGit

For every given path in the given paths, if the given path is empty, creates a
`.keep` file at the given path, else does nothing.
