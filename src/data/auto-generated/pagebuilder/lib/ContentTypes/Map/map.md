## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#GoogleMap">GoogleMap</a></p>
</dd>
</dl>

<a name="GoogleMap"></a>

## GoogleMap ⇒ `React.Element`

Page Builder Map component.

This component is part of the Page Builder / PWA integration. It can be consumed without Page Builder.

**Kind**: global functional component  
**Returns**: `React.Element` - A React component that displays a Map.

| Param | Type              | Description           |
| ----- | ----------------- | --------------------- |
| props | [`props`](#props) | React component props |

<a name="props"></a>

## props

Props for [GoogleMap](#GoogleMap)

**Kind**: global typedef  
**Properties**

| Name          | Type     | Description                                                   |
| ------------- | -------- | ------------------------------------------------------------- |
| classes       | `Object` | An object containing the class names for the Map              |
| classes.root  | `String` | CSS class for the root element                                |
| apiKey        | `String` | API key for Maps API usage                                    |
| height        | `String` | CSS height property                                           |
| mapOptions    | `Object` | specific Google Maps API options for Map object instantiation |
| locations     | `Array`  | Locations on the map for Marker placement                     |
| textAlign     | `String` | Alignment of content within the row                           |
| border        | `String` | CSS border property                                           |
| borderColor   | `String` | CSS border color property                                     |
| borderWidth   | `String` | CSS border width property                                     |
| borderRadius  | `String` | CSS border radius property                                    |
| marginTop     | `String` | CSS margin top property                                       |
| marginRight   | `String` | CSS margin right property                                     |
| marginBottom  | `String` | CSS margin bottom property                                    |
| marginLeft    | `String` | CSS margin left property                                      |
| paddingTop    | `String` | CSS padding top property                                      |
| paddingRight  | `String` | CSS padding right property                                    |
| paddingBottom | `String` | CSS padding bottom property                                   |
| paddingLeft   | `String` | CSS padding left property                                     |
| cssClasses    | `Array`  | List of CSS classes to be applied to the component            |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pagebuilder/lib/ContentTypes/Map/map.js).
