---
title: Events and the Adobe Experience Platform
---

# Events and the Adobe Experience Platform

PWA Studio 12.5.0 has an eventing framework that allows store owners to track user interaction with their site and return analytics information.
With the Experience Platform extension, Adobe Commerce users with an Adobe Experience Platform (AEP) subscription can get event data from PWA sites and process it on the AEP.

There are two pieces required to get event data to the AEP:

- The Experience Platform extension enables the connection between PWA Studio and the Adobe Commerce backend.
- The Experience Platform Connector is an extension for Adobe Commerce that connects to the AEP platform.

This document describes how to install the Experience Platform extension and how to configure Adobe Commerce to receive event data.
Magento Open Source does not support the AEP.

## Install the Experience Platform extension for PWA Studio

The Experience Platform extension uses the standard Composer-based installation method.

Open your `yarn` file and add the following line:

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
