<a name="GiftCards"></a>

## GiftCards(props) ⇒ `React.Element`

GiftCards is a child component of the CartPage component.
This component shows a form for applying gift cards along with a list of applied
Gift Cards in the shopping cart.

**Kind**: global function

| Param                   | Type       | Description                                                                                                                                                                                                |
| ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| props                   | `Object`   | Component props                                                                                                                                                                                            |
| props.setIsCartUpdating | `function` | Callback function to call when adding or removing a gift card                                                                                                                                              |
| props.classes           | `Object`   | CSS className overrides. See [giftCards.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/GiftCards/giftCards.css) for a list of classes you can override. |

**Example** _(Importing into your project)_

```js
import GiftCards from "@magento/venia-ui/lib/components/CartPage/GiftCards";
```

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/GiftCards/giftCards.js).
