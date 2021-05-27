<a name="TargetableESModuleObject" id="TargetableESModuleObject"></a>

## TargetableESModuleObject

Builds a simple ES module that imports a list of other modules you provide,
and then re-exports those modules as an object with properties matching the
imported bindings.
Useful for building named lists and associative arrays when making extension points.

Uses [export-esm-collection-loader](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/loaders/export-esm-collection-loader.js) to build source code.

**Kind**: global class  

* [TargetableESModuleObject](#TargetableESModuleObject)
    * [.addImport(importString)](#TargetableESModuleObject+addImport) ⇒ `this`
    * [.add(...args)](#TargetableESModuleObject+add) ⇒ `this`

<a name="TargetableESModuleObject+addImport" id="TargetableESModuleObject+addImport"></a>

### targetableESModuleObject.addImport(importString) ⇒ `this`

Adds a module to the object using the `addImport()` method from TargetableESModule.
Since, all imports must be exported, this method performs additional validation.

**Kind**: instance method of [`TargetableESModuleObject`](#TargetableESModuleObject)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| importString | `string` | A static import declaration |

<a name="TargetableESModuleObject+add" id="TargetableESModuleObject+add"></a>

### targetableESModuleObject.add(...args) ⇒ `this`

Adds a module or modules to the object using the `addImport()` function.

**Kind**: instance method of [`TargetableESModuleObject`](#TargetableESModuleObject)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| ...args | `string` | Static import declaration(s) |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableESModuleObject.js).