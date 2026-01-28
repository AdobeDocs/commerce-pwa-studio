
## Functions

[usePagination(config)] ⇒ `Array.&lt;Object>`

A [React Hook](https://legacy.reactjs.org/docs/hooks-intro.html) that provides
pagination logic.

Use this hook to implement components that need to navigate through paged
data.

The current pagination state

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| currentPage | `Number` | The current page number |
| totalPages | `Number` | The total number of pages |

The API object used for modifying the PaginationState.

* [API](#API)
    * [.setCurrentPage(page)](#API.setCurrentPage)
    * [.setTotalPages(total)](#API.setTotalPages)

Set the current page

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| page | `Number` | The number to assign to the current page |

Set the total number of pages

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| total | `Number` | The number to set the amount of pages available |

A [React Hook](https://legacy.reactjs.org/docs/hooks-intro.html) that provides
pagination logic.

Use this hook to implement components that need to navigate through paged
data.

**Returns:**
`Array.<Object>`
   — An array with two entries containing the following content: [ [PaginationState](#PaginationState), [API](#API) ]

**Parameters**

| Name | Type | Default                                       | Description |
| --- | --- |-----------------------------------------------| --- |
| config | `Object` | ``                 | An object containing configuration values |
| config.namespace | `String` | `''`     | The namespace to append to config.parameter in the query. For example: ?namespace_parameter=value |
| config.parameter | `String` | `'page'` | The name of the query parameter to use for page |
| config.initialPage | `Number` | ``                 | The initial current page value |
| config.initialTotalPages | `Number` | `1`                | The total pages expected to be usable by this hook |

**Source Code**: [pwa-studio/packages/peregrine/lib/hooks/usePagination.js](https://github.com/magento/pwa-studio/tree/develop/packages/peregrine/lib/hooks/usePagination.js)
