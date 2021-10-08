## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#ProductImageCarousel">ProductImageCarousel</a></p>
</dd>
</dl>

<a name="ProductImageCarousel"></a>

## ProductImageCarousel ⇒ <code>React.Element</code>
Carousel component for product images
Carousel - Component that holds number of images
where typically one image visible, and other
images can be navigated through previous and next buttons

**Kind**: global functional component  
**Returns**: <code>React.Element</code> - React carousel component that displays a product image  

| Param | Type |
| --- | --- |
| props | [<code>props</code>](#props) | 

<a name="props"></a>

## props
Props for [ProductImageCarousel](#ProductImageCarousel)

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | <code>Object</code> | An object containing the class names for the ProductImageCarousel component |
| classes.currentImage | <code>string</code> | classes for visible image |
| classes.imageContainer | <code>string</code> | classes for image container |
| classes.nextButton | <code>string</code> | classes for next button |
| classes.previousButton | <code>string</code> | classes for previous button |
| classes.root | <code>string</code> | classes for root container |
| images | <code>Array.&lt;Object&gt;</code> | Product images input for Carousel |
| images[].disabled | <code>bool</code> | Is image disabled |
| images[].file | <code>string</code> | filePath of image |
| images[].uid | <code>string</code> | the id of the image |
| images[].label | <code>string</code> | label for image |
| images[].position | <code>string</code> | Position of image in Carousel |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/ProductImageCarousel/carousel.js).