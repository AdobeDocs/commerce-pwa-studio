---
title: Production launch checklist
description: Use this checklist to deploy your PWA Studio storefront to a production environment.
keywords:
  - Deploy
  - Storefront
---

# Production launch checklist

Launching a production site is the final step in the storefront development process.
Storefronts developed using PWA Studio can be deployed in a wide range of production environments.

## Overview

This topic highlights a few suggested steps that can be applied to most deployment processes.
Use the methods described in this topic to ensure your deployment is successful.

For instructions on how to deploy to the Cloud for Adobe Commerce, see the [Deploy to Adobe Commerce][] tutorial.

[deploy to adobe commerce]: /tutorials/production-deployment/adobe-commerce/

## Set your environment variables

Make sure you set your [environment variables][] according to the specific requirements of your deployment service.
For some services, you can use a `.env` file, which is what your development environment uses.
Other services require you to set environment variables through a UI or separate configuration file.

[environment variables]: /api/buildpack/environment/variables/

### Important environment variables

The following is a list of environment variables you should set in your production environment:

- `NODE_ENV` - Some scripts and processes have production specific logic, so set the value of this variable to "production".
- [`MAGENTO_BACKEND_URL`][] - Set the value of this environment variable to your **production** Adobe Commerce or Magento Open Source backend instance.
- [`CHECKOUT_BRAINTREE_TOKEN`][] - Set this value to the BrainTree token associated with your **production** backend instance.

[`magento_backend_url`]: /api/buildpack/environment/variables/#magento_backend_url
[`checkout_braintree_token`]: /api/buildpack/environment/variables/#checkout_braintree_token

## Create a production build

The PWA Studio development server is optimized for rapid development,
but the generated sites, while closely resembling a production version of the site, are not optimized for production.
Instead of serving your storefront from the source, you need to create a production build of your project.

Use the following command to build the production files to the `dist` directory:

```sh
yarn build
```

## Run the server

Your deployment service must support node processes in order to run the following command:

```sh
yarn start
```

This command starts a production UPWARD-JS server that runs your production build.

## Remove development packages

Edit your project's `package.json` file and remove any packages you only use in your development environment. For example, the `venia-sample-backends` is an extension included in projects built using the scaffolding tool.

## Audit with Lighthouse

[Lighthouse][] is a web developer tool that audits your website.
It checks the quality of your site by measuring performance, accessibility, SEO, and whether it qualifies as a progressive web application.

[lighthouse]: https://developers.google.com/web/tools/lighthouse/

The tool scores your site on how well it performs and creates a report with suggestions on how to improve your Lighthouse scores.
Use the report from Lighthouse to identify opportunities for improvement in your storefront to make sure you are launching an accessible and performant progressive web application.

Lighthouse is available through Chrome's DevTools, as a command line script, as a Node module, or from the web.
See the [Lighthouse][] page for detailed instructions on how to use each form of the tool.
