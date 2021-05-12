---
title: Scaffolding
---

# Scaffolding

Project scaffolding is a technique for auto-generating files to support a specific project structure.
PWA Studio provides a scaffolding tool to simplify project creation and help developers get started.

## Default project template

The scaffolding tool uses the `venia-concept` package as the default template for all new PWA Studio storefront projects.
When you [set up a new project][], the result is a project structure based on the files in this package.

[set up a new project]: /tutorials/setup-storefront/

Most of its UI and logic come from its `@magento/venuia-ui` and `@magento/peregrine` dependencies, so
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

With Yarn:

```sh
yarn create @magento/pwa
```

With NPM:

```sh
npm init @magento/pwa
```
