---
title: ProductListing
description: View detailed API reference documentation for the ProductListing talon in the Peregrine package of the PWA Studio framework.
---

# ProductListing

These talons provide logic for components that render products in a shopping cart and forms that update the quantity or configuration for each product.

\<!--
The reference doc content is generated automatically from the source code.
To update this section, update the doc blocks in the source code
--\>

<Fragment src='../../../../../includes/auto-generated/peregrine/lib/talons/cart-page/product-listing/use-product-listing.md'/>

## Examples

### useProductListing()

```jsx
import React from 'react';
import { useProductListing } from '@magento/peregrine/lib/talons/CartPage/ProductListing/useProductListing';

import { GET_PRODUCT_LISTING } from './myProductListing.gql';

const MyProductListing = props => {
    const { setIsCartUpdating } = props;

    const talonProps = useProductListing({
        queries: {
            getProductListing: GET_PRODUCT_LISTING
        }
    });
    const { activeEditItem, isLoading, items, setActiveEditItem } = talonProps;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        // JSX that renders the list of products in a cart using the talon props
    )
}

export default MyProductListing;
```
