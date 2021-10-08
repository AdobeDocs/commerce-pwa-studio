## Functions

<dl>
<dt><a href="#ProductListing">ProductListing(props)</a> ⇒ <code>React.Element</code></dt>
<dd><p>A child component of the CartPage component.
This component renders the product listing on the cart page.</p>
</dd>
<dt><a href="#EditModal">EditModal(props)</a> ⇒ <code>React.Element</code></dt>
<dd><p>A child component of the ProductListing component.
This component renders an edit modal for a product.</p>
</dd>
</dl>

<a name="ProductListing"></a>

## ProductListing(props) ⇒ <code>React.Element</code>
A child component of the CartPage component.
This component renders the product listing on the cart page.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.setIsCartUpdating | <code>function</code> | Function for setting the updating state of the cart. |
| props.classes | <code>Object</code> | CSS className overrides. See [productListing.module.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/productListing.module.css) for a list of classes you can override. |

**Example** *(Importing into your project)*  
```js
import ProductListing from "@magento/venia-ui/lib/components/CartPage/ProductListing";
```
<a name="EditModal"></a>

## EditModal(props) ⇒ <code>React.Element</code>
A child component of the ProductListing component.
This component renders an edit modal for a product.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.item | <code>Object</code> | Product to edit. |
| props.setActiveEditItem | <code>function</code> | Function for setting the actively editing item See [productListingFragments.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/productListingFragments.js) for a list of properties for this object. |
| props.setIsCartUpdating | <code>function</code> | Function for setting the updating state of the cart. |
| props.classes | <code>Object</code> | CSS className overrides. See [editModal.module.css](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/EditModal/editModal.module.css) for a list of classes you can override. |

**Example** *(Importing into your project)*  
```js
import EditModal from "@magento/venia-ui/lib/components/CartPage/ProductListing/EditModal";
```


For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/ProductListing/productListing.js).