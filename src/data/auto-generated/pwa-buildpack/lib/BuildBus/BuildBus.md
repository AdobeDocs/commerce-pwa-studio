##Modules

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

##Typedefs

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


Manages dependency participation in project builds and tasks.
It executes their declare and intercept files so they can interact with each other.

*inner* *class* of [`@magento/pwa-buildpack`](#module_@magento/pwa-buildpack)

* [~BuildBus](#module_@magento/pwa-buildpack..BuildBus)
    * _instance_
        * [.getTargetsOf(depName)](#module_@magento/pwa-buildpack..BuildBus+getTargetsOf) ⇒ `Object.<string, Target>`
        * [.init()](#module_@magento/pwa-buildpack..BuildBus+init) ⇒ `BuildBus`
        * [.runPhase(phase)](#module_@magento/pwa-buildpack..BuildBus+runPhase)
    * _static_
        * [.clear(context)](#module_@magento/pwa-buildpack..BuildBus.clear)
        * [.clearAll()](#module_@magento/pwa-buildpack..BuildBus.clearAll)
        * [.for(context)](#module_@magento/pwa-buildpack..BuildBus.for) ⇒ `BuildBus`


Get [TargetProvider](TargetProvider) for the given named dependency. Use this to
retrieve and run targets in top-level code, when you have a reference to
the BuildBus. Declare and intercept functions should not, and cannot,
use this method. Instead, they retrieve external targets through their
`targets.of()` methods.

*instance* *method* of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)
`Object.<string, Target>` — TargetProvider for the dependency.

Run the two defined phases, `declare` and `intercept`, in order.
This binds all targets which the BuildBus can find by analyzing
dependencies in the project package file.

*instance* *method* of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)
**Chainable**  
`BuildBus` — Returns this instance (chainable).

Run the specified phase. The BuildBus finds all dependencies which say
in their `package.json` that they need to run code in this phase.

*instance* *method* of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)
**Example**  
```js
<caption>Find all dependencies whith have `pwa-studio: { targets: { declare: './path/to/js' }} defined, and run those functions.
bus.runPhase('declare')
```

Remove the cached BuildBus for the given context.

*static* *method* of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)

Remove all cached BuildBus objects.

*static* *method* of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)

Get or create the BuildBus for the given context.
This factory is the supported way to construct BuildBus instances.
It caches the instances and connects them to the logging infrastructure.

Only one BuildBus is active for a project root directory (context) at any given time.
This way, Buildpack code can retrieve the BuildBus for a context even if the bus
instance hasn't been sent as a parameter.

*static* *method* of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)
**Example** *(Get or create the BuildBus for the package.json file in &#x60;./project-dir&#x60;, then bind targets, then call a target.)*  
```js
const bus = BuildBus.for('./project-dir);
bus.init();
bus.getTargetsOf('my-extension').myTarget.call();
```

Generic node in a tree of objects which can log their activity. Implemented
for BuildBus, since it will eventually need sophisticated debugging and
introspection for developers, but it has no BuildBus-specific functionality.

*inner* *class* of [`@magento/pwa-buildpack`](#module_@magento/pwa-buildpack)

* [~Trackable](#module_@magento/pwa-buildpack..Trackable)
    * _instance_
        * [.attach(identifier, owner)](#module_@magento/pwa-buildpack..Trackable+attach)
    * _static_
        * [.enableTracking()](#module_@magento/pwa-buildpack..Trackable.enableTracking)
        * [.disableTracking()](#module_@magento/pwa-buildpack..Trackable.disableTracking)


Attach this Trackable to a tree. Give it a name and an owner. If the
owner is a Trackable, then this Trackable becomes a child node of the
owner. If the owner is a function, then this Trackable becomes a root
node, which will log all of its [track](#Trackable+track) calls *and* its
descendents' calls to the `owner` function.

*instance* *method* of [`Trackable`](#module_@magento/pwa-buildpack..Trackable)
**See**: Trackable.spec.js  

Enable all active Trackable instances. **Do not run in production**.
Carries a possibly significant performance cost.

*static* *method* of [`Trackable`](#module_@magento/pwa-buildpack..Trackable)

Disable all active Trackable instances. The parent logging callback will
not be called.

*static* *method* of [`Trackable`](#module_@magento/pwa-buildpack..Trackable)

* [BuiltinTargets](#module_BuiltinTargets)
    * [.envVarDefinitions](#module_BuiltinTargets.envVarDefinitions) : `tapable.SyncHook`
    * [.transformModules](#module_BuiltinTargets.transformModules) : `tapable.AsyncSeriesHook`
    * [.webpackCompiler](#module_BuiltinTargets.webpackCompiler) : `tapable.SyncHook`
    * [.specialFeatures](#module_BuiltinTargets.specialFeatures) : `tapable.SyncHook`
    * [.transformUpward](#module_BuiltinTargets.transformUpward) : `tapable.AsyncSeriesHook`
    * [.validateEnv](#module_BuiltinTargets.validateEnv) : `tapable.AsyncParallelHook`


Called to collect the definitions and documentation for project-wide
configuration values. Core environment variables are defined in the
[`envVarDefinitions.json` file](http://pwastudio.io/pwa-buildpack/reference/environment-variables/core-definitions/).

Intercept this target in your project to add new environment
variables, typed and documented. This integrates your extension
configuration with the project-wide environment variable system.

*static* *property* of [`BuiltinTargets`](#module_BuiltinTargets)
**See**

- [Variable definition schema](http://pwastudio.io/pwa-buildpack/reference/environment-variables/definitions-api/)
- [Core variable definitions](http://pwastudio.io/pwa-buildpack/reference/environment-variables/core-definitions/)

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

*static* *property* of [`BuiltinTargets`](#module_BuiltinTargets)
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

Calls interceptors whenever a Webpack Compiler object is created.
This almost always happens once per build, even in dev mode.

Use an [intercept function](#webpackCompilerIntercept) on this target
to access the [webpack compiler](https://webpack.js.org/api/compiler-hooks/).

*static* *property* of [`BuiltinTargets`](#module_BuiltinTargets)
**Example** *(Tap the compiler&#x27;s &#x60;watchRun&#x60; hook.)*  
```js
targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => {
  compiler.hooks.watchRun.tapPromise(async () => {
     compiler.getInfrastructureLogger('my-extension')
       .info('I do something special in the dev server!');
  });
});
```

Collects flags for special build features that dependency packages
want to use.

If your extension uses ES Modules instead of CommonJS in
its frontend code (as most should), Webpack will not parse and build
the modules by default. It will expect extension code to be CommonJS
style and will not process the ES Modules.
Likewise, if your extension uses CSS Modules, you must add the `cssModules` flag using this target.
Use a [specialFeatures intercept function](#specialFeaturesIntercept)
to add special build features for the modules used in your project.

*static* *property* of [`BuiltinTargets`](#module_BuiltinTargets)
**See**: [Special flags in `configureWebpack()`](http://pwastudio.io/pwa-buildpack/reference/configure-webpack/#special-flags)  
**Example** *(Declare that your extension contains CSS modules.)*  
```js
targets.of('@magento/pwa-buildpack').specialFeatures.tap(featuresByModule => {
  featuresByModule['my-module'] = { cssModules: true };
})
```

Exposes the fully merged UPWARD definition for fine tuning. The
UpwardIncludePlugin does a simple shallow merge of the upward.yml
files in every package which sets the `upward: true` flag in the
`specialFeatures` object. After that is complete,
UpwardIncludePlugin calls this target with the parsed and merged
definition.

*static* *property* of [`BuiltinTargets`](#module_BuiltinTargets)
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

Collect all ENV validation functions that will run against the
project's ENV. The functions can be async and they will run in
parallel. If a validation function wants to stop the whole process
for instance in case of a serious security issue, it can do so
by throwing an error. If it wants to report an error, it can do so
by using the onFail callback provided as an argument. A validation
function can submit multiple errors by calling the onFail function
multiple times. All the errors will be queued into an array and
displayed on the console at the end of the process.

*static* *property* of [`BuiltinTargets`](#module_BuiltinTargets)
**Example**  
```js
targets.of('@magento/pwa-buildpack').validateEnv.tapPromise(validateBackendUrl);
```

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


Represents an edge on the graph, or a "route" between stops, created between
two extensions when one of them references the target(s) of another. When
extension Foo requests targets of extension Bar, the BuildBus provides an
Target instead of the literal Tapable instance. This enables
better logging, error checking, and validation.

*inner* *class* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
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


Run `.call(...args)` on the underlying Tapable Hook.
Calls interceptors synchronously and in subscription order with the
provided arguments. Returns the final value if it's a Waterfall target,
or the value returned by the first interceptor that returns a value if
it's a Bail target.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
`\*` — Returns whatever the underlying Tapable Hook returns.

Run `.callAsync(...args)` on the underlying Tapable Hook. Calls
interceptors asynchronously with the provided arguments. Depending on
the Target type, calls interceptors in parallel or in subscription
order. Last argument must be a callback. It will be invoked when all
interceptors have run, or when the first returning interceptor has run
if it's a Bail target.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
`undefined` — `callAsync` returns nothing, instead passing any output of the interceptors as the first argument of the callback.

Run `.intercept(options)` on the underlying Tapable Hook.
Can register meta-interceptors for other activity on this target.
Use only for logging and debugging.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)

Run `.promise(...args)` on the underlying Tapable hook. Calls
interceptors asynchronously with the provided arguments. Depending on
the Target type, calls interceptors in parallel or in series. Returns a
promise. It will be fulfilled when all interceptors have run, or when
the first returning interceptor has run if it's a Bail target.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
`Promise` — A Promise for any output of the target's interceptors.

Adds a synchronous interceptor to the target.
 If you just supply a function, it will use your extension's package name as the name of the tap.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)

Adds a callback-style asynchronous interceptor to the Target. The interceptor will receive a callback function as its last argument. Only supported on Async targets.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)

Adds a Promise-returning async interceptor to the Target. The interceptor may return a Promise, which the Target will resolve. Only supported on Async targets.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)

Provides the JSON object representation of this target

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
**Overrides**: [`toJSON`](#Trackable+toJSON)  
`object` — JSON object

Push an event to the parent Trackable, or, if no parent, to the root
output callback provided to [Trackable#attach](Trackable#attach). All `.track`
calls are tagged with the instance's identifier and then rolled up
recursively until they call the root output callback.

Throws an exception if [Trackable#attach](Trackable#attach) has never been called
on this instance.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
**Overrides**: [`track`](#Trackable+track)  

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
        * [.toJSON()](#Trackable+toJSON) ⇒ `Object`
        * [.track(args)](#Trackable+track)
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

Serialize this Trackable and any parent Trackables.

*instance* *method* of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)
**Overrides**: [`toJSON`](#Trackable+toJSON)  
`Object` — JSON-clean object that recurses up the parent tree.

Push an event to the parent Trackable, or, if no parent, to the root
output callback provided to [Trackable#attach](Trackable#attach). All `.track`
calls are tagged with the instance's identifier and then rolled up
recursively until they call the root output callback.

Throws an exception if [Trackable#attach](Trackable#attach) has never been called
on this instance.

*instance* *method* of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)
**Overrides**: [`track`](#Trackable+track)  
*inner* *method* of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)

Dictionary of Tapable Hook classes to expose under these new names.

*inner* *constant* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
**See**: [Tapable](https://github.com/webpack/tapable)  

Use duck typing to validate that the passed object seems like a Tapable hook.
More robust than doing `instanceof` checks; allows hooks to be proxied and
otherwise hacked by dependencies.

*inner* *method* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
`boolean` — True if the object looks like a Tapable hook. False otherwise.

Get the string type name of a provided object. If it is one of the base
Tapable Hooks supported, returns the name of that Hook (without 'Hook' on
the end). Otherwise, returns `<unknown>`.

*inner* *method* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
`string` — The name of the hook without 'Hook' on the end or `<unknown>`

Respond to a request from a [TargetProvider](https://pwastudio.io/pwa-buildpack/reference/buildbus/targetprovider/)
to retrieve a different(external) TargetProvider.

This callback pattern helps to loosely couple TargetProviders so
they are more testable.

*inner* *typedef* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
`TargetProvider` — TargetProvider for the requested targets.

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


Represents an edge on the graph, or a "route" between stops, created between
two extensions when one of them references the target(s) of another. When
extension Foo requests targets of extension Bar, the BuildBus provides an
Target instead of the literal Tapable instance. This enables
better logging, error checking, and validation.

*inner* *class* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
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


Run `.call(...args)` on the underlying Tapable Hook.
Calls interceptors synchronously and in subscription order with the
provided arguments. Returns the final value if it's a Waterfall target,
or the value returned by the first interceptor that returns a value if
it's a Bail target.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
`\*` — Returns whatever the underlying Tapable Hook returns.

Run `.callAsync(...args)` on the underlying Tapable Hook. Calls
interceptors asynchronously with the provided arguments. Depending on
the Target type, calls interceptors in parallel or in subscription
order. Last argument must be a callback. It will be invoked when all
interceptors have run, or when the first returning interceptor has run
if it's a Bail target.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
`undefined` — `callAsync` returns nothing, instead passing any output of the interceptors as the first argument of the callback.

Run `.intercept(options)` on the underlying Tapable Hook.
Can register meta-interceptors for other activity on this target.
Use only for logging and debugging.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)

Run `.promise(...args)` on the underlying Tapable hook. Calls
interceptors asynchronously with the provided arguments. Depending on
the Target type, calls interceptors in parallel or in series. Returns a
promise. It will be fulfilled when all interceptors have run, or when
the first returning interceptor has run if it's a Bail target.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
`Promise` — A Promise for any output of the target's interceptors.

Adds a synchronous interceptor to the target.
 If you just supply a function, it will use your extension's package name as the name of the tap.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)

Adds a callback-style asynchronous interceptor to the Target. The interceptor will receive a callback function as its last argument. Only supported on Async targets.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)

Adds a Promise-returning async interceptor to the Target. The interceptor may return a Promise, which the Target will resolve. Only supported on Async targets.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)

Provides the JSON object representation of this target

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
**Overrides**: [`toJSON`](#Trackable+toJSON)  
`object` — JSON object

Push an event to the parent Trackable, or, if no parent, to the root
output callback provided to [Trackable#attach](Trackable#attach). All `.track`
calls are tagged with the instance's identifier and then rolled up
recursively until they call the root output callback.

Throws an exception if [Trackable#attach](Trackable#attach) has never been called
on this instance.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
**Overrides**: [`track`](#Trackable+track)  

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
        * [.toJSON()](#Trackable+toJSON) ⇒ `Object`
        * [.track(args)](#Trackable+track)
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

Serialize this Trackable and any parent Trackables.

*instance* *method* of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)
**Overrides**: [`toJSON`](#Trackable+toJSON)  
`Object` — JSON-clean object that recurses up the parent tree.

Push an event to the parent Trackable, or, if no parent, to the root
output callback provided to [Trackable#attach](Trackable#attach). All `.track`
calls are tagged with the instance's identifier and then rolled up
recursively until they call the root output callback.

Throws an exception if [Trackable#attach](Trackable#attach) has never been called
on this instance.

*instance* *method* of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)
**Overrides**: [`track`](#Trackable+track)  
*inner* *method* of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)

Dictionary of Tapable Hook classes to expose under these new names.

*inner* *constant* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
**See**: [Tapable](https://github.com/webpack/tapable)  

Use duck typing to validate that the passed object seems like a Tapable hook.
More robust than doing `instanceof` checks; allows hooks to be proxied and
otherwise hacked by dependencies.

*inner* *method* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
`boolean` — True if the object looks like a Tapable hook. False otherwise.

Get the string type name of a provided object. If it is one of the base
Tapable Hooks supported, returns the name of that Hook (without 'Hook' on
the end). Otherwise, returns `<unknown>`.

*inner* *method* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
`string` — The name of the hook without 'Hook' on the end or `<unknown>`

Respond to a request from a [TargetProvider](https://pwastudio.io/pwa-buildpack/reference/buildbus/targetprovider/)
to retrieve a different(external) TargetProvider.

This callback pattern helps to loosely couple TargetProviders so
they are more testable.

*inner* *typedef* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
`TargetProvider` — TargetProvider for the requested targets.

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


Manages dependency participation in project builds and tasks.
It executes their declare and intercept files so they can interact with each other.

*inner* *class* of [`@magento/pwa-buildpack`](#module_@magento/pwa-buildpack)

* [~BuildBus](#module_@magento/pwa-buildpack..BuildBus)
    * _instance_
        * [.getTargetsOf(depName)](#module_@magento/pwa-buildpack..BuildBus+getTargetsOf) ⇒ `Object.<string, Target>`
        * [.init()](#module_@magento/pwa-buildpack..BuildBus+init) ⇒ `BuildBus`
        * [.runPhase(phase)](#module_@magento/pwa-buildpack..BuildBus+runPhase)
    * _static_
        * [.clear(context)](#module_@magento/pwa-buildpack..BuildBus.clear)
        * [.clearAll()](#module_@magento/pwa-buildpack..BuildBus.clearAll)
        * [.for(context)](#module_@magento/pwa-buildpack..BuildBus.for) ⇒ `BuildBus`


Get [TargetProvider](TargetProvider) for the given named dependency. Use this to
retrieve and run targets in top-level code, when you have a reference to
the BuildBus. Declare and intercept functions should not, and cannot,
use this method. Instead, they retrieve external targets through their
`targets.of()` methods.

*instance* *method* of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)
`Object.<string, Target>` — TargetProvider for the dependency.

Run the two defined phases, `declare` and `intercept`, in order.
This binds all targets which the BuildBus can find by analyzing
dependencies in the project package file.

*instance* *method* of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)
**Chainable**  
`BuildBus` — Returns this instance (chainable).

Run the specified phase. The BuildBus finds all dependencies which say
in their `package.json` that they need to run code in this phase.

*instance* *method* of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)
**Example**  
```js
<caption>Find all dependencies whith have `pwa-studio: { targets: { declare: './path/to/js' }} defined, and run those functions.
bus.runPhase('declare')
```

Remove the cached BuildBus for the given context.

*static* *method* of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)

Remove all cached BuildBus objects.

*static* *method* of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)

Get or create the BuildBus for the given context.
This factory is the supported way to construct BuildBus instances.
It caches the instances and connects them to the logging infrastructure.

Only one BuildBus is active for a project root directory (context) at any given time.
This way, Buildpack code can retrieve the BuildBus for a context even if the bus
instance hasn't been sent as a parameter.

*static* *method* of [`BuildBus`](#module_@magento/pwa-buildpack..BuildBus)
**Example** *(Get or create the BuildBus for the package.json file in &#x60;./project-dir&#x60;, then bind targets, then call a target.)*  
```js
const bus = BuildBus.for('./project-dir);
bus.init();
bus.getTargetsOf('my-extension').myTarget.call();
```

Generic node in a tree of objects which can log their activity. Implemented
for BuildBus, since it will eventually need sophisticated debugging and
introspection for developers, but it has no BuildBus-specific functionality.

*inner* *class* of [`@magento/pwa-buildpack`](#module_@magento/pwa-buildpack)

* [~Trackable](#module_@magento/pwa-buildpack..Trackable)
    * _instance_
        * [.attach(identifier, owner)](#module_@magento/pwa-buildpack..Trackable+attach)
    * _static_
        * [.enableTracking()](#module_@magento/pwa-buildpack..Trackable.enableTracking)
        * [.disableTracking()](#module_@magento/pwa-buildpack..Trackable.disableTracking)


Attach this Trackable to a tree. Give it a name and an owner. If the
owner is a Trackable, then this Trackable becomes a child node of the
owner. If the owner is a function, then this Trackable becomes a root
node, which will log all of its [track](#Trackable+track) calls *and* its
descendents' calls to the `owner` function.

*instance* *method* of [`Trackable`](#module_@magento/pwa-buildpack..Trackable)
**See**: Trackable.spec.js  

Enable all active Trackable instances. **Do not run in production**.
Carries a possibly significant performance cost.

*static* *method* of [`Trackable`](#module_@magento/pwa-buildpack..Trackable)

Disable all active Trackable instances. The parent logging callback will
not be called.

*static* *method* of [`Trackable`](#module_@magento/pwa-buildpack..Trackable)

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


Represents an edge on the graph, or a "route" between stops, created between
two extensions when one of them references the target(s) of another. When
extension Foo requests targets of extension Bar, the BuildBus provides an
Target instead of the literal Tapable instance. This enables
better logging, error checking, and validation.

*inner* *class* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
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


Run `.call(...args)` on the underlying Tapable Hook.
Calls interceptors synchronously and in subscription order with the
provided arguments. Returns the final value if it's a Waterfall target,
or the value returned by the first interceptor that returns a value if
it's a Bail target.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
`\*` — Returns whatever the underlying Tapable Hook returns.

Run `.callAsync(...args)` on the underlying Tapable Hook. Calls
interceptors asynchronously with the provided arguments. Depending on
the Target type, calls interceptors in parallel or in subscription
order. Last argument must be a callback. It will be invoked when all
interceptors have run, or when the first returning interceptor has run
if it's a Bail target.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
`undefined` — `callAsync` returns nothing, instead passing any output of the interceptors as the first argument of the callback.

Run `.intercept(options)` on the underlying Tapable Hook.
Can register meta-interceptors for other activity on this target.
Use only for logging and debugging.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)

Run `.promise(...args)` on the underlying Tapable hook. Calls
interceptors asynchronously with the provided arguments. Depending on
the Target type, calls interceptors in parallel or in series. Returns a
promise. It will be fulfilled when all interceptors have run, or when
the first returning interceptor has run if it's a Bail target.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
`Promise` — A Promise for any output of the target's interceptors.

Adds a synchronous interceptor to the target.
 If you just supply a function, it will use your extension's package name as the name of the tap.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)

Adds a callback-style asynchronous interceptor to the Target. The interceptor will receive a callback function as its last argument. Only supported on Async targets.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)

Adds a Promise-returning async interceptor to the Target. The interceptor may return a Promise, which the Target will resolve. Only supported on Async targets.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)

Provides the JSON object representation of this target

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
**Overrides**: [`toJSON`](#Trackable+toJSON)  
`object` — JSON object

Push an event to the parent Trackable, or, if no parent, to the root
output callback provided to [Trackable#attach](Trackable#attach). All `.track`
calls are tagged with the instance's identifier and then rolled up
recursively until they call the root output callback.

Throws an exception if [Trackable#attach](Trackable#attach) has never been called
on this instance.

*instance* *method* of [`Target`](#module_Buildpack/BuildBus..Target)
**Overrides**: [`track`](#Trackable+track)  

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
        * [.toJSON()](#Trackable+toJSON) ⇒ `Object`
        * [.track(args)](#Trackable+track)
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

Serialize this Trackable and any parent Trackables.

*instance* *method* of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)
**Overrides**: [`toJSON`](#Trackable+toJSON)  
`Object` — JSON-clean object that recurses up the parent tree.

Push an event to the parent Trackable, or, if no parent, to the root
output callback provided to [Trackable#attach](Trackable#attach). All `.track`
calls are tagged with the instance's identifier and then rolled up
recursively until they call the root output callback.

Throws an exception if [Trackable#attach](Trackable#attach) has never been called
on this instance.

*instance* *method* of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)
**Overrides**: [`track`](#Trackable+track)  
*inner* *method* of [`TargetProvider`](#module_Buildpack/BuildBus..TargetProvider)

Dictionary of Tapable Hook classes to expose under these new names.

*inner* *constant* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
**See**: [Tapable](https://github.com/webpack/tapable)  

Use duck typing to validate that the passed object seems like a Tapable hook.
More robust than doing `instanceof` checks; allows hooks to be proxied and
otherwise hacked by dependencies.

*inner* *method* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
`boolean` — True if the object looks like a Tapable hook. False otherwise.

Get the string type name of a provided object. If it is one of the base
Tapable Hooks supported, returns the name of that Hook (without 'Hook' on
the end). Otherwise, returns `<unknown>`.

*inner* *method* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
`string` — The name of the hook without 'Hook' on the end or `<unknown>`

Respond to a request from a [TargetProvider](https://pwastudio.io/pwa-buildpack/reference/buildbus/targetprovider/)
to retrieve a different(external) TargetProvider.

This callback pattern helps to loosely couple TargetProviders so
they are more testable.

*inner* *typedef* of [`Buildpack/BuildBus`](#module_Buildpack/BuildBus)
`TargetProvider` — TargetProvider for the requested targets.

Intercept function signature for the transformModules target.

Interceptors of `transformModules` should call the [`addTransform()`](#addTransform)
callback to add module specific transformers.
Any returned value will be ignored.

*global* *typedef*

Callback to add a transform.

*global* *typedef*
**See**: [TransformRequest](https://pwastudio.io/pwa-buildpack/reference/transform-requests/#addTransform)  

Intercept function signature for the webpackCompiler target.

Interceptors of `webpackCompiler` should tap hooks on the provided
`compiler` object. Any returned value will be ignored.

*global* *typedef*

Intercept function signature for the specialFeatures target.

Interceptors of the `specialFeatures` target can use the mapping object provided
to map special build flags to their project modules.

*global* *typedef*

Intercept function signature for the transformUpward target.

Interceptors of the `transformUpward` target receive the parsed UPWARD
definition as a plain JavaScript object. Mutate that object in place to
change the final `upward.yml` output by the build.

This Target can be used asynchronously. If you need to do asynchronous work
to get what you need to modify the UPWARD definition (for example, a network
request) then you can provide an `async` function as interceptor (or simply
return a Promise from any function).

*global* *typedef*

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

*global* *typedef*


[pwa-studio/packages/pwa-buildpack/lib/BuildBus/BuildBus.js](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/BuildBus/BuildBus.js)