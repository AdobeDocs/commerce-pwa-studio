
Use for links to pages within your app.

**Returns: **
`RouterLink`
   — the `Link` component from `react-router-dom`. We add a `ref` to prefetch pages when the link enters the viewport.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | `props` | React component props |


**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [prefetchType] | `bool` | <inlineCode>false</inlineCode> | Determine if the link should be prefetched using `IntersectionObserver`. |



**Source Code**: [pwa-studio/packages/venia-ui/lib/components/Link/link.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Link/link.js)