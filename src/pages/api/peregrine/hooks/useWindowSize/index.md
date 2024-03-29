---
title: useWindowSize()
description: View detailed API reference documentation for the useWindowSize() custom React hook in the Peregrine package of the PWA Studio framework.
---

# useWindowSize()

<!--
The reference doc content is generated automatically from the source code.
To update this section, update the doc blocks in the source code
-->

import Component from '/src/data/auto-generated/peregrine/lib/hooks/useWindowSize.md'

<Component />

## Examples

It is recommended to only create/use the WindowSizeContextProvider a single time at the top level of your app:

```jsx
return (
  <WindowSizeContextProvider>
    <App />
  </WindowSizeContextProvider>
);
```

Inside a component in your application, use the `useWindowSize()` function to get the window size value that updates when the window size changes.

```jsx
import { useWindowSize } from "@magento/peregrine";

function MyComponent(props) {
  const windowSize = useWindowSize();

  return (
    <span>
      Inner window size: {windowSize.innerWidth} x {windowSize.innerHeight}
    </span>
  );
}
```
