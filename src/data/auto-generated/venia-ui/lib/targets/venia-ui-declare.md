## Members

<dl>
<dt><a href="#richContentRenderers">richContentRenderers</a> : <code>tapable.SyncHook</code></dt>
<dd><p>Provides access to the list of rendering strategies used by the
RichContent component.</p>
<p>This target collects a list of RichContentRenderer modules.
It builds an array of these renderers, which Venia&#39;s RichContent
component uses to try and render a block of &quot;rich&quot; content, such
as HTML.</p>
<p>Use this target if your backend system uses a customized content
storage format instead of plain HTML in &quot;rich content&quot; fields such
as product descriptions and CMS blocks.</p>
</dd>
<dt><a href="#routes">routes</a> : <code>tapable.AsyncSeriesWaterfall</code></dt>
<dd><p>Provides access to Venia&#39;s routing table.</p>
<p>This target lets you add new routes to your storefronts.
You can also modify Venia&#39;s existing client-side routes,
such as cart or checkout URLs.</p>
<p>NOTE: This target does not include routes controlled by the Magento
admin, such as CMS or catalog URLs.</p>
</dd>
<dt><a href="#checkoutPagePaymentTypes">checkoutPagePaymentTypes</a> : <code>tapable.SyncHook</code></dt>
<dd><p>Provides access to Venia&#39;s checkout page payment methods</p>
<p>This target lets you add new checkout page payment to your storefronts.</p>
</dd>
<dt><a href="#savedPaymentTypes">savedPaymentTypes</a> : <code>tapable.SyncHook</code></dt>
<dd><p>Provides access to Venia&#39;s saved payment methods</p>
<p>This target lets you add new saved payment method to your storefronts.</p>
</dd>
<dt><a href="#editablePaymentTypes">editablePaymentTypes</a> : <code>tapable.SyncHook</code></dt>
<dd><p>Provides access to Venia&#39;s editable payment methods</p>
<p>This target lets you add new editable payment method to your storefronts.</p>
</dd>
<dt><a href="#summaryPagePaymentTypes">summaryPagePaymentTypes</a> : <code>tapable.SyncHook</code></dt>
<dd><p>Provides access to Venia&#39;s summary page for a payment method.</p>
<p>This target allows you to add custom payment summary rendering for the summary page in the checkout.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#rendererInterceptFunction">rendererInterceptFunction</a> : <code>function</code></dt>
<dd><p>Intercept function signature for the <code>richContentRenderers</code> target.</p>
<p>Interceptors of <code>richContentRenderers</code> should call <code>.add</code> on the provided <a href="#RichContentRendererList">renderer list</a>.</p>
</dd>
<dt><a href="#routesInterceptFunction">routesInterceptFunction</a> ⇒ <code><a href="#RouteDefinition">Array.&lt;RouteDefinition&gt;</a></code></dt>
<dd><p>Intercept function signature for the <code>routes</code> target.</p>
<p>Interceptors of <code>routes</code> receive an array of <a href="#RouteDefinition">RouteDefinition</a>
objects, which Venia will use to either generate a custom <code>&lt;AuthRoute /&gt;</code>
component or a React Router <code>&lt;Route /&gt;</code> component in the final bundle based
on the <code>authed</code> prop.</p>
<p>The AuthRoute will either return a React Router <code>&lt;Route /&gt;</code> component or a
<code>&lt;Redirect /&gt;</code> component depending if the user is signed in and if the route
needs authentication or not.</p>
<p>Interceptors <strong>must</strong> return an array of RouteDefinitions, either by
mutating and then returning the array they received, or by returning a new
array of RouteDefinitions.</p>
</dd>
<dt><a href="#RouteDefinition">RouteDefinition</a> : <code>Object</code></dt>
<dd><p>A route definition object that describes a route in your storefront.</p>
</dd>
<dt><a href="#paymentInterceptFunction">paymentInterceptFunction</a> : <code>function</code></dt>
<dd><p>Intercept function signature for the <code>checkoutPagePaymentTypes</code> target.</p>
<p>Interceptors of <code>checkoutPagePaymentTypes</code> should call <code>.add</code> on the provided <a href="#CheckoutPaymentTypesDefinition">payment list</a>.</p>
</dd>
<dt><a href="#CheckoutPaymentDefinition">CheckoutPaymentDefinition</a> : <code>Object</code></dt>
<dd><p>A payment definition object that describes a checkout page payment in your storefront.</p>
</dd>
<dt><a href="#savedPaymentInterceptFunction">savedPaymentInterceptFunction</a> : <code>function</code></dt>
<dd><p>Intercept function signature for the <code>savedPaymentTypes</code> target.</p>
<p>Interceptors of <code>savedPaymentTypes</code> should call <code>.add</code> on the provided <a href="#SavedPaymentTypesDefinition">payment list</a>.</p>
</dd>
<dt><a href="#SavedPaymentDefinition">SavedPaymentDefinition</a> : <code>Object</code></dt>
<dd><p>A payment definition object that describes a saved payment in your storefront.</p>
</dd>
<dt><a href="#editablePaymentInterceptFunction">editablePaymentInterceptFunction</a> : <code>function</code></dt>
<dd><p>Intercept function signature for the <code>editablePaymentTypes</code> target.</p>
<p>Interceptors of <code>editablePaymentTypes</code> should call <code>.add</code> on the provided <a href="#EditablePaymentTypesDefinition">payment list</a>.</p>
</dd>
<dt><a href="#EditablePaymentDefinition">EditablePaymentDefinition</a> : <code>Object</code></dt>
<dd><p>A payment definition object that describes a saved payment in your storefront.</p>
</dd>
<dt><a href="#rootShimmerInterceptFunction">rootShimmerInterceptFunction</a> : <code>function</code></dt>
<dd><p>Intercept function signature for the <code>rootShimmerTypes</code> target.</p>
<p>Interceptors of <code>rootShimmerTypes</code> should call <code>.add</code> on the provided <a href="#RootShimmerTypesDefinition">shimmer list</a>.</p>
</dd>
<dt><a href="#RootShimmerTypesDefinition">RootShimmerTypesDefinition</a> : <code>Object</code></dt>
<dd><p>A root component shimmer object that can be used during page transitions on your storefront</p>
</dd>
</dl>

