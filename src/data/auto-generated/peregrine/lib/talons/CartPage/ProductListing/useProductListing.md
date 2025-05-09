
Functions

<dl>
<dt><a href="#useProductListing">useProductListing(props)</a> ⇒ <inlineCode><a href="#ProductListingTalonProps">ProductListingTalonProps</a></inlineCode></dt>
<dd>

This talon contains logic for a component that renders a list of products for a cart.
It performs effects and returns prop data to render the component on a cart page.

This talon performs the following effects:

- Fetch product listing data associated with the cart
- Log any GraphQL errors to the console

</dd>
<dt><a href="#useProduct">useProduct(props)</a> ⇒ <inlineCode><a href="#ProductTalonProps">ProductTalonProps</a></inlineCode></dt>
<dd>

This talon contains logic for a product component used in a product listing component.
It performs effects and returns prop data for that component.

This talon performs the following effects:

- Manage the updating state of the cart while a product is being updated or removed

</dd>
<dt><a href="#useEditModal">useEditModal()</a> ⇒ <inlineCode><a href="#EditModalTalonProps">EditModalTalonProps</a></inlineCode></dt>
<dd>

This talon contains logic for a product edit modal used on a cart page.
It returns prop data for rendering an interactive modal component.

</dd>
<dt><a href="#deriveOptionSelectionsFromProduct">deriveOptionSelectionsFromProduct(props)</a> ⇒ <inlineCode><a href="#ProductFormTalonProps">ProductFormTalonProps</a></inlineCode></dt>
<dd>

This talon contains logic for a product edit form.
It performs effects and returns data for rendering the component inside a modal container.

This talon performs the following effects:

- Manage the updating state of the cart while form data is being saved
- Set the variant price on a product depending on the product's options

</dd>
</dl>

Typedefs

<dl>
<dt><a href="#ProductListingQueries">ProductListingQueries</a> : <inlineCode>Object</inlineCode></dt>
<dd>

