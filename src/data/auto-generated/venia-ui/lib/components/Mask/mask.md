## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd>

Props for [Mask](#Mask)

</dd>
</dl>

<a name="Mask"></a>

## Mask ⇒ `React.Element`

A component that masks content.

**Kind**: global class component  
**Extends**: `Component`  
**Returns**: `React.Element` - A React component that will mask content.  
<a name="props"></a>

## props

Props for [Mask](#Mask)

**Kind**: global typedef  
**Properties**

| Name                | Type       | Description                                                      |
| ------------------- | ---------- | ---------------------------------------------------------------- |
| classes             | `Object`   | An object containing the class names for the Mask component.     |
| classes.root        | `string`   | classes for root container                                       |
| classes.root_action | `string`   | classes for root container if the `isActive` property is `true`. |
| dismiss             | `function` | the handler for on the `onClick` event handler.                  |
| isActive            | `boolean`  | whether the mask is in an active state or not.                   |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Mask/mask.js).
