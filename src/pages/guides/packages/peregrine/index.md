---
title: Peregrine package
---

# Peregrine package

The Peregrine package is a collection of functions that act as the brains of your visual components.
They provide pieces of logic for UI components, such as the ones provided by the [Venia][] library.
Use or remix these functions and components to create a unique PWA Studio storefront.

[venia]: /guides/packages/venia/

## Custom React hooks

Most of the components in the Peregrine package are [custom React hooks][].
Peregrine hooks are designed to be flexible, and non-opinionated about UI.
They contain code for providing data or behavior logic and do not render content themselves.
Rendering content is left to the UI components.

[custom react hooks]: https://reactjs.org/docs/hooks-custom.html

Separating logic and presentation code gives developers more flexibility on how to use PWA Studio components with their own custom code.
A developer may choose to use a Venia feature that uses certain Peregrine hooks with minor visual modifications, or
they can use those same Peregrine hooks to develop their own feature with a different UI.

For more information about custom hooks, see the React documentation for [Building Your Own Hooks][].

[building your own hooks]: https://reactjs.org/docs/hooks-custom.html

### Peregrine Talons

Most [React components][] contain two distinct sections: a section for logic and a presentational section.

[react components]: https://reactjs.org/docs/components-and-props.html

The logic section contains code for generating new values from props, maintaining local state, and lifecycle or side effect methods.
This section can be considered the "brains" of the component.

The content section of a React component contains code that defines the component's DOM structure.
It often uses values from the logic part of the component to pass down into another component or display using HTML elements.

PWA Studio separates these two sections into distinct components with specific concerns: a Venia UI component and a **Peregrine Talon**.

For more information, read the [Talons][] topic.

[talons]: /guides/general-concepts/talons/

### Return signatures

The return signatures of Peregrine hooks vary and is dependent on their purpose.

Some return an array with _state_ and _api_ objects, which follow the same pattern as [useState()][] and [useReducer()][].
This lets you specify the variable names of the provided objects when you [destructure][] the array.

[usestate()]: https://reactjs.org/docs/hooks-reference.html#usestate
[usereducer()]: https://reactjs.org/docs/hooks-reference.html#usereducer
[destructure]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

Other Peregrine hooks return a single object.

Use the reference docs on this site or in the [JSDoc][] blocks in the source code learn the API for each hook.

[jsdoc]: https://devdocs.io/jsdoc/
