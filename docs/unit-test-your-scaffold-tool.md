---
id: unit-test-your-scaffold-tool
title: Unit test your scaffold tool
---

To create a scalable and maintainable scaffold tool, unit test is indispensable.
Scaffold Kit is built with unit test in mind.

## How to test a scaffold tool

The typical process to test a scaffold tool can be describe as following
procedures.

1. Given a project.
2. Run a scaffold tool command in this project.
3. Files being created, deleted and updated.
4. Test if correct files are created, deleted and updated.

Some command create one or two new files. However, some command modify a lot of
files while create a lot of files and delete a lot of files. Manually testing
these changes can be cumbersome and time-consuming. 

## Generate test files

To unit test your scaffold tool, first, run the following command.

```bash
scaffold-kit test command-name
```

By running this, you get test dependencies and setup files installed. Besides,
you get example test file in `tests` directory.

## Understanding the unit test files structure
