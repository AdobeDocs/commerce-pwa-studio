##Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd>

Props for [Shimmer](#Shimmer)

</dd>
</dl>


The Shimmer component is a loading indicator that takes the shape of the component being loaded.
Instead of blocking the entire page like a traditional full-screen loader, Shimmer loaders are component specific.
As soon as a component loads on the page, you can start using it, instead of waiting for all the components to load.

Using Shimmer components improves both the perceived and actual speed of the site. User perception is improved because
users and interact with parts of the page before the entire page is loaded. But actual performance is also improved.
The Shimmer component eliminates most of the CLS (Content Layout Shift) on a page, which reduces CPU usage
and render times when loading the entire page.

*global* *functional component*

Props for [Shimmer](#Shimmer)

*global* *typedef*

| Prop name | Type | Description |
| --- | --- | --- |
| classes | `Object` | is an object containing the class names for the Shimmer component. |
| classes.root | `string` | is the class for the container |
| classes.root_rectangle | `string` | is the class for the container of type rectangle |
| classes.root_button | `string` | is the class for the container of type button |
| classes.root_checkbox | `string` | is the class for the container of type checkbox |
| classes.root_radio | `string` | is the class for the container of type radio |
| classes.root_textArea | `string` | is the class for the container of type textArea |
| classes.root_textInput | `string` | is the class for the container of type textInput |
| borderRadius | `number` \| `string` | is the border radius of the Shimmer |
| height | `number` \| `string` | is the height of the Shimmer |
| width | `number` \| `string` | is the width of the Shimmer |
| style | `Object` | is an object of inline styles |
| type | `string` | is the type of the Shimmer |
| children | `node` | are the children of the Shimmer |



[pwa-studio/packages/venia-ui/lib/components/Shimmer/shimmer.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Shimmer/shimmer.js)