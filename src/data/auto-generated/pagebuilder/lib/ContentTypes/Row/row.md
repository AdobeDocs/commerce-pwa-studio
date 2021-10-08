## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Row">Row</a></p>
</dd>
</dl>

<a name="Row"></a>

## Row ⇒ <code>React.Element</code>
Page Builder Row component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: <code>React.Element</code> - A React component that displays a Row which contains content.  

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>props</code>](#props) | React component props |

<a name="props"></a>

## props
Props for [Row](#Row)

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | <code>Object</code> | An object containing the class names for the Row |
| classes.contained | <code>String</code> | CSS class for the contained appearance element |
| classes.inner | <code>String</code> | CSS class for the inner appearance element |
| classes.root | <code>String</code> | CSS class for the row root element |
| classes.videoOverlay | <code>String</code> | CSS class for the videoOverlay element |
| minHeight | <code>String</code> | CSS minimum height property |
| backgroundColor | <code>String</code> | CSS background-color property |
| desktopImage | <code>String</code> | Background image URL to be displayed on desktop devices |
| mobileImage | <code>String</code> | Background image URL to be displayed on mobile devices |
| backgroundSize | <code>String</code> | CSS background-size property |
| backgroundPosition | <code>String</code> | CSS background-position property |
| backgroundAttachment | <code>String</code> | CSS background-attachment property |
| backgroundRepeat | <code>String</code> | CSS background-repeat property |
| enableParallax | <code>Boolean</code> | Enable parallax on this row |
| parallaxSpeed | <code>Number</code> | The speed which Parallax should scroll, from -1.0 to 2.0 |
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
| backgroundType | <code>String</code> | Background type |
| videoSrc | <code>String</code> | URL to the video |
| videoFallbackSrc | <code>String</code> | URL to the image which will be displayed before video |
| videoLoop | <code>Boolean</code> | Play video in loop |
| videoPlayOnlyVisible | <code>Boolean</code> | Play video when it is visible |
| videoLazyLoading | <code>Boolean</code> | Load video when it is visible |
| videoOverlayColor | <code>String</code> | Color for video overlay |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Row/row.js).