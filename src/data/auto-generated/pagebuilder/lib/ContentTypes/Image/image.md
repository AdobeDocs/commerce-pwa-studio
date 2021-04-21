## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Image">Image</a></p>
</dd>
</dl>

<a name="Image"></a>

## Image ⇒ `React.Element`

Page Builder Image component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: `React.Element` - A React component that displays an Image.

| Param | Type              | Description           |
| ----- | ----------------- | --------------------- |
| props | [`props`](#props) | React component props |

<a name="props"></a>

## props

Props for [Image](#Image)

**Kind**: global typedef  
**Properties**

| Name          | Type     | Description                                            |
| ------------- | -------- | ------------------------------------------------------ |
| classes       | `Object` | An object containing the class names for the Image     |
| classes.img   | `String` | CSS classes for the img element                        |
| desktopImage  | `String` | URL src of the desktop image                           |
| mobileImage   | `String` | URL src of the mobile image                            |
| altText       | `String` | Alternate text                                         |
| title         | `String` | Title of the image                                     |
| link          | `String` | URL to redirect to                                     |
| linkType      | `String` | Type of link                                           |
| openInNewTab  | `bool`   | Flag to indicate if link should be opened in a new tab |
| caption       | `String` | Caption for the image                                  |
| textAlign     | `String` | Alignment of the divider within the parent container   |
| border        | `String` | CSS border property                                    |
| borderColor   | `String` | CSS border color property                              |
| borderWidth   | `String` | CSS border width property                              |
| borderRadius  | `String` | CSS border radius property                             |
| marginTop     | `String` | CSS margin top property                                |
| marginRight   | `String` | CSS margin right property                              |
| marginBottom  | `String` | CSS margin bottom property                             |
| marginLeft    | `String` | CSS margin left property                               |
| paddingTop    | `String` | CSS padding top property                               |
| paddingRight  | `String` | CSS padding right property                             |
| paddingBottom | `String` | CSS padding bottom property                            |
| paddingLeft   | `String` | CSS padding left property                              |
| cssClasses    | `Array`  | List of CSS classes to be applied to the component     |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Image/image.js).
