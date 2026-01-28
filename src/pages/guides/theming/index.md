---
title: Tailwind Theming
description: Learn how to use Tailwind CSS to theme your PWA Studio app.
featured: true
keywords:
  - Storefront
  - Themes
---

# Tailwind Theming for PWA Studio apps

[Tailwind CSS](https://tailwindcss.com/) is a popular CSS framework for rapidly building custom user interfaces, focused on flexibility and designed for quick, custom branding. This topic describes how you can install, configure, and use Tailwind with Venia to theme your own PWA Studio app.

## Tailwind and Venia themes

Both the Tailwind and Venia themes are considered base themes — themes designed with only minimal brand-styling. We use base themes so you can quickly customize your apps with different colors, typography, images, and other brand attributes. The included [Venia base theme](https://github.com/magento/pwa-studio/tree/develop/packages/pwa-theme-venia) provides a layer on top of Tailwind's base theme. The Venia theme uses all the best practices required for overriding and extending other base themes.

We designed the Venia theme to be both a starting point and an example for creating your own custom themes. To learn more about Tailwind themes, see the [Tailwind theme documentation](https://tailwindcss.com/docs/theme).

## Install Tailwind and Venia

There are **two options** for installing the Tailwind and Venia base themes into your PWA Studio apps:

**OPTION 1: Use the create-pwa CLI** — For new PWA Studio apps, [using the create-pwa CLI](../../tutorials/setup-storefront/index.md#run-the-scaffolding-tool) is the fastest way to install and configure Tailwind theming. The CLI adds all the theme packages and files you need to start customizing the new app with your own theme extensions and overrides.

**OPTION 2: Install and configure manually** — For upgrading existing PWA Studio apps, you need to manually install and configure the Tailwind and Venia theme packages and files. The instructions in [Install theme packages](#install-theme-packages) and [Create theme files](#create-theme-files) show you how.

## Install theme packages

Install the following packages using `yarn add` or `npm install` as follows:

<CodeBlock slots="heading, code" repeat="2" languages="bash,bash" />

### yarn

```bash
yarn add -D @magento/pwa-theme-venia@^1.3.0 tailwindcss@~2.2.19 postcss@~8.3.11 postcss-loader@~4.3.0 autoprefixer@latest
```

### npm

```bash
npm install -D @magento/pwa-theme-venia@^1.3.0 tailwindcss@~2.2.19 postcss@~8.3.11 postcss-loader@~4.3.0 autoprefixer@latest
```

- **@magento/pwa-theme-venia** — The Venia base theme ([theme source file](https://github.com/magento/pwa-studio/tree/develop/packages/pwa-theme-venia/tailwind.preset.js))
- **tailwindcss** — v2.2.x patch release of the Tailwind CSS framework ([npm package](https://www.npmjs.com/package/tailwindcss/v/2.2.19))
- **postcss** — v8.3.x patch release for installing Tailwind as a PostCSS plugin ([npm package](https://www.npmjs.com/package/postcss/v/8.3.11))
- **postcss-loader** — v4.3.x patch release for loading PostCSS as a Webpack loader ([npm package](https://www.npmjs.com/package/postcss-loader/v/4.3.0))
- **autoprefixer** — Latest release for adding vendor prefixes to CSS rules ([npm package](https://www.npmjs.com/package/autoprefixer))

After installation, your `package.json` file should contain the following entries (patch versions may vary):

```json
"devDependencies": {
  "@magento/pwa-theme-venia": "^1.3.0",
  "autoprefixer": "~10.3.7",
  "postcss": "~8.3.11",
  "postcss-loader": "~4.3.0",
  "tailwindcss": "~2.2.19"
  }
```

## Create theme files

Create the following empty files in your project. After that, we'll explain each file's purpose and add the required starting code.

- **src/index.css** — In the `src` directory, create a blank file called `index.css` for Tailwind's global base styles.
- **tailwind.config.js** — In your project root directory, create a blank file called `tailwind.config.js` for Tailwind's configuration, overrides, and extensions.
- **postcss.config.js** — In your project root directory, create a blank file called `postcss.config.js` for including the `tailwindcss` package as a postCSS plugin.

When you're done, your project directory should include these files:

```text
project-root/
├── postcss.config.js
├── src/
│   ├── index.css
├── tailwind.config.js
```

### index.css

The `index.css` file uses the `@tailwind` directive to include all of Tailwind's base, component, and utility style [layers](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer).
Add the following lines to the `index.css` file:

```sass
// index.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```

These directives load the corresponding Tailwind [layer files](https://tailwindcss.com/docs/adding-custom-styles#using-css-and-layer) from the `tailwindcss` package installed in `node_modules`, as shown here:

- **tailwindcss/dist/base.css** (normalizing styles, 500+ lines of CSS)
- **tailwindcss/dist/components.css** (component classes, 200+ lines of CSS)
- **tailwindcss/dist/utilities.css** (utility classes, 175K+ lines of CSS)

The `base.css` layer contains the most basic styles for resetting or normalizing styles across browsers. The `components.css` layer is for component-level classes, like `.button` or `.form`. By default, Tailwind provides a single `.container` class within multiple `@media` queries. This file provides a good starter template for adding your own component-level classes. Finally, the `utilities.css` layer contains all the Tailwind utility classes used directly within elements.

### index.js

To use the `index.css` file, you need to `import` it into the `src/index.js` file. This file is the entry point for the Webpack build process, so it's the best place to add the `index.css` file.
Add the following line to the `src/index.js` file:

```js
// src/index.js

import "./index.css";
```

Importing the `index.css` ensures that your app uses the base set of Tailwind styles and utility classes. After that, you can add your own custom themes and styles to extend or override those base styles using the `tailwind.config.js` described next.

### tailwind.config.js

The `tailwind.config.js` file is where you configure Tailwind and, most importantly, override and extend its base styles. Instead of adding this file manually to the root of your project, you can run the following command to generate a minimal default configuration file:

```bash
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
};
```

However, to configure your PWA Studio app for theming, you need to add a lot more. Start by copying the following code block into your `tailwind.config.js` file.

```js
// tailwind.config.js (PWA Studio)

const venia = require("@magento/pwa-theme-venia");

const config = {
  mode: "jit",
  // Include your custom theme here.
  presets: [venia],
  // Configure how Tailwind statically analyzes your code here.
  // Note that the Tailwind's `jit` mode doesn't actually use PurgeCSS.
  purge: {
    // Include paths to every file that may refer to Tailwind classnames.
    // Classnames not found in these files will be excluded at build time.
    content: [
      "./node_modules/@magento/venia-ui/lib/**/*.module.css",
      "../venia-ui/lib/**/*.module.css",
      "./src/**/*.module.css",
      "./template.html",
    ],
    // This extracts Tailwind classnames from source files.
    // NOTE: Our default matcher only matches targets of the CSS Modules'
    // `composes` function, not classnames included directly in HTML or JS!
    extractors: [
      {
        extensions: ["css"],
        extractor: (content) => content.match(matcher) || [],
      },
    ],
  },
  // Set the character Tailwind uses when prefixing classnames with variants.
  // CSS Modules doesn't support Tailwind's default separator `:`, so we use `_`.
  separator: "_",
  theme: {
    extend: {},
  },
};
module.exports = config;

/**
 * Matches declarations that contain Tailwind classnames.
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
- **presets** - Adds additional theme configurations on top of Tailwind's base styles. The `venia` theme is added by default. You have the option to keep the `venia` theme and override or extend it with your own theme, or replace it completely. See [Presets](https://v2.tailwindcss.com/docs/presets) from the Tailwind documentation.
- **purge** - Configures the [PurgeCSS](https://purgecss.com/) tool to remove unused CSS from the `index.css` file. This optimizes the production builds by reducing the size of the CSS bundle. See [Writing purgeable HTML](https://v2.tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html) and [Removing unused CSS](https://v2.tailwindcss.com/docs/optimizing-for-production#removing-unused-css) from the Tailwind documentation.
- **plugins** - Configures Tailwind CSS plugins. See [Plugins](https://v2.tailwindcss.com/docs/plugins) from the Tailwind documentation.
- **separator** - Defines the character that separates the variant prefixes from the utility names. Tailwind uses the colon `:` by default, but PWA Studio uses the underscore (`_`) because CSS Modules doesn't support the colon in class names. See [Separator](https://v2.tailwindcss.com/docs/configuration#separator) from the Tailwind documentation.

  **REMEMBER**: When looking at code samples in the Tailwind docs, keep in mind that the base project configures Tailwind to use `_` as the [separator](https://v2.tailwindcss.com/docs/configuration#separator) instead of the default colon (`:`).

- **theme** - Defines your custom values that override or extend the Tailwind CSS framework. See [Theme Configuration](https://v2.tailwindcss.com/docs/theme) from the Tailwind documentation.
- **matcher** - Matches CSS Modules classnames that use the `composes` function. PurgeCSS uses this value to remove unused CSS from the `index.css` file. See [Writing purgeable HTML](https://v2.tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html) from the Tailwind documentation.

### postcss.config.js

Create the `postcss.config.js` file in your project's root and configure it to add `tailwindcss` and the `autoprefixer` as PostCSS plugins for your app. Your `postcss.config.js` file should look like this:

```js
// postcss.config.js

module.exports = {
  plugins: [
    require("autoprefixer"),
    require("tailwindcss")("./tailwind.config.js"),
  ],
};
```

## Test theme configuration

For a quick test of your Venia configuration, add the following `theme` override directly to `tailwind.config.js` (then remove it after you verify it works). If the text color in your Venia-themed app turns red, your configuration is working correctly.

```js
// tailwind.config.js

theme: {
  extend: {
    textColor: {
      colorDefault: "#BB0000";
    }
  }
}
```

To test your own theme, refer to [Customizing your theme](https://tailwindcss.com/docs/adding-custom-styles#customizing-your-theme) from the Tailwind documentation.

## Customize base styles

You have **two options** for customizing the Tailwind and Venia base styles:

**OPTION 1: Update `tailwind.config.js` directly.**

**OPTION 2: Create a new theme (recommended).**

### Update tailwind.config.js directly

As you did when testing your theme configuration, you can override or extend the Tailwind and Venia themes directly within the `theme` property of the `tailwind.config.js.` file as shown here:

```js
// tailwind.config.js

theme: {
  extend: {
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"];
    }
    backgroundColor: {
      subtitle: "#F5F5F5";
    }
    borderRadius: {
      radius4: "50%";
    }
  }
}
```

However, you should avoid this option for all but the smallest real-world changes. For example, if you plan to use the Venia base theme with only a few custom colors and fonts, this option may be fine for your needs. However, if you are going to make several style changes or plan to rotate through different themes (seasonal or otherwise), create a new theme file instead.

### Create a new theme

We recommended this option for all but the smallest changes. The steps for creating your own [theme preset](https://tailwindcss.com/docs/presets) and adding it to the `tailwind.config.js` file are as follows:

1. Create a new `my-theme-preset.js` file anywhere in your project and name it whatever you want.
1. Export a new `theme` object with your Tailwind and/or Venia base theme extensions and overrides:

  ```js
  // my-theme-preset.js

  module.exports = {
    theme: {
      extend: {
        fontFamily: {
          sans: ["Courier", "sans-serif"],
        },
      },
    },
  };
  ```

1. Import your theme preset to the `tailwind.config.js` and add it to the `presets` array:

  ```js
  // tailwind.config.js

  const venia = require("@magento/pwa-theme-venia");
  const myThemePreset = require("./my-theme-preset");

  module.exports = {
    presets: [venia, myThemePreset],
  };
  ```

  The previous example adds `myThemePreset` after the `venia` preset, meaning that `myThemePreset` will be merged to override or extend the base styles from Venia and Tailwind. For more information, see [how configurations are merged](https://tailwindcss.com/docs/presets#merging-logic-in-depth) from the Tailwind documentation.

1. Rebuild your app.

### Customize Tailwind base styles

To override or extend the Tailwind base styles for a specific Tailwind version, use this site as a [reference to the Tailwind base styles](https://unpkg.com/browse/tailwindcss@2.2.19/stubs/defaultConfig.stub.js).

For example, to **override** Tailwind's default `colors` and `fontFamily` while **extending** its base `flexGrow` and `zIndex`, you could add the following properties to your theme preset:

```js
// my-theme-preset.js

module.exports = {
  theme: {
    // Override Tailwind's default font family and colors
    colors: {
      gray: {
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#c0ccda",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
    },
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
    },
    // Extend Tailwind's flexGrow and zIndex styles
    extend: {
      flexGrow: {
        2: "2",
        3: "3",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
};
```

### Customize Venia base styles

To override or extend the Venia base styles included in `@magento/pwa-theme-venia`, use [Venia's tailwind.preset.js file](https://github.com/magento/pwa-studio/tree/develop/packages/pwa-theme-venia/tailwind.preset.js#L21-L195) as a reference to its base styles.

For example, to **override** Venia's default `fontFamily` options and **extend** its default `backgroundColor` and `borderRadius`, you could add the following `theme` properties to your preset:

```js
// my-theme-preset.js

module.exports = {
  theme: {
    extend: {
      // Override Venia's default font family
      fontFamily: {
        sans: ["Open Source", "sans-serif"],
        serif: ["Gothic", "serif"],
      },
      // Extend Venia's backgroundColor and borderRadius styles
      backgroundColor: {
        subtitle: "#F5F5F5",
      },
      borderRadius: {
        radius4: "50%",
      },
    },
  },
};
```

Another example: To change the width of Venia's sidebar filter on the search and category pages, you can override the `theme.extend.spacing.filterSidebarWidth`, as shown here:

```js
// my-theme-preset.js

module.exports = {
  theme: {
    extend: {
      spacing: {
        filterSidebarWidth: "400px",
      },
    },
  },
};
```

## Useful examples

The following extension examples show some additional useful customizations you can make to Tailwind and Venia base themes.

### Add new utility classes

As described above with extensions, Tailwind gives you the ability to define new utility classes with your own values. You can use these values in your own custom CSS files for your custom components or style overrides for Venia components.

For example, you can add new [height utilities](https://tailwindcss.com/docs/height) by specifying entries for `theme.extend.height`.

```js
// my-theme-preset.js

module.exports = {
  theme: {
    extend: {
      height: {
        customHeight: "16rem",
      },
    },
  },
};
```

This creates a new height utility `height-customHeight`, which you can use in your project.

### Replace existing breakpoints

You can replace existing breakpoint values by specifying entries for `theme.extend.screens`.

```js
// my-theme-preset.js

module.exports = {
  theme: {
    extend: {
      screens: {
        lg: "992px",
        max: "2560px",
      },
    },
  },
};
```
