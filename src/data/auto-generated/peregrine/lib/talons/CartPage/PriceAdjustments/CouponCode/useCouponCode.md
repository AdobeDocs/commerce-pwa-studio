## Functions

<dl>
<dt><a href="#useCouponCode">useCouponCode(props)</a> ⇒ <code><a href="#CouponCodeTalonProps">CouponCodeTalonProps</a></code></dt>
<dd><p>This talon contains the logic for a coupon code form component.
It performs effects and returns props data for rendering the component.</p>
<p>This talon performs the following effects:</p>
<ul>
<li>Fetch all coupons associated with the cart</li>
<li>Manage the updating state of the cart while a coupon is being applied or removed</li>
</ul>
</dd>
<dt><a href="#useShippingForm">useShippingForm(props)</a> ⇒ <code><a href="#ShippingFormTalonProps">ShippingFormTalonProps</a></code></dt>
<dd><p>Contains logic for a shipping form component.
It performs effects and returns props data related to rendering a shipping address form.</p>
<p>This talon performs the following effects:</p>
<ul>
<li>Manage the updating state of the cart while the mutation for setting the shipping address is in flight</li>
</ul>
</dd>
<dt><a href="#useShippingMethods">useShippingMethods(props)</a> ⇒ <code><a href="#ShippingMethodsTalonProps">ShippingMethodsTalonProps</a></code></dt>
<dd><p>Contains logic for a shipping method selector component.
It performs effect and returns props data used to render that component.</p>
<p>This talon performs the following effects:</p>
<ul>
<li>Set the shipping form visibility value based on the shipping methods associated with the cart</li>
</ul>
</dd>
<dt><a href="#useShippingRadios">useShippingRadios(props)</a> ⇒ <code><a href="#ShippingRadiosTalonProps">ShippingRadiosTalonProps</a></code></dt>
<dd><p>Contains logic for a component that renders a radio selector for shipping.
It performs effects and returns props data used for rendering that component.</p>
<p>This talon performs the following effects:</p>
<ul>
<li>Sets the value of the shipping method to a default value if there is no current method selected</li>
<li>Manage the updating state of the cart while a shipping method is being applied</li>
</ul>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#CouponCodeMutations">CouponCodeMutations</a> : <code>Object</code></dt>
<dd><p>GraphQL mutations for a cart&#39;s coupon code.
This is a type used by the <a href="#useCouponCode">useCouponCode</a> talon.</p>
</dd>
<dt><a href="#CouponCodeQueries">CouponCodeQueries</a> : <code>Object</code></dt>
<dd><p>GraphQL queries for a cart&#39;s coupon code.
This is a type used by the <a href="#useCouponCode">useCouponCode</a> talon.</p>
</dd>
<dt><a href="#CouponCodeTalonProps">CouponCodeTalonProps</a> : <code>Object</code></dt>
<dd><p>Object type returned by the <a href="#useCouponCode">useCouponCode</a> talon.
It provides props data to use when rendering a coupon code component.</p>
</dd>
<dt><a href="#SelectShippingFields">SelectShippingFields</a> : <code>Object</code></dt>
<dd><p>Values for the select input fields on the shipping form.
This is a prop used by the <a href="#useShippingForm">useShippingForm</a> talon.</p>
</dd>
<dt><a href="#ShippingFormMutations">ShippingFormMutations</a> : <code>Object</code></dt>
<dd><p>GraphQL mutations for the shipping form.
This is a type used by the <a href="#useShippingForm">useShippingForm</a> talon.</p>
</dd>
<dt><a href="#ShippingFormQueries">ShippingFormQueries</a> : <code>Object</code></dt>
<dd><p>GraphQL queries for the shipping form.
This is a type used by the <a href="#useShippingForm">useShippingForm</a> talon.</p>
</dd>
<dt><a href="#ShippingFormTalonProps">ShippingFormTalonProps</a> : <code>Object</code></dt>
<dd><p>Object type returned by the <a href="#useShippingForm">useShippingForm</a> talon.
It provides props data to use when rendering a shipping form component.</p>
</dd>
<dt><a href="#ShippingMethodsQueries">ShippingMethodsQueries</a> : <code>Object</code></dt>
<dd><p>GraphQL queries for shipping methods.
This is a type used in the <a href="#useShippingMethods">useShippingMethods</a> talon.</p>
</dd>
<dt><a href="#ShippingMethodsTalonProps">ShippingMethodsTalonProps</a> : <code>Object</code></dt>
<dd><p>Object type returned by the <a href="#useShippingMethods">useShippingMethods</a> talon.
It provides prop data to use when rendering shipping methods.</p>
</dd>
<dt><a href="#ShippingRadiosMutations">ShippingRadiosMutations</a> : <code>Object</code></dt>
<dd><p>GraphQL mutations for a shipping radio selector component.
This is a type used by the <a href="#useShippingRadios">useShippingRadios</a> talon.</p>
</dd>
<dt><a href="#ShippingRadiosTalonProps">ShippingRadiosTalonProps</a> : <code>Object</code></dt>
<dd><p>Object type returned by the <a href="#useShippingRadios">useShippingRadios</a> talon.
It provides data to use when rendering a radio selector for shipping methods.</p>
</dd>
</dl>

