## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd>

Props for [Trigger](#Trigger)

</dd>
</dl>

<a name="Trigger"></a>

## Trigger ⇒ `React.Element`

A component that will trigger a given action.

**Kind**: global functional component  
**Returns**: `React.Element` - A React component that when triggered invokes the action.

| Param | Type              | Description           |
| ----- | ----------------- | --------------------- |
| props | [`props`](#props) | React component props |

<a name="props"></a>

## props

Props for [Trigger](#Trigger)

**Kind**: global typedef  
**Properties**

| Name         | Type            | Description                                                         |
| ------------ | --------------- | ------------------------------------------------------------------- |
| action       | `function`      | the handler for on the `onClick` event handler.                     |
| children     | `ReactNodeLike` | any elements that will be child elements inside the root container. |
| classes      | `Object`        | An object containing the class names for the Trigger component.     |
| classes.root | `string`        | classes for root container                                          |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Trigger/trigger.js).
