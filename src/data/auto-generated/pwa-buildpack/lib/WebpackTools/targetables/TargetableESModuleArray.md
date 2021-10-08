<a name="TargetableESModuleArray"></a>

## TargetableESModuleArray
Builds a simple ES module that imports a list of other modules you provide,
and then re-exports those modules in order as an array.
Useful for building extensible navigation lists, routes, strategies, etc.

This class uses [export-esm-collection-loader][] to build the source code.

**Kind**: global class  

* [TargetableESModuleArray](#TargetableESModuleArray)
    * [.addImport(importString)](#TargetableESModuleArray+addImport) ⇒ <code>undefined</code>
    * [.add(...items)](#TargetableESModuleArray+add) ⇒ <code>undefined</code>
    * [.push(...importString)](#TargetableESModuleArray+push) ⇒ <code>undefined</code>
    * [.unshift(...importString)](#TargetableESModuleArray+unshift) ⇒ <code>undefined</code>

<a name="TargetableESModuleArray+addImport"></a>

### targetableESModuleArray.addImport(importString) ⇒ <code>undefined</code>
Adds a module to the end of the array.

This also acts as an alias for the `push()` function.

**Kind**: instance method of [<code>TargetableESModuleArray</code>](#TargetableESModuleArray)  

| Param | Type | Description |
| --- | --- | --- |
| importString | <code>string</code> | A static import declaration for a module |

<a name="TargetableESModuleArray+add"></a>

### targetableESModuleArray.add(...items) ⇒ <code>undefined</code>
Add a module or modules to the end of the array.

This also acts as an alias for the `push()` function.

**Kind**: instance method of [<code>TargetableESModuleArray</code>](#TargetableESModuleArray)  

| Param | Type | Description |
| --- | --- | --- |
| ...items | <code>any</code> | Static import declaration(s) |

<a name="TargetableESModuleArray+push"></a>

### targetableESModuleArray.push(...importString) ⇒ <code>undefined</code>
Add a module or modules to the end of the array.

**Kind**: instance method of [<code>TargetableESModuleArray</code>](#TargetableESModuleArray)  

| Param | Type | Description |
| --- | --- | --- |
| ...importString | <code>string</code> | Static import declaration(s) |

<a name="TargetableESModuleArray+unshift"></a>

### targetableESModuleArray.unshift(...importString) ⇒ <code>undefined</code>
Add a module or modules to the _beginning_ of the array.

**Kind**: instance method of [<code>TargetableESModuleArray</code>](#TargetableESModuleArray)  

| Param | Type | Description |
| --- | --- | --- |
| ...importString | <code>string</code> | Static import declaration(s) |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableESModuleArray.js).