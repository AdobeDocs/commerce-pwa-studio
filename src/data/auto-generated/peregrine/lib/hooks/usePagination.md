## Functions

<dl>
<dt><a href="#usePagination">usePagination(config)</a> ⇒ <inlineCode>Array.&lt;Object&gt;</inlineCode></dt>
<dd>

A [React Hook](https://reactjs.org/docs/hooks-intro.html) that provides
pagination logic.

Use this hook to implement components that need to navigate through paged
data.

</dd>
</dl>

<a name="PaginationState"></a>

## PaginationState
The current pagination state

**Kind**: global Object  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| currentPage | `Number` | The current page number |
| totalPages | `Number` | The total number of pages |

<a name="API"></a>

## API
The API object used for modifying the PaginationState.

**Kind**: global Object  

* [API](#API)
    * [.setCurrentPage(page)](#API.setCurrentPage)
    * [.setTotalPages(total)](#API.setTotalPages)

<a name="API.setCurrentPage"></a>

### API.setCurrentPage(page)
Set the current page

**Kind**: static method of [`API`](#API)  

| Param | Type | Description |
| --- | --- | --- |
| page | `Number` | The number to assign to the current page |

<a name="API.setTotalPages"></a>

### API.setTotalPages(total)
Set the total number of pages

**Kind**: static method of [`API`](#API)  

| Param | Type | Description |
| --- | --- | --- |
| total | `Number` | The number to set the amount of pages available |

<a name="usePagination"></a>

## usePagination(config) ⇒ `Array.<Object>`
A [React Hook](https://reactjs.org/docs/hooks-intro.html) that provides
pagination logic.

Use this hook to implement components that need to navigate through paged
data.

**Kind**: global function  
**Returns**: `Array.<Object>` - An array with two entries containing the following content: [ [PaginationState](#PaginationState), [API](#API) ]  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| config | `Object` |  | An object containing configuration values |
| config.namespace | `String` | <code>&#x27;&#x27;</code> | The namespace to append to config.parameter in the query. For example: ?namespace_parameter=value |
| config.parameter | `String` | <code>&#x27;page&#x27;</code> | The name of the query parameter to use for page |
| config.initialPage | `Number` |  | The initial current page value |
| config.initialTotalPages | `Number` | <code>1</code> | The total pages expected to be usable by this hook |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/hooks/usePagination.js).