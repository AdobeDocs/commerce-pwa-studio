## Functions

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

## Typedefs

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

<a name="getToastId" id="getToastId"></a>

## getToastId(properties)

Generates an identifier for a toast by inspecting the properties that
differentiate toasts from one another.

**Kind**: global function

| Param                  | Type            | Default  | Description                                                                                                       |
| ---------------------- | --------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| properties             | `Object`        |          | A composite identifier object with properties that identify a specific toast using its [ToastProps](#ToastProps). |
| properties.type        | `String`        |          | Maps to the `type` property of [ToastProps](#ToastProps)                                                          |
| properties.message     | `String`        |          | Maps to the `message` property of [ToastProps](#ToastProps)                                                       |
| properties.dismissable | `Boolean`       | `true`   | Maps to the `dismissable` property of [ToastProps](#ToastProps)                                                   |
| properties.actionText  | `String`        | `''`     | Maps to the `actionText` property of [ToastProps](#ToastProps)                                                    |
| properties.icon        | `React.Element` | `()=>{}` | Maps to the `icon` property of [ToastProps](#ToastProps)                                                          |

<a name="useToasts" id="useToasts"></a>

## useToasts() ⇒ `Array.<Object>`

A hook that provides access to the toast state and toast api.

**Kind**: global function  
**Returns**: `Array.<Object>` - An array containing objects for the toast state and its API: [[ToastState](../useToastContext#ToastState), [API](#API)]  
<a name="ToastProps" id="ToastProps"></a>

## ToastProps

Object containing data for creating toasts using [addToast](#API.addToast).

**Kind**: global typedef  
**Properties**

| Name          | Type            | Description                                                                                                                                                        |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| type          | `String`        | One of the following toast types: 'info', 'warning', or 'error'                                                                                                    |
| message       | `String`        | The message to display on the toast                                                                                                                                |
| [dismissable] | `Bool`          | Indicates whether the toast is dismissable. If `onDismiss` is provided, this property is assumed to be true. This property is optional when creating toasts.       |
| [icon]        | `React.Element` | The icon element to display. This property is optional when creating toasts.                                                                                       |
| [onDismiss]   | `function`      | Callback invoked when a user clicks the dismiss icon. This property is optional when creating toasts.                                                              |
| [actionText]  | `String`        | Text to display as a call to action. This property is optional when creating toasts.                                                                               |
| [onAction]    | `function`      | Callback invoked when a user clicks the action text. This property is optional when creating toasts.                                                               |
| [timeout]     | `Number`        | Time, in ms, before the toast is automatically dismissed. If `0` or `false` is passed, the toast will not timeout. This property is optional when creating toasts. |

<a name="API" id="API"></a>

## API : `Object`

The API for managing toasts.
Use this API to add and remove toasts.

**Kind**: global typedef

- [API](#API) : `Object`
  - [.removeToast(id)](#API.removeToast)
  - [.addToast(toastProps)](#API.addToast) ⇒ `Number`

<a name="API.removeToast" id="API.removeToast"></a>

### API.removeToast(id)

Removes a toast from the toast store.

**Kind**: static method of [`API`](#API)

| Param | Type     | Description                   |
| ----- | -------- | ----------------------------- |
| id    | `Number` | The id of the toast to remove |

<a name="API.addToast" id="API.addToast"></a>

### API.addToast(toastProps) ⇒ `Number`

Dispatches an add action. Includes all props passed along with a hash id
and a timeout id generated based on the incoming props.

**Kind**: static method of [`API`](#API)  
**Returns**: `Number` - id The key referencing the toast in the store

| Param      | Type                        | Description                                     |
| ---------- | --------------------------- | ----------------------------------------------- |
| toastProps | [`ToastProps`](#ToastProps) | The object containing props for adding a toast. |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/Toasts/useToasts.js).
