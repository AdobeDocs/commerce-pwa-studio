---
title: PriceSummary
description: View detailed API reference documentation for the PriceSummary talon in the Peregrine package of the PWA Studio framework.
---

# PriceSummary

\<!--
The reference doc content is generated automatically from the source code.
To update this section, update the doc blocks in the source code
--\>

<Fragment src='../../../../../includes/auto-generated/peregrine/lib/talons/cart-page/price-summary/use-price-summary.md'/>

## Examples

### usePriceSummary()

```jsx
import React from 'react'
import { usePriceSummary } from '@magento/peregrine/lib/talons/CartPage/PriceSummary/usePriceSummary';

import { GET_PRICE_SUMMARY } from './myPriceSummary.gql';


const MyPriceSummary = props => {
    const { isUpdating } = props;

    const talonProps = usePriceSummary({
        queries: {
            getPriceSummary: GET_PRICE_SUMMARY
        }
    });

    const {
        handleProceedToCheckout,
        hasError,
        hasItems,
        isCheckout,
        isLoading,
        flatData
    } = talonProps;

    if (hasError) {
        return (
            <div>
                Something went wrong. Please refresh and try again.
            </div>
        );
    } else if (!hasItems || isLoading) {
        return null;
    }

    const { subtotal, total, discounts, giftCards, taxes, shipping } = flatData;

    return (
        // JSX that renders a price summary component using data from the talon
    )
}

export default MyPriceSummary
```