## Interfaces

<dl>
<dt><a href="#RichContentRenderer">RichContentRenderer</a> : <code>Object</code></dt>
<dd><p>Rich content renderers for the RichContent component must implement this
interface. Should be written as an ES Module—a module that exports functions
with these names, rather than an object with these functions as properties.</p>
</dd>
</dl>

<a name="RichContentRenderer"></a>

## RichContentRenderer : <code>Object</code>
Rich content renderers for the RichContent component must implement this
interface. Should be written as an ES Module—a module that exports functions
with these names, rather than an object with these functions as properties.

**Kind**: global interface  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Component | <code>React.Component</code> | The React component that does the actual rendering. It will receive the props passed to the RichContent object, including `html`. |
| canRender | <code>function</code> | Function that receives the content to be rendered as a string, and should return `true` if the `Component` can understand and render that content. |

**Example** *(A renderer that can render any content containing the string &quot;honk&quot;)*  
```jsx
import React from 'react';
import PlainHtmlRenderer from '@magento/venia-ui/components/richContent/plainHtmlRenderer';

function GooseRenderer(props) {
  const html = props.html.replace(/honk/gim, '<strong>HONK!🦢</strong>');
  return <PlainHtmlRenderer html={html} />;
}
export const Component = GooseRenderer;

export function canRender(content) {
  return /honk/gim.test(content);
}
```
<a name="richContentRenderers"></a>

## richContentRenderers : <code>tapable.SyncHook</code>
Provides access to the list of rendering strategies used by the
RichContent component.

This target collects a list of RichContentRenderer modules.
It builds an array of these renderers, which Venia's RichContent
component uses to try and render a block of "rich" content, such
as HTML.

Use this target if your backend system uses a customized content
storage format instead of plain HTML in "rich content" fields such
as product descriptions and CMS blocks.

**Kind**: global variable  
**See**

