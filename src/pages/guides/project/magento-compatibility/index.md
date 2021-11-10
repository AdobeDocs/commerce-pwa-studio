---
title: Magento compatibility
adobeio: /integrations/magento/version-compatibility/
---

This page lists PWA Studio versions and their compatible Magento core version.

| PWA Studio version | Magento core version |
| :----------------- | :------------------- |
| 12.1.0             | 2.4.3                |
| 12.0.0             | 2.4.3                |
| 11.0.0             | 2.4.3                |
| 10.0.0             | 2.4.2                |
| 9.0.1              | 2.4.2                |
| 9.0.0              | 2.4.2                |
| 8.0.0              | 2.4.0 - 2.4.1        |
| 7.0.0              | 2.3.5 - 2.4.0        |
| 6.0.1              | 2.3.4 - 2.3.5        |
| 6.0.0              | 2.3.4 - 2.3.5        |
| 5.0.1              | 2.3.3 - 2.3.4        |
| 5.0.0              | 2.3.3 - 2.3.4        |
| 4.0.0              | 2.3.2 - 2.3.3        |
| 3.0.0              | 2.3.1 - 2.3.2        |
| 2.1.0              | 2.3.1                |
| 2.0.0              | 2.3.0                |

## What compatibility means

If you are working directly with the PWA Studio repository, make sure the version you are working with is compatible with your Magento backend.

GraphQL queries in Venia are a main source of incompatibility between versions.
Breaking GraphQL schema changes in Magento require an update to the GraphQL queries used in the Venia storefront.

## Incompatibility scenarios

-  A developer has the latest PWA Studio, such as **2.1.0** or greater, but the `MAGENTO_BACKEND_URL` still points to a Magento 2 instance running **2.3.0**.
-  A developer is running an older version of PWA Studio, such as **2.0.0**, but the `MAGENTO_BACKEND_URL` points to a Magento 2 instance running **2.3.1**.

## Compatibility checks

Since **2.1.0**, PWA Studio includes a query validation step during the build process.
This step reports on any GraphQL incompatibility it encounters.

## Solving compatibility issues

Developers have two options for solving compatibility issues:

-  Upgrade or downgrade the PWA Studio version to match the Magento 2 backend version
-  Upgrade or downgrade the backend Magento 2 version to match the PWA Studio version
