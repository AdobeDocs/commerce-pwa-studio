---
title: Multiple Sites with UPWARD
description: Learn how to run multiple PWA Studio storefronts from a single Adobe Commerce or Magento Open Source backend. 
---

This guide describes how to configure your UPWARD server to run multiple PWA sites from a single backend, enabling you to serve different stores, regions, or languages with separate PWA experiences.

## Overview

The UPWARD connector module (`magento2-upward-connector`) provides CLI tools to configure different PWA sites at the store, website, or global scope level. When you run the CLI commands, you add `pwa_paths` to the `env.php` file that specifies the paths to each PWA site's `upward.yml` configuration.

### Configuration Scope Hierarchy

Path configurations follow the standard scope hierarchy, serving the most specific available site first:

```text
store > website > default (global)
```

---

## Step 1: Prepare Your Environment Variables

Create environment-specific configuration for each store you want to build.

**Example .env files:**

**.env.french**

```bash
MAGENTO_BACKEND_URL=https://french.yoursite.com
STORE_VIEW_CODE=french
```

**.env.german**

```bash
MAGENTO_BACKEND_URL=https://german.yoursite.com
STORE_VIEW_CODE=german
```

---

## Step 2: Build PWA Bundles for Each Store

Build separate bundles for each storefront with their specific backend configurations.

### Option A: Using Environment Files

```bash
cd /path/to/your/pwa-project

# Build French store
cp .env.french .env
yarn build
mv dist dist-french

# Build German store
cp .env.german .env
yarn build
mv dist dist-german

# Build default store
cp .env.default .env
yarn build
mv dist dist-default
```

### Option B: Using Inline Environment Variables

```bash
# Build French store
MAGENTO_BACKEND_URL=https://french.yoursite.com yarn build
mv dist dist-french

# Build German store
MAGENTO_BACKEND_URL=https://german.yoursite.com yarn build
mv dist dist-german

# Build default store
MAGENTO_BACKEND_URL=https://yoursite.com yarn build
mv dist dist-default
```

{: .bs-callout .bs-callout-tip }
**Tip:** You can automate this process by creating a build script that iterates through your store configurations.

---

## Step 3: Deploy PWA Bundles

Copy your built PWA bundles to your server where they can be accessed by the UPWARD connector.

```bash
# Example deployment to server
scp -r dist-french user@server:/var/www/html/pwa-bundles/
scp -r dist-german user@server:/var/www/html/pwa-bundles/
scp -r dist-default user@server:/var/www/html/pwa-bundles/
```

{: .bs-callout .bs-callout-warning }
**Important:** Ensure the web server user has read permissions on these directories.

---

## Step 4: Configure UPWARD Paths

Use the UPWARD CLI to configure which bundle to serve for each store.

### Set Default PWA Site

```bash
cd /path/to/magento/root
bin/magento pwa:upward:set --path /var/www/html/pwa-bundles/dist-default/upward.yml
```

### Set Store-Specific PWA Sites

```bash
# French store
bin/magento pwa:upward:set \
  --path /var/www/html/pwa-bundles/dist-french/upward.yml \
  --scopeType store \
  --scopeCode french

# German store
bin/magento pwa:upward:set \
  --path /var/www/html/pwa-bundles/dist-german/upward.yml \
  --scopeType store \
  --scopeCode german
```

### Set Website-Specific PWA Sites

```bash
bin/magento pwa:upward:set \
  --path /var/www/html/pwa-bundles/dist-europe/upward.yml \
  --scopeType website \
  --scopeCode europe_site
```

{: .bs-callout .bs-callout-info }
**Note:** Paths can be relative (`pwa/dist/upward.yml`) or absolute (`/var/www/html/pwa/dist/upward.yml`).

### Serving Non-PWA Storefronts

To serve a traditional storefront (non-PWA) for a specific store, use an empty string:

```bash
bin/magento pwa:upward:set --scopeType store --scopeCode traditional_store
```

---

## Step 5: Verify Configuration

Check your configuration in the `env.php` file:

```bash
cat app/etc/env.php
```

You should see a `pwa_path` section like this:

```php
'pwa_path' => [
    'default' => [
        'default' => '/var/www/html/pwa-bundles/dist-default/upward.yml'
    ],
    'website' => [
        'europe_site' => '/var/www/html/pwa-bundles/dist-europe/upward.yml'
    ],
    'store' => [
        'french' => '/var/www/html/pwa-bundles/dist-french/upward.yml',
        'german' => '/var/www/html/pwa-bundles/dist-german/upward.yml'
    ]
]
```

---

## Step 6: Test Your Setup

Clear cache and test each storefront:

```bash
bin/magento cache:clean
bin/magento cache:flush
```

### Testing Checklist

1. Access each store URL in your browser
2. Verify the correct PWA bundle loads by checking the Network tab in DevTools
3. Test store-specific features (language, currency, products)
4. Verify service worker registration
5. Test offline functionality

---

## Creating Multiple Bundles - Complete Example

Here's a complete workflow for deploying French and German storefronts:

```bash
cd /path/to/your/pwa-project

# Build French bundle
MAGENTO_BACKEND_URL=https://french.mysite.com yarn build
mv dist dist-french

# Build German bundle
MAGENTO_BACKEND_URL=https://german.mysite.com yarn build
mv dist dist-german

# Copy bundles to server
scp -r dist-french user@server:/var/www/html/magento/pwa/
scp -r dist-german user@server:/var/www/html/magento/pwa/

# SSH to server and configure
ssh user@server
cd /var/www/html/magento

bin/magento pwa:upward:set \
  --path ./pwa/dist-french/upward.yml \
  --scopeType website \
  --scopeCode fr

bin/magento pwa:upward:set \
  --path ./pwa/dist-german/upward.yml \
  --scopeType website \
  --scopeCode de

bin/magento cache:flush
```

With this configuration, a single UPWARD server can process requests for multiple website bundles.

---

## Troubleshooting

### Wrong PWA Site Loads

**Issue:** The wrong bundle loads for a specific store.

**Solution:** Verify the scope hierarchy. Store-level configuration takes precedence over website and default.

```bash
cat app/etc/env.php | grep -A 20 "pwa_path"
```

### 404 Errors for Resources

**Issue:** Assets return 404 errors.

**Solution:** Verify file paths exist and have correct permissions.

```bash
ls -la /var/www/html/pwa-bundles/dist-french/upward.yml
sudo -u www-data cat /var/www/html/pwa-bundles/dist-french/upward.yml
```

### Changes Not Reflected

**Issue:** Configuration changes don't take effect.

**Solution:** Clear the configuration cache.

```bash
bin/magento cache:clean config
bin/magento cache:flush
```

### Wrong Backend URL in Bundle

**Issue:** Bundle connects to incorrect backend.

**Solution:** Verify environment variables and rebuild.

```bash
# Verify what's in the bundle
grep -r "yoursite.com" dist-french/

# Rebuild with correct URL
MAGENTO_BACKEND_URL=https://correct-backend.com yarn build
```
