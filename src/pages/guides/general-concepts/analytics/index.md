---
title: Analytics Events
---

## PWA analytics

PWA Studio emits a series of events for for use in analytics.

## Adobe Launch

| Event | Description | Property Name | Example |
|--|--|--|--|
| Page View |	A specific page has been navigated to by the end user |	virtualPageView	 ||
| Product Detail Page View | The product detail page has been navigated to by the end user | productDetail ||
| Product Impression | A specific product has been shown to the end user | productImpression |
| Product Click | A specific product has been clicked on by the end user | productClick ||
| Add to Cart | A product has been added to the cart by the end user | add-to-cart | |

## Google Tag Manager (GTM)

| Event | Description | Property Name | Value type | Acceptable Values | Example |
|--|--|--|--|--|--|
| Page View | A specific page has been navigated to by the end user | virtualPageView | string | "home" "category" "product" | `{'virtualPageView': 'category' }` |
| Product Detail Page View | The product detail page has been navigated to by the end user | productDetail | object | objects with properties: id, name, category | ` { 'event': 'productDetail', 'ecommerce': { 'detail': { 'products': [{ 'id': 'VA17-SI-NA', 'name': 'Silver Cirque Earrings', 'category': 'Accessories'}]}}}` |
| Product Impression | A specific product has been shown to the end user | productImpression | object | objects with properties: name, sku | { 'productImpression': `{ 'name': 'Silver Cirque Earrings', 'sku': 'VA17-SI-NA' }}` |
| Product Click | A specific product has been clicked on by the end user | productClick | object | objects with properties: name, sku | `{ 'productClick': { 'name': 'Silver Cirque Earrings', 'sku': 'VA17-SI-NA' }}` |