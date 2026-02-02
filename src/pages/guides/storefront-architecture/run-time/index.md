---
title: Run time architecture
description: Learn about the PWA Studio runtime architecture.
---

# Run time architecture

A PWA Studio storefront's runtime architecture describes how each of its pieces interact with the Adobe Commerce or Magento Open Source application after deployment.
The following sections describe characteristics for the runtime architecture of storefronts built using PWA Studio.
Many of these characteristics follow the principles of [service isolation][].

[service isolation]: https://github.com/magento/architecture/blob/master/design-documents/service-isolation.md

## API-only relationships

A PWA Studio storefront application communicates with its backend application using its external API.
Those external API services communicate with the backend application's internal service modules and returns any results through that same external API.

**GraphQL** is the preferred API to use for client data and store behavior.
[GraphQL API][] coverage increases with every Adobe Commerce and Magento Open Source release, but
until full coverage is complete, developers can use the [**REST API**][] to fill in existing coverage gaps.

[graphql api]: https://developer.adobe.com/commerce/webapi/graphql/
[**rest api**]: https://developer.adobe.com/commerce/webapi/rest/

To make secure, admin-authorized calls, configure the storefront's [UPWARD][] server to make the request using REST or RPC.

[upward]: /guides/packages/upward/index.md

Use **HTTPS** when passing requests through the UPWARD server to static and media resources in the backend application.

## One-way coupling

The coupling between a PWA Studio storefront and it's backend application should go in one direction.
The storefront has a dependency on the backend, which is attached as a service, but
the backend application should not have a dependency on the storefront.

## Decoupled deployments

A PWA Studio storefront and its backing Adobe Commerce or Magento Open Source instance should be deployed as separate instances on separate hardware.
Using [UPWARD][] allows you to deploy these applications using different technology stacks with the dependency configured at build-time.

Another option is to deploy the storefront to the backend server directly using the [PHP implementation of UPWARD][].
This is a possible option if using [Adobe Commerce hosted in the Cloud][].

[php implementation of upward]: https://github.com/magento/upward-php
[adobe commerce hosted in the cloud]: /tutorials/production-deployment/adobe-commerce/index.md

## Storefront replacement mechanism

A PWA Studio storefront replaces the frontend theme for the Adobe Commerce or Magento Open Source backend application.

Since the coupling between the storefront and the backend application is one way, the backend does not know to direct front end traffic to the storefront.
This means that the frontend theme, such as Luma, is still available by connecting directly to the backend server.

Use a [reverse proxy][] in your backend server to route incoming frontend traffic to the storefront application.
If you are using the [Cloud for Adobe Commerce][adobe commerce hosted in the cloud] service to also host your storefront application, then the `magento-upward-connector` module handles the frontend replacement.

[reverse proxy]: https://en.wikipedia.org/wiki/Reverse_proxy
