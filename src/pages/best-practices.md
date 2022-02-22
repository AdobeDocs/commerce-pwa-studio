---
title: Best Practices for PWA Studio
---

# Best Practices for PWA Studio

Here are some best practices to keep in mind when working with PWA Studio.

## UPWARD

## GraphQL

## Dynamic Content

Using dynamic content can be challenging due to shifting layouts. It is helpful to end users if the page layout is established as quickly as possible. Dynamic content can lead to page flow issues.

- Use sizing as often as possible. If blocks have defined heights and widths, the layout engine can reserve those spaces faster. Use shims to enable block out image areas.
- Load layout CSS styles before the content arrives. However, excessive styles that are not initially needed can slow down processing. See 
- Think through what kind of dynamic content you want to expose and how you are going to expose it. The more code that can be delivered statically, the better.
- If possible, place dynamic content on an area of the page that is not initially visible. This will give the layout a chance to stabilize before the customer gets to that content.
- With dynamic PageBuilder content, adding a `column` element to the block code allows PWA to get
