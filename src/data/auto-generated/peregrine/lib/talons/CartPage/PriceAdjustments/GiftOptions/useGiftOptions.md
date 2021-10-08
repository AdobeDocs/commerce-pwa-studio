## Functions

<dl>
<dt><a href="#useGiftOptions">useGiftOptions(props)</a> ⇒ <code><a href="#GiftOptionsTalonProps">GiftOptionsTalonProps</a></code></dt>
<dd><p>This talon contains the logic for a gift options component.
It performs effects and returns a data object containing values for rendering the component.</p>
<p>This talon performs the following effects:</p>
<ul>
<li>Fetch the gift options associated with the cart</li>
<li>Update the <a href="#GiftOptionsTalonProps">GiftOptionsTalonProps</a> values with the data returned by the query</li>
</ul>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#GiftOptionsMutations">GiftOptionsMutations</a> : <code>Object</code></dt>
<dd><p>GraphQL mutations for Gift Options</p>
</dd>
<dt><a href="#GiftOptionsQueries">GiftOptionsQueries</a> : <code>Object</code></dt>
<dd><p>GraphQL query for Gift Options</p>
</dd>
<dt><a href="#GiftOptionsTalonProps">GiftOptionsTalonProps</a> : <code>Object</code></dt>
<dd><p>Props data to use when rendering a gift options component.</p>
</dd>
</dl>

<a name="useGiftOptions"></a>

## useGiftOptions(props) ⇒ [<code>GiftOptionsTalonProps</code>](#GiftOptionsTalonProps)
This talon contains the logic for a gift options component.
It performs effects and returns a data object containing values for rendering the component.

This talon performs the following effects:

- Fetch the gift options associated with the cart
- Update the [GiftOptionsTalonProps](#GiftOptionsTalonProps) values with the data returned by the query

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.mutations | [<code>GiftOptionsMutations</code>](#GiftOptionsMutations) | GraphQL mutations for Gift Options |
| props.queries | [<code>GiftOptionsQueries</code>](#GiftOptionsQueries) | GraphQL queries for Gift Options |

**Example** *(Importing into your project)*  
```js
import { useGiftOptions } from '@magento/peregrine/lib/talons/CartPage/GiftOptions/useGiftOptions';
```
<a name="GiftOptionsMutations"></a>

## GiftOptionsMutations : <code>Object</code>
GraphQL mutations for Gift Options

**Kind**: global typedef  
**See**: [giftOptions.gql.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.gql.js)
for the query Venia uses.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| setGiftOptionsMutation | <code>GraphQLAST</code> | Mutation to use for setting the gift options for the cart |

<a name="GiftOptionsQueries"></a>

## GiftOptionsQueries : <code>Object</code>
GraphQL query for Gift Options

**Kind**: global typedef  
**See**: [giftOptions.gql.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.gql.js)
for the query Venia uses.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| getGiftOptionsQuery | <code>GraphQLAST</code> | Query to get gift options data |

<a name="GiftOptionsTalonProps"></a>

## GiftOptionsTalonProps : <code>Object</code>
Props data to use when rendering a gift options component.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cardMessageProps | <code>object</code> | Props for the `cardMessage` textarea element. |
| giftReceiptProps | <code>object</code> | Props for the `includeGiftReceipt` checkbox element. |
| optionsFormProps | <code>object</code> | Props for the form element. |
| printedCardProps | <code>object</code> | Props for the `includePrintedCard` checkbox element. |
| shouldPromptForMessage | <code>function</code> | Determines whether to show the `cardMessage` textarea element. |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/PriceAdjustments/GiftOptions/useGiftOptions.js).