- [Intercept function signature](#rendererInterceptFunction)
- [RichContentRendererList](#RichContentRendererList)
- [RichContentRenderer](#RichContentRenderer)

**Example** *(Add a renderer)*  
```js
targets.of('@magento/venia-ui').richContentRenderers.tap(
  renderers => renderers.add({
    componentName: 'AdobeXM',
    importPath: '@adobe/xm-components/xm-renderer'
  })
);
```
<a name="routes"></a>

## routes : <code>tapable.AsyncSeriesWaterfall</code>
Provides access to Venia's routing table.

This target lets you add new routes to your storefronts.
You can also modify Venia's existing client-side routes,
such as cart or checkout URLs.

NOTE: This target does not include routes controlled by the Magento
admin, such as CMS or catalog URLs.

**Kind**: global variable  
**See**

- [Intercept function signature](#routesInterceptFunction)
- [Route definition object](#RouteDefinition)

**Example** *(Add a custom route for a blog module)*  
```js
const veniaTargets = targets.of('@magento/venia-ui')
const routes = veniaTargets.routes
routes.tap(
  routesArray => {
     routesArray.push({
         name: 'Blog',
         pattern: '/blog/:slug/:id',
         path: '@partner/pwa-studio-blog'
     });
     return routesArray;
  })
```
<a name="checkoutPagePaymentTypes"></a>

## checkoutPagePaymentTypes : <code>tapable.SyncHook</code>
Provides access to Venia's checkout page payment methods

This target lets you add new checkout page payment to your storefronts.

**Kind**: global variable  
**See**

- [Intercept function signature](#paymentInterceptFunction)
- [CheckoutPaymentTypes](#CheckoutPaymentTypesDefinition)
- [CheckoutPayment definition object](#CheckoutPaymentDefinition)

**Example** *(Add a payment)*  
```js
targets.of('@magento/venia-ui').checkoutPagePaymentTypes.tap(
  checkoutPagePaymentTypes => checkoutPagePaymentTypes.add({
    paymentCode: 'braintree',
    importPath: '@magento/braintree_payment'
  })
);
```
<a name="savedPaymentTypes"></a>

## savedPaymentTypes : <code>tapable.SyncHook</code>
Provides access to Venia's saved payment methods

This target lets you add new saved payment method to your storefronts.

**Kind**: global variable  
**See**

- [Intercept function signature](#savedPaymentInterceptFunction)
- [SavedPaymentTypes](#SavedPaymentTypesDefinition)
- [SavedPayment definition object](#SavedPaymentDefinition)

**Example** *(Add a payment)*  
```js
targets.of('@magento/venia-ui').savedPaymentTypes.tap(
  savedPaymentTypes => savedPaymentTypes.add({
    paymentCode: 'braintree',
    importPath: '@magento/braintree_payment'
  })
);
```
<a name="editablePaymentTypes"></a>

## editablePaymentTypes : <code>tapable.SyncHook</code>
Provides access to Venia's editable payment methods

This target lets you add new editable payment method to your storefronts.

**Kind**: global variable  
**See**

- [Intercept function signature](#editablePaymentInterceptFunction)
- [EditablePaymentTypes](#EditabledPaymentTypesDefinition)
- [EditablePayment definition object](#EditablePaymentDefinition)

**Example** *(Add a payment)*  
```js
targets.of('@magento/venia-ui').editablePaymentTypes.tap(
  editablePaymentTypes => editablePaymentTypes.add({
    paymentCode: 'braintree',
    importPath: '@magento/braintree_payment'
  })
);
```
<a name="summaryPagePaymentTypes"></a>

## summaryPagePaymentTypes : <code>tapable.SyncHook</code>
Provides access to Venia's summary page for a payment method.

This target allows you to add custom payment summary rendering for the summary page in the checkout.

**Kind**: global variable  
**See**

- [Intercept function signature](summaryPagePaymentTypesInterceptFunction)
- [EditablePaymentTypes](#SavedPaymentTypesDefinition)
- [EditablePayment definition object](#SavedPaymentDefinition)

**Example** *(Add a payment)*  
```js
targets.of('@magento/venia-ui').editablePaymentTypes.tap(
  editablePaymentTypes => editablePaymentTypes.add({
    paymentCode: 'braintree',
    importPath: '@magento/braintree_payment'
  })
);
```
<a name="rendererInterceptFunction"></a>

## rendererInterceptFunction : <code>function</code>
Intercept function signature for the `richContentRenderers` target.

Interceptors of `richContentRenderers` should call `.add` on the provided [renderer list](#RichContentRendererList).

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| renderers | <code>RichContentRendererList</code> | The list of renderers registered so far in the build. |

<a name="routesInterceptFunction"></a>

## routesInterceptFunction ⇒ [<code>Array.&lt;RouteDefinition&gt;</code>](#RouteDefinition)
Intercept function signature for the `routes` target.

Interceptors of `routes` receive an array of [RouteDefinition](#RouteDefinition)
objects, which Venia will use to either generate a custom `<AuthRoute />`
component or a React Router `<Route />` component in the final bundle based
on the `authed` prop.

The AuthRoute will either return a React Router `<Route />` component or a
`<Redirect />` component depending if the user is signed in and if the route
needs authentication or not.

Interceptors **must** return an array of RouteDefinitions, either by
mutating and then returning the array they received, or by returning a new
array of RouteDefinitions.

**Kind**: global typedef  
**Returns**: [<code>Array.&lt;RouteDefinition&gt;</code>](#RouteDefinition) - Your function must return the modified array,
or a new array you have constructed  

| Param | Type | Description |
| --- | --- | --- |
| routes | [<code>Array.&lt;RouteDefinition&gt;</code>](#RouteDefinition) | Array of registered routes |

**Example**  
```js
const intercept = routesArray => {
     return [
       { name: 'Backstop', pattern: '*', path: '@my-components/backstop' },
       ...routesArray
     ]
}
```
<a name="RouteDefinition"></a>

## RouteDefinition : <code>Object</code>
A route definition object that describes a route in your storefront.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Friendly name for the React component |
| path | <code>string</code> | Resolvable path to the component the   Route component will render |
| pattern | <code>string</code> | Route pattern. This is used as the   `path` prop for the `<Route/>` component. |
| [exact] | <code>boolean</code> | Tells the router whether it should match the route   exactly or not. This property is optional. |
| [authed] | <code>boolean</code> | Uses the custom AuthRoute component if the user   needs to be signed in to access the route. This property is optional. |
| [redirectTo] | <code>string</code> | Url will be the redirection url when user are   not signed in and are trying to access an authed route.   This property is optional. Default is "/". |

**Example** *(A custom route with a URL parameter)*  
```js
const myCustomRoute = {
     name: 'MyRoute',
     pattern: '/my-route/:myRouteParam',
     path: '@my-components/my-route-component'
}
```
<a name="paymentInterceptFunction"></a>

## paymentInterceptFunction : <code>function</code>
Intercept function signature for the `checkoutPagePaymentTypes` target.

Interceptors of `checkoutPagePaymentTypes` should call `.add` on the provided [payment list](#CheckoutPaymentTypesDefinition).

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| renderers | <code>CheckoutPaymentTypesDefinition</code> | The list of payments registered so far in the build. |

<a name="CheckoutPaymentDefinition"></a>

## CheckoutPaymentDefinition : <code>Object</code>
A payment definition object that describes a checkout page payment in your storefront.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| paymentCode | <code>string</code> | is use to map your payment |
| importPath | <code>string</code> | Resolvable path to the component the   Route component will render |

**Example** *(A custom payment method)*  
```js
const myCustomPayment = {
     paymentCode: 'cc',
    importPath: '@partner/module/path_to_your_component'
}
```
<a name="savedPaymentInterceptFunction"></a>

## savedPaymentInterceptFunction : <code>function</code>
Intercept function signature for the `savedPaymentTypes` target.

Interceptors of `savedPaymentTypes` should call `.add` on the provided [payment list](#SavedPaymentTypesDefinition).

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| renderers | <code>SavedPaymentTypesDefinition</code> | The list of saved payments registered so far in the build. |

<a name="SavedPaymentDefinition"></a>

## SavedPaymentDefinition : <code>Object</code>
A payment definition object that describes a saved payment in your storefront.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| paymentCode | <code>string</code> | is use to map your payment |
| importPath | <code>string</code> | Resolvable path to the component the   Route component will render |

**Example** *(A custom payment method)*  
```js
const myCustomPayment = {
     paymentCode: 'cc',
     importPath: '@partner/module/path_to_your_component'
}
```
<a name="editablePaymentInterceptFunction"></a>

## editablePaymentInterceptFunction : <code>function</code>
Intercept function signature for the `editablePaymentTypes` target.

Interceptors of `editablePaymentTypes` should call `.add` on the provided [payment list](#EditablePaymentTypesDefinition).

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| renderers | <code>EditablePaymentTypesDefinition</code> | so far in the build. |

<a name="EditablePaymentDefinition"></a>

## EditablePaymentDefinition : <code>Object</code>
A payment definition object that describes a saved payment in your storefront.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| paymentCode | <code>string</code> | is use to map your payment |
| importPath | <code>string</code> | Resolvable path to the component the   Route component will render |

**Example** *(A custom payment method)*  
```js
const myCustomPayment = {
     paymentCode: 'cc',
     importPath: '@partner/module/path_to_your_component'
}
```
<a name="rootShimmerInterceptFunction"></a>

## rootShimmerInterceptFunction : <code>function</code>
Intercept function signature for the `rootShimmerTypes` target.

Interceptors of `rootShimmerTypes` should call `.add` on the provided [shimmer list](#RootShimmerTypesDefinition).

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| shimmers | [<code>RootShimmerTypesDefinition</code>](#RootShimmerTypesDefinition) | so far in the build. |

<a name="RootShimmerTypesDefinition"></a>

## RootShimmerTypesDefinition : <code>Object</code>
A root component shimmer object that can be used during page transitions on your storefront

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| shimmerType | <code>string</code> | is use to map your page type to the component |
| importPath | <code>string</code> | Resolvable path to the component the   Shimmer component will render |

**Example** *(A CMS Page Shimmer)*  
```js
const cmsShimmer = {
     shimmerType: 'CMS_PAGE_SHIMMER',
     importPath: '@partner/module/path_to_your_component'
}
```


For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/targets/venia-ui-declare.js).