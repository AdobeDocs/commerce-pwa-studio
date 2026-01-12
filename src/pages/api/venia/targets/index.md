---
title: Venia targets
description: Learn how to extend the PWA Studio framework using the Venia UI package.
jsDoc: true
---

# Venia targets

This page lists the Targets declared in the Venia UI package.

## Accessing the targets

Access these in your intercept files by calling `targets.of('@magento/venia-ui')` on the TargetProvider object.

```js
/* my-custom-interceptors.js */

module.exports = (targets) => {
  const veniaTargets = targets.of("@magento/venia-ui");
};
```

See the [PWA Studio Target Experiments][] project repository for documented examples of extensions that use PWA Studio's extensibility framework.

[pwa studio target experiments]: https://github.com/magento-research/pwa-studio-target-experiments

\<!--
The reference doc content is generated automatically from the source code.
To update this section, update the doc blocks in the source code
--\>

<Fragment src='../../../data/auto-generated/venia-ui/lib/targets/venia-ui-declare.md'/>

<Fragment src='../../../data/auto-generated/venia-ui/lib/targets/rich-content-renderer-list.md'/>
