## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Trigger">Trigger</a></p>
</dd>
</dl>

<a name="Trigger"></a>

## Trigger ⇒ <code>React.Element</code>
A component that will trigger a given action.

**Kind**: global functional component  
**Returns**: <code>React.Element</code> - A React component that when triggered invokes the action.  

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>props</code>](#props) | React component props |

<a name="props"></a>

## props
Props for [Trigger](#Trigger)

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| action | <code>function</code> | the handler for on the `onClick` event handler. |
| children | <code>ReactNodeLike</code> | any elements that will be child elements inside the root container. |
| classes | <code>Object</code> | An object containing the class names for the Trigger component. |
| classes.root | <code>string</code> | classes for root container |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Trigger/trigger.js).