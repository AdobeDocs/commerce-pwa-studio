# Explore the files

Learn about the files found inside a new storefront project.

## Source directory

The `src` directory holds your storefront project's source code.
This is where you add your own custom, client-side code for your storefront.

During the build process, Webpack scans this folder and creates bundles from these files.
These bundles are small chunks of your storefront that the server provides to the browser as needed.

After scaffolding a new project, the `src` directory looks like the following:

```tree
src
├── .storybook
├── ServiceWorker
├── drivers.js
├── index.js
├── registerSW.js
└── store.js
```

### `.storybook`

This directory contains configurations for [Storybook][] testing.
You can delete this directory if you do not need it.

### `ServiceWorker`

The ServiceWorker directory contains all the logic for providing [service worker features][].
Examples of service workers features include push notifications, background sync, and even offline mode for your storefront.

The service worker also gives you the ability to intercept and handle network requests.
This gives you better control over your site's client-side caching logic.

### `drivers.js`

The `drivers.js` file is a centralized module that provides non-PWA-Studio dependencies, such as GraphQL clients, React-router components, Redux components, etc.
Centralizing these modules into a virtual dependency makes it easy to switch out or override these components

You have access to these dependencies through the virtual `@magento/venia-drivers` dependency:

```js
import { Link, resourceUrl } from '@magento/venia-drivers';
```

Edit the entry in the `browser` section of the `package.json` file if you want to change the name.

For more information about Venia's drivers and adapters pattern, see: [Modular components][]

### `index.js`

The `index.js` file is the entry point for your application.
It imports the Venia application as a single component and renders it in the DOM.
It also wraps it up inside components that provide the drivers and application context.

### `registerSW.js`

This file registers the service worker when users visit the storefront.
The contents of this file is standard, boilerplate code and does not need modifications.

### `store.js`

The `store.js` file connects the Peregrine global store with your project's UI components.
Here, you can add your custom reducers and enhancers to Peregrine's global store.

For more information about state management, see: [State management][]

## Non-source files

These are important files outside the source directory.

### `local-intercept.js`

This is the intercept file for your storefront project.
It lets you use the extensibility framework to make changes to the Venia application and its dependencies using Targets and Targetables.

### `webpack.config.js`

The `webpack.config.js` is a Webpack configuration file.
It uses [`configureWebpack`][] from PWA Studio's buildpack to create a configuration object for Webpack.

### `upward.yml`

The `upward.yml` file is an [UPWARD][] configuration file.
It provides instructions for how an UPWARD server implementation should respond to a request.

The `status`, `headers`, and `body` values defined in the default `upward.yml` file uses values from the `veniaResponse` object.
This object is defined in the [venia-ui package's `upward.yml` file][].

You can edit this file if you want to change how your project's UPWARD server responds to requests,
but the preferred method is to use Targetables to make these changes.

### `template.html`

The `template.html` file contains the template for the server-side rendered HTML code for your storefront's application shell.

During the build process, the [HtmlWebpackPlugin][] injects this file with dynamic data, such as project variables and imports for Webpack-generated Javascript bundles.
The script saves this new file as `dist/index.html`.
When a browser creates the initial request for your storefront application, the default `upward.yml` configuration tells the UPWARD server to respond with this index file.

As the JavaScript bundles load in the browser, the React components hydrate the different visual elements on the page with separate network requests.

### `server.js`

The `server.js` file is the script that starts the production or development server.
The script loads the `NODE_ENV` variable from the environment or your project's `.env` file to determine which server type to start.

Use the following values for `NODE_ENV`:

-   `production` - start a production server
-   `test` - start a staging server that uses staging server environment configurations
-   `development` - start a development server that uses the development server environment configurations

For more information on loading environment variables, see: [Load environment file][]

[enable sass or less support]: tutorials/enable-sass-less-support/index.md
[add a static route]: tutorials/pwa-studio-fundamentals/add-a-static-route/index.md
[modify the site footer]: tutorials/pwa-studio-fundamentals/modify-site-footer/index.md
[modular components]: venia-pwa-concept/features/modular-components/index.md
[project setup]: tutorials/pwa-studio-fundamentals/index.md
[`configurewebpack`]: pwa-buildpack/reference/configure-webpack/index.md
[upward]: technologies/upward/index.md
[load environment file]: pwa-buildpack/reference/buildpack-cli/load-env/index.md#programmatic-api>
[state management]: technologies/basic-concepts/state-management/index.md

[service worker features]: https://developers.google.com/web/fundamentals/primers/service-workers
[jest]: https://jestjs.io/
[venia-ui package's `upward.yml` file]: https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/upward.yml
[htmlwebpackplugin]: https://webpack.js.org/plugins/html-webpack-plugin/
[storybook]: https://storybook.js.org/docs/react/workflows/testing-with-storybook
