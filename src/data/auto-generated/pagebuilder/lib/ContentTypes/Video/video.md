## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Video">Video</a></p>
</dd>
</dl>

<a name="Video"></a>

## Video ⇒ <code>React.Element</code>
Page Builder Video component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: <code>React.Element</code> - A React component that displays a Video using an iframe.  

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>props</code>](#props) | React component props |

<a name="props"></a>

## props
Props for [Video](#Video)

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | <code>Object</code> | An object containing the class names for the Video |
| classes.root | <code>String</code> | CSS classes for the root container element |
| classes.inner | <code>String</code> | CSS classes for the inner container element |
| classes.wrapper | <code>String</code> | CSS classes for the wrapper container element |
| classes.container | <code>String</code> | CSS classes for the container element |
| classes.video | <code>String</code> | CSS classes for the video element |
| url | <code>String</code> | URL to render the video from an external provider (YouTube, Vimeo etc) |
| autoplay | <code>Boolean</code> | Video autoplay |
| muted | <code>Boolean</code> | Video muted |
| maxWidth | <code>String</code> | Maximum width of the video |
| textAlign | <code>String</code> | Alignment of the video within the parent container |
| border | <code>String</code> | CSS border property |
| borderColor | <code>String</code> | CSS border color property |
| borderWidth | <code>String</code> | CSS border width property |
| borderRadius | <code>String</code> | CSS border radius property |
| marginTop | <code>String</code> | CSS margin top property |
| marginRight | <code>String</code> | CSS margin right property |
| marginBottom | <code>String</code> | CSS margin bottom property |
| marginLeft | <code>String</code> | CSS margin left property |
| paddingTop | <code>String</code> | CSS padding top property |
| paddingRight | <code>String</code> | CSS padding right property |
| paddingBottom | <code>String</code> | CSS padding bottom property |
| paddingLeft | <code>String</code> | CSS padding left property |
| cssClasses | <code>Array</code> | List of CSS classes to be applied to the component |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Video/video.js).