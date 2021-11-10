
Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd>

Props for [ProductImageCarousel](#ProductImageCarousel)

</dd>
</dl>


Carousel component for product images
Carousel - Component that holds number of images
where typically one image visible, and other
images can be navigated through previous and next buttons

**Returns: **
`React.Element`
   — React carousel component that displays a product image

**Parameters**

| Name | Type |
| --- | --- |
| props | [`props`](#props) | 


Props for [ProductImageCarousel](#ProductImageCarousel)

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | `Object` | An object containing the class names for the ProductImageCarousel component |
| classes.currentImage | `string` | classes for visible image |
| classes.imageContainer | `string` | classes for image container |
| classes.nextButton | `string` | classes for next button |
| classes.previousButton | `string` | classes for previous button |
| classes.root | `string` | classes for root container |
| images | `Array.<Object>` | Product images input for Carousel |
| images[].disabled | `bool` | Is image disabled |
| images[].file | `string` | filePath of image |
| images[].uid | `string` | the id of the image |
| images[].label | `string` | label for image |
| images[].position | `string` | Position of image in Carousel |



**Source Code**: [pwa-studio/packages/venia-ui/lib/components/ProductImageCarousel/carousel.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/ProductImageCarousel/carousel.js)