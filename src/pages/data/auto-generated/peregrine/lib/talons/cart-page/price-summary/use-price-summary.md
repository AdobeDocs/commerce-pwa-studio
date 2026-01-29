
## Functions

[usePriceSummary(props)] ⇒ `[PriceSummaryTalonProps]`

This talon contains logic for a price summary component.
It performs effects and returns prop data for rendering the component.

This talon performs the following effects:

- Log a GraphQL error if it occurs when getting the price summary

## Typedefs

[FlattenedData] : `Object`

Query data flattened into a simple object.

[PriceSummaryQueries] : `Object`

GraphQL queries for price summary component.

[PriceSummaryTalonProps] : `Object`

Props used for rendering a price summary component.

This talon contains logic for a price summary component.
It performs effects and returns prop data for rendering the component.

This talon performs the following effects:

- Log a GraphQL error if it occurs when getting the price summary

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| props.queries | `PriceSummaryQueries` |GraphQL queries for a price summary component. |

**Example** *(Importing into your project)*

```js
import { usePriceSummary } from '@magento/peregrine/lib/talons/CartPage/PriceSummary/usePriceSummary';
```

Query data flattened into a simple object.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| subtotal | `String` | Cart subtotal (excluding tax) |
| total | `String` | Cart grand total |
| discounts | `Array.<Object>` | Applied discounts to the cart |
| giftCards | `Array.<Object>` | Gift cards applied to the cart |
| giftOptions | `Array.<Object>` | Gift Options applied to the cart |
| taxes | `Array.<Object>` | Taxes applied to the cart |
| shipping | `Array.<Object>` | Shipping addresses associated with this cart |

GraphQL queries for price summary component.

**See**: [priceSummary.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.js)
for the queries used in Venia.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| getPriceSummary | `GraphQLAST` | Query to get the price summary for a cart |

Props used for rendering a price summary component.

**Properties**

| Name | Type | Description                                                                                                                                                                                        |
| --- | --- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| handleProceedToCheckout | `function` | Callback function which navigates the browser to the checkout * @property `function` handleEnterKeyPress Callback function which navigates the browser to the checkout at the press of enter key |
| hasError | `boolean` | True if a GraphQL query returns an error. False otherwise.                                                                                                                                         |
| hasItems | `boolean` | True if the cart has any items. False otherwise.                                                                                                                                                   |
| isLoading | `boolean` | True while the GraphQL query is still in flight. False otherwise.                                                                                                                                  |
| flatData | `FlattenedData` | Query data that has been flattened into a simple object                                                                                                                                            |

**Source Code**: [pwa-studio/packages/peregrine/lib/talons/CartPage/PriceSummary/usePriceSummary.js](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/PriceSummary/usePriceSummary.js)
