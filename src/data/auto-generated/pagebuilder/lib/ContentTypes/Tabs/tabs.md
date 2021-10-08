## Functions

<dl>
<dt><a href="#upperCaseString">upperCaseString(string)</a> ⇒ <code>string</code></dt>
<dd><p>Upper case the first letter of a string</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Tabs">Tabs</a></p>
</dd>
</dl>

<a name="Tabs"></a>

## Tabs ⇒ <code>React.Element</code>
Page Builder Tabs component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: <code>React.Element</code> - A React component that displays a set of Tabs.  

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>props</code>](#props) | React component props |

<a name="upperCaseString"></a>

## upperCaseString(string) ⇒ <code>string</code>
Upper case the first letter of a string

**Kind**: global function  

| Param | Type |
| --- | --- |
| string | <code>string</code> | 

<a name="props"></a>

## props
Props for [Tabs](#Tabs)

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | <code>Object</code> | An object containing the class names for the Tabs |
| classes.header | <code>String</code> | Class names for the tab header |
| classes.panelSelected | <code>String</code> | Class names for the selected tab panel |
| classes.panel | <code>String</code> | Class names for the tab panel |
| classes.contentLeft | <code>String</code> | Class names for the tab content |
| classes.contentCenter | <code>String</code> | Class names for the tab content |
| classes.contentRight | <code>String</code> | Class names for the tab content |
| classes.navigationLeft | <code>String</code> | Class names for the tab navigation |
| classes.navigationCenter | <code>String</code> | Class names for the tab navigation |
| classes.navigationRight | <code>String</code> | Class names for the tab navigation |
| classes.navigationGradientLeft | <code>String</code> | Class names for the tab navigation gradient when scrolling |
| classes.navigationGradientRight | <code>String</code> | Class names for the tab navigation gradient when scrolling |
| classes.navigationGradientBoth | <code>String</code> | Class names for the tab navigation gradient when scrolling |
| classes.disabled | <code>String</code> | Class names for the disabled tabs |
| classes.selected | <code>String</code> | Class names for the selected tab |
| classes.item | <code>String</code> | Class names for the tab item |
| tabNavigationAlignment | <code>String</code> | Navigation alignment for tabs |
| minHeight | <code>String</code> | Minimum height of the tabs |
| defaultIndex | <code>Number</code> | Index of the tab to display by default |
| headers | <code>Array</code> | Array of tab headers |
| textAlign | <code>String</code> | Alignment of the Tabs within the parent container |
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



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Tabs/tabs.js).