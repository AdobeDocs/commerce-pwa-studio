## Members

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
</dl>

## Typedefs

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
objects, which Venia will use to generate React Router `<Route />` in the
final bundle.

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
</dl>

## Interfaces

<dl>
<dt><a href="#RichContentRenderer">RichContentRenderer</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Rich content renderers for the RichContent component must implement this
interface. Should be written as an ES Module—a module that exports functions
with these names, rather than an object with these functions as properties.

</dd>
</dl>

<a name="RichContentRenderer"></a>

## RichContentRenderer : `Object`

Rich content renderers for the RichContent component must implement this
interface. Should be written as an ES Module—a module that exports functions
with these names, rather than an object with these functions as properties.

**Kind**: global interface  
**Properties**

| Name      | Type              | Description                                                                                                                                        |
| --------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Component | `React.Component` | The React component that does the actual rendering. It will receive the props passed to the RichContent object, including `html`.                  |
| canRender | `function`        | Function that receives the content to be rendered as a string, and should return `true` if the `Component` can understand and render that content. |

**Example** _(A renderer that can render any content containing the string &quot;honk&quot;)_

```jsx
import React from "react";
import PlainHtmlRenderer from "@magento/venia-ui/components/richContent/plainHtmlRenderer";

function GooseRenderer(props) {
  const html = props.html.replace(/honk/gim, "<strong>HONK!🦢</strong>");
  return <PlainHtmlRenderer html={html} />;
}
export const Component = GooseRenderer;

export function canRender(content) {
  return /honk/gim.test(content);
}
```

<a name="richContentRenderers"></a>

## richContentRenderers : `tapable.SyncHook`

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

**Example** _(Add a renderer)_

```js
targets.of("@magento/venia-ui").richContentRenderers.tap((renderers) =>
  renderers.add({
    componentName: "AdobeXM",
    importPath: "@adobe/xm-components/xm-renderer",
  })
);
```

<a name="routes"></a>

## routes : `tapable.AsyncSeriesWaterfall`

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

**Example** _(Add a custom route for a blog module)_

```js
const veniaTargets = targets.of("@magento/venia-ui");
const routes = veniaTargets.routes;
routes.tap((routesArray) => {
  routesArray.push({
    name: "Blog",
    pattern: "/blog/:slug/:id",
    path: "@partner/pwa-studio-blog",
  });
  return routesArray;
});
```

<a name="checkoutPagePaymentTypes"></a>

## checkoutPagePaymentTypes : `tapable.SyncHook`

Provides access to Venia's checkout page payment methods

This target lets you add new checkout page payment to your storefronts.

**Kind**: global variable  
**See**

