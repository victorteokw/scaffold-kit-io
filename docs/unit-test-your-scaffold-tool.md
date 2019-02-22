---
id: unit-test-your-scaffold-tool
title: Unit test your scaffold tool
---

To create a scalable and maintainable scaffold tool, unit test is indispensable.
Scaffold Kit is built with unit test in mind and it has a incredibly easy to use
while powerful unit testing utility.

## Procedures to test your scaffold tool

The typical process to test a scaffold tool can be describe as following
procedures.

1. Given a project.
2. Run a scaffold tool command in this project.
3. Files being created, deleted and updated.
4. Test if correct files are created, deleted and updated.

Some command create one or two new files. However, some command modify a lot of
files while create a lot of files and delete a lot of files. Manually testing
these changes can be cumbersome and time-consuming.

## Abstract and simplify this process

Scaffold Kit abstracts the common pattern of testing file modifications into
following steps.

1. Given a directory structure which represents the status before command,
called **fixture**.
2. Given a directory structure which represents the final status after the
command called **expected**.
3. With the directory structures above, let Scaffold Kit testing utility to
figure out how many files being updated, how many files being created, how many
files being deleted and keep untouched.
4. With these information, Scaffold Kit testing utility generates test cases
automatically for you.
5. Run the command with specified arguments that you want to test.
6. Test the **generated** files against the expected information that being
figured out in step 4.

With these concepts in mind, we can start to implement our unit test now.

## Generate test files

To unit test your scaffold tool, first, run the following command.
`command-name` is the name of the command that you want to test against.

```bash
scaffold-kit test command-name
```

By running this, you get test dependencies and setup files installed. Besides,
you get example test file in `tests` directory.

## Understanding the unit test file

A newly generated unit test file looks like this.

```js
const path = require('path');
const {
  setupTestCase,
  tearDownTest,
  runTestCase,
  iterateExpectedFiles
} = require('scaffold-kit-quality-testing');
const app = require('../../lib/app');

describe('heck command: ', () => {

  describe('TODO: update your describing here', () => {
    const handle = setupTestCase({
      app,
      expects: path.join(__dirname, '../expected/heck/example'),
      fixtures: path.join(__dirname, '../fixtures/heck/example'),
      command: 'heck'
    });
    beforeAll(runTestCase(handle));
    afterAll(tearDownTest(handle));
    iterateExpectedFiles(handle, ({ message, expected, generated }) => {
      it(message, () => {
        expect(generated()).toBe(expected);
      });
    });
  });

});
```

We require unit test utility functions `setupTestCase`, `tearDownTest`,
`runTestCase` and `iterateExpectedFiles` from Scaffold Kit testing utility. To
test a command, create a describe block and create a handle. Specify the app
and the command input (can be a long string like `'destroy blog --remove-git'`
or an array of tokens like `['destroy', 'blog', '--remove-git']`). Point the
`expects` and `fixtures` to the directories those files are located. And hook
`runTestCase` and `tearDownTest` into `beforeAll` and `afterAll` blocks. Then
let Scaffold Kit testing utility generate `it` blocks for us. When running
`npm test`, you get result like this.

```txt
PASS  tests/commands/heckTest.js
 heck command:
   TODO: update your describing here
     ✓ keeps file 'existing.txt'. (5ms)
     ✓ creates file 'heck.txt'.
```

## Conclusion

Depending on the complexity of your scaffold tool, the structure of unit tests
are depend on you. However you set up the tests and organize the test structure,
the Scaffold Kit testing utility is essential for testing the scaffold tool
command behavior. The Scaffold Kit testing utility reduce your unit test code to
the minimum quantity and doesn't create redundant code for you. For a large
project, you are tend to unit test a lot of different kind of code other than
command. You can easily refactor your unit test code as it grows.
