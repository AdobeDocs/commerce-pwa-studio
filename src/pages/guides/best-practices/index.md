---
title: Best Practices for PWA Studio
description: Review best practices for using the PWA Studio framework to develop a storefront project.
keywords:
  - Storefront
---

# Best Practices for PWA Studio

Here are some best practices to keep in mind when working with PWA Studio.

## Dynamic Content

Using dynamic content can be challenging due to shifting layouts. It is helpful to end users if the page layout is established as early as possible. Dynamic content can lead to page flow issues.

- Use sizing as often as possible. If blocks have defined heights and widths, the layout engine can reserve those spaces faster. Use shimmers to enable block out image areas.
- Load layout CSS styles before the content arrives. However, excessive styles that are not initially needed can slow down processing.
- Think through what kind of dynamic content you want to expose and how you are going to expose it. The more code that can be delivered statically, the better.
- If possible, place dynamic content on an area of the page that is not initially visible. This will give the layout a chance to stabilize before the customer gets to that content.

## CSS

- Use [CSS modules](/guides/general-concepts/css-modules/) to separate and package your custom styles. This allows you to:
  
  - Create and manage component-specific styles
  - Avoid global naming collisions
  - Use class composition

## Custom modules

The PWA Studio [extensibility framework](/guides/general-concepts/extensibility/) should be used to customize the default Venia storefront.

- Separate code into modules with limited capabilities. Smaller, more numerous modules are easier to manage than one large module.
- Each module should have a clear, consistent set of interfaces.
- Use `targets` to intercept and modify code from an extension.

## GraphQL

- Always name your queries. This not only makes it easier for others to figure out, but it makes the query available to Apollo caching.

## Performance

Look into the [Apollo caching framework](https://www.apollographql.com/docs/react/caching/cache-configuration) for improved performance.
