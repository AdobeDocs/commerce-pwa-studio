## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd>

Props for [ButtonGroup](#ButtonGroup)

</dd>
<dt><a href="#buttonProps">buttonProps</a></dt>
<dd>

Props for a [ButtonGroup](#ButtonGroup) button component

</dd>
</dl>

<a name="ButtonGroup"></a>

## ButtonGroup ⇒ `React.Element`

A component that creates a group of buttons.

**Kind**: global functional component  
**Returns**: `React.Element` - A React component that displays multiple buttons.

| Param | Type              | Description           |
| ----- | ----------------- | --------------------- |
| props | [`props`](#props) | React component props |

<a name="props"></a>

## props

Props for [ButtonGroup](#ButtonGroup)

**Kind**: global typedef  
**Properties**

| Name         | Type                                  | Description                                                         |
| ------------ | ------------------------------------- | ------------------------------------------------------------------- |
| classes      | `Object`                              | An object containing the class names for the ButtonGroup component. |
| classes.root | `string`                              | classes for root container                                          |
| items        | [`Array.<buttonProps>`](#buttonProps) | the items to evaluate memoization recomputation.                    |

<a name="buttonProps"></a>

## buttonProps

Props for a [ButtonGroup](#ButtonGroup) button component

**Kind**: global typedef  
**Properties**

| Name     | Type            | Description                                                 |
| -------- | --------------- | ----------------------------------------------------------- |
| children | `ReactNodeLike` | component to render for the ButtonGroups's button component |
| key      | `string`        | the unique id for a button element                          |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/ButtonGroup/buttonGroup.js).
