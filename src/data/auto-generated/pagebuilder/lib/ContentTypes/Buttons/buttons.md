## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Buttons">Buttons</a></p>
</dd>
</dl>

<a name="Buttons"></a>

## Buttons ⇒ <code>React.Element</code>
Page Builder Buttons component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: <code>React.Element</code> - A React component that wraps [ButtonItem](ButtonItem) components.  

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>props</code>](#props) | React component props |

<a name="props"></a>

## props
Props for [Buttons](#Buttons)

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| appearance | <code>String</code> | Sets buttons placement option |
| classes | <code>Object</code> | An object containing the class names for the Buttons |
| classes.root | <code>String</code> | CSS classes for the root container element |
| classes.stacked | <code>String</code> | CSS class represents 'stacked' buttons placement option |
| classes.inline | <code>String</code> | CSS class represents 'inline' buttons placement option |
| isSameWidth | <code>Boolean</code> | Toggles buttons to have the same width inside the Buttons container |
| textAlign | <code>String</code> | Horizontal alignment of the contents within the parent container |
| border | <code>String</code> | CSS border property |
| borderColor | <code>String</code> | CSS border color property |
| borderWidth | <code>String</code> | CSS border width property |
| borderRadius | <code>String</code> | CSS border radius property |
| marginTop | <code>String</code> | CSS margin top property |
| marginRight | <code>String</code> | CSS margin right property |
| marginBottom | <code>String</code> | CSS margin bottom property |
| marginLeft | <code>String</code> | CSS margin left property |
| paddingTop | <code>String</code> | CSS padding top property |
| paddingRight | <code>String</code> | CSS padding right property |
| paddingBottom | <code>String</code> | CSS padding bottom property |
| paddingLeft | <code>String</code> | CSS padding left property |
| cssClasses | <code>Array</code> | List of CSS classes to be applied to the component |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Buttons/buttons.js).