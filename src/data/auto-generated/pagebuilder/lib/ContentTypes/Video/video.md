## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Video">Video</a></p>
</dd>
</dl>

<a name="Video"></a>

## Video ⇒ `React.Element`

Page Builder Video component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: `React.Element` - A React component that displays a Video using an iframe.

| Param | Type              | Description           |
| ----- | ----------------- | --------------------- |
| props | [`props`](#props) | React component props |

<a name="props"></a>

## props

Props for [Video](#Video)

**Kind**: global typedef  
**Properties**

| Name              | Type      | Description                                                            |
| ----------------- | --------- | ---------------------------------------------------------------------- |
| classes           | `Object`  | An object containing the class names for the Video                     |
| classes.root      | `String`  | CSS classes for the root container element                             |
| classes.inner     | `String`  | CSS classes for the inner container element                            |
| classes.wrapper   | `String`  | CSS classes for the wrapper container element                          |
| classes.container | `String`  | CSS classes for the container element                                  |
| classes.video     | `String`  | CSS classes for the video element                                      |
| url               | `String`  | URL to render the video from an external provider (YouTube, Vimeo etc) |
| autoplay          | `Boolean` | Video autoplay                                                         |
| muted             | `Boolean` | Video muted                                                            |
| maxWidth          | `String`  | Maximum width of the video                                             |
| textAlign         | `String`  | Alignment of the video within the parent container                     |
| border            | `String`  | CSS border property                                                    |
| borderColor       | `String`  | CSS border color property                                              |
| borderWidth       | `String`  | CSS border width property                                              |
| borderRadius      | `String`  | CSS border radius property                                             |
| marginTop         | `String`  | CSS margin top property                                                |
| marginRight       | `String`  | CSS margin right property                                              |
| marginBottom      | `String`  | CSS margin bottom property                                             |
| marginLeft        | `String`  | CSS margin left property                                               |
| paddingTop        | `String`  | CSS padding top property                                               |
| paddingRight      | `String`  | CSS padding right property                                             |
| paddingBottom     | `String`  | CSS padding bottom property                                            |
| paddingLeft       | `String`  | CSS padding left property                                              |
| cssClasses        | `Array`   | List of CSS classes to be applied to the component                     |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Video/video.js).
