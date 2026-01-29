
Builds a simple ES module that imports a list of other modules you provide,
and then re-exports those modules in order as an array.
Useful for building extensible navigation lists, routes, strategies, etc.

This class uses [export-esm-collection-loader](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/loaders/export-esm-collection-loader.js) to build the source code.

* TargetableESModuleArray
    * .addImport(importString) ⇒ `undefined`
    * .add(...items) ⇒ `undefined`
    * .push(...importString) ⇒ `undefined`
    * .unshift(...importString) ⇒ `undefined`

Adds a module to the end of the array.

This also acts as an alias for the `push()` function.

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| importString | `string` | A static import declaration for a module |

Add a module or modules to the end of the array.

This also acts as an alias for the `push()` function.

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| ...items | `any` | Static import declaration(s) |

Add a module or modules to the end of the array.

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| ...importString | `string` | Static import declaration(s) |

Add a module or modules to the _beginning_ of the array.

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| ...importString | `string` | Static import declaration(s) |

**Source Code**: [pwa-studio/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableESModuleArray.js](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableESModuleArray.js)
