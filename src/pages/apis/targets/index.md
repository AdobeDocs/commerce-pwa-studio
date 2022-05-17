---
title: Targets
jsDoc: true
---

# Targets

Information on the Venia and Peregrine Targets is provided here.

## Venia Targets

Access Venia targets in your intercept files by calling `targets.of('@magento/venia-ui')` on the TargetProvider object.

```js
/* my-custom-interceptors.js */

module.exports = (targets) => {
  const veniaTargets = targets.of("@magento/venia-ui");
};
```

See the [PWA Studio Target Experiments][] project repository for documented examples of extensions that use PWA Studio's extensibility framework.

[pwa studio target experiments]: https://github.com/magento-research/pwa-studio-target-experiments

<!--
The reference doc content is generated automatically from the source code.
To update this section, update the doc blocks in the source code
-->

import Declare from '/src/data/auto-generated/venia-ui/lib/targets/venia-ui-declare.md'
import RichContentRendererList from '/src/data/auto-generated/venia-ui/lib/targets/RichContentRendererList.md'

<Declare />

<RichContentRendererList />

<!-- Peregrine Targets -->

## Peregrine targets

Peregrine targets provide access to the custom React hooks and talons used in UI components.

## Accessing the Peregrine targets

Access these targets in your intercept files by calling `targets.of('@magento/peregrine')` on the TargetProvider object.

```js
/* my-custom-interceptors.js */
module.exports = (targets) => {
  const peregrineTargets = targets.of("@magento/peregrine");
};
```

See the [PWA Studio Target Experiments][] project repository for documented examples of extensions that use PWA Studio's extensibility framework.

[pwa studio target experiments]: https://github.com/magento-research/pwa-studio-target-experiments

## Wrapper modules

You can extend the functionality of Peregrine's custom hooks and talons by applying wrapper modules.

The `talon.wrapWith(module)` method is simlar to the [interceptor pattern][] used in Magento backend plugins.
Peregrine will dynamically inject the code from the passed `module` "around" the implementation of a talon, by passing the talon function through the wrapper function before exporting it.

[interceptor pattern]: https://devdocs.magento.com/getstarted/v2.4/extension-dev-guide/plugins.html

See the [Modify talon results][] tutorial for step-by-step instructions on working with wrapper modules.

[modify talon results]: /tutorials/targets/modify-talon-results/

### Requirements

Wrapper modules for Peregrine must:

- be implemented in a separate file from the build-time Target code
- be accessible in frontend code via an `import`
- be a valid ES Module
- export one default function that implements the same interface, i.e. it receives the original talon function as its parameter and must return a new talon function

Extensions which use wrapper modules _must_ also intercept the [Buildpack `specialFeatures` target][] and set the feature flag `esModule: true`.

[buildpack `specialfeatures` target]: /api/buildpack/targets/

<!--
The reference doc content is generated automatically from the source code.
To update this section, update the doc blocks in the source code
-->

import Targets from '/src/data/auto-generated/peregrine/lib/targets/peregrine-declare.md'

<Targets />
