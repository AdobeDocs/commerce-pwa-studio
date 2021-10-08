## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Image">Image</a></p>
</dd>
</dl>

<a name="Image"></a>

## Image ⇒ <code>React.Element</code>
Page Builder Image component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: <code>React.Element</code> - A React component that displays an Image.  

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>props</code>](#props) | React component props |

<a name="props"></a>

## props
Props for [Image](#Image)

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | <code>Object</code> | An object containing the class names for the Image |
| classes.img | <code>String</code> | CSS classes for the img element |
| desktopImage | <code>String</code> | URL src of the desktop image |
| mobileImage | <code>String</code> | URL src of the mobile image |
| altText | <code>String</code> | Alternate text |
| title | <code>String</code> | Title of the image |
| link | <code>String</code> | URL to redirect to |
| linkType | <code>String</code> | Type of link |
| openInNewTab | <code>bool</code> | Flag to indicate if link should be opened in a new tab |
| caption | <code>String</code> | Caption for the image |
| textAlign | <code>String</code> | Alignment of the divider within the parent container |
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



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Image/image.js).