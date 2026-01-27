## Functions

[restoreSortOrder(urlKeys, products)] ⇒ `Array`

Sort products based on the original order

## Typedefs

[props]

Props for [Products](#Products)

Page Builder Products component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Returns:**
`React.Element`
   — A React component that displays a Products based on a number of products

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | [`props`](#props) | React component props |

Sort products based on the original order

**Returns:**
**Parameters**

| Name | Type |
| --- | --- |
| urlKeys | `Array` |
| products | `Array` |

Props for [Products](#Products)

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | `Object` | An object containing the class names for the Products |
| classes.root | `String` | CSS class for products |
| classes.carousel | `String` | CSS class for products carousel appearance |
| classes.centerMode | `String` | CSS class for products carousel appearance with center mode |
| classes.centerModeSmall | `String` | CSS class for products carousel appearance with center mode on small screen |
| classes.galleryItems | `String` | CSS class to modify child gallery items |
| classes.error | `String` | CSS class for displaying fetch errors |
| appearance | `String` | Sets products appearance |
| autoplay | `Boolean` | Whether the carousel should autoplay |
| autoplaySpeed | `Number` | The speed at which the autoplay should move the slide on |
| infinite | `Boolean` | Whether to infinitely scroll the carousel |
| arrows | `Boolean` | Whether to show arrows on the slide for navigation |
| dots | `Boolean` | Whether to show navigation dots at the bottom of the carousel |
| draggable | `Boolean` | Enable scrollable via dragging on desktop |
| carouselMode | `String` | Carousel mode |
| centerPadding | `String` | Horizontal padding in centerMode |
| pathNames | `Array` | List of Url path names to load into product list |
| textAlign | `String` | Alignment of content within the products list |
| border | `String` | CSS border property |
| borderColor | `String` | CSS border color property |
| borderWidth | `String` | CSS border width property |
| borderRadius | `String` | CSS border radius property |
| marginTop | `String` | CSS margin top property |
| marginRight | `String` | CSS margin right property |
| marginBottom | `String` | CSS margin bottom property |
| marginLeft | `String` | CSS margin left property |
| paddingTop | `String` | CSS padding top property |
| paddingRight | `String` | CSS padding right property |
| paddingBottom | `String` | CSS padding bottom property |
| paddingLeft | `String` | CSS padding left property |
| cssClasses | `Array` | List of CSS classes to be applied to the component |
| slidesToShow | `Number` | # of slides to show at a time |
| slidesToShowMedium | `Number` | # of slides to show at a time on medium sized screens |
| slidesToShowSmall | `Number` | # of slides to show at a time on small screen |
| slidesToShowSmallCenterMode | `Number` | # of slides to show at a time on small screen in centerMode |

**Source Code**: [pwa-studio/packages/pagebuilder/lib/ContentTypes/Products/products.js](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Products/products.js)
