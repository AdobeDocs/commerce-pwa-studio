---
title: General concepts
description: Learn about general development concepts and features of the PWA Studio framework.
keywords:
  - Storefront
---

# General concepts

The tools provided by the PWA Studio project allows you to create websites that are fast, mobile-friendly, and reliable.
This topic lists the basic concepts you need to know to work with PWA Studio tools.

<DiscoverBlock width="100%" slots="heading, link, text"/>

## Development concepts

[CSS modules](css-modules/)

CSS modules are modular and reusable CSS styles.
This allows you to develop components with styles that do not conflict with external style definitions.

<DiscoverBlock width="100%" slots="link, text"/>

[Configuration management](configuration/)

PWA Studio provides tools to help manage configurations across different environments, such as local development, staging, and production.

<DiscoverBlock width="100%" slots="link, text"/>

[GraphQL](graphql/)

GraphQL is a specification for a data query language on the client side and a service layer on the server side.
It is used to request and push data in a progressive web application.

<DiscoverBlock width="100%" slots="link, text"/>

[Routing](routing/)

Routing is the process of mapping a URL to specific page resources.
Learn what tools PWA Studio provides to support both server-side and client-side routing.

<DiscoverBlock width="100%" slots="link, text"/>

[State management](state-management/)

State management describes the way the application handles changing state data as a result of user interactions.

<DiscoverBlock width="100%" slots="link, text"/>

[Talons](talons/)

Peregrine Talons are the logic component counterparts for Venia UI components.
Each Talon in Peregrine is designed to provide data or perform side effects for a specific Venia UI component.

<DiscoverBlock width="100%" slots="heading, link, text"/>

## Application features

[Application shell](application-shell/)

An application shell provides the basic user interface structure for a progressive web application.

<DiscoverBlock width="100%" slots="link, text"/>

[Client-side caching](client-side-caching/)

Client-side caching is the process of storing data into a local cache after a network fetch.

<DiscoverBlock width="100%" slots="link, text"/>

[Content rendering](content-rendering/)

Content rendering explains how a browser gets the final HTML content for a requested page.

<DiscoverBlock width="100%" slots="link, text"/>

[Extensibility](extensibility/)

Learn about PWA Studio's extensibility framework and how you can extend the base Venia storefront application.

<DiscoverBlock width="100%" slots="link, text"/>

[Internationalization](internationalization/)

Internationalization (i18n) is a feature that lets you localize content for a culture, region, or language.

## Common terms

The following is a list of common terms and definitions associated with PWA Studio development.

**Service worker**
: A service worker is a script that runs in the background.
Progressive web applications use service workers for caching and resource retrieval.

**Component data binding**
: Component data binding refers to the way data flows between the source and a UI component.
Progressive web applications use data binding patterns to connect dynamic data with the user interface.

**Client state, reducers, and actions**
: Client state, reducers, and actions are [Redux][] concepts used to manage and handle the state of a web application.

[redux]: https://redux.js.org/introduction/core-concepts

**Loading and offline states**
: Loading and offline are both states that must be handled by progressive web applications.

**Container extensibility**
: Writing extensible containers allow others to re-use and alter your container without modifying the source.

**Performance patterns**
: Performance is an important feature for a progressive web app.
There are many strategies and patterns available to help boost the performance of a PWA.

**Root components and routing**
: The root component of an application is the DOM node under which all other nodes are managed by React.
Routing is the ability to map a URL pattern to the appropriate handler.

**Critical path**
: The critical path for rendering refers to the steps the browser takes to process the HTML, CSS, and JavaScript files to display a website.
Optimizing the critical path is important to get the best performance out of a progressive web application.
