## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#GoogleMap">GoogleMap</a></p>
</dd>
</dl>

<a name="GoogleMap"></a>

## GoogleMap ⇒ <code>React.Element</code>
Page Builder Map component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: <code>React.Element</code> - A React component that displays a Map.  

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>props</code>](#props) | React component props |

<a name="props"></a>

## props
Props for [GoogleMap](#GoogleMap)

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | <code>Object</code> | An object containing the class names for the Map |
| classes.root | <code>String</code> | CSS class for the root element |
| apiKey | <code>String</code> | API key for Maps API usage |
| height | <code>String</code> | CSS height property |
| mapOptions | <code>Object</code> | specific Google Maps API options for Map object instantiation |
| locations | <code>Array</code> | Locations on the map for Marker placement |
| textAlign | <code>String</code> | Alignment of content within the row |
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



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Map/map.js).