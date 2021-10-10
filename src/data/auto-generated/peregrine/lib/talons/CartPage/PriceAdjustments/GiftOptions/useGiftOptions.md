##Functions

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

##Typedefs

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


This talon contains the logic for a gift options component.
It performs effects and returns a data object containing values for rendering the component.

This talon performs the following effects:

- Fetch the gift options associated with the cart
- Update the [GiftOptionsTalonProps](#GiftOptionsTalonProps) values with the data returned by the query

*global* *function*
**Example** *(Importing into your project)*  
```js
import { useGiftOptions } from '@magento/peregrine/lib/talons/CartPage/GiftOptions/useGiftOptions';
```

GraphQL mutations for Gift Options

*global* *typedef*
**See**: [giftOptions.gql.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.gql.js)
for the query Venia uses.  

| Prop name | Type | Description |
| --- | --- | --- |
| setGiftOptionsMutation | `GraphQLAST` | Mutation to use for setting the gift options for the cart |


GraphQL query for Gift Options

*global* *typedef*
**See**: [giftOptions.gql.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/GiftOptions/giftOptions.gql.js)
for the query Venia uses.  

| Prop name | Type | Description |
| --- | --- | --- |
| getGiftOptionsQuery | `GraphQLAST` | Query to get gift options data |


Props data to use when rendering a gift options component.

*global* *typedef*

| Prop name | Type | Description |
| --- | --- | --- |
| cardMessageProps | `object` | Props for the `cardMessage` textarea element. |
| giftReceiptProps | `object` | Props for the `includeGiftReceipt` checkbox element. |
| optionsFormProps | `object` | Props for the form element. |
| printedCardProps | `object` | Props for the `includePrintedCard` checkbox element. |
| shouldPromptForMessage | `function` | Determines whether to show the `cardMessage` textarea element. |



[pwa-studio/packages/peregrine/lib/talons/CartPage/PriceAdjustments/GiftOptions/useGiftOptions.js](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/PriceAdjustments/GiftOptions/useGiftOptions.js)