## Modules

<dl>
<dt><a href="#module_Buildpack/Utilities">Buildpack/Utilities</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#EnvVarDefinitions">EnvVarDefinitions</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Defines the global settings of the project as a list of typed environment variables.
Includes a set of changes made to the environment variables in recent versions, to aid with migration and upgrades.

`EnvVarDefinitions` are used by [`loadEnvironment()`](http://pwastudio.io/pwa-buildpack/reference/buildpack-cli/load-env/#loadenvironmentdirorenv-logger)
to validate the currently defined values in the environment.

`EnvVarDefinitions` are also used by [`createDotEnvFile()`](http://pwastudio.io/pwa-buildpack/reference/buildpack-cli/create-env-file/#createdotenvfiledirectory-options)
to generate an extensively commented `.env` file for a project.

</dd>
<dt><a href="#EnvVarDefsSection">EnvVarDefsSection</a> : <inlineCode>Object</inlineCode></dt>
<dd>

A list of related definitions concerning a particular functional area.

All defined variable names under a particular functional area should have the same prefix, to help namespace and organize configuration.
For instance, all variable names in the "Custom local origin" section begin with `CUSTOM_ORIGIN_`.

</dd>
<dt><a href="#EnvVarDefinition">EnvVarDefinition</a> : <inlineCode>Object</inlineCode></dt>
<dd>

A definition of an environment variable that will be used somewhere else in the project, in the backend and/or the frontend.

Must define a name, type and description. Optionally, may define a `default` which is set implicitly, an `example` for documentation,
and/or an array of `choices` to limit the valid values.

The recommended way to access the current environment values in build scripts and interceptors is through the
[Configuration](http://pwastudio.io/pwa-buildpack/reference/buildpack-cli/load-env/#configuration-object)
object returned by [`loadEnvironment()`](http://pwastudio.io/pwa-buildpack/reference/buildpack-cli/load-env/#loadenvironmentdirorenv-logger).

**Note:** Any build environment will have hundreds of environment variables _set_, most of which are unrelated to the build process.
Any environment variable during the build is accessible via `process.env` in NodeJS.
However, only the variables defined by `EnvVarDefinition` entries will be available in the frontend, via the [Webpack EnvironmentPlugin](https://webpack.js.org/plugins/environment-plugin/).

</dd>
<dt><a href="#EnvVarDefsChange">EnvVarDefsChange</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Describes a recent change to a particular environment variable.
Can indicate that the environment variable was _removed_ or _renamed_.
Change objects can log informative warnings to developers to help with migration.
They may also be used to make `loadEnvironment()` support the legacy name of a renamed variable.

</dd>
</dl>

<a name="module_Buildpack/Utilities" id="module_Buildpack/Utilities"></a>

## Buildpack/Utilities

<a name="EnvVarDefinitions" id="EnvVarDefinitions"></a>

## EnvVarDefinitions : `Object`

Defines the global settings of the project as a list of typed environment variables.
Includes a set of changes made to the environment variables in recent versions, to aid with migration and upgrades.

`EnvVarDefinitions` are used by [`loadEnvironment()`](http://pwastudio.io/pwa-buildpack/reference/buildpack-cli/load-env/#loadenvironmentdirorenv-logger)
to validate the currently defined values in the environment.

`EnvVarDefinitions` are also used by [`createDotEnvFile()`](http://pwastudio.io/pwa-buildpack/reference/buildpack-cli/create-env-file/#createdotenvfiledirectory-options)
to generate an extensively commented `.env` file for a project.

**Kind**: global typedef  
**Properties**

| Name     | Type                                              | Description                                                             |
| -------- | ------------------------------------------------- | ----------------------------------------------------------------------- |
| sections | [`Array.<EnvVarDefsSection>`](#EnvVarDefsSection) | List of sections, or sub-lists of definitions grouped under a title.    |
| changes  | [`Array.<EnvVarDefsChange>`](#EnvVarDefsChange)   | List of changes, or objects describing a recent change to a definition. |

<a name="EnvVarDefsSection" id="EnvVarDefsSection"></a>

## EnvVarDefsSection : `Object`

A list of related definitions concerning a particular functional area.

All defined variable names under a particular functional area should have the same prefix, to help namespace and organize configuration.
For instance, all variable names in the "Custom local origin" section begin with `CUSTOM_ORIGIN_`.

**Kind**: global typedef  
**Properties**

| Name      | Type                                            | Description                                                                     |
| --------- | ----------------------------------------------- | ------------------------------------------------------------------------------- |
| name      | `String`                                        | Title of the section, describing the functional area of the included variables. |
| variables | [`Array.<EnvVarDefinition>`](#EnvVarDefinition) | List of variable definitions.                                                   |

<a name="EnvVarDefinition" id="EnvVarDefinition"></a>

## EnvVarDefinition : `Object`

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

| Name      | Type     | Description                                                                                                                                  |
| --------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | `String` | Name of the environment variable. Must be in SCREAMING_SNAKE_CASE and contain only alphanumeric characters.                                  |
| type      | `String` | Type of the environment variable. Can be any type supported by the [envalid](https://www.npmjs.com/package/envalid#validator-types) library. |
| desc      | `String` | Human-readable description of what the environment variable does.                                                                            |
| [choices] | `Array`  | An array of acceptable answers. All values in the array must be of the type specified in `type`.                                             |
| default   | `String` | Default value if the variable is not set in the environment.                                                                                 |
| example   | `String` | Example value which will be displayed in inline documentation in the `.env` file.                                                            |

<a name="EnvVarDefsChange" id="EnvVarDefsChange"></a>

## EnvVarDefsChange : `Object`

Describes a recent change to a particular environment variable.
Can indicate that the environment variable was _removed_ or _renamed_.
Change objects can log informative warnings to developers to help with migration.
They may also be used to make `loadEnvironment()` support the legacy name of a renamed variable.

**Kind**: global typedef  
**Properties**

| Name            | Type                 | Description                                                                                                                                                                                                                    |
| --------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| type            | `String`             | `removed` or `renamed`                                                                                                                                                                                                         |
| name            | `String`             | Name of the EnvVarDefinition that was recently changed. If the change is a rename, this must be the _old_ variable name.                                                                                                       |
| reason          | `String`             | Reason given for the change. Will be logged as a warning.                                                                                                                                                                      |
| dateChanged     | `String` \| `number` | Date that the change was released, in ISO-8601 format (or any format parseable by JavaScript `Date()`.)                                                                                                                        |
| [warnForDays]   | `number`             | Number of days after `dateChanged` to log a warning if the removed or renamed variable is still set in the environment. Default, and maximum, is 180 days.                                                                     |
| [update]        | `String`             | New name of the variable. Required when the change is a rename.                                                                                                                                                                |
| [supportLegacy] | `boolean`            | If the change is a rename, set this to `true` to support the old name (while logging a warning). If the old name is set and the new name is not, `loadEnvironment` will set the new variable name to the value of the old one. |

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/Utilities/getEnvVarDefinitions.js).
