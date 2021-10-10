##Constants

<dl>
<dt><a href="#useWindowSize">useWindowSize</a> : <inlineCode>number</inlineCode></dt>
<dd>

The current context value for the window size context.
This value updates whenever the window is resized.

Use this inside a [WindowSizeContextProvider](#WindowSizeContextProvider).

</dd>
</dl>

##Functions

<dl>
<dt><a href="#WindowSizeContextProvider">WindowSizeContextProvider(props)</a> ⇒ <inlineCode>Context.Provider</inlineCode></dt>
<dd>

This component contains a hook that listens for resize events.
Use this component with [useWindowSize](#useWindowSize) to get the value of the resized window.

It is recommended to only create/use a single time at the top level of your app

</dd>
</dl>


The current context value for the window size context.
This value updates whenever the window is resized.

Use this inside a [WindowSizeContextProvider](#WindowSizeContextProvider).

*global* *constant*

This component contains a hook that listens for resize events.
Use this component with [useWindowSize](#useWindowSize) to get the value of the resized window.

It is recommended to only create/use a single time at the top level of your app

*global* *function*
**Summary**: A React context provider.  
`Context.Provider` — A [React context provider](https://reactjs.org/docs/context.html)


[pwa-studio/packages/peregrine/lib/hooks/useWindowSize.js](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/hooks/useWindowSize.js)