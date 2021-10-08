<a name="module_@magento/pwa-buildpack"></a>

## @magento/pwa-buildpack

* [@magento/pwa-buildpack](#module_@magento/pwa-buildpack)
    * [~BuildBus](#module_@magento/pwa-buildpack..BuildBus)
        * _instance_
            * [.getTargetsOf(depName)](#module_@magento/pwa-buildpack..BuildBus+getTargetsOf) ⇒ <code>Object.&lt;string, Target&gt;</code>
            * [.init()](#module_@magento/pwa-buildpack..BuildBus+init) ⇒ <code>BuildBus</code>
            * [.runPhase(phase)](#module_@magento/pwa-buildpack..BuildBus+runPhase)
        * _static_
            * [.clear(context)](#module_@magento/pwa-buildpack..BuildBus.clear)
            * [.clearAll()](#module_@magento/pwa-buildpack..BuildBus.clearAll)
            * [.for(context)](#module_@magento/pwa-buildpack..BuildBus.for) ⇒ <code>BuildBus</code>

<a name="module_@magento/pwa-buildpack..BuildBus"></a>

### @magento/pwa-buildpack~BuildBus
Manages dependency participation in project builds and tasks.
It executes their declare and intercept files so they can interact with each other.

**Kind**: inner class of [<code>@magento/pwa-buildpack</code>](#module_@magento/pwa-buildpack)  

* [~BuildBus](#module_@magento/pwa-buildpack..BuildBus)
    * _instance_
        * [.getTargetsOf(depName)](#module_@magento/pwa-buildpack..BuildBus+getTargetsOf) ⇒ <code>Object.&lt;string, Target&gt;</code>
        * [.init()](#module_@magento/pwa-buildpack..BuildBus+init) ⇒ <code>BuildBus</code>
        * [.runPhase(phase)](#module_@magento/pwa-buildpack..BuildBus+runPhase)
    * _static_
        * [.clear(context)](#module_@magento/pwa-buildpack..BuildBus.clear)
        * [.clearAll()](#module_@magento/pwa-buildpack..BuildBus.clearAll)
        * [.for(context)](#module_@magento/pwa-buildpack..BuildBus.for) ⇒ <code>BuildBus</code>

<a name="module_@magento/pwa-buildpack..BuildBus+getTargetsOf"></a>

#### buildBus.getTargetsOf(depName) ⇒ <code>Object.&lt;string, Target&gt;</code>
Get [TargetProvider](TargetProvider) for the given named dependency. Use this to
retrieve and run targets in top-level code, when you have a reference to
the BuildBus. Declare and intercept functions should not, and cannot,
use this method. Instead, they retrieve external targets through their
`targets.of()` methods.

**Kind**: instance method of [<code>BuildBus</code>](#module_@magento/pwa-buildpack..BuildBus)  
**Returns**: <code>Object.&lt;string, Target&gt;</code> - TargetProvider for the dependency.  

| Param | Type | Description |
| --- | --- | --- |
| depName | <code>string</code> | Dependency whose targets to retrieve. |

<a name="module_@magento/pwa-buildpack..BuildBus+init"></a>

#### buildBus.init() ⇒ <code>BuildBus</code>
Run the two defined phases, `declare` and `intercept`, in order.
This binds all targets which the BuildBus can find by analyzing
dependencies in the project package file.

**Kind**: instance method of [<code>BuildBus</code>](#module_@magento/pwa-buildpack..BuildBus)  
**Chainable**  
**Returns**: <code>BuildBus</code> - Returns this instance (chainable).  
<a name="module_@magento/pwa-buildpack..BuildBus+runPhase"></a>

#### buildBus.runPhase(phase)
Run the specified phase. The BuildBus finds all dependencies which say
in their `package.json` that they need to run code in this phase.

**Kind**: instance method of [<code>BuildBus</code>](#module_@magento/pwa-buildpack..BuildBus)  

| Param | Type | Description |
| --- | --- | --- |
| phase | <code>string</code> | 'declare' or 'intercept' |

**Example**  
```js
<caption>Find all dependencies whith have `pwa-studio: { targets: { declare: './path/to/js' }} defined, and run those functions.
bus.runPhase('declare')
```
<a name="module_@magento/pwa-buildpack..BuildBus.clear"></a>

#### BuildBus.clear(context)
Remove the cached BuildBus for the given context.

**Kind**: static method of [<code>BuildBus</code>](#module_@magento/pwa-buildpack..BuildBus)  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>string</code> | Root directory whose BuildBus to delete. |

<a name="module_@magento/pwa-buildpack..BuildBus.clearAll"></a>

#### BuildBus.clearAll()
Remove all cached BuildBus objects.

**Kind**: static method of [<code>BuildBus</code>](#module_@magento/pwa-buildpack..BuildBus)  
<a name="module_@magento/pwa-buildpack..BuildBus.for"></a>

#### BuildBus.for(context) ⇒ <code>BuildBus</code>
Get or create the BuildBus for the given context.
This factory is the supported way to construct BuildBus instances.
It caches the instances and connects them to the logging infrastructure.

Only one BuildBus is active for a project root directory (context) at any given time.
This way, Buildpack code can retrieve the BuildBus for a context even if the bus
instance hasn't been sent as a parameter.

**Kind**: static method of [<code>BuildBus</code>](#module_@magento/pwa-buildpack..BuildBus)  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>string</code> | Root directory of the BuildBus to get or create. |

**Example** *(Get or create the BuildBus for the package.json file in &#x60;./project-dir&#x60;, then bind targets, then call a target.)*  
```js
const bus = BuildBus.for('./project-dir);
bus.init();
bus.getTargetsOf('my-extension').myTarget.call();
```


For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/BuildBus/BuildBus.js).