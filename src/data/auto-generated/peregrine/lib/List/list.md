## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>props for <a href="#List">List</a></p>
</dd>
<dt><a href="#defaultProps">defaultProps</a></dt>
<dd><p>default props for <a href="#List">List</a></p>
</dd>
</dl>

<a name="List"></a>

## List
The **List** component maps a collection of data objects into an array of elements.
It also manages the selection and focus of those elements.

**Kind**: global functional component  
**Returns{react.element}**: A React component that displays list data.  

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>props</code>](#props) | React Component props |

<a name="props"></a>

## props
props for [List](#List)

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | <code>Object</code> | css classes prop for List |
| classes.root | <code>string</code> | css classes for List root container |
| getItemKey | <code>func</code> | item key value getter |
| initialSelection | <code>array</code> \| <code>object</code> | A single or list of objects that should start off selected |
| items | <code>iterable</code> | An iterable that yields `[key, item]` pairs such as an ES2015 Map |
| render | <code>func</code> \| <code>string</code> | A render prop for the list element. A tagname string, such as `"div"`, is also valid. |
| renderItem | <code>func</code> \| <code>string</code> | A render prop for the list item elements. A tagname string, such as `"div"`, is also valid |
| onSelectionChange | <code>func</code> | A callback that fires when the selection state changes |
| selectionModel | <code>checkbox</code> \| <code>radio</code> | A string corresponding to a selection model |

<a name="defaultProps"></a>

## defaultProps
default props for [List](#List)

**Kind**: global typedef  


For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/List/list.js).