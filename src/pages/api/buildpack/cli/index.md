---
title: Buildpack Command Line Interface
---

# Buildpack Command Line Interface

The `buildpack` command is a command line toolkit for managing different pieces of your storefront project using subcommands.

## Running the `buildpack` command

You can use the `buildpack` command as a project dependency or directly using `npx`.

### As a project dependency

A project with the `@magento/pwa-buildpack` dependency installed can use the `buildpack` command in its NPM scripts:

```json
"scripts": {
  "load-env": "buildpack load-env ."
}
```

With this example, you can run `npm run-script load-env` or `yarn run load-env` to use the local copy of the `buildpack` CLI.

### Using `npx`

Run `buildpack` directly using NPM's `npx` tool, which installs packages and runs their CLIs in a single command:

```sh
npx @magento/pwa-buildpack <command>
```

<InlineAlert variant="warning" slots="text"/>

You should not install the `buildpack` command globally with `yarn global add` or `npm install --global`.
Individual projects should use their own versions, to guarantee expected behavior.

## Available subcommands

The `buildpack` CLI provides the following subcommands:

- [`create-custom-origin`][] - Gets or creates a trusted SSL certificate for local PWA development.
- [`create-env-file`][] - Generates a new `.env` file in the current directory.
- [`load-env`][] - Loads and validates the current environment.

[`create-custom-origin`]: create-custom-origin/
[`create-env-file`]: create-environment-file/
[`load-env`]: load-environment-file/