GraphQL queries for getting product listing data.
This is a type used in the [useProductListing](#useProductListing) talon.

</dd>
<dt><a href="#ProductListingTalonProps">ProductListingTalonProps</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Object type returned by the [useProductListing](#useProductListing) talon.
It provides props data for a component that renders a product list.

</dd>
<dt><a href="#ProductMutations">ProductMutations</a> : <inlineCode>Object</inlineCode></dt>
<dd>

GraphQL mutations for a product in a cart.
This is a type used by the [useProduct](#useProduct) talon.

</dd>
<dt><a href="#ProductTalonProps">ProductTalonProps</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Object type returned by the [useProduct](#useProduct) talon.
It provides prop data for rendering a product component on a cart page.

</dd>
<dt><a href="#ProductItem">ProductItem</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Data about a product item in the cart.
This type is used in the [ProductTalonProps](#ProductTalonProps) type returned by the [useProduct](#useProduct) talon.

</dd>
<dt><a href="#QuantityTalonProps">QuantityTalonProps</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Object type returned by the [useQuantityStepper](useQuantityStepper) talon.
It provides props data for a quantity UI component.

</dd>
<dt><a href="#EditModalTalonProps">EditModalTalonProps</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Object type returned by the [useEditModal](#useEditModal) talon.
It provides props data for rendering an edit modal component.

</dd>
<dt><a href="#ProductFormTalonProps">ProductFormTalonProps</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Object type returned by the [useProductForm](useProductForm) talon.
It provides props data for a product form UI component inside a modal.

</dd>
</dl>

This talon contains logic for a component that renders a list of products for a cart.
It performs effects and returns prop data to render the component on a cart page.

This talon performs the following effects:

- Fetch product listing data associated with the cart
- Log any GraphQL errors to the console

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| props.queries | [`ProductListingQueries`](#ProductListingQueries) | GraphQL queries for getting product listing data. |

**Example** *(Importing into your project)*

```js
import { useProductListing } from '@magento/peregrine/lib/talons/CartPage/ProductListing/useProductListing';
```

This talon contains logic for a product component used in a product listing component.
It performs effects and returns prop data for that component.

This talon performs the following effects:

- Manage the updating state of the cart while a product is being updated or removed

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| props.item | [`ProductItem`](#ProductItem) | Product item data |
| props.operations | [`ProductMutations`](#ProductMutations) | GraphQL mutations for a product in a cart |
| props.setActiveEditItem | `function` | Function for setting the actively editing item |
| props.setIsCartUpdating | `function` | Function for setting the updating state of the cart |

**Example** *(Importing into your project)*

```js
import { useProduct } from '@magento/peregrine/lib/talons/CartPage/ProductListing/useProduct';
```

This talon contains logic for a product edit modal used on a cart page.
It returns prop data for rendering an interactive modal component.

**Returns:**
**Example** *(Importing into your project)*

```js
import { useEditModal } from '@magento/peregrine/lib/talons/CartPage/ProductListing/EditModal/useEditModal';
```

This talon contains logic for a product edit form.
It performs effects and returns data for rendering the component inside a modal container.

This talon performs the following effects:

- Manage the updating state of the cart while form data is being saved
- Set the variant price on a product depending on the product's options

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| props.cartItem | `Object` | The cart item to configure on the form |
| props.getConfigurableOptionsQuery | `GraphQLDocument` | GraphQL query to get the configurable options for a product. |
| props.setIsCartUpdating | `function` | Function for setting the updating state for the shopping cart. |
| props.setVariantPrice | `function` | Function for setting the variant price on a product. |
| props.updateConfigurableOptionsMutation | `GraphQLDocument` | GraphQL mutation for updating the configurable options for a product. |
| props.updateQuantityMutation | `GraphQLDocument` | GraphQL mutation for updating the quantity of a product in a cart. |
| props.setActiveEditItem | `function` | Function for setting the actively editing item. |

**Example** *(Importing into your project)*

```js
import { useProductForm } from '@magento/peregrine/lib/talons/CartPage/ProductListing/EditModal/useProductForm';
```

GraphQL queries for getting product listing data.
This is a type used in the [useProductListing](#useProductListing) talon.

**See**: [productListingFragments.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/productListingFragments.js)
for the queries used in Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| getProductListingQuery | `GraphQLDocument` | Query to get the product list for a cart |

Object type returned by the [useProductListing](#useProductListing) talon.
It provides props data for a component that renders a product list.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| activeEditItem | `Object` | The product item currently being edited |
| isLoading | `boolean` | True if the query to get the product listing is still in progress. False otherwise. |
| error | `Error` \| `null` | An array of graphql errors |
| items | `Array.<Object>` | A list of products in a cart |
| setActiveEditItem | `function` | Function for setting the current item to edit |

GraphQL mutations for a product in a cart.
This is a type used by the [useProduct](#useProduct) talon.

**See**: [product.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/product.js)
to see the mutations used in Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| removeItemMutation | `GraphQLDocument` | Mutation for removing an item in a cart |
| updateItemQuantityMutation | `GraphQLDocument` | Mutation for updating the item quantity in a cart |

Object type returned by the [useProduct](#useProduct) talon.
It provides prop data for rendering a product component on a cart page.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| errorMessage | `String` | Error message from an operation perfored on a cart product. |
| handleEditItem | `function` | Function to use for handling when a product is modified. |
| handleRemoveFromCart | `function` | Function to use for handling the removal of a cart product. |
| handleUpdateItemQuantity | `function` | Function to use for handling updates to the product quantity in a cart. |
| isEditable | `boolean` | True if a cart product is editable. False otherwise. |
| product | [`ProductItem`](#ProductItem) | Cart product data |

Data about a product item in the cart.
This type is used in the [ProductTalonProps](#ProductTalonProps) type returned by the [useProduct](#useProduct) talon.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| currency | `String` | The currency associated with the cart product |
| image | `String` | The url for the cart product image |
| name | `String` | The name of the product |
| options | `Array.<Object>` | A list of configurable option objects |
| quantity | `number` | The quantity associated with the cart product |
| unitPrice | `number` | The product's unit price |
| urlKey | `String` | The product's url key |
| urlSuffix | `String` | The product's url suffix |

Object type returned by the [useQuantityStepper](useQuantityStepper) talon.
It provides props data for a quantity UI component.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isDecrementDisabled | `boolean` | True if decrementing should be disabled |
| isIncrementDisabled | `boolean` | True if incrementing should be disabled |
| handleBlur | `function` | Callback function for handling a blur event on a component |
| handleDecrement | `function` | Callback function for handling a quantity decrement event |
| handleIncrement | `function` | Callback function for handling an increment event |
| maskInput | `function` | Function for masking a value when decimal values are allowed |

Object type returned by the [useEditModal](#useEditModal) talon.
It provides props data for rendering an edit modal component.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| setVariantPrice | `function` | Function for setting a product's variant price. |
| variantPrice | `Object` | The variant price for a product. See [Money object](https://devdocs.magento.com/guides/v2.4/graphql/product/product-interface.html#Money). |

Object type returned by the [useProductForm](useProductForm) talon.
It provides props data for a product form UI component inside a modal.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| configItem | `Object` | Cart item to configure |
| errors | `Array.<Error>` | An array of form errors resulting from a configuration or quantity value |
| handleOptionSelection | `function` | A callback function handling an option selection event |
| handleSubmit | `function` | A callback function for handling form submission |
| isLoading | `boolean` | True if the form is loading data. False otherwise. |
| isSaving | `boolean` | True if the form is saving data. False otherwise. |
| isDialogOpen | `boolean` | True if the form is visible. False otherwise. |
| handleClose | `function` | A callback function for handling form closing |
| configurableThumbnailSource | `String` | A string indicating which thumbnail should be used for configurable products |

**Source Code**: [pwa-studio/packages/peregrine/lib/talons/CartPage/ProductListing/useProductListing.js](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/ProductListing/useProductListing.js)
