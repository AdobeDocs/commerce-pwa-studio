## Modules

<dl>
<dt><a href="#module_Buildpack/Utilities">Buildpack/Utilities</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#EnvVarDefinitions">EnvVarDefinitions</a> : <code>Object</code></dt>
<dd><p>Defines the global settings of the project as a list of typed environment variables.
Includes a set of changes made to the environment variables in recent versions, to aid with migration and upgrades.</p>
<p><code>EnvVarDefinitions</code> are used by <a href="http://pwastudio.io/pwa-buildpack/reference/buildpack-cli/load-env/#loadenvironmentdirorenv-logger"><code>loadEnvironment()</code></a>
to validate the currently defined values in the environment.</p>
<p><code>EnvVarDefinitions</code> are also used by <a href="http://pwastudio.io/pwa-buildpack/reference/buildpack-cli/create-env-file/#createdotenvfiledirectory-options"><code>createDotEnvFile()</code></a>
to generate an extensively commented <code>.env</code> file for a project.</p>
</dd>
<dt><a href="#EnvVarDefsSection">EnvVarDefsSection</a> : <code>Object</code></dt>
<dd><p>A list of related definitions concerning a particular functional area.</p>
<p>All defined variable names under a particular functional area should have the same prefix, to help namespace and organize configuration.
For instance, all variable names in the &quot;Custom local origin&quot; section begin with <code>CUSTOM_ORIGIN_</code>.</p>
</dd>
<dt><a href="#EnvVarDefinition">EnvVarDefinition</a> : <code>Object</code></dt>
<dd><p>A definition of an environment variable that will be used somewhere else in the project, in the backend and/or the frontend.</p>
<p>Must define a name, type and description. Optionally, may define a <code>default</code> which is set implicitly, an <code>example</code> for documentation,
and/or an array of <code>choices</code> to limit the valid values.</p>
<p>The recommended way to access the current environment values in build scripts and interceptors is through the
<a href="http://pwastudio.io/pwa-buildpack/reference/buildpack-cli/load-env/#configuration-object">Configuration</a>
object returned by <a href="http://pwastudio.io/pwa-buildpack/reference/buildpack-cli/load-env/#loadenvironmentdirorenv-logger"><code>loadEnvironment()</code></a>.</p>
<p><strong>Note:</strong> Any build environment will have hundreds of environment variables <em>set</em>, most of which are unrelated to the build process.
Any environment variable during the build is accessible via <code>process.env</code> in NodeJS.
However, only the variables defined by <code>EnvVarDefinition</code> entries will be available in the frontend, via the <a href="https://webpack.js.org/plugins/environment-plugin/">Webpack EnvironmentPlugin</a>.</p>
</dd>
<dt><a href="#EnvVarDefsChange">EnvVarDefsChange</a> : <code>Object</code></dt>
<dd><p>Describes a recent change to a particular environment variable.
Can indicate that the environment variable was <em>removed</em> or <em>renamed</em>.
Change objects can log informative warnings to developers to help with migration.
They may also be used to make <code>loadEnvironment()</code> support the legacy name of a renamed variable.</p>
</dd>
</dl>

<a name="module_Buildpack/Utilities"></a>

## Buildpack/Utilities
<a name="EnvVarDefinitions"></a>

## EnvVarDefinitions : <code>Object</code>
Defines the global settings of the project as a list of typed environment variables.
Includes a set of changes made to the environment variables in recent versions, to aid with migration and upgrades.

`EnvVarDefinitions` are used by [`loadEnvironment()`](http://pwastudio.io/pwa-buildpack/reference/buildpack-cli/load-env/#loadenvironmentdirorenv-logger)
to validate the currently defined values in the environment.

`EnvVarDefinitions` are also used by [`createDotEnvFile()`](http://pwastudio.io/pwa-buildpack/reference/buildpack-cli/create-env-file/#createdotenvfiledirectory-options)
to generate an extensively commented `.env` file for a project.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| sections | [<code>Array.&lt;EnvVarDefsSection&gt;</code>](#EnvVarDefsSection) | List of sections, or sub-lists of definitions grouped under a title. |
| changes | [<code>Array.&lt;EnvVarDefsChange&gt;</code>](#EnvVarDefsChange) | List of changes, or objects describing a recent change to a definition. |

<a name="EnvVarDefsSection"></a>

## EnvVarDefsSection : <code>Object</code>
A list of related definitions concerning a particular functional area.

All defined variable names under a particular functional area should have the same prefix, to help namespace and organize configuration.
For instance, all variable names in the "Custom local origin" section begin with `CUSTOM_ORIGIN_`.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Title of the section, describing the functional area of the included variables. |
| variables | [<code>Array.&lt;EnvVarDefinition&gt;</code>](#EnvVarDefinition) | List of variable definitions. |

<a name="EnvVarDefinition"></a>

## EnvVarDefinition : <code>Object</code>
A definition of an environment variable that will be used somewhere else in the project, in the backend and/or the frontend.

Must define a name, type and description. Optionally, may define a `default` which is set implicitly, an `example` for documentation,
and/or an array of `choices` to limit the valid values.

The recommended way to access the current environment values in build scripts and interceptors is through the
[Configuration](http://pwastudio.io/pwa-buildpack/reference/buildpack-cli/load-env/#configuration-object)
object returned by [`loadEnvironment()`](http://pwastudio.io/pwa-buildpack/reference/buildpack-cli/load-env/#loadenvironmentdirorenv-logger).

**Note:** Any build environment will have hundreds of environment variables _set_, most of which are unrelated to the build process.
Any environment variable during the build is accessible via `process.env` in NodeJS.
However, only the variables defined by `EnvVarDefinition` entries will be available in the frontend, via the [Webpack EnvironmentPlugin](https://webpack.js.org/plugins/environment-plugin/).

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | Name of the environment variable. Must be in SCREAMING_SNAKE_CASE and contain only alphanumeric characters. |
| type | <code>String</code> | Type of the environment variable. Can be any type supported by the [envalid](https://www.npmjs.com/package/envalid#validator-types) library. |
| desc | <code>String</code> | Human-readable description of what the environment variable does. |
| [choices] | <code>Array</code> | An array of acceptable answers. All values in the array must be of the type specified in `type`. |
| default | <code>String</code> | Default value if the variable is not set in the environment. |
| example | <code>String</code> | Example value which will be displayed in inline documentation in the `.env` file. |

<a name="EnvVarDefsChange"></a>

## EnvVarDefsChange : <code>Object</code>
Describes a recent change to a particular environment variable.
Can indicate that the environment variable was _removed_ or _renamed_.
Change objects can log informative warnings to developers to help with migration.
They may also be used to make `loadEnvironment()` support the legacy name of a renamed variable.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | `removed` or `renamed` |
| name | <code>String</code> | Name of the EnvVarDefinition that was recently changed. If the change is a rename, this must be the _old_ variable name. |
| reason | <code>String</code> | Reason given for the change. Will be logged as a warning. |
| dateChanged | <code>String</code> \| <code>number</code> | Date that the change was released, in ISO-8601 format (or any format parseable by JavaScript `Date()`.) |
| [warnForDays] | <code>number</code> | Number of days after `dateChanged` to log a warning if the removed or renamed variable is still set in the environment. Default, and maximum, is 180 days. |
| [update] | <code>String</code> | New name of the variable. Required when the change is a rename. |
| [supportLegacy] | <code>boolean</code> | If the change is a rename, set this to `true` to support the old name (while logging a warning). If the old name is set and the new name is not, `loadEnvironment` will set the new variable name to the value of the old one. |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/Utilities/getEnvVarDefinitions.js).