
## Typedefs

[props]

props for [List](#List)

[defaultProps]

default props for [List](#List)

The **List** component maps a collection of data objects into an array of elements.
It also manages the selection and focus of those elements.

**Returns\{react.element\}**: A React component that displays list data.  
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | [`props`](#props) | React Component props |

props for [List](#List)

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

default props for [List](#List)

**Source Code**: [pwa-studio/packages/peregrine/lib/List/list.js](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/List/list.js)
