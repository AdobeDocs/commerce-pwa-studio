
Functions

<dl>
<dt><a href="#ProductListing">ProductListing(props)</a> ⇒ <inlineCode>React.Element</inlineCode></dt>
<dd>

A child component of the CartPage component.
This component renders the product listing on the cart page.

</dd>
<dt><a href="#EditModal">EditModal(props)</a> ⇒ <inlineCode>React.Element</inlineCode></dt>
<dd>

A child component of the ProductListing component.
This component renders an edit modal for a product.

</dd>
</dl>

A child component of the CartPage component.
This component renders the product listing on the cart page.

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| props.setIsCartUpdating | `function` | Function for setting the updating state of the cart. |
| props.classes | `Object` | CSS className overrides. See [productListing.module.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/productListing.module.css) for a list of classes you can override. |

**Example** *(Importing into your project)*

```js

import ProductListing from "@magento/venia-ui/lib/components/CartPage/ProductListing";
```

A child component of the ProductListing component.
This component renders an edit modal for a product.

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| props.item | `Object` | Product to edit. |
| props.setActiveEditItem | `function` | Function for setting the actively editing item See [productListingFragments.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/productListingFragments.js) for a list of properties for this object. |
| props.setIsCartUpdating | `function` | Function for setting the updating state of the cart. |
| props.classes | `Object` | CSS className overrides. See [editModal.module.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/EditModal/editModal.module.css) for a list of classes you can override. |

**Example** *(Importing into your project)*

```js

import EditModal from "@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal";
```

**Source Code**: [pwa-studio/packages/venia-ui/lib/components/CartPage/ProductListing/productListing.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/productListing.js)
