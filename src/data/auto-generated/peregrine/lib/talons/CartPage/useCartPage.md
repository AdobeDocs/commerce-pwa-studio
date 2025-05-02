
Functions

<dl>
<dt><a href="#useCartPage">useCartPage(props)</a> ⇒ <inlineCode><a href="#CartPageTalonProps">CartPageTalonProps</a></inlineCode></dt>
<dd>

This talon contains logic for a cart page component.
It performs effects and returns prop data for rendering the component.

This talon performs the following effects:

- Manages the updating state of the cart while cart details data is being fetched

</dd>
</dl>

Typedefs

<dl>
<dt><a href="#CartPageQueries">CartPageQueries</a> : <inlineCode>Object</inlineCode></dt>
<dd>

GraphQL formatted string queries used in this talon.

</dd>
<dt><a href="#CartPageTalonProps">CartPageTalonProps</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Props data to use when rendering a cart page component.

</dd>
</dl>

This talon contains logic for a cart page component.
It performs effects and returns prop data for rendering the component.

This talon performs the following effects:

- Manages the updating state of the cart while cart details data is being fetched

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| props.queries | [`CartPageQueries`](#CartPageQueries) | GraphQL queries |

**Example** *(Importing into your project)*  

```js
import { useCartPage } from '@magento/peregrine/lib/talons/CartPage/useCartPage';
```

GraphQL formatted string queries used in this talon.

**See**: [cartPage.gql.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/cartPage.gql.js)
for queries used in Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| getCartDetailsQuery | `GraphQLAST` | Query for getting the cart details. |

Props data to use when rendering a cart page component.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cartItems | `Array.<Object>` | An array of item objects in the cart. |
| hasItems | `boolean` | True if the cart has items. False otherwise. |
| isCartUpdating | `boolean` | True if the cart is updating. False otherwise. |
| setIsCartUpdating | `function` | Callback function for setting the updating state of the cart page. |
| shouldShowLoadingIndicator | `boolean` | True if the loading indicator should be rendered. False otherwise. |

**Source Code**: [pwa-studio/packages/peregrine/lib/talons/CartPage/useCartPage.js](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/useCartPage.js)
