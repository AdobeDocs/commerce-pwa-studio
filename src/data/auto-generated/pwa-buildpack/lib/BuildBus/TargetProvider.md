<a name="module_Buildpack/BuildBus" id="module_Buildpack/BuildBus"></a>

## Buildpack/BuildBus

- [Buildpack/BuildBus](#module_Buildpack/BuildBus)
  - [~TargetProvider](#module_Buildpack/BuildBus..TargetProvider) ⇐ `Trackable`
    - [new TargetProvider(bus, dep, getExternalTargets)](#new_module_Buildpack/BuildBus..TargetProvider_new)
    - _instance_
      - [.name](#module_Buildpack/BuildBus..TargetProvider+name) : `string`
      - [.own](#module_Buildpack/BuildBus..TargetProvider+own) : `Object.<string, Target>`
      - [.phase](#module_Buildpack/BuildBus..TargetProvider+phase) : `string`
      - [.declare(declarations)](#module_Buildpack/BuildBus..TargetProvider+declare)
      - [.of(depName)](#module_Buildpack/BuildBus..TargetProvider+of) ⇒ `Object.<string, Target>`
    - _inner_
      - [~toJSON()](#module_Buildpack/BuildBus..TargetProvider..toJSON)
  - [~getExternalTargets](#module_Buildpack/BuildBus..getExternalTargets) ⇒ `TargetProvider`

<a name="module_Buildpack/BuildBus..TargetProvider" id="module_Buildpack/BuildBus..TargetProvider"></a>

### Buildpack/BuildBus~TargetProvider ⇐ `Trackable`

Handles interactions between a BuildBus and an "extension" package
participating in the BuildBus declare/intercept lifecycle.

The `targets` object used by declare and intercept functions is a TargetProvider.
Each extension receives its own TargetProvider, which provides methods for
declaring its own targets, intercepting its own targets, and intercepting the
targets of other extensions.

**Kind**: inner class of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)  
**Extends**: `Trackable`

- [~TargetProvider](#module_Buildpack/BuildBus..TargetProvider) ⇐ `Trackable`
  - [new TargetProvider(bus, dep, getExternalTargets)](#new_module_Buildpack/BuildBus..TargetProvider_new)
  - _instance_
    - [.name](#module_Buildpack/BuildBus..TargetProvider+name) : `string`
    - [.own](#module_Buildpack/BuildBus..TargetProvider+own) : `Object.<string, Target>`
    - [.phase](#module_Buildpack/BuildBus..TargetProvider+phase) : `string`
    - [.declare(declarations)](#module_Buildpack/BuildBus..TargetProvider+declare)
    - [.of(depName)](#module_Buildpack/BuildBus..TargetProvider+of) ⇒ `Object.<string, Target>`
  - _inner_
    - [~toJSON()](#module_Buildpack/BuildBus..TargetProvider..toJSON)

<a name="new_module_Buildpack/BuildBus..TargetProvider_new" id="new_module_Buildpack/BuildBus..TargetProvider_new"></a>

#### new TargetProvider(bus, dep, getExternalTargets)

Creates an instance of TargetProvider.

| Param              | Type                     | Description                                                                                                                                                                                                                                                                                             |
| ------------------ | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bus                | `BuildBus` \| `function` | BuildBus using this TargetProvider, or, when testing, a logging function.                                                                                                                                                                                                                               |
| dep                | `Object`                 | The package which owns this TargetProvider.                                                                                                                                                                                                                                                             |
| dep.name           | `string`                 | Name of the package which owns this.                                                                                                                                                                                                                                                                    |
| getExternalTargets | `getExternalTargets`     | Function this TargetProvider will use to retrieve external packages when they are requested with `.of()`. Should usually be a delegate to BuildBus's [`getExternalTargets()`](http://pwastudio.io/pwa-buildpack/reference/buildbus/targetprovider/#buildpackbuildbusgetexternaltargets--targetprovider) |

<a name="module_Buildpack/BuildBus..TargetProvider+name" id="module_Buildpack/BuildBus..TargetProvider+name"></a>

#### targetProvider.name : `string`

**Kind**: instance property of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)  
<a name="module_Buildpack/BuildBus..TargetProvider+own" id="module_Buildpack/BuildBus..TargetProvider+own"></a>

#### targetProvider.own : `Object.<string, Target>`

The targets this package has declared in the `declare` phase.

**Kind**: instance property of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)  
<a name="module_Buildpack/BuildBus..TargetProvider+phase" id="module_Buildpack/BuildBus..TargetProvider+phase"></a>

#### targetProvider.phase : `string`

The phase currently being executed. Either `declare` or `intercept`.

**Kind**: instance property of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)  
<a name="module_Buildpack/BuildBus..TargetProvider+declare" id="module_Buildpack/BuildBus..TargetProvider+declare"></a>

#### targetProvider.declare(declarations)

Call this function in the declare phase to register targets that this package and
other packages can intercept.

**Kind**: instance method of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)

| Param        | Type                      | Description                                                                                                   |
| ------------ | ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| declarations | `Object.<string, Target>` | An object whose keys are the names of targets to declare, and whose properties are newly constructed Targets. |

<a name="module_Buildpack/BuildBus..TargetProvider+of" id="module_Buildpack/BuildBus..TargetProvider+of"></a>

#### targetProvider.of(depName) ⇒ `Object.<string, Target>`

Call this function in the intercept phase to get the targets of other packages, which
can then be intercepted by calling `.tap()` methods on them.

**Kind**: instance method of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)  
**Returns**: `Object.<string, Target>` - - An object whose keys are the names
of the requested package's targets, and whose values are the target
objects.

| Param   | Type     | Description                                     |
| ------- | -------- | ----------------------------------------------- |
| depName | `string` | The package whose targets you want to retrieve. |

<a name="module_Buildpack/BuildBus..TargetProvider..toJSON" id="module_Buildpack/BuildBus..TargetProvider..toJSON"></a>

#### TargetProvider~toJSON()

**Kind**: inner method of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)  
<a name="module_Buildpack/BuildBus..getExternalTargets" id="module_Buildpack/BuildBus..getExternalTargets"></a>

### Buildpack/BuildBus~getExternalTargets ⇒ `TargetProvider`

Respond to a request from a [TargetProvider](https://pwastudio.io/pwa-buildpack/reference/buildbus/targetprovider/)
to retrieve a different(external) TargetProvider.

This callback pattern helps to loosely couple TargetProviders so
they are more testable.

**Kind**: inner typedef of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)  
**Returns**: `TargetProvider` - TargetProvider for the requested targets.

| Param     | Type             | Description                        |
| --------- | ---------------- | ---------------------------------- |
| requestor | `TargetProvider` | TargetProvider making the request. |
| requested | `string`         | External targets being requested.  |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/BuildBus/TargetProvider.js).
