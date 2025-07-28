
Functions

<dl>
<dt><a href="#usePagination">usePagination(config)</a> ⇒ <inlineCode>Array.&lt;Object&gt;</inlineCode></dt>
<dd>

A [React Hook](https://reactjs.org/docs/hooks-intro.html) that provides
pagination logic.

Use this hook to implement components that need to navigate through paged
data.

</dd>
</dl>

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

A [React Hook](https://reactjs.org/docs/hooks-intro.html) that provides
pagination logic.

Use this hook to implement components that need to navigate through paged
data.

**Returns:**
`Array.<Object>`
   — An array with two entries containing the following content: [ [PaginationState](#PaginationState), [API](#API) ]

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| config | `Object` | <inlineCode></inlineCode> | An object containing configuration values |
| config.namespace | `String` | <inlineCode>&#x27;&#x27;</inlineCode> | The namespace to append to config.parameter in the query. For example: ?namespace_parameter=value |
| config.parameter | `String` | <inlineCode>&#x27;page&#x27;</inlineCode> | The name of the query parameter to use for page |
| config.initialPage | `Number` | <inlineCode></inlineCode> | The initial current page value |
| config.initialTotalPages | `Number` | <inlineCode>1</inlineCode> | The total pages expected to be usable by this hook |

**Source Code**: [pwa-studio/packages/peregrine/lib/hooks/usePagination.js](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/hooks/usePagination.js)
