<a name="TargetableESModule"></a>

## TargetableESModule
An ECMAScript module that can be changed by a third party.

This class presents a convenient API for consumers to add common transforms to ES
Modules in a semantic way.

**Kind**: global class  

* [TargetableESModule](#TargetableESModule)
    * [.addImport(statement)](#TargetableESModule+addImport) ⇒ <code>SingleImportStatement</code>
    * [.uniqueIdentifier(binding)](#TargetableESModule+uniqueIdentifier) ⇒ <code>string</code>
    * [.wrapWithFile([exportName], wrapperModule)](#TargetableESModule+wrapWithFile) ⇒ <code>this</code>

<a name="TargetableESModule+addImport"></a>

### targetableESModule.addImport(statement) ⇒ <code>SingleImportStatement</code>
Adds a static import statement to the module source code, thus importing
a new dependency.

This method automatically deduplicates attempts to add imports that would override
earlier import bindings.
If a collision is detected, it renames the binding before inserting it.

**Kind**: instance method of [<code>TargetableESModule</code>](#TargetableESModule)  
**Returns**: <code>SingleImportStatement</code> - An instance of the [`SingleImportStatement`] class.  

| Param | Type | Description |
| --- | --- | --- |
| statement | <code>string</code> \| <code>SingleImportStatement</code> | A string representing the import statement, or a SingleImportStatement representing it. |

<a name="TargetableESModule+uniqueIdentifier"></a>

### targetableESModule.uniqueIdentifier(binding) ⇒ <code>string</code>
Generates a unique identifier for a given binding. Not guaranteed safe,
but good enough in a pinch.

**Kind**: instance method of [<code>TargetableESModule</code>](#TargetableESModule)  

| Param | Type | Description |
| --- | --- | --- |
| binding | <code>string</code> | The binding to change. |

<a name="TargetableESModule+wrapWithFile"></a>

### targetableESModule.wrapWithFile([exportName], wrapperModule) ⇒ <code>this</code>
Pass exports of this module through a wrapper module.

**Kind**: instance method of [<code>TargetableESModule</code>](#TargetableESModule)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| [exportName] | <code>string</code> | Name of export to wrap. If not provided, will wrap the default export. |
| wrapperModule | <code>string</code> | Package-absolute import path to the wrapper module. |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableESModule.js).