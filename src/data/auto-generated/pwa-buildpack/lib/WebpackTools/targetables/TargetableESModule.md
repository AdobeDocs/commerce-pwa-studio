
An ECMAScript module that can be changed by a third party.

This class presents a convenient API for consumers to add common transforms to ES
Modules in a semantic way.

*global* *class*

* [TargetableESModule](#TargetableESModule)
    * [.addImport(statement)](#TargetableESModule+addImport) ⇒ `SingleImportStatement`
    * [.uniqueIdentifier(binding)](#TargetableESModule+uniqueIdentifier) ⇒ `string`
    * [.wrapWithFile([exportName], wrapperModule)](#TargetableESModule+wrapWithFile) ⇒ `this`


Adds a static import statement to the module source code, thus importing
a new dependency.

This method automatically deduplicates attempts to add imports that would override
earlier import bindings.
If a collision is detected, it renames the binding before inserting it.

*instance* *method* of [`TargetableESModule`](#TargetableESModule)
`SingleImportStatement` — An instance of the `SingleImportStatement` class.

Generates a unique identifier for a given binding. Not guaranteed safe,
but good enough in a pinch.

*instance* *method* of [`TargetableESModule`](#TargetableESModule)

Pass exports of this module through a wrapper module.

*instance* *method* of [`TargetableESModule`](#TargetableESModule)
**Chainable**  


[pwa-studio/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableESModule.js](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableESModule.js)