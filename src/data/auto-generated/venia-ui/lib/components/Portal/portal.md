## Typedefs

<dl>
<dt><a href="#props">props</a></dt>
<dd><p>Props for <a href="#Portal">Portal</a></p>
</dd>
</dl>

<a name="Portal"></a>

## Portal ⇒ <code>React.ReactPortal</code>
A component that renders content into a DOM node that exists
outside of the DOM hierarchy of the parent component.

**Kind**: global functional component  
**Returns**: <code>React.ReactPortal</code> - The React portal.  
**See**: https://reactjs.org/docs/portals.html  

| Param | Type | Description |
| --- | --- | --- |
| children | <code>ReactNodeLike</code> | React child elements |
| container | <code>Object</code> | The DOM node to render the children in |

<a name="props"></a>

## props
Props for [Portal](#Portal)

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| children | <code>ReactNodeLike</code> | any elements that will be child elements inside the modal. |
| container | <code>Object</code> | the container element (a DOM element) where the children will be rendered. |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Portal/portal.js).