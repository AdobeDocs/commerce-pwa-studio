## Functions

<dl>
<dt><a href="#getToastId">getToastId(properties)</a></dt>
<dd><p>Generates an identifier for a toast by inspecting the properties that
differentiate toasts from one another.</p>
</dd>
<dt><a href="#useToasts">useToasts()</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>A hook that provides access to the toast state and toast api.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ToastProps">ToastProps</a></dt>
<dd><p>Object containing data for creating toasts using <a href="#API.addToast">addToast</a>.</p>
</dd>
<dt><a href="#API">API</a> : <code>Object</code></dt>
<dd><p>The API for managing toasts.
Use this API to add and remove toasts.</p>
</dd>
</dl>

<a name="getToastId"></a>

## getToastId(properties)
Generates an identifier for a toast by inspecting the properties that
differentiate toasts from one another.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| properties | <code>Object</code> |  | A composite identifier object with properties   that identify a specific toast using its [ToastProps](#ToastProps). |
| properties.type | <code>String</code> |  | Maps to the `type` property of [ToastProps](#ToastProps) |
| properties.message | <code>String</code> |  | Maps to the `message` property of [ToastProps](#ToastProps) |
| properties.dismissable | <code>Boolean</code> | <code>true</code> | Maps to the `dismissable` property of [ToastProps](#ToastProps) |
| properties.actionText | <code>String</code> | <code>&#x27;&#x27;</code> | Maps to the `actionText` property of [ToastProps](#ToastProps) |
| properties.icon | <code>React.Element</code> | <code>()&#x3D;&gt;{}</code> | Maps to the `icon` property of [ToastProps](#ToastProps) |

<a name="useToasts"></a>

## useToasts() ⇒ <code>Array.&lt;Object&gt;</code>
A hook that provides access to the toast state and toast api.

**Kind**: global function  
**Returns**: <code>Array.&lt;Object&gt;</code> - An array containing objects for the toast state and its API: [[ToastState](../useToastContext#ToastState), [API](#API)]  
<a name="ToastProps"></a>

## ToastProps
Object containing data for creating toasts using [addToast](#API.addToast).

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | One of the following toast types: 'info', 'warning',   or 'error' |
| message | <code>String</code> | The message to display on the toast |
| [dismissable] | <code>Bool</code> | Indicates whether the toast is dismissable.   If `onDismiss` is provided, this property is assumed to be true.   This property is optional when creating toasts. |
| [icon] | <code>React.Element</code> | The icon element to display.   This property is optional when creating toasts. |
| [onDismiss] | <code>function</code> | Callback invoked when a user clicks the   dismiss icon.   This property is optional when creating toasts. |
| [actionText] | <code>String</code> | Text to display as a call to action.   This property is optional when creating toasts. |
| [onAction] | <code>function</code> | Callback invoked when a user clicks the action   text.   This property is optional when creating toasts. |
| [timeout] | <code>Number</code> | Time, in ms, before the toast is automatically   dismissed.   If `0` or `false` is passed, the toast will not timeout.   This property is optional when creating toasts. |

<a name="API"></a>

## API : <code>Object</code>
The API for managing toasts.
Use this API to add and remove toasts.

**Kind**: global typedef  

* [API](#API) : <code>Object</code>
    * [.removeToast(id)](#API.removeToast)
    * [.addToast(toastProps)](#API.addToast) ⇒ <code>Number</code>

<a name="API.removeToast"></a>

### API.removeToast(id)
Removes a toast from the toast store.

**Kind**: static method of [<code>API</code>](#API)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | The id of the toast to remove |

<a name="API.addToast"></a>

### API.addToast(toastProps) ⇒ <code>Number</code>
Dispatches an add action. Includes all props passed along with a hash id
and a timeout id generated based on the incoming props.

**Kind**: static method of [<code>API</code>](#API)  
**Returns**: <code>Number</code> - id The key referencing the toast in the store  

| Param | Type | Description |
| --- | --- | --- |
| toastProps | [<code>ToastProps</code>](#ToastProps) | The object containing props for adding a toast. |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/Toasts/useToasts.js).