---
title: Custom events for Experience Platform analytics
description: Learn how to create custom events and push them to Adobe Experience Platform with PWA Studio.
keywords:
  - Events
  - Storefront
  - Tools
---

# Creating custom events

The eventing framework introduced in the PWA Studio 12.5 release comes with a core set of storefront events related to various interactions with the application.
You can use PWA Studio's extensibility framework to modify your storefront and have it publish events not covered by the default set.

PWA Studio provides the source for the [Experience Platform Connector extension](https://github.com/magento/pwa-studio/blob/develop/packages/extensions/experience-platform-connector/) to show how you can add a custom event.

This extension dispatches a `SEARCH_RESPONSE` event, which is not part of the default set. This event fires when a search result is returned in the application's search bar.

These files show the different pieces and logic you need to create your own custom events.

## searchResponseReceived.js

This file is an event handler that returns two functions:

- `canHandle()` - a function that receives an event from PWA Studio's eventing framework and returns `true` if the `handle()` function should handle the incoming event.
- `handle()` - the function that handles the event.

```javascript
const canHandle = event => event.type === 'SEARCH_RESPONSE';

const handle = (sdk, event) => {
    const { payload } = event;

    const {
        categories,
        facets,
        page,
        perPage,
        products,
        searchRequestId,
        searchUnitId,
        suggestions
    } = payload;

    const searchResultsContext = {
        units: [
            {
                categories,
                facets,
                page,
                perPage,
                products,
                searchRequestId,
                searchUnitId,
                suggestions
            }
        ]
    };

    sdk.context.setSearchResults(searchResultsContext);
    sdk.publish.searchResponseReceived(searchUnitId, searchResultsContext);
};

export default {
    canHandle,
    handle
};
```

## wrapUseAutocomplete.js

This file is a [talon wrapper](/tutorials/targets/modify-talon-results/index.md) that wraps around the `useAutocomplete()` talon to add additional event dispatching logic.
In `wrapUseAutocomplete.js` the search result is received and the payload is defined and dispatched. This takes place in the `useEffect` function:

```javascript
import { useEffect } from 'react';
import { useEventingContext } from '@magento/peregrine/lib/context/eventing';

// Wrapper for the useAutocomplete() talon
const wrapUseAutocomplete = useAutocomplete => {
    return props => {
        const talonProps = useAutocomplete(props);
        const [, { dispatch }] = useEventingContext();

        const {
            categories,
            displayResult,
            messageType,
            value,
            ...restProps
        } = talonProps;

        useEffect(() => {
            if (
                messageType === 'RESULT_SUMMARY' ||
                messageType === 'EMPTY_RESULT'
            ) {
                dispatch({
                    type: 'SEARCH_RESPONSE',
                    payload: {
                        categories: categories || [],
                        facets: [],
                        page: 1,
                        perPage: 3, // Same value used in GQL query
                        products: displayResult || [],
                        searchRequestId: value,
                        searchUnitId: 'search-bar',
                        suggestions: displayResult || []
                    }
                });
            }
        });

        return {
            displayResult,
            messageType,
            value,
            ...restProps
        };
    };
};

export default wrapUseAutocomplete;
```

Read more about [PWA Studio extensibility](/guides/general-concepts/extensibility/index.md).

## intercept.js

The intercept file interacts with PWA Studio's extensibility framework to modify code during build time.
In this particular code, the `useApp()`, `useAccountMenu()`, and `useAutocomplete()` talons are wrapped with modules that provide additional logic.

```javascript
    talons.tap(({ App, Header, SearchBar }) => {
        App.useApp.wrapWith('@magento/experience-platform-connector');
        Header.useAccountMenu.wrapWith(
            '@magento/experience-platform-connector/src/wrappers/wrapUseAccountMenu'
        );
        SearchBar.useAutocomplete.wrapWith(
            '@magento/experience-platform-connector/src/wrappers/wrapUseAutocomplete'
        );
```

When your code is complete, you can [test on a local instance](/tutorials/targets/modify-talon-results/index.md#test-on-a-local-instance).
