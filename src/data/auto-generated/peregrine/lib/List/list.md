The **List** component maps a collection of data objects into an array of elements.
It also manages the selection and focus of those elements.

@typedef List
@kind functional component

@param {props} props React Component props

@returns{React.Element} A React component that displays list data.

[View Source](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/List/list.js)

## Props

 |Name|Required|Default|Description|
|---|:---:|:---:|---|
| `classes` | `-` | `{}` | `-`|
| `getItemKey` | `-` | `({ id }) => id` | `-`|
| `initialSelection` | `-` | `-` | `-`|
| `items` | <i class="material-icons green">check_box</i> | `-` | `-`|
| `render` | <i class="material-icons green">check_box</i> | `-` | `-`|
| `renderItem` | `-` | `'div'` | `-`|
| `onSelectionChange` | `-` | `-` | `-`|
| `selectionModel` | `-` | `'radio'` | `-`|
{:style="table-layout:auto"}

