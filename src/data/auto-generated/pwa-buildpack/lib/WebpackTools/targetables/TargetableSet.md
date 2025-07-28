
Classes

<dl>
<dt><a href="#TargetableSet">TargetableSet</a></dt>
<dd>

A factory and manager for Targetable instances.
This class wraps around a TargetProvider, which identifies it as "your"
Targetable and enables automatic interception of targets.

</dd>
</dl>


Typedefs

<dl>
<dt><a href="#TargetablePublisher">TargetablePublisher</a> : <inlineCode>function</inlineCode></dt>
<dd>

Callback function which runs before committing this module's list of requested transforms to the build. Invoked as an intercept to `builtins.transformModules`, this is the typical time to invoke your own target with your custom API.

</dd>
</dl>


A factory and manager for Targetable instances.
This class wraps around a TargetProvider, which identifies it as "your"
Targetable and enables automatic interception of targets.


* [TargetableSet](#TargetableSet)
    * _instance_
        * [.module(modulePath, [publisher])](#TargetableSet+module) ⇒ `TargetableModule`
        * [.esModule(modulePath, [publisher])](#TargetableSet+esModule) ⇒ `TargetableESModule`
        * [.esModuleArray(modulePath, [publisher])](#TargetableSet+esModuleArray) ⇒ `TargetableESModuleArray`
        * [.esModuleObject(modulePath, [publisher])](#TargetableSet+esModuleObject) ⇒ `TargetableESModuleObject`
        * [.reactComponent(modulePath, [publisher])](#TargetableSet+reactComponent) ⇒ `TargetableReactComponent`
        * [.setSpecialFeatures(...Feature)](#TargetableSet+setSpecialFeatures)
        * [.defineEnvVars(sectionName, variables)](#TargetableSet+defineEnvVars)
    * _static_
        * [.using(targets)](#TargetableSet.using) ⇒ [`TargetableSet`](#TargetableSet)


**Returns: **
`TargetableModule`
   — Returns an instance of TargetableModule.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| modulePath | `string` | Path to the module file this Targetable represents. |
| [publisher] | [`TargetablePublisher`](#TargetablePublisher) | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |


**Returns: **
`TargetableESModule`
   — Returns an instance of TargetableESModule.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| modulePath | `string` | Path to the module file this Targetable represents. |
| [publisher] | [`TargetablePublisher`](#TargetablePublisher) | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |


**Returns: **
`TargetableESModuleArray`
   — Returns an instance of TargetableESModuleArray.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| modulePath | `string` | Path to the module file this Targetable represents. |
| [publisher] | [`TargetablePublisher`](#TargetablePublisher) | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |


**Returns: **
`TargetableESModuleObject`
   — Returns an instance of TargetableESModuleObject.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| modulePath | `string` | Path to the module file this Targetable represents. |
| [publisher] | [`TargetablePublisher`](#TargetablePublisher) | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |


**Returns: **
`TargetableReactComponent`
   — Returns an instance of TargetableReactComponent

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| modulePath | `string` | Path to the module file this Targetable represents. |
| [publisher] | [`TargetablePublisher`](#TargetablePublisher) | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |


Taps the builtin `specialFeatures` target and sets the supplied feature flags.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| ...Feature | `string` \| `Array.<string>` \| `object.<string, boolean>` | flags to set, as either string arguments, an array of string arguments, or an object of flags. |

Tap the builtin `envVarDefinitions` target to define new environment variables.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| sectionName | `string` | Human-readable name of section. If a section with this name exists already, variables will be added to it instead o a new section being created. |
| variables | `Array.<EnvVarDefinition>` | List of variables to add. |

Creates a new TargetableSet bound to a TargetProvider

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| targets | `TargetProvider` | TargetProvider for the curent dependency. This is the object passed by BuildBus to an intercept function. |

Callback function which runs before committing this module's list of requested transforms to the build. Invoked as an intercept to `builtins.transformModules`, this is the typical time to invoke your own target with your custom API.

**this**: `{TargetableModule}`  
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| self | `TargetableModule` | The TargetableModule instance (for use if `this` is not available) |

**Source Code**: [pwa-studio/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableSet.js](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableSet.js)
