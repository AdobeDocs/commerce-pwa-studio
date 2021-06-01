<a name="TargetableESModule" id="TargetableESModule"></a>

## TargetableESModule

An ECMAScript module that can be changed by a third party.

This class presents a convenient API for consumers to add common transforms to ES
Modules in a semantic way.

**Kind**: global class

- [TargetableESModule](#TargetableESModule)
  - [.addImport(statement)](#TargetableESModule+addImport) ⇒ `SingleImportStatement`
  - [.uniqueIdentifier(binding)](#TargetableESModule+uniqueIdentifier) ⇒ `string`
  - [.wrapWithFile([exportName], wrapperModule)](#TargetableESModule+wrapWithFile) ⇒ `this`

<a name="TargetableESModule+addImport" id="TargetableESModule+addImport"></a>

### targetableESModule.addImport(statement) ⇒ `SingleImportStatement`

Adds a static import statement to the module source code, thus importing
a new dependency.

This method automatically deduplicates attempts to add imports that would override
earlier import bindings.
If a collision is detected, it renames the binding before inserting it.

**Kind**: instance method of [`TargetableESModule`](#TargetableESModule)  
**Returns**: `SingleImportStatement` - An instance of the `SingleImportStatement` class.

| Param     | Type                                | Description                                                                             |
| --------- | ----------------------------------- | --------------------------------------------------------------------------------------- |
| statement | `string` \| `SingleImportStatement` | A string representing the import statement, or a SingleImportStatement representing it. |

<a name="TargetableESModule+uniqueIdentifier" id="TargetableESModule+uniqueIdentifier"></a>

### targetableESModule.uniqueIdentifier(binding) ⇒ `string`

Generates a unique identifier for a given binding. Not guaranteed safe,
but good enough in a pinch.

**Kind**: instance method of [`TargetableESModule`](#TargetableESModule)

| Param   | Type     | Description            |
| ------- | -------- | ---------------------- |
| binding | `string` | The binding to change. |

<a name="TargetableESModule+wrapWithFile" id="TargetableESModule+wrapWithFile"></a>

### targetableESModule.wrapWithFile([exportName], wrapperModule) ⇒ `this`

Pass exports of this module through a wrapper module.

**Kind**: instance method of [`TargetableESModule`](#TargetableESModule)  
**Chainable**

| Param         | Type     | Description                                                            |
| ------------- | -------- | ---------------------------------------------------------------------- |
| [exportName]  | `string` | Name of export to wrap. If not provided, will wrap the default export. |
| wrapperModule | `string` | Package-absolute import path to the wrapper module.                    |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableESModule.js).
