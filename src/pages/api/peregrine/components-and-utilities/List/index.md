---
title: List
---

# List

A component for generating a list component.

<!--
The reference doc content is generated automatically from the source code.
To update this section, update the doc blocks in the source code
-->

import Component from '/src/data/auto-generated/peregrine/lib/List/list.md'

<Component />

## Selection models

The `selectionModel` currently accepts the following values:

* **radio** (default)
* **checkbox**

## Example

``` jsx
import { List } from '@magento/peregrine';

const simpleData = new Map()
    .set('s', 'Small')
    .set('m', 'Medium')
    .set('l', 'Large')

<List
    classes={{ root: 'foo' }}
    items={simpleData}
    render={'ul'}
    renderItem={'li'}
/>

const complexData = new Map()
    .set('s', { id: 's', value: 'Small' })
    .set('m', { id: 'm', value: 'Medium' })
    .set('l', { id: 'l', value: 'Large' })

<List
    classes={{ root: 'bar' }}
    items={complexData}
    render={props => (<ul>{props.children}</ul>)}
    renderItem={props => (<li>{props.value}</li>)}
/>
```

[render prop]: https://reactjs.org/docs/render-props.html
[Map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
