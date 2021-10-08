## Constants

<dl>
<dt><a href="#useWindowSize">useWindowSize</a> : <code>number</code></dt>
<dd><p>The current context value for the window size context.
This value updates whenever the window is resized.</p>
<p>Use this inside a <a href="#WindowSizeContextProvider">WindowSizeContextProvider</a>.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#WindowSizeContextProvider">WindowSizeContextProvider(props)</a> ⇒ <code>Context.Provider</code></dt>
<dd><p>This component contains a hook that listens for resize events.
Use this component with <a href="#useWindowSize">useWindowSize</a> to get the value of the resized window.</p>
<p>It is recommended to only create/use a single time at the top level of your app</p>
</dd>
</dl>

<a name="useWindowSize"></a>

## useWindowSize : <code>number</code>
The current context value for the window size context.
This value updates whenever the window is resized.

Use this inside a [WindowSizeContextProvider](#WindowSizeContextProvider).

**Kind**: global constant  
<a name="WindowSizeContextProvider"></a>

## WindowSizeContextProvider(props) ⇒ <code>Context.Provider</code>
This component contains a hook that listens for resize events.
Use this component with [useWindowSize](#useWindowSize) to get the value of the resized window.

It is recommended to only create/use a single time at the top level of your app

**Kind**: global function  
**Summary**: A React context provider.  
**Returns**: <code>Context.Provider</code> - A [React context provider](https://reactjs.org/docs/context.html)  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> | React component props |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/hooks/useWindowSize.js).