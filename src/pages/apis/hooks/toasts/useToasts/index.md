---
title: useToasts()
---

# useToasts()

<!--
The reference doc content is generated automatically from the source code.
To update this section, update the doc blocks in the source code
-->

import Component from '/src/data/auto-generated/peregrine/lib/Toasts/useToasts.md'

<Component />

## Examples

### Adding a toast

Use the `addToast()` function from the API to add a toast to the toast store.

<InlineAlert variant="info" slots="text"/>

If an `onAction()` or `onDismiss()` callback is provided, the implementer _must_ call the passed in `remove()` function.
If the `onDismiss()` callback is not provided, the toast is removed immediately.

```jsx
const { toasterState, api }  = useToast();
const { addToast } = api;

addToast({
  type: 'error',
  message: 'An error occurred!',
  actionText: 'Retry',
  onAction: remove => {
    async attemptRetry();
    remove();
  },
  onDismiss: remove => {
    async doSomethingOnDismiss();
    remove();
  },
  icon: <Icon src={SadFaceIcon} />
});
```
