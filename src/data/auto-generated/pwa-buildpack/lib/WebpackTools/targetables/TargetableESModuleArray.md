
Builds a simple ES module that imports a list of other modules you provide,
and then re-exports those modules in order as an array.
Useful for building extensible navigation lists, routes, strategies, etc.

This class uses [export-esm-collection-loader](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/loaders/export-esm-collection-loader.js) to build the source code.

*global* *class*

* [TargetableESModuleArray](#TargetableESModuleArray)
    * [.addImport(importString)](#TargetableESModuleArray+addImport) ⇒ `undefined`
    * [.add(...items)](#TargetableESModuleArray+add) ⇒ `undefined`
    * [.push(...importString)](#TargetableESModuleArray+push) ⇒ `undefined`
    * [.unshift(...importString)](#TargetableESModuleArray+unshift) ⇒ `undefined`


Adds a module to the end of the array.

This also acts as an alias for the `push()` function.

*instance* *method* of [`TargetableESModuleArray`](#TargetableESModuleArray)

Add a module or modules to the end of the array.

This also acts as an alias for the `push()` function.

*instance* *method* of [`TargetableESModuleArray`](#TargetableESModuleArray)

Add a module or modules to the end of the array.

*instance* *method* of [`TargetableESModuleArray`](#TargetableESModuleArray)

Add a module or modules to the _beginning_ of the array.

*instance* *method* of [`TargetableESModuleArray`](#TargetableESModuleArray)


[pwa-studio/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableESModuleArray.js](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableESModuleArray.js)