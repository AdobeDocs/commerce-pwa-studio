<a name="module_Buildpack/BuildBus"></a>

## Buildpack/BuildBus

* [Buildpack/BuildBus](#module_Buildpack/BuildBus)
    * [~TargetProvider](#module_Buildpack/BuildBus..TargetProvider) ⇐ <code>Trackable</code>
        * [new TargetProvider(bus, dep, getExternalTargets)](#new_module_Buildpack/BuildBus..TargetProvider_new)
        * _instance_
            * [.name](#module_Buildpack/BuildBus..TargetProvider+name) : <code>string</code>
            * [.own](#module_Buildpack/BuildBus..TargetProvider+own) : <code>Object.&lt;string, Target&gt;</code>
            * [.phase](#module_Buildpack/BuildBus..TargetProvider+phase) : <code>string</code>
            * [.declare(declarations)](#module_Buildpack/BuildBus..TargetProvider+declare)
            * [.of(depName)](#module_Buildpack/BuildBus..TargetProvider+of) ⇒ <code>Object.&lt;string, Target&gt;</code>
        * _inner_
            * [~toJSON()](#module_Buildpack/BuildBus..TargetProvider..toJSON)
    * [~getExternalTargets](#module_Buildpack/BuildBus..getExternalTargets) ⇒ <code>TargetProvider</code>

<a name="module_Buildpack/BuildBus..TargetProvider"></a>

### Buildpack/BuildBus~TargetProvider ⇐ <code>Trackable</code>
Handles interactions between a BuildBus and an "extension" package
participating in the BuildBus declare/intercept lifecycle.

The `targets` object used by declare and intercept functions is a TargetProvider.
Each extension receives its own TargetProvider, which provides methods for
declaring its own targets, intercepting its own targets, and intercepting the
targets of other extensions.

**Kind**: inner class of [<code>Buildpack/BuildBus</code>](#module_Buildpack/BuildBus)  
**Extends**: <code>Trackable</code>  

* [~TargetProvider](#module_Buildpack/BuildBus..TargetProvider) ⇐ <code>Trackable</code>
    * [new TargetProvider(bus, dep, getExternalTargets)](#new_module_Buildpack/BuildBus..TargetProvider_new)
    * _instance_
        * [.name](#module_Buildpack/BuildBus..TargetProvider+name) : <code>string</code>
        * [.own](#module_Buildpack/BuildBus..TargetProvider+own) : <code>Object.&lt;string, Target&gt;</code>
        * [.phase](#module_Buildpack/BuildBus..TargetProvider+phase) : <code>string</code>
        * [.declare(declarations)](#module_Buildpack/BuildBus..TargetProvider+declare)
        * [.of(depName)](#module_Buildpack/BuildBus..TargetProvider+of) ⇒ <code>Object.&lt;string, Target&gt;</code>
    * _inner_
        * [~toJSON()](#module_Buildpack/BuildBus..TargetProvider..toJSON)

<a name="new_module_Buildpack/BuildBus..TargetProvider_new"></a>

#### new TargetProvider(bus, dep, getExternalTargets)
Creates an instance of TargetProvider.


| Param | Type | Description |
| --- | --- | --- |
| bus | <code>BuildBus</code> \| <code>function</code> | BuildBus using this TargetProvider, or, when testing, a logging function. |
| dep | <code>Object</code> | The package which owns this TargetProvider. |
| dep.name | <code>string</code> | Name of the package which owns this. |
| getExternalTargets | <code>getExternalTargets</code> | Function this TargetProvider will use to retrieve external packages when they are requested with `.of()`. Should usually be a delegate to BuildBus's [`getExternalTargets()`](http://pwastudio.io/pwa-buildpack/reference/buildbus/targetprovider/#buildpackbuildbusgetexternaltargets--targetprovider) |

<a name="module_Buildpack/BuildBus..TargetProvider+name"></a>

#### targetProvider.name : <code>string</code>
**Kind**: instance property of [<code>TargetProvider</code>](#module_Buildpack/BuildBus..TargetProvider)  
<a name="module_Buildpack/BuildBus..TargetProvider+own"></a>

#### targetProvider.own : <code>Object.&lt;string, Target&gt;</code>
The targets this package has declared in the `declare` phase.

**Kind**: instance property of [<code>TargetProvider</code>](#module_Buildpack/BuildBus..TargetProvider)  
<a name="module_Buildpack/BuildBus..TargetProvider+phase"></a>

#### targetProvider.phase : <code>string</code>
The phase currently being executed. Either `declare` or `intercept`.

**Kind**: instance property of [<code>TargetProvider</code>](#module_Buildpack/BuildBus..TargetProvider)  
<a name="module_Buildpack/BuildBus..TargetProvider+declare"></a>

#### targetProvider.declare(declarations)
Call this function in the declare phase to register targets that this package and
other packages can intercept.

**Kind**: instance method of [<code>TargetProvider</code>](#module_Buildpack/BuildBus..TargetProvider)  

| Param | Type | Description |
| --- | --- | --- |
| declarations | <code>Object.&lt;string, Target&gt;</code> | An object whose keys are the names of targets to declare, and whose properties are newly constructed Targets. |

<a name="module_Buildpack/BuildBus..TargetProvider+of"></a>

#### targetProvider.of(depName) ⇒ <code>Object.&lt;string, Target&gt;</code>
Call this function in the intercept phase to get the targets of other packages, which
can then be intercepted by calling `.tap()` methods on them.

**Kind**: instance method of [<code>TargetProvider</code>](#module_Buildpack/BuildBus..TargetProvider)  
**Returns**: <code>Object.&lt;string, Target&gt;</code> - - An object whose keys are the names
of the requested package's targets, and whose values are the target
objects.  

| Param | Type | Description |
| --- | --- | --- |
| depName | <code>string</code> | The package whose targets you want to retrieve. |

<a name="module_Buildpack/BuildBus..TargetProvider..toJSON"></a>

#### TargetProvider~toJSON()
**Kind**: inner method of [<code>TargetProvider</code>](#module_Buildpack/BuildBus..TargetProvider)  
<a name="module_Buildpack/BuildBus..getExternalTargets"></a>

### Buildpack/BuildBus~getExternalTargets ⇒ <code>TargetProvider</code>
Respond to a request from a [TargetProvider](https://pwastudio.io/pwa-buildpack/reference/buildbus/targetprovider/)
to retrieve a different(external) TargetProvider.

This callback pattern helps to loosely couple TargetProviders so
they are more testable.

**Kind**: inner typedef of [<code>Buildpack/BuildBus</code>](#module_Buildpack/BuildBus)  
**Returns**: <code>TargetProvider</code> - TargetProvider for the requested targets.  

| Param | Type | Description |
| --- | --- | --- |
| requestor | <code>TargetProvider</code> | TargetProvider making the request. |
| requested | <code>string</code> | External targets being requested. |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/BuildBus/TargetProvider.js).