## Typedefs

<dl>
<dt><a href="#ToastState">ToastState</a> : <inlineCode>Object</inlineCode></dt>
<dd>

The current state of the toast store.

</dd>
<dt><a href="#ToastContextProvider">ToastContextProvider</a></dt>
<dd>

A [context](https://reactjs.org/docs/context.html) provider that
provides the toast state object and a dispatch function to toast
functionality consumers.

</dd>
<dt><a href="#useToastContext">useToastContext</a> ⇒ <inlineCode>Array.&lt;Object&gt;</inlineCode></dt>
<dd>

A hook that provides access to the toast state and dispatch.
Any component using this hook _must_ be a child of a [ToastContextProvider](#ToastContextProvider).

</dd>
</dl>

<a name="ToastState" id="ToastState"></a>

## ToastState : `Object`

The current state of the toast store.

**Kind**: global typedef  
**Properties**

| Name   | Type  | Description                                |
| ------ | ----- | ------------------------------------------ |
| toasts | `Map` | Map object associating an id to toast data |

<a name="ToastContextProvider" id="ToastContextProvider"></a>

## ToastContextProvider

A [context](https://reactjs.org/docs/context.html) provider that
provides the toast state object and a dispatch function to toast
functionality consumers.

**Kind**: global typedef  
<a name="useToastContext" id="useToastContext"></a>

## useToastContext ⇒ `Array.<Object>`

A hook that provides access to the toast state and dispatch.
Any component using this hook _must_ be a child of a [ToastContextProvider](#ToastContextProvider).

**Kind**: global typedef  
**Returns**: `Array.<Object>` - An array containing the state and dispatch function: [[ToastState](#ToastState), function]  
**Example**

```js
const [toastState, dispatch] = useToastState();
```

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/Toasts/useToastContext.js).
