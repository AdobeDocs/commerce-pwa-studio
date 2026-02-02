---
title: Items
description: View detailed API reference documentation for the items utility in the Peregrine package of the PWA Studio framework.
---

# Items

The `Items` component uses content in a data object to render a list of [`Item`][] components.

[`item`]: /api/peregrine/components-and-utilities/Item/index.md

It follows the [Fragments][] pattern and returns its children without a wrapping element.
This allows you to decide how you want to wrap your list of items.

[fragments]: https://legacy.reactjs.org/docs/fragments.html

The `Items` component is used as a direct child of the [`List`][] component.

[`list`]: /api/peregrine/components-and-utilities/List/index.md

## Props

| Name             | Required | Description                                                           |
| ---------------- | :------: | --------------------------------------------------------------------- |
| `items`          | **Yes**  | An iterable that yields `[key, item]` pairs such as an ES2015 [Map][] |
| `renderItem`     |    No    | A [render prop][] or HTML tagname string.                             |
| `selectionModel` |    No    | A string corresponding to a selection model.                          |

[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[render prop]: https://legacy.reactjs.org/docs/render-props.html

### Selection models

The `selectionModel` currently accepts the following values:

- **radio** (default)
- **checkbox**

## Example

```jsx
import Items from "@magento/peregrine";

const data = {
  s: { id: "s", value: "Small" },
  m: { id: "m", value: "Medium" },
  l: { id: "l", value: "Large" },
};

<Items
  items={Object.entries(data)}
  renderItem="option"
  selectionModel="checkbox"
/>;
```
