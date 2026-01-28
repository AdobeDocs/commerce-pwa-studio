---
title: Theme vs Storefront
description: Learn about the differences between the theme and storefront concepts within the context of PWA Studio projects.
---

# Theme vs Storefront

An Adobe Commerce or Magento Open Source store uses theme components to define the look and feel of the front-end store.
PWA Studio introduces a different approach for creating a custom front-end experience using storefront applications.
This topic compares the traditional theme development approach of Adobe Commerce and Magento Open Source with a more modern approach of developing a progressive storefront using PWA Studio tools.

## Definitions

### Adobe Commerce and Magento Open Source theme

An Adobe Commerce or Magento Open Source theme is a type of [component][] that defines how a store looks.
It is deeply integrated with the application and depends on the core code for functionality.

[component]: https://developer.adobe.com/commerce/php/development/

A theme is always built on top of an existing parent theme.
Out of the box, the Adobe Commerce and Magento Open Source applications provide the **Blank** and **Luma** themes that developers extend or customize to create custom storefronts.

All themes inherit from a parent theme.
At the top of the inheritance chain is the Blank theme, which provides the base files for a theme.
Every other theme builds on, overrides, or customizes these files.

For more information on themes, see the [Frontend Developer Guide][] for the core application.

[frontend developer guide]: https://developer.adobe.com/commerce/frontend-core/guide/

### PWA Studio storefront application

A PWA Studio storefront application is a [progressive web app][] built using PWA Studio tools.

[progressive web app]: /guides/

It is made up of an application shell that exists in the browser and a [middle tier service layer][] that sits between the shell and a [headless backend][] running Adobe Commerce or Magento Open Source.

[middle tier service layer]: /guides/packages/upward/
[headless backend]: https://magento.com/blog/best-practices/future-headless

Unlike an Adobe Commerce or Magento Open Source theme, a storefront application does not inherit from a parent theme.
Instead, the application is composed of [React][] modules that provide the different pieces of functionality.
These pieces can be swapped out to change behavior or even removed entirely.

[react]: https://legacy.reactjs.org/

For an example of a storefront application, read about the [Venia][] storefront, a reference implementation created using PWA Studio tools.

[venia]: /guides/packages/venia/

### Components

Both theme and storefront applications use pieces that are known as **components**, but
each approach uses a different definition of this term.

In theme development, _components_ mostly refers to [Adobe's UI Components][].
These components are standard UI elements, such as tables, buttons, and dialogs, that Adobe provides to make theme development easier.

[adobe's ui components]: https://developer.adobe.com/commerce/frontend-core/ui-components/

In PWA Studio, _components_ refers to [React][] components.
React components are modular pieces that make up a React application, such as a PWA storefront.
These pieces can contain pure logic, such as [Peregrine components][], or visual elements, such as [Venia's UI components][].

[peregrine components]: /guides/packages/peregrine/
[venia's ui components]: /guides/packages/venia/

## Dependency management

A theme uses a [Composer][] file to specify its dependencies and relies on the application's file resolution mechanism to make sure the required theme files are available.

[composer]: https://getcomposer.org/doc/00-intro.md

PWA Studio uses [Yarn][] for dependency management and validation scripts to make sure it is compatible with the backend application server.

[yarn]: https://yarnpkg.com/

## Inheritance vs modularity

Since themes inherit from a parent theme, the effort needed to create a custom storefront is dependent on the additional customizations needed on top of a base theme.
Some themes build off **Luma** or other existing themes and apply minimal customizations, such as logo and color changes, to create a unique look for a store.
Other themes use **Blank** as the base and require more customization work.

This inheritance approach tightly couples a theme with the parent themes up its inheritance chain.
As a result, parent theme updates can lead to unexpected side effects for its dependent child themes.

PWA storefront development uses a more modular approach for creating a storefront.

Instead of starting with a base theme and customizing the pieces, a developer puts together a storefront from scratch using different React modules.
This approach provides greater flexibility and control during the storefront creation process.

Since they are independent and modular, side effects from updating each piece is minimized.
Non-breaking updates can be applied to other modules while keeping others to a stable version.

## Required skillset

The skillset required to work with themes is different from the skillset required for a PWA storefront because of the technologies used in each approach.

### Adobe Commerce and Magento Open Source frontend developers

In addition to knowing standard JS libraries, such as jQuery and KnockoutJS, theme developers for Adobe Commerce and Magento Open Source need general knowledge about the application's components and specialized knowledge about its templating and layout system.

The following table is a summary of general skills needed for theme development:

| Skill                                        | Description                                                                        |
| -------------------------------------------- | ---------------------------------------------------------------------------------- |
| PHP                                          | The primary language of the Adobe Commerce and Magento Open Source                 |
| JavaScript (JS)                              | Core web language                                                                  |
| [jQuery][]                                   | A JS library used for things such as DOM manipulations                             |
| [KnockoutJS][]                               | JS framework used for binding data models to the UI                                |
| Cascading Style Sheets ([CSS][])             | Defines the style for a websites                                                   |
| Leaner Style Sheets ([Less][])               | Language extension for CSS                                                         |
| XML                                          | Format used by Adobe Commerce and Magento Open Source for configuration and layout |
| [Theme layouts][]                            | Layouts represent the structure for a page                                         |
| [Theme templates][]                          | Templates define how layout blocks are presented on a page                         |
| [Theme UI library][]                         | Frontend library for theme developers                                              |
| [Theme UI components][adobe's ui components] | Another frontend library for theme developers                                      |
| [Composer][]                                 | Package and dependency manager                                                     |

[jquery]: https://jquery.com/
[knockoutjs]: https://knockoutjs.com/
[css]: https://developer.adobe.com/commerce/frontend-core/guide/css/
[less]: https://lesscss.org/
[theme layouts]: https://developer.adobe.com/commerce/frontend-core/guide/layouts/
[theme templates]: https://developer.adobe.com/commerce/frontend-core/guide/templates/
[theme ui library]: https://commerce-docs.github.io/magento2-ui-library/

### PWA storefront developers

The barrier for entry for a PWA Studio developer is lower than a theme developer.
PWA Studio development requires less specialized knowledge to create a custom storefront, and
the tools and concepts it uses are more common and standard among the general front-end developer community.

The following table is a summary of general skills needed for PWA storefront development:

| Skill                                 | Description                                         |
| ------------------------------------- | --------------------------------------------------- |
| JavaScript (JS)                       | Core web language                                   |
| [React][]                             | A JS library for building user interfaces           |
| [Redux][]                             | A JS library for handling application state         |
| [GraphQL][]                           | An API query language                               |
| [webpack][]                           | Project assets bundler                              |
| Cascading Style Sheets ([CSS][])      | Defines the style for a websites                    |
| [CSS modules][]                       | Locally scoped style definitions                    |
| JavaScript Object Notation ([JSON][]) | Data-interchange format                             |
| [Peregrine][]                         | React components library provided by the PWA Studio |
| [Yarn][]                              | JS package and dependency manager                   |

[graphql]: /guides/general-concepts/graphql/
[css modules]: /guides/general-concepts/css-modules/
[peregrine]: /guides/packages/peregrine/
[redux]: https://redux.js.org/
[json]: https://www.json.org/
[webpack]: https://webpack.js.org/
