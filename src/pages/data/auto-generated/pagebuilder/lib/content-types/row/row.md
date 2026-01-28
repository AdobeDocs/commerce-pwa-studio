## Typedefs

[props]

Props for [Row](#Row)

Page Builder Row component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Returns:**
`React.Element`
   — A React component that displays a Row which contains content.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | [`props`](#props) | React component props |

Props for [Row](#Row)

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | `Object` | An object containing the class names for the Row |
| classes.contained | `String` | CSS class for the contained appearance element |
| classes.inner | `String` | CSS class for the inner appearance element |
| classes.root | `String` | CSS class for the row root element |
| classes.videoOverlay | `String` | CSS class for the videoOverlay element |
| minHeight | `String` | CSS minimum height property |
| backgroundColor | `String` | CSS background-color property |
| desktopImage | `String` | Background image URL to be displayed on desktop devices |
| mobileImage | `String` | Background image URL to be displayed on mobile devices |
| backgroundSize | `String` | CSS background-size property |
| backgroundPosition | `String` | CSS background-position property |
| backgroundAttachment | `String` | CSS background-attachment property |
| backgroundRepeat | `String` | CSS background-repeat property |
| enableParallax | `Boolean` | Enable parallax on this row |
| parallaxSpeed | `Number` | The speed which Parallax should scroll, from -1.0 to 2.0 |
| textAlign | `String` | Alignment of content within the row |
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

**Source Code**: [pwa-studio/packages/pagebuilder/lib/ContentTypes/Row/row.js](https://github.com/magento/pwa-studio/tree/develop/packages/pagebuilder/lib/ContentTypes/Row/row.js)
