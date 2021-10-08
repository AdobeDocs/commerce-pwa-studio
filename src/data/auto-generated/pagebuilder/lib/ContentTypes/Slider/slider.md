## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Slider">Slider</a></p>
</dd>
</dl>

<a name="Slider"></a>

## Slider ⇒ <code>React.Element</code>
Page Builder Slider component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: <code>React.Element</code> - A React component that displays a Slider which contains slides.  

| Param | Type | Description |
| --- | --- | --- |
| props | [<code>props</code>](#props) | React component props |

<a name="props"></a>

## props
Props for [Slider](#Slider)

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| classes | <code>Object</code> | An object containing the class names for the Slider |
| classes.root | <code>String</code> | CSS class for the slider root element |
| classes.bannerRoot | <code>String</code> | CSS class for the child banner item |
| classes.bannerLink | <code>String</code> | CSS class for the child banner item |
| classes.bannerWrapper | <code>String</code> | CSS class for the child banner item |
| classes.bannerPosterOverlay | <code>String</code> | CSS class for the child banner item |
| minHeight | <code>String</code> | CSS minimum height property |
| autoplay | <code>String</code> | Whether the slider should autoplay |
| autoplaySpeed | <code>String</code> | The speed at which the autoplay should move the slide on |
| fade | <code>String</code> | Fade between slides |
| infinite | <code>String</code> | Whether to infinitely scroll the slider |
| showArrows | <code>String</code> | Whether to show arrows on the slide for navigation |
| showDots | <code>String</code> | Whether to show navigation dots at the bottom of the slider |
| textAlign | <code>String</code> | Alignment of content within the slider |
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



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Slider/slider.js).