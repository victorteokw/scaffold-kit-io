---
id: roadmap
title: Roadmap
---

Scaffold Kit is a framework for implementing scaffold tool. There are quite some
aspects that we can improve. In the next planned version of Scaffold Kit, these
points are mainly focused:

## Support custom template engines

The current version of Scaffold Kit only supports [EJS](https://ejs.co) template
engine. Template engines like [Mustache](https://mustache.github.io) should be
supported. And this feature should be extensible and customizable.

## Unified middleware syntax

In the current version, we define app and command with it's own object shape and
syntax. Also, we define `beforeHook` and `afterHook` in the definitions. This
makes reusable logic across different commands hard to be organized. Wouldn't be
nice if we can create middlewares and apply middlewares on commands? Further
more, we can unify app, command and behavioral's syntax. Use a unified concept
called 'executable'. In this way, we can group these executables any way we
want. We can combine executables to form a much more specific execution
structure for different kind of scaffold tools which focus on different points.
Basically, a 'executable' will be a simple async function with two arguments
`ctx` and `next` in a manner similar to [Koa](https://koajs.com).

## Extensible executor instructions

In the current version, executor instructions are limited. Although we could get
most of features from `createFile` and `updateFile`, we can still improve code
structure and readability by allowing custom executor instructions. This is also
good for code reusing and in the future, maybe plugin system.

## First level behavioral support

In the current version, behavioral and command have ambiguous boundaries.
Although this is the nature of scaffold tool command, and they have intersection
in what part of files belongs to which executable. We can still give our users
choices to decide which feature should be on which side and make behavioral and
command orchestrate together.

## Customized reporter

Just like testing frameworks, we should give our user better experience by being
able to use custom reporter.

## Take participate in

Please refer to [Scaffold Kit on
Github](https://github.com/zhangkaiyulw/scaffold-kit/) for future discussions
about the roadmap. Feel free to [create an
issue](https://github.com/zhangkaiyulw/scaffold-kit/issues/new) if you have any
good advice.
