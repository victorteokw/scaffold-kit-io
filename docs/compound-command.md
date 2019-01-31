---
id: compound-command
title: Compound command
---

Scaffold Kit supports compound command. A compound command is a command that
executes as a combination of some commands. For example, when generating a set
of API, we need to generate a model definition, and a set of RESTful API.
However, some models are private and shouldn't be exposed by API. Thus, we
create a command named "model" to generate model definition, and we create
a command named "rest" to generate it's API. And finally, we create a command
named "resource" which is a combination of "model" and "rest".

The definition of a compound command looks like this:

```js
const { createCommand } = require('scaffold-kit/command');

module.exports = createCommand({
  description: 'Create API resource with model definition.',
  composedOf: ['model', 'rest'],
  composeOptions: true,
  executeInProjectRootDirectory: true
});
```

The `composeOptions` field means whether inherit the original options from the
composing commands. In most of the cases, absolutely yes.
