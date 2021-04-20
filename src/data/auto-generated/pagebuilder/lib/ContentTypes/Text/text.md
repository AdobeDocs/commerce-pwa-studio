## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Text">Text</a></p>
</dd>
</dl>

<a name="Text"></a>

## Text ⇒ `React.Element`

Page Builder Text component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: `React.Element` - A React component that displays a Text content type which contains content.

| Param | Type              | Description           |
| ----- | ----------------- | --------------------- |
| props | [`props`](#props) | React component props |

<a name="props"></a>

## props

Props for [Text](#Text)

**Kind**: global typedef  
**Properties**

| Name          | Type     | Description                                        |
| ------------- | -------- | -------------------------------------------------- |
| classes       | `Object` | An object containing the class names for the Text  |
| classes.root  | `String` | CSS class for the root text element                |
| content       | `String` | Content to be rendered within the content type     |
| textAlign     | `String` | Alignment of content within the text               |
| border        | `String` | CSS border property                                |
| borderColor   | `String` | CSS border color property                          |
| borderWidth   | `String` | CSS border width property                          |
| borderRadius  | `String` | CSS border radius property                         |
| marginTop     | `String` | CSS margin top property                            |
| marginRight   | `String` | CSS margin right property                          |
| marginBottom  | `String` | CSS margin bottom property                         |
| marginLeft    | `String` | CSS margin left property                           |
| paddingTop    | `String` | CSS padding top property                           |
| paddingRight  | `String` | CSS padding right property                         |
| paddingBottom | `String` | CSS padding bottom property                        |
| paddingLeft   | `String` | CSS padding left property                          |
| cssClasses    | `Array`  | List of CSS classes to be applied to the component |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Text/text.js).
