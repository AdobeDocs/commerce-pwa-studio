
Modules

<dl>
<dt><a href="#module_BuiltinTargets">BuiltinTargets</a></dt>
<dd></dd>
</dl>


Typedefs

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

**See**

- [Variable definition schema](http://pwastudio.io/pwa-buildpack/reference/environment-variables/definitions-api/)
- [Core variable definitions](http://pwastudio.io/pwa-buildpack/reference/environment-variables/core-definitions/)

**Parameters**

| Name | Type | Description |
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

**Parameters**

| Name | Type |
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

Collect all ENV validation functions that will run against the
project's ENV. The functions can be async and they will run in
parallel. If a validation function wants to stop the whole process
for instance in case of a serious security issue, it can do so
by throwing an error. If it wants to report an error, it can do so
by using the onFail callback provided as an argument. A validation
function can submit multiple errors by calling the onFail function
multiple times. All the errors will be queued into an array and
displayed on the console at the end of the process.

**Parameters**

| Name | Type |
| --- | --- |
| validator | [`envValidationInterceptor`](#envValidationInterceptor) | 

**Example**  
```js
targets.of('@magento/pwa-buildpack').validateEnv.tapPromise(validateBackendUrl);
```

Intercept function signature for the transformModules target.

Interceptors of `transformModules` should call the [`addTransform()`](#addTransform)
callback to add module specific transformers.
Any returned value will be ignored.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| addTransform | [`addTransform`](#addTransform) | Callback to add a transform. |


Callback to add a transform.

**See**: [TransformRequest](https://pwastudio.io/pwa-buildpack/reference/transform-requests/#addTransform)  
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| transformRequest | `Buildpack/WebpackTools~TransformRequest` | [Request](https://pwastudio.io/pwa-buildpack/reference/transform-requests/#addTransform) to apply a transform to a file provided by this dependency. |


Intercept function signature for the webpackCompiler target.

Interceptors of `webpackCompiler` should tap hooks on the provided
`compiler` object. Any returned value will be ignored.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| compiler | `webpack.Compiler` | The [webpack compiler](https://webpack.js.org/api/compiler-hooks/) instance |


Intercept function signature for the specialFeatures target.

Interceptors of the `specialFeatures` target can use the mapping object provided
to map special build flags to their project modules.

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| featuresByModule | `Object.<string, SpecialBuildFlags>` | An object mapping of module names to their special build flags |


Intercept function signature for the transformUpward target.

Interceptors of the `transformUpward` target receive the parsed UPWARD
definition as a plain JavaScript object. Mutate that object in place to
change the final `upward.yml` output by the build.

This Target can be used asynchronously. If you need to do asynchronous work
to get what you need to modify the UPWARD definition (for example, a network
request) then you can provide an `async` function as interceptor (or simply
return a Promise from any function).

**Returns: **
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| definition | `object` | Parsed UPWARD definition object. |


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

**Returns: **
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| config.env | `Object` | Project ENV |
| config.onFail | `function` | On fail callback |
| config.debug | `function` | Debug function to be used for additional reporting in debug mode |



**Source Code**: [pwa-studio/packages/pwa-buildpack/lib/BuildBus/declare-base.js](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/BuildBus/declare-base.js)