- [Intercept function signature](#paymentInterceptFunction)
- [CheckoutPaymentTypes](#CheckoutPaymentTypesDefinition)
- [CheckoutPayment definition object](#CheckoutPaymentDefinition)

**Example** _(Add a payment)_

```js
targets
  .of("@magento/venia-ui")
  .checkoutPagePaymentTypes.tap((checkoutPagePaymentTypes) =>
    checkoutPagePaymentTypes.add({
      paymentCode: "braintree",
      importPath: "@magento/braintree_payment",
    })
  );
```

<a name="savedPaymentTypes"></a>

## savedPaymentTypes : `tapable.SyncHook`

Provides access to Venia's saved payment methods

This target lets you add new saved payment method to your storefronts.

**Kind**: global variable  
**See**

- [Intercept function signature](#savedPaymentInterceptFunction)
- [SavedPaymentTypes](#SavedPaymentTypesDefinition)
- [SavedPayment definition object](#SavedPaymentDefinition)

**Example** _(Add a payment)_

```js
targets.of("@magento/venia-ui").savedPaymentTypes.tap((savedPaymentTypes) =>
  savedPaymentTypes.add({
    paymentCode: "braintree",
    importPath: "@magento/braintree_payment",
  })
);
```

<a name="rendererInterceptFunction"></a>

## rendererInterceptFunction : `function`

Intercept function signature for the `richContentRenderers` target.

Interceptors of `richContentRenderers` should call `.add` on the provided [renderer list](#RichContentRendererList).

**Kind**: global typedef

| Param     | Type                      | Description                                           |
| --------- | ------------------------- | ----------------------------------------------------- |
| renderers | `RichContentRendererList` | The list of renderers registered so far in the build. |

<a name="routesInterceptFunction"></a>

## routesInterceptFunction ⇒ [`Array.<RouteDefinition>`](#RouteDefinition)

Intercept function signature for the `routes` target.

Interceptors of `routes` receive an array of [RouteDefinition](#RouteDefinition)
objects, which Venia will use to generate React Router `<Route />` in the
final bundle.

Interceptors **must** return an array of RouteDefinitions, either by
mutating and then returning the array they received, or by returning a new
array of RouteDefinitions.

**Kind**: global typedef  
**Returns**: [`Array.<RouteDefinition>`](#RouteDefinition) - Your function must return the modified array,
or a new array you have constructed

| Param  | Type                                          | Description                |
| ------ | --------------------------------------------- | -------------------------- |
| routes | [`Array.<RouteDefinition>`](#RouteDefinition) | Array of registered routes |

**Example**

```js
const intercept = (routesArray) => {
  return [
    { name: "Backstop", pattern: "*", path: "@my-components/backstop" },
    ...routesArray,
  ];
};
```

<a name="RouteDefinition"></a>

## RouteDefinition : `Object`

A route definition object that describes a route in your storefront.

**Kind**: global typedef  
**Properties**

| Name    | Type      | Description                                                                                   |
| ------- | --------- | --------------------------------------------------------------------------------------------- |
| name    | `string`  | Friendly name for the React component                                                         |
| path    | `string`  | Resolvable path to the component the Route component will render                              |
| pattern | `string`  | Route pattern. This is used as the `path` prop for the `<Route/>` component.                  |
| [exact] | `boolean` | Tells the router whether it should match the route exactly or not. This property is optional. |

**Example** _(A custom route with a URL parameter)_

```js
const myCustomRoute = {
  name: "MyRoute",
  pattern: "/my-route/:myRouteParam",
  path: "@my-components/my-route-component",
};
```

<a name="paymentInterceptFunction"></a>

## paymentInterceptFunction : `function`

Intercept function signature for the `checkoutPagePaymentTypes` target.

Interceptors of `checkoutPagePaymentTypes` should call `.add` on the provided [payment list](#CheckoutPaymentTypesDefinition).

**Kind**: global typedef

| Param     | Type                             | Description                                          |
| --------- | -------------------------------- | ---------------------------------------------------- |
| renderers | `CheckoutPaymentTypesDefinition` | The list of payments registered so far in the build. |

<a name="CheckoutPaymentDefinition"></a>

## CheckoutPaymentDefinition : `Object`

A payment definition object that describes a checkout page payment in your storefront.

**Kind**: global typedef  
**Properties**

| Name        | Type     | Description                                                      |
| ----------- | -------- | ---------------------------------------------------------------- |
| paymentCode | `string` | is use to map your payment                                       |
| importPath  | `string` | Resolvable path to the component the Route component will render |

**Example** _(A custom payment method)_

```js
const myCustomPayment = {
  paymentCode: "cc",
  importPath: "@partner/module/path_to_your_component",
};
```

<a name="savedPaymentInterceptFunction"></a>

## savedPaymentInterceptFunction : `function`

Intercept function signature for the `savedPaymentTypes` target.

Interceptors of `savedPaymentTypes` should call `.add` on the provided [payment list](#SavedPaymentTypesDefinition).

**Kind**: global typedef

| Param     | Type                          | Description                                                |
| --------- | ----------------------------- | ---------------------------------------------------------- |
| renderers | `SavedPaymentTypesDefinition` | The list of saved payments registered so far in the build. |

<a name="SavedPaymentDefinition"></a>

## SavedPaymentDefinition : `Object`

A payment definition object that describes a saved payment in your storefront.

**Kind**: global typedef  
**Properties**

| Name        | Type     | Description                                                      |
| ----------- | -------- | ---------------------------------------------------------------- |
| paymentCode | `string` | is use to map your payment                                       |
| importPath  | `string` | Resolvable path to the component the Route component will render |

**Example** _(A custom payment method)_

```js
const myCustomPayment = {
  paymentCode: "cc",
  importPath: "@partner/module/path_to_your_component",
};
```

For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/targets/venia-ui-declare.js).
