## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#ButtonGroup">ButtonGroup</a></p>
</dd>
<dt><a href="#buttonProps">buttonProps</a></dt>
<dd><p>Props for a <a href="#ButtonGroup">ButtonGroup</a> button component</p>
</dd>
</dl>

<a name="ButtonGroup"></a>

## ButtonGroup ⇒ <code>React.Element</code>
A component that creates a group of buttons.

**Kind**: global functional component  
**Returns**: <code>React.Element</code> - A React component that displays multiple buttons.  

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>props</code>](#props) | React component props |

<a name="props"></a>

## props
Props for [ButtonGroup](#ButtonGroup)

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | <code>Object</code> | An object containing the class names for the ButtonGroup component. |
| classes.root | <code>string</code> | classes for root container |
| items | [<code>Array.&lt;buttonProps&gt;</code>](#buttonProps) | the items to evaluate memoization recomputation. |

<a name="buttonProps"></a>

## buttonProps
Props for a [ButtonGroup](#ButtonGroup) button component

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| children | <code>ReactNodeLike</code> | component to render for the ButtonGroups's button component |
| key | <code>string</code> | the unique id for a button element |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/ButtonGroup/buttonGroup.js).