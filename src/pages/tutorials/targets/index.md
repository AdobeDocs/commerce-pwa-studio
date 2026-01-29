---
title: Targets and Targetables
description: Learn how to extend PWA Studio with intercept files.
---

# Targets and Targetables

Targets and Targetables are features provided by PWA Studio's [extensibility framework][].
They give you the ability to change feature behaviors, component logic, and even component source code without editing a local copy of PWA Studio code.

[extensibility framework]: /guides/general-concepts/extensibility/index.md

## Intercept file

The intercept file is where you directly interact with Targets and Targetables to apply customizations.
It exports a default function that accepts a TargetProvider parameter.

### Intercept file name and location

The file name and location of your intercept file is a custom value you specify in your project's `package.json` file.

To register the location of your intercept file, set the value for `pwa-studio.targets.intercept`.
For example, the following entry registers `src/targets/intercept.js` as this project's intercept file.

```json
"pwa-studio": {
    "targets": {
      "intercept": "src/targets/intercept"
    }
}
```

### How interception works

Interception logic executes during the build process.
The `@magento/pwa-buildpack` module creates a BuildBus process to run intercept files in the storefront project or its dependencies.

The BuildBus process executes intercept files in **named direct dependencies** in a project.
This means that modules listed under `dependencies` and `devDependencies` in a project's `package.json` file have the ability to intercept Targets and Targetables in the project.
The process does not execute intercept files in dependencies beyond those modules in the dependency tree.

### Interception order

The interception process executes files in dependency order.
This means that if your module declares another module that has an intercept file as a peer dependency, the other module's intercept file executes first.

## Target

A _Target_ is a formal extension point exposed by a package.
Buildpack, Peregrine, and Venia UI expose their own set of Targets that let developers change the behavior of the underlying code.
Targets are a package's public API and can be intercepted in storefront or extension projects.

### Intercepting Targets

Use the TargetProvider given to the intercept file's default function to access Targets from your project's dependencies.

```js
module.exports = (targets) => {
  // Set buildpack features
  const builtins = targets.of("@magento/pwa-buildpack");
  builtins.specialFeatures.tap((featuresByModule) => {
    featuresByModule["my-extension"] = {
      // Tells buildpack that this extension uses ES Modules
      esModules: true,
    };
  });
};
```

### PWA Studio target reference

The following PWA Studio packages contain Targets that developers can intercept:

- [Buildpack][]
- [Peregrine][]
- [Venia UI][]

[buildpack]: /api/buildpack/targets/index.md
[peregrine]: /api/peregrine/targets/index.md
[venia ui]: /api/venia/targets/index.md

## Targetables

_Targetables_ are objects that give you access to the source code for the files in your project or library.
They let you change the final application bundles by applying transformations to the source code during the build process.

Targetables are useful in two scenarios:

- As a **storefront developer**, you can use Targetables to transform the source file in any of your project's dependencies.
- As an **extension developer**, you can use Targetables to add Targets to your own extension.

### Access the TargetableSet class

The most common pattern for working with Targetable objects is to connect an instance of the [TargetableSet][] to the TargetProvider sent to the intercept file.
Then, you can use that instance to create Targetable objects.

[targetableset]: /api/buildpack/targetables/targetable-set/index.md

```js
// Access the TargetableSet class
const { Targetables } = require("@magento/pwa-buildpack");

module.exports = (targets) => {
  // Create a TargetableSet instance connected to this project's TargetProvider
  const targetables = Targetables.using(targets);

  // Use the TargetableSet to create Targetable objects
};
```

### Create Targetable objects

Use the TargetableSet instance to create a [TargetableModule][] class object or one of its subclasses.
The TargetableModule class itself represents a plain module.
It contains functions that let it manipulate the source code directly.

[targetablemodule]: /api/buildpack/targetables/targetable-module/index.md

```js
const { Targetables } = require("@magento/pwa-buildpack");

module.exports = (targets) => {
  const targetables = Targetables.using(targets);

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

Other Targetable classes, such as [TargetableESModule][], are subclasses of TargetableModule.
They contain specialized functions that let it work with different modules or file types.

[targetableesmodule]: /api/buildpack/targetables/targetable-es-module/index.md

### Chain transformations

Some Targetable classes, such as TargetableModule and [TargetableReactComponent][], support method chaining.
Certain methods in these classes are chainable, which let you call these methods one after another in your code.

[targetablereactcomponent]: /api/buildpack/targetables/targetable-react-component/index.md

```js
const { Targetables } = require("@magento/pwa-buildpack");

module.exports = (targets) => {
  const targetables = Targetables.using(targets);

  const MainComponent = targetables.reactComponent(
    "@magento/venia-ui/lib/components/Main/main.js"
  );

  MainComponent.appendJSX(
    "div className={pageClass}",
    "<span>appendJSX succeeded!</span>"
  )
    .addJSXClassName("Header", '"myClass"')
    .insertBeforeJSX("<Header />", "<span>insertBeforeJSX succeeded!</span>");
};
```

### Unbound Targetable objects

A less common pattern for using Targetables is to access the Targetables classes directly and creating an object that is not connected to a project's TargetProvider.

```js
const { Targetables } = require("@magento/pwa-buildpack");

module.exports = (targets) => {
  // Create an unbound Targetable ESModule object from a file
  const handlers = new Targetables.ESModule("src/lib/handlers.js");

  // Wrap an export in a decorator from another file
  handlers.wrapWithFile("handleLoad", "src/overrides/doSomethingOnLoad.js");

  // Send it all to the build
  targets.of("@magento/pwa-buildpack").transformModules.tap((addTransform) => {
    handlers.flush().forEach((request) => addTransform(request));
  });
};
```
