
## Typedefs

[ToastState] : `Object`

The current state of the toast store.

[ToastContextProvider]

A [context](https://legacy.reactjs.org/docs/context.html) provider that
provides the toast state object and a dispatch function to toast
functionality consumers.

[useToastContext] ⇒ `Array.&lt;Object>`

A hook that provides access to the toast state and dispatch.
Any component using this hook _must_ be a child of a ToastContextProvider.

The current state of the toast store.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| toasts | `Map` | Map object associating an id to toast data |

A [context](https://legacy.reactjs.org/docs/context.html) provider that
provides the toast state object and a dispatch function to toast
functionality consumers.

A hook that provides access to the toast state and dispatch.
Any component using this hook _must_ be a child of a ToastContextProvider.

**Returns:**
`Array.<Object>`
   — An array containing the state and dispatch function: [ToastState, function]

**Example**

```js
const [toastState, dispatch] = useToastState();
```

**Source Code**: [pwa-studio/packages/peregrine/lib/Toasts/useToastContext.js](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/Toasts/useToastContext.js)
