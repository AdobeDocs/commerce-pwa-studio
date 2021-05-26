## Modules

<dl>
<dt><a href="#module_@magento/pwa-buildpack">@magento/pwa-buildpack</a></dt>
<dd></dd>
<dt><a href="#module_BuiltinTargets">BuiltinTargets</a></dt>
<dd></dd>
<dt><a href="#module_Buildpack/BuildBus">Buildpack/BuildBus</a></dt>
<dd><p>Mapping Tapable hooks to the Buildpack facade of Targets.</p>
</dd>
<dt><a href="#module_Buildpack/BuildBus">Buildpack/BuildBus</a></dt>
<dd></dd>
<dt><a href="#module_@magento/pwa-buildpack">@magento/pwa-buildpack</a></dt>
<dd></dd>
<dt><a href="#module_Buildpack/BuildBus">Buildpack/BuildBus</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#transformModulesIntercept">transformModulesIntercept</a> : <inlineCode>function</inlineCode></dt>
<dd>

Intercept function signature for the transformModules target.

Interceptors of `transformModules` should call the [`addTransform()`](#addTransform)
callback to add module specific transformers.
Any returned value will be ignored.

</dd>
<dt><a href="#addTransform">addTransform</a> : <inlineCode>function</inlineCode></dt>
<dd>

Callback to add a transform.

</dd>
<dt><a href="#webpackCompilerIntercept">webpackCompilerIntercept</a> : <inlineCode>function</inlineCode></dt>
<dd>

Intercept function signature for the webpackCompiler target.

Interceptors of `webpackCompiler` should tap hooks on the provided
`compiler` object. Any returned value will be ignored.

</dd>
<dt><a href="#specialFeaturesIntercept">specialFeaturesIntercept</a> : <inlineCode>function</inlineCode></dt>
<dd>

Intercept function signature for the specialFeatures target.

Interceptors of the `specialFeatures` target can use the mapping object provided
to map special build flags to their project modules.

</dd>
<dt><a href="#transformUpwardIntercept">transformUpwardIntercept</a> ⇒ <inlineCode>Promise</inlineCode></dt>
<dd>

Intercept function signature for the transformUpward target.

Interceptors of the `transformUpward` target receive the parsed UPWARD
definition as a plain JavaScript object. Mutate that object in place to
change the final `upward.yml` output by the build.

This Target can be used asynchronously. If you need to do asynchronous work
to get what you need to modify the UPWARD definition (for example, a network
request) then you can provide an `async` function as interceptor (or simply
return a Promise from any function).

</dd>
<dt><a href="#envValidationInterceptor">envValidationInterceptor</a> ⇒ <inlineCode>Boolean</inlineCode></dt>
<dd>

Intercept function signature for the validateEnv target.

Interceptors of the `validateEnv` target receive a config object.
The config object contains the project env, an onFail callback and
the debug function to be used in case of the debug mode to log more
inforamtion to the console.

This Target can be used asynchronously in the parallel mode. If a
validator needs to stop the process immediately, it can throw an error.
If it needs to report an error but not stop the whole process, it can do
so by calling the onFail function with the error message it wants to report.
It can call the onFail multiple times if it wants to report multiple errors.

All the errors will be queued and printed into the console at the end of the
validation process and the build process will be stopeed.

</dd>
</dl>

<a name="module_@magento/pwa-buildpack" id="module_@magento/pwa-buildpack"></a>

## @magento/pwa-buildpack


* [@magento/pwa-buildpack](#module_@magento/pwa-buildpack)
    * [~BuildBus](#module_@magento/pwa-buildpack..BuildBus)
        * _instance_
            * [.getTargetsOf(depName)](#module_@magento/pwa-buildpack..BuildBus+getTargetsOf) ⇒ `Object.<string, Target>`
            * [.init()](#module_@magento/pwa-buildpack..BuildBus+init) ⇒ `BuildBus`
            * [.runPhase(phase)](#module_@magento/pwa-buildpack..BuildBus+runPhase)
        * _static_
            * [.clear(context)](#module_@magento/pwa-buildpack..BuildBus.clear)
            * [.clearAll()](#module_@magento/pwa-buildpack..BuildBus.clearAll)
            * [.for(context)](#module_@magento/pwa-buildpack..BuildBus.for) ⇒ `BuildBus`
    * [~Trackable](#module_@magento/pwa-buildpack..Trackable)
        * _instance_
            * [.attach(identifier, owner)](#module_@magento/pwa-buildpack..Trackable+attach)
        * _static_
            * [.enableTracking()](#module_@magento/pwa-buildpack..Trackable.enableTracking)
            * [.disableTracking()](#module_@magento/pwa-buildpack..Trackable.disableTracking)

<a name="module_@magento/pwa-buildpack..BuildBus" id="module_@magento/pwa-buildpack..BuildBus"></a>

### @magento/pwa-buildpack~BuildBus

Manages dependency participation in project builds and tasks.
It executes their declare and intercept files so they can interact with each other.

**Kind**: inner class of [`@magento/pwa-buildpack`](#module_@magento/pwa-buildpack)  

* [~BuildBus](#module_@magento/pwa-buildpack..BuildBus)
    * _instance_
        * [.getTargetsOf(depName)](#module_@magento/pwa-buildpack..BuildBus+getTargetsOf) ⇒ `Object.<string, Target>`
        * [.init()](#module_@magento/pwa-buildpack..BuildBus+init) ⇒ `BuildBus`
        * [.runPhase(phase)](#module_@magento/pwa-buildpack..BuildBus+runPhase)
    * _static_
        * [.clear(context)](#module_@magento/pwa-buildpack..BuildBus.clear)
        * [.clearAll()](#module_@magento/pwa-buildpack..BuildBus.clearAll)
        * [.for(context)](#module_@magento/pwa-buildpack..BuildBus.for) ⇒ `BuildBus`

<a name="module_@magento/pwa-buildpack..BuildBus+getTargetsOf" id="module_@magento/pwa-buildpack..BuildBus+getTargetsOf"></a>

#### buildBus.getTargetsOf(depName) ⇒ `Object.<string, Target>`

Get [TargetProvider](TargetProvider) for the given named dependency. Use this to
retrieve and run targets in top-level code, when you have a reference to
the BuildBus. Declare and intercept functions should not, and cannot,
use this method. Instead, they retrieve external targets through their
`targets.of()` methods.

**Kind**: instance method of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)  
**Returns**: `Object.<string, Target>` - TargetProvider for the dependency.  

| Param | Type | Description |
| --- | --- | --- |
| depName | `string` | Dependency whose targets to retrieve. |

<a name="module_@magento/pwa-buildpack..BuildBus+init" id="module_@magento/pwa-buildpack..BuildBus+init"></a>

#### buildBus.init() ⇒ `BuildBus`

Run the two defined phases, `declare` and `intercept`, in order.
This binds all targets which the BuildBus can find by analyzing
dependencies in the project package file.

**Kind**: instance method of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)  
**Chainable**  
**Returns**: `BuildBus` - Returns this instance (chainable).  
<a name="module_@magento/pwa-buildpack..BuildBus+runPhase" id="module_@magento/pwa-buildpack..BuildBus+runPhase"></a>

#### buildBus.runPhase(phase)

Run the specified phase. The BuildBus finds all dependencies which say
in their `package.json` that they need to run code in this phase.

**Kind**: instance method of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)  

| Param | Type | Description |
| --- | --- | --- |
| phase | `string` | 'declare' or 'intercept' |

**Example**  
```js
<caption>Find all dependencies whith have `pwa-studio: { targets: { declare: './path/to/js' }} defined, and run those functions.
bus.runPhase('declare')
```
<a name="module_@magento/pwa-buildpack..BuildBus.clear" id="module_@magento/pwa-buildpack..BuildBus.clear"></a>

#### BuildBus.clear(context)

Remove the cached BuildBus for the given context.

**Kind**: static method of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)  

| Param | Type | Description |
| --- | --- | --- |
| context | `string` | Root directory whose BuildBus to delete. |

<a name="module_@magento/pwa-buildpack..BuildBus.clearAll" id="module_@magento/pwa-buildpack..BuildBus.clearAll"></a>

#### BuildBus.clearAll()

Remove all cached BuildBus objects.

**Kind**: static method of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)  
<a name="module_@magento/pwa-buildpack..BuildBus.for" id="module_@magento/pwa-buildpack..BuildBus.for"></a>

#### BuildBus.for(context) ⇒ `BuildBus`

Get or create the BuildBus for the given context.
This factory is the supported way to construct BuildBus instances.
It caches the instances and connects them to the logging infrastructure.

Only one BuildBus is active for a project root directory (context) at any given time.
This way, Buildpack code can retrieve the BuildBus for a context even if the bus
instance hasn't been sent as a parameter.

**Kind**: static method of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)  

| Param | Type | Description |
| --- | --- | --- |
| context | `string` | Root directory of the BuildBus to get or create. |

**Example** *(Get or create the BuildBus for the package.json file in &#x60;./project-dir&#x60;, then bind targets, then call a target.)*  
```js
const bus = BuildBus.for('./project-dir);
bus.init();
bus.getTargetsOf('my-extension').myTarget.call();
```
<a name="module_@magento/pwa-buildpack..Trackable" id="module_@magento/pwa-buildpack..Trackable"></a>

### @magento/pwa-buildpack~Trackable

Generic node in a tree of objects which can log their activity. Implemented
for BuildBus, since it will eventually need sophisticated debugging and
introspection for developers, but it has no BuildBus-specific functionality.

**Kind**: inner class of [`@magento/pwa-buildpack`](#module_@magento/pwa-buildpack)  

* [~Trackable](#module_@magento/pwa-buildpack..Trackable)
    * _instance_
        * [.attach(identifier, owner)](#module_@magento/pwa-buildpack..Trackable+attach)
    * _static_
        * [.enableTracking()](#module_@magento/pwa-buildpack..Trackable.enableTracking)
        * [.disableTracking()](#module_@magento/pwa-buildpack..Trackable.disableTracking)

<a name="module_@magento/pwa-buildpack..Trackable+attach" id="module_@magento/pwa-buildpack..Trackable+attach"></a>

#### trackable.attach(identifier, owner)

Attach this Trackable to a tree. Give it a name and an owner. If the
owner is a Trackable, then this Trackable becomes a child node of the
owner. If the owner is a function, then this Trackable becomes a root
node, which will log all of its [track](#Trackable+track) calls *and* its
descendents' calls to the `owner` function.

**Kind**: instance method of [`Trackable`](#module_@magento/pwa-buildpack..Trackable)  
**See**: Trackable.spec.js  

| Param | Type | Description |
| --- | --- | --- |
| identifier | `string` | String identifier of this Trackable |
| owner | `Trackable` \| `function` | Parent or root log callback |

<a name="module_@magento/pwa-buildpack..Trackable.enableTracking" id="module_@magento/pwa-buildpack..Trackable.enableTracking"></a>

#### Trackable.enableTracking()

Enable all active Trackable instances. **Do not run in production**.
Carries a possibly significant performance cost.

**Kind**: static method of [`Trackable`](#module_@magento/pwa-buildpack..Trackable)  
<a name="module_@magento/pwa-buildpack..Trackable.disableTracking" id="module_@magento/pwa-buildpack..Trackable.disableTracking"></a>

#### Trackable.disableTracking()

Disable all active Trackable instances. The parent logging callback will
not be called.

**Kind**: static method of [`Trackable`](#module_@magento/pwa-buildpack..Trackable)  
<a name="module_BuiltinTargets" id="module_BuiltinTargets"></a>

## BuiltinTargets


* [BuiltinTargets](#module_BuiltinTargets)
    * [.envVarDefinitions](#module_BuiltinTargets.envVarDefinitions) : `tapable.SyncHook`
    * [.transformModules](#module_BuiltinTargets.transformModules) : `tapable.AsyncSeriesHook`
    * [.webpackCompiler](#module_BuiltinTargets.webpackCompiler) : `tapable.SyncHook`
    * [.specialFeatures](#module_BuiltinTargets.specialFeatures) : `tapable.SyncHook`
    * [.transformUpward](#module_BuiltinTargets.transformUpward) : `tapable.AsyncSeriesHook`
    * [.validateEnv](#module_BuiltinTargets.validateEnv) : `tapable.AsyncParallelHook`

<a name="module_BuiltinTargets.envVarDefinitions" id="module_BuiltinTargets.envVarDefinitions"></a>

### BuiltinTargets.envVarDefinitions : `tapable.SyncHook`

Called to collect the definitions and documentation for project-wide
configuration values. Core environment variables are defined in the
[`envVarDefinitions.json` file](http://pwastudio.io/pwa-buildpack/reference/environment-variables/core-definitions/).

Intercept this target in your project to add new environment
variables, typed and documented. This integrates your extension
configuration with the project-wide environment variable system.

**Kind**: static property of [`BuiltinTargets`](#module_BuiltinTargets)  
**See**

- [Variable definition schema](http://pwastudio.io/pwa-buildpack/reference/environment-variables/definitions-api/)
- [Core variable definitions](http://pwastudio.io/pwa-buildpack/reference/environment-variables/core-definitions/)


| Param | Type | Description |
| --- | --- | --- |
| envVarDefinitions | `object` | The [variable definitions object](http://pwastudio.io/pwa-buildpack/reference/environment-variables/definitions-api/). Modify in place. |

**Example** *(Add config fields for your extension)*  
```js
targets.of('@magento/pwa-buildpack').envVarDefinitions.tap(defs => {
  defs.sections.push({
    name: 'My Extension Settings',
    variables: [
      {
        name: 'MY_EXTENSION_API_KEY',
        type: 'str',
        desc: 'API key for remote service access.'
      }
    ]
  })
});
```
<a name="module_BuiltinTargets.transformModules" id="module_BuiltinTargets.transformModules"></a>

### BuiltinTargets.transformModules : `tapable.AsyncSeriesHook`

Called when configuring the loading and processing rules for Webpack.

Interceptors receive a function `addTransform()`. They may call this function to request that Webpack process _a particular file_ with a particular transform module.

Since the storefront developer is in charge of important dependencies,
the interceptor files in the storefront project itself should be able to
transform ANY file from ANY dependency.
However, interceptor files in the storefront dependencies are prevented
from modifying files from other dependencies.

NOTE: This is a very low-level extension point. It should be used as a
building block for higher-level extensions that expose functional
areas rather than files on disk.

**Kind**: static property of [`BuiltinTargets`](#module_BuiltinTargets)  
**See**: [transformModules intercept function](#transformModulesIntercept)  
**Example** *(Strip unnecessary Lodash code from a specific JS module.)*  
```js
targets.of('@magento/pwa-buildpack').transformModules.tap(addTransform => addTransform({
  type: 'babel',
  fileToTransform: './lib/uses-pipeline-syntax.js',
  transformModule: 'babel-plugin-lodash',
  options: { id: ["async", "lodash-bound" ]}
}));
```
<a name="module_BuiltinTargets.webpackCompiler" id="module_BuiltinTargets.webpackCompiler"></a>

### BuiltinTargets.webpackCompiler : `tapable.SyncHook`

Calls interceptors whenever a Webpack Compiler object is created.
This almost always happens once per build, even in dev mode.

Use an [intercept function](#webpackCompilerIntercept) on this target
to access the [webpack compiler](https://webpack.js.org/api/compiler-hooks/).

**Kind**: static property of [`BuiltinTargets`](#module_BuiltinTargets)  
**Example** *(Tap the compiler&#x27;s &#x60;watchRun&#x60; hook.)*  
```js
targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => {
  compiler.hooks.watchRun.tapPromise(async () => {
     compiler.getInfrastructureLogger('my-extension')
       .info('I do something special in the dev server!');
  });
});
```
<a name="module_BuiltinTargets.specialFeatures" id="module_BuiltinTargets.specialFeatures"></a>

### BuiltinTargets.specialFeatures : `tapable.SyncHook`

Collects flags for special build features that dependency packages
want to use.

If your extension uses ES Modules instead of CommonJS in
its frontend code (as most should), Webpack will not parse and build
the modules by default. It will expect extension code to be CommonJS
style and will not process the ES Modules.
Likewise, if your extension uses CSS Modules, you must add the `cssModules` flag using this target.
Use a [specialFeatures intercept function](#specialFeaturesIntercept)
to add special build features for the modules used in your project.

**Kind**: static property of [`BuiltinTargets`](#module_BuiltinTargets)  
**See**: [Special flags in `configureWebpack()`](http://pwastudio.io/pwa-buildpack/reference/configure-webpack/#special-flags)  
**Example** *(Declare that your extension contains CSS modules.)*  
```js
targets.of('@magento/pwa-buildpack').specialFeatures.tap(featuresByModule => {
  featuresByModule['my-module'] = { cssModules: true };
})
```
<a name="module_BuiltinTargets.transformUpward" id="module_BuiltinTargets.transformUpward"></a>

### BuiltinTargets.transformUpward : `tapable.AsyncSeriesHook`

Exposes the fully merged UPWARD definition for fine tuning. The
UpwardIncludePlugin does a simple shallow merge of the upward.yml
files in every package which sets the `upward: true` flag in the
`specialFeatures` object. After that is complete,
UpwardIncludePlugin calls this target with the parsed and merged
definition.

**Kind**: static property of [`BuiltinTargets`](#module_BuiltinTargets)  

| Param | Type |
| --- | --- |
| interceptor | [`transformUpwardIntercept`](#transformUpwardIntercept) | 

**Example** *(Send empty responses in maintenance mode.)*  
```js
targets.of('@magento/pwa-buildpack').transformUpward.tap(def => {
  const guardMaintenanceMode = (prop, inline) => {
    def[prop] = {
      when: [
        {
          matches: 'env.MAINTENANCE_MODE',
          pattern: '.',
          use: { inline }
        }
      ],
      default: def[prop]
    }
  }

  guardMaintenanceMode('status', 503);
  guardMaintenanceMode('body', '')
})
```
<a name="module_BuiltinTargets.validateEnv" id="module_BuiltinTargets.validateEnv"></a>

### BuiltinTargets.validateEnv : `tapable.AsyncParallelHook`

Collect all ENV validation functions that will run against the
project's ENV. The functions can be async and they will run in
parallel. If a validation function wants to stop the whole process
for instance in case of a serious security issue, it can do so
by throwing an error. If it wants to report an error, it can do so
by using the onFail callback provided as an argument. A validation
function can submit multiple errors by calling the onFail function
multiple times. All the errors will be queued into an array and
displayed on the console at the end of the process.

**Kind**: static property of [`BuiltinTargets`](#module_BuiltinTargets)  

| Param | Type |
| --- | --- |
| validator | [`envValidationInterceptor`](#envValidationInterceptor) | 

**Example**  
```js
targets.of('@magento/pwa-buildpack').validateEnv.tapPromise(validateBackendUrl);
```
<a name="module_Buildpack/BuildBus" id="module_Buildpack/BuildBus"></a>

## Buildpack/BuildBus

Mapping Tapable hooks to the Buildpack facade of Targets.


* [Buildpack/BuildBus](#module_Buildpack/BuildBus)
    * [~Target](#module_Buildpack/BuildBus..Target) ⇐ `Trackable`
        * [.call([...args])](#module_Buildpack/BuildBus..Target+call) ⇒ `\*`
        * [.callAsync(...args)](#module_Buildpack/BuildBus..Target+callAsync) ⇒ `undefined`
        * [.intercept(options)](#module_Buildpack/BuildBus..Target+intercept) ⇒ `void`
        * [.promise([...args])](#module_Buildpack/BuildBus..Target+promise) ⇒ `Promise`
        * [.tap([name], interceptor)](#module_Buildpack/BuildBus..Target+tap) ⇒ `undefined`
        * [.tapAsync(name, interceptor)](#module_Buildpack/BuildBus..Target+tapAsync) ⇒ `undefined`
        * [.tapPromise(name, interceptor)](#module_Buildpack/BuildBus..Target+tapPromise) ⇒ `undefined`
        * [.toJSON()](#module_Buildpack/BuildBus..Target+toJSON) ⇒ `object`
        * [.track(args)](#Trackable+track)
    * [~TargetProvider](#module_Buildpack/BuildBus..TargetProvider) ⇐ `Trackable`
        * [new TargetProvider(bus, dep, getExternalTargets)](#new_module_Buildpack/BuildBus..TargetProvider_new)
        * _instance_
            * [.name](#module_Buildpack/BuildBus..TargetProvider+name) : `string`
            * [.own](#module_Buildpack/BuildBus..TargetProvider+own) : `Object.<string, Target>`
            * [.phase](#module_Buildpack/BuildBus..TargetProvider+phase) : `string`
            * [.declare(declarations)](#module_Buildpack/BuildBus..TargetProvider+declare)
            * [.of(depName)](#module_Buildpack/BuildBus..TargetProvider+of) ⇒ `Object.<string, Target>`
            * [.toJSON()](#Trackable+toJSON) ⇒ `Object`
            * [.track(args)](#Trackable+track)
        * _inner_
            * [~toJSON()](#module_Buildpack/BuildBus..TargetProvider..toJSON)
    * [~types](#module_Buildpack/BuildBus..types) : `Object.<string, Tapable.Hook>`
    * [~appearsToBeTapable(hookLike)](#module_Buildpack/BuildBus..appearsToBeTapable) ⇒ `boolean`
    * [~getTapableType(hook)](#module_Buildpack/BuildBus..getTapableType) ⇒ `string`
    * [~getExternalTargets](#module_Buildpack/BuildBus..getExternalTargets) ⇒ `TargetProvider`

<a name="module_Buildpack/BuildBus..Target" id="module_Buildpack/BuildBus..Target"></a>

### Buildpack/BuildBus~Target ⇐ `Trackable`

Represents an edge on the graph, or a "route" between stops, created between
two extensions when one of them references the target(s) of another. When
extension Foo requests targets of extension Bar, the BuildBus provides an
Target instead of the literal Tapable instance. This enables
better logging, error checking, and validation.

**Kind**: inner class of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)  
**Extends**: `Trackable`  
**See**: [Tapable docs](https://github.com/webpack/tapable)  

* [~Target](#module_Buildpack/BuildBus..Target) ⇐ `Trackable`
    * [.call([...args])](#module_Buildpack/BuildBus..Target+call) ⇒ `\*`
    * [.callAsync(...args)](#module_Buildpack/BuildBus..Target+callAsync) ⇒ `undefined`
    * [.intercept(options)](#module_Buildpack/BuildBus..Target+intercept) ⇒ `void`
    * [.promise([...args])](#module_Buildpack/BuildBus..Target+promise) ⇒ `Promise`
    * [.tap([name], interceptor)](#module_Buildpack/BuildBus..Target+tap) ⇒ `undefined`
    * [.tapAsync(name, interceptor)](#module_Buildpack/BuildBus..Target+tapAsync) ⇒ `undefined`
    * [.tapPromise(name, interceptor)](#module_Buildpack/BuildBus..Target+tapPromise) ⇒ `undefined`
    * [.toJSON()](#module_Buildpack/BuildBus..Target+toJSON) ⇒ `object`
    * [.track(args)](#Trackable+track)

<a name="module_Buildpack/BuildBus..Target+call" id="module_Buildpack/BuildBus..Target+call"></a>

#### target.call([...args]) ⇒ `\*`

Run `.call(...args)` on the underlying Tapable Hook.
Calls interceptors synchronously and in subscription order with the
provided arguments. Returns the final value if it's a Waterfall target,
or the value returned by the first interceptor that returns a value if
it's a Bail target.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  
**Returns**: `\*` - Returns whatever the underlying Tapable Hook returns.  

| Param | Type | Description |
| --- | --- | --- |
| [...args] | `\*` | All arguments are passed to the interceptor functions that have tapped this Target. |

<a name="module_Buildpack/BuildBus..Target+callAsync" id="module_Buildpack/BuildBus..Target+callAsync"></a>

#### target.callAsync(...args) ⇒ `undefined`

Run `.callAsync(...args)` on the underlying Tapable Hook. Calls
interceptors asynchronously with the provided arguments. Depending on
the Target type, calls interceptors in parallel or in subscription
order. Last argument must be a callback. It will be invoked when all
interceptors have run, or when the first returning interceptor has run
if it's a Bail target.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  
**Returns**: `undefined` - `callAsync` returns nothing, instead passing any output of the interceptors as the first argument of the callback.  

| Param | Type | Description |
| --- | --- | --- |
| ...args | `\*` | All arguments **except the last argument** are passed to the interceptor functions that have tapped this Target. The last argument must be a callback function, which will receive the final output of the interceptors. |

<a name="module_Buildpack/BuildBus..Target+intercept" id="module_Buildpack/BuildBus..Target+intercept"></a>

#### target.intercept(options) ⇒ `void`

Run `.intercept(options)` on the underlying Tapable Hook.
Can register meta-interceptors for other activity on this target.
Use only for logging and debugging.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options for [Tapable#intercept](https://github.com/webpack/tapable#interception). |

<a name="module_Buildpack/BuildBus..Target+promise" id="module_Buildpack/BuildBus..Target+promise"></a>

#### target.promise([...args]) ⇒ `Promise`

Run `.promise(...args)` on the underlying Tapable hook. Calls
interceptors asynchronously with the provided arguments. Depending on
the Target type, calls interceptors in parallel or in series. Returns a
promise. It will be fulfilled when all interceptors have run, or when
the first returning interceptor has run if it's a Bail target.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  
**Returns**: `Promise` - A Promise for any output of the target's interceptors.  

| Param | Type | Description |
| --- | --- | --- |
| [...args] | `\*` | All arguments are passed to the interceptor functions that have tapped this Target. |

<a name="module_Buildpack/BuildBus..Target+tap" id="module_Buildpack/BuildBus..Target+tap"></a>

#### target.tap([name], interceptor) ⇒ `undefined`

Adds a synchronous interceptor to the target.
 If you just supply a function, it will use your extension's package name as the name of the tap.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  

| Param | Type | Description |
| --- | --- | --- |
| [name] | `string` \| `object` | string or object containing the name of the interceptor (optional) |
| interceptor | `function` | interceptor function |

<a name="module_Buildpack/BuildBus..Target+tapAsync" id="module_Buildpack/BuildBus..Target+tapAsync"></a>

#### target.tapAsync(name, interceptor) ⇒ `undefined`

Adds a callback-style asynchronous interceptor to the Target. The interceptor will receive a callback function as its last argument. Only supported on Async targets.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` \| `object` | string or object containing the name of the interceptor |
| interceptor | `function` | interceptor function |

<a name="module_Buildpack/BuildBus..Target+tapPromise" id="module_Buildpack/BuildBus..Target+tapPromise"></a>

#### target.tapPromise(name, interceptor) ⇒ `undefined`

Adds a Promise-returning async interceptor to the Target. The interceptor may return a Promise, which the Target will resolve. Only supported on Async targets.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` \| `object` | string or object containing the name of the interceptor |
| interceptor | `function` | interceptor function |

<a name="module_Buildpack/BuildBus..Target+toJSON" id="module_Buildpack/BuildBus..Target+toJSON"></a>

#### target.toJSON() ⇒ `object`

Provides the JSON object representation of this target

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  
**Overrides**: [`toJSON`](#Trackable+toJSON)  
**Returns**: `object` - JSON object  
<a name="Trackable+track" id="Trackable+track"></a>

#### target.track(args)

Push an event to the parent Trackable, or, if no parent, to the root
output callback provided to [Trackable#attach](Trackable#attach). All `.track`
calls are tagged with the instance's identifier and then rolled up
recursively until they call the root output callback.

Throws an exception if [Trackable#attach](Trackable#attach) has never been called
on this instance.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  
**Overrides**: [`track`](#Trackable+track)  

| Param | Type | Description |
| --- | --- | --- |
| args | `\*` | Any params the root logging function will understand @ |

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

* [~TargetProvider](#module_Buildpack/BuildBus..TargetProvider) ⇐ `Trackable`
    * [new TargetProvider(bus, dep, getExternalTargets)](#new_module_Buildpack/BuildBus..TargetProvider_new)
    * _instance_
        * [.name](#module_Buildpack/BuildBus..TargetProvider+name) : `string`
        * [.own](#module_Buildpack/BuildBus..TargetProvider+own) : `Object.<string, Target>`
        * [.phase](#module_Buildpack/BuildBus..TargetProvider+phase) : `string`
        * [.declare(declarations)](#module_Buildpack/BuildBus..TargetProvider+declare)
        * [.of(depName)](#module_Buildpack/BuildBus..TargetProvider+of) ⇒ `Object.<string, Target>`
        * [.toJSON()](#Trackable+toJSON) ⇒ `Object`
        * [.track(args)](#Trackable+track)
    * _inner_
        * [~toJSON()](#module_Buildpack/BuildBus..TargetProvider..toJSON)

<a name="new_module_Buildpack/BuildBus..TargetProvider_new" id="new_module_Buildpack/BuildBus..TargetProvider_new"></a>

#### new TargetProvider(bus, dep, getExternalTargets)

Creates an instance of TargetProvider.


| Param | Type | Description |
| --- | --- | --- |
| bus | `BuildBus` \| `function` | BuildBus using this TargetProvider, or, when testing, a logging function. |
| dep | `Object` | The package which owns this TargetProvider. |
| dep.name | `string` | Name of the package which owns this. |
| getExternalTargets | `getExternalTargets` | Function this TargetProvider will use to retrieve external packages when they are requested with `.of()`. Should usually be a delegate to BuildBus's [`getExternalTargets()`](http://pwastudio.io/pwa-buildpack/reference/buildbus/targetprovider/#buildpackbuildbusgetexternaltargets--targetprovider) |

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

| Param | Type | Description |
| --- | --- | --- |
| declarations | `Object.<string, Target>` | An object whose keys are the names of targets to declare, and whose properties are newly constructed Targets. |

<a name="module_Buildpack/BuildBus..TargetProvider+of" id="module_Buildpack/BuildBus..TargetProvider+of"></a>

#### targetProvider.of(depName) ⇒ `Object.<string, Target>`

Call this function in the intercept phase to get the targets of other packages, which
can then be intercepted by calling `.tap()` methods on them.

**Kind**: instance method of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)  
**Returns**: `Object.<string, Target>` - - An object whose keys are the names
of the requested package's targets, and whose values are the target
objects.  

| Param | Type | Description |
| --- | --- | --- |
| depName | `string` | The package whose targets you want to retrieve. |

<a name="Trackable+toJSON" id="Trackable+toJSON"></a>

#### targetProvider.toJSON() ⇒ `Object`

Serialize this Trackable and any parent Trackables.

**Kind**: instance method of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)  
**Overrides**: [`toJSON`](#Trackable+toJSON)  
**Returns**: `Object` - JSON-clean object that recurses up the parent tree.  
<a name="Trackable+track" id="Trackable+track"></a>

#### targetProvider.track(args)

Push an event to the parent Trackable, or, if no parent, to the root
output callback provided to [Trackable#attach](Trackable#attach). All `.track`
calls are tagged with the instance's identifier and then rolled up
recursively until they call the root output callback.

Throws an exception if [Trackable#attach](Trackable#attach) has never been called
on this instance.

**Kind**: instance method of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)  
**Overrides**: [`track`](#Trackable+track)  

| Param | Type | Description |
| --- | --- | --- |
| args | `\*` | Any params the root logging function will understand @ |

<a name="module_Buildpack/BuildBus..TargetProvider..toJSON" id="module_Buildpack/BuildBus..TargetProvider..toJSON"></a>

#### TargetProvider~toJSON()

**Kind**: inner method of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)  
<a name="module_Buildpack/BuildBus..types" id="module_Buildpack/BuildBus..types"></a>

### Buildpack/BuildBus~types : `Object.<string, Tapable.Hook>`

Dictionary of Tapable Hook classes to expose under these new names.

**Kind**: inner constant of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)  
**See**: [Tapable](https://github.com/webpack/tapable)  
<a name="module_Buildpack/BuildBus..appearsToBeTapable" id="module_Buildpack/BuildBus..appearsToBeTapable"></a>

### Buildpack/BuildBus~appearsToBeTapable(hookLike) ⇒ `boolean`

Use duck typing to validate that the passed object seems like a Tapable hook.
More robust than doing `instanceof` checks; allows hooks to be proxied and
otherwise hacked by dependencies.

**Kind**: inner method of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)  
**Returns**: `boolean` - True if the object looks like a Tapable hook. False otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| hookLike | `object` | Does it look and act like a Tapable hook? |

<a name="module_Buildpack/BuildBus..getTapableType" id="module_Buildpack/BuildBus..getTapableType"></a>

### Buildpack/BuildBus~getTapableType(hook) ⇒ `string`

Get the string type name of a provided object. If it is one of the base
Tapable Hooks supported, returns the name of that Hook (without 'Hook' on
the end). Otherwise, returns '<unknown>'.

**Kind**: inner method of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)  
**Returns**: `string` - The name of the hook without 'Hook' on the end or `<unknown>`  

| Param | Type | Description |
| --- | --- | --- |
| hook | `object` | Potental Tapable hook object |

<a name="module_Buildpack/BuildBus..getExternalTargets" id="module_Buildpack/BuildBus..getExternalTargets"></a>

### Buildpack/BuildBus~getExternalTargets ⇒ `TargetProvider`

Respond to a request from a [TargetProvider](https://pwastudio.io/pwa-buildpack/reference/buildbus/targetprovider/)
to retrieve a different(external) TargetProvider.

This callback pattern helps to loosely couple TargetProviders so
they are more testable.

**Kind**: inner typedef of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)  
**Returns**: `TargetProvider` - TargetProvider for the requested targets.  

| Param | Type | Description |
| --- | --- | --- |
| requestor | `TargetProvider` | TargetProvider making the request. |
| requested | `string` | External targets being requested. |

<a name="module_Buildpack/BuildBus" id="module_Buildpack/BuildBus"></a>

## Buildpack/BuildBus


* [Buildpack/BuildBus](#module_Buildpack/BuildBus)
    * [~Target](#module_Buildpack/BuildBus..Target) ⇐ `Trackable`
        * [.call([...args])](#module_Buildpack/BuildBus..Target+call) ⇒ `\*`
        * [.callAsync(...args)](#module_Buildpack/BuildBus..Target+callAsync) ⇒ `undefined`
        * [.intercept(options)](#module_Buildpack/BuildBus..Target+intercept) ⇒ `void`
        * [.promise([...args])](#module_Buildpack/BuildBus..Target+promise) ⇒ `Promise`
        * [.tap([name], interceptor)](#module_Buildpack/BuildBus..Target+tap) ⇒ `undefined`
        * [.tapAsync(name, interceptor)](#module_Buildpack/BuildBus..Target+tapAsync) ⇒ `undefined`
        * [.tapPromise(name, interceptor)](#module_Buildpack/BuildBus..Target+tapPromise) ⇒ `undefined`
        * [.toJSON()](#module_Buildpack/BuildBus..Target+toJSON) ⇒ `object`
        * [.track(args)](#Trackable+track)
    * [~TargetProvider](#module_Buildpack/BuildBus..TargetProvider) ⇐ `Trackable`
        * [new TargetProvider(bus, dep, getExternalTargets)](#new_module_Buildpack/BuildBus..TargetProvider_new)
        * _instance_
            * [.name](#module_Buildpack/BuildBus..TargetProvider+name) : `string`
            * [.own](#module_Buildpack/BuildBus..TargetProvider+own) : `Object.<string, Target>`
            * [.phase](#module_Buildpack/BuildBus..TargetProvider+phase) : `string`
            * [.declare(declarations)](#module_Buildpack/BuildBus..TargetProvider+declare)
            * [.of(depName)](#module_Buildpack/BuildBus..TargetProvider+of) ⇒ `Object.<string, Target>`
            * [.toJSON()](#Trackable+toJSON) ⇒ `Object`
            * [.track(args)](#Trackable+track)
        * _inner_
            * [~toJSON()](#module_Buildpack/BuildBus..TargetProvider..toJSON)
    * [~types](#module_Buildpack/BuildBus..types) : `Object.<string, Tapable.Hook>`
    * [~appearsToBeTapable(hookLike)](#module_Buildpack/BuildBus..appearsToBeTapable) ⇒ `boolean`
    * [~getTapableType(hook)](#module_Buildpack/BuildBus..getTapableType) ⇒ `string`
    * [~getExternalTargets](#module_Buildpack/BuildBus..getExternalTargets) ⇒ `TargetProvider`

<a name="module_Buildpack/BuildBus..Target" id="module_Buildpack/BuildBus..Target"></a>

### Buildpack/BuildBus~Target ⇐ `Trackable`

Represents an edge on the graph, or a "route" between stops, created between
two extensions when one of them references the target(s) of another. When
extension Foo requests targets of extension Bar, the BuildBus provides an
Target instead of the literal Tapable instance. This enables
better logging, error checking, and validation.

**Kind**: inner class of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)  
**Extends**: `Trackable`  
**See**: [Tapable docs](https://github.com/webpack/tapable)  

* [~Target](#module_Buildpack/BuildBus..Target) ⇐ `Trackable`
    * [.call([...args])](#module_Buildpack/BuildBus..Target+call) ⇒ `\*`
    * [.callAsync(...args)](#module_Buildpack/BuildBus..Target+callAsync) ⇒ `undefined`
    * [.intercept(options)](#module_Buildpack/BuildBus..Target+intercept) ⇒ `void`
    * [.promise([...args])](#module_Buildpack/BuildBus..Target+promise) ⇒ `Promise`
    * [.tap([name], interceptor)](#module_Buildpack/BuildBus..Target+tap) ⇒ `undefined`
    * [.tapAsync(name, interceptor)](#module_Buildpack/BuildBus..Target+tapAsync) ⇒ `undefined`
    * [.tapPromise(name, interceptor)](#module_Buildpack/BuildBus..Target+tapPromise) ⇒ `undefined`
    * [.toJSON()](#module_Buildpack/BuildBus..Target+toJSON) ⇒ `object`
    * [.track(args)](#Trackable+track)

<a name="module_Buildpack/BuildBus..Target+call" id="module_Buildpack/BuildBus..Target+call"></a>

#### target.call([...args]) ⇒ `\*`

Run `.call(...args)` on the underlying Tapable Hook.
Calls interceptors synchronously and in subscription order with the
provided arguments. Returns the final value if it's a Waterfall target,
or the value returned by the first interceptor that returns a value if
it's a Bail target.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  
**Returns**: `\*` - Returns whatever the underlying Tapable Hook returns.  

| Param | Type | Description |
| --- | --- | --- |
| [...args] | `\*` | All arguments are passed to the interceptor functions that have tapped this Target. |

<a name="module_Buildpack/BuildBus..Target+callAsync" id="module_Buildpack/BuildBus..Target+callAsync"></a>

#### target.callAsync(...args) ⇒ `undefined`

Run `.callAsync(...args)` on the underlying Tapable Hook. Calls
interceptors asynchronously with the provided arguments. Depending on
the Target type, calls interceptors in parallel or in subscription
order. Last argument must be a callback. It will be invoked when all
interceptors have run, or when the first returning interceptor has run
if it's a Bail target.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  
**Returns**: `undefined` - `callAsync` returns nothing, instead passing any output of the interceptors as the first argument of the callback.  

| Param | Type | Description |
| --- | --- | --- |
| ...args | `\*` | All arguments **except the last argument** are passed to the interceptor functions that have tapped this Target. The last argument must be a callback function, which will receive the final output of the interceptors. |

<a name="module_Buildpack/BuildBus..Target+intercept" id="module_Buildpack/BuildBus..Target+intercept"></a>

#### target.intercept(options) ⇒ `void`

Run `.intercept(options)` on the underlying Tapable Hook.
Can register meta-interceptors for other activity on this target.
Use only for logging and debugging.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options for [Tapable#intercept](https://github.com/webpack/tapable#interception). |

<a name="module_Buildpack/BuildBus..Target+promise" id="module_Buildpack/BuildBus..Target+promise"></a>

#### target.promise([...args]) ⇒ `Promise`

Run `.promise(...args)` on the underlying Tapable hook. Calls
interceptors asynchronously with the provided arguments. Depending on
the Target type, calls interceptors in parallel or in series. Returns a
promise. It will be fulfilled when all interceptors have run, or when
the first returning interceptor has run if it's a Bail target.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  
**Returns**: `Promise` - A Promise for any output of the target's interceptors.  

| Param | Type | Description |
| --- | --- | --- |
| [...args] | `\*` | All arguments are passed to the interceptor functions that have tapped this Target. |

<a name="module_Buildpack/BuildBus..Target+tap" id="module_Buildpack/BuildBus..Target+tap"></a>

#### target.tap([name], interceptor) ⇒ `undefined`

Adds a synchronous interceptor to the target.
 If you just supply a function, it will use your extension's package name as the name of the tap.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  

| Param | Type | Description |
| --- | --- | --- |
| [name] | `string` \| `object` | string or object containing the name of the interceptor (optional) |
| interceptor | `function` | interceptor function |

<a name="module_Buildpack/BuildBus..Target+tapAsync" id="module_Buildpack/BuildBus..Target+tapAsync"></a>

#### target.tapAsync(name, interceptor) ⇒ `undefined`

Adds a callback-style asynchronous interceptor to the Target. The interceptor will receive a callback function as its last argument. Only supported on Async targets.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` \| `object` | string or object containing the name of the interceptor |
| interceptor | `function` | interceptor function |

<a name="module_Buildpack/BuildBus..Target+tapPromise" id="module_Buildpack/BuildBus..Target+tapPromise"></a>

#### target.tapPromise(name, interceptor) ⇒ `undefined`

Adds a Promise-returning async interceptor to the Target. The interceptor may return a Promise, which the Target will resolve. Only supported on Async targets.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` \| `object` | string or object containing the name of the interceptor |
| interceptor | `function` | interceptor function |

<a name="module_Buildpack/BuildBus..Target+toJSON" id="module_Buildpack/BuildBus..Target+toJSON"></a>

#### target.toJSON() ⇒ `object`

Provides the JSON object representation of this target

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  
**Overrides**: [`toJSON`](#Trackable+toJSON)  
**Returns**: `object` - JSON object  
<a name="Trackable+track" id="Trackable+track"></a>

#### target.track(args)

Push an event to the parent Trackable, or, if no parent, to the root
output callback provided to [Trackable#attach](Trackable#attach). All `.track`
calls are tagged with the instance's identifier and then rolled up
recursively until they call the root output callback.

Throws an exception if [Trackable#attach](Trackable#attach) has never been called
on this instance.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  
**Overrides**: [`track`](#Trackable+track)  

| Param | Type | Description |
| --- | --- | --- |
| args | `\*` | Any params the root logging function will understand @ |

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

* [~TargetProvider](#module_Buildpack/BuildBus..TargetProvider) ⇐ `Trackable`
    * [new TargetProvider(bus, dep, getExternalTargets)](#new_module_Buildpack/BuildBus..TargetProvider_new)
    * _instance_
        * [.name](#module_Buildpack/BuildBus..TargetProvider+name) : `string`
        * [.own](#module_Buildpack/BuildBus..TargetProvider+own) : `Object.<string, Target>`
        * [.phase](#module_Buildpack/BuildBus..TargetProvider+phase) : `string`
        * [.declare(declarations)](#module_Buildpack/BuildBus..TargetProvider+declare)
        * [.of(depName)](#module_Buildpack/BuildBus..TargetProvider+of) ⇒ `Object.<string, Target>`
        * [.toJSON()](#Trackable+toJSON) ⇒ `Object`
        * [.track(args)](#Trackable+track)
    * _inner_
        * [~toJSON()](#module_Buildpack/BuildBus..TargetProvider..toJSON)

<a name="new_module_Buildpack/BuildBus..TargetProvider_new" id="new_module_Buildpack/BuildBus..TargetProvider_new"></a>

#### new TargetProvider(bus, dep, getExternalTargets)

Creates an instance of TargetProvider.


| Param | Type | Description |
| --- | --- | --- |
| bus | `BuildBus` \| `function` | BuildBus using this TargetProvider, or, when testing, a logging function. |
| dep | `Object` | The package which owns this TargetProvider. |
| dep.name | `string` | Name of the package which owns this. |
| getExternalTargets | `getExternalTargets` | Function this TargetProvider will use to retrieve external packages when they are requested with `.of()`. Should usually be a delegate to BuildBus's [`getExternalTargets()`](http://pwastudio.io/pwa-buildpack/reference/buildbus/targetprovider/#buildpackbuildbusgetexternaltargets--targetprovider) |

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

| Param | Type | Description |
| --- | --- | --- |
| declarations | `Object.<string, Target>` | An object whose keys are the names of targets to declare, and whose properties are newly constructed Targets. |

<a name="module_Buildpack/BuildBus..TargetProvider+of" id="module_Buildpack/BuildBus..TargetProvider+of"></a>

#### targetProvider.of(depName) ⇒ `Object.<string, Target>`

Call this function in the intercept phase to get the targets of other packages, which
can then be intercepted by calling `.tap()` methods on them.

**Kind**: instance method of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)  
**Returns**: `Object.<string, Target>` - - An object whose keys are the names
of the requested package's targets, and whose values are the target
objects.  

| Param | Type | Description |
| --- | --- | --- |
| depName | `string` | The package whose targets you want to retrieve. |

<a name="Trackable+toJSON" id="Trackable+toJSON"></a>

#### targetProvider.toJSON() ⇒ `Object`

Serialize this Trackable and any parent Trackables.

**Kind**: instance method of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)  
**Overrides**: [`toJSON`](#Trackable+toJSON)  
**Returns**: `Object` - JSON-clean object that recurses up the parent tree.  
<a name="Trackable+track" id="Trackable+track"></a>

#### targetProvider.track(args)

Push an event to the parent Trackable, or, if no parent, to the root
output callback provided to [Trackable#attach](Trackable#attach). All `.track`
calls are tagged with the instance's identifier and then rolled up
recursively until they call the root output callback.

Throws an exception if [Trackable#attach](Trackable#attach) has never been called
on this instance.

**Kind**: instance method of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)  
**Overrides**: [`track`](#Trackable+track)  

| Param | Type | Description |
| --- | --- | --- |
| args | `\*` | Any params the root logging function will understand @ |

<a name="module_Buildpack/BuildBus..TargetProvider..toJSON" id="module_Buildpack/BuildBus..TargetProvider..toJSON"></a>

#### TargetProvider~toJSON()

**Kind**: inner method of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)  
<a name="module_Buildpack/BuildBus..types" id="module_Buildpack/BuildBus..types"></a>

### Buildpack/BuildBus~types : `Object.<string, Tapable.Hook>`

Dictionary of Tapable Hook classes to expose under these new names.

**Kind**: inner constant of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)  
**See**: [Tapable](https://github.com/webpack/tapable)  
<a name="module_Buildpack/BuildBus..appearsToBeTapable" id="module_Buildpack/BuildBus..appearsToBeTapable"></a>

### Buildpack/BuildBus~appearsToBeTapable(hookLike) ⇒ `boolean`

Use duck typing to validate that the passed object seems like a Tapable hook.
More robust than doing `instanceof` checks; allows hooks to be proxied and
otherwise hacked by dependencies.

**Kind**: inner method of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)  
**Returns**: `boolean` - True if the object looks like a Tapable hook. False otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| hookLike | `object` | Does it look and act like a Tapable hook? |

<a name="module_Buildpack/BuildBus..getTapableType" id="module_Buildpack/BuildBus..getTapableType"></a>

### Buildpack/BuildBus~getTapableType(hook) ⇒ `string`

Get the string type name of a provided object. If it is one of the base
Tapable Hooks supported, returns the name of that Hook (without 'Hook' on
the end). Otherwise, returns '<unknown>'.

**Kind**: inner method of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)  
**Returns**: `string` - The name of the hook without 'Hook' on the end or `<unknown>`  

| Param | Type | Description |
| --- | --- | --- |
| hook | `object` | Potental Tapable hook object |

<a name="module_Buildpack/BuildBus..getExternalTargets" id="module_Buildpack/BuildBus..getExternalTargets"></a>

### Buildpack/BuildBus~getExternalTargets ⇒ `TargetProvider`

Respond to a request from a [TargetProvider](https://pwastudio.io/pwa-buildpack/reference/buildbus/targetprovider/)
to retrieve a different(external) TargetProvider.

This callback pattern helps to loosely couple TargetProviders so
they are more testable.

**Kind**: inner typedef of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)  
**Returns**: `TargetProvider` - TargetProvider for the requested targets.  

| Param | Type | Description |
| --- | --- | --- |
| requestor | `TargetProvider` | TargetProvider making the request. |
| requested | `string` | External targets being requested. |

<a name="module_@magento/pwa-buildpack" id="module_@magento/pwa-buildpack"></a>

## @magento/pwa-buildpack


* [@magento/pwa-buildpack](#module_@magento/pwa-buildpack)
    * [~BuildBus](#module_@magento/pwa-buildpack..BuildBus)
        * _instance_
            * [.getTargetsOf(depName)](#module_@magento/pwa-buildpack..BuildBus+getTargetsOf) ⇒ `Object.<string, Target>`
            * [.init()](#module_@magento/pwa-buildpack..BuildBus+init) ⇒ `BuildBus`
            * [.runPhase(phase)](#module_@magento/pwa-buildpack..BuildBus+runPhase)
        * _static_
            * [.clear(context)](#module_@magento/pwa-buildpack..BuildBus.clear)
            * [.clearAll()](#module_@magento/pwa-buildpack..BuildBus.clearAll)
            * [.for(context)](#module_@magento/pwa-buildpack..BuildBus.for) ⇒ `BuildBus`
    * [~Trackable](#module_@magento/pwa-buildpack..Trackable)
        * _instance_
            * [.attach(identifier, owner)](#module_@magento/pwa-buildpack..Trackable+attach)
        * _static_
            * [.enableTracking()](#module_@magento/pwa-buildpack..Trackable.enableTracking)
            * [.disableTracking()](#module_@magento/pwa-buildpack..Trackable.disableTracking)

<a name="module_@magento/pwa-buildpack..BuildBus" id="module_@magento/pwa-buildpack..BuildBus"></a>

### @magento/pwa-buildpack~BuildBus

Manages dependency participation in project builds and tasks.
It executes their declare and intercept files so they can interact with each other.

**Kind**: inner class of [`@magento/pwa-buildpack`](#module_@magento/pwa-buildpack)  

* [~BuildBus](#module_@magento/pwa-buildpack..BuildBus)
    * _instance_
        * [.getTargetsOf(depName)](#module_@magento/pwa-buildpack..BuildBus+getTargetsOf) ⇒ `Object.<string, Target>`
        * [.init()](#module_@magento/pwa-buildpack..BuildBus+init) ⇒ `BuildBus`
        * [.runPhase(phase)](#module_@magento/pwa-buildpack..BuildBus+runPhase)
    * _static_
        * [.clear(context)](#module_@magento/pwa-buildpack..BuildBus.clear)
        * [.clearAll()](#module_@magento/pwa-buildpack..BuildBus.clearAll)
        * [.for(context)](#module_@magento/pwa-buildpack..BuildBus.for) ⇒ `BuildBus`

<a name="module_@magento/pwa-buildpack..BuildBus+getTargetsOf" id="module_@magento/pwa-buildpack..BuildBus+getTargetsOf"></a>

#### buildBus.getTargetsOf(depName) ⇒ `Object.<string, Target>`

Get [TargetProvider](TargetProvider) for the given named dependency. Use this to
retrieve and run targets in top-level code, when you have a reference to
the BuildBus. Declare and intercept functions should not, and cannot,
use this method. Instead, they retrieve external targets through their
`targets.of()` methods.

**Kind**: instance method of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)  
**Returns**: `Object.<string, Target>` - TargetProvider for the dependency.  

| Param | Type | Description |
| --- | --- | --- |
| depName | `string` | Dependency whose targets to retrieve. |

<a name="module_@magento/pwa-buildpack..BuildBus+init" id="module_@magento/pwa-buildpack..BuildBus+init"></a>

#### buildBus.init() ⇒ `BuildBus`

Run the two defined phases, `declare` and `intercept`, in order.
This binds all targets which the BuildBus can find by analyzing
dependencies in the project package file.

**Kind**: instance method of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)  
**Chainable**  
**Returns**: `BuildBus` - Returns this instance (chainable).  
<a name="module_@magento/pwa-buildpack..BuildBus+runPhase" id="module_@magento/pwa-buildpack..BuildBus+runPhase"></a>

#### buildBus.runPhase(phase)

Run the specified phase. The BuildBus finds all dependencies which say
in their `package.json` that they need to run code in this phase.

**Kind**: instance method of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)  

| Param | Type | Description |
| --- | --- | --- |
| phase | `string` | 'declare' or 'intercept' |

**Example**  
```js
<caption>Find all dependencies whith have `pwa-studio: { targets: { declare: './path/to/js' }} defined, and run those functions.
bus.runPhase('declare')
```
<a name="module_@magento/pwa-buildpack..BuildBus.clear" id="module_@magento/pwa-buildpack..BuildBus.clear"></a>

#### BuildBus.clear(context)

Remove the cached BuildBus for the given context.

**Kind**: static method of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)  

| Param | Type | Description |
| --- | --- | --- |
| context | `string` | Root directory whose BuildBus to delete. |

<a name="module_@magento/pwa-buildpack..BuildBus.clearAll" id="module_@magento/pwa-buildpack..BuildBus.clearAll"></a>

#### BuildBus.clearAll()

Remove all cached BuildBus objects.

**Kind**: static method of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)  
<a name="module_@magento/pwa-buildpack..BuildBus.for" id="module_@magento/pwa-buildpack..BuildBus.for"></a>

#### BuildBus.for(context) ⇒ `BuildBus`

Get or create the BuildBus for the given context.
This factory is the supported way to construct BuildBus instances.
It caches the instances and connects them to the logging infrastructure.

Only one BuildBus is active for a project root directory (context) at any given time.
This way, Buildpack code can retrieve the BuildBus for a context even if the bus
instance hasn't been sent as a parameter.

**Kind**: static method of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)  

| Param | Type | Description |
| --- | --- | --- |
| context | `string` | Root directory of the BuildBus to get or create. |

**Example** *(Get or create the BuildBus for the package.json file in &#x60;./project-dir&#x60;, then bind targets, then call a target.)*  
```js
const bus = BuildBus.for('./project-dir);
bus.init();
bus.getTargetsOf('my-extension').myTarget.call();
```
<a name="module_@magento/pwa-buildpack..Trackable" id="module_@magento/pwa-buildpack..Trackable"></a>

### @magento/pwa-buildpack~Trackable

Generic node in a tree of objects which can log their activity. Implemented
for BuildBus, since it will eventually need sophisticated debugging and
introspection for developers, but it has no BuildBus-specific functionality.

**Kind**: inner class of [`@magento/pwa-buildpack`](#module_@magento/pwa-buildpack)  

* [~Trackable](#module_@magento/pwa-buildpack..Trackable)
    * _instance_
        * [.attach(identifier, owner)](#module_@magento/pwa-buildpack..Trackable+attach)
    * _static_
        * [.enableTracking()](#module_@magento/pwa-buildpack..Trackable.enableTracking)
        * [.disableTracking()](#module_@magento/pwa-buildpack..Trackable.disableTracking)

<a name="module_@magento/pwa-buildpack..Trackable+attach" id="module_@magento/pwa-buildpack..Trackable+attach"></a>

#### trackable.attach(identifier, owner)

Attach this Trackable to a tree. Give it a name and an owner. If the
owner is a Trackable, then this Trackable becomes a child node of the
owner. If the owner is a function, then this Trackable becomes a root
node, which will log all of its [track](#Trackable+track) calls *and* its
descendents' calls to the `owner` function.

**Kind**: instance method of [`Trackable`](#module_@magento/pwa-buildpack..Trackable)  
**See**: Trackable.spec.js  

| Param | Type | Description |
| --- | --- | --- |
| identifier | `string` | String identifier of this Trackable |
| owner | `Trackable` \| `function` | Parent or root log callback |

<a name="module_@magento/pwa-buildpack..Trackable.enableTracking" id="module_@magento/pwa-buildpack..Trackable.enableTracking"></a>

#### Trackable.enableTracking()

Enable all active Trackable instances. **Do not run in production**.
Carries a possibly significant performance cost.

**Kind**: static method of [`Trackable`](#module_@magento/pwa-buildpack..Trackable)  
<a name="module_@magento/pwa-buildpack..Trackable.disableTracking" id="module_@magento/pwa-buildpack..Trackable.disableTracking"></a>

#### Trackable.disableTracking()

Disable all active Trackable instances. The parent logging callback will
not be called.

**Kind**: static method of [`Trackable`](#module_@magento/pwa-buildpack..Trackable)  
<a name="module_Buildpack/BuildBus" id="module_Buildpack/BuildBus"></a>

## Buildpack/BuildBus


* [Buildpack/BuildBus](#module_Buildpack/BuildBus)
    * [~Target](#module_Buildpack/BuildBus..Target) ⇐ `Trackable`
        * [.call([...args])](#module_Buildpack/BuildBus..Target+call) ⇒ `\*`
        * [.callAsync(...args)](#module_Buildpack/BuildBus..Target+callAsync) ⇒ `undefined`
        * [.intercept(options)](#module_Buildpack/BuildBus..Target+intercept) ⇒ `void`
        * [.promise([...args])](#module_Buildpack/BuildBus..Target+promise) ⇒ `Promise`
        * [.tap([name], interceptor)](#module_Buildpack/BuildBus..Target+tap) ⇒ `undefined`
        * [.tapAsync(name, interceptor)](#module_Buildpack/BuildBus..Target+tapAsync) ⇒ `undefined`
        * [.tapPromise(name, interceptor)](#module_Buildpack/BuildBus..Target+tapPromise) ⇒ `undefined`
        * [.toJSON()](#module_Buildpack/BuildBus..Target+toJSON) ⇒ `object`
        * [.track(args)](#Trackable+track)
    * [~TargetProvider](#module_Buildpack/BuildBus..TargetProvider) ⇐ `Trackable`
        * [new TargetProvider(bus, dep, getExternalTargets)](#new_module_Buildpack/BuildBus..TargetProvider_new)
        * _instance_
            * [.name](#module_Buildpack/BuildBus..TargetProvider+name) : `string`
            * [.own](#module_Buildpack/BuildBus..TargetProvider+own) : `Object.<string, Target>`
            * [.phase](#module_Buildpack/BuildBus..TargetProvider+phase) : `string`
            * [.declare(declarations)](#module_Buildpack/BuildBus..TargetProvider+declare)
            * [.of(depName)](#module_Buildpack/BuildBus..TargetProvider+of) ⇒ `Object.<string, Target>`
            * [.toJSON()](#Trackable+toJSON) ⇒ `Object`
            * [.track(args)](#Trackable+track)
        * _inner_
            * [~toJSON()](#module_Buildpack/BuildBus..TargetProvider..toJSON)
    * [~types](#module_Buildpack/BuildBus..types) : `Object.<string, Tapable.Hook>`
    * [~appearsToBeTapable(hookLike)](#module_Buildpack/BuildBus..appearsToBeTapable) ⇒ `boolean`
    * [~getTapableType(hook)](#module_Buildpack/BuildBus..getTapableType) ⇒ `string`
    * [~getExternalTargets](#module_Buildpack/BuildBus..getExternalTargets) ⇒ `TargetProvider`

<a name="module_Buildpack/BuildBus..Target" id="module_Buildpack/BuildBus..Target"></a>

### Buildpack/BuildBus~Target ⇐ `Trackable`

Represents an edge on the graph, or a "route" between stops, created between
two extensions when one of them references the target(s) of another. When
extension Foo requests targets of extension Bar, the BuildBus provides an
Target instead of the literal Tapable instance. This enables
better logging, error checking, and validation.

**Kind**: inner class of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)  
**Extends**: `Trackable`  
**See**: [Tapable docs](https://github.com/webpack/tapable)  

* [~Target](#module_Buildpack/BuildBus..Target) ⇐ `Trackable`
    * [.call([...args])](#module_Buildpack/BuildBus..Target+call) ⇒ `\*`
    * [.callAsync(...args)](#module_Buildpack/BuildBus..Target+callAsync) ⇒ `undefined`
    * [.intercept(options)](#module_Buildpack/BuildBus..Target+intercept) ⇒ `void`
    * [.promise([...args])](#module_Buildpack/BuildBus..Target+promise) ⇒ `Promise`
    * [.tap([name], interceptor)](#module_Buildpack/BuildBus..Target+tap) ⇒ `undefined`
    * [.tapAsync(name, interceptor)](#module_Buildpack/BuildBus..Target+tapAsync) ⇒ `undefined`
    * [.tapPromise(name, interceptor)](#module_Buildpack/BuildBus..Target+tapPromise) ⇒ `undefined`
    * [.toJSON()](#module_Buildpack/BuildBus..Target+toJSON) ⇒ `object`
    * [.track(args)](#Trackable+track)

<a name="module_Buildpack/BuildBus..Target+call" id="module_Buildpack/BuildBus..Target+call"></a>

#### target.call([...args]) ⇒ `\*`

Run `.call(...args)` on the underlying Tapable Hook.
Calls interceptors synchronously and in subscription order with the
provided arguments. Returns the final value if it's a Waterfall target,
or the value returned by the first interceptor that returns a value if
it's a Bail target.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  
**Returns**: `\*` - Returns whatever the underlying Tapable Hook returns.  

| Param | Type | Description |
| --- | --- | --- |
| [...args] | `\*` | All arguments are passed to the interceptor functions that have tapped this Target. |

<a name="module_Buildpack/BuildBus..Target+callAsync" id="module_Buildpack/BuildBus..Target+callAsync"></a>

#### target.callAsync(...args) ⇒ `undefined`

Run `.callAsync(...args)` on the underlying Tapable Hook. Calls
interceptors asynchronously with the provided arguments. Depending on
the Target type, calls interceptors in parallel or in subscription
order. Last argument must be a callback. It will be invoked when all
interceptors have run, or when the first returning interceptor has run
if it's a Bail target.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  
**Returns**: `undefined` - `callAsync` returns nothing, instead passing any output of the interceptors as the first argument of the callback.  

| Param | Type | Description |
| --- | --- | --- |
| ...args | `\*` | All arguments **except the last argument** are passed to the interceptor functions that have tapped this Target. The last argument must be a callback function, which will receive the final output of the interceptors. |

<a name="module_Buildpack/BuildBus..Target+intercept" id="module_Buildpack/BuildBus..Target+intercept"></a>

#### target.intercept(options) ⇒ `void`

Run `.intercept(options)` on the underlying Tapable Hook.
Can register meta-interceptors for other activity on this target.
Use only for logging and debugging.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  

| Param | Type | Description |
| --- | --- | --- |
| options | `object` | Options for [Tapable#intercept](https://github.com/webpack/tapable#interception). |

<a name="module_Buildpack/BuildBus..Target+promise" id="module_Buildpack/BuildBus..Target+promise"></a>

#### target.promise([...args]) ⇒ `Promise`

Run `.promise(...args)` on the underlying Tapable hook. Calls
interceptors asynchronously with the provided arguments. Depending on
the Target type, calls interceptors in parallel or in series. Returns a
promise. It will be fulfilled when all interceptors have run, or when
the first returning interceptor has run if it's a Bail target.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  
**Returns**: `Promise` - A Promise for any output of the target's interceptors.  

| Param | Type | Description |
| --- | --- | --- |
| [...args] | `\*` | All arguments are passed to the interceptor functions that have tapped this Target. |

<a name="module_Buildpack/BuildBus..Target+tap" id="module_Buildpack/BuildBus..Target+tap"></a>

#### target.tap([name], interceptor) ⇒ `undefined`

Adds a synchronous interceptor to the target.
 If you just supply a function, it will use your extension's package name as the name of the tap.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  

| Param | Type | Description |
| --- | --- | --- |
| [name] | `string` \| `object` | string or object containing the name of the interceptor (optional) |
| interceptor | `function` | interceptor function |

<a name="module_Buildpack/BuildBus..Target+tapAsync" id="module_Buildpack/BuildBus..Target+tapAsync"></a>

#### target.tapAsync(name, interceptor) ⇒ `undefined`

Adds a callback-style asynchronous interceptor to the Target. The interceptor will receive a callback function as its last argument. Only supported on Async targets.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` \| `object` | string or object containing the name of the interceptor |
| interceptor | `function` | interceptor function |

<a name="module_Buildpack/BuildBus..Target+tapPromise" id="module_Buildpack/BuildBus..Target+tapPromise"></a>

#### target.tapPromise(name, interceptor) ⇒ `undefined`

Adds a Promise-returning async interceptor to the Target. The interceptor may return a Promise, which the Target will resolve. Only supported on Async targets.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  

| Param | Type | Description |
| --- | --- | --- |
| name | `string` \| `object` | string or object containing the name of the interceptor |
| interceptor | `function` | interceptor function |

<a name="module_Buildpack/BuildBus..Target+toJSON" id="module_Buildpack/BuildBus..Target+toJSON"></a>

#### target.toJSON() ⇒ `object`

Provides the JSON object representation of this target

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  
**Overrides**: [`toJSON`](#Trackable+toJSON)  
**Returns**: `object` - JSON object  
<a name="Trackable+track" id="Trackable+track"></a>

#### target.track(args)

Push an event to the parent Trackable, or, if no parent, to the root
output callback provided to [Trackable#attach](Trackable#attach). All `.track`
calls are tagged with the instance's identifier and then rolled up
recursively until they call the root output callback.

Throws an exception if [Trackable#attach](Trackable#attach) has never been called
on this instance.

**Kind**: instance method of [`Target`](#module_Buildpack/BuildBus..Target)  
**Overrides**: [`track`](#Trackable+track)  

| Param | Type | Description |
| --- | --- | --- |
| args | `\*` | Any params the root logging function will understand @ |

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

* [~TargetProvider](#module_Buildpack/BuildBus..TargetProvider) ⇐ `Trackable`
    * [new TargetProvider(bus, dep, getExternalTargets)](#new_module_Buildpack/BuildBus..TargetProvider_new)
    * _instance_
        * [.name](#module_Buildpack/BuildBus..TargetProvider+name) : `string`
        * [.own](#module_Buildpack/BuildBus..TargetProvider+own) : `Object.<string, Target>`
        * [.phase](#module_Buildpack/BuildBus..TargetProvider+phase) : `string`
        * [.declare(declarations)](#module_Buildpack/BuildBus..TargetProvider+declare)
        * [.of(depName)](#module_Buildpack/BuildBus..TargetProvider+of) ⇒ `Object.<string, Target>`
        * [.toJSON()](#Trackable+toJSON) ⇒ `Object`
        * [.track(args)](#Trackable+track)
    * _inner_
        * [~toJSON()](#module_Buildpack/BuildBus..TargetProvider..toJSON)

<a name="new_module_Buildpack/BuildBus..TargetProvider_new" id="new_module_Buildpack/BuildBus..TargetProvider_new"></a>

#### new TargetProvider(bus, dep, getExternalTargets)

Creates an instance of TargetProvider.


| Param | Type | Description |
| --- | --- | --- |
| bus | `BuildBus` \| `function` | BuildBus using this TargetProvider, or, when testing, a logging function. |
| dep | `Object` | The package which owns this TargetProvider. |
| dep.name | `string` | Name of the package which owns this. |
| getExternalTargets | `getExternalTargets` | Function this TargetProvider will use to retrieve external packages when they are requested with `.of()`. Should usually be a delegate to BuildBus's [`getExternalTargets()`](http://pwastudio.io/pwa-buildpack/reference/buildbus/targetprovider/#buildpackbuildbusgetexternaltargets--targetprovider) |

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

| Param | Type | Description |
| --- | --- | --- |
| declarations | `Object.<string, Target>` | An object whose keys are the names of targets to declare, and whose properties are newly constructed Targets. |

<a name="module_Buildpack/BuildBus..TargetProvider+of" id="module_Buildpack/BuildBus..TargetProvider+of"></a>

#### targetProvider.of(depName) ⇒ `Object.<string, Target>`

Call this function in the intercept phase to get the targets of other packages, which
can then be intercepted by calling `.tap()` methods on them.

**Kind**: instance method of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)  
**Returns**: `Object.<string, Target>` - - An object whose keys are the names
of the requested package's targets, and whose values are the target
objects.  

| Param | Type | Description |
| --- | --- | --- |
| depName | `string` | The package whose targets you want to retrieve. |

<a name="Trackable+toJSON" id="Trackable+toJSON"></a>

#### targetProvider.toJSON() ⇒ `Object`

Serialize this Trackable and any parent Trackables.

**Kind**: instance method of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)  
**Overrides**: [`toJSON`](#Trackable+toJSON)  
**Returns**: `Object` - JSON-clean object that recurses up the parent tree.  
<a name="Trackable+track" id="Trackable+track"></a>

#### targetProvider.track(args)

Push an event to the parent Trackable, or, if no parent, to the root
output callback provided to [Trackable#attach](Trackable#attach). All `.track`
calls are tagged with the instance's identifier and then rolled up
recursively until they call the root output callback.

Throws an exception if [Trackable#attach](Trackable#attach) has never been called
on this instance.

**Kind**: instance method of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)  
**Overrides**: [`track`](#Trackable+track)  

| Param | Type | Description |
| --- | --- | --- |
| args | `\*` | Any params the root logging function will understand @ |

<a name="module_Buildpack/BuildBus..TargetProvider..toJSON" id="module_Buildpack/BuildBus..TargetProvider..toJSON"></a>

#### TargetProvider~toJSON()

**Kind**: inner method of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)  
<a name="module_Buildpack/BuildBus..types" id="module_Buildpack/BuildBus..types"></a>

### Buildpack/BuildBus~types : `Object.<string, Tapable.Hook>`

Dictionary of Tapable Hook classes to expose under these new names.

**Kind**: inner constant of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)  
**See**: [Tapable](https://github.com/webpack/tapable)  
<a name="module_Buildpack/BuildBus..appearsToBeTapable" id="module_Buildpack/BuildBus..appearsToBeTapable"></a>

### Buildpack/BuildBus~appearsToBeTapable(hookLike) ⇒ `boolean`

Use duck typing to validate that the passed object seems like a Tapable hook.
More robust than doing `instanceof` checks; allows hooks to be proxied and
otherwise hacked by dependencies.

**Kind**: inner method of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)  
**Returns**: `boolean` - True if the object looks like a Tapable hook. False otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| hookLike | `object` | Does it look and act like a Tapable hook? |

<a name="module_Buildpack/BuildBus..getTapableType" id="module_Buildpack/BuildBus..getTapableType"></a>

### Buildpack/BuildBus~getTapableType(hook) ⇒ `string`

Get the string type name of a provided object. If it is one of the base
Tapable Hooks supported, returns the name of that Hook (without 'Hook' on
the end). Otherwise, returns '<unknown>'.

**Kind**: inner method of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)  
**Returns**: `string` - The name of the hook without 'Hook' on the end or `<unknown>`  

| Param | Type | Description |
| --- | --- | --- |
| hook | `object` | Potental Tapable hook object |

<a name="module_Buildpack/BuildBus..getExternalTargets" id="module_Buildpack/BuildBus..getExternalTargets"></a>

### Buildpack/BuildBus~getExternalTargets ⇒ `TargetProvider`

Respond to a request from a [TargetProvider](https://pwastudio.io/pwa-buildpack/reference/buildbus/targetprovider/)
to retrieve a different(external) TargetProvider.

This callback pattern helps to loosely couple TargetProviders so
they are more testable.

**Kind**: inner typedef of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)  
**Returns**: `TargetProvider` - TargetProvider for the requested targets.  

| Param | Type | Description |
| --- | --- | --- |
| requestor | `TargetProvider` | TargetProvider making the request. |
| requested | `string` | External targets being requested. |

<a name="transformModulesIntercept" id="transformModulesIntercept"></a>

## transformModulesIntercept : `function`

Intercept function signature for the transformModules target.

Interceptors of `transformModules` should call the [`addTransform()`](#addTransform)
callback to add module specific transformers.
Any returned value will be ignored.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| addTransform | [`addTransform`](#addTransform) | Callback to add a transform. |

<a name="addTransform" id="addTransform"></a>

## addTransform : `function`

Callback to add a transform.

**Kind**: global typedef  
**See**: [TransformRequest](https://pwastudio.io/pwa-buildpack/reference/transform-requests/#addTransform)  

| Param | Type | Description |
| --- | --- | --- |
| transformRequest | `Buildpack/WebpackTools~TransformRequest` | [Request](https://pwastudio.io/pwa-buildpack/reference/transform-requests/#addTransform) to apply a transform to a file provided by this dependency. |

<a name="webpackCompilerIntercept" id="webpackCompilerIntercept"></a>

## webpackCompilerIntercept : `function`

Intercept function signature for the webpackCompiler target.

Interceptors of `webpackCompiler` should tap hooks on the provided
`compiler` object. Any returned value will be ignored.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| compiler | `webpack.Compiler` | The [webpack compiler](https://webpack.js.org/api/compiler-hooks/) instance |

<a name="specialFeaturesIntercept" id="specialFeaturesIntercept"></a>

## specialFeaturesIntercept : `function`

Intercept function signature for the specialFeatures target.

Interceptors of the `specialFeatures` target can use the mapping object provided
to map special build flags to their project modules.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| featuresByModule | `Object.<string, SpecialBuildFlags>` | An object mapping of module names to their special build flags |

<a name="transformUpwardIntercept" id="transformUpwardIntercept"></a>

## transformUpwardIntercept ⇒ `Promise`

Intercept function signature for the transformUpward target.

Interceptors of the `transformUpward` target receive the parsed UPWARD
definition as a plain JavaScript object. Mutate that object in place to
change the final `upward.yml` output by the build.

This Target can be used asynchronously. If you need to do asynchronous work
to get what you need to modify the UPWARD definition (for example, a network
request) then you can provide an `async` function as interceptor (or simply
return a Promise from any function).

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| definition | `object` | Parsed UPWARD definition object. |

<a name="envValidationInterceptor" id="envValidationInterceptor"></a>

## envValidationInterceptor ⇒ `Boolean`

Intercept function signature for the validateEnv target.

Interceptors of the `validateEnv` target receive a config object.
The config object contains the project env, an onFail callback and
the debug function to be used in case of the debug mode to log more
inforamtion to the console.

This Target can be used asynchronously in the parallel mode. If a
validator needs to stop the process immediately, it can throw an error.
If it needs to report an error but not stop the whole process, it can do
so by calling the onFail function with the error message it wants to report.
It can call the onFail multiple times if it wants to report multiple errors.

All the errors will be queued and printed into the console at the end of the
validation process and the build process will be stopeed.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| config.env | `Object` | Project ENV |
| config.onFail | `function` | On fail callback |
| config.debug | `function` | Debug function to be used for additional reporting in debug mode |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/BuildBus/BuildBus.js).