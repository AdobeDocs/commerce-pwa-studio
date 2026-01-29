---
title: TargetableModule
description: View detailed API reference documentation for the TargetableModule class in the Buildpack package of the PWA Studio framework.
---

# TargetableModule

\<!--
The reference doc content is generated automatically from the source code.
To update this section, update the doc blocks in the source code
--\>

<Fragment src='../../../../includes/auto-generated/pwa-buildpack/lib/webpack-tools/targetables/targetable-module.md'/>

## Examples

Code examples for using the `TargetableModule` class.

### Insert source code

The `TargetableModule` class contains functions that let you insert custom code into different areas in the source code.

```js
const { Targetables } = require("@magento/pwa-buildpack");

module.exports = (targets) => {
  const targetableFactory = Targetables.using(targets);

  // Create a TargetableModule instance that points to the main.js source
  const MainComponent = targetables.module(
    "@magento/venia-ui/lib/components/Main/main.js"
  );

  // Insert a console log message in the source
  MainComponent.insertAfterSource(
    "const Main = props => {\n",
    '\tconsole.log("Hello World");\n'
  );
};
```

The following example makes the following code modifications to [`main.js`][] for the final bundle:

[`main.js`]: https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Main/main.js

```diff
  const Main = props => {
+     console.log("Hello World");
      const { children, isMasked } = props;
      const classes = mergeClasses(defaultClasses, props.classes);

      const rootClass = isMasked ? classes.root_masked : classes.root;
      const pageClass = isMasked ? classes.page_masked : classes.page;

      useScrollLock(isMasked);

      return (
          <main className={rootClass}>
              <Header />
              <div className={pageClass}>{children}</div>
              <Footer />
          </main>
      );
  };
```

## Related content

- [Transform Requests](/api/buildpack/transform-requests/index.md)
