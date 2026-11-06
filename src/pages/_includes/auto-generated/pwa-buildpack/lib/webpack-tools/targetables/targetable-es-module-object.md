
Builds a simple ES module that imports a list of other modules you provide,
and then re-exports those modules as an object with properties matching the
imported bindings.
Useful for building named lists and associative arrays when making extension points.

Uses [export-esm-collection-loader](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/loaders/export-esm-collection-loader.js) to build source code.

* TargetableESModuleObject
    * .addImport(importString) ⇒ `this`
    * .add(...args) ⇒ `this`

Adds a module to the object using the `addImport()` method from TargetableESModule.
Since, all imports must be exported, this method performs additional validation.

**Chainable**  
**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| importString | `string` | A static import declaration |

Adds a module or modules to the object using the `addImport()` function.

**Chainable**  
**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| ...args | `string` | Static import declaration(s) |

**Source Code**: [pwa-studio/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableESModuleObject.js](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableESModuleObject.js)
