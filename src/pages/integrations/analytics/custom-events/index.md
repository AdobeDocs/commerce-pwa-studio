---
title: Custom events for Beacon analytics
---

PWA Studio 12.5 contains and eventing framework with a series of default events that cover common scenarios.
You can add new events so that you may track specific user interactions, or have a 3rd party module subscribe to existing events.

## Creating custom events

PWA Studio provides a [sample extension](https://github.com/magento/pwa-studio/tree/develop/packages/extensions/venia-sample-eventing) that shows how to add a custom event.

### main.js

`main.js` is where the work is done.

```javascript
import { useEffect } from 'react';
import { useEventingContext } from '@magento/peregrine/lib/context/eventing';

export default original => props => {
    const [observable, { dispatch }] = useEventingContext();

    useEffect(() => {
        const sub = observable.subscribe(<YOUR_EVENT> => {
            console.log('Logging event:', <YOUR_EVENT>);
        });

        dispatch('hello world');

        return () => {
            sub.unsubscribe();
        };
    }, [dispatch, observable]);

    return original(props);
};
```

### intercept.js

Edit your copy of `intercept.js` to pull in your custom extension by name:

```javascript
    talons.tap(({ App }) => {
        App.useApp.wrapWith('<your package name>');
    });
```

Create a `pacakge.json` file for your module so yarn can pull it in.

When complete, add it to your instance:

```bash
yarn add <your package name>
```

## Subscribe to events

You can have 3rd party modules subscribe to events.
To do so, XXXXXXX