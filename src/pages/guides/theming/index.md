---
title: Theming for PWA Studio apps
---

# Theming PWA Studio apps

When creating a new PWA Studio app with [@magento/create-pwa](https://www.npmjs.com/package/@magento/create-pwa), theming is configured out of the box to use Tailwind CSS. The CLI installs all the supporting Tailwind CSS packages and configuration files described below. For a PWA Studio app that was not scaffolded with the CLI, this topic describes how to configure your app for theming with Tailwind CSS.

## Step 1: Install packages

Install the following packages using `npm install` or `yarn add` as follows:

```bash
yarn add -D tailwindcss@~2.2.19 postcss@~8.3.11 postcss-loader@~4.3.0 autoprefixer@latest
```

- **tailwindcss** — v2.2.x patch release of the Tailwind CSS framework ([npm package](https://www.npmjs.com/package/tailwindcss/v/2.2.19))
- **postcss** — v8.3.x patch release for installing Tailwind as a PostCSS plugin ([npm package](https://www.npmjs.com/package/postcss/v/8.3.11))
- **postcss-loader** — v4.3.x patch release for loading PostCSS as a Webpack loader ([npm package](https://www.npmjs.com/package/postcss-loader/v/4.3.0))
- **autoprefixer** — Latest release for adding vendor prefixes to CSS rules ([npm package](https://www.npmjs.com/package/autoprefixer))

After installation, your `package.json` file should contain the following entries:

```json
// package.json

"devDependencies": {
  "autoprefixer": "~10.3.7",
  "postcss": "~8.3.11",
  "postcss-loader": "~4.3.0",
  "tailwindcss": "~2.2.19",
```

## Step 2: Add configuration files

As mentioned above, if you created your app with a recent version of the `create-pwa` CLI, these files are added and configured for you. If you did not, you must add and configure them manually as described in this step. These are the configuration files you need to add:

- **src/index.css** — For Tailwind's global base CSS
- **tailwind.config.js** — For Tailwind's configuration, overrides, and extensions
- **postcss.config.js** — For adding the `tailwindcss` package as a postCSS plugin

The purpose and contents of these files are described next.

### Add index.css

The `index.css` file uses the `@tailwind` directive to include all of Tailwind's base, component, and utility style [layers](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer). To get started, add the following three lines to the `index.css` file.

The `create-pwa` CLI adds and configures this file as follows:

```sass
// index.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```

These directives load the three Tailwind [layer files](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer) from the `tailwindcss` package installed in `node_modules`, as shown here:

- `tailwindcss/dist/base.css` (normalizing styles, 500+ lines of CSS)
- `tailwindcss/dist/components.css` (component classes, 200+ lines of CSS)
- `tailwindcss/dist/utilities.css` (utility classes, 175K+ lines of CSS)

The `base.css` layer contains the most basic styles for resetting or normalizing styles across browsers. The `components.css` layer is for component-level classes, like `.button` or `.form`. By default, Tailwind provides a single `.container` class within multiple `@media` queries. This file provides a good starter template for adding your own component-level classes. Finally, the `utilities.css` layer contains all the Tailwind utility classes used directly within elements.

### Update index.js

To use the `index.css` file, you need to `import` it into the `src/index.js` file. 

The `create-pwa` CLI adds this import as follows:

```js
// src/index.js

import './index.css';
```

Importing the `index.css` ensures that your app uses the base set of Tailwind styles and utility classes. After that, you can add your own custom themes and styles to extend or override those base styles using the `tailwind.config.js` described next.

### Add tailwind.config.js

The `tailwind.config.js` file is where you configure Tailwind and, most importantly, override and extend its base styles. Instead of adding this file manually to the root of your project, you can run the following command to generate a minimal default configuration file:

```terminal
npx tailwindcss init
```

After running `init`, your project root should contain a `tailwind.config.js` file with the following contents:

```js
// tailwind.config.js (default)

module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

However, to configure your PWA Studio app for theming, you will need to add a lot more. Start by copying the following code block into your `tailwind.config.js` file.

The `create-pwa` CLI adds and configures this file as follows:

```js
// tailwind.config.js (PWA Studio)

const venia = require('@magento/pwa-theme-venia');

const config = {
    mode: 'jit',
    // Include your custom theme here.
    presets: [venia],
    // Configure how Tailwind statically analyzes your code here.
    // Note that the Tailwind's `jit` mode doesn't actually use PurgeCSS.
    purge: {
        // Include paths to every file that may refer to Tailwind classnames.
        // Classnames not found in these files will be excluded at build time.
        content: [
            './node_modules/@magento/venia-ui/lib/**/*.module.css',
            '../venia-ui/lib/**/*.module.css',
            './src/**/*.module.css',
            './template.html'
        ],
        // This extracts Tailwind classnames from source files.
        // NOTE: Our default matcher only matches targets of the CSS Modules'
        // `composes` function, not classnames included directly in HTML or JS!
        extractors: [
            {
                extensions: ['css'],
                extractor: content => content.match(matcher) || []
            }
        ]
    },
    // Set the character Tailwind uses when prefixing classnames with variants.
    // CSS Modules doesn't support Tailwind's default separator `:`, so we use `_`.
    separator: '_',
    theme: {
      extend: {
      }
    }
};
module.exports = config;

/**
 * Matches declarations that contain tailwind classnames.
 * Only CSS Module classnames that use `composes` are included in the build.
 *
 * @example
 * .foo {
 *   composes: mx-auto from global;
 * }
 */
const matcher = /(?<=composes:.*)(\b\S+\b)(?=.*from global;)/g;
```

Descriptions of each configuration option are provided here:

- **mode** - The `mode` property is set to `jit` by default to provide faster build times. To disable the JIT mode, set the `mode` property to `false`. See the [JIT mode](https://v2.tailwindcss.com/docs/just-in-time-mode) from the Tailwind documentation.
- **presets** - Adds additional theme configurations on top of Tailwind's base styles. The  `venia` theme is added by default. You have the option to keep the `venia` theme and override or extend it with your own theme, or replace it completely. See [Presets](https://v2.tailwindcss.com/docs/presets) from the Tailwind documentation.
- **purge** - The `purge` property is used to configure the [PurgeCSS](https://purgecss.com/) tool to remove unused CSS from the `index.css` file. This optimizes the production builds by reducing the size of the CSS bundle. See [Writing purgeable HTML](https://v2.tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html) and [Removing unused CSS](https://v2.tailwindcss.com/docs/optimizing-for-production#removing-unused-css) from the Tailwind documentation.
- **plugins** - The `plugins` property configures Tailwind CSS plugins. See [Plugins](https://v2.tailwindcss.com/docs/plugins) from the Tailwind documentation.
- **separator** - The `separator` property configures the character used to separate the variant prefixes from the utility names. Tailwind uses the colon `:` by default, but PWA Studio uses the underscore (`_`) because CSS Modules doesn't support the colon in class names. See [Separator](https://v2.tailwindcss.com/docs/configuration#separator) from the Tailwind documentation.
- **theme** - The `theme` property is for your custom values used to override or extend the Tailwind CSS framework. See [Theme Configuration](https://v2.tailwindcss.com/docs/theme) from the Tailwind documentation.
- **matcher** - The `matcher` variable is used to match CSS Modules classnames that use the `composes` function. This is used by PurgeCSS to remove unused CSS from the `index.css` file. See [Writing purgeable HTML](https://v2.tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html) from the Tailwind documentation.

<InlineAlert slots="text" />

When looking at code samples in the Tailwind docs, keep in mind that the base project configures Tailwind to use `_` as the [seperator](https://v2.tailwindcss.com/docs/configuration#separator) instead of the default colon (`:`).

### Add postcss.config.js

The `postcss.config.js` file is a standard configuration file used by the `postcss-loader` package. So you need to add it to your project's root and configure it to add `tailwindcss` and the `autoprefixer` as a PostCSS plugins for your app. Your `postcss.config.js` file should look like this:

The `create-pwa` CLI adds and configures this file as follows:

```js
// postcss.config.js

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('tailwindcss')('./tailwind.config.js'),
  ],
};
```

## Step 3: Test your configuration

To test your configuration with the `[venia]` theme set as a `preset` in your config file, add the following `theme` style override and rebuild your app.

```js
// tailwind.config.js

theme: {
  extend: {
    textColor: {
      colorDefault: '#BB0000'
    }
  }
}
```

If the text color in your Venia-themed app turns red, your configuration is working correctly. To test your own theme, refer to [Customizing your theme](https://tailwindcss.com/docs/adding-custom-styles#customizing-your-theme) from the Tailwind documentation.

## Step 4: Customize the base styles

You have two options for customizing the Tailwind and Venia base styles:

1. Update the `tailwind.config.js` file directly.
1. Import your own theme file as a `preset` (recommended).

### Option 1: Update tailwind.config.js theme directly

If you followed Step 3 above, you have already done this as a test. Another example: change the default font family by adding new styles to the `tailwind.config.js` `theme` property:

```js
// tailwind.config.js

theme: {
  extend: {
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif']
    }
  }
}
```

You should avoid this option for all but the smallest changes. For example, if you plan to use the Venia base theme with only a few custom colors and fonts, this option may be fine for your needs. However, if you are going to make several style changes or plan to rotate through different themes (seasonal or otherwise), use option 2.

### Option 2: Create your own theme presets

We recommended this option for all but the smallest changes. The steps for creating your own [theme presets](https://tailwindcss.com/docs/presets) and adding them to the `tailwind.config.js` file to customize the existing base themes are as follows:

1. Create a new `my-theme-preset.js` file anywhere in your project and name it whatever you want.
1. Export a new `theme` object with your Tailwind and/or Venia base theme extensions and overrides:

  ```js
  // my-theme-preset.js

  module.exports = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Courier', 'sans-serif']
        }
      }
    }
  }
  ```

1. Import your theme preset to the `tailwind.config.js` and add it to the `presets` array:

  ```js
  // tailwind.config.js

  const venia = require('@magento/pwa-theme-venia');
  const myThemePreset = require('./my-theme-preset');

  module.exports = {
    presets: [venia, myThemePreset]
  }
  ```

  This example adds the `myThemePreset` after the `venia` preset, meaning that myThemePreset will be merged and override or extend the base styles from Venia and Tailwind. For more information, see [how configurations are merged](https://tailwindcss.com/docs/presets#merging-logic-in-depth) from the Tailwind documentation.

1. Rebuild your app.

### Override or extend Tailwind base styles

To override or extend the Tailwind base styles for version `2.2.19`, and any other version, use this site as a [reference to the Tailwind base styles](https://unpkg.com/browse/tailwindcss@2.2.19/stubs/defaultConfig.stub.js).

For example, to **override** Tailwind's default `colors` and `fontFamily` while **extending** its base `flexGrow` and `zIndex`, you could add the following properties to your theme preset:

```js
// my-theme-preset.js

module.exports = {
  theme: {
    // Override Tailwind's default font family and colors
    colors: {
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      }
    },
    fontFamily: {
      sans: ['"Open Sans"', 'sans-serif']
    },
    // Extend Tailwind's flexGrow and zIndex styles
    extend: {
      flexGrow: {
        2: '2',
        3: '3',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
    }
  },
```

### Override or extend Venia base styles

To override or extend the Venia base styles included in `@magento/pwa-theme-venia`, use [Venia's tailwind.preset.js file](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-theme-venia/tailwind.preset.js#L21-L195) as a reference to its base styles.

For example, to **override** Venia's default `fontFamily` options and **extend** its default `backgroundColor` and `borderRadius`, you could add the following `theme` properties to your preset:

```js
// my-theme-preset.js

module.exports = {
  theme: {
    extend: {
      // Override Venia's default font family
      fontFamily: {
        sans: ['Open Source', 'sans-serif'],
        serif: ['Gothic', 'serif']
      },
      // Extend Venia's backgroundColor and borderRadius styles
      backgroundColor: {
        subtitle: '#F5F5F5',
      }
      borderRadius: {
        radius4: '50%',
    }
  },
```

Another example: To change the width of Venia's sidebar filter on the search and category pages, you can override the `theme.extend.spacing.filterSidebarWidth`, as shown here:

```js
// my-theme-preset.js

module.exports = {
  theme: {
    extend: {
      spacing: {
        filterSidebarWidth: '400px'
      }
    }
  }
}
```

## Useful extension examples

The following extension examples show some additional useful customizations you can make to Tailwind and Venia base themes.

### Adding new utility classes

As described above with extensions, Tailwind gives you the ability to define new utility classes with your own values. You can use these values in your own custom CSS files for your custom components or style overrides for Venia components.

For example, you can add new [height utilities](https://tailwindcss.com/docs/height) by specifying entries for `theme.extend.height`.

```js
// my-theme-preset.js

module.exports = {
  theme: {
    extend: {
      height: {
        customHeight: '16rem',
      }
    }
  }
}
```

This creates a new height utility `height-customHeight` which you can use in your project.

### Replacing existing breakpoint values

You can replace existing breakpoint values by specifying entries for `theme.extend.screens`.

```js
// my-theme-preset.js

module.exports = {
  theme: {
    extend: {
      screens: {
        'lg': '992px',
        'max': '2560',
      },
    }
  }
}
```
