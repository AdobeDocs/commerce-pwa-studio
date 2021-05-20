## Functions

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

<a name="ProductListing"></a>

## ProductListing(props) ⇒ `React.Element`

A child component of the CartPage component.
This component renders the product listing on the cart page.

**Kind**: global function

| Param                   | Type       | Description                                                                                                                                                                                                               |
| ----------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| props                   | `Object`   |                                                                                                                                                                                                                           |
| props.setIsCartUpdating | `function` | Function for setting the updating state of the cart.                                                                                                                                                                      |
| props.classes           | `Object`   | CSS className overrides. See [productListing.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/productListing.css) for a list of classes you can override. |

**Example** _(Importing into your project)_

```js
import ProductListing from "@magento/venia-ui/lib/components/CartPage/ProductListing";
```

<a name="EditModal"></a>

## EditModal(props) ⇒ `React.Element`

A child component of the ProductListing component.
This component renders an edit modal for a product.

**Kind**: global function

| Param                   | Type       | Description                                                                                                                                                                                                                                                       |
| ----------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| props                   | `Object`   |                                                                                                                                                                                                                                                                   |
| props.item              | `Object`   | Product to edit.                                                                                                                                                                                                                                                  |
| props.setActiveEditItem | `function` | Function for setting the actively editing item See [productListingFragments.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/productListingFragments.js) for a list of properties for this object. |
| props.setIsCartUpdating | `function` | Function for setting the updating state of the cart.                                                                                                                                                                                                              |
| props.classes           | `Object`   | CSS className overrides. See [editModal.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/EditModal/editModal.css) for a list of classes you can override.                                         |

**Example** _(Importing into your project)_

```js
import EditModal from "@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal";
```

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/productListing.js).
