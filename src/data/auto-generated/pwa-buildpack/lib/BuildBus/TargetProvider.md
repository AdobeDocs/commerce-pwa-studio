

* [Buildpack/BuildBus](#module_Buildpack/BuildBus)
    * [~TargetProvider](#module_Buildpack/BuildBus..TargetProvider) ⇐ `Trackable`
        * [new TargetProvider(bus, dep, getExternalTargets)](#new_module_Buildpack/BuildBus..TargetProvider_new)
        * _instance_
            * [.name](#module_Buildpack/BuildBus..TargetProvider+name) : `string`
            * [.own](#module_Buildpack/BuildBus..TargetProvider+own) : `Object.<string, Target>`
            * [.phase](#module_Buildpack/BuildBus..TargetProvider+phase) : `string`
            * [.declare(declarations)](#module_Buildpack/BuildBus..TargetProvider+declare)
            * [.of(depName)](#module_Buildpack/BuildBus..TargetProvider+of) ⇒ `Object.<string, Target>`
        * _inner_
            * [~toJSON()](#module_Buildpack/BuildBus..TargetProvider..toJSON)
    * [~getExternalTargets](#module_Buildpack/BuildBus..getExternalTargets) ⇒ `TargetProvider`


Handles interactions between a BuildBus and an "extension" package
participating in the BuildBus declare/intercept lifecycle.

The `targets` object used by declare and intercept functions is a TargetProvider.
Each extension receives its own TargetProvider, which provides methods for
declaring its own targets, intercepting its own targets, and intercepting the
targets of other extensions.

**Extends**: `Trackable`  

* [~TargetProvider](#module_Buildpack/BuildBus..TargetProvider) ⇐ `Trackable`
    * [new TargetProvider(bus, dep, getExternalTargets)](#new_module_Buildpack/BuildBus..TargetProvider_new)
    * _instance_
        * [.name](#module_Buildpack/BuildBus..TargetProvider+name) : `string`
        * [.own](#module_Buildpack/BuildBus..TargetProvider+own) : `Object.<string, Target>`
        * [.phase](#module_Buildpack/BuildBus..TargetProvider+phase) : `string`
        * [.declare(declarations)](#module_Buildpack/BuildBus..TargetProvider+declare)
        * [.of(depName)](#module_Buildpack/BuildBus..TargetProvider+of) ⇒ `Object.<string, Target>`
    * _inner_
        * [~toJSON()](#module_Buildpack/BuildBus..TargetProvider..toJSON)


Creates an instance of TargetProvider.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| bus | `BuildBus` \| `function` | BuildBus using this TargetProvider, or, when testing, a logging function. |
| dep | `Object` | The package which owns this TargetProvider. |
| dep.name | `string` | Name of the package which owns this. |
| getExternalTargets | `getExternalTargets` | Function this TargetProvider will use to retrieve external packages when they are requested with `.of()`. Should usually be a delegate to BuildBus's [`getExternalTargets()`](https://developer.adobe.com/commerce/pwa-studio/guides/general-concepts/extensibility/#targetproviders) |



The targets this package has declared in the `declare` phase.


The phase currently being executed. Either `declare` or `intercept`.


Call this function in the declare phase to register targets that this package and
other packages can intercept.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| declarations | `Object.<string, Target>` | An object whose keys are the names of targets to declare, and whose properties are newly constructed Targets. |


Call this function in the intercept phase to get the targets of other packages, which
can then be intercepted by calling `.tap()` methods on them.

**Returns: **
`Object.<string, Target>`
   — - An object whose keys are the names
of the requested package's targets, and whose values are the target
objects.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| depName | `string` | The package whose targets you want to retrieve. |



Respond to a request from a [TargetProvider](https://developer.adobe.com/commerce/pwa-studio/guides/general-concepts/extensibility/#targetproviders)
to retrieve a different(external) TargetProvider.

This callback pattern helps to loosely couple TargetProviders so
they are more testable.

**Returns: **
`TargetProvider`
   — TargetProvider for the requested targets.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| requestor | `TargetProvider` | TargetProvider making the request. |
| requested | `string` | External targets being requested. |



**Source Code**: [pwa-studio/packages/pwa-buildpack/lib/BuildBus/TargetProvider.js](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/BuildBus/TargetProvider.js)