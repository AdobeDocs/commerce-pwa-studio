---
title: Custom events for Experience Platform analytics
---

# Creating custom events

PWA Studio 12.5 contains an eventing framework with a series of default events that cover common scenarios.
By creating and importing a custom extension, it is possible to add new events so that you may track specific user interactions beyond what is included in the default package.

PWA Studio provides a [sample extension](https://github.com/magento/pwa-studio/tree/develop/packages/extensions/experience-platform-connector/) that shows how to add a custom event.

In the sample extension, the `SEARCH_RESPONSE` event is being tracked. This event is fired when a search result is returned from Adobe Commerce, with either results or a `EMPTY_RESULT` response.

These files can be used as a starting point for a custom event extension.

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

This file is a [talon wrapper](https://developer.adobe.com/commerce/pwa-studio/tutorials/targets/modify-talon-results/) that wraps around the `useAutocomplete()` talon to add additional event dispatching logic.
In `wrapUseAutocomplete.js` the search result is received and the payload defined and dispatched. This take place in the `useEffect` function:

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

Read more about [PWA Studio extensibility](https://developer.adobe.com/commerce/pwa-studio/guides/general-concepts/extensibility/).

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

When your code is complete, you can [test on a local instance](https://developer.adobe.com/commerce/pwa-studio/tutorials/targets/modify-talon-results/#test-on-a-local-instance).
