---
title: Multiple Sites with UPWARD
---

# Multiple websites with UPWARD

This topic describes how to configure your UPWARD server to run multiple PWA sites from a single Magento Open Source or Adobe Commerce backend.

## The UPWARD connector module

When you use the PWA scaffolding tool to create a PWA Studio project, one of the many modules installed is the UPWARD PHP connector module—`magento2-upward-connector`. This module provides a CLI to help you configure different PWA sites to run from a single Commerce or Open Source server.

## Configuring the UPWARD server

The first step is to configure the UPWARD server to access the different PWA sites you want to deploy. And the CLI provided by the UPWARD module is how you do it. 

But before we get to the specifics, here's the overview of what you are actually doing. When you execute the CLI commands, you're actually adding `pwa_paths` to the `env.php` file. The commands specify the paths to the `upward.yml` configuration for each PWA site you want to deploy. The following  example shows what an `env.php` configuration file may look like AFTER using the CLI to add two different PWA sites to the `default` and `website` configurations:

```php
// ...
'downloadable_domains' => [
    // ...
],
# New configuration point
'pwa_path' => [
    'default' => [
        'default' => '/var/www/html/my-pwa-site/dist/upward.yml'
    ],
    'website' => [
        '<website_code>' => '/var/www/html/my-awesome-pwa-site/dist/upward.yml'
    ],
    'store' => [
        '<store_code>' => '' # Setting an empty string (or `false` value) will serve the specified default site (my-pwa-site)
    ]
]
```

## Using UPWARD CLI commands

The UPWARD module commands provide a convenient way to configure the server to deploy different PWA sites. The following examples show common usage patterns.

**Set UPWARD paths with `scopeType` and `scopeCode`:**

```shell
bin/magento pwa:upward:set --path /var/www/html/pwa/dist/upward.yml --scopeType store --scopeCode <store_code>
```

To find the paths of your PWA sites (by scope) as shown above for the store scope, use one of the following commands:
-  `bin/magento store:list` (for store scope)
-  `bin/magento store:website:list` (for store and website scopes)

Paths to `upward.yml` can be relative: `pwa/dist/upward.yml` or absolute: `/var/www/html/pwa/dist/upward.yml`.

To serve the default store front (non-PWA), use an empty string:

```shell
bin/magento pwa:upward:set
```

The UPWARD path configurations work the same as other store configurations: The config settings fall up in scope from `store` > `website` > `global` (default), trying to serve the most specific, available site scope first.

## Creating multiple bundles

You can also generate unique bundles per website within a single scaffolded project.

For example, if you want to deploy both French and German versions of your site, you could use the following commands to configure your UPWARD server:

```shell
MAGENTO_BACKEND_URL=https://french.mysite.mg yarn build
mv dist dist-french
MAGENTO_BACKEND_URL=https://german.mysite.mg yarn build
mv dist dist-german
 
# copy these bundles to your Magento root and set configuration variables
bin/magento pwa:upward:set --path ./dist-french/upward.yml --scopeType website --scopeCode fr
bin/magento pwa:upward:set --path ./dist-german/upward.yml --scopeType website --scopeCode de
```

With this configuration, a single UPWARD server can process requests for many different website bundles.

