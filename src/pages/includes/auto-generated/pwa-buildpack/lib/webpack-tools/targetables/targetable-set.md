## Classes

TargetableSet

A factory and manager for Targetable instances.
This class wraps around a TargetProvider, which identifies it as "your"
Targetable and enables automatic interception of targets.

## Typedefs

TargetablePublisher : `function`

Callback function which runs before committing this module's list of requested transforms to the build. Invoked as an intercept to `builtins.transformModules`, this is the typical time to invoke your own target with your custom API.

A factory and manager for Targetable instances.
This class wraps around a TargetProvider, which identifies it as "your"
Targetable and enables automatic interception of targets.

* TargetableSet
    * _instance_
        * .module(modulePath, [publisher]) ⇒ `TargetableModule`
        * .esModule(modulePath, [publisher]) ⇒ `TargetableESModule`
        * .esModuleArray(modulePath, [publisher]) ⇒ `TargetableESModuleArray`
        * .esModuleObject(modulePath, [publisher]) ⇒ `TargetableESModuleObject`
        * .reactComponent(modulePath, [publisher]) ⇒ `TargetableReactComponent`
        * .setSpecialFeatures(...Feature)
        * .defineEnvVars(sectionName, variables)
    * _static_
        * .using(targets) ⇒ `TargetableSet`

**Returns:**
`TargetableModule`
   — Returns an instance of TargetableModule.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| modulePath | `string` | Path to the module file this Targetable represents. |
| [publisher] | `TargetablePublisher` | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |

**Returns:**
`TargetableESModule`
   — Returns an instance of TargetableESModule.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| modulePath | `string` | Path to the module file this Targetable represents. |
| [publisher] | `TargetablePublisher` | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |

**Returns:**
`TargetableESModuleArray`
   — Returns an instance of TargetableESModuleArray.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| modulePath | `string` | Path to the module file this Targetable represents. |
| [publisher] | `TargetablePublisher` | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |

**Returns:**
`TargetableESModuleObject`
   — Returns an instance of TargetableESModuleObject.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| modulePath | `string` | Path to the module file this Targetable represents. |
| [publisher] | `TargetablePublisher` | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |

**Returns:**
`TargetableReactComponent`
   — Returns an instance of TargetableReactComponent

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| modulePath | `string` | Path to the module file this Targetable represents. |
| [publisher] | `TargetablePublisher` | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |

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
