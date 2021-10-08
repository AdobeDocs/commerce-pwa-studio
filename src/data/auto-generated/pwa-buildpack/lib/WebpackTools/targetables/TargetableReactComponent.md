<a name="TargetableReactComponent"></a>

## TargetableReactComponent
An ECMAScript module containing a React component with JSX to render it.

Presents a convenient API for consumers to add common transforms to React
components and the JSX in them, in a semantic way.

**Kind**: global class  

* [TargetableReactComponent](#TargetableReactComponent)
    * [.addJSXClassName(element, className, [options])](#TargetableReactComponent+addJSXClassName) ⇒ <code>this</code>
    * [.addReactLazyImport(modulePath, [localName])](#TargetableReactComponent+addReactLazyImport) ⇒ <code>string</code>
    * [.appendJSX(element, newChild, [options])](#TargetableReactComponent+appendJSX) ⇒ <code>this</code>
    * [.insertAfterJSX(element, newSibling, [options])](#TargetableReactComponent+insertAfterJSX) ⇒ <code>this</code>
    * [.insertBeforeJSX(element, newSibling, [options])](#TargetableReactComponent+insertBeforeJSX) ⇒ <code>this</code>
    * [.prependJSX(element, newChild, [options])](#TargetableReactComponent+prependJSX) ⇒ <code>this</code>
    * [.removeJSX(element, [options])](#TargetableReactComponent+removeJSX) ⇒ <code>this</code>
    * [.removeJSXProps(element, propNames, [options])](#TargetableReactComponent+removeJSXProps) ⇒ <code>this</code>
    * [.replaceJSX(jsx, replacement, [options])](#TargetableReactComponent+replaceJSX) ⇒ <code>this</code>
    * [.setJSXProps(element, props, [options])](#TargetableReactComponent+setJSXProps) ⇒ <code>this</code>
    * [.surroundJSX(element, newParent, [options])](#TargetableReactComponent+surroundJSX) ⇒ <code>this</code>

<a name="TargetableReactComponent+addJSXClassName"></a>

### targetableReactComponent.addJSXClassName(element, className, [options]) ⇒ <code>this</code>
Add a CSS classname to a JSX element. Unlike setting the className prop,
this is non-destructive. It will append the classname to any existing
classnames, instead of replacing it.

**Kind**: instance method of [<code>TargetableReactComponent</code>](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>string</code> | Match an existing JSX component in the file |
| className | <code>string</code> | New classname to insert. This will be interpolated; to add a string literal classname, set this to '"classname"'. Passing 'classname' will add the value of a local variable `classname` in the file. If that identifier doesn't exist, it'll cause a ReferenceError. |
| [options] | <code>JSXModifierOptions</code> |  |

<a name="TargetableReactComponent+addReactLazyImport"></a>

### targetableReactComponent.addReactLazyImport(modulePath, [localName]) ⇒ <code>string</code>
Add a new named dynamic import of another React component, using the `lazy`
wrapper for use with React.Suspense.

**Kind**: instance method of [<code>TargetableReactComponent</code>](#TargetableReactComponent)  
**Returns**: <code>string</code> - Name of the local binding of the element, to be used in JSX operations.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| modulePath | <code>string</code> |  | Resolvable path to the module to import. |
| [localName] | <code>string</code> | <code>&quot;Component&quot;</code> | Optional human-readable name for debugging. |

<a name="TargetableReactComponent+appendJSX"></a>

### targetableReactComponent.appendJSX(element, newChild, [options]) ⇒ <code>this</code>
Append a JSX element to the children of `element`.

**Kind**: instance method of [<code>TargetableReactComponent</code>](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>string</code> | Match an existing JSX component in the file |
| newChild | <code>string</code> | New element to insert, as a string. |
| [options] | <code>JSXModifierOptions</code> |  |

<a name="TargetableReactComponent+insertAfterJSX"></a>

### targetableReactComponent.insertAfterJSX(element, newSibling, [options]) ⇒ <code>this</code>
Insert a JSX element _after_ `element`.

**Kind**: instance method of [<code>TargetableReactComponent</code>](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>string</code> | Match an existing JSX component in the file |
| newSibling | <code>string</code> | New element to insert, as a string. |
| [options] | <code>JSXModifierOptions</code> |  |

<a name="TargetableReactComponent+insertBeforeJSX"></a>

### targetableReactComponent.insertBeforeJSX(element, newSibling, [options]) ⇒ <code>this</code>
Insert a JSX element _before_ `element`.

**Kind**: instance method of [<code>TargetableReactComponent</code>](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>string</code> | Match an existing JSX component in the file |
| newSibling | <code>string</code> | New element to insert, as a string. |
| [options] | <code>JSXModifierOptions</code> |  |

<a name="TargetableReactComponent+prependJSX"></a>

### targetableReactComponent.prependJSX(element, newChild, [options]) ⇒ <code>this</code>
Prepend a JSX element to the children of `element`.

**Kind**: instance method of [<code>TargetableReactComponent</code>](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>string</code> | Match an existing JSX component in the file |
| newChild | <code>string</code> | New element to insert, as a string. |
| [options] | <code>JSXModifierOptions</code> |  |

<a name="TargetableReactComponent+removeJSX"></a>

### targetableReactComponent.removeJSX(element, [options]) ⇒ <code>this</code>
Remove the JSX node matched by 'element'.

**Kind**: instance method of [<code>TargetableReactComponent</code>](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>string</code> | Match an existing JSX component in the file and remove it |
| [options] | <code>JSXModifierOptions</code> |  |

<a name="TargetableReactComponent+removeJSXProps"></a>

### targetableReactComponent.removeJSXProps(element, propNames, [options]) ⇒ <code>this</code>
Remove JSX props from the element if they match one of the list of names.

**Kind**: instance method of [<code>TargetableReactComponent</code>](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>string</code> | Match an existing JSX component in the file. |
| propNames | <code>Array.&lt;string&gt;</code> | An array of names of props to remove. |
| [options] | <code>JSXModifierOptions</code> |  |

<a name="TargetableReactComponent+replaceJSX"></a>

### targetableReactComponent.replaceJSX(jsx, replacement, [options]) ⇒ <code>this</code>
Replace a JSX element with different code.

**Kind**: instance method of [<code>TargetableReactComponent</code>](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| jsx | <code>string</code> | A JSX element matching the one in the source code to modify. Use a JSX opening element or a self-closing element, like `<Route path="/">`. |
| replacement | <code>string</code> | Replacement code as a string. |
| [options] | <code>JSXModifierOptions</code> |  |

<a name="TargetableReactComponent+setJSXProps"></a>

### targetableReactComponent.setJSXProps(element, props, [options]) ⇒ <code>this</code>
Set JSX props on a JSX element.

**Kind**: instance method of [<code>TargetableReactComponent</code>](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>string</code> | Match an existing JSX component in the file. |
| props | <code>object</code> | A simple object representing the props. Keys should be prop names, and values should be raw strings representing the value in JSX text. |
| [options] | <code>JSXModifierOptions</code> |  |

**Example**  
```js
file.setJSXProps('Tab colorScheme="dark"', {
  colorScheme: '"light"',
  className: '{classes.tabs}'
})
```
<a name="TargetableReactComponent+surroundJSX"></a>

### targetableReactComponent.surroundJSX(element, newParent, [options]) ⇒ <code>this</code>
Wrap a JSX element in an outer element.

**Kind**: instance method of [<code>TargetableReactComponent</code>](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>string</code> | Match an existing JSX component in the file. |
| newParent | <code>string</code> | The wrapper element as a JSX string. It must be one and only one JSX element with no children; the matching element will be the only child of the new wrapper. |
| [options] | <code>JSXModifierOptions</code> |  |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableReactComponent.js).