---
title: Eventing in PWA Studio
---

# Eventing in PWA Studio

PWA Studio 12.5.0 introduces an eventing framework for collecting user interactions with your site.

A set of [default events](/api/events/) are included within PWA Studio.
[Custom events](/tutorials/events/custom-events/) can be written to cover your own specific needs.

This event data can be collected and sent to analytics systems for processing.

For Adobe Commerce users with an [Adobe Experience Platform](https://business.adobe.com/products/experience-platform/adobe-experience-platform.html) subscription, an [extension](/integrations/adobe-commerce/aep/) is available for PWA studio that connects to an Adobe Commerce backend. 

The Adobe Commerce backend can be [configured](/integrations/adobe-commerce/aep/) to send event data to the Adobe Experience Platform.
It is also possible to [subscribe](/tutorials/events/custom-events/) to events so that event data can be sent to other analytics platforms.

![Basic event flow](images/analytics-flow.png)