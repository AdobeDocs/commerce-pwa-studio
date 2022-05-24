---
title: Frequently Asked Questions
---

# Frequently Asked Questions

This page lists frequently asked questions about PWA Studio.
If you have a question that is not answered on this page, try asking in our [#pwa Slack channel][].

[#pwa slack channel]: https://magentocommeng.slack.com/archives/C71HNKYS2

## How do I get started with PWA Studio

If you are developing a new storefront, the [Tutorials][] sections provides an introduction to the different concepts and features of PWA Studio.

[tutorials]: /tutorials/

If you want to learn about the technologies and concepts behind PWA Studio, the [Getting Started][] section of this site provides background information about this project.

[getting started]: /getstarted/

If you are interested in looking at the project source or contributing to the project, check out the [project repository][].

[project repository]: https://github.com/magento/pwa-studio

## Does PWA Studio support server-side rendering (SSR)

Yes, PWA Studio provides tools that support both server-side and client-side rendering strategies.
For more information on content rendering support, see the [Content Rendering][] topic.

[content rendering]: /getstarted/general-concepts/content-rendering/

Community members have also suggested the following tools and services to address SEO and SSR needs:

- [SeoSnap][]
- [Prerender.io][]

[seosnap]: https://seosnap.io/
[prerender.io]: https://prerender.io/

## How do I customize a new storefront project

The Tutorials section of this site contains a number of tutorials which cover customizations such as:

- [How to add a static route][]
- [How to modify the site footer][]

[how to add a static route]: /tutorials/basic-modifications/add-static-route/
[how to modify the site footer]: /tutorials/basic-modifications/modify-footer/

## Which payment methods does PWA Studio support

PWA Studio supports Braintree payments out of the box in its Venia storefront implementation.
The project also supports adding other payment methods to a storefront project, but
it requires additional implementation for the storefront developer.

## How do I deploy to production

A storefront uses an UPWARD server as the backend for the frontend code.
PWA Studio provides two different UPWARD server implementations, UPWARD-JS and UPWARD-PHP.

UPWARD-JS is a node implementation of an UPWARD server.
It is used during storefront development when you use the `yarn watch` command, but
you can use it for production by calling `yarn build` to generate production assets and `yarn start` to start a server.

UPWARD-PHP is a PHP implementation of an UPWARD server.
It is a dependency of the [Magento 2 UPWARD connector module][], which lets you run an UPWARD server on the same machine as your Adobe Commerce or Magento Open Source instance.
See the [Deploy to Adobe Commerce][] tutorial to learn how to deploy your storefront to an Adobe Commerce service in the Cloud.

[magento 2 upward connector module]: https://github.com/magento/magento2-upward-connector
[deploy to adobe commerce]: /tutorials/production-deployment/adobe-commerce/

## Can I use Windows with PWA Studio for development

Developing with PWA Studio in Windows is not supported because of its incompatibility with some of the project's dependencies.

Currently, the PWA Studio core team does not have the bandwidth to develop and maintain a Windows development solution, but
community members have suggested the following workarounds:

- Using Docker to spin up a Linux environment
- Using the [Windows Subsystem for Linux][]

[windows subsystem for linux]: https://docs.microsoft.com/en-us/windows/wsl/install-win10

## How can I query other stores via GraphQL

To let the storefront query a specific store view in the Adobe Commerce or Magento Open Source backend, you need to add the store code to these two files:

- [packages/peregrine/lib/Router/resolveUnknownRoute.js][]

  - Add `Store: YOUR_STORE_CODE`

- [packages/venia-ui/lib/drivers/adapter.js][]

  - Add `headers:{ Store: YOUR_STORE_CODE }`

[packages/peregrine/lib/router/resolveunknownroute.js]: https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/Router/resolveUnknownRoute.js#L97
[packages/venia-ui/lib/drivers/adapter.js]: https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/drivers/adapter.js#L120

## Image component loads wrongly sized images from the srcSet

When you use the `<Image/>` component from `venia-ui`, change the following values:

- [packages/venia-ui/lib/util/images.js][]

  - Change `DEFAULT_WIDTH_TO_HEIGHT_RATIO` to match your image ratio.
  - Change the values in the `imageWidths` mapping to better fit your dimensions.

- [packages/venia-ui/lib/components/gallery/item.js][]

  - Supply the `<Image />` component with a `widths` prop as shown in the GalleryItem component defined in the linked file.

[packages/venia-ui/lib/util/images.js]: https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/util/images.js#L6
[packages/venia-ui/lib/components/gallery/item.js]: https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Gallery/item.js#L18

<InlineAlert variant="info" slots="text"/>

_**Note:** For testing, resize the viewport manually instead of using the native device emulator in Chrome, which gives incorrect values._

## How to bypass `css-loader` for external css files

In your React compotent, bypass the style-loader with:

```js
// ... Addtional imports

import '!style-loader!css-loader!@my-external-module/import.css';

const myExternalDropIn = props => {
//... your ui logic
}
```
