## Modules

<dl>
<dt><a href="#module_BuiltinTargets">BuiltinTargets</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#transformModulesIntercept">transformModulesIntercept</a> : <code>function</code></dt>
<dd><p>Intercept function signature for the transformModules target.</p>
<p>Interceptors of <code>transformModules</code> should call the <a href="#addTransform"><code>addTransform()</code></a>
callback to add module specific transformers.
Any returned value will be ignored.</p>
</dd>
<dt><a href="#addTransform">addTransform</a> : <code>function</code></dt>
<dd><p>Callback to add a transform.</p>
</dd>
<dt><a href="#webpackCompilerIntercept">webpackCompilerIntercept</a> : <code>function</code></dt>
<dd><p>Intercept function signature for the webpackCompiler target.</p>
<p>Interceptors of <code>webpackCompiler</code> should tap hooks on the provided
<code>compiler</code> object. Any returned value will be ignored.</p>
</dd>
<dt><a href="#specialFeaturesIntercept">specialFeaturesIntercept</a> : <code>function</code></dt>
<dd><p>Intercept function signature for the specialFeatures target.</p>
<p>Interceptors of the <code>specialFeatures</code> target can use the mapping object provided
to map special build flags to their project modules.</p>
</dd>
<dt><a href="#transformUpwardIntercept">transformUpwardIntercept</a> ⇒ <code>Promise</code></dt>
<dd><p>Intercept function signature for the transformUpward target.</p>
<p>Interceptors of the <code>transformUpward</code> target receive the parsed UPWARD
definition as a plain JavaScript object. Mutate that object in place to
change the final <code>upward.yml</code> output by the build.</p>
<p>This Target can be used asynchronously. If you need to do asynchronous work
to get what you need to modify the UPWARD definition (for example, a network
request) then you can provide an <code>async</code> function as interceptor (or simply
return a Promise from any function).</p>
</dd>
<dt><a href="#envValidationInterceptor">envValidationInterceptor</a> ⇒ <code>Boolean</code></dt>
<dd><p>Intercept function signature for the validateEnv target.</p>
<p>Interceptors of the <code>validateEnv</code> target receive a config object.
The config object contains the project env, an onFail callback and
the debug function to be used in case of the debug mode to log more
inforamtion to the console.</p>
<p>This Target can be used asynchronously in the parallel mode. If a
validator needs to stop the process immediately, it can throw an error.
If it needs to report an error but not stop the whole process, it can do
so by calling the onFail function with the error message it wants to report.
It can call the onFail multiple times if it wants to report multiple errors.</p>
<p>All the errors will be queued and printed into the console at the end of the
validation process and the build process will be stopeed.</p>
</dd>
</dl>

<a name="module_BuiltinTargets"></a>

## BuiltinTargets

