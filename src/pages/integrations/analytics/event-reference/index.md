---
title: Analytics Events Reference
---

The document describes the default events that PWA Studio tracks for Adobe Analytics.
Additional events can be added by following the steps in [Custom Events](XXXXXXX).

- [Abandoned cart](#abandoned-cart)
- [Cart operations](#cart-operations)
- [Checkout](#checkout-events)
- [Mini-cart views](#minicartview)
- [Page views](#page-views)
- [Product clicks/impressions](#product-clicksimpressions)
- [Search requests](#searchrequest)
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

## MINI_CART_VIEW

The `MINI_CART_VIEW` event is fired whenever a user opens a mini-cart with the following attributes:

```javascript
payload: {
          cartId: cartId,
          products: productList
        }
```

## Page Views

Page view events are fired when a user lands on a page upon entering the site and when a user navigates to a new page.

### CART_PAGE_VIEW

```javascript
payload: {
          cart_id: cartId,
          products: cartItems
        }
```

### CATEGORY_PAGE_VIEW

```javascript
payload: {
          id: categoryData.categories.items[0].uid,
          name: categoryData.categories.items[0].name,
          url_key: categoryData.categories.items[0].url_key,
          url_path: categoryData.categories.items[0].url_path
          }
```

### CMS_PAGE_VIEW

```javascript
payload: {
          url_key: cmsPage.url_key,
          title: cmsPage.title
         }
```

### ORDER_CONFIRMATION_PAGE_VIEW

```javascript
payload: {
          order_number: placeOrderData.placeOrder.order.order_number,
          amount: orderDetailsData.cart.prices,
          shipping: shipping,
          payment: orderDetailsData.cart.selected_payment_method,
          products: orderDetailsData.cart.items
          }
```

### PRODUCT_PAGE_VIEW

```javascript
payload: {
          id: product.id,
          name: product.name,
          sku: product.sku,
          currency_code:
              product?.price_range?.maximum_price?.final_price
                  ?.currency,
          price_range: {
              maximum_price: {
                  final_price:
                      product?.price_range?.maximum_price?.final_price
                          ?.value
              }
          },
          url_key: product.url_key
          }
```

## PRODUCT_IMPRESSION

The `PRODUCT_IMPRESSION` event is fired when a user views a product tile: a category listing page, search results page, or PageBuilder content, and clicks a product tile.
The following attributes collected:

- SKU
- name
- priceTotal
- discountAmount
- currencyCode
- selectedOptions (attribute, value)

## SEARCH_REQUEST

The `SEARCH_REQUEST` event is fired every time user initiates a product search with the attributes that can be mapped to the following schema:

```javascript
payload: {
          query: inputText,
          refinements: refinementData,
          sort: {
              attribute: currentSort.sortAttribute,
              order: currentSort.sortDirection
          }
      }
```

## User account actions

### USER_SIGN_IN

The `USER_SIGN_IN` event is fired whenever a user clicks the "Sign In" button.

```javascript
payload: {
          ...data.customer
         }
```

### USER_SIGN_OUT

The `USER_SIGN_OUT` event is fired whenever a user clicks "Sign Out" button.

```javascript
payload: currentUser
```

### USER_CREATE_ACCOUNT

The `USER_CREATE_ACCOUNT` event is fired whenever user successfully creates an account.

```javascript
payload: {
          email: formValues.customer.email,
          firstName: formValues.customer.firstName,
          lastName: formValues.customer.lastName,
          isSubscribed: !!formValues.subscribe
         ß}
```
