---
title: Known limitations
description: Review limitations of the PWA Studio framework.
edition: paas
---

# Known limitations

The following items are known limitations to implementing PWA Studio components for Page Builder content types:

- **CMS Pages only** - Page Builder integration within PWA Studio only supports Adobe Commerce and Magento Open Source CMS Pages created with Page Builder. It does not support CMS Blocks, Product content, or Category content created with Page Builder.
- **Widgets in TinyMCE** - Widgets are not supported within content types that provide text input from the TinyMCE editor, such as Text, Banner, Slider, and HTML Code.
- **Products text alignment** - Text alignment for Products does not work within the PWA Studio gallery because the gallery is rendered with the CSS grid layout. The Alignment property (as set within the Products content type form) will always default to `Left`.
- **Extensibility** - PWA Studio currently lacks an extensibility model, which prevents Page Builder from using an existing framework / model. We can potentially use the comment based root component declaration that is baked into PWA Studio, but this will require additional work.
- **Staging and Preview** - PWA Studio does not support cache invalidation, which means Staging and Preview are not supported in Venia.
