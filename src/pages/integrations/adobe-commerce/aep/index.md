---
title: Adobe Experience Platform
---

# Adobe Experience Platform

Included in the PWA Studio 12.5.0 release is an eventing framework that lets store owners install extensions that track user interaction within their site and collect analytics information.
With the Experience Platform Connector extension, Adobe Commerce users with an Adobe Experience Platform (AEP) subscription can get event data from PWA Studio storefronts and process it on the AEP.

This integration requires the following pieces to function properly:

- The Experience Platform Connector extension for PWA Studio storefronts, which connects and send data to the AEP platform.
- The Experience Platform extensions installed in the Adobe Commerce backend which provides configuration information to the storefront extension.

This diagram shows the basic flow of an event through the system and notes which component handles the event at each stage. 

![Basic event flow](images/analytics-flow.png)

The following sections provide installation and configuration instructions for the Experience Platform integration.
Magento Open Source does not support the AEP.

## Install the Experience Platform extension for PWA Studio

Use your storefront project's package manager(`node` or `yarn`), to install the Experience Platform Connector extension into your storefront project.

For example, if your project uses `yarn` run the following command: 

```terminal
yarn add @magento/experience-platform-connector
```

## Adobe Commerce backend configuration

The Experience Platform analytics endpoint needs to be set up in the Adobe Commerce Admin UI.

Follow these steps to configure the Adobe Commerce backend for eventing. **NOTE**: These extensions are still under development and steps may change with the official release. Read more about the [Experience Platform Connector](https://experienceleague.adobe.com/docs/commerce-merchant-services/experience-platform-connector/connect-data.html).

1. On the Adobe Commerce instance, install the following extensions:

   - @magento/module-experience-connector-graphql
   - @magento/module-data-services-graphql
   - @magento/module-experience-connector-admin

1. Create SaaS keys at [https://account.magento.com/](https://account.magento.com/)

1. In the Commerce admin, enter you service connector keys under: System > Services > Commerce Services Connector

1. Enter your schema’s data stream ID under: System > Services > Adobe Services. The data stream ID is created when you create a schema in AEP.

To confirm that eventing is working, complete a user action such as a product search or logging in as a user. These events should show up in the AEP analytics portal after the data has been processed.
