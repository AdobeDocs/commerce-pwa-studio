---
title: Scaffolding
description: Learn how the PWA Studio framework uses scaffolding to autogenerate required files for a project.
---

# Scaffolding

Project scaffolding is a technique for auto-generating required files to support a specific project structure.
PWA Studio provides a scaffolding tool to simplify project creation and help developers get started.

## Default project template

The scaffolding tool uses the `venia-concept` package as the default template for all new PWA Studio storefront projects.
When you [set up a new project][], the result is a project structure based on the files in this package.

[set up a new project]: /tutorials/setup-storefront/

Most of its UI and logic come from its `@magento/venia-ui` and `@magento/peregrine` dependencies, so
it has very little code in its own project folder.

Customizing these projects is as simple as importing small pieces of `venia-ui` and combining them with custom code.

For more information about the project template, see [Project Templates][].

[project templates]: /guides/packages/buildpack/project-templates/

## Scaffolding commands

When you [set up a new project][] you use the `@magento/create-pwa` package.
It is a simpler interface than the [create-project][] sub-command in the [pwa-buildpack][] CLI tool.

[create-project]: /api/buildpack/cli/create-project/
[pwa-buildpack]: /api/buildpack/cli/

Since the package name begins with `create-`, it is considered a project generator and can be run simply as `@magento/pwa`.
This command launches an interactive questionnaire in the command line for configuring different parts of the project.

### Examples

<CodeBlock slots="heading, code" repeat="2" languages="sh, sh" />

#### Yarn command

```sh
yarn create @magento/pwa
```

#### NPM command

```sh
npm init @magento/pwa
```

## Scaffolding with other versions of PWA Studio

To create scaffolding for a project using an older version of PWA Studio, the required version is noted in the `create-` command.

### YARN command

`yarn global add @magento/create-pwa@1.3.1`

and then:

`create-pwa`

### NPM command

`npm init @magento/pwa@1.3.1`
