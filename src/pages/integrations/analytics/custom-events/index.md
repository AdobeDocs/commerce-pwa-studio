---
title: Custom events for Beacon analytics
---

# Creating custom events

PWA Studio 12.5 contains an eventing framework with a series of default events that cover common scenarios.
By creating and importing a custom extension, it is possible to add new events so that you may track specific user interactions beyond what is included in the default package.

PWA Studio provides a [sample extension](https://github.com/magento/pwa-studio/tree/develop/packages/extensions/experience-platform-connector/) that shows how to add a custom event.

In the sample extension, the `SEARCH_REPSONSE` event is being tracked. This event is fired when a search result is returned from the Adobe Experience Manager (AEM), with either results or a `EMPTY_RESULT` response.

These files can be used as a starting point for a custom event extension.

## searchResponseReceived.js

This file sets the payload and the search results context. The custom event name is also defined in this file.

```javascript
const canHandle = event => event.type === 'SEARCH_RESPONSE';

...

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
```

## wrapUseAutocomplete.js

In `wrapUseAutocomplete.js` the search result is received and the payload defined and dispatched. This take place in the `useEffect` function:

```javascript
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
```

## intercept.js

Edit copy of `intercept.js` to pull in the custom extension by name. In this case, the `SearchBar` wrapper:

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

## Import a custom extension

The sample extension is provided in PWA Studio to demonstrate how to create a custom event.
Use these files as a framework to create your own extension.

When your code is tested and ready, create a `pacakge.json` file for the custom module so `yarn` can pull it in.

When complete, add it to your instance:

```bash
yarn add <custom package name>
```
