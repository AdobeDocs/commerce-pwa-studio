## Functions

<dl>
<dt><a href="#useGiftOptions">useGiftOptions(props)</a> ⇒ <inlineCode><a href="#GiftOptionsTalonProps">GiftOptionsTalonProps</a></inlineCode></dt>
<dd>

This talon contains the logic for a gift options component.
It performs effects and returns a data object containing values for rendering the component.

This talon performs the following effects:

- Fetch the gift options associated with the cart
- Update the [GiftOptionsTalonProps](#GiftOptionsTalonProps) values with the data returned by the query

</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#GiftOptionsMutations">GiftOptionsMutations</a> : <inlineCode>Object</inlineCode></dt>
<dd>

GraphQL mutations for Gift Options

</dd>
<dt><a href="#GiftOptionsQueries">GiftOptionsQueries</a> : <inlineCode>Object</inlineCode></dt>
<dd>

GraphQL query for Gift Options

</dd>
<dt><a href="#GiftOptionsTalonProps">GiftOptionsTalonProps</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Props data to use when rendering a gift options component.

</dd>
</dl>

<a name="useGiftOptions" id="useGiftOptions"></a>

## useGiftOptions(props) ⇒ [`GiftOptionsTalonProps`](#GiftOptionsTalonProps)

This talon contains the logic for a gift options component.
It performs effects and returns a data object containing values for rendering the component.

This talon performs the following effects:

- Fetch the gift options associated with the cart
- Update the [GiftOptionsTalonProps](#GiftOptionsTalonProps) values with the data returned by the query

**Kind**: global function

| Param           | Type                                            | Description                        |
| --------------- | ----------------------------------------------- | ---------------------------------- |
| props           | `Object`                                        |                                    |
| props.mutations | [`GiftOptionsMutations`](#GiftOptionsMutations) | GraphQL mutations for Gift Options |
| props.queries   | [`GiftOptionsQueries`](#GiftOptionsQueries)     | GraphQL queries for Gift Options   |

**Example** _(Importing into your project)_

```js
import { useGiftOptions } from "@magento/peregrine/lib/talons/CartPage/GiftOptions/useGiftOptions";
```

<a name="GiftOptionsMutations" id="GiftOptionsMutations"></a>

## GiftOptionsMutations : `Object`

GraphQL mutations for Gift Options

**Kind**: global typedef  
**See**: [giftOptions.gql.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.gql.js)
for the query Venia uses.  
**Properties**

| Name                   | Type         | Description                                               |
| ---------------------- | ------------ | --------------------------------------------------------- |
| setGiftOptionsMutation | `GraphQLAST` | Mutation to use for setting the gift options for the cart |

<a name="GiftOptionsQueries" id="GiftOptionsQueries"></a>

## GiftOptionsQueries : `Object`

GraphQL query for Gift Options

**Kind**: global typedef  
**See**: [giftOptions.gql.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.gql.js)
for the query Venia uses.  
**Properties**

| Name                | Type         | Description                    |
| ------------------- | ------------ | ------------------------------ |
| getGiftOptionsQuery | `GraphQLAST` | Query to get gift options data |

<a name="GiftOptionsTalonProps" id="GiftOptionsTalonProps"></a>

## GiftOptionsTalonProps : `Object`

Props data to use when rendering a gift options component.

**Kind**: global typedef  
**Properties**

| Name                         | Type       | Description                                                 |
| ---------------------------- | ---------- | ----------------------------------------------------------- |
| includeGiftReceipt           | `boolean`  | True if a gift receipt should be included. False otherwise. |
| includePrintedCard           | `boolean`  | True if a printed card should be included. False otherwise. |
| giftMessage                  | `String`   | Message to include with a gift.                             |
| toggleIncludeGiftReceiptFlag | `function` | Toggles the value of the `includeGiftReceipt` value.        |
| toggleIncludePrintedCardFlag | `function` | Toggles the value of the `includePrintedCard` value.        |
| updateGiftMessage            | `function` | Updates the gift message value.                             |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/GiftOptions/useGiftOptions.js).
