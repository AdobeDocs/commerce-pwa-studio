## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#ButtonItem">ButtonItem</a></p>
</dd>
</dl>

<a name="ButtonItem"></a>

## ButtonItem ⇒ `React.Element`

Page Builder ButtonItem component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: `React.Element` - A React component that displays a button.

| Param | Type              | Description           |
| ----- | ----------------- | --------------------- |
| props | [`props`](#props) | React component props |

<a name="props"></a>

## props

Props for [ButtonItem](#ButtonItem)

**Kind**: global typedef  
**Properties**

| Name          | Type     | Description                                           |
| ------------- | -------- | ----------------------------------------------------- |
| buttonType    | `String` | Sets button type option                               |
| link          | `String` | Url to the page opened when button clicked            |
| linkType      | `String` | Type of the linked page                               |
| openInNewTab  | `String` | Toggles the option to open linked page in the new tab |
| text          | `String` | Button text                                           |
| textAlign     | `String` | Button text align                                     |
| border        | `String` | CSS border property                                   |
| borderColor   | `String` | CSS border color property                             |
| borderWidth   | `String` | CSS border width property                             |
| borderRadius  | `String` | CSS border radius property                            |
| marginTop     | `String` | CSS margin top property                               |
| marginRight   | `String` | CSS margin right property                             |
| marginBottom  | `String` | CSS margin bottom property                            |
| marginLeft    | `String` | CSS margin left property                              |
| paddingTop    | `String` | CSS padding top property                              |
| paddingRight  | `String` | CSS padding right property                            |
| paddingBottom | `String` | CSS padding bottom property                           |
| paddingLeft   | `String` | CSS padding left property                             |
| cssClasses    | `Array`  | List of CSS classes to be applied to the component    |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/ButtonItem/buttonItem.js).
