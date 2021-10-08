<a name="Link"></a>

## Link
The `Link` component provides a wrapper for the base react-router-dom link, but provides additional functionality.
When the `prefetchType` prop is passed, the component will bind an `IntersectionObserver` so when the link becomes visible,
it will prefetch the page information. Since the call is the same as the `useMagentoRoute` talon, the page renders quickly
from local cache instead of making a call to the server. This behavior matches Google's recommendation for prefetching certain content to make transitions quicker.

**Kind**: global functional component  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>props</code> | React component props. |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Link/link.js).