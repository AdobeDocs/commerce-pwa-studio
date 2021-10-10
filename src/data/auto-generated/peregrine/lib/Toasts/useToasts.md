##Functions

<dl>
<dt><a href="#getToastId">getToastId(properties)</a></dt>
<dd>

Generates an identifier for a toast by inspecting the properties that
differentiate toasts from one another.

</dd>
<dt><a href="#useToasts">useToasts()</a> ⇒ <inlineCode>Array.&lt;Object&gt;</inlineCode></dt>
<dd>

A hook that provides access to the toast state and toast api.

</dd>
</dl>

##Typedefs

<dl>
<dt><a href="#ToastProps">ToastProps</a></dt>
<dd>

Object containing data for creating toasts using [addToast](#API.addToast).

</dd>
<dt><a href="#API">API</a> : <inlineCode>Object</inlineCode></dt>
<dd>

The API for managing toasts.
Use this API to add and remove toasts.

</dd>
</dl>


Generates an identifier for a toast by inspecting the properties that
differentiate toasts from one another.

*global* *function*

A hook that provides access to the toast state and toast api.

*global* *function*
`Array.<Object>` — An array containing objects for the toast state and its API: [[ToastState](../useToastContext#ToastState), [API](#API)]

Object containing data for creating toasts using [addToast](#API.addToast).

*global* *typedef*

| Prop name | Type | Description |
| --- | --- | --- |
| type | `String` | One of the following toast types: 'info', 'warning',   or 'error' |
| message | `String` | The message to display on the toast |
| [dismissable] | `Bool` | Indicates whether the toast is dismissable.   If `onDismiss` is provided, this property is assumed to be true.   This property is optional when creating toasts. |
| [icon] | `React.Element` | The icon element to display.   This property is optional when creating toasts. |
| [onDismiss] | `function` | Callback invoked when a user clicks the   dismiss icon.   This property is optional when creating toasts. |
| [actionText] | `String` | Text to display as a call to action.   This property is optional when creating toasts. |
| [onAction] | `function` | Callback invoked when a user clicks the action   text.   This property is optional when creating toasts. |
| [timeout] | `Number` | Time, in ms, before the toast is automatically   dismissed.   If `0` or `false` is passed, the toast will not timeout.   This property is optional when creating toasts. |


The API for managing toasts.
Use this API to add and remove toasts.

*global* *typedef*

* [API](#API) : `Object`
    * [.removeToast(id)](#API.removeToast)
    * [.addToast(toastProps)](#API.addToast) ⇒ `Number`


Removes a toast from the toast store.

*static* *method* of [`API`](#API)

Dispatches an add action. Includes all props passed along with a hash id
and a timeout id generated based on the incoming props.

*static* *method* of [`API`](#API)
`Number` — id The key referencing the toast in the store


[pwa-studio/packages/peregrine/lib/Toasts/useToasts.js](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/Toasts/useToasts.js)