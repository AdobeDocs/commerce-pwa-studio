
Members

<dl>
<dt><a href="#richContentRenderers">richContentRenderers</a> : <inlineCode>tapable.SyncHook</inlineCode></dt>
<dd>

Provides access to the list of rendering strategies used by the
RichContent component.

This target collects a list of RichContentRenderer modules.
It builds an array of these renderers, which Venia's RichContent
component uses to try and render a block of "rich" content, such
as HTML.

Use this target if your backend system uses a customized content
storage format instead of plain HTML in "rich content" fields such
as product descriptions and CMS blocks.

</dd>
<dt><a href="#routes">routes</a> : <inlineCode>tapable.AsyncSeriesWaterfall</inlineCode></dt>
<dd>

Provides access to Venia's routing table.

This target lets you add new routes to your storefronts.
You can also modify Venia's existing client-side routes,
such as cart or checkout URLs.

NOTE: This target does not include routes controlled by the Magento
admin, such as CMS or catalog URLs.

</dd>
<dt><a href="#checkoutPagePaymentTypes">checkoutPagePaymentTypes</a> : <inlineCode>tapable.SyncHook</inlineCode></dt>
<dd>

Provides access to Venia's checkout page payment methods

This target lets you add new checkout page payment to your storefronts.

</dd>
<dt><a href="#savedPaymentTypes">savedPaymentTypes</a> : <inlineCode>tapable.SyncHook</inlineCode></dt>
<dd>

Provides access to Venia's saved payment methods

This target lets you add new saved payment method to your storefronts.

</dd>
<dt><a href="#editablePaymentTypes">editablePaymentTypes</a> : <inlineCode>tapable.SyncHook</inlineCode></dt>
<dd>

Provides access to Venia's editable payment methods

This target lets you add new editable payment method to your storefronts.

</dd>
<dt><a href="#summaryPagePaymentTypes">summaryPagePaymentTypes</a> : <inlineCode>tapable.SyncHook</inlineCode></dt>
<dd>

Provides access to Venia's summary page for a payment method.

This target allows you to add custom payment summary rendering for the summary page in the checkout.

</dd>
</dl>

Typedefs

<dl>
<dt><a href="#rendererInterceptFunction">rendererInterceptFunction</a> : <inlineCode>function</inlineCode></dt>
<dd>

Intercept function signature for the `richContentRenderers` target.

