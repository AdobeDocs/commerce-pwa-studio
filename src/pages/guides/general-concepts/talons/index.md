---
title: Talons
---

# Talons

Peregrine Talons are the logic component counterparts for Venia UI components.
A Talon is a PWA Studio term for a custom React hook that provides data or performs side effects for a specific UI component.
Since they are closely coupled to a specific UI component, these hooks are not re-usable.

## Identifying Talons

Talons are custom React hooks, so they start with `use` followed by the name of its companion UI component.
For example, the [SearchBar][] component uses the [useSearchBar()][] talon to get initial values and functions it needs to handle changes in focus or search term value.
The `useSearchBar()` talon also keeps track of the component's `expanded` state, which determines how the search bar looks.

[usesearchbar()]: https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/SearchBar/useSearchBar.js
[searchbar]: https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/SearchBar/searchBar.js

## Talons versus hooks

Talons are a PWA Studio concept that represent a specialized type of React hook.

Peregrine **hooks**, such as `useDropdown()` and `useWindowSize()`, are designed to be re-usable pieces of code, but
Peregrine **talons** are designed to fulfill the logic needs of individual Venia UI components.
This means that each talon corresponds to a single Venia component and is not useful outside the component.
If a talon needs to use functionality identical to another talon, it is provided by a Peregrine hook.

For example, the functionality provided by the `useHeader()` talon is only relevant to the `Header` component.

## Using talons

Talons are not re-usable hooks, but they make it easier to work with UI components by providing standard functionality.
This lets developers focus on developing the presentation DOM and CSS pieces of a component.

Venia UI components use talons by default, so developers can use Venia UI components as is without worrying about talons.
If developers want to change how a Venia UI component looks, they can import its associated talon into a new or modified UI component of the same type.

### Talon props and returned object

Talons use many of the same props as its Venia UI component counterpart.
These props are passed into the talon as a single object and are used to generate new values or perform side effects.

The return value after calling a talon is an API object that UI components can destructure for values to display or assign to events, such as `onClick` or `onHover` functions.

### Example

The following code snippet comes from Venia's [Pagination][] UI component:

[pagination]: https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Pagination/pagination.js

```jsx

...

import { usePagination } from '@magento/peregrine/lib/talons/Pagination/usePagination';

...

const Pagination = props => {
    const { currentPage, setPage, totalPages } = props.pageControl;

    const talonProps = usePagination({
        currentPage,
        setPage,
        totalPages
    });

    const {
        handleLeftSkip,
        handleRightSkip,
        handleNavBack,
        handleNavForward,
        isActiveLeft,
        isActiveRight,
        tiles
    } = talonProps;

    ...
}
```
