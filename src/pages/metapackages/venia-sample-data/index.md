---
title: Venia Sample Data metapackage
---

# Venia Sample Data metapackage

This metapackage contains Venia Sample Data modules you can install to help you develop your projects locally using sample data.

## Installation

1. Clone the magento2 git repository and check out the latest develop branch, such as 2.4-develop. You may also check out and use any 2.4 release tags.

    ```terminal
    git clone git@github.com:magento/magento2.git
    ```

1. Change directories to the vendor `magento2/ext` directory.

    ```terminal
    cd magento2 && mkdir ext
    ```

1. Clone the venia-sample-data-modules repository into your vendor directory within `ext`:

    ```terminal
    git clone git@github.com:magento-commerce/venia-sample-data-modules.git ext/magento/venia-sample-data-modules
    ```

1. Update Composer settings for the project to allow a better development workflow:

    ```terminal
    composer config minimum-stability dev
    ```

    -  If you don't see a composer.json entry of `prefer-stable: true`, directly above the `minimum-stability` setting, include it.
    -  Now configure Composer to find new modules. The following command configures the extension code inside the `ext` directory creates symlinks to the vendor directory:

        ```terminal
        composer config repositories.ext path "./ext/*/*/*"
        ```

1. Add the venia-sample-data-modules metapackage:

    ```terminal
    composer require magento/venia-sample-data
    ```

At this point, the venia-sample-data metapackage modules are symlinked within your vendor directory, which allows you to run Magento with additional modules and do development using git.

When you run bin/magento module: status, make sure there are no Magento Venia Sample Data modules listed as disabled. If they are, [follow the instructions on how to enable them](https://devdocs.magento.com/guides/v2.4/extension-dev-guide/build/enable-module.html).
