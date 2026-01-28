
An ECMAScript module that can be changed by a third party.

This class presents a convenient API for consumers to add common transforms to ES
Modules in a semantic way.

* [TargetableESModule](#TargetableESModule)
    * [.addImport(statement)](#TargetableESModule+addImport) ⇒ `SingleImportStatement`
    * [.uniqueIdentifier(binding)](#TargetableESModule+uniqueIdentifier) ⇒ `string`
    * [.wrapWithFile([exportName], wrapperModule)](#TargetableESModule+wrapWithFile) ⇒ `this`

Adds a static import statement to the module source code, thus importing
a new dependency.

This method automatically deduplicates attempts to add imports that would override
earlier import bindings.
If a collision is detected, it renames the binding before inserting it.

**Returns:**
`SingleImportStatement`
   — An instance of the `SingleImportStatement` class.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| statement | `string` \| `SingleImportStatement` | A string representing the import statement, or a SingleImportStatement representing it. |

Generates a unique identifier for a given binding. Not guaranteed safe,
but good enough in a pinch.

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| binding | `string` | The binding to change. |

Pass exports of this module through a wrapper module.

**Chainable**  
**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| [exportName] | `string` | Name of export to wrap. If not provided, will wrap the default export. |
| wrapperModule | `string` | Package-absolute import path to the wrapper module. |

**Source Code**: [pwa-studio/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableESModule.js](https://github.com/magento/pwa-studio/tree/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableESModule.js)
