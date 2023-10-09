---
title: Webpack tools
description: Review developer resources for webpack tools in the Buildpack package of the PWA Studio framework.
---

# Webpack tools

[Webpack][] is a library used during the build process to transform your source code into static bundles.
The Buildpack package provides different tools that give you access to this process and let you make changes.

[webpack]: https://webpack.js.org/

<DiscoverBlock width="100%" slots="heading, link, text"/>

## List of tools

[Configure Webpack](/api/buildpack/webpack/configure/)

A function to that returns the default PWA Studio Webpack configuration.

<DiscoverBlock width="100%" slots="link, text"/>

[Magento resolver](/api/buildpack/webpack/magento-resolver/)

Provides a configuration that helps resolve static Magento assets.

<DiscoverBlock width="100%" slots="link, text"/>

[Magento root components plugin](/api/buildpack/webpack/magento-root-components-plugin/)

Webpack plugin for creating chunks based on root components.

<DiscoverBlock width="100%" slots="link, text"/>

[PWA development server](/api/buildpack/webpack/dev-server/)

A utility for configuring Webpack's development server specifically for PWA Studio development.

<DiscoverBlock width="100%" slots="link, text"/>

[Service worker plugin](/api/buildpack/webpack/service-worker/)

Webpack plugin for configuring the service worker.
