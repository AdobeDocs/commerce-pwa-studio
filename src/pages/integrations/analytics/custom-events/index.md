---
title: Custom events for Beacon analytics
---

The Beacon extension comes with a series of default events that cover the most common scenarios.
It is possible to add new events so that you may track specific user interactions.

## Install the sample extension

There is an extension that shows how to add a custom event.
Add it with a Composer command:

```bash
yarn add <your package name>
```

## main.js

`main.js` is where the work is done.

```javascript
import { useEffect } from 'react';
import { useEventingContext } from '@magento/peregrine/lib/context/eventing';

export default original => props => {
    const [observable, { dispatch }] = useEventingContext();

    useEffect(() => {
        const sub = observable.subscribe(event => {
            console.log('Logging event:', event);
        });

        dispatch('hello world');

        return () => {
            sub.unsubscribe();
        };
    }, [dispatch, observable]);

    return original(props);
};
```

## intercept.js

Edit your copy of `intercept.js` to pull in your custom extension by name:

```javascript
    talons.tap(({ App }) => {
        App.useApp.wrapWith('<your package name>');
    });
```

