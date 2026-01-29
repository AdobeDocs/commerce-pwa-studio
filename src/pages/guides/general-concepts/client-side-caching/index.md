---
title: Client-side caching
description: Learn about client-side caching and how it affects services workers in the PWA Studio framework.
keywords:
  - Cache
  - Storefront
---

# Client-side caching

Client-side caching is the storage of network data to a local cache for future re-use.

## Overview

Client-server communication is slow and expensive.
Performance is an important feature for any Progressive Web Application (PWA), so
requests to the server should be minimized.

Offline mode is also a required feature for a PWA.
In offline mode, the application must be able to serve pages that have been recently viewed.

Applications implement these features with the help of a client-side cache.
After the application fetches network data, it stores that resource in a local cache.
Once a resource has been cached, the service worker uses the cache on future requests for that resource to boost performance.

## Service Worker caching

A [service worker][] is a JavaScript file that runs in a separate thread from the main execution thread in a web application.
Service workers can intercept network requests and fetch cached data or store results from a network request into the cache.

[service worker]: https://web.dev/learn/pwa/service-workers

### Venia service worker

Venia's service worker uses Google's [Workbox][] library.
Its behavior is defined in files inside the [src/ServiceWorker/][] directory.

[workbox]: https://developer.chrome.com/docs/workbox/
[src/serviceworker/]: https://github.com/magento/pwa-studio/blob/develop/packages/venia-concept/src/ServiceWorker/

You do not need to use Workbox to define service worker behavior, but
Workbox makes this task easier by removing boilerplate code that is always used when working with service workers.

Venia uses the following [caching strategies][] with its service worker:

[caching strategies]: https://developer.chrome.com/docs/workbox/modules/workbox-strategies/

#### Stale-while-revalidate

The [stale-while-revalidate][] strategy tells the service worker to use a cached response if it exists.
A separate network request is made for that resource and the cache is updated for future requests.

[stale-while-revalidate]: https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#stale-while-revalidate

This strategy is used when the most up to date version of a resource is not necessary for an application.

| Route pattern                                                       | Description          |
| ------------------------------------------------------------------- | -------------------- |
| /                                                                   | The application root |
| /.\\.js$                                                            | JavaScript files     |
| /\/media\/catalog.*\.(?:png&#124;gif&#124;jpg&#124;jpeg&#124;svg)$/ | Catalog image files  |

#### Network first

The [network first][] strategy tells the service worker to get a resource from the network first.
If a network connection cannot be made, the service worker uses the cache as a fallback.

[network first]: https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache

This strategy is used for data that may change frequently on the server.

| Route pattern | Description |
| ------------- | ----------- |
| \\.html$      | HTML pages  |

#### Cache first

The [cache first][] strategy tells the service worker to use the data from the cache.
Unlike the stale-while-revalidate strategy, no network call is made to update the cache.

[cache first]: https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network

If a response is not found in the cache, a network call is made to get the resource and cache the response.

This strategy is used for non-critical assets that do not get updated very often.

| Route pattern | Description                             |
| ------------- | --------------------------------------- |
| images        | Image files served from the application |

When using service workers, you should add a width parameter to your images so that the correct image is returned from the cache.
If an image does not have a width parameter, a cached image with the same name but an incorrect size could be returned.

## Caching in the Apollo GraphQL client

The Venia implementation storefront uses the Apollo GraphQL client to make requests to the Adobe Commerce or Magento Open Source GraphQL endpoint.
It also incorporates the default [InMemoryCache][] implementation to add caching abilities to the client.

[inmemorycache]: https://www.apollographql.com/docs/react/api/cache/InMemoryCache

The cache is persisted between browser sessions in `window.localstorage` using the [apollo-cache-persist][] module.
This lets the Apollo client maintain its cached data even when the user closes the application.

[apollo-cache-persist]: https://github.com/apollographql/apollo-cache-persist

By default, InMemoryCache uses a cache first strategy for all queries.
This strategy is set using the `fetchPolicy` prop on the `Query` component.

Caching for Apollo is set up in the [src/drivers/adapter.js][] file.

[src/drivers/adapter.js]: https://github.com/magento/pwa-studio/blob/master/packages/venia-ui/lib/drivers/adapter.js
