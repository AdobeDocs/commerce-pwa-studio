
A [React Hook](https://reactjs.org/docs/hooks-intro.html) that gives
you the ability to add a callback function when an event is triggered on
an object.

This function attaches an event listener to a target object on mount
and removes the listener on unmount.

See [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| target | `EventTarget` | The [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) to attach the listener to |
| type | `String` | The type of [Event](https://developer.mozilla.org/en-US/docs/Web/Events) to listen for, e.g. 'resize', 'error', etc. |
| listener | `function` | A callback function that is invoked when the event is triggered |
| ...rest | `any` | Any other arguments to pass to the addEventListener() function |



**Source Code**: [pwa-studio/packages/peregrine/lib/hooks/useEventListener.js](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/hooks/useEventListener.js)