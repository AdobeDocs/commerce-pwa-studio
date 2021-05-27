<a name="TargetableReactComponent" id="TargetableReactComponent"></a>

## TargetableReactComponent

An ECMAScript module containing a React component with JSX to render it.

Presents a convenient API for consumers to add common transforms to React
components and the JSX in them, in a semantic way.

**Kind**: global class  

* [TargetableReactComponent](#TargetableReactComponent)
    * [.addJSXClassName(element, className, [options])](#TargetableReactComponent+addJSXClassName) ⇒ `this`
    * [.addReactLazyImport(modulePath, [localName])](#TargetableReactComponent+addReactLazyImport) ⇒ `string`
    * [.appendJSX(element, newChild, [options])](#TargetableReactComponent+appendJSX) ⇒ `this`
    * [.insertAfterJSX(element, newSibling, [options])](#TargetableReactComponent+insertAfterJSX) ⇒ `this`
    * [.insertBeforeJSX(element, newSibling, [options])](#TargetableReactComponent+insertBeforeJSX) ⇒ `this`
    * [.prependJSX(element, newChild, [options])](#TargetableReactComponent+prependJSX) ⇒ `this`
    * [.removeJSX(element, [options])](#TargetableReactComponent+removeJSX) ⇒ `this`
    * [.removeJSXProps(element, propNames, [options])](#TargetableReactComponent+removeJSXProps) ⇒ `this`
    * [.replaceJSX(jsx, replacement, [options])](#TargetableReactComponent+replaceJSX) ⇒ `this`
    * [.setJSXProps(element, props, [options])](#TargetableReactComponent+setJSXProps) ⇒ `this`
    * [.surroundJSX(element, newParent, [options])](#TargetableReactComponent+surroundJSX) ⇒ `this`

<a name="TargetableReactComponent+addJSXClassName" id="TargetableReactComponent+addJSXClassName"></a>

### targetableReactComponent.addJSXClassName(element, className, [options]) ⇒ `this`

Add a CSS classname to a JSX element. Unlike setting the className prop,
this is non-destructive. It will append the classname to any existing
classnames, instead of replacing it.

**Kind**: instance method of [`TargetableReactComponent`](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | `string` | Match an existing JSX component in the file |
| className | `string` | New classname to insert. This will be interpolated; to add a string literal classname, set this to '"classname"'. Passing 'classname' will add the value of a local variable `classname` in the file. If that identifier doesn't exist, it'll cause a ReferenceError. |
| [options] | `JSXModifierOptions` |  |

<a name="TargetableReactComponent+addReactLazyImport" id="TargetableReactComponent+addReactLazyImport"></a>

### targetableReactComponent.addReactLazyImport(modulePath, [localName]) ⇒ `string`

Add a new named dynamic import of another React component, using the `lazy`
wrapper for use with React.Suspense.

**Kind**: instance method of [`TargetableReactComponent`](#TargetableReactComponent)  
**Returns**: `string` - Name of the local binding of the element, to be used in JSX operations.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| modulePath | `string` |  | Resolvable path to the module to import. |
| [localName] | `string` | `&quot;Component&quot;` | Optional human-readable name for debugging. |

<a name="TargetableReactComponent+appendJSX" id="TargetableReactComponent+appendJSX"></a>

### targetableReactComponent.appendJSX(element, newChild, [options]) ⇒ `this`

Append a JSX element to the children of `element`.

**Kind**: instance method of [`TargetableReactComponent`](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | `string` | Match an existing JSX component in the file |
| newChild | `string` | New element to insert, as a string. |
| [options] | `JSXModifierOptions` |  |

<a name="TargetableReactComponent+insertAfterJSX" id="TargetableReactComponent+insertAfterJSX"></a>

### targetableReactComponent.insertAfterJSX(element, newSibling, [options]) ⇒ `this`

Insert a JSX element _after_ `element`.

**Kind**: instance method of [`TargetableReactComponent`](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | `string` | Match an existing JSX component in the file |
| newSibling | `string` | New element to insert, as a string. |
| [options] | `JSXModifierOptions` |  |

<a name="TargetableReactComponent+insertBeforeJSX" id="TargetableReactComponent+insertBeforeJSX"></a>

### targetableReactComponent.insertBeforeJSX(element, newSibling, [options]) ⇒ `this`

Insert a JSX element _before_ `element`.

**Kind**: instance method of [`TargetableReactComponent`](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | `string` | Match an existing JSX component in the file |
| newSibling | `string` | New element to insert, as a string. |
| [options] | `JSXModifierOptions` |  |

<a name="TargetableReactComponent+prependJSX" id="TargetableReactComponent+prependJSX"></a>

### targetableReactComponent.prependJSX(element, newChild, [options]) ⇒ `this`

Prepend a JSX element to the children of `element`.

**Kind**: instance method of [`TargetableReactComponent`](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | `string` | Match an existing JSX component in the file |
| newChild | `string` | New element to insert, as a string. |
| [options] | `JSXModifierOptions` |  |

<a name="TargetableReactComponent+removeJSX" id="TargetableReactComponent+removeJSX"></a>

### targetableReactComponent.removeJSX(element, [options]) ⇒ `this`

Remove the JSX node matched by 'element'.

**Kind**: instance method of [`TargetableReactComponent`](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | `string` | Match an existing JSX component in the file and remove it |
| [options] | `JSXModifierOptions` |  |

<a name="TargetableReactComponent+removeJSXProps" id="TargetableReactComponent+removeJSXProps"></a>

### targetableReactComponent.removeJSXProps(element, propNames, [options]) ⇒ `this`

Remove JSX props from the element if they match one of the list of names.

**Kind**: instance method of [`TargetableReactComponent`](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | `string` | Match an existing JSX component in the file. |
| propNames | `Array.<string>` | An array of names of props to remove. |
| [options] | `JSXModifierOptions` |  |

<a name="TargetableReactComponent+replaceJSX" id="TargetableReactComponent+replaceJSX"></a>

### targetableReactComponent.replaceJSX(jsx, replacement, [options]) ⇒ `this`

Replace a JSX element with different code.

**Kind**: instance method of [`TargetableReactComponent`](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| jsx | `string` | A JSX element matching the one in the source code to modify. Use a JSX opening element or a self-closing element, like `<Route path="/">`. |
| replacement | `string` | Replacement code as a string. |
| [options] | `JSXModifierOptions` |  |

<a name="TargetableReactComponent+setJSXProps" id="TargetableReactComponent+setJSXProps"></a>

### targetableReactComponent.setJSXProps(element, props, [options]) ⇒ `this`

Set JSX props on a JSX element.

**Kind**: instance method of [`TargetableReactComponent`](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | `string` | Match an existing JSX component in the file. |
| props | `object` | A simple object representing the props. Keys should be prop names, and values should be raw strings representing the value in JSX text. |
| [options] | `JSXModifierOptions` |  |

**Example**  
```js
file.setJSXProps('Tab colorScheme="dark", {
  colorScheme: '"light"',
  className: '{classes.tabs}'
})
```
<a name="TargetableReactComponent+surroundJSX" id="TargetableReactComponent+surroundJSX"></a>

### targetableReactComponent.surroundJSX(element, newParent, [options]) ⇒ `this`

Wrap a JSX element in an outer element.

**Kind**: instance method of [`TargetableReactComponent`](#TargetableReactComponent)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| element | `string` | Match an existing JSX component in the file. |
| newParent | `string` | The wrapper element as a JSX string. It must be one and only one JSX element with no children; the matching element will be the only child of the new wrapper. |
| [options] | `JSXModifierOptions` |  |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableReactComponent.js).