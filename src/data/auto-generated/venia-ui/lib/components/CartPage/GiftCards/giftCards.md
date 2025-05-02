
GiftCards is a child component of the CartPage component.
This component shows a form for applying gift cards along with a list of applied
Gift Cards in the shopping cart.

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | `Object` | Component props |
| props.setIsCartUpdating | `function` | Callback function to call when adding or removing a gift card |
| props.classes | `Object` | CSS className overrides. See [giftCards.module.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/GiftCards/giftCards.module.css) for a list of classes you can override. |

**Example** *(Importing into your project)*  

```js
import GiftCards from '@magento/venia-ui/lib/components/CartPage/GiftCards';
```

**Source Code**: [pwa-studio/packages/venia-ui/lib/components/CartPage/GiftCards/giftCards.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/GiftCards/giftCards.js)
