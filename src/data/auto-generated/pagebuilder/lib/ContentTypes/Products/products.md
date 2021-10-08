## Functions

<dl>
<dt><a href="#restoreSortOrder">restoreSortOrder(urlKeys, products)</a> ⇒ <code>Array</code></dt>
<dd><p>Sort products based on the original order</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Products">Products</a></p>
</dd>
</dl>

<a name="Products"></a>

## Products ⇒ <code>React.Element</code>
Page Builder Products component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: <code>React.Element</code> - A React component that displays a Products based on a number of products  

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>props</code>](#props) | React component props |

<a name="restoreSortOrder"></a>

## restoreSortOrder(urlKeys, products) ⇒ <code>Array</code>
Sort products based on the original order

**Kind**: global function  

| Param | Type |
| --- | --- |
| urlKeys | <code>Array</code> | 
| products | <code>Array</code> | 

<a name="props"></a>

## props
Props for [Products](#Products)

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | <code>Object</code> | An object containing the class names for the Products |
| classes.root | <code>String</code> | CSS class for products |
| classes.carousel | <code>String</code> | CSS class for products carousel appearance |
| classes.centerMode | <code>String</code> | CSS class for products carousel appearance with center mode |
| classes.centerModeSmall | <code>String</code> | CSS class for products carousel appearance with center mode on small screen |
| classes.galleryItems | <code>String</code> | CSS class to modify child gallery items |
| classes.error | <code>String</code> | CSS class for displaying fetch errors |
| appearance | <code>String</code> | Sets products appearance |
| autoplay | <code>Boolean</code> | Whether the carousel should autoplay |
| autoplaySpeed | <code>Number</code> | The speed at which the autoplay should move the slide on |
| infinite | <code>Boolean</code> | Whether to infinitely scroll the carousel |
| arrows | <code>Boolean</code> | Whether to show arrows on the slide for navigation |
| dots | <code>Boolean</code> | Whether to show navigation dots at the bottom of the carousel |
| draggable | <code>Boolean</code> | Enable scrollable via dragging on desktop |
| carouselMode | <code>String</code> | Carousel mode |
| centerPadding | <code>String</code> | Horizontal padding in centerMode |
| pathNames | <code>Array</code> | List of Url path names to load into product list |
| textAlign | <code>String</code> | Alignment of content within the products list |
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
| slidesToShow | <code>Number</code> | # of slides to show at a time |
| slidesToShowMedium | <code>Number</code> | # of slides to show at a time on medium sized screens |
| slidesToShowSmall | <code>Number</code> | # of slides to show at a time on small screen |
| slidesToShowSmallCenterMode | <code>Number</code> | # of slides to show at a time on small screen in centerMode |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Products/products.js).