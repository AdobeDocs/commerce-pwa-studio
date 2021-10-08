## Classes

<dl>
<dt><a href="#TargetableSet">TargetableSet</a></dt>
<dd><p>A factory and manager for Targetable instances.
This class wraps around a TargetProvider, which identifies it as &quot;your&quot;
Targetable and enables automatic interception of targets.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#TargetablePublisher">TargetablePublisher</a> : <code>function</code></dt>
<dd><p>Callback function which runs before committing this module&#39;s list of requested transforms to the build. Invoked as an intercept to <code>builtins.transformModules</code>, this is the typical time to invoke your own target with your custom API.</p>
</dd>
</dl>

<a name="TargetableSet"></a>

## TargetableSet
A factory and manager for Targetable instances.
This class wraps around a TargetProvider, which identifies it as "your"
Targetable and enables automatic interception of targets.

**Kind**: global class  

* [TargetableSet](#TargetableSet)
    * _instance_
        * [.module(modulePath, [publisher])](#TargetableSet+module) ⇒ <code>TargetableModule</code>
        * [.esModule(modulePath, [publisher])](#TargetableSet+esModule) ⇒ <code>TargetableESModule</code>
        * [.esModuleArray(modulePath, [publisher])](#TargetableSet+esModuleArray) ⇒ <code>TargetableESModuleArray</code>
        * [.esModuleObject(modulePath, [publisher])](#TargetableSet+esModuleObject) ⇒ <code>TargetableESModuleObject</code>
        * [.reactComponent(modulePath, [publisher])](#TargetableSet+reactComponent) ⇒ <code>TargetableReactComponent</code>
        * [.setSpecialFeatures(...Feature)](#TargetableSet+setSpecialFeatures)
        * [.defineEnvVars(sectionName, variables)](#TargetableSet+defineEnvVars)
    * _static_
        * [.using(targets)](#TargetableSet.using) ⇒ [<code>TargetableSet</code>](#TargetableSet)

<a name="TargetableSet+module"></a>

### targetableSet.module(modulePath, [publisher]) ⇒ <code>TargetableModule</code>
**Kind**: instance method of [<code>TargetableSet</code>](#TargetableSet)  
**Returns**: <code>TargetableModule</code> - Returns an instance of [TargetableModule][]  

| Param | Type | Description |
| --- | --- | --- |
| modulePath | <code>string</code> | Path to the module file this Targetable represents. |
| [publisher] | [<code>TargetablePublisher</code>](#TargetablePublisher) | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |

<a name="TargetableSet+esModule"></a>

### targetableSet.esModule(modulePath, [publisher]) ⇒ <code>TargetableESModule</code>
**Kind**: instance method of [<code>TargetableSet</code>](#TargetableSet)  
**Returns**: <code>TargetableESModule</code> - Returns an instance of [TargetableESModule][]  

| Param | Type | Description |
| --- | --- | --- |
| modulePath | <code>string</code> | Path to the module file this Targetable represents. |
| [publisher] | [<code>TargetablePublisher</code>](#TargetablePublisher) | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |

<a name="TargetableSet+esModuleArray"></a>

### targetableSet.esModuleArray(modulePath, [publisher]) ⇒ <code>TargetableESModuleArray</code>
**Kind**: instance method of [<code>TargetableSet</code>](#TargetableSet)  
**Returns**: <code>TargetableESModuleArray</code> - Returns an instance of [TargetableESModuleArray][]  

| Param | Type | Description |
| --- | --- | --- |
| modulePath | <code>string</code> | Path to the module file this Targetable represents. |
| [publisher] | [<code>TargetablePublisher</code>](#TargetablePublisher) | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |

<a name="TargetableSet+esModuleObject"></a>

### targetableSet.esModuleObject(modulePath, [publisher]) ⇒ <code>TargetableESModuleObject</code>
**Kind**: instance method of [<code>TargetableSet</code>](#TargetableSet)  
**Returns**: <code>TargetableESModuleObject</code> - Returns an instance of [TargetableESModuleObject][]  

| Param | Type | Description |
| --- | --- | --- |
| modulePath | <code>string</code> | Path to the module file this Targetable represents. |
| [publisher] | [<code>TargetablePublisher</code>](#TargetablePublisher) | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |

<a name="TargetableSet+reactComponent"></a>

### targetableSet.reactComponent(modulePath, [publisher]) ⇒ <code>TargetableReactComponent</code>
**Kind**: instance method of [<code>TargetableSet</code>](#TargetableSet)  
**Returns**: <code>TargetableReactComponent</code> - Returns an instance of [TargetableReactComponent][]  

| Param | Type | Description |
| --- | --- | --- |
| modulePath | <code>string</code> | Path to the module file this Targetable represents. |
| [publisher] | [<code>TargetablePublisher</code>](#TargetablePublisher) | Callback function to execute when this module is about to commit its requested transforms to a build. If this function is passed, the module will automatically bind to `builtins.transformModules`. |

<a name="TargetableSet+setSpecialFeatures"></a>

### targetableSet.setSpecialFeatures(...Feature)
Taps the builtin `specialFeatures` target and sets the supplied feature flags.

**Kind**: instance method of [<code>TargetableSet</code>](#TargetableSet)  

| Param | Type | Description |
| --- | --- | --- |
| ...Feature | <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>object.&lt;string, boolean&gt;</code> | flags to set, as either string arguments, an array of string arguments, or an object of flags. |

<a name="TargetableSet+defineEnvVars"></a>

### targetableSet.defineEnvVars(sectionName, variables)
Tap the builtin `envVarDefinitions` target to define new environment variables.

**Kind**: instance method of [<code>TargetableSet</code>](#TargetableSet)  

| Param | Type | Description |
| --- | --- | --- |
| sectionName | <code>string</code> | Human-readable name of section. If a section with this name exists already, variables will be added to it instead o a new section being created. |
| variables | <code>Array.&lt;EnvVarDefinition&gt;</code> | List of variables to add. |

<a name="TargetableSet.using"></a>

### TargetableSet.using(targets) ⇒ [<code>TargetableSet</code>](#TargetableSet)
Creates a new TargetableSet bound to a TargetProvider

**Kind**: static method of [<code>TargetableSet</code>](#TargetableSet)  

| Param | Type | Description |
| --- | --- | --- |
| targets | <code>TargetProvider</code> | TargetProvider for the curent dependency. This is the object passed by BuildBus to an intercept function. |

<a name="TargetablePublisher"></a>

## TargetablePublisher : <code>function</code>
Callback function which runs before committing this module's list of requested transforms to the build. Invoked as an intercept to `builtins.transformModules`, this is the typical time to invoke your own target with your custom API.

**Kind**: global typedef  
**this**: <code>{TargetableModule}</code>  

| Param | Type | Description |
| --- | --- | --- |
| self | <code>TargetableModule</code> | The TargetableModule instance (for use if `this` is not available) |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableSet.js).