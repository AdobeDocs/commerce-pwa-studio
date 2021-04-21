## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Column">Column</a></p>
</dd>
</dl>

<a name="Column"></a>

## Column ⇒ `React.Element`

Page Builder Column component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: `React.Element` - A React component that displays a Column.

| Param | Type              | Description           |
| ----- | ----------------- | --------------------- |
| props | [`props`](#props) | React component props |

<a name="props"></a>

## props

Props for [Column](#Column)

**Kind**: global typedef  
**Properties**

| Name                 | Type      | Description                                                      |
| -------------------- | --------- | ---------------------------------------------------------------- |
| appearance           | `String`  | Converts to CSS align-self sub-property of the flexbox item      |
| backgroundAttachment | `String`  | CSS background-attachment property                               |
| backgroundColor      | `String`  | CSS background-color property                                    |
| backgroundPosition   | `String`  | CSS background-position property                                 |
| backgroundRepeat     | `Boolean` | CSS background-repeat property                                   |
| backgroundSize       | `String`  | CSS background-size property                                     |
| border               | `String`  | CSS border property                                              |
| borderColor          | `String`  | CSS border color property                                        |
| borderRadius         | `String`  | CSS border radius property                                       |
| borderWidth          | `String`  | CSS border width property                                        |
| classes              | `Object`  | An object containing the class names for the Column              |
| classes.root         | `String`  | CSS classes for the root container element                       |
| cssClasses           | `Array`   | List of CSS classes to be applied to the component               |
| desktopImage         | `String`  | Background image url to be used for desktop screen width         |
| marginBottom         | `String`  | CSS margin bottom property                                       |
| marginLeft           | `String`  | CSS margin left property                                         |
| marginRight          | `String`  | CSS margin right property                                        |
| marginTop            | `String`  | CSS margin top property                                          |
| maxWidth             | `String`  | Maximum width of the video                                       |
| minHeight            | `String`  | CSS min-height property                                          |
| mobileImage          | `String`  | Background image url to be used for mobile screen width          |
| paddingBottom        | `String`  | CSS padding bottom property                                      |
| paddingLeft          | `String`  | CSS padding left property                                        |
| paddingRight         | `String`  | CSS padding right property                                       |
| paddingTop           | `String`  | CSS padding top property                                         |
| textAlign            | `String`  | Horisontal alignment of the contents within the parent container |
| verticalAlignment    | `String`  | Vertical alignment of the contents within the parent container   |
| width                | `String`  | CSS width property                                               |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Column/column.js).
