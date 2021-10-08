## Functions

<dl>
<dt><a href="#PriceAdjustments">PriceAdjustments(props)</a> ⇒ <code>React.Element</code></dt>
<dd><p>PriceAdjustments is a child component of the CartPage component.
It renders the price adjustments forms for applying gift cards, coupons, and the shipping method.
All of which can adjust the cart total.</p>
</dd>
<dt><a href="#CouponCode">CouponCode(props)</a> ⇒ <code>React.Element</code></dt>
<dd><p>A child component of the PriceAdjustments component.
This component renders a form for addingg a coupon code to the cart.</p>
</dd>
<dt><a href="#GiftOptions">GiftOptions(props)</a> ⇒ <code>React.Element</code></dt>
<dd><p>A child component of the PriceAdjustments component.
This component displays the form for adding gift options.</p>
</dd>
<dt><a href="#ShippingMethods">ShippingMethods(props)</a> ⇒ <code>React.Element</code></dt>
<dd><p>A child component of the PriceAdjustments component.
This component renders the form for adding the shipping method for the cart.</p>
</dd>
</dl>

<a name="PriceAdjustments"></a>

## PriceAdjustments(props) ⇒ <code>React.Element</code>
PriceAdjustments is a child component of the CartPage component.
It renders the price adjustments forms for applying gift cards, coupons, and the shipping method.
All of which can adjust the cart total.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.setIsCartUpdating | <code>function</code> | A callback function for setting the updating state of the cart. |
| props.classes | <code>Object</code> | CSS className overrides. See [priceAdjustments.module.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/priceAdjustments.module.css) for a list of classes you can override. |

**Example** *(Importing into your project)*  
```js
import PriceAdjustments from '@magento/venia-ui/lib/components/CartPage/PriceAdjustments'
```
<a name="CouponCode"></a>

## CouponCode(props) ⇒ <code>React.Element</code>
A child component of the PriceAdjustments component.
This component renders a form for addingg a coupon code to the cart.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.setIsCartUpdating | <code>function</code> | Function for setting the updating state for the cart. |
| props.classes | <code>Object</code> | CSS className overrides. See [couponCode.module.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.module.css) for a list of classes you can override. |

**Example** *(Importing into your project)*  
```js
import CouponCode from "@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode";
```
<a name="GiftOptions"></a>

## GiftOptions(props) ⇒ <code>React.Element</code>
A child component of the PriceAdjustments component.
This component displays the form for adding gift options.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.classes | <code>Object</code> | CSS className overrides. See [giftOptions.module.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.module.css) for a list of classes you can override. |

**Example** *(Importing into your project)*  
```js
import GiftOptions from "@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions";
```
<a name="ShippingMethods"></a>

## ShippingMethods(props) ⇒ <code>React.Element</code>
A child component of the PriceAdjustments component.
This component renders the form for adding the shipping method for the cart.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.setIsCartUpdating | <code>function</code> | Function for setting the updating state of the cart. |
| props.classes | <code>Object</code> | CSS className overrides. See [shippingMethods.module.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.module.css) for a list of classes you can override. |

**Example** *(Importing into your project)*  
```js
import ShippingMethods from "@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods";
```


For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/priceAdjustments.js).