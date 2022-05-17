---
title: Extend PWA backends
---

<InlineAlert variant="warning" slots="text"/>

As of PWA Studio v12.1.0, you must install the Magento Open Source metapackage for PWA Studio. This is now required for all PWA Studio apps. Reason: In Studio v12.1.0, we introduced the Open Source metapackage that implemented GraphQL mutations and interfaces that are not available in the core Magento Open Source releases.

# Extend PWA backends

To add new backend features and data access to your PWA storefronts, you must first install the following PWA backend packages, we call _metapackages_. Current PWA metapackages extend the Magento Open Source and sample data backends to provide additional features and data that are not provided by the core Commerce and Open Source releases.

## Install Magento Open Source metapackage (Required for all projects)

PWA Studio release 12.1.0 or higher requires the Open Source metapackage to be installed into PWA projects — even if your backend is Adobe Commerce.

See [Install Open Source metapackage][] for instructions.

## Install Venia Sample Data metapackage (Optional)

You can use this metapackage to install Venia sample data into your projects.

See [Install Sample Data metapackage][] for instructions.

[Install Venia Sample Data metapackage]: sample-data-metapackage/index.md
[Open Source metapackage]: open-source-metapackage/index.md
