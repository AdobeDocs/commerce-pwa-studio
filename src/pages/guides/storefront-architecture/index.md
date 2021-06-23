---
title: Storefront architecture
---

# Storefront architecture

Unlike an Adobe Commerce or Magento Open Source theme, which is dependent on the core application, a PWA Studio storefront exists on a different application layer from the core application.
The storefront still communicates with the backend application, but it is not tightly coupled with it.

## Headless architecture overview

Headless architecture refers to the idea of separating the presentation layer from the data and business logic layer.
Decoupling these two layers give merchants the ability to make changes to the frontend without modifying code for the backend services.

In the context of PWA Studio, the storefront is the frontend application and the Adobe Commerce or Magento Open Source application is the connected backend service.
A PWA Studio storefront does not use any of the backend application's frontend theme assets, layout files, or scripts.
Instead, it defines its own frontend files and uses the backend application's GraphQL and REST services to send or request data.

For more information about headless eCommerce, read the blog post titled [The Future Is Headless][].

[the future is headless]: https://magento.com/blog/best-practices/future-headless

## Microservices

Microservice architecture is a design pattern that separates an application into independent, deployable services.
Each independent service communicates with the others through lightweight APIs.
This is known as **service isolation**.

Adobe Commerce and Magento Open Source services, such as those for customers, product catalog, and checkout, provide an API through [service contracts][].
PWA Studio storefronts interact with these services through [GraphQL][] and REST services.

[service contracts]: https://devdocs.magento.com/guides/v2.3/extension-dev-guide/service-contracts/service-contracts.html
[graphql]: https://github.com/magento/graphql-ce

For more information about service isolation, see: [Service Isolation Vision][].

[service isolation vision]: https://github.com/magento/architecture/blob/master/design-documents/service-isolation.md
