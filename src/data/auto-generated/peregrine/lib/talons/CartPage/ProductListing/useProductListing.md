## Functions

<dl>
<dt><a href="#useProductListing">useProductListing(props)</a> ⇒ <code><a href="#ProductListingTalonProps">ProductListingTalonProps</a></code></dt>
<dd><p>This talon contains logic for a component that renders a list of products for a cart.
It performs effects and returns prop data to render the component on a cart page.</p>
<p>This talon performs the following effects:</p>
<ul>
<li>Fetch product listing data associated with the cart</li>
<li>Log any GraphQL errors to the console</li>
</ul>
</dd>
<dt><a href="#useProduct">useProduct(props)</a> ⇒ <code><a href="#ProductTalonProps">ProductTalonProps</a></code></dt>
<dd><p>This talon contains logic for a product component used in a product listing component.
It performs effects and returns prop data for that component.</p>
<p>This talon performs the following effects:</p>
<ul>
<li>Manage the updating state of the cart while a product is being updated or removed</li>
</ul>
</dd>
<dt><a href="#useQuantity">useQuantity(props)</a> ⇒ <code><a href="#QuantityTalonProps">QuantityTalonProps</a></code></dt>
<dd><p>This talon contains logic for a product quantity UI component.
It performs effects and returns prop data for rendering a component that lets you
modify the quantity of a cart item.</p>
<p>This talon performs the following effects:</p>
<ul>
<li>Updates the state of the quantity field when the initial value changes</li>
</ul>
</dd>
<dt><a href="#useEditModal">useEditModal()</a> ⇒ <code><a href="#EditModalTalonProps">EditModalTalonProps</a></code></dt>
<dd><p>This talon contains logic for a product edit modal used on a cart page.
It returns prop data for rendering an interactive modal component.</p>
</dd>
<dt><a href="#useProductForm">useProductForm(props)</a> ⇒ <code><a href="#ProductFormTalonProps">ProductFormTalonProps</a></code></dt>
<dd><p>This talon contains logic for a product edit form.
It performs effects and returns data for rendering the component inside a modal container.</p>
<p>This talon performs the following effects:</p>
<ul>
<li>Manage the updating state of the cart while form data is being saved</li>
<li>Set the variant price on a product depending on the product&#39;s options</li>
</ul>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ProductListingQueries">ProductListingQueries</a> : <code>Object</code></dt>
<dd><p>GraphQL queries for getting product listing data.
This is a type used in the <a href="#useProductListing">useProductListing</a> talon.</p>
</dd>
<dt><a href="#ProductListingTalonProps">ProductListingTalonProps</a> : <code>Object</code></dt>
<dd><p>Object type returned by the <a href="#useProductListing">useProductListing</a> talon.
It provides props data for a component that renders a product list.</p>
</dd>
<dt><a href="#ProductMutations">ProductMutations</a> : <code>Object</code></dt>
<dd><p>GraphQL mutations for a product in a cart.
This is a type used by the <a href="#useProduct">useProduct</a> talon.</p>
</dd>
<dt><a href="#ProductTalonProps">ProductTalonProps</a> : <code>Object</code></dt>
<dd><p>Object type returned by the <a href="#useProduct">useProduct</a> talon.
It provides prop data for rendering a product component on a cart page.</p>
</dd>
<dt><a href="#ProductItem">ProductItem</a> : <code>Object</code></dt>
<dd><p>Data about a product item in the cart.
This type is used in the <a href="#ProductTalonProps">ProductTalonProps</a> type returned by the <a href="#useProduct">useProduct</a> talon.</p>
</dd>
<dt><a href="#QuantityTalonProps">QuantityTalonProps</a> : <code>Object</code></dt>
<dd><p>Object type returned by the <a href="#useQuantity">useQuantity</a> talon.
It provides props data for a quantity UI component.</p>
</dd>
<dt><a href="#EditModalTalonProps">EditModalTalonProps</a> : <code>Object</code></dt>
<dd><p>Object type returned by the <a href="#useEditModal">useEditModal</a> talon.
It provides props data for rendering an edit modal component.</p>
</dd>
<dt><a href="#ProductFormTalonProps">ProductFormTalonProps</a> : <code>Object</code></dt>
<dd><p>Object type returned by the <a href="#useProductForm">useProductForm</a> talon.
It provides props data for a product form UI component inside a modal.</p>
</dd>
</dl>

