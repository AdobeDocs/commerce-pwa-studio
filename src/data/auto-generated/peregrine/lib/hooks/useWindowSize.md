## Constants

<dl>
<dt><a href="#useWindowSize">useWindowSize</a> : <inlineCode>number</inlineCode></dt>
<dd>

The current context value for the window size context.
This value updates whenever the window is resized.

Use this inside a [WindowSizeContextProvider](#WindowSizeContextProvider).

</dd>
</dl>

## Functions

<dl>
<dt><a href="#WindowSizeContextProvider">WindowSizeContextProvider(props)</a> ⇒ <inlineCode>Context.Provider</inlineCode></dt>
<dd>

This component contains a hook that listens for resize events.
Use this component with [useWindowSize](#useWindowSize) to get the value of the resized window.

It is recommended to only create/use a single time at the top level of your app

</dd>
</dl>

<a name="useWindowSize" id="useWindowSize"></a>

## useWindowSize : `number`

The current context value for the window size context.
This value updates whenever the window is resized.

Use this inside a [WindowSizeContextProvider](#WindowSizeContextProvider).

**Kind**: global constant  
<a name="WindowSizeContextProvider" id="WindowSizeContextProvider"></a>

## WindowSizeContextProvider(props) ⇒ `Context.Provider`

This component contains a hook that listens for resize events.
Use this component with [useWindowSize](#useWindowSize) to get the value of the resized window.

It is recommended to only create/use a single time at the top level of your app

**Kind**: global function  
**Summary**: A React context provider.  
**Returns**: `Context.Provider` - A [React context provider](https://reactjs.org/docs/context.html)  

| Param | Type | Description |
| --- | --- | --- |
| props | `Object` | React component props |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/hooks/useWindowSize.js).