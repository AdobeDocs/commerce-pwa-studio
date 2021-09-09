## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd>

Props for [Button](#Button)

</dd>
</dl>

<a name="Button"></a>

## Button ⇒ `React.Element`

A component for buttons.

**Kind**: global functional component  
**Returns**: `React.Element` - A React component that displays a single button.

| Param | Type              | Description           |
| ----- | ----------------- | --------------------- |
| props | [`props`](#props) | React component props |

<a name="props"></a>

## props

Props for [Button](#Button)

**Kind**: global typedef  
**Properties**

| Name                        | Type     | Description                                                         |
| --------------------------- | -------- | ------------------------------------------------------------------- |
| classes                     | `Object` | An object containing the class names for the Button component.      |
| classes.content             | `string` | classes for the button content                                      |
| classes.root                | `string` | classes for root container                                          |
| classes.root_highPriority   | `string` | classes for Button if high priority.                                |
| classes.root_lowPriority    | `string` | classes for Button if low priority.                                 |
| classes.root_normalPriority | `string` | classes for Button if normal priority.                              |
| priority                    | `string` | the priority/importance of the Button                               |
| type                        | `string` | the type of the Button                                              |
| negative                    | `bool`   | whether the button should be displayed in red for a negative action |
| disabled                    | `bool`   | is the button disabled                                              |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Button/button.js).