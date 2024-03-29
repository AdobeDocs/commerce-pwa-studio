---
title: Custom project templates
description: Learn how to create custom templates for your PWA Studio storefront project.
---

# Custom project templates

The PWA Studio [scaffolding tool][] uses the `venia-concept` package as the default template for new storefront projects, but
you can use your own custom project template if it contains the necessary instructions.

[scaffolding tool]: /guides/packages/buildpack/scaffolding/

## Buildpack folder

The presence of a `create.js` file inside a `_buildpack` directory indicates that a project can be used as a template for the scaffolding command.
You can see an example of this directory in the [`venia-concept` package][].

[`venia-concept` package]: https://github.com/magento/pwa-studio/tree/develop/packages/venia-concept/_buildpack

### The `create.js` file

The `create.js` file defines a function that returns an object with `ignores`, `before`, `visitor`, and `after` properties.
These properties are functions that provide instructions for the buildpack `create-project` command.

The function defined in `create.js` is passed in an object with the following properties:

- `fs` - An instance of the [`fs-extra` library][], which provides utilities for most of the common copy operations.
- `tasks` - An object which provides common handlers that template developers can use for globs.
- `options` - An object that contains the parameters used in the `buildpack create-project` command.

[`fs-extra` library]: https://www.npmjs.com/package/fs-extra

When the create project command executes, it walks the template project's directory tree and applies the instructions provided by the returned object's properties.

#### `ignores`

The `ignores` property is an array of [glob patterns][].
Files that match these patterns are not processed by the create project command.

[glob patterns]: https://en.wikipedia.org/wiki/Glob_(programming)

Use this property to prevent the create command from processing project-specific or unimportant files.

### `before`

The `before` property defines a function that runs before the command walks the directory tree.
Use this property to add pre-processing logic during project creation.

### `visitor`

The `visitor` property is a mapping object that maps a glob pattern to a file handler function.
The glob pattern is the map key, and the file handler function is the value associated with that key.

When the project creation tool walks the directory tree, it looks for files that match each glob pattern and runs the visitor function associated with that pattern.

Use this property to perform custom transformation logic on a file before copying it to the new project.

```js
{
  visitor: {
    'package.json': ({ path, targetPath, options }) => {
      const pkg = fs.readJsonSync(path);
      pkg.name = options.name;
      fs.writeJsonSync(targetPath, JSON.stringify(pkg, null, 4));
    }
  }
}
```

This is an example of a visitor property that targets the template project's `package.json` file and modifies its name before writing it out to the `targetPath`.

<InlineAlert variant="info" slots="text"/>

The `buildpack create-project` command does not perform the actual file copy.
Use the convenient `tasks.IGNORE` and `tasks.COPY` handlers provided by the tool to perform common ignore and copy file tasks.

### `after`

The `after` property defines a function that runs after the command walks the directory tree.
Use this property to add post-processing logic during project creation.