<a name="useProductListing"></a>

## useProductListing(props) ⇒ [<code>ProductListingTalonProps</code>](#ProductListingTalonProps)
This talon contains logic for a component that renders a list of products for a cart.
It performs effects and returns prop data to render the component on a cart page.

This talon performs the following effects:

- Fetch product listing data associated with the cart
- Log any GraphQL errors to the console

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.queries | [<code>ProductListingQueries</code>](#ProductListingQueries) | GraphQL queries for getting product listing data. |

**Example** *(Importing into your project)*  
```js
import { useProductListing } from '@magento/peregrine/lib/talons/CartPage/ProductListing/useProductListing';
```
<a name="useProduct"></a>

## useProduct(props) ⇒ [<code>ProductTalonProps</code>](#ProductTalonProps)
This talon contains logic for a product component used in a product listing component.
It performs effects and returns prop data for that component.

This talon performs the following effects:

- Manage the updating state of the cart while a product is being updated or removed

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.item | [<code>ProductItem</code>](#ProductItem) | Product item data |
| props.operations | [<code>ProductMutations</code>](#ProductMutations) | GraphQL mutations for a product in a cart |
| props.setActiveEditItem | <code>function</code> | Function for setting the actively editing item |
| props.setIsCartUpdating | <code>function</code> | Function for setting the updating state of the cart |

**Example** *(Importing into your project)*  
```js
import { useProduct } from '@magento/peregrine/lib/talons/CartPage/ProductListing/useProduct';
```
<a name="useQuantity"></a>

## useQuantity(props) ⇒ [<code>QuantityTalonProps</code>](#QuantityTalonProps)
This talon contains logic for a product quantity UI component.
It performs effects and returns prop data for rendering a component that lets you
modify the quantity of a cart item.

This talon performs the following effects:

- Updates the state of the quantity field when the initial value changes

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.initialValue | <code>number</code> | the initial quantity value |
| props.min | <code>number</code> | the minimum allowed quantity value |
| props.onChange | <code>function</code> | change handler to invoke when quantity value changes |

**Example** *(Importing into your project)*  
```js
import { useQuantity } from '@magento/peregrine/lib/talons/CartPage/ProductListing/useQuantity';
```
<a name="useEditModal"></a>

## useEditModal() ⇒ [<code>EditModalTalonProps</code>](#EditModalTalonProps)
This talon contains logic for a product edit modal used on a cart page.
It returns prop data for rendering an interactive modal component.

**Kind**: global function  
**Example** *(Importing into your project)*  
```js
import { useEditModal } from '@magento/peregrine/lib/talons/CartPage/ProductListing/EditModal/useEditModal';
```
<a name="useProductForm"></a>

## useProductForm(props) ⇒ [<code>ProductFormTalonProps</code>](#ProductFormTalonProps)
This talon contains logic for a product edit form.
It performs effects and returns data for rendering the component inside a modal container.

This talon performs the following effects:

- Manage the updating state of the cart while form data is being saved
- Set the variant price on a product depending on the product's options

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.cartItem | <code>Object</code> | The cart item to configure on the form |
| props.getConfigurableOptionsQuery | <code>GraphQLAST</code> | GraphQL query to get the configurable options for a product. |
| props.setIsCartUpdating | <code>function</code> | Function for setting the updating state for the shopping cart. |
| props.setVariantPrice | <code>function</code> | Function for setting the variant price on a product. |
| props.updateConfigurableOptionsMutation | <code>GraphQLAST</code> | GraphQL mutation for updating the configurable options for a product. |
| props.updateQuantityMutation | <code>GraphQLAST</code> | GraphQL mutation for updating the quantity of a product in a cart. |
| props.setActiveEditItem | <code>function</code> | Function for setting the actively editing item. |

**Example** *(Importing into your project)*  
```js
import { useProductForm } from '@magento/peregrine/lib/talons/CartPage/ProductListing/EditModal/useProductForm';
```
<a name="ProductListingQueries"></a>

## ProductListingQueries : <code>Object</code>
GraphQL queries for getting product listing data.
This is a type used in the [useProductListing](#useProductListing) talon.

**Kind**: global typedef  
**See**: [productListingFragments.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/productListingFragments.js)
for the queries used in Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| getProductListingQuery | <code>GraphQLDocument</code> | Query to get the product list for a cart |

<a name="ProductListingTalonProps"></a>

## ProductListingTalonProps : <code>Object</code>
Object type returned by the [useProductListing](#useProductListing) talon.
It provides props data for a component that renders a product list.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| activeEditItem | <code>Object</code> | The product item currently being edited |
| isLoading | <code>boolean</code> | True if the query to get the product listing is still in progress. False otherwise. |
| items | <code>Array.&lt;Object&gt;</code> | A list of products in a cart |
| setActiveEditItem | <code>function</code> | Function for setting the current item to edit |

<a name="ProductMutations"></a>

## ProductMutations : <code>Object</code>
GraphQL mutations for a product in a cart.
This is a type used by the [useProduct](#useProduct) talon.

**Kind**: global typedef  
**See**: [product.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/product.js)
to see the mutations used in Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| removeItemMutation | <code>GraphQLDocument</code> | Mutation for removing an item in a cart |
| updateItemQuantityMutation | <code>GraphQLDocument</code> | Mutation for updating the item quantity in a cart |

<a name="ProductTalonProps"></a>

## ProductTalonProps : <code>Object</code>
Object type returned by the [useProduct](#useProduct) talon.
It provides prop data for rendering a product component on a cart page.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| errorMessage | <code>String</code> | Error message from an operation perfored on a cart product. |
| handleEditItem | <code>function</code> | Function to use for handling when a product is modified. |
| handleRemoveFromCart | <code>function</code> | Function to use for handling the removal of a cart product. |
| handleUpdateItemQuantity | <code>function</code> | Function to use for handling updates to the product quantity in a cart. |
| isEditable | <code>boolean</code> | True if a cart product is editable. False otherwise. |
| product | [<code>ProductItem</code>](#ProductItem) | Cart product data |

<a name="ProductItem"></a>

## ProductItem : <code>Object</code>
Data about a product item in the cart.
This type is used in the [ProductTalonProps](#ProductTalonProps) type returned by the [useProduct](#useProduct) talon.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| currency | <code>String</code> | The currency associated with the cart product |
| image | <code>String</code> | The url for the cart product image |
| name | <code>String</code> | The name of the product |
| options | <code>Array.&lt;Object&gt;</code> | A list of configurable option objects |
| quantity | <code>number</code> | The quantity associated with the cart product |
| unitPrice | <code>number</code> | The product's unit price |
| urlKey | <code>String</code> | The product's url key |
| urlSuffix | <code>String</code> | The product's url suffix |

<a name="QuantityTalonProps"></a>

## QuantityTalonProps : <code>Object</code>
Object type returned by the [useQuantity](#useQuantity) talon.
It provides props data for a quantity UI component.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isDecrementDisabled | <code>boolean</code> | True if decrementing should be disabled |
| isIncrementDisabled | <code>boolean</code> | True if incrementing should be disabled |
| handleBlur | <code>function</code> | Callback function for handling a blur event on a component |
| handleDecrement | <code>function</code> | Callback function for handling a quantity decrement event |
| handleIncrement | <code>function</code> | Callback function for handling an increment event |
| maskInput | <code>function</code> | Function for masking a value when decimal values are allowed |

<a name="EditModalTalonProps"></a>

## EditModalTalonProps : <code>Object</code>
Object type returned by the [useEditModal](#useEditModal) talon.
It provides props data for rendering an edit modal component.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| setVariantPrice | <code>function</code> | Function for setting a product's variant price. |
| variantPrice | <code>Object</code> | The variant price for a product. See [Money object](https://devdocs.magento.com/guides/v2.4/graphql/product/product-interface.html#Money). |

<a name="ProductFormTalonProps"></a>

## ProductFormTalonProps : <code>Object</code>
Object type returned by the [useProductForm](#useProductForm) talon.
It provides props data for a product form UI component inside a modal.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| configItem | <code>Object</code> | Cart item to configure |
| errors | <code>Array.&lt;Error&gt;</code> | An array of form errors resulting from a configuration or quantity value |
| handleOptionSelection | <code>function</code> | A callback function handling an option selection event |
| handleSubmit | <code>function</code> | A callback function for handling form submission |
| isLoading | <code>boolean</code> | True if the form is loading data. False otherwise. |
| isSaving | <code>boolean</code> | True if the form is saving data. False otherwise. |
| isDialogOpen | <code>boolean</code> | True if the form is visible. False otherwise. |
| handleClose | <code>function</code> | A callback function for handling form closing |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/ProductListing/useProductListing.js).