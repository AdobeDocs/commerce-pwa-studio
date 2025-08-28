
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| classes | `Object` | Styles to apply to the `root` of the Shimmer. Available classes are `root` and `root_[TYPE]`. |
| borderRadius | `string` \| `number` | Border radius for the shimmer. |
| height | `string` \| `number` | Sets the height of the Shimmer. Numbers are in `rem` units. Strings are used directly (Example: '100px'). |
| width | `string` \| `number` | Sets the width of the Shimmer. Numbers are in `rem` units. Strings are used directly (Example: '100px'). |
| style | `Object` | CSS styles to apply to the Shimmer. |
| type | `'rectangle'` \| `'button'` \| `'checkbox'` \| `'radio'` \| `'textArea'` \| `'textInput'` | The base element shape to apply to the Shimmer. |
| children | `node` | Children to output within the Shimmer. Useful for setting image placeholders. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | `Object` | This is an object containing the class names for the Shimmer component. |
| classes.root | `string` | This is the class for the container |
| classes.root_rectangle | `string` | This is the class for the container of type rectangle |
| classes.root_button | `string` | This is the class for the container of type button |
| classes.root_checkbox | `string` | This is the class for the container of type checkbox |
| classes.root_radio | `string` | This is the class for the container of type radio |
| classes.root_textArea | `string` | This is the class for the container of type textArea |
| classes.root_textInput | `string` | This is the class for the container of type textInput |
| borderRadius | `number` \| `string` | This is the border radius of the Shimmer |
| height | `number` \| `string` | This is the height of the Shimmer |
| width | `number` \| `string` | This is the width of the Shimmer |
| style | `Object` | This is an object of inline styles |
| type | `string` | This is the type of the Shimmer |
| children | `node` | These are the children of the Shimmer |

**Source Code**: [pwa-studio/packages/venia-ui/lib/components/Shimmer/shimmer.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Shimmer/shimmer.js)
