---
title: Adobe Experience Platform
description: Learn how the Adobe Experience Platform integrates with PWA Studio storefront projects.
keywords:
  - Events
  - Storefront
  - Tools
---

# Adobe Experience Platform

Included in the PWA Studio 12.5.0 release is an eventing framework that lets merchants install extensions that track user interaction within their site and collect analytics information.
With the Data Connection extension, Adobe Commerce users with an Adobe Experience Platform (AEP) subscription can get event data from PWA Studio storefronts and process it on the Experience Platform.

This integration requires the following pieces to function properly:

- The Data Connection extension for PWA Studio storefronts, which connects and sends data to the Experience Platform.
- The Experience Platform extensions installed in the Adobe Commerce backend, which provides configuration information to the storefront extension.

This diagram shows the basic flow of an event through the system and notes which component handles the event at each stage.

![Basic event flow](images/analytics-flow.png)

The following sections provide installation and configuration instructions for the Experience Platform integration.
Magento Open Source does not support the Experience Platform.

## Install the Experience Platform extension for PWA Studio

Use your storefront project's package manager(`node` or `yarn`), to install the Data Connection extension into your storefront project.

For example, if your project uses `yarn` run the following command:

```terminal
yarn add @magento/data-connection
```

## Adobe Commerce backend configuration

There are few steps to take to establish a data stream and then install and configure the Data Connection extension.

Check the prerequisites for establishing a data stream in the [Data Connection overview](https://experienceleague.adobe.com/docs/commerce-merchant-services/data-connection/overview.html#prereqs).

To install the EPC within Adobe Commerce, see [Install and Configure the Data Connection extension](https://experienceleague.adobe.com/docs/commerce-merchant-services/data-connection/fundamentals/install.html).

To connect Adobe Commerce with your data stream, see [Connect Commerce data to Adobe Experience Platform](https://experienceleague.adobe.com/docs/commerce-merchant-services/data-connection/fundamentals/connect-data.html).
