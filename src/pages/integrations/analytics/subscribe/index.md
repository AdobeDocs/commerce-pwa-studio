---
title: Subscribing to events
---

# Subscribing to events

3rd party modules can subscribe to events, allowing you to use other analytics collections schemes.

The [venia-sample-eventing](https://github.com/magento/pwa-studio/tree/develop/packages/extensions/venia-sample-eventing) module shows how to subscribe to events.

Within `main.js`, the subscription code is:

```javascript
const [observable, { dispatch }] = useEventingContext();

    useEffect(() => {
        const sub = observable.subscribe(async event => {
            switch (event.type) {
                case 'CART_PAGE_VIEW':
                    console.log('Logging event:', {
                        type: event.type,
                        ...event.payload,
                        products: formatCartProducts(event.payload.products)
                    });
                    break;
                case 'CHECKOUT_PAGE_VIEW':
                    console.log('Logging event:', {
                        type: event.type,
                        ...event.payload,
                        products: formatCartProducts(event.payload.products)
                    });
                    break;
                case 'ORDER_CONFIRMATION_PAGE_VIEW':
                    console.log('Logging event:', {
                        type: event.type,
                        ...event.payload,
                        products: formatCartProducts(event.payload.products)
                    });
                    break;
                default:
                    console.log('Logging event:', event);
                    break;
            }
        });
```
