## Functions

<dl>
<dt><a href="#useCartPage">useCartPage(props)</a> ⇒ <code><a href="#CartPageTalonProps">CartPageTalonProps</a></code></dt>
<dd><p>This talon contains logic for a cart page component.
It performs effects and returns prop data for rendering the component.</p>
<p>This talon performs the following effects:</p>
<ul>
<li>Manages the updating state of the cart while cart details data is being fetched</li>
</ul>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#CartPageQueries">CartPageQueries</a> : <code>Object</code></dt>
<dd><p>GraphQL formatted string queries used in this talon.</p>
</dd>
<dt><a href="#CartPageTalonProps">CartPageTalonProps</a> : <code>Object</code></dt>
<dd><p>Props data to use when rendering a cart page component.</p>
</dd>
</dl>

<a name="useCartPage"></a>

## useCartPage(props) ⇒ [<code>CartPageTalonProps</code>](#CartPageTalonProps)
This talon contains logic for a cart page component.
It performs effects and returns prop data for rendering the component.

This talon performs the following effects:

- Manages the updating state of the cart while cart details data is being fetched

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.queries | [<code>CartPageQueries</code>](#CartPageQueries) | GraphQL queries |

**Example** *(Importing into your project)*  
```js
import { useCartPage } from '@magento/peregrine/lib/talons/CartPage/useCartPage';
```
<a name="CartPageQueries"></a>

## CartPageQueries : <code>Object</code>
GraphQL formatted string queries used in this talon.

**Kind**: global typedef  
**See**: [cartPage.gql.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/cartPage.gql.js)
for queries used in Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| getCartDetailsQuery | <code>GraphQLAST</code> | Query for getting the cart details. |

<a name="CartPageTalonProps"></a>

## CartPageTalonProps : <code>Object</code>
Props data to use when rendering a cart page component.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cartItems | <code>Array.&lt;Object&gt;</code> | An array of item objects in the cart. |
| hasItems | <code>boolean</code> | True if the cart has items. False otherwise. |
| isCartUpdating | <code>boolean</code> | True if the cart is updating. False otherwise. |
| setIsCartUpdating | <code>function</code> | Callback function for setting the updating state of the cart page. |
| shouldShowLoadingIndicator | <code>boolean</code> | True if the loading indicator should be rendered. False otherwise. |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/useCartPage.js).