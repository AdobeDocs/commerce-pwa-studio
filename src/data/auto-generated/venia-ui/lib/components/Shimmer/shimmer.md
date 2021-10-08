## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Shimmer">Shimmer</a></p>
</dd>
</dl>

<a name="Shimmer"></a>

## Shimmer
The Shimmer component is a loading indicator that takes the shape of the component being loaded.
Instead of blocking the entire page like a traditional full-screen loader, Shimmer loaders are component specific.
As soon as a component loads on the page, you can start using it, instead of waiting for all the components to load.

Using Shimmer components improves both the perceived and actual speed of the site. User perception is improved because
users and interact with parts of the page before the entire page is loaded. But actual performance is also improved.
The Shimmer component eliminates most of the CLS (Content Layout Shift) on a page, which reduces CPU usage
and render times when loading the entire page.

**Kind**: global functional component  

| Param | Type | Description |
| --- | --- | --- |
| classes | <code>Object</code> | Styles to apply to the `root` of the Shimmer. Available classes are `root` and `root_[TYPE]`. |
| borderRadius | <code>string</code> \| <code>number</code> | Border radius for the shimmer. |
| height | <code>string</code> \| <code>number</code> | Sets the height of the Shimmer. Numbers are in `rem` units. Strings are used directly (Example: '100px'). |
| width | <code>string</code> \| <code>number</code> | Sets the width of the Shimmer. Numbers are in `rem` units. Strings are used directly (Example: '100px'). |
| style | <code>Object</code> | CSS styles to apply to the Shimmer. |
| type | <code>&#x27;rectangle&#x27;</code> \| <code>&#x27;button&#x27;</code> \| <code>&#x27;checkbox&#x27;</code> \| <code>&#x27;radio&#x27;</code> \| <code>&#x27;textArea&#x27;</code> \| <code>&#x27;textInput&#x27;</code> | The base element shape to apply to the Shimmer. |
| children | <code>node</code> | Children to output within the Shimmer. Useful for setting image placeholders. |

<a name="props"></a>

## props
Props for [Shimmer](#Shimmer)

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | <code>Object</code> | is an object containing the class names for the Shimmer component. |
| classes.root | <code>string</code> | is the class for the container |
| classes.root_rectangle | <code>string</code> | is the class for the container of type rectangle |
| classes.root_button | <code>string</code> | is the class for the container of type button |
| classes.root_checkbox | <code>string</code> | is the class for the container of type checkbox |
| classes.root_radio | <code>string</code> | is the class for the container of type radio |
| classes.root_textArea | <code>string</code> | is the class for the container of type textArea |
| classes.root_textInput | <code>string</code> | is the class for the container of type textInput |
| borderRadius | <code>number</code> \| <code>string</code> | is the border radius of the Shimmer |
| height | <code>number</code> \| <code>string</code> | is the height of the Shimmer |
| width | <code>number</code> \| <code>string</code> | is the width of the Shimmer |
| style | <code>Object</code> | is an object of inline styles |
| type | <code>string</code> | is the type of the Shimmer |
| children | <code>node</code> | are the children of the Shimmer |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Shimmer/shimmer.js).