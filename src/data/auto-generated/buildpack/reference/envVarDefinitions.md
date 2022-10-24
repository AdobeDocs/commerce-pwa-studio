## Connecting to a Magento store

### `MAGENTO_BACKEND_URL`

**Type:** `url`

**Example:** `https://master-7rqtwti-mfwmkrjfqvbjk.us-4.magentosite.cloud/`

Connect to an instance of Magento 2.3 by specifying its public domain name.

## Magento Store Edition

### `MAGENTO_BACKEND_EDITION`

**Type:** `str`

**Default:** `AC`

**Example:** `AC`

Specify the edition of the magento store (Adobe Commerce or Magento Open Source). Can be one of MOS or AC.

## Magento Store View

### `STORE_VIEW_CODE`

**Type:** `str`

Specify the Magento store view code set in Stores > Settings > All Stores > Store View name

### `USE_STORE_CODE_IN_URL`

**Type:** `bool`

Includes the store code in the store URLs if value is true.

## Image Optimizing Origin

### `IMAGE_OPTIMIZING_ORIGIN`

**Type:** `str`

**Default:** `auto`

Specify the origin to use for images in the UI. Set to \`backend\` when Fastly or another CDN is optimizing images, and the frontend will load images directly from the Magento instance at MAGENTO_BACKEND_URL. To force usage of the onboard image optimizer, set to \`onboard\`. Set to \`auto\` to autodetect whether the backend is using FastlyIO and optimize onboard only if it needs to.

## Default Country

### `DEFAULT_COUNTRY_CODE`

**Type:** `str`

**Default:** `US`

Specify the default country to be selected in forms containing country field such as address books and shipping information forms.

## Custom local origin

### `CUSTOM_ORIGIN_ENABLED`

**Type:** `bool`

**Default:** `true`

Get or create a secure, unique hostname/port combination and a trusted SSL certificate for local development.

### `CUSTOM_ORIGIN_ADD_UNIQUE_HASH`

**Type:** `bool`

**Default:** `true`

Add a unique hash string to the custom origin, based on filesystem location. This naturally separates domains when running multiple project folders on one developer machine.

### `CUSTOM_ORIGIN_SUBDOMAIN`

**Type:** `str`

Specify the subdomain prefix of the custom origin manually, instead of using the package name.

### `CUSTOM_ORIGIN_EXACT_DOMAIN`

**Type:** `str`

Specify the exact domain of the custom origin manually.

## Development server

### `DEV_SERVER_HOST`

**Type:** `str`

Specify the hostname the dev server should bind to. If this is set, it overrides the host chosen by custom origin settings.

### `DEV_SERVER_PORT`

**Type:** `num`

Specify the port the dev server should bind to. If this is set, it overrides the port chosen by custom origin settings.

### `DEV_SERVER_SERVICE_WORKER_ENABLED`

**Type:** `bool`

Use a service worker in developer mode (PWADevServer), which are disabled in dev mode normally to simplify cache. Good for debugging.

### `DEV_SERVER_WATCH_OPTIONS_USE_POLLING`

**Type:** `num`

Set to a number greater than 0 to denote a polling interval in milliseconds. If this is greater than 0, the dev server will use filesystem polling instead of native filesystem events to watch for changes. Can increase CPU usage, but sometimes is the best option for exotic filesystems (e.g. NFS).

## Staging server

### `STAGING_SERVER_HOST`

**Type:** `str`

Specify the hostname the staging server should bind to. If this is set, it overrides the host chosen by custom origin settings.

### `STAGING_SERVER_PORT`

**Type:** `num`

Specify the port the staging server should bind to. If this is set, it overrides the port chosen by custom origin settings.

### `STAGING_BUILD_ID`

**Type:** `str`

Specify the id which Buildpack will put in a comment above all generated bundle files and the index.html file

## Onboard image optimization service

### `IMAGE_SERVICE_CACHE_EXPIRES`

**Type:** `str`

**Default:** `1 hour`

**Example:** `5 minutes`

Lifetime of images in the local cache of resized images. Format is "\[length] \[unit]", as in "10 minutes" or "1 day".

### `IMAGE_SERVICE_CACHE_DEBUG`

**Type:** `bool`

Log image cache debug info to the console.

## UPWARD server settings

### `UPWARD_JS_UPWARD_PATH`

**Type:** `str`

**Default:** `upward.yml`

UPWARD configuration file to use for the PWADevServer and the "stage:venia" sample server.

### `UPWARD_JS_BIND_LOCAL`

**Type:** `bool`

**Default:** `true`

Upon launching the staging server, automatically attach to a local port and listen.

### `UPWARD_JS_LOG_URL`

**Type:** `bool`

**Default:** `true`

Log the bound URL to stdout once the sever is listening. Useful in testing and discovery scenarios, but may be disabled in production.

## Checkout and payment settings

### `CHECKOUT_BRAINTREE_TOKEN`

**Type:** `str`

**Example:** `sandbox_8yrzsvtm_s2bg8fs563crhqzk`

Specify a Braintree API token to direct the Venia storefront to communicate with your Braintree instance. You can find this value in Braintree's Control Panel under Settings > API Keys > Tokenization Keys.

## BuildBus and targets

### `BUILDBUS_DEPS_ADDITIONAL`

**Type:** `str`

A list of resolvable NPM modules that BuildBus will scan for targets, in addition to those declared in project \`dependencies\` and \`devDependencies\`.

## Custom HTTPS certificates

### `CUSTOM_HTTPS_KEY`

**Type:** `str`

Absolute path to the custom HTTPS certificate key file.

### `CUSTOM_HTTPS_CERT`

**Type:** `str`

Absolute path to the custom HTTPS certificate cert file.

## Express compression settings

### `ENABLE_EXPRESS_SERVER_COMPRESSION`

**Type:** `bool`

Specify if express server compression needs to be enabled. Defaults to false if not provided.
