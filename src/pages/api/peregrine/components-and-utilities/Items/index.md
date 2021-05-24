---
title: Items
---

# Items

The `Items` component uses content in a data object to render a list of [`Item`][] components.

[`Item`]: /api/peregrine/components-and-utilities/Item/

It follows the [Fragments] pattern and returns its children without a wrapping element.
This allows you to decide how you want to wrap your list of items.

[Fragments]: https://reactjs.org/docs/fragments.html

The `Items` component is used as a direct child of the [`List`] component.

[`List`]: /api/peregrine/components-and-utilities/List/

## Props

| Name             | Required | Description                                                           |
| ---------------- | :------: | --------------------------------------------------------------------- |
| `items`          | **Yes**  | An iterable that yields `[key, item]` pairs such as an ES2015 [Map][] |
| `renderItem`     |    No    | A [render prop][] or HTML tagname string.                             |
| `selectionModel` |    No    | A string corresponding to a selection model.                          |

[Map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[render prop]: https://reactjs.org/docs/render-props.html

### Selection models

The `selectionModel` currently accepts the following values:

* **radio** (default)
* **checkbox**

## Example

``` jsx
import Items from '@magento/peregrine';

const data = {
    s: { id: 's', value: 'Small' },
    m: { id: 'm', value: 'Medium' },
    l: { id: 'l', value: 'Large' }
};

<Items
    items={Object.entries(data)}
    renderItem='option'
    selectionModel='checkbox'
/>
```