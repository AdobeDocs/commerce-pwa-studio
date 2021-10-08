## Typedefs

<dl>
<dt><a href="#ToastState">ToastState</a> : <code>Object</code></dt>
<dd><p>The current state of the toast store.</p>
</dd>
<dt><a href="#ToastContextProvider">ToastContextProvider</a></dt>
<dd><p>A <a href="https://reactjs.org/docs/context.html">context</a> provider that
provides the toast state object and a dispatch function to toast
functionality consumers.</p>
</dd>
<dt><a href="#useToastContext">useToastContext</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>A hook that provides access to the toast state and dispatch.
Any component using this hook <em>must</em> be a child of a <a href="#ToastContextProvider">ToastContextProvider</a>.</p>
</dd>
</dl>

<a name="ToastState"></a>

## ToastState : <code>Object</code>
The current state of the toast store.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| toasts | <code>Map</code> | Map object associating an id to toast data |

<a name="ToastContextProvider"></a>

## ToastContextProvider
A [context](https://reactjs.org/docs/context.html) provider that
provides the toast state object and a dispatch function to toast
functionality consumers.

**Kind**: global typedef  
<a name="useToastContext"></a>

## useToastContext ⇒ <code>Array.&lt;Object&gt;</code>
A hook that provides access to the toast state and dispatch.
Any component using this hook _must_ be a child of a [ToastContextProvider](#ToastContextProvider).

**Kind**: global typedef  
**Returns**: <code>Array.&lt;Object&gt;</code> - An array containing the state and dispatch function: [[ToastState](#ToastState), function]  
**Example**  
```js
const [toastState, dispatch] = useToastState();
```


For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/Toasts/useToastContext.js).