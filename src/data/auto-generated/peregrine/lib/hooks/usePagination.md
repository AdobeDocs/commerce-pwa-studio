## Functions

<dl>
<dt><a href="#usePagination">usePagination(config)</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>A <a href="https://reactjs.org/docs/hooks-intro.html">React Hook</a> that provides
pagination logic.</p>
<p>Use this hook to implement components that need to navigate through paged
data.</p>
</dd>
</dl>

<a name="PaginationState"></a>

## PaginationState
The current pagination state

**Kind**: global Object  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| currentPage | <code>Number</code> | The current page number |
| totalPages | <code>Number</code> | The total number of pages |

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

**Kind**: static method of [<code>API</code>](#API)  

| Param | Type | Description |
| --- | --- | --- |
| page | <code>Number</code> | The number to assign to the current page |

<a name="API.setTotalPages"></a>

### API.setTotalPages(total)
Set the total number of pages

**Kind**: static method of [<code>API</code>](#API)  

| Param | Type | Description |
| --- | --- | --- |
| total | <code>Number</code> | The number to set the amount of pages available |

<a name="usePagination"></a>

## usePagination(config) ⇒ <code>Array.&lt;Object&gt;</code>
A [React Hook](https://reactjs.org/docs/hooks-intro.html) that provides
pagination logic.

Use this hook to implement components that need to navigate through paged
data.

**Kind**: global function  
**Returns**: <code>Array.&lt;Object&gt;</code> - An array with two entries containing the following content: [ [PaginationState](#PaginationState), [API](#API) ]  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| config | <code>Object</code> |  | An object containing configuration values |
| config.namespace | <code>String</code> | <code>&#x27;&#x27;</code> | The namespace to append to config.parameter in the query. For example: ?namespace_parameter=value |
| config.parameter | <code>String</code> | <code>&#x27;page&#x27;</code> | The name of the query parameter to use for page |
| config.initialPage | <code>Number</code> |  | The initial current page value |
| config.initialTotalPages | <code>Number</code> | <code>1</code> | The total pages expected to be usable by this hook |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/hooks/usePagination.js).