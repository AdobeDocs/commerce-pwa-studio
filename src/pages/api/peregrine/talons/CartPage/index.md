---
title: Shopping Cart Talons
description: View detailed API reference documentation for the shopping cart talons in the Peregrine package of the PWA Studio framework.
---

# Shopping Cart Talons

<!--
The reference doc content is generated automatically from the source code.
To update this section, update the doc blocks in the source code
-->

import Component from '/src/data/auto-generated/peregrine/lib/talons/CartPage/useCartPage.md'

<Component />

## Examples

### useCartPage()

```jsx
import React from 'react';
import { useCartPage } from '@magento/peregrine/lib/talons/CartPage/useCartPage';

import { GET_CART_DETAILS } from './myCartPage.gql';

const MyCartPage = props => {
    const queries = {
        getCartDetails: GET_CART_DETAILS
    }
    const talonProps = useCartPage({ queries });

    const {
        handleSignIn,
        hasItems,
        isSignedIn,
        isCartUpdating,
        setIsCartUpdating,
        shouldShowLoadingIndicator
    } = talonProps;

    return (
        // JSX using talonProps data
    )
}

export default MyCartPage
```
