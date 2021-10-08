<a name="useEventListener"></a>

## useEventListener(target, type, listener, ...rest)
A [React Hook](https://reactjs.org/docs/hooks-intro.html) that gives
you the ability to add a callback function when an event is triggered on
an object.

This function attaches an event listener to a target object on mount
and removes the listener on unmount.

See [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>EventTarget</code> | The [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) to attach the listener to |
| type | <code>String</code> | The type of [Event](https://developer.mozilla.org/en-US/docs/Web/Events) to listen for, e.g. 'resize', 'error', etc. |
| listener | <code>function</code> | A callback function that is invoked when the event is triggered |
| ...rest | <code>any</code> | Any other arguments to pass to the addEventListener() function |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/hooks/useEventListener.js).