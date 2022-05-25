---
title: Analytics Events Reference
---

# Analytics events reference

The document describes the default events that PWA Studio tracks for Adobe Analytics.
Additional events can be added by following the steps in [Custom Events](../custom-events/index.md).

- [CART_ADD_ITEM](#cartadditem)
- [CART_PAGE_VIEW](#cartpageview)
- [CART_REMOVE_ITEM](#cartremoveitem)
- [CART_UPDATE_ITEM](#cartupdateitem)
- [CATEGORY_PAGE_VIEW](#categorypageview)
- [CMS_PAGE_VIEW](#cmspageview)
- [MINI_CART_VIEW](#minicartview)
- [ORDER_CONFIRMATION_PAGE_VIEW](#orderconfirmationpageview)
- [PRODUCT_CLICK](#productclick)
- [PRODUCT_IMPRESSION](#productimpression)
- [PRODUCT_PAGE_VIEW](#productpageview)
- [SEARCH_REQUEST](#searchrequest)
- [USER_CREATE_ACCOUNT](#usercreateaccount)
- [USER_SIGN_IN](#usersignin)
- [USER_SIGN_OUT](#usersignout)

## CART_ADD_ITEM

The `CART_ADD_ITEM` event is fired whenever a user adds a product to their cart.

```javascript
payload: {
          cartId,
          sku: item.product.sku,
          name: item.product.name,
          priceTotal: currentPrice.value,
          currencyCode: currentPrice.currency,
          discountAmount: currentDiscount.amount_off,
          selectedOptions: selectedOptionsLabels,
          quantity
        }
```

## CART_PAGE_VIEW

The `CART_PAGE_VIEW` event is fired whenever a user views the shopping cart page.

```javascript
payload: {
          cart_id: cartId,
          products: cartItems
        }
```

## CART_REMOVE_ITEM

The `CART_REMOVE_ITEM` event is fired whenever a user removes a product from their cart.

```javascript
payload: {
          cartId,
          sku: item.product.sku,
          name: item.product.name,
          priceTotal: currentPrice.value,
          currencyCode: currentPrice.currency,
          discountAmount: currentDiscount.amount_off,
          selectedOptions: selectedOptionsLabels,
          quantity
        }
```

## CART_UPDATE_ITEM

The `CART_UPDATE_ITEM` event is fired whenever a user update a product in their cart.

```javascript
payload: {
          cartId,
          sku: cartItem.product.sku,
          name: cartItem.product.name,
          priceTotal: cartItem.prices.price.value,
          currencyCode: cartItem.prices.price.currency,
          discountAmount:
            cartItem.prices.total_item_discount.value,
          selectedOptions: selectedOptionsLabels,
          quantity
        }
```

## CATEGORY_PAGE_VIEW

```javascript
payload: {
          id: categoryData.categories.items[0].uid,
          name: categoryData.categories.items[0].name,
          url_key: categoryData.categories.items[0].url_key,
          url_path: categoryData.categories.items[0].url_path
          }
```

## CMS_PAGE_VIEW

```javascript
payload: {
          url_key: cmsPage.url_key,
          title: cmsPage.title
         }
```

## MINI_CART_VIEW

The `MINI_CART_VIEW` event is fired whenever a user opens a mini-cart with the following attributes:

```javascript
payload: {
          cartId: cartId,
          products: productList
        }
```

## ORDER_CONFIRMATION_PAGE_VIEW

```javascript
payload: {
          order_number: placeOrderData.placeOrder.order.order_number,
          amount: orderDetailsData.cart.prices,
          shipping: shipping,
          payment: orderDetailsData.cart.selected_payment_method,
          products: orderDetailsData.cart.items
          }
```

## PRODUCT_CLICK

The `PRODUCT_CLICK` event is fired XXXXX
The following attributes are sent:

```javascript
payload: {
          sku: item.sku,
          priceTotal: finalPrice,
          discountAmount,
          currencyCode,
          selectedOptions: null
        }
```

## PRODUCT_IMPRESSION

The `PRODUCT_IMPRESSION` event is fired when a user views a product tile: a category listing page, search results page, or PageBuilder content, and clicks a product tile.

```javascript
payload: {
          sku: item.sku,
          priceTotal: finalPrice,
          discountAmount,
          currencyCode,
          selectedOptions: null
        }
```

## PRODUCT_PAGE_VIEW

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

## USER_CREATE_ACCOUNT

The `USER_CREATE_ACCOUNT` event is fired whenever user successfully creates an account.

```javascript
payload: {
          email: formValues.customer.email,
          firstName: formValues.customer.firstName,
          lastName: formValues.customer.lastName,
          isSubscribed: !!formValues.subscribe
         ß}
```

## USER_SIGN_IN

The `USER_SIGN_IN` event is fired whenever a user clicks the "Sign In" button.

```javascript
payload: {
          ...data.customer
         }
```

## USER_SIGN_OUT

The `USER_SIGN_OUT` event is fired whenever a user clicks "Sign Out" button.

```javascript
payload: currentUser
```
