---
id: introduction
title: Introduction
sidebar_label: Introduction
---

Scaffold Kit is a set of building blocks for creating node.js scaffold tools.

It simplifies the process of creating a scaffold tool, reduces redundant
boilerplate code.

## Motivation

There are unlimited ways to setup a node.js project. Every team and every
developer has their own best practices. When start off a new project, we need
to keep the best practices that we've accumulated thus we copy code from
existing projects. Doing this is cumbersome and strange bugs may occur. Using a
scaffold tool to create a starter project with configurations is a more elegant
way to achieve this.

However, when created several scaffold tools or creating a complicated scaffold
tool, there are a lot of common patterns and features. These logics should
reside outside of the scaffold tool itself, founding the basic architecture of
scaffold tools.

## Core concepts

* __app__ the app is the scaffold tool itself. Since the scaffold tool is a
command line tool, an app has several subcommands named commands and app level
options. Besides, the app defines the scaffold tool's description and version.

* __command__ the command represents a user's action.

* __instruction__ the instruction.

## Features included

## Learn Scaffold Kit

* Installation.
* Learn Saffold Kit through this [tutorial](tutorial).
* Read the [API documentation](api-doc).
