## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd>

Props for [ProductImageCarousel](#ProductImageCarousel)

</dd>
</dl>

<a name="ProductImageCarousel"></a>

## ProductImageCarousel ⇒ `React.Element`
Carousel component for product images
Carousel - Component that holds number of images
where typically one image visible, and other
images can be navigated through previous and next buttons

**Kind**: global functional component  
**Returns**: `React.Element` - React carousel component that displays a product image  

| Param | Type |
| --- | --- |
| props | [`props`](#props) | 

<a name="props"></a>

## props
Props for [ProductImageCarousel](#ProductImageCarousel)

**Kind**: global typedef  
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
| images.label | `string` | label for image |
| image.position | `string` | Position of image in Carousel |
| image.disabled | `bool` | Is image disabled |
| image.file | `string` | filePath of image |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/ProductImageCarousel/carousel.js).