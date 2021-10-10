
An ECMAScript module containing a React component with JSX to render it.

Presents a convenient API for consumers to add common transforms to React
components and the JSX in them, in a semantic way.

*global* *class*

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


Add a CSS classname to a JSX element. Unlike setting the className prop,
this is non-destructive. It will append the classname to any existing
classnames, instead of replacing it.

*instance* *method* of [`TargetableReactComponent`](#TargetableReactComponent)
**Chainable**  

Add a new named dynamic import of another React component, using the `lazy`
wrapper for use with React.Suspense.

*instance* *method* of [`TargetableReactComponent`](#TargetableReactComponent)
`string` — Name of the local binding of the element, to be used in JSX operations.

Append a JSX element to the children of `element`.

*instance* *method* of [`TargetableReactComponent`](#TargetableReactComponent)
**Chainable**  

Insert a JSX element _after_ `element`.

*instance* *method* of [`TargetableReactComponent`](#TargetableReactComponent)
**Chainable**  

Insert a JSX element _before_ `element`.

*instance* *method* of [`TargetableReactComponent`](#TargetableReactComponent)
**Chainable**  

Prepend a JSX element to the children of `element`.

*instance* *method* of [`TargetableReactComponent`](#TargetableReactComponent)
**Chainable**  

Remove the JSX node matched by 'element'.

*instance* *method* of [`TargetableReactComponent`](#TargetableReactComponent)
**Chainable**  

Remove JSX props from the element if they match one of the list of names.

*instance* *method* of [`TargetableReactComponent`](#TargetableReactComponent)
**Chainable**  

Replace a JSX element with different code.

*instance* *method* of [`TargetableReactComponent`](#TargetableReactComponent)
**Chainable**  

Set JSX props on a JSX element.

*instance* *method* of [`TargetableReactComponent`](#TargetableReactComponent)
**Chainable**  
**Example**  
```js
file.setJSXProps('Tab colorScheme="dark"', {
  colorScheme: '"light"',
  className: '{classes.tabs}'
})
```

Wrap a JSX element in an outer element.

*instance* *method* of [`TargetableReactComponent`](#TargetableReactComponent)
**Chainable**  


[pwa-studio/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableReactComponent.js](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableReactComponent.js)