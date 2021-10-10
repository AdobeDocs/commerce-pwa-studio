
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

*inner* *class* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
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

*instance* *property* of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)

The targets this package has declared in the `declare` phase.

*instance* *property* of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)

The phase currently being executed. Either `declare` or `intercept`.

*instance* *property* of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)

Call this function in the declare phase to register targets that this package and
other packages can intercept.

*instance* *method* of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)

Call this function in the intercept phase to get the targets of other packages, which
can then be intercepted by calling `.tap()` methods on them.

*instance* *method* of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)
`Object.<string, Target>` — - An object whose keys are the names
of the requested package's targets, and whose values are the target
objects.
*inner* *method* of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)

Respond to a request from a [TargetProvider](https://pwastudio.io/pwa-buildpack/reference/buildbus/targetprovider/)
to retrieve a different(external) TargetProvider.

This callback pattern helps to loosely couple TargetProviders so
they are more testable.

*inner* *typedef* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
`TargetProvider` — TargetProvider for the requested targets.


[pwa-studio/packages/pwa-buildpack/lib/BuildBus/TargetProvider.js](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/BuildBus/TargetProvider.js)