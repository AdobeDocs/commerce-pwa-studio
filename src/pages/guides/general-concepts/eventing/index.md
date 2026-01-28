---
title: Eventing in PWA Studio
description: Learn the basics about eventing in the PWA Studio framework.
keywords:
  - Events
  - Storefront
  - Tools
---

# Eventing in PWA Studio

PWA Studio 12.5.0 introduces an eventing framework for collecting user interactions with your site.

A set of [default events](/api/events/) are included within PWA Studio. These events cover the most common interactions most store owners would likely want to track: user log in/out, product clicks, cart operations, etc.
[Custom events](/tutorials/events/custom-events/) can be written to cover your own specific needs.

It is also possible to [subscribe](/tutorials/events/custom-events/) to events so that event data can be sent to other analytics platforms.

This event data can be collected and sent to analytics systems for processing.

For Adobe Commerce users with an [Adobe Experience Platform](https://business.adobe.com/products/experience-platform/adobe-experience-platform.html) subscription, an [extension](/integrations/adobe-commerce/aep/) is available for PWA studio that connects to an Adobe Commerce backend.

The Adobe Commerce backend can be [configured](/integrations/adobe-commerce/aep/) to send event data to the Adobe Experience Platform.

## Eventing basics

At the core of the eventing framework is an observable.
When extensions subscribe to the observable, the framework notifies it whenever the application publishes an event and sends the event data to the extension for handling.

The framework allows extensions to subscribe to it and notifies those extensions when the application dispatches an event.
It also keeps track of all the events that have occurred since app initialization allowing extensions that subscribe later can still process events that have already occurred. The [EventingContextProvider](https://github.com/magento/pwa-studio/tree/develop/packages/peregrine/lib/context/eventing.js#L13-L54) component is the data provider for the eventing context.

Developers can access the observable object and the API using the [`useEventingContext()`](https://github.com/magento/pwa-studio/tree/develop/packages/extensions/venia-sample-eventing/main.js#L29) hook.
The observable object is used by extensions to subscribe to an event by passing in a callback function that is passed to the event object, containing the type and payload. See the [venia-sample-eventing](https://github.com/magento/pwa-studio/tree/develop/packages/extensions/venia-sample-eventing/main.js#L32-L59) module and the [experience-platform-connector](https://github.com/magento/pwa-studio/tree/develop/packages/extensions/experience-platform-connector/src/main.js#L83-L85) for working examples.

The API contains a [`dispatch()`](https://github.com/magento/pwa-studio/tree/develop/packages/extensions/experience-platform-connector/src/wrappers/wrapUseAutocomplete.js#L23-L35) function that storefront components use to send events.
