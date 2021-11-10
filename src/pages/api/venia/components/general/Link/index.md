---
title: Link;
---

import Link from '/src/data/auto-generated/venia-ui/lib/components/Link/link.md';

# Link

The `Link` component wraps the [react-router-dom Link](https://knowbody.github.io/react-router-docs/api/Link.html) component, but adds intelligent prefetching behavior to speed up performance. Our `Link` component binds to an `IntersectionObserver` to prefetch the target page only when the link is visible in the viewport. And when possible, our `Link` loads the page from local cache to prevent unnecessary roundtrips to the server. In short, the `Link` component builds in all the best-practices that Google recommends when prefetching content for fast transitions.

<Link />
