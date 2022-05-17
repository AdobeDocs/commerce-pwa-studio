---
title: Item
---

# Item

The `Item` component takes a data object and renders it using a render prop or wraps it in an HTML element.

This component is used as a direct child of the [`Items`][] fragment.

[`items`]: /api/peregrine/components-and-utilities/Items/

## Props

| Name         | Required | Default | Description                                                   |
| ------------ | :------: | ------- | ------------------------------------------------------------- |
| `classes`    |    No    | `{}`    | A classname hash                                              |
| `hasFocus`   |    No    | `false` | Set to `true` if the browser is currently focused on the item |
| `isSelected` |    No    | `false` | Set to `true` if the item is currently selected               |
| `item`       | **Yes**  |         | A data object. If this is a string, it is rendered as a child |
| `render`     | **Yes**  | `'div'` | A render prop or HTML tagname string, such as `"div"`.        |

## Example

```jsx
import Item from "@magento/peregrine";

<Item
  classes={{ root: "foo" }}
  item={{ id: "s", value: "Small" }}
  render="span"
/>;
```
