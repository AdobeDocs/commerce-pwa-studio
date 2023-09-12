---
title: Adobe Experience Platform
description: Learn how the Adobe Experience Platform integrates with PWA Studio storefront projects.
keywords:
  - Events
  - Storefront
  - Tools
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

There are few steps to take to establish a data stream and then install and configure the Experience Platform Connector.

Check the prerequisites for establishing a data stream in the [Experience Platform Connector overview](https://experienceleague.adobe.com/docs/commerce-merchant-services/experience-platform-connector/overview.html?lang=en#prereqs).

To install the EPC within Adobe Commerce, see [Install and Configure the Experience Platform Connector](https://experienceleague.adobe.com/docs/commerce-merchant-services/experience-platform-connector/fundamentals/install.html?lang=en).

To connect Adobe Commerce with your data stream, see [Connect Commerce data to Adobe Experience Platform](https://experienceleague.adobe.com/docs/commerce-merchant-services/experience-platform-connector/fundamentals/connect-data.html?lang=en).
