## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd>

props for [List](#List)

</dd>
<dt><a href="#defaultProps">defaultProps</a></dt>
<dd>

default props for [List](#List)

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
| props | [`props`](#props) | React Component props |

<a name="props"></a>

## props
props for [List](#List)

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | `Object` | css classes prop for List |
| classes.root | `string` | css classes for List root container |
| getItemKey | `func` | item key value getter |
| initialSelection | `array` \| `object` | A single or list of objects that should start off selected |
| items | `iterable` | An iterable that yields `[key, item]` pairs such as an ES2015 Map |
| render | `func` \| `string` | A render prop for the list element. A tagname string, such as `"div"`, is also valid. |
| renderItem | `func` \| `string` | A render prop for the list item elements. A tagname string, such as `"div"`, is also valid |
| onSelectionChange | `func` | A callback that fires when the selection state changes |
| selectionModel | `checkbox` \| `radio` | A string corresponding to a selection model |

<a name="defaultProps"></a>

## defaultProps
default props for [List](#List)

**Kind**: global typedef  


For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/List/list.js).