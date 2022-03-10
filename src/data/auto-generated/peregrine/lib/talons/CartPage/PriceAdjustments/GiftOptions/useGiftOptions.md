
Functions

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


Typedefs

<dl>
<dt><a href="#GiftOptionsTalonProps">GiftOptionsTalonProps</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Props data to use when rendering a gift options component.

</dd>
<dt><a href="#GiftOptionsOperations">GiftOptionsOperations</a> : <inlineCode>Object</inlineCode></dt>
<dd>

This is a type used by the [useGiftOptions](#useGiftOptions) talon.

</dd>
</dl>


This talon contains the logic for a gift options component.
It performs effects and returns a data object containing values for rendering the component.

This talon performs the following effects:

- Fetch the gift options associated with the cart
- Update the [GiftOptionsTalonProps](#GiftOptionsTalonProps) values with the data returned by the query

**Returns: **
**Parameters**

| Name | Type |
| --- | --- |
| props | `Object` | 
| props.operations | [`GiftOptionsOperations`](#GiftOptionsOperations) | 

**Example** *(Importing into your project)*  
```js
import { useGiftOptions } from '@magento/peregrine/lib/talons/CartPage/GiftOptions/useGiftOptions';
```

Props data to use when rendering a gift options component.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| loading | `Boolean` | Query loading indicator. |
| errors | `Object` | Errors for GraphQl query and mutation. |
| savingOptions | `Array` | Array containing fields that are busy. |
| giftReceiptProps | `Object` | Props for the `includeGiftReceipt` checkbox element. |
| printedCardProps | `Object` | Props for the `includePrintedCard` checkbox element. |
| printedCardPrice | `Object` | Printed Card Price object. |
| giftMessageCheckboxProps | `Object` | Props for the `includeGiftMessage` checkbox element. |
| giftMessageResult | `Object` | Object containing Gift Message data. |
| hasGiftMessage | `Boolean` | Checks if Gift Message data has all fields filled. |
| showGiftMessageResult | `Boolean` | Show or hide Gift Message result. |
| cardToProps | `Object` | Props for the `cardTo` text input element. |
| cardFromProps | `Object` | Props for the `cardFrom` text input element. |
| cardMessageProps | `Object` | Props for the `cardMessage` textarea element. |
| editGiftMessageButtonProps | `Object` | Props for the Edit Gift Message button. |
| cancelGiftMessageButtonProps | `Object` | Props for the Cancel Gift Message button. |
| saveGiftMessageButtonProps | `Object` | Props for the Update Gift Message button. |
| optionsFormProps | `Object` | Props for the form element. |


This is a type used by the [useGiftOptions](#useGiftOptions) talon.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| setGiftOptionsOnCartMutation | `GraphQLAST` | sets the gift options on cart. |
| getGiftOptionsQuery | `GraphQLAST` | fetch the gift options. |



**Source Code**: [pwa-studio/packages/peregrine/lib/talons/CartPage/PriceAdjustments/GiftOptions/useGiftOptions.js](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/PriceAdjustments/GiftOptions/useGiftOptions.js)