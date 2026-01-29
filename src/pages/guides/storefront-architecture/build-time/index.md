---
title: Build time architecture
description: Learn about the PWA Studio build time architecture.
---

# Build time architecture

The build architecture of PWA Studio is the system used to compile JavaScript and CSS source code into a production-ready PWA storefront application.

## Backend application dependency

PWA Studio is part of Adobe Commerce's [service-oriented architecture][] vision.
This vision minimizes dependencies by separating the merchant-facing store admin and the shopper-facing storefront application.
Separating these two applications minimizes the dependencies between them.

[service-oriented architecture]: https://en.wikipedia.org/wiki/Service-oriented_architecture

The Venia build system respects this principle by running the build process independent from the Adobe Commerce or Magento Open Source core application.
However, the build system does use the application's API at compilation time for additional validation and optimization of storefront code.

## Repository organization

Unlike Adobe Commerce and Magento Open Source themes, the source code for a PWA Studio storefront does not need to be co-located with the application code.
A PWA Studio storefront and its backend service are two separate applications, so
their codebase is separate from each other.

The Venia concept storefront uses the `yarn` package for dependency management, but
storefronts built using PWA Studio can also use NPM to manage dependencies and run scripts.

Early adopters of PWA Studio have cloned the [`pwa-studio` repository][] and made direct customizations to the Venia concept source.
This can lead to conflicts when updating to the latest version of the codebase.
The preferred approach is to add PWA Studio tools and libraries as dependencies in a project.

[`pwa-studio` repository]: https://github.com/magento/pwa-studio/

The recommended way of getting started is to use the scaffolding tool to [setup a new storefront project][].

[setup a new storefront project]: /tutorials/setup-storefront/index.md

## Build pipeline

The build pipeline is the mechanism that consumes the project source code to generate production-ready files.
This process includes code [transpilation][] and smart script bundling.
Like most modern Web compilation tools, it is built on [NodeJS][].

[transpilation]: https://en.wikipedia.org/wiki/Source-to-source_compiler
[nodejs]: https://nodejs.org/en/about/

The main tools used for the build pipeline are [Babel][] and [Webpack][].
The Buildpack library provides a convenient API for configuring these tools, but the underlying API for building a PWA is a direct configuration of Babel and Webpack.

[babel]: https://babeljs.io
[webpack]: https://webpack.js.org/

The Venia example storefront project contains an opinionated build pipeline setup, using Buildpack's `configureWebpack` API, but
developers can also use the PWA-Studio build libraries and configurations to define custom pipelines.

### Venia build steps

The following sections provide insight into the processes that make up Venia's build pipeline.

#### Starting a build

Venia's build process begins at the command prompt.
It is compatible with OSX and most Linux environments that use a `bash` shell.

PWA Studio projects use [NPM scripts][] to organize frequently used commands.
These `yarn run` commands are found in the `scripts` section of the Venia storefront's [package.json][] file.

[npm scripts]: https://docs.npmjs.com/misc/scripts
[package.json]: https://github.com/magento/pwa-studio/blob/develop/packages/venia-concept/package.json

Use the `build` command to start the build process:

```sh
yarn run build
```

#### Cleanup step

The build process runs a `clean` script to remove old artifacts from the Venia concept's `dist` directory before generating the code.

#### Environment validation

The next phase uses the `buildpack load-env` command to load and validate the `.env` file, which describes the store project configuration.
This file is found in the root directory of the Venia concept project.

See [Configuration management][] for more information.

[configuration management]: /guides/general-concepts/configuration/index.md

<InlineAlert variant="info" slots="text"/>

If there is no `.env` file in your project, create one with the [`buildpack create-env-file` command][].

[`buildpack create-env-file` command]: /api/buildpack/cli/create-environment-file/index.md

#### Query validation

After the environment validation phase, the build runs the `validate-queries` script.
This script uses the [`graphql-cli-validate-magento-pwa-queries`][] tool to analyze the GraphQL queries in the project and validates them against the schema downloaded from the configured Magento instance.

[`graphql-cli-validate-magento-pwa-queries`]: https://github.com/magento/pwa-studio/blob/develop/packages/graphql-cli-validate-magento-pwa-queries

<InlineAlert variant="info" slots="text"/>

The connected Adobe Commerce or Magento Open Source instance is defined by the `MAGENTO_BACKEND_URL` environment variable.

#### Webpack execution

The final step in the build process uses the webpack CLI (`webpack`) to process files into bundles.
The `webpack.config.js` file in the storefront project's root configures webpack to use external tools, such as Babel and Workbox, during file processing and bundle creation.

The artifacts generated by webpack are located in the `dist` folder.
These are static files ready to be served from an HTML document's app shell.

When a browser loads these files, it launches a single-page application that is the Venia storefront.

### Other build features

The following build features are used mainly in a development environment.
They are not part of the normal production build process.

#### Watch mode

The `watch` script launches a development server and a persistent compiler process that monitors the source code for changes.
When a change is detected, it initiates an incremental rebuild instead of a full build to keep the application in the browser up to date.

This feature allows you to make edits in the code and see the changes in the application without going through the full build process.

#### Linting and testing

The Venia concept project also contains scripts for formatting (`yarn run prettier`), style analysis (`yarn run lint`), and running unit tests (`yarn test`).

Use these scripts to keep your codebase well-formatted and test functionality.
