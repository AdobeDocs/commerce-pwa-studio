## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Button">Button</a></p>
</dd>
</dl>

<a name="Button"></a>

## Button ⇒ <code>React.Element</code>
A component for buttons.

**Kind**: global functional component  
**Returns**: <code>React.Element</code> - A React component that displays a single button.  

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>props</code>](#props) | React component props |

<a name="props"></a>

## props
Props for [Button](#Button)

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | <code>Object</code> | An object containing the class names for the Button component. |
| classes.content | <code>string</code> | classes for the button content |
| classes.root | <code>string</code> | classes for root container |
| classes.root_highPriority | <code>string</code> | classes for Button if high priority. |
| classes.root_lowPriority | <code>string</code> | classes for Button if low priority. |
| classes.root_normalPriority | <code>string</code> | classes for Button if normal priority. |
| priority | <code>string</code> | the priority/importance of the Button |
| type | <code>string</code> | the type of the Button |
| negative | <code>bool</code> | whether the button should be displayed in red for a negative action |
| disabled | <code>bool</code> | is the button disabled |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Button/button.js).