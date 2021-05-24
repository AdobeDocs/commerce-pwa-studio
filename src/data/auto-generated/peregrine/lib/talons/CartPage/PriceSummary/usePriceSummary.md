## Functions

<dl>
<dt><a href="#usePriceSummary">usePriceSummary(props)</a> ⇒ <inlineCode><a href="#PriceSummaryTalonProps">PriceSummaryTalonProps</a></inlineCode></dt>
<dd>

This talon contains logic for a price summary component.
It performs effects and returns prop data for rendering the component.

This talon performs the following effects:

- Log a GraphQL error if it occurs when getting the price summary

</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#FlattenedData">FlattenedData</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Query data flattened into a simple object.

</dd>
<dt><a href="#PriceSummaryQueries">PriceSummaryQueries</a> : <inlineCode>Object</inlineCode></dt>
<dd>

GraphQL queries for price summary component.

</dd>
<dt><a href="#PriceSummaryTalonProps">PriceSummaryTalonProps</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Props used for rendering a price summary component.

</dd>
</dl>

<a name="usePriceSummary"></a>

## usePriceSummary(props) ⇒ [`PriceSummaryTalonProps`](#PriceSummaryTalonProps)
This talon contains logic for a price summary component.
It performs effects and returns prop data for rendering the component.

This talon performs the following effects:

- Log a GraphQL error if it occurs when getting the price summary

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| props.queries | [`PriceSummaryQueries`](#PriceSummaryQueries) | GraphQL queries for a price summary component. |

**Example** *(Importing into your project)*  
```js
import { usePriceSummary } from '@magento/peregrine/lib/talons/CartPage/PriceSummary/usePriceSummary';
```
<a name="FlattenedData"></a>

## FlattenedData : `Object`
Query data flattened into a simple object.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| subtotal | `String` | Cart subtotal (excluding tax) |
| total | `String` | Cart grand total |
| discounts | `Array.<Object>` | Discounts applied to the cart |
| giftCards | `Array.<Object>` | Gift cards applied to the cart |
| taxes | `Array.<Object>` | Taxes applied to the cart |
| shipping | `Array.<Object>` | Shipping addresses associated with this cart |

<a name="PriceSummaryQueries"></a>

## PriceSummaryQueries : `Object`
GraphQL queries for price summary component.

**Kind**: global typedef  
**See**: [priceSummary.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.js)
for the queries used in Venia.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| getPriceSummary | `GraphQLAST` | Query to get the price summary for a cart |

<a name="PriceSummaryTalonProps"></a>

## PriceSummaryTalonProps : `Object`
Props used for rendering a price summary component.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| handleProceedToCheckout | `function` | Callback function which navigates the browser to the checkout |
| hasError | `boolean` | True if a GraphQL query returns an error. False otherwise. |
| hasItems | `boolean` | True if the cart has any items. False otherwise. |
| isLoading | `boolean` | True while the GraphQL query is still in flight. False otherwise. |
| flatData | [`FlattenedData`](#FlattenedData) | Query data that has been flattened into a simple object |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/PriceSummary/usePriceSummary.js).