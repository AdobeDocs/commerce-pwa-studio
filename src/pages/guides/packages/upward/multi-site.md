---
title: Multiple Sites with UPWARD
---

# Multiple websites with UPWARD

Setting up a PWA site with a Magento Open Source/Adobe Commerce backend is a straightforward process. This topic discusses how to serve multiple PWA sites through a single backend.

## The UPWARD connector module

PWA Studio 12.2.0 ships with the `magento2-upward-connector` extension. This module allows the running of multiple PWA instances off a Magento/Adobe Commerce instance. It also provides CLI commands to enable and configure these instances.

This module works by adding a directive to `env.php` which sets a path to the `upward.yaml` file.

```php
// ...
'downloadable_domains' => [
    // ...
],
# New configuration point
'pwa_path' => [
    'default' => [
        'default' => '/var/www/html/pwa/dist/upward.yml'
    ],
    'website' => [
        '<website_code>' => '/var/www/html/anotherpwa/dist/upward.yml'
    ],
    'store' => [
        '<store_code>' => '' # Use a blank string (or false) to serve the default Magento storefront
    ]
]
```

### CLI usage

Use the CLI commands to set the parameters for your PWA store.
This example sets the path to the UPWARD yaml file and provides the `scopeType` and `scopeCode` values.

```shell
bin/magento pwa:upward:set --path /var/www/html/pwa/dist/upward.yml --scopeType store --scopeCode <store_code>
```

You can use `bin/magento store:list` or `bin/magento store:website:list` to retrieve the store/website values.

Paths to `upward.yml` can be relative: `pwa/dist/upward.yml` or absolute: `/var/www/html/pwa/dist/upward.yml`.

To serve the default store front (non-PWA), use an empty string:

```shell
bin/magento pwa:upward:set
```

The configuration works the same way as a normal store configuration: It falls back from store view > website > global (default), trying to serve the most specific available scope first.

## Creating multiple bundles

It is possible to generate unique bundles per website within a single scaffold.

```shell
MAGENTO_BACKEND_URL=https://french.mysite.mg yarn build
mv dist dist-french
MAGENTO_BACKEND_URL=https://german.mysite.mg yarn build
mv dist dist-german
 
# copy these bundles to your Magento root and set configuration variables
CONFIG__WEBSITES__FRENCH__WEB__UPWARD__PATH=./dist-french/upward.yml
CONFIG__WEBSITES__GERMAN__WEB__UPWARD__PATH=./dist-german/upward.yml
```

A single UPWARD server is capable of processing requests for each website bundle.

