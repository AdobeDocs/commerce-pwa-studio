---
title: UPWARD JavaScript implementation
description: Learn how to run the PWA Studio UPWARD middleware as JavaScript.
---

# UPWARD JavaScript implementation

The [`upward-js` package][] is a JavaScript implementation of an UPWARD server.
This implementation is able to run as standalone server or as an Express/Connect middleware.

[`upward-js` package]: https://github.com/magento/pwa-studio/tree/master/packages/upward-js

## Installation

Use the following command add the `upward-js` dependency to your project:

```sh
yarn add @magento/upward-js
```

<InlineAlert variant="info" slots="text"/>

If you followed the [project setup tutorial][], your project is already set up to use this implementation as an application server.

[project setup tutorial]: /tutorials/setup-storefront/

## Usage

Use the command line, server API, or middleware API to launch the `upward-js` server.

### Command line

You can make this package available to the command line by installing it globally:

```sh
yarn global add @magento/upward-js
```

Launch the server in the foreground using the following command:

```sh
upward-js-server
```

This command does not take arguments.
Instead, it uses the following environment variables for configuration:

| Variable                | Required | Description                                 |
| ----------------------- | -------- | ------------------------------------------- |
| `UPWARD_JS_UPWARD_PATH` | Yes      | The path to the server definition file.     |
| `UPWARD_JS_BIND_LOCAL`  | Yes      | This must be set to 1.                      |
| `UPWARD_JS_LOG_URL`     | No       | Prints the bound URL to stdout if set to 1. |

### Server API

Require `server` from `@magento/upward-js` in your Node script to import the server into your project.

Example:

```js
const { server } = require("@magento/upward-js");

const { app } = server({
  upwardPath: "./my-upward-server.yml",
});

app.listen(8000);
```

### Middleware API

Use `middleware` from `@magento/upward-js` to use the middleware into your project.
This middleware is compatible with Express 4, Connect, and other frameworks that use this common pattern.
It returns a Promise for a function which handles request/response pairs.

Example:

```js
const express = require("express");
const { middleware } = require("@magento/upward-js");

const app = express();

app.use(otherMiddlewaresMaybe);

app.use(middleware("./my-upward-server.yml"));
```

You can also pass an `IOAdapter` as a second argument to the middleware.
