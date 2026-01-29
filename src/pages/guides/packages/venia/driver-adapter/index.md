---
title: Driver and adapter components
description: Learn how components from the Venia reference storefront give PWA Studio's React components access to external dependencies. 
---

# Driver and adapter components

Venia's driver and adapter components give PWA Studio's React components access to components from external dependencies, such as the _Link_ component from the _react-router-dom_ package.

## Driver component

The [driver.js file][] in Venia and the default project template returns a centralized module for Venia components that rely on external dependencies.
Instead of importing these dependencies directly, Venia components import them from the virtual dependency `@magento/venia-drivers`.

[driver.js file]: https://github.com/magento/pwa-studio/blob/develop/packages/venia-concept/src/drivers.js

```js
import { Link, resourceUrl } from "@magento/venia-drivers";
```

The `@magento/venia-drivers` dependency is not listed in the `package.json` file or available on the NPM registry.
It is a virtual dependency specified by the following entry in the `package.json` file:

```json
"browser": {
  "@magento/venia-drivers": "src/drivers"
}
```

Webpack treats this package.json configuration as equivalent to a Webpack alias configuration, as required by [this draft specification][].
An app which imports anything from `@magento/venia-ui` will substitute the virtual dependency for the real file at build time.

[this draft specification]: https://github.com/defunctzombie/package-browser-field-spec

## Adapter component

The [adapter component][] is a Venia driver that wraps around your application code to satisfy the implicit external dependencies of the Venia components it uses.
These dependencies include the [ApolloProvider][], [ReduxProvider][], and [BrowserRouter][].

Some of the Venia components in your storefront will not work if you do not wrap your application with the Venia adapter.
If you [set up your project][] using the scaffolding tool, your project code already wraps the application with the adapter.

[adapter component]: https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/drivers/adapter.js
[apolloprovider]: https://www.apollographql.com/docs/react/get-started#connect-your-client-to-react
[reduxprovider]: https://react-redux.js.org/api/provider
[browserrouter]: https://reactrouter.com/en/main/router-components/browser-router
[set up your project]: /tutorials/setup-storefront/