<a name="useCouponCode"></a>

## useCouponCode(props) ⇒ [<code>CouponCodeTalonProps</code>](#CouponCodeTalonProps)
This talon contains the logic for a coupon code form component.
It performs effects and returns props data for rendering the component.

This talon performs the following effects:

- Fetch all coupons associated with the cart
- Manage the updating state of the cart while a coupon is being applied or removed

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.setIsCartUpdating | <code>function</code> | Callback function for setting the update state for the cart. |
| props.mutations | [<code>CouponCodeMutations</code>](#CouponCodeMutations) | GraphQL mutations for a cart's coupon code. |
| props.queries | [<code>CouponCodeQueries</code>](#CouponCodeQueries) | GraphQL queries for a cart's coupon code. |

**Example** *(Importing into your project)*  
```js
import { useCouponCode } from '@magento/peregrine/lib/talons/CartPage/PriceAdjustments/CouponCode/useCouponCode';
```
<a name="useShippingForm"></a>

## useShippingForm(props) ⇒ [<code>ShippingFormTalonProps</code>](#ShippingFormTalonProps)
Contains logic for a shipping form component.
It performs effects and returns props data related to rendering a shipping address form.

This talon performs the following effects:

- Manage the updating state of the cart while the mutation for setting the shipping address is in flight

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.selectedValues | [<code>SelectShippingFields</code>](#SelectShippingFields) | The values from the select input fields in the shipping form |
| props.setIsCartUpdating | <code>function</code> | Callback function for setting the update state for the cart. |
| props.mutations | [<code>ShippingFormMutations</code>](#ShippingFormMutations) | GraphQL mutations for the shipping form. |
| props.queries | [<code>ShippingFormQueries</code>](#ShippingFormQueries) | GraphQL queries for the shipping form. |

**Example** *(Importing into your project)*  
```js
import { useShippingForm } from '@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingForm';
```
<a name="useShippingMethods"></a>

## useShippingMethods(props) ⇒ [<code>ShippingMethodsTalonProps</code>](#ShippingMethodsTalonProps)
Contains logic for a shipping method selector component.
It performs effect and returns props data used to render that component.

This talon performs the following effects:

- Set the shipping form visibility value based on the shipping methods associated with the cart

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.queries | [<code>ShippingMethodsQueries</code>](#ShippingMethodsQueries) | GraphQL queries for shipping methods |

**Example** *(Importing into your project)*  
```js
import { useShippingMethods } from '@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingMethods';
```
<a name="useShippingRadios"></a>

## useShippingRadios(props) ⇒ [<code>ShippingRadiosTalonProps</code>](#ShippingRadiosTalonProps)
Contains logic for a component that renders a radio selector for shipping.
It performs effects and returns props data used for rendering that component.

This talon performs the following effects:

- Sets the value of the shipping method to a default value if there is no current method selected
- Manage the updating state of the cart while a shipping method is being applied

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.setIsCartUpdating | <code>function</code> | Function for setting the updating state of the shopping cart |
| props.selectedShippingMethod | <code>String</code> | A serialized string of `<carrier-code>`|`<method-code>`, eg. usps|priority. |
| props.shippingMethods | <code>Array.&lt;Object&gt;</code> | An array of available shipping methods |
| props.mutations | [<code>ShippingRadiosMutations</code>](#ShippingRadiosMutations) | GraphQL mutations for a shipping radio selector component. |

**Example** *(Importing into your project)*  
```js
import { useShippingRadios } from '@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingRadios';
```
<a name="CouponCodeMutations"></a>

## CouponCodeMutations : <code>Object</code>
GraphQL mutations for a cart's coupon code.
This is a type used by the [useCouponCode](#useCouponCode) talon.

**Kind**: global typedef  
**See**: [CouponCode.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.js)
for the queries used Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| applyCouponMutation | <code>GraphQLAST</code> | Mutation for applying a coupon code to a cart. |
| removeCouponMutation | <code>GraphQLAST</code> | Mutation for removing a coupon code from a cart. |

<a name="CouponCodeQueries"></a>

## CouponCodeQueries : <code>Object</code>
GraphQL queries for a cart's coupon code.
This is a type used by the [useCouponCode](#useCouponCode) talon.

**Kind**: global typedef  
**See**: [CouponCode.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.js)
for the queries used Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| getAppliedCouponsQuery | <code>GraphQLAST</code> | Query to fetch the currently applied coupons for a cart. |

<a name="CouponCodeTalonProps"></a>

## CouponCodeTalonProps : <code>Object</code>
Object type returned by the [useCouponCode](#useCouponCode) talon.
It provides props data to use when rendering a coupon code component.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| applyingCoupon | <code>boolean</code> | True if a coupon is currently being applied. False otherwise. |
| data | <code>Object</code> | Data returned from the `getAppliedCouponsQuery`. |
| errorMessage | <code>String</code> | If GraphQL error occurs, this value is set. |
| fetchError | <code>Object</code> | The error data object returned by a GraphQL query. |
| handleApplyCoupon | <code>function</code> | Function to call for handling the application of a coupon code to a cart. |
| handleRemoveCoupon | <code>function</code> | Function to call for handling the removal of a coupon code from a cart |
| removingCoupon | <code>boolean</code> | True if a coupon code is currently being removed. False otherwise. |

<a name="SelectShippingFields"></a>

## SelectShippingFields : <code>Object</code>
Values for the select input fields on the shipping form.
This is a prop used by the [useShippingForm](#useShippingForm) talon.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| country | <code>String</code> | Country shipping destination |
| region | <code>String</code> | Country's region shipping destination |
| zip | <code>String</code> | Country's zip code shipping destination |

<a name="ShippingFormMutations"></a>

## ShippingFormMutations : <code>Object</code>
GraphQL mutations for the shipping form.
This is a type used by the [useShippingForm](#useShippingForm) talon.

**Kind**: global typedef  
**See**: [shippingForm.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingForm.js)
for the query used in Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| setShippingAddressMutation | <code>GraphQLAST</code> | Mutation for setting the shipping address on a cart |

<a name="ShippingFormQueries"></a>

## ShippingFormQueries : <code>Object</code>
GraphQL queries for the shipping form.
This is a type used by the [useShippingForm](#useShippingForm) talon.

**Kind**: global typedef  
**See**: [shippingMethods.gql.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.gql.js)
for the query used in Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| shippingMethodsQuery | <code>GraphQLAST</code> | Query for getting data about available shipping methods |

<a name="ShippingFormTalonProps"></a>

## ShippingFormTalonProps : <code>Object</code>
Object type returned by the [useShippingForm](#useShippingForm) talon.
It provides props data to use when rendering a shipping form component.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| formErrors | <code>Array.&lt;Error&gt;</code> | A list of form errors |
| handleOnSubmit | <code>function</code> | Callback function to handle form submissions |
| handleZipChange | <code>function</code> | Callback function to handle a zip code change |
| isSetShippingLoading | <code>boolean</code> | True if the cart shipping information is being set. False otherwise. |

<a name="ShippingMethodsQueries"></a>

## ShippingMethodsQueries : <code>Object</code>
GraphQL queries for shipping methods.
This is a type used in the [useShippingMethods](#useShippingMethods) talon.

**Kind**: global typedef  
**See**: [shippingMethods.gql.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.gql.js)
for the queries used in Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| getShippingMethodsQuery | <code>GraphQLAST</code> | Query to get the available shipping methods. |

<a name="ShippingMethodsTalonProps"></a>

## ShippingMethodsTalonProps : <code>Object</code>
Object type returned by the [useShippingMethods](#useShippingMethods) talon.
It provides prop data to use when rendering shipping methods.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| hasMethods | <code>number</code> | Provides the number of shipping methods available. Can be used as a boolean value since having no shipping methods would return 0. |
| isShowingForm | <code>boolean</code> | True if the form should be shown. False otherwise. |
| selectedShippingFields | [<code>SelectShippingFields</code>](#SelectShippingFields) | Values for the select input fields on the shipping form |
| selectedShippingMethod | <code>String</code> | A serialized string of `<carrier-code>`|`<method-code>`, eg. usps|priority. |
| shippingMethods | <code>Array.&lt;Object&gt;</code> | A list of available shipping methods based on the primary shipping address |
| showForm | <code>function</code> | A function that sets the `isShowingForm` value to true. |

<a name="ShippingRadiosMutations"></a>

## ShippingRadiosMutations : <code>Object</code>
GraphQL mutations for a shipping radio selector component.
This is a type used by the [useShippingRadios](#useShippingRadios) talon.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| setShippingMethodMutation | <code>GraphQLAST</code> | Mutation for setting the shipping method on a cart. |

<a name="ShippingRadiosTalonProps"></a>

## ShippingRadiosTalonProps : <code>Object</code>
Object type returned by the [useShippingRadios](#useShippingRadios) talon.
It provides data to use when rendering a radio selector for shipping methods.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| formattedShippingMethods | <code>Object</code> | Shipping method data that has been formatted. |
| handleShippingSelection | <code>function</code> | Callback function for handling shipping selection form updates. |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/PriceAdjustments/CouponCode/useCouponCode.js).