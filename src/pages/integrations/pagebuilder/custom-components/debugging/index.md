---
title: Debugging
description: Learn how to debug custom Page Builder components in PWA Studio storefront projects.
edition: paas
---

# Debugging

Tips for debugging your issues.

## Tips

If you haven't yet modified the config object and setup the references you'll see the following console warning, telling you the component is missing:

```text
parseStorageHtml.js?4091:67 No config aggregator defined for content type X, this content type won't be rendered.
```

If you _have_ modified the configuration and your content type is still not displaying, debug through `packages/pagebuilder/lib/parseStorageHtml.js` to determine if your configuration item is correctly detected.
