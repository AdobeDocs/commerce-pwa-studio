##Members

<dl>
<dt><a href="#hooks">hooks</a> : <inlineCode>tapable.AsyncSeriesHook</inlineCode></dt>
<dd>

Provides access to Peregrine React hooks.

This target collects requests to intercept and "wrap" individual Peregrine
hooks in decorator functions.

Use this target to run custom code whenever the application calls a
Peregrine hook.
You can also use this target to modify the behavior or output returned by
a hook.

</dd>
<dt><a href="#talons">talons</a> : <inlineCode>tapable.AsyncSeriesHook</inlineCode></dt>
<dd>

Provides access to Peregrine talon wrappers.

This target collects requests to intercept and "wrap" individual Peregrine
talons in decorator functions.

Use this target to run custom code whenever the application calls a
Peregrine talon.
You can also use this target to modify the behavior or output returned by
a talon.

</dd>
</dl>

##Typedefs

<dl>
<dt><a href="#hookInterceptFunction">hookInterceptFunction</a> : <inlineCode>function</inlineCode></dt>
<dd>

Intercept function signature for the `talons` and `hooks` targets.

Interceptors of `hooks` should call `wrapWith` on the individual hooks in
the provided [`HookInterceptorSet` object](http://pwastudio.io/peregrine/reference/targets/wrappable-talons).

</dd>
</dl>


Provides access to Peregrine React hooks.

This target collects requests to intercept and "wrap" individual Peregrine
hooks in decorator functions.

Use this target to run custom code whenever the application calls a
Peregrine hook.
You can also use this target to modify the behavior or output returned by
a hook.

*global* *variable*
**See**: [Intercept function signature](#hookInterceptFunction)  
**Example** *(Access the tapable object)*  
```js
const peregrineTargets = targets.of('@magento/peregrine');
const hooksTarget = peregrineTargets.hooks;
```
**Example** *(Wrap the &#x60;useAwaitQuery()&#x60; hook  with a logging extension)*  
```js

hooksTargets.tap( => {
  hook.useAwaitQuery.wrapWith('@my-extensions/log-wrapper');
})
```

Provides access to Peregrine talon wrappers.

This target collects requests to intercept and "wrap" individual Peregrine
talons in decorator functions.

Use this target to run custom code whenever the application calls a
Peregrine talon.
You can also use this target to modify the behavior or output returned by
a talon.

*global* *variable*
**See**: [Intercept function signature](#hookInterceptFunction)  
**Example** *(Access the tapable object)*  
```js
const peregrineTargets = targets.of('@magento/peregrine');
const talonsTarget = peregrineTargets.talons;
```
**Example** *(Wrap the &#x60;useApp()&#x60; hook  with a logging extension)*  
```js

talonsTarget.tap(talons => {
  talons.App.useApp.wrapWith('@my-extensions/log-wrapper');
})
```

Intercept function signature for the `talons` and `hooks` targets.

Interceptors of `hooks` should call `wrapWith` on the individual hooks in
the provided [`HookInterceptorSet` object](http://pwastudio.io/peregrine/reference/targets/wrappable-talons).

*global* *typedef*


[pwa-studio/packages/peregrine/lib/targets/peregrine-declare.js](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/targets/peregrine-declare.js)