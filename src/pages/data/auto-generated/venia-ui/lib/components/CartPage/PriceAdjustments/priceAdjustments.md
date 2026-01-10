
## Functions
 
[PriceAdjustments(props)] ⇒ `React.Element`

PriceAdjustments is a child component of the CartPage component.
It renders the price adjustments forms for applying gift cards, coupons, and the shipping method.
All of which can adjust the cart total.

[CouponCode(props)] ⇒ `React.Element`

A child component of the PriceAdjustments component.
This component renders a form for addingg a coupon code to the cart.

[GiftOptions(props)] ⇒ `React.Element`

A child component of the PriceAdjustments component.
This component displays the form for adding gift options.

[ShippingMethods(props)] ⇒ `React.Element`

A child component of the PriceAdjustments component.
This component renders the form for adding the shipping method for the cart.


PriceAdjustments is a child component of the CartPage component.
It renders the price adjustments forms for applying gift cards, coupons, and the shipping method.
All of which can adjust the cart total.

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| props.setIsCartUpdating | `function` | A callback function for setting the updating state of the cart. |
| props.classes | `Object` | CSS className overrides. See [priceAdjustments.module.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/priceAdjustments.module.css) for a list of classes you can override. |

**Example** *(Importing into your project)*

```js
import PriceAdjustments from '@magento/venia-ui/lib/components/CartPage/PriceAdjustments'
```

A child component of the PriceAdjustments component.
This component renders a form for addingg a coupon code to the cart.

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| props.setIsCartUpdating | `function` | Function for setting the updating state for the cart. |
| props.classes | `Object` | CSS className overrides. See [couponCode.module.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.module.css) for a list of classes you can override. |

**Example** *(Importing into your project)*

```js
import CouponCode from "@magento/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode";
```

A child component of the PriceAdjustments component.
This component displays the form for adding gift options.

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| [props.classes] | `Object` | CSS className overrides. |
| [props.giftOptionsConfigData] | `Object` | store config data. See [giftOptions.module.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.module.css) for a list of classes you can override. |

**Example** *(Importing into your project)*

```js
import GiftOptions from "@magento/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions";
```

A child component of the PriceAdjustments component.
This component renders the form for adding the shipping method for the cart.

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| props.setIsCartUpdating | `function` | Function for setting the updating state of the cart. |
| props.classes | `Object` | CSS className overrides. See [shippingMethods.module.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.module.css) for a list of classes you can override. |

**Example** *(Importing into your project)*

```js
import ShippingMethods from "@magento/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods";
```

**Source Code**: [pwa-studio/packages/venia-ui/lib/components/CartPage/PriceAdjustments/priceAdjustments.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/priceAdjustments.js)
