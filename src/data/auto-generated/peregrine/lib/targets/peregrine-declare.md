## Members

<dl>
<dt><a href="#hooks">hooks</a> : <code>tapable.AsyncSeriesHook</code></dt>
<dd><p>Provides access to Peregrine React hooks.</p>
<p>This target collects requests to intercept and &quot;wrap&quot; individual Peregrine
hooks in decorator functions.</p>
<p>Use this target to run custom code whenever the application calls a
Peregrine hook.
You can also use this target to modify the behavior or output returned by
a hook.</p>
</dd>
<dt><a href="#talons">talons</a> : <code>tapable.AsyncSeriesHook</code></dt>
<dd><p>Provides access to Peregrine talon wrappers.</p>
<p>This target collects requests to intercept and &quot;wrap&quot; individual Peregrine
talons in decorator functions.</p>
<p>Use this target to run custom code whenever the application calls a
Peregrine talon.
You can also use this target to modify the behavior or output returned by
a talon.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#hookInterceptFunction">hookInterceptFunction</a> : <code>function</code></dt>
<dd><p>Intercept function signature for the <code>talons</code> and <code>hooks</code> targets.</p>
<p>Interceptors of <code>hooks</code> should call <code>wrapWith</code> on the individual hooks in
the provided <a href="http://pwastudio.io/peregrine/reference/targets/wrappable-talons"><code>HookInterceptorSet</code> object</a>.</p>
</dd>
</dl>

<a name="hooks"></a>

## hooks : <code>tapable.AsyncSeriesHook</code>
Provides access to Peregrine React hooks.

This target collects requests to intercept and "wrap" individual Peregrine
hooks in decorator functions.

Use this target to run custom code whenever the application calls a
Peregrine hook.
You can also use this target to modify the behavior or output returned by
a hook.

**Kind**: global variable  
**See**

- [list of wrappable hooks][]
- [Intercept function signature](#hookInterceptFunction)

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
<a name="talons"></a>

## talons : <code>tapable.AsyncSeriesHook</code>
Provides access to Peregrine talon wrappers.

This target collects requests to intercept and "wrap" individual Peregrine
talons in decorator functions.

Use this target to run custom code whenever the application calls a
Peregrine talon.
You can also use this target to modify the behavior or output returned by
a talon.

**Kind**: global variable  
**See**

- [list of wrappable talons][]
- [Intercept function signature](#hookInterceptFunction)

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
<a name="hookInterceptFunction"></a>

## hookInterceptFunction : <code>function</code>
Intercept function signature for the `talons` and `hooks` targets.

Interceptors of `hooks` should call `wrapWith` on the individual hooks in
the provided [`HookInterceptorSet` object](http://pwastudio.io/peregrine/reference/targets/wrappable-talons).

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| hookInterceptors | <code>HookInterceptorSet</code> | Registry of wrappable hook namespaces |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/targets/peregrine-declare.js).