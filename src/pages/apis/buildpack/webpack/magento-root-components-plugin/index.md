---
title: Magento root components plugin
---

# Magento root components plugin

This plugin creates [unique chunks][] for each Root Component in a Magento PWA project and extension.

[unique chunks]: https://webpack.js.org/getstarted/code-splitting/

## Example

Given a `RootComponents` directory in a PWA project with the following structure:

```sh
├── Page1
│   └── index.js
├── Page2
│   └── index.js
└── Page3
    └── index.js
```

This plugin creates unique chunks for `Page1`, `Page2`, and `Page3`.
Further webpack optimization techniques, such as [`CommonsChunkPlugin`][], can be applied if needed.

[`commonschunkplugin`]: https://webpack.js.org/plugins/commons-chunk-plugin/

## Example usage

```javascript
// webpack.config.js

const path = require("path");
const { MagentoRootComponentsPlugin } = require("@magento/pwa-buildpack");

module.exports = {
  entry: {
    main: path.join(__dirname, "src"),
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
  plugins: [
    new MagentoRootComponentsPlugin({
      rootComponentsDirs: [path.join(__dirname, "src/RootComponents")], // optional
      manifestFileName: "roots-manifest.json", // optional
    }),
  ],
};
```
