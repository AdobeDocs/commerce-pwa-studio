##Classes

<dl>
<dt><a href="#TargetableSet">TargetableSet</a></dt>
<dd>

A factory and manager for Targetable instances.
This class wraps around a TargetProvider, which identifies it as "your"
Targetable and enables automatic interception of targets.

</dd>
</dl>

##Typedefs

<dl>
<dt><a href="#TargetablePublisher">TargetablePublisher</a> : <inlineCode>function</inlineCode></dt>
<dd>

Callback function which runs before committing this module's list of requested transforms to the build. Invoked as an intercept to `builtins.transformModules`, this is the typical time to invoke your own target with your custom API.

</dd>
</dl>


A factory and manager for Targetable instances.
This class wraps around a TargetProvider, which identifies it as "your"
Targetable and enables automatic interception of targets.

*global* *class*

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

*instance* *method* of [`TargetableSet`](#TargetableSet)
`TargetableModule` — Returns an instance of TargetableModule.
*instance* *method* of [`TargetableSet`](#TargetableSet)
`TargetableESModule` — Returns an instance of TargetableESModule.
*instance* *method* of [`TargetableSet`](#TargetableSet)
`TargetableESModuleArray` — Returns an instance of TargetableESModuleArray.
*instance* *method* of [`TargetableSet`](#TargetableSet)
`TargetableESModuleObject` — Returns an instance of TargetableESModuleObject.
*instance* *method* of [`TargetableSet`](#TargetableSet)
`TargetableReactComponent` — Returns an instance of TargetableReactComponent

Taps the builtin `specialFeatures` target and sets the supplied feature flags.

*instance* *method* of [`TargetableSet`](#TargetableSet)

Tap the builtin `envVarDefinitions` target to define new environment variables.

*instance* *method* of [`TargetableSet`](#TargetableSet)

Creates a new TargetableSet bound to a TargetProvider

*static* *method* of [`TargetableSet`](#TargetableSet)

Callback function which runs before committing this module's list of requested transforms to the build. Invoked as an intercept to `builtins.transformModules`, this is the typical time to invoke your own target with your custom API.

*global* *typedef*
**this**: `{TargetableModule}`  


[pwa-studio/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableSet.js](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/targetables/TargetableSet.js)