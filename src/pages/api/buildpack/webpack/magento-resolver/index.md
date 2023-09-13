---
title: Magento resolver
description: View detailed reference documentation about the Magento resolver webpack plugin in the PWA Studio framework.
---

# Magento resolver

An adapter that configures Webpack to resolve assets using Magento PWA conventions.
This module generates a configuration object used in the [`resolve`][] property of a Webpack config.
The configuration object tells Webpack how to traverse the filesystem structure for assets required in source files.

[`resolve`]: https://webpack.js.org/configuration/resolve/

## API

Currently, MagentoResolver does very little, but it's likely that the Magento development environment will require custom resolution rules in the future; this utility sets the precedent of the API for delivering those rules.

### `configure(options)`

**Parameters:**

- `options:` - Configuration object that describes where the PWA storefront folders are located. Must have a `root` property set to the context (root directory) of the project.

**Return:**

A [Promise][] configuration type for webpack.

[promise]: https://webpack.js.org/configuration/configuration-types/#exporting-a-promise

<InlineAlert variant="info" slots="text"/>

`MagentoResolver.configure()` is asynchronous.

## Example

In `webpack.config.js`:

```js
const buildpack = require('@magento/pwa-buildpack');
const MagentoResolver = buildpack.Webpack.MagentoResolver;

module.exports = async env => {
    const config {
        /* webpack entry, output, rules, etc */


        resolve: await MagentoResolver.configure({
            paths: {
                root: __dirname
            }
        })

    };

    return config;
}
```

The special `__dirname` variable in Node always refers to the directory containing the currently executing script file.
This is different from the "working directory", which is the current directory of the shell when the current process was started.

<InlineAlert variant="info" slots="text"/>

The example provided uses the newer, cleaner `async/await` syntax instead of using Promises directly.
