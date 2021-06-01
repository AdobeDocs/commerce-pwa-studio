<a name="TargetableESModuleArray" id="TargetableESModuleArray"></a>

## TargetableESModuleArray

Builds a simple ES module that imports a list of other modules you provide,
and then re-exports those modules in order as an array.
Useful for building extensible navigation lists, routes, strategies, etc.

This class uses [export-esm-collection-loader](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/loaders/export-esm-collection-loader.js) to build the source code.

**Kind**: global class

- [TargetableESModuleArray](#TargetableESModuleArray)
  - [.addImport(importString)](#TargetableESModuleArray+addImport) ⇒ `undefined`
  - [.add(...items)](#TargetableESModuleArray+add) ⇒ `undefined`
  - [.push(...importString)](#TargetableESModuleArray+push) ⇒ `undefined`
  - [.unshift(...importString)](#TargetableESModuleArray+unshift) ⇒ `undefined`

<a name="TargetableESModuleArray+addImport" id="TargetableESModuleArray+addImport"></a>

### targetableESModuleArray.addImport(importString) ⇒ `undefined`

Adds a module to the end of the array.

This also acts as an alias for the `push()` function.

**Kind**: instance method of [`TargetableESModuleArray`](#TargetableESModuleArray)

| Param        | Type     | Description                              |
| ------------ | -------- | ---------------------------------------- |
| importString | `string` | A static import declaration for a module |

<a name="TargetableESModuleArray+add" id="TargetableESModuleArray+add"></a>

### targetableESModuleArray.add(...items) ⇒ `undefined`

Add a module or modules to the end of the array.

This also acts as an alias for the `push()` function.

**Kind**: instance method of [`TargetableESModuleArray`](#TargetableESModuleArray)

| Param    | Type  | Description                  |
| -------- | ----- | ---------------------------- |
| ...items | `any` | Static import declaration(s) |

<a name="TargetableESModuleArray+push" id="TargetableESModuleArray+push"></a>

### targetableESModuleArray.push(...importString) ⇒ `undefined`

Add a module or modules to the end of the array.

**Kind**: instance method of [`TargetableESModuleArray`](#TargetableESModuleArray)

| Param           | Type     | Description                  |
| --------------- | -------- | ---------------------------- |
| ...importString | `string` | Static import declaration(s) |

<a name="TargetableESModuleArray+unshift" id="TargetableESModuleArray+unshift"></a>

### targetableESModuleArray.unshift(...importString) ⇒ `undefined`

Add a module or modules to the _beginning_ of the array.

**Kind**: instance method of [`TargetableESModuleArray`](#TargetableESModuleArray)

| Param           | Type     | Description                  |
| --------------- | -------- | ---------------------------- |
| ...importString | `string` | Static import declaration(s) |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableESModuleArray.js).