Interceptors of `richContentRenderers` should call `.add` on the provided [renderer list](#RichContentRendererList).

</dd>
<dt><a href="#routesInterceptFunction">routesInterceptFunction</a> ⇒ <inlineCode><a href="#RouteDefinition">Array.&lt;RouteDefinition&gt;</a></inlineCode></dt>
<dd>

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

</dd>
<dt><a href="#RouteDefinition">RouteDefinition</a> : <inlineCode>Object</inlineCode></dt>
<dd>

A route definition object that describes a route in your storefront.

</dd>
<dt><a href="#paymentInterceptFunction">paymentInterceptFunction</a> : <inlineCode>function</inlineCode></dt>
<dd>

Intercept function signature for the `checkoutPagePaymentTypes` target.

Interceptors of `checkoutPagePaymentTypes` should call `.add` on the provided [payment list](#CheckoutPaymentTypesDefinition).

</dd>
<dt><a href="#CheckoutPaymentDefinition">CheckoutPaymentDefinition</a> : <inlineCode>Object</inlineCode></dt>
<dd>

A payment definition object that describes a checkout page payment in your storefront.

</dd>
<dt><a href="#savedPaymentInterceptFunction">savedPaymentInterceptFunction</a> : <inlineCode>function</inlineCode></dt>
<dd>

Intercept function signature for the `savedPaymentTypes` target.

Interceptors of `savedPaymentTypes` should call `.add` on the provided [payment list](#SavedPaymentTypesDefinition).

</dd>
<dt><a href="#SavedPaymentDefinition">SavedPaymentDefinition</a> : <inlineCode>Object</inlineCode></dt>
<dd>

A payment definition object that describes a saved payment in your storefront.

</dd>
<dt><a href="#editablePaymentInterceptFunction">editablePaymentInterceptFunction</a> : <inlineCode>function</inlineCode></dt>
<dd>

Intercept function signature for the `editablePaymentTypes` target.

Interceptors of `editablePaymentTypes` should call `.add` on the provided [payment list](#EditablePaymentTypesDefinition).

</dd>
<dt><a href="#EditablePaymentDefinition">EditablePaymentDefinition</a> : <inlineCode>Object</inlineCode></dt>
<dd>

A payment definition object that describes a saved payment in your storefront.

</dd>
<dt><a href="#rootShimmerInterceptFunction">rootShimmerInterceptFunction</a> : <inlineCode>function</inlineCode></dt>
<dd>

Intercept function signature for the `rootShimmerTypes` target.

Interceptors of `rootShimmerTypes` should call `.add` on the provided [shimmer list](#RootShimmerTypesDefinition).

</dd>
<dt><a href="#RootShimmerTypesDefinition">RootShimmerTypesDefinition</a> : <inlineCode>Object</inlineCode></dt>
<dd>

A root component shimmer object that can be used during page transitions on your storefront

</dd>
</dl>

Interfaces

<dl>
<dt><a href="#RichContentRenderer">RichContentRenderer</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Rich content renderers for the RichContent component must implement this
interface. Should be written as an ES Module—a module that exports functions
with these names, rather than an object with these functions as properties.

</dd>
</dl>

Rich content renderers for the RichContent component must implement this
interface. Should be written as an ES Module—a module that exports functions
with these names, rather than an object with these functions as properties.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Component | `React.Component` | The React component that does the actual rendering. It will receive the props passed to the RichContent object, including `html`. |
| canRender | `function` | Function that receives the content to be rendered as a string, and should return `true` if the `Component` can understand and render that content. |

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

Provides access to the list of rendering strategies used by the
RichContent component.

This target collects a list of RichContentRenderer modules.
It builds an array of these renderers, which Venia's RichContent
component uses to try and render a block of "rich" content, such
as HTML.

Use this target if your backend system uses a customized content
storage format instead of plain HTML in "rich content" fields such
as product descriptions and CMS blocks.

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

Provides access to Venia's routing table.

This target lets you add new routes to your storefronts.
You can also modify Venia's existing client-side routes,
such as cart or checkout URLs.

NOTE: This target does not include routes controlled by the Magento
admin, such as CMS or catalog URLs.

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

Provides access to Venia's checkout page payment methods

This target lets you add new checkout page payment to your storefronts.

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

Provides access to Venia's saved payment methods

This target lets you add new saved payment method to your storefronts.

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

Provides access to Venia's editable payment methods

This target lets you add new editable payment method to your storefronts.

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

Provides access to Venia's summary page for a payment method.

This target allows you to add custom payment summary rendering for the summary page in the checkout.

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

Intercept function signature for the `richContentRenderers` target.

Interceptors of `richContentRenderers` should call `.add` on the provided [renderer list](#RichContentRendererList).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| renderers | `RichContentRendererList` | The list of renderers registered so far in the build. |

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

**Returns:**
[`Array.<RouteDefinition>`](#RouteDefinition)
   — Your function must return the modified array,
or a new array you have constructed

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| routes | [`Array.<RouteDefinition>`](#RouteDefinition) | Array of registered routes |

**Example**  

```js
const intercept = routesArray => {
     return [
       { name: 'Backstop', pattern: '*', path: '@my-components/backstop' },
       ...routesArray
     ]
}
```

A route definition object that describes a route in your storefront.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | `string` | Friendly name for the React component |
| path | `string` | Resolvable path to the component the   Route component will render |
| pattern | `string` | Route pattern. This is used as the   `path` prop for the `<Route/>` component. |
| [exact] | `boolean` | Tells the router whether it should match the route   exactly or not. This property is optional. |
| [authed] | `boolean` | Uses the custom AuthRoute component if the user   needs to be signed in to access the route. This property is optional. |
| [redirectTo] | `string` | Url will be the redirection url when user are   not signed in and are trying to access an authed route.   This property is optional. Default is "/". |

**Example** *(A custom route with a URL parameter)*  

```js
const myCustomRoute = {
     name: 'MyRoute',
     pattern: '/my-route/:myRouteParam',
     path: '@my-components/my-route-component'
}
```

Intercept function signature for the `checkoutPagePaymentTypes` target.

Interceptors of `checkoutPagePaymentTypes` should call `.add` on the provided [payment list](#CheckoutPaymentTypesDefinition).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| renderers | `CheckoutPaymentTypesDefinition` | The list of payments registered so far in the build. |

A payment definition object that describes a checkout page payment in your storefront.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| paymentCode | `string` | is use to map your payment |
| importPath | `string` | Resolvable path to the component the   Route component will render |

**Example** *(A custom payment method)*  

```js
const myCustomPayment = {
     paymentCode: 'cc',
    importPath: '@partner/module/path_to_your_component'
}
```

Intercept function signature for the `savedPaymentTypes` target.

Interceptors of `savedPaymentTypes` should call `.add` on the provided [payment list](#SavedPaymentTypesDefinition).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| renderers | `SavedPaymentTypesDefinition` | The list of saved payments registered so far in the build. |

A payment definition object that describes a saved payment in your storefront.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| paymentCode | `string` | is use to map your payment |
| importPath | `string` | Resolvable path to the component the   Route component will render |

**Example** *(A custom payment method)*  

```js
const myCustomPayment = {
     paymentCode: 'cc',
     importPath: '@partner/module/path_to_your_component'
}
```

Intercept function signature for the `editablePaymentTypes` target.

Interceptors of `editablePaymentTypes` should call `.add` on the provided [payment list](#EditablePaymentTypesDefinition).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| renderers | `EditablePaymentTypesDefinition` | so far in the build. |

A payment definition object that describes a saved payment in your storefront.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| paymentCode | `string` | is use to map your payment |
| importPath | `string` | Resolvable path to the component the   Route component will render |

**Example** *(A custom payment method)*  

```js
const myCustomPayment = {
     paymentCode: 'cc',
     importPath: '@partner/module/path_to_your_component'
}
```

Intercept function signature for the `rootShimmerTypes` target.

Interceptors of `rootShimmerTypes` should call `.add` on the provided [shimmer list](#RootShimmerTypesDefinition).

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| shimmers | [`RootShimmerTypesDefinition`](#RootShimmerTypesDefinition) | so far in the build. |

A root component shimmer object that can be used during page transitions on your storefront

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| shimmerType | `string` | is use to map your page type to the component |
| importPath | `string` | Resolvable path to the component the   Shimmer component will render |

**Example** *(A CMS Page Shimmer)*  

```js
const cmsShimmer = {
     shimmerType: 'CMS_PAGE_SHIMMER',
     importPath: '@partner/module/path_to_your_component'
}
```

**Source Code**: [pwa-studio/packages/venia-ui/lib/targets/venia-ui-declare.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/targets/venia-ui-declare.js)
