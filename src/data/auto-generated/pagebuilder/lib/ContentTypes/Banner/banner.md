
Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd>

Props for [Banner](#Banner)

</dd>
</dl>

Page Builder Banner component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Returns:**
`React.Element`
   — A React component that displays a Banner.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | [`props`](#props) | React component props |

Props for [Banner](#Banner)

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | `Object` | An object containing the class names for the banner |
| classes.root | `String` | CSS class for the banner root element |
| classes.link | `String` | CSS class for the banner link element |
| classes.wrapper | `String` | CSS class for the banner wrapper element |
| classes.overlay | `String` | CSS class for the banner overlay element |
| classes.content | `String` | CSS class for the banner content element |
| classes.button | `String` | CSS class for the banner button wrapping element |
| classes.buttonHover | `String` | CSS class for the banner button wrapping element for hover |
| classes.posterOverlay | `String` | CSS class for the banner poster appearance overlay |
| classes.collageLeftOverlay | `String` | CSS class for the banner collage left appearance overlay |
| classes.collageCenteredOverlay | `String` | CSS class for the banner collage centered appearance overlay |
| classes.collageRightOverlay | `String` | CSS class for the banner collage right appearance overlay |
| classes.posterOverlayHover | `String` | CSS class for the banner poster appearance overlay hover |
| classes.collageLeftOverlayHover | `String` | CSS class for the banner collage left appearance overlay hover |
| classes.collageCenteredOverlayHover | `String` | CSS class for the banner collage centered appearance overlay hover |
| classes.collageRightOverlayHover | `String` | CSS class for the banner collage right appearance overlay hover |
| classes.poster | `String` | CSS class for the banner poster appearance |
| classes.videoOverlay | `String` | CSS class for the video overlay |
| classes.viewportElement | `String` | CSS class for viewport element |
| minHeight | `String` | CSS minimum height property |
| backgroundColor | `String` | CSS background-color property |
| desktopImage | `String` | Background image URL to be displayed on desktop devices |
| mobileImage | `String` | Background image URL to be displayed on mobile devices |
| backgroundSize | `String` | CSS background-size property |
| backgroundPosition | `String` | CSS background-position property |
| backgroundAttachment | `String` | CSS background-attachment property |
| backgroundRepeat | `String` | CSS background-repeat property |
| content | `String` | The HTML content to be rendered inside the banner content area |
| link | `String` | The link location for the banner |
| linkType | `String` | The type of link included with the banner. Values: default, product, category, page |
| showButton | `String` | Whether or not to show the button. Values: always, hover, never |
| buttonText | `String` | Text to display within the button |
| buttonType | `String` | The type of button to display. Values: primary, secondary, link |
| showOverlay | `String` | Whether or not to show the overlay. Values: always, hover, never |
| overlayColor | `String` | The color of the overlay |
| textAlign | `String` | Alignment of the banner within the parent container |
| border | `String` | CSS border property |
| borderColor | `String` | CSS border color property |
| borderWidth | `String` | CSS border width property |
| borderRadius | `String` | CSS border radius property |
| marginTop | `String` | CSS margin top property |
| marginRight | `String` | CSS margin right property |
| marginBottom | `String` | CSS margin bottom property |
| marginLeft | `String` | CSS margin left property |
| mediaQueries | `Array` | List of media query rules to be applied to the component |
| paddingTop | `String` | CSS padding top property |
| paddingRight | `String` | CSS padding right property |
| paddingBottom | `String` | CSS padding bottom property |
| paddingLeft | `String` | CSS padding left property |
| cssClasses | `Array` | List of CSS classes to be applied to the component |
| backgroundType | `String` | Background type |
| videoSrc | `String` | URL to the video |
| videoFallbackSrc | `String` | URL to the image which will be displayed before video |
| videoLoop | `Boolean` | Play video in loop |
| videoPlayOnlyVisible | `Boolean` | Play video when it is visible |
| videoLazyLoading | `Boolean` | Load video when it is visible |
| videoOverlayColor | `String` | Color for video overlay |
| getParallax | `function` | Return parallax element and options |

**Source Code**: [pwa-studio/packages/pagebuilder/lib/ContentTypes/Banner/banner.js](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Banner/banner.js)
