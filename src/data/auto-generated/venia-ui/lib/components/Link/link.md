*global* *functional component*

| Prop name | Type | Description |
| --- | --- | --- |
| prefetchType | `bool` | `true` activates prefetching the target page when the link becomes visible in the viewport. |
| to | `string` | From [react-router-dom Link](https://knowbody.github.io/react-router-docs/api/Link.html). The absolute path to the target page of the link. Uses the `to` prop from the `react-router-dom Link`. |

**Example** *(Basic usage)*  
```js
<Link prefetchType={true} to="/about/">About Us</Link>
```


[pwa-studio/packages/venia-ui/lib/components/Link/link.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Link/link.js)