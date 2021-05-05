---
title: Venia sample data
---

# Venia sample data

The [Venia demo storefront][] runs on top of a Magento 2 backend that has a specific set of sample data installed.
The sample Magento backend that developers can use also contains the same sample data set.

[venia demo storefront]: https://venia.magento.com/

![venia-sample-data](images/accessories-sample-data.png)

## Installing the Venia sample data

If you have access to your own Magento 2 backend and you want to install the Venia sample data, follow these instructions.

### Step 1. Copy or create the deploy script

Copy the [deployVeniaSampleData.sh][] script into the root directory of your Magento installation.
A copy of this script is also included when you [setup your storefront project][].

[deployveniasampledata.sh]: https://github.com/magento/pwa-studio/blob/develop/packages/venia-concept/deployVeniaSampleData.sh
[setup your storefront project]: /tutorials/setup-storefront/

### Step 2. Execute the deploy script

Execute the script in the root directory of your Magento instance to add the Venia sample data modules to Magento:

```sh
bash deployVeniaSampleData.sh
```

### Step 3. Install the sample data modules

Run the following command in the Magento root directory to install the Venia data from the modules:

```sh
bin/magento setup:upgrade
```

### Step 4. Reindex the new data

Run the following command in the Magento root directory to reindex the data from the modules:

```sh
bin/magento indexer:reindex
```

### Step 5. Verify installation

Log into the Admin section or visit the store of your Magento instance to verify the sample data installation.

![sample-data-in-luma](images/sample-data-installed.png)
