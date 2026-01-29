---
title: List
description: View detailed API reference documentation for the list utility in the Peregrine package of the PWA Studio framework.
---

# List

A component for generating a list component.

\<!--
The reference doc content is generated automatically from the source code.
To update this section, update the doc blocks in the source code
--\>

<Fragment src='../../../../includes/auto-generated/peregrine/lib/List/list.md'/>

## Selection models

The `selectionModel` currently accepts the following values:

- **radio** (default)
- **checkbox**

## Example

```jsx
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
