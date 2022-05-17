---
title: Analytics Events Reference
---

The document describes the default events that PWA Studio tracks for Adobe Analytics.
Additional events can be added by following the steps in [Custom Events](XXXXXXX).

- [Abandoned cart](#abandoned-cart)
- [Cart operations](#cart-operations)
- [Checkout](#checkout-events)
- [Mini-cart views](#mini-cart-views)
- [Page views](#page-views)
- [Product clicks/impressions](#product-clicksimpressions)
- [Search requests](#search-requests)
- [User account actions](#user-account-actions)

## Abandoned cart

The `ADD_TO_CART` event is fired whenever a user closes a tab with a product in cart or loads a new URL with a product in cart.
It sends the following attributes:

- Product list items:
  - SKU
  - name
  - priceTotal
  - quantity
  - discountAmount
  - currencyCode
  - selectedOptions (attribute,value)
- CartID

## Cart operations

The `ADD_TO_CART` event is fire whenever a user adds a product to their cart with the following attributes:

- SKU
- name
- priceTotal
- discountAmount
- currencyCode
- selectedOptions ( attribute, value)

The `UPDATE_CART_ITEM` event is fired whenever a user updates a product in their cart (changes options or quantity).

XXXXX What gets returned?

The `REMOVE_FROM_CART` event s fire whenever a user removes a product from their cart.

XXXXX What gets returned?

## Checkout events

"Shipping Information added" event is tracked  whenever a user fills in their shipping information on the checkout page
"Shipping method added" event  is tracked  whenever  whenever a user fills in their shipping method on the checkout page
"Billing information added" event is tracked whenever a user fills in their billing information on the checkout page
"Review order"  event is tracked  whenever a user clicks the "review order" button on the checkout page
"Place Order" and "Order confirmation page view" events are tracked  whenever a user completes their order and sees the order confirmation page
PlaceOrder Event includes the following attributes:
orderID
payments (paymentTransactionID, paymentAmount, paymentType, paymentCurrencyCode)
shipping (shippingMethod, shippingAmount)
promotionID
productArray
Out of scope: coupon code, gift card, gift options

## Mini-cart views

The `MINI_CART_VIEW` event is fired whenever a user opens a mini-cart with the following attributes:

- CartID
- productsArray

## Page views

The `PAGE_VIEW` event is fired when a user lands on a page upon entering the site and when a user navigates to a new page.
Page View event contains:

- pagetype
- page
- PLP
- PDP
- cart
- checkout
- order confirmation

 page type attributes listed [hereXXXXX](https://wiki.corp.adobe.com/pages/viewpage.action?pageId=2503039888)XXXXXX

## Product clicks/impressions

The `PRODUCT_IMPRESSION` event is fired when a user views a product tile: a category listing page, search results page, or PageBuilder content, and clicks a product tile.
The following attributes collected:

- SKU
- name
- priceTotal
- discountAmount
- currencyCode
- selectedOptions (attribute, value)

## Search requests

The `SEARCH_REQUEST` event is fired every time user initiates a product search with the attributes that can be mapped to the following schema:

- refinements: (attribute: string; value: string; isRange: boolean )
- sort (attribute: string; order: string )
- query: string;

## User account actions

The `USER_SIGN_IN` event is fired whenever a user hits the "Sign In" button with the attributes that can be mapped to signIn action here:


The `USER_SIGN_OUT` event is fired whenever a user hits "Sign Out" with the the attributes that can be mapped to signOut action here:

The `USER_REGISTRATION` event is fired whenever user successfully creates an account with the the attributes that can be mapped to createAccount action here:
