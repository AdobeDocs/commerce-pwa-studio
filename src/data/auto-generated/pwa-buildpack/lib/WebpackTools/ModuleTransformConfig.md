## Classes

<dl>
<dt><a href="#ModuleTransformConfig">ModuleTransformConfig</a></dt>
<dd>

Configuration builder for module transforms. Accepts TransformRequests
and emits loader config objects for Buildpack's custom transform loaders.

Understands all transform types and normalizes them correctly. Mostly this
involves resolving the file paths using Webpack or Node resolution rules.

For some special types of transform, ModuleTransformConfig has helpers to
apply the requested transforms itself. But `configureWebpack` consumes most
of the transforms by calling `transformConfig.collect()` on this object,
which yields a structured object that configureWebpack can use to set up
loader and plugin configuration.

</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#addTransform">addTransform</a> ⇒</dt>
<dd>

Add a request to transform a file in the build. This function is passed as
the first argument to an interceptor of the `transformModules` target.

</dd>
<dt><a href="#TransformRequest">TransformRequest</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Instruction for configuring Webpack to apply custom transformations to one
particular file. The [`configureWebpack()` function](/pwa-buildpack/reference/configure-webpack/)
gathers TransformRequests from all interceptors of the `transformModules`
target and turns them into a configuration of Webpack [module
rules](https://v4.webpack.js.org/configuration/module/#modulerules).

</dd>
</dl>

<a name="ModuleTransformConfig" id="ModuleTransformConfig"></a>

## ModuleTransformConfig

Configuration builder for module transforms. Accepts TransformRequests
and emits loader config objects for Buildpack's custom transform loaders.

Understands all transform types and normalizes them correctly. Mostly this
involves resolving the file paths using Webpack or Node resolution rules.

For some special types of transform, ModuleTransformConfig has helpers to
apply the requested transforms itself. But `configureWebpack` consumes most
of the transforms by calling `transformConfig.collect()` on this object,
which yields a structured object that configureWebpack can use to set up
loader and plugin configuration.

**Kind**: global class

- [ModuleTransformConfig](#ModuleTransformConfig)
  - [new ModuleTransformConfig(resolver, localProjectName)](#new_ModuleTransformConfig_new)
  - [.add()](#ModuleTransformConfig+add)
    - [.add](#ModuleTransformConfig+add.add) ⇒
  - [.toLoaderOptions()](#ModuleTransformConfig+toLoaderOptions) ⇒ `object`

<a name="new_ModuleTransformConfig_new" id="new_ModuleTransformConfig_new"></a>

### new ModuleTransformConfig(resolver, localProjectName)

| Param            | Type              | Description                                                                        |
| ---------------- | ----------------- | ---------------------------------------------------------------------------------- |
| resolver         | `MagentoResolver` | Resolver to use when finding real paths of modules requested.                      |
| localProjectName | `string`          | The name of the PWA project being built, taken from the package.json `name` field. |

<a name="ModuleTransformConfig+add" id="ModuleTransformConfig+add"></a>

### moduleTransformConfig.add()

**Kind**: instance method of [`ModuleTransformConfig`](#ModuleTransformConfig)  
<a name="ModuleTransformConfig+add.add" id="ModuleTransformConfig+add.add"></a>

#### add.add ⇒

Add a request to transform a file in the build. This function is passed as
the first argument to an interceptor of the `transformModules` target.

**Kind**: static typedef of [`add`](#ModuleTransformConfig+add)  
**Returns**: null

| Param | Type                                    | Description                                                                                                                  |
| ----- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| req   | [`TransformRequest`](#TransformRequest) | Instruction object for the requested transform, including the transform to apply, the target source code, and other options. |

<a name="ModuleTransformConfig+toLoaderOptions" id="ModuleTransformConfig+toLoaderOptions"></a>

### moduleTransformConfig.toLoaderOptions() ⇒ `object`

Resolve paths and emit as JSON.

**Kind**: instance method of [`ModuleTransformConfig`](#ModuleTransformConfig)  
**Returns**: `object` - Configuration object  
<a name="TransformType" id="TransformType"></a>

## TransformType : `enum`

**Kind**: global enum  
**Properties**

| Name   | Type     | Default                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------ | -------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| source | `string` | <inlineCode>source</inlineCode> | Process the _source code_ of `fileToTransform` through the `transformModule` as text. When applying a `source` TransformRequest, Buildpack will use the `transformModule` as a [Webpack loader](https://v4.webpack.js.org/api/loaders/), so it must implement that interface. Any Webpack loader can be used as a `transformModule` for `source` TransformRequests. `source` transforms are fast and can run on source code of any language, but they aren't as precise and safe as AST-type transforms when modifying code.                                                                                                                                                                                                      |
| babel  | `string` | <inlineCode>babel</inlineCode>  | Process the _abstract syntax tree_ of the ES module specified by `fileToTransform` through the `transformModule` as a [Babel AST](https://github.com/babel/babel/blob/master/packages/babel-parser/ast/spec.md). When applying a `babel` TransformRequest, Buildpack will use the `transformModule` as a [Babel plugin](https://github.com/jamiebuilds/babel-handbook), so it must implement that interface. Any Babel plugin can be used as a `transformModule` for `babel` TransformRequests. `babel` transforms are powerful and versatile, giving the transformer much more insight into the structure of the source code to modify. However, they are slower than `source` transforms, and they can only work on ES Modules. |

<a name="addTransform" id="addTransform"></a>

## addTransform ⇒

Add a request to transform a file in the build. This function is passed as
the first argument to an interceptor of the `transformModules` target.

**Kind**: global typedef  
**Returns**: null

| Param | Type                                    | Description                                                                                                                  |
| ----- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| req   | [`TransformRequest`](#TransformRequest) | Instruction object for the requested transform, including the transform to apply, the target source code, and other options. |

<a name="TransformRequest" id="TransformRequest"></a>

## TransformRequest : `Object`

Instruction for configuring Webpack to apply custom transformations to one
particular file. The [`configureWebpack()` function](/pwa-buildpack/reference/configure-webpack/)
gathers TransformRequests from all interceptors of the `transformModules`
target and turns them into a configuration of Webpack [module
rules](https://v4.webpack.js.org/configuration/module/#modulerules).

**Kind**: global typedef  
**Properties**

| Name            | Type                              | Description                                                                                                                                                                                          |
| --------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type            | [`TransformType`](#TransformType) | The type of transformation to apply.                                                                                                                                                                 |
| fileToTransform | `string`                          | Resolvable path to the file to be transformed itself, the same path that you'd use in `import` or `require()`.                                                                                       |
| transformModule | `string`                          | Absolute path to the Node module that will actually be doing the transforming. This path may be resolved using different rules at different times, so it's best for this path to always be absolute. |
| [options]       | `object`                          | Config values to send to the transform function. _Note: Options should be serializable to JSON as Webpack loader options and/or Babel plugin options.._                                              |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/WebpackTools/ModuleTransformConfig.js).