* [BuiltinTargets](#module_BuiltinTargets)
    * [.envVarDefinitions](#module_BuiltinTargets.envVarDefinitions) : <code>tapable.SyncHook</code>
    * [.transformModules](#module_BuiltinTargets.transformModules) : <code>tapable.AsyncSeriesHook</code>
    * [.webpackCompiler](#module_BuiltinTargets.webpackCompiler) : <code>tapable.SyncHook</code>
    * [.specialFeatures](#module_BuiltinTargets.specialFeatures) : <code>tapable.SyncHook</code>
    * [.transformUpward](#module_BuiltinTargets.transformUpward) : <code>tapable.AsyncSeriesHook</code>
    * [.validateEnv](#module_BuiltinTargets.validateEnv) : <code>tapable.AsyncParallelHook</code>

<a name="module_BuiltinTargets.envVarDefinitions"></a>

### BuiltinTargets.envVarDefinitions : <code>tapable.SyncHook</code>
Called to collect the definitions and documentation for project-wide
configuration values. Core environment variables are defined in the
[`envVarDefinitions.json` file](http://pwastudio.io/pwa-buildpack/reference/environment-variables/core-definitions/).

Intercept this target in your project to add new environment
variables, typed and documented. This integrates your extension
configuration with the project-wide environment variable system.

**Kind**: static property of [<code>BuiltinTargets</code>](#module_BuiltinTargets)  
**See**

- [Variable definition schema](http://pwastudio.io/pwa-buildpack/reference/environment-variables/definitions-api/)
- [Core variable definitions](http://pwastudio.io/pwa-buildpack/reference/environment-variables/core-definitions/)


| Param | Type | Description |
| --- | --- | --- |
| envVarDefinitions | <code>object</code> | The [variable definitions object](http://pwastudio.io/pwa-buildpack/reference/environment-variables/definitions-api/). Modify in place. |

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
<a name="module_BuiltinTargets.transformModules"></a>

### BuiltinTargets.transformModules : <code>tapable.AsyncSeriesHook</code>
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

**Kind**: static property of [<code>BuiltinTargets</code>](#module_BuiltinTargets)  
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
<a name="module_BuiltinTargets.webpackCompiler"></a>

### BuiltinTargets.webpackCompiler : <code>tapable.SyncHook</code>
Calls interceptors whenever a Webpack Compiler object is created.
This almost always happens once per build, even in dev mode.

Use an [intercept function](#webpackCompilerIntercept) on this target
to access the [webpack compiler](https://webpack.js.org/api/compiler-hooks/).

**Kind**: static property of [<code>BuiltinTargets</code>](#module_BuiltinTargets)  
**Example** *(Tap the compiler&#x27;s &#x60;watchRun&#x60; hook.)*  
```js
targets.of('@magento/pwa-buildpack').webpackCompiler.tap(compiler => {
  compiler.hooks.watchRun.tapPromise(async () => {
     compiler.getInfrastructureLogger('my-extension')
       .info('I do something special in the dev server!');
  });
});
```
<a name="module_BuiltinTargets.specialFeatures"></a>

### BuiltinTargets.specialFeatures : <code>tapable.SyncHook</code>
Collects flags for special build features that dependency packages
want to use.

If your extension uses ES Modules instead of CommonJS in
its frontend code (as most should), Webpack will not parse and build
the modules by default. It will expect extension code to be CommonJS
style and will not process the ES Modules.
Likewise, if your extension uses CSS Modules, you must add the `cssModules` flag using this target.
Use a [specialFeatures intercept function](#specialFeaturesIntercept)
to add special build features for the modules used in your project.

**Kind**: static property of [<code>BuiltinTargets</code>](#module_BuiltinTargets)  
**See**: [Special flags in `configureWebpack()`](http://pwastudio.io/pwa-buildpack/reference/configure-webpack/#special-flags)  
**Example** *(Declare that your extension contains CSS modules.)*  
```js
targets.of('@magento/pwa-buildpack').specialFeatures.tap(featuresByModule => {
  featuresByModule['my-module'] = { cssModules: true };
})
```
<a name="module_BuiltinTargets.transformUpward"></a>

### BuiltinTargets.transformUpward : <code>tapable.AsyncSeriesHook</code>
Exposes the fully merged UPWARD definition for fine tuning. The
UpwardIncludePlugin does a simple shallow merge of the upward.yml
files in every package which sets the `upward: true` flag in the
`specialFeatures` object. After that is complete,
UpwardIncludePlugin calls this target with the parsed and merged
definition.

**Kind**: static property of [<code>BuiltinTargets</code>](#module_BuiltinTargets)  

| Param | Type |
| --- | --- |
| interceptor | [<code>transformUpwardIntercept</code>](#transformUpwardIntercept) | 

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
<a name="module_BuiltinTargets.validateEnv"></a>

### BuiltinTargets.validateEnv : <code>tapable.AsyncParallelHook</code>
Collect all ENV validation functions that will run against the
project's ENV. The functions can be async and they will run in
parallel. If a validation function wants to stop the whole process
for instance in case of a serious security issue, it can do so
by throwing an error. If it wants to report an error, it can do so
by using the onFail callback provided as an argument. A validation
function can submit multiple errors by calling the onFail function
multiple times. All the errors will be queued into an array and
displayed on the console at the end of the process.

**Kind**: static property of [<code>BuiltinTargets</code>](#module_BuiltinTargets)  

| Param | Type |
| --- | --- |
| validator | [<code>envValidationInterceptor</code>](#envValidationInterceptor) | 

**Example**  
```js
targets.of('@magento/pwa-buildpack').validateEnv.tapPromise(validateBackendUrl);
```
<a name="transformModulesIntercept"></a>

## transformModulesIntercept : <code>function</code>
Intercept function signature for the transformModules target.

Interceptors of `transformModules` should call the [`addTransform()`](#addTransform)
callback to add module specific transformers.
Any returned value will be ignored.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| addTransform | [<code>addTransform</code>](#addTransform) | Callback to add a transform. |

<a name="addTransform"></a>

## addTransform : <code>function</code>
Callback to add a transform.

**Kind**: global typedef  
**See**: [TransformRequest](https://pwastudio.io/pwa-buildpack/reference/transform-requests/#addTransform)  

| Param | Type | Description |
| --- | --- | --- |
| transformRequest | <code>Buildpack/WebpackTools~TransformRequest</code> | [Request](https://pwastudio.io/pwa-buildpack/reference/transform-requests/#addTransform) to apply a transform to a file provided by this dependency. |

<a name="webpackCompilerIntercept"></a>

## webpackCompilerIntercept : <code>function</code>
Intercept function signature for the webpackCompiler target.

Interceptors of `webpackCompiler` should tap hooks on the provided
`compiler` object. Any returned value will be ignored.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| compiler | <code>webpack.Compiler</code> | The [webpack compiler](https://webpack.js.org/api/compiler-hooks/) instance |

<a name="specialFeaturesIntercept"></a>

## specialFeaturesIntercept : <code>function</code>
Intercept function signature for the specialFeatures target.

Interceptors of the `specialFeatures` target can use the mapping object provided
to map special build flags to their project modules.

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| featuresByModule | <code>Object.&lt;string, SpecialBuildFlags&gt;</code> | An object mapping of module names to their special build flags |

<a name="transformUpwardIntercept"></a>

## transformUpwardIntercept ⇒ <code>Promise</code>
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
| definition | <code>object</code> | Parsed UPWARD definition object. |

<a name="envValidationInterceptor"></a>

## envValidationInterceptor ⇒ <code>Boolean</code>
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
| config.env | <code>Object</code> | Project ENV |
| config.onFail | <code>function</code> | On fail callback |
| config.debug | <code>function</code> | Debug function to be used for additional reporting in debug mode |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/BuildBus/declare-base.js).