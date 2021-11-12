---
title: Venia Sample Data metapackage
---

# Venia Sample Data metapackage

This metapackage contains Venia Sample Data modules you can install to help you develop your projects locally using sample data.

## Installation as a git-based composer package

1. Clone the magento2 git repository and check out the latest develop branch, such as 2.4-develop. You may also check out and use any 2.4 release tags.

  ```
  git clone git@github.com:magento/magento2.git
  ```

1. FIX: Change directories to the vendor `magento2/ext` directory.

  ```
  FIX: cd magento2 && mkdir ext
  ```

1. Clone the venia-sample-data-modules repository into your vendor directory within `ext`:

  ```
  MAGENTO-COMMERCE NOT ACCESSIBLE: git clone git@github.com:magento-commerce/venia-sample-data-modules.git ext/magento/venia-sample-data-modules
  ```

1. REMOVE OR MOVE ELSEWHERE: Update Composer settings for the project to allow a better development workflow:

- minimum-stability for packages is updated to dev value. This allows installation of development modules:

  ```
  composer config minimum-stability dev
  ```

- To be able to work with stable packages enable the prefer-stable property: prefer-stable: true. It should be included right above the minimum-stability setting.
- Next we configure Composer so that it knows where to find new modules. The following command will configure any extension code inside the ext directory to be treated as a package and symlinked to the vendor directory:

  ```
  composer config repositories.ext path "./ext/*/*/*"
  ```

1. Finally, install the venia-sample-data-modules metapackage:

  ```
  composer require magento/venia-sample-data
  ```

At this point, all of the venia-sample-data metapackage modules are symlinked inside the vendor directory, which allows both running a Magento installation with additional modules as well as doing development using the standard git workflow.

You may need to ensure that there are no Magento Venia Sample Data\* modules are listed as disabled when you run bin/magento module:status. If they are, [follow the docs on how to enable modules](https://devdocs.magento.com/guides/v2.4/extension-dev-guide/build/enable-module.html).

MOVE THE REST OF THIS ELSEWHERE:

### Setting up Git workflow

In order to improve the developer experience when working with this repository structure, a few additional items may be configured:

1. Exclude ext directories from root directory Git:

```
echo ext >> ./.git/info/exclude
```

1. Skip root directory composer.\* files to avoid committing them by mistake:

```
git update-index --skip-worktree composer.json && git update-index --skip-worktree composer.lock
```

This operation is reversible, if needed:

```
git update-index --no-skip-worktree composer.json && git update-index --no-skip-worktree composer.lock
```

## Cloud deployment extension installation

1. Add https://repo.magento.com as a composer repository by adding the following to your cloud instances composer.json file

```json
"repositories": {
    "repo": {
        "type": "composer",
        "url": "https://repo.magento.com"
    }
},
```

1. Require in magento/venia-sample-data meta package by adding the following to your cloud instances composer.json file

```json
"require": {
        "magento/venia-sample-data": "0.0.1"
    },
```

1. Run `composer update` to update your composer.lock file

1. Push the changes and deploy your instance.