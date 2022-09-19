# Theming in PWA Studio

The base project created using the scaffolding command mainly uses Tailwind utilities to define the Venia theme style.

## Extending the base theme

Extending the base theme style can be done by:

1. Creating and importing a [new package that exports a tailwind config file](https://github.com/magento/pwa-studio/tree/develop/packages/pwa-theme-venia) (reccommended)
2. Directly modifying your storefront project's `tailwind.config.js` file

NOTE: When looking at code samples in the Tailwind docs, keep in mind that the base project configures Tailwind to use `_` as the [seperator](https://tailwindcss.com/docs/configuration#separator) instead of the default.

## Changing Tailwind-specific values

See Tailwind docs for extending themes: https://tailwindcss.com/docs/theme#extending-the-default-theme

## Changing Venia specific values

You can see in the [Venia theme's configuration file](https://github.com/magento/pwa-studio/blob/develop/packages/pwa-theme-venia/tailwind.preset.js#L21-L195), the additional custom values referenced in the CSS files used by the various Venia UI components.

Most of these are just overrides to existing tailwind utilities, so your theme can also override them as you would a normal Tailwind utility.

Some utilities, however, are custom and used specifically in Venia components.
For example, the text color used in Venia components use the custom `text-colorDefault` utility.
You can change the value used by overriding the `theme.extend.textColor.colorDefault` value.

```js
// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      textColor: {
        colorDefault: '#243c5a'
      }
    }
  }
}
```

Another example is the width of the sidebar filter on the search and category pages.
This value can be changed by overriding `theme.extend.spacing.filterSidebarWidth`.

```js
// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      spacing: {
        filterSidebarWidth: '375px'
      }
    }
  }
}
```

## Adding new theme values

Tailwind gives you the ability to define new utility classes with your own values.
You can use these values in your own custom CSS files for your custom components or style overrides for Venia components.

For example, you can add new [height utilities](https://tailwindcss.com/docs/height) by specifying entries for `theme.extend.height`.

```js
// tailwind.config.js

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

## Other examples

### Replacing existing breakpoint values

```js
// tailwind.config.js

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

## Applying your theme

### For theme packages

1. Import your theme package as a dependency into your project

```cli
yarn add --dev my-custom-theme
```

2. Import your theme package into your project's `tailwind.config.js` file

```diff
  const venia = require('@magento/pwa-theme-venia');
+ const myTheme = require('my-custom-theme');
```

3. Add your theme to the list of presets

```diff
- presets: [venia],
+ presets: [venia, myTheme],
```

  This applies your theme on top of the base venia theme.
  If you replace venia in that list, your theme will be the only one applied to your project.

### For direct configuration file changes

Edit the theme property of your tailwind configuration in your project's `tailwind.config.js` file.

```diff
  theme: {
-   extend: {}
+   extend: {
+     // Add custom style overrides here
+   }
+ }
```

## Additional resources

- https://tailwindcss.com/docs/theme
