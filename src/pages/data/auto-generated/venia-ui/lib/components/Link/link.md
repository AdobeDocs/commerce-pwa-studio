
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| shouldPrefetch | `bool` | `true` activates prefetching the target page when the link becomes visible in the viewport. |
| to | `string` | From [react-router-dom Link](https://knowbody.github.io/react-router-docs/api/Link.html). The absolute path to the target page of the link. Uses the `to` prop from the `react-router-dom Link`. |

**Example** *(Basic usage)*

```js
<Link shouldPrefetch={true} to="/about/">About Us</Link>
```

**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [prefetchType] | `bool` | `false` | Deprecated. Use `shouldPrefetch` instead. |
| [shouldPrefetch] | `bool` | `false` | Determine if the link should be prefetched using `IntersectionObserver`. |

**Source Code**: [pwa-studio/packages/venia-ui/lib/components/Link/link.js](https://github.com/magento/pwa-studio/tree/develop/packages/venia-ui/lib/components/Link/link.js)
