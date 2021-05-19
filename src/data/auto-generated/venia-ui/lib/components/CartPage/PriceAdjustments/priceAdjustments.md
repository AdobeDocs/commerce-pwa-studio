## Functions

<dl>
<dt><a href="#PriceAdjustments">PriceAdjustments(props)</a> ⇒ <inlineCode>React.Element</inlineCode></dt>
<dd>

PriceAdjustments is a child component of the CartPage component.
It renders the price adjustments forms for applying gift cards, coupons, and the shipping method.
All of which can adjust the cart total.

</dd>
<dt><a href="#CouponCode">CouponCode(props)</a> ⇒ <inlineCode>React.Element</inlineCode></dt>
<dd>

A child component of the PriceAdjustments component.
This component renders a form for addingg a coupon code to the cart.

</dd>
<dt><a href="#GiftOptions">GiftOptions(props)</a> ⇒ <inlineCode>React.Element</inlineCode></dt>
<dd>

A child component of the PriceAdjustments component.
This component displays the form for adding gift options.

</dd>
<dt><a href="#ShippingMethods">ShippingMethods(props)</a> ⇒ <inlineCode>React.Element</inlineCode></dt>
<dd>

A child component of the PriceAdjustments component.
This component renders the form for adding the shipping method for the cart.

</dd>
</dl>

<a name="PriceAdjustments"></a>

## PriceAdjustments(props) ⇒ `React.Element`

PriceAdjustments is a child component of the CartPage component.
It renders the price adjustments forms for applying gift cards, coupons, and the shipping method.
All of which can adjust the cart total.

**Kind**: global function

| Param                   | Type       | Description                                                                                                                                                                                                                     |
| ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| props                   | `Object`   |                                                                                                                                                                                                                                 |
| props.setIsCartUpdating | `function` | A callback function for setting the updating state of the cart.                                                                                                                                                                 |
| props.classes           | `Object`   | CSS className overrides. See [priceAdjustments.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/priceAdjustments.css) for a list of classes you can override. |

**Example** _(Importing into your project)_

```js
import PriceAdjustments from "@magento/venia-ui/lib/components/CartPage/PriceAdjustments";
```

<a name="CouponCode"></a>

## CouponCode(props) ⇒ `React.Element`

A child component of the PriceAdjustments component.
This component renders a form for addingg a coupon code to the cart.

**Kind**: global function

| Param                   | Type       | Description                                                                                                                                                                                                                    |
| ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| props                   | `Object`   |                                                                                                                                                                                                                                |
| props.setIsCartUpdating | `function` | Function for setting the updating state for the cart.                                                                                                                                                                          |
| props.classes           | `Object`   | CSS className overrides. See [couponCode.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.css) for a list of classes you can override. |

**Example** _(Importing into your project)_

```js
import CouponCode from "@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode";
```

<a name="GiftOptions"></a>

## GiftOptions(props) ⇒ `React.Element`

A child component of the PriceAdjustments component.
This component displays the form for adding gift options.

**Kind**: global function

| Param         | Type     | Description                                                                                                                                                                                                                       |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| props         | `Object` |                                                                                                                                                                                                                                   |
| props.classes | `Object` | CSS className overrides. See [giftOptions.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.css) for a list of classes you can override. |

**Example** _(Importing into your project)_

```js
import GiftOptions from "@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions";
```

<a name="ShippingMethods"></a>

## ShippingMethods(props) ⇒ `React.Element`

A child component of the PriceAdjustments component.
This component renders the form for adding the shipping method for the cart.

**Kind**: global function

| Param                   | Type       | Description                                                                                                                                                                                                                                   |
| ----------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| props                   | `Object`   |                                                                                                                                                                                                                                               |
| props.setIsCartUpdating | `function` | Function for setting the updating state of the cart.                                                                                                                                                                                          |
| props.classes           | `Object`   | CSS className overrides. See [shippingMethods.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.css) for a list of classes you can override. |

**Example** _(Importing into your project)_

```js
import ShippingMethods from "@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods";
```

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/priceAdjustments.js).
