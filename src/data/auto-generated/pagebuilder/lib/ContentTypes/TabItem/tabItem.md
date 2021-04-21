## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#TabItem">TabItem</a></p>
</dd>
</dl>

<a name="TabItem"></a>

## TabItem ⇒ `React.Element`

Page Builder TabItem component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: `React.Element` - A React component that displays a TabItem.

| Param | Type              | Description           |
| ----- | ----------------- | --------------------- |
| props | [`props`](#props) | React component props |

<a name="props"></a>

## props

Props for [TabItem](#TabItem)

**Kind**: global typedef  
**Properties**

| Name                 | Type      | Description                                             |
| -------------------- | --------- | ------------------------------------------------------- |
| classes              | `Object`  | An object containing the class names for the TabItem    |
| classes.root         | `String`  | CSS class for the tab item root element                 |
| tabName              | `String`  | Name of the tab item                                    |
| verticalAlignment    | `String`  | Vertical alignment of content within tab item           |
| minHeight            | `String`  | CSS minimum height property                             |
| backgroundColor      | `String`  | CSS background-color property                           |
| desktopImage         | `String`  | Background image URL to be displayed on desktop devices |
| mobileImage          | `String`  | Background image URL to be displayed on mobile devices  |
| backgroundSize       | `String`  | CSS background-size property                            |
| backgroundPosition   | `String`  | CSS background-position property                        |
| backgroundAttachment | `String`  | CSS background-attachment property                      |
| backgroundRepeat     | `Boolean` | CSS background-repeat property                          |
| textAlign            | `String`  | Alignment of content within the tab item                |
| border               | `String`  | CSS border property                                     |
| borderColor          | `String`  | CSS border color property                               |
| borderWidth          | `String`  | CSS border width property                               |
| borderRadius         | `String`  | CSS border radius property                              |
| marginTop            | `String`  | CSS margin top property                                 |
| marginRight          | `String`  | CSS margin right property                               |
| marginBottom         | `String`  | CSS margin bottom property                              |
| marginLeft           | `String`  | CSS margin left property                                |
| paddingTop           | `String`  | CSS padding top property                                |
| paddingRight         | `String`  | CSS padding right property                              |
| paddingBottom        | `String`  | CSS padding bottom property                             |
| paddingLeft          | `String`  | CSS padding left property                               |
| cssClasses           | `Array`   | List of CSS classes to be applied to the component      |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/TabItem/tabItem.js).
