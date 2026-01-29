
## Constants

useWindowSize : `number`

The current context value for the window size context.
This value updates whenever the window is resized.

Use this inside a WindowSizeContextProvider.

## Functions

[WindowSizeContextProvider(props)] ⇒ `Context.Provider`

This component contains a hook that listens for resize events.
Use this component with useWindowSize to get the value of the resized window.

It is recommended to only create/use a single time at the top level of your app

The current context value for the window size context.
This value updates whenever the window is resized.

Use this inside a WindowSizeContextProvider.

This component contains a hook that listens for resize events.
Use this component with useWindowSize to get the value of the resized window.

It is recommended to only create/use a single time at the top level of your app

**Summary**: A React context provider.  
**Returns:**
`Context.Provider`
   — A [React context provider](https://legacy.reactjs.org/docs/context.html)

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | `Object` | React component props |

**Source Code**: [pwa-studio/packages/peregrine/lib/hooks/useWindowSize.js](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/hooks/useWindowSize.js)
