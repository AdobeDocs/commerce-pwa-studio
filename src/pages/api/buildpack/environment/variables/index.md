---
title: Environment variables
---

# Environment variables

Environment variable definitions are used for validation and documentation of the [configuration management system][] in PWA Studio.
Build scripts normally use the [values set in the current environment][], but it is sometimes necessary to use the definitions themselves, such as when an extension defines its own global config variables.

[configuration management system]: /guides/general-concepts/configuration/
[values set in the current environment]: /api/buildpack/cli/load-environment-file/

## Access environment variable definition object

There are two ways to access the environment variable definitions object:

-    Third-party code should use the builtin target [`envVarDefinitions`][] when adding definitions.
-    Core Buildpack code uses [`getEnvVarDefinitions()`][], which builds environment variable definitions for the project.
     It starts with core variables listed below and then calls the `envVarDefinitions` target so installed extensions can add their own variables.

[`envvardefinitions`]: /api/buildpack/environment/definition-object/
[`getenvvardefinitions()`]: https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/lib/Utilities/getEnvVarDefinitions.js

<!--
The reference doc content is generated automatically from the source code.
To update this section, update the doc blocks in the source code
-->

import Docs from '/src/data/auto-generated/buildpack/reference/envVarDefinitions.md'

<Docs />
