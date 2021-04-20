## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Heading">Heading</a></p>
</dd>
</dl>

<a name="Heading"></a>

## Heading ⇒ `React.Element`

Page Builder Heading component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: `React.Element` - A React component that renders Heading with optional styling properties.

| Param | Type              | Description           |
| ----- | ----------------- | --------------------- |
| props | [`props`](#props) | React component props |

<a name="props"></a>

## props

Props for [Heading](#Heading)

**Kind**: global typedef  
**Properties**

| Name          | Type     | Description                                        |
| ------------- | -------- | -------------------------------------------------- |
| headingType   | `String` | Level of HTML heading                              |
| text          | `String` | Heading text                                       |
| textAlign     | `String` | Alignment of the text within the parent container  |
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

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Heading/heading.js).
