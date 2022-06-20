---
title: Analytics Events
---

## PWA analytics

PWA Studio emits a series of events for use in Adobe Analytics.

## Adobe Launch

| Event | Description | Property Name | Example |
|--|--|--|--|
| Page View | Triggered when the site displays any page to the user.  | virtualPageView ||
| Product Detail Page View | Triggered when the site displays a product-detail page. | productDetail ||
| Product Impression | Triggered when the site displays a product on the page. | productImpression |
| Product Click | Triggered when a user clicks a product link on the page. | productClick ||
| Add to Cart | Triggered when a user adds an item to the cart. | add-to-cart | |

## Google Tag Manager (GTM)

| Event | Description | Property Name | Value type | Acceptable Values | Example |
|--|--|--|--|--|--|
| Page View | A specific page has been navigated to by the end user | virtualPageView | string | "home" "category" "product" | `{'virtualPageView': 'category' }` |
| Product Detail Page View | The product detail page has been navigated to by the end user | productDetail | object | objects with properties: id, name, category | ` { 'event': 'productDetail', 'ecommerce': { 'detail': { 'products': [{ 'id': 'VA17-SI-NA', 'name': 'Silver Cirque Earrings', 'category': 'Accessories'}]}}}` |
| Product Impression | A specific product has been shown to the end user | productImpression | object | objects with properties: name, sku | { 'productImpression': `{ 'name': 'Silver Cirque Earrings', 'sku': 'VA17-SI-NA' }}` |
| Product Click | A specific product has been clicked on by the end user | productClick | object | objects with properties: name, sku | `{ 'productClick': { 'name': 'Silver Cirque Earrings', 'sku': 'VA17-SI-NA' }}` |