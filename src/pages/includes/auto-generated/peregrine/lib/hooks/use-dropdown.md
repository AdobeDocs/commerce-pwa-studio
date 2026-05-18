
Functions

<dl>
<dt><a href="#useDropdown">useDropdown()</a> ⇒ <inlineCode><a href="#Dropdown">Dropdown</a></inlineCode></dt>
<dd>

A React Hook for adding dropdown-related logic.

</dd>
</dl>


Typedefs

<dl>
<dt><a href="#Dropdown">Dropdown</a> : <inlineCode>Object</inlineCode></dt>
<dd>

The object returned contains the pieces needed to add the dropdown logic to your components

</dd>
</dl>


A React Hook for adding dropdown-related logic.

**Returns: **
[`Dropdown`](#Dropdown)
   — An object containing functions and values to add dropdown logic


The object returned contains the pieces needed to add the dropdown logic to your components

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| elementRef | `Ref` | A [ref](https://reactjs.org/docs/refs-and-the-dom.html) object for attaching to React elements |
| expanded | `Boolean` | The value of the `expanded` state |
| setExpanded | `function` | [State Hook](https://reactjs.org/docs/hooks-state.html) function for setting the expanded state |
| triggerRef | `Ref` | A [ref](https://reactjs.org/docs/refs-and-the-dom.html) object for attaching to React elements |



**Source Code**: [pwa-studio/packages/peregrine/lib/hooks/useDropdown.js](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/hooks/useDropdown.js)