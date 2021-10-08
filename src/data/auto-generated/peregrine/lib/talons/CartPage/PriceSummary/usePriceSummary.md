## Functions

<dl>
<dt><a href="#usePriceSummary">usePriceSummary(props)</a> ⇒ <code><a href="#PriceSummaryTalonProps">PriceSummaryTalonProps</a></code></dt>
<dd><p>This talon contains logic for a price summary component.
It performs effects and returns prop data for rendering the component.</p>
<p>This talon performs the following effects:</p>
<ul>
<li>Log a GraphQL error if it occurs when getting the price summary</li>
</ul>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#FlattenedData">FlattenedData</a> : <code>Object</code></dt>
<dd><p>Query data flattened into a simple object.</p>
</dd>
<dt><a href="#PriceSummaryQueries">PriceSummaryQueries</a> : <code>Object</code></dt>
<dd><p>GraphQL queries for price summary component.</p>
</dd>
<dt><a href="#PriceSummaryTalonProps">PriceSummaryTalonProps</a> : <code>Object</code></dt>
<dd><p>Props used for rendering a price summary component.</p>
</dd>
</dl>

<a name="usePriceSummary"></a>

## usePriceSummary(props) ⇒ [<code>PriceSummaryTalonProps</code>](#PriceSummaryTalonProps)
This talon contains logic for a price summary component.
It performs effects and returns prop data for rendering the component.

This talon performs the following effects:

- Log a GraphQL error if it occurs when getting the price summary

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.queries | [<code>PriceSummaryQueries</code>](#PriceSummaryQueries) | GraphQL queries for a price summary component. |

**Example** *(Importing into your project)*  
```js
import { usePriceSummary } from '@magento/peregrine/lib/talons/CartPage/PriceSummary/usePriceSummary';
```
<a name="FlattenedData"></a>

## FlattenedData : <code>Object</code>
Query data flattened into a simple object.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| subtotal | <code>String</code> | Cart subtotal (excluding tax) |
| total | <code>String</code> | Cart grand total |
| discounts | <code>Array.&lt;Object&gt;</code> | Discounts applied to the cart |
| giftCards | <code>Array.&lt;Object&gt;</code> | Gift cards applied to the cart |
| taxes | <code>Array.&lt;Object&gt;</code> | Taxes applied to the cart |
| shipping | <code>Array.&lt;Object&gt;</code> | Shipping addresses associated with this cart |

<a name="PriceSummaryQueries"></a>

## PriceSummaryQueries : <code>Object</code>
GraphQL queries for price summary component.

**Kind**: global typedef  
**See**: [priceSummary.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.js)
for the queries used in Venia.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| getPriceSummary | <code>GraphQLAST</code> | Query to get the price summary for a cart |

<a name="PriceSummaryTalonProps"></a>

## PriceSummaryTalonProps : <code>Object</code>
Props used for rendering a price summary component.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| handleProceedToCheckout | <code>function</code> | Callback function which navigates the browser to the checkout |
| hasError | <code>boolean</code> | True if a GraphQL query returns an error. False otherwise. |
| hasItems | <code>boolean</code> | True if the cart has any items. False otherwise. |
| isLoading | <code>boolean</code> | True while the GraphQL query is still in flight. False otherwise. |
| flatData | [<code>FlattenedData</code>](#FlattenedData) | Query data that has been flattened into a simple object |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/PriceSummary/usePriceSummary.js).