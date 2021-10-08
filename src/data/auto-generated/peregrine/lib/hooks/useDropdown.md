## Functions

<dl>
<dt><a href="#useDropdown">useDropdown()</a> ⇒ <code><a href="#Dropdown">Dropdown</a></code></dt>
<dd><p>A React Hook for adding dropdown-related logic.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Dropdown">Dropdown</a> : <code>Object</code></dt>
<dd><p>The object returned contains the pieces needed to add the dropdown logic to your components</p>
</dd>
</dl>

<a name="useDropdown"></a>

## useDropdown() ⇒ [<code>Dropdown</code>](#Dropdown)
A React Hook for adding dropdown-related logic.

**Kind**: global function  
**Returns**: [<code>Dropdown</code>](#Dropdown) - An object containing functions and values to add dropdown logic  
<a name="Dropdown"></a>

## Dropdown : <code>Object</code>
The object returned contains the pieces needed to add the dropdown logic to your components

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| elementRef | <code>Ref</code> | A [ref](https://reactjs.org/docs/refs-and-the-dom.html) object for attaching to React elements |
| expanded | <code>Boolean</code> | The value of the `expanded` state |
| setExpanded | <code>function</code> | [State Hook](https://reactjs.org/docs/hooks-state.html) function for setting the expanded state |
| triggerRef | <code>Ref</code> | A [ref](https://reactjs.org/docs/refs-and-the-dom.html) object for attaching to React elements |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/hooks/useDropdown.js).