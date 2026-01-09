---
title: Product Recommendations
description: Learn how to integrate the Product Recommendations service in your PWA Studio storefront project.
keywords:
  - Integration
  - Recommendations
  - Services
  - Storefront
---

# Product Recommendations

You can integrate Product Recommendations powered by [Adobe Sensei](https://www.adobe.com/sensei.html) into your PWA Studio storefront.

## Integration overview

![Product Recommendations for PWA Studio](images/pwa-arch-diag-sensei.svg)

Adobe's [Product Recommendations powered by Adobe Sensei](https://experienceleague.adobe.com/en/docs/commerce-merchant-services/product-recommendations/overview) is a feature backed by several SaaS services.

The **Store** side includes your PWA storefront, which contains the event collector and recommendations layout template, and the backend, which includes the GraphQL endpoints, SaaS Export module, and the Admin UI.

After you install the Product Recommendations PWA extension on your store, it begins sending [behavioral data](https://experienceleague.adobe.com/en/docs/commerce-merchant-services/product-recommendations/developer/events) to Adobe Sensei with no additional setup.

Adobe Sensei processes this behavioral data along with catalog data from the backend and calculates product associations leveraged by the recommendations service. Merchants can then create and manage recommendation units in the Adobe Commerce Admin UI and fetch them from the PWA storefront.

## Install the Product Recommendations module

<InlineAlert variant="info" slots="text"/>

Before proceeding, complete all Product Recommendations prerequisites for Adobe Commerce by following the official [installation documentation](https://experienceleague.adobe.com/en/docs/commerce/product-recommendations/getting-started/install-configure).

## Install the Product Recommendations backend module

Install the additional backend dependency by running the following commands:

```bash
composer require magento/module-data-services-graphql
composer require magento/experience-platform-connector
bin/magento setup:di:compile
bin/magento cache:flush
Install the Product Recommendations frontend PWA package
Product Recommendations support in PWA Studio requires installing the venia-product-recommendations package along with supporting dependencies.

<InlineAlert variant="info" slots="text"/>
The venia-product-recommendations package requires PWA Studio 10.0.0 or later.

GitHub-cloned projects
Run the following commands from the project root:

sh
Copy code
yarn venia add -D @magento/venia-product-recommendations
yarn venia add -D @magento/venia-data-collector
yarn venia add -D @magento/experience-platform-connector
OR

sh
Copy code
npm install @magento/venia-product-recommendations
npm install @magento/venia-data-collector
npm install @magento/experience-platform-connector
Scaffolded projects
Run the following commands from the project root:

sh
Copy code
yarn add -D @magento/venia-product-recommendations
yarn add -D @magento/venia-data-collector
yarn add -D @magento/experience-platform-connector
OR

sh
Copy code
npm install @magento/venia-product-recommendations
npm install @magento/venia-data-collector
npm install @magento/experience-platform-connector
Create recommendation units
Creating a product recommendation unit for your PWA storefront is the same as creating one for a theme.

After creating a recommendation unit in the Admin UI, place components that render product recommendations on the appropriate storefront pages. This is done once per supported page type.

Render recommendations
To control recommendation unit placement on your PWA storefront, use a local intercept file. Refer to the extensibility framework documentation for more details.

Venia UI component
The Recommendations component is part of the venia-product-recommendations package and provides the following functionality:

Collects and sends behavioral data to Adobe Sensei

Fetches recommendations from the recommendations service

Renders recommendation units on storefront pages

Example
jsx
Copy code
import {
  VeniaProductRecommendations,
  PageTypes,
} from "@magento/venia-product-recommendations";

return <VeniaProductRecommendations pageType={PageTypes.CMS} />;
Fetch data only
If you are not using the venia-product-recommendations package, you can fetch recommendation data directly as JSON.

Example
js
Copy code
import { PageTypes } from "@magento/venia-product-recommendations";
import useRecsData from "@magento/venia-product-recommendations/lib/hooks/useRecsData";

const { data, error, isLoading } = useRecsData({
  pageType: PageTypes.CMS,
});
Support Policy
Supported Versions
Support is provided for version 14.4 and above.

Supported versions include:

Bug fixes

Security updates

Technical support and troubleshooting

Unsupported Versions
Versions earlier than 14.4 are not supported and may experience unresolved issues or security vulnerabilities.

Upgrade Recommendation
To ensure continued support, upgrade your environment to version 14.4 or later. Refer to the official upgrade documentation for guidance.

Contact & Assistance
For questions regarding version support or assistance with upgrading, contact the support team or submit a request through the appropriate support channel.



