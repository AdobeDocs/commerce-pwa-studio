---
title: Transform Requests
---

# Transform Requests

The built-in [`transformModules`][] target is a powerful way to customize the build process for a particular file or set of files.
Many common Targets are implemented using the `transformModules` target and a custom transformer module.
Interceptors of this target receive a single function as their first argument. This is the `addTransform` function documented below.

[`transformModules`]: /api/buildpack/targets/ 

<!--
The reference doc content is generated automatically from the source code.
To update this section, update the doc blocks in the source code
-->

import Docs from '/src/data/auto-generated/pwa-buildpack/lib/WebpackTools/ModuleTransformConfig.md'

<Docs />
