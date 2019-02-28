---
id: behaviorals
title: Behaviorals
---

This is a very advanced feature. Feel free to pass this by.

In a complicated scaffold tool, the generation depends on a lot of variables.
For example:
1. Generate different content based on operation system.
2. Generate different content based on the version of a dependency.
3. Generate different content based on the parent directory of the project
directory.
4. Generate different content based on user option input.

Currently, only generating different content depend on user option input are
supported. The full support of behavioral is planned in next major version of
Scaffold Kit.

When a behavioral is activated, it can have additional option definitions. In
the next version, behavioral is a first class executable just like app and
command.

In the current version, we define behaviorals in the app definition file like
this.

```js
appName: 'Amur',
commandName: 'amur',
description: appPackage.description,
version: appPackage.version,
rcFile: '.amurrc.json',
options: [...], // after the options definition
behaviorals: [
  {
    name: 'Supported ORMs',
    description: 'The ORM to be used in the project.',
    optionName: 'orm',
    values: [
      {
        name: 'mongoose',
        description: 'The mongoose ODM.',
        options: [
          {
            name: 'primaryKey',
            type: String,
            description: 'the primary key of data model.',
            defaultValue: '_id',
            saveToPreference: true
          }
        ]
      },
      {
        name: 'sequelize',
        description: 'The sequelize ORM.',
        options: [
          {
            name: 'primaryKey',
            type: String,
            description: 'the primary key of data model.',
            defaultValue: 'id',
            saveToPreference: true
          },
          {
            name: 'adaptor',
            type: String,
            description: 'which sequelize adaptor to use',
            defaultValue: 'postgres',
            saveToPreference: true
          }
        ]
      }
    ]
  }
]
```

When option `orm`'s value is `sequelize`, it has one more field than `mongoose`,
the `adaptor` field. And the default value for `primaryKey` is different.

In the next major version of Scaffold Kit, this feature will be renovated.
