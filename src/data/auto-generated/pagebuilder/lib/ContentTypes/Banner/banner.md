## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Banner">Banner</a></p>
</dd>
</dl>

<a name="Banner"></a>

## Banner ⇒ <code>React.Element</code>
Page Builder Banner component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: <code>React.Element</code> - A React component that displays a Banner.  

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>props</code>](#props) | React component props |

<a name="props"></a>

## props
Props for [Banner](#Banner)

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | <code>Object</code> | An object containing the class names for the banner |
| classes.root | <code>String</code> | CSS class for the banner root element |
| classes.link | <code>String</code> | CSS class for the banner link element |
| classes.wrapper | <code>String</code> | CSS class for the banner wrapper element |
| classes.overlay | <code>String</code> | CSS class for the banner overlay element |
| classes.content | <code>String</code> | CSS class for the banner content element |
| classes.button | <code>String</code> | CSS class for the banner button wrapping element |
| classes.buttonHover | <code>String</code> | CSS class for the banner button wrapping element for hover |
| classes.posterOverlay | <code>String</code> | CSS class for the banner poster appearance overlay |
| classes.collageLeftOverlay | <code>String</code> | CSS class for the banner collage left appearance overlay |
| classes.collageCenteredOverlay | <code>String</code> | CSS class for the banner collage centered appearance overlay |
| classes.collageRightOverlay | <code>String</code> | CSS class for the banner collage right appearance overlay |
| classes.posterOverlayHover | <code>String</code> | CSS class for the banner poster appearance overlay hover |
| classes.collageLeftOverlayHover | <code>String</code> | CSS class for the banner collage left appearance overlay hover |
| classes.collageCenteredOverlayHover | <code>String</code> | CSS class for the banner collage centered appearance overlay hover |
| classes.collageRightOverlayHover | <code>String</code> | CSS class for the banner collage right appearance overlay hover |
| classes.poster | <code>String</code> | CSS class for the banner poster appearance |
| classes.videoOverlay | <code>String</code> | CSS class for the video overlay |
| classes.viewportElement | <code>String</code> | CSS class for viewport element |
| minHeight | <code>String</code> | CSS minimum height property |
| backgroundColor | <code>String</code> | CSS background-color property |
| desktopImage | <code>String</code> | Background image URL to be displayed on desktop devices |
| mobileImage | <code>String</code> | Background image URL to be displayed on mobile devices |
| backgroundSize | <code>String</code> | CSS background-size property |
| backgroundPosition | <code>String</code> | CSS background-position property |
| backgroundAttachment | <code>String</code> | CSS background-attachment property |
| backgroundRepeat | <code>String</code> | CSS background-repeat property |
| content | <code>String</code> | The HTML content to be rendered inside the banner content area |
| link | <code>String</code> | The link location for the banner |
| linkType | <code>String</code> | The type of link included with the banner. Values: default, product, category, page |
| showButton | <code>String</code> | Whether or not to show the button. Values: always, hover, never |
| buttonText | <code>String</code> | Text to display within the button |
| buttonType | <code>String</code> | The type of button to display. Values: primary, secondary, link |
| showOverlay | <code>String</code> | Whether or not to show the overlay. Values: always, hover, never |
| overlayColor | <code>String</code> | The color of the overlay |
| textAlign | <code>String</code> | Alignment of the banner within the parent container |
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
| getParallax | <code>function</code> | Return parallax element and options |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Banner/banner.js).