---
id: option-serialization
title: Option serialization
---

In a real world scenario, the large scaffold tools interact with users and
their code frequently. the scaffold tool needs to save and read user's
configurations. For example, an web server scaffold tool generates database
model for users, and user can choose which ORM to use. When creating the web
server, user needs to tell the scaffold tool which ORM to use. It's easy to
implement this with command line options, and it's the most efficient way to
use. When user creates the database models, specify ORM name as a command line
option every time is redundant and stupid. Thus a scaffold tool needs to have
a way to read project's default options. This is our motivation to create a
`.rc` file mechanism.

## Demystify

When user is executing a Scaffold Kit command, Scaffold Kit tries to load
serialized options from the `.rc` file and then serializes the non default user
options automatically into the `.rc` file. The `.rc` file is a json file that
simply keeps the project's serialized options. When user overwrites an option
serialized in the `.rc` file, Scaffold Kit updates the `.rc` file with the new
option value.

## Usage

First, specify a `rcFile` value in the app definition file.

```js
const app = createApp({
  appName: 'Web Server Creator',
  commandName: 'wsc',
  description: appPackage.description,
  version: appPackage.version,
  rcFile: '.wscrc.json',
  // other definitions ...
});
```

Then, mark options in app definition or command definition with
`saveToPreference`.

```js
{
  name: 'orm',
  type: String,
  description: 'the ORM to use.',
  defaultValue: 'mongoose',
  alias: 'o',
  saveToPreference: true
}
```

When necessary, Scaffold Kit creates an rc file automatically in the project's
root directory under the name the scaffold tool implementer specified and the
options are serialized here. When executing the next user command, the default
options in the rc file are read and passed into the command. If user rewrite an
options value through the command line, this option value in rc file is updated
also. However, these kind of value are most of times global to the project and
not tend to change.

Through this option serialization mechanism, we simplify scaffold tool
implementer's work to a large amount. Implementing configurations serialization
becomes several lines separated in app and command definition files. This is
really a pretty cool feature of Scaffold Kit.
