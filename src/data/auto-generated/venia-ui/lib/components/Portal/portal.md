## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd>

Props for [Portal](#Portal)

</dd>
</dl>

<a name="Portal"></a>

## Portal ⇒ `React.ReactPortal`

A component that renders content into a DOM node that exists
outside of the DOM hierarchy of the parent component.

**Kind**: global functional component  
**Returns**: `React.ReactPortal` - The React portal.  
**See**: https://reactjs.org/docs/portals.html

| Param     | Type            | Description                            |
| --------- | --------------- | -------------------------------------- |
| children  | `ReactNodeLike` | React child elements                   |
| container | `Object`        | The DOM node to render the children in |

<a name="props"></a>

## props

Props for [Portal](#Portal)

**Kind**: global typedef  
**Properties**

| Name      | Type            | Description                                                                |
| --------- | --------------- | -------------------------------------------------------------------------- |
| children  | `ReactNodeLike` | any elements that will be child elements inside the modal.                 |
| container | `Object`        | the container element (a DOM element) where the children will be rendered. |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Portal/portal.js).
