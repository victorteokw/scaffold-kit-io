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

## createFiles

Create new files at given paths.

## deleteFile

Delete an existing file at given path.

## deleteFiles

Delete existing files at given paths.

## appendFile

Append content to an existing file at given path.

## appendFiles

Append content to existing files at given paths.

## detachFromFile

Remove file content at the bottom from an existing file at given path.

## detachFromFiles

Remove file content at the bottom from existing files at given paths.

## updateFile

Update an existing file at given path.

## updateFiles

Update existing files at given paths.

## rollbackFile

Rollback an existing file at given path.

## rollbackFiles

Rollback existing files at given paths.

## updateJSONFile

Update an existing JSON file at given path.

## updateJSONFiles

Update existing JSON files at given paths.

## rollbackJSONFile

Rollback an existing JSON file at given path.

## rollbackJSONFiles

Rollback existing JSON files at given paths.

## installDependency

Install a dependency to the working project.

## installDependencies

Install dependencies to the working project.

## removeDependency

Uninstall a dependency from the working project.

## removeDependencies

Uninstall dependencies from the working project.

## runShellCommand

Run a shell command in the working directory.

## runShellCommands

Run shell commands in the working directory.

## undoShellCommand

Undo a shell command in the working directory.

## undoShellCommands

Undo some shell commands in the working directory.

## keepDirectoryInGit

If the given path is empty, creates a `.keep` file at the given path, else does
nothing.

## keepDirectoriesInGit

For every given path in the given paths, if the given path is empty, creates a
`.keep` file at the given path, else does nothing.
