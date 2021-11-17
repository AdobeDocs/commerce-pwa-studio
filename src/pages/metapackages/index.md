---
title: Metapackages
---

# Metapackages

In PWA Studio 12.1.0, we introduced metapackages to provide a way for you to add new features to Open Source or Commerce backends to support the needs of your PWA modules. For example, in PWA Studio release 12.1.0, we used the [Open Source metapackage][] to extend the GraphQL schema to include a new mutation and new fields to provide more details when a cart item error occurs. You can use these metapackages to do the same for your projects.

## Overview

The following metapackages add new features to Open Source and Commerce backends:

- Open Source metapackage
- Commerce metapackage

## Open Source metapackage (Required for all projects)

If you are using PWA Studio release 12.1.0 or higher, you must install the Open Source metapackage into your PWA projects. The Open Source metapackage is required even if you are targeting Adobe Commerce as your backend.

See [Install Open Source metapackage][] for instructions.

## Adobe Commerce metapackage (Required for Commerce projects)

In addition to the Open Source metapackage, if you are targeting Adobe Commerce as your backend, you must also install the Adobe Commerce metapackage.

See [Install Commerce metapackage][] for instructions.

[Install Open Source metapackage]: open-source/index.md
[Install Commerce metapackage]: commerce/index.md
