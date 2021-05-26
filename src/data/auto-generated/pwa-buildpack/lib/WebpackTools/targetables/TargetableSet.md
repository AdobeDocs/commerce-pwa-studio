## Classes

<dl>
<dt><a href="#TargetableSet">TargetableSet</a></dt>
<dd>

A factory and manager for Targetable instances.
This class wraps around a TargetProvider, which identifies it as "your"
Targetable and enables automatic interception of targets.

</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#TargetablePublisher">TargetablePublisher</a> : <inlineCode>function</inlineCode></dt>
<dd>

Callback function which runs before committing this module's list of requested transforms to the build. Invoked as an intercept to `builtins.transformModules`, this is the typical time to invoke your own target with your custom API.

</dd>
</dl>

<a name="TargetableSet" id="TargetableSet"></a>

## TargetableSet

A factory and manager for Targetable instances.
This class wraps around a TargetProvider, which identifies it as "your"
Targetable and enables automatic interception of targets.

**Kind**: global class  

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

<a name="TargetableSet+module" id="TargetableSet+module"></a>

### targetableSet.module(modulePath, [publisher]) ⇒ `TargetableModule`

**Kind**: instance method of [`TargetableSet`](#TargetableSet)  
**Returns**: `TargetableModule` - Returns an instance of [TargetableModule][]  

| Param | Type | Description |
| --- | --- | --- |
| modulePath | `string` | Path to the module file this Targetable represents. |
| [publisher] | [`TargetablePublisher`](#TargetablePublisher) | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |

<a name="TargetableSet+esModule" id="TargetableSet+esModule"></a>

### targetableSet.esModule(modulePath, [publisher]) ⇒ `TargetableESModule`

**Kind**: instance method of [`TargetableSet`](#TargetableSet)  
**Returns**: `TargetableESModule` - Returns an instance of [TargetableESModule][]  

| Param | Type | Description |
| --- | --- | --- |
| modulePath | `string` | Path to the module file this Targetable represents. |
| [publisher] | [`TargetablePublisher`](#TargetablePublisher) | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |

<a name="TargetableSet+esModuleArray" id="TargetableSet+esModuleArray"></a>

### targetableSet.esModuleArray(modulePath, [publisher]) ⇒ `TargetableESModuleArray`

**Kind**: instance method of [`TargetableSet`](#TargetableSet)  
**Returns**: `TargetableESModuleArray` - Returns an instance of [TargetableESModuleArray][]  

| Param | Type | Description |
| --- | --- | --- |
| modulePath | `string` | Path to the module file this Targetable represents. |
| [publisher] | [`TargetablePublisher`](#TargetablePublisher) | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |

<a name="TargetableSet+esModuleObject" id="TargetableSet+esModuleObject"></a>

### targetableSet.esModuleObject(modulePath, [publisher]) ⇒ `TargetableESModuleObject`

**Kind**: instance method of [`TargetableSet`](#TargetableSet)  
**Returns**: `TargetableESModuleObject` - Returns an instance of [TargetableESModuleObject][]  

| Param | Type | Description |
| --- | --- | --- |
| modulePath | `string` | Path to the module file this Targetable represents. |
| [publisher] | [`TargetablePublisher`](#TargetablePublisher) | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |

<a name="TargetableSet+reactComponent" id="TargetableSet+reactComponent"></a>

### targetableSet.reactComponent(modulePath, [publisher]) ⇒ `TargetableReactComponent`

**Kind**: instance method of [`TargetableSet`](#TargetableSet)  
**Returns**: `TargetableReactComponent` - Returns an instance of [TargetableReactComponent][]  

| Param | Type | Description |
| --- | --- | --- |
| modulePath | `string` | Path to the module file this Targetable represents. |
| [publisher] | [`TargetablePublisher`](#TargetablePublisher) | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |

<a name="TargetableSet+setSpecialFeatures" id="TargetableSet+setSpecialFeatures"></a>

### targetableSet.setSpecialFeatures(...Feature)

Taps the builtin `specialFeatures` target and sets the supplied feature flags.

**Kind**: instance method of [`TargetableSet`](#TargetableSet)  

| Param | Type | Description |
| --- | --- | --- |
| ...Feature | `string` \| `Array.<string>` \| `object.<string, boolean>` | flags to set, as either string arguments, an array of string arguments, or an object of flags. |

<a name="TargetableSet+defineEnvVars" id="TargetableSet+defineEnvVars"></a>

### targetableSet.defineEnvVars(sectionName, variables)

Tap the builtin `envVarDefinitions` target to define new environment variables.

**Kind**: instance method of [`TargetableSet`](#TargetableSet)  

| Param | Type | Description |
| --- | --- | --- |
| sectionName | `string` | Human-readable name of section. If a section with this name exists already, variables will be added to it instead o a new section being created. |
| variables | `Array.<EnvVarDefinition>` | List of variables to add. |

<a name="TargetableSet.using" id="TargetableSet.using"></a>

### TargetableSet.using(targets) ⇒ [`TargetableSet`](#TargetableSet)

Creates a new TargetableSet bound to a TargetProvider

**Kind**: static method of [`TargetableSet`](#TargetableSet)  

| Param | Type | Description |
| --- | --- | --- |
| targets | `TargetProvider` | TargetProvider for the curent dependency. This is the object passed by BuildBus to an intercept function. |

<a name="TargetablePublisher" id="TargetablePublisher"></a>

## TargetablePublisher : `function`

Callback function which runs before committing this module's list of requested transforms to the build. Invoked as an intercept to `builtins.transformModules`, this is the typical time to invoke your own target with your custom API.

**Kind**: global typedef  
**this**: `{TargetableModule}`  

| Param | Type | Description |
| --- | --- | --- |
| self | `TargetableModule` | The TargetableModule instance (for use if `this` is not available) |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableSet.js).