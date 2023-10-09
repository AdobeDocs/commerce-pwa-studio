---
title: Service worker
description: View detailed reference documentation about the service worker webpack plugin in the PWA Studio framework.
---

# Service worker

A webpack plugin for configuring a ServiceWorker for different PWA development scenarios.
This plugin is a wrapper around the [Google Workbox Webpack Plugin][].
It generates a caching ServiceWorker based on assets emitted by webpack.

[google workbox webpack plugin]: https://developers.google.com/web/tools/workbox/guides/generate-service-worker/

## Configurations

The following configurations are available for this plugin:

- **normal development** - the ServiceWorker is disabled
- **service worker debugging** - the ServiceWorker and hot-reloading are enabled.

## `ServiceWorker(options)`

Plugin constructor for the `ServiceWorkerPlugin` class.

### Parameters

- **`options: PluginOptions`** - Configuration object for the ServiceWorkerPlugin

The `PluginOptions` object contains the following properties:

| Property                       | Type                | Description                                                                                                                                   |
| ------------------------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `env`                          | `EnvironmentObject` | **Required.** An object that represents the current environment.                                                                              |
| `paths`                        | `object`            | **Required.** Map of important project locations. Must at least contain a `root` property set to the context (root directory) of the project. |
| `enableServiceWorkerDebugging` | `boolean`           | Toggles service worker debugging.                                                                                                             |
| `serviceWorkerFilename`        | `string`            | **Required.** The name of the ServiceWorker file this project creates.                                                                        |
| `runtimeCacheAssetPath`        | `string`            | A remote URL or root path to assets the ServiceWorker should cache during runtime.                                                            |

The `EnvironmentObject` contains the following properties:

| Property | Type     | Description                                |
| -------- | -------- | ------------------------------------------ |
| `mode`   | `string` | Must be **development** or **production**. |

## Example

In `webpack.config.js`:

```js
const path = require("path");
const buildpack = require("@magento/pwa-buildpack");
const ServiceWorkerPlugin = buildpack.Webpack.ServiceWorkerPlugin;

module.exports = async (env) => {
  const config = {
    /* webpack config, i.e. entry, output, etc. */
    plugins: [
      /* other plugins */
      new ServiceWorkerPlugin({
        env: {
          mode: "development",
        },

        paths: {
          output: path.resolve(__dirname, "web"),
        },
        enableServiceWorkerDebugging: true,
        serviceWorkerFileName: "sw.js",
        runtimeCacheAssetPath: "https://cdn.url",
      }),
    ],
  };

  return config;
};
```

## Service worker debugging

When `PluginOptions.enableServiceWorkerDebugging` is set to `true`, hot reloading is enabled and the ServiceWorker is active in the document root.

When this value is set to `false`, the ServiceWorker is disabled to prevent cache interruptions when hot reloading assets.
