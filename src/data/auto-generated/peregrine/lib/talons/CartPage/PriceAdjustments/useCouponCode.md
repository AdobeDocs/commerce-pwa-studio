## Functions

<dl>
<dt><a href="#useCouponCode">useCouponCode(props)</a> ⇒ <inlineCode><a href="#CouponCodeTalonProps">CouponCodeTalonProps</a></inlineCode></dt>
<dd>

This talon contains the logic for a coupon code form component.
It performs effects and returns props data for rendering the component.

This talon performs the following effects:

- Fetch all coupons associated with the cart
- Manage the updating state of the cart while a coupon is being applied or removed

</dd>
<dt><a href="#useShippingForm">useShippingForm(props)</a> ⇒ <inlineCode><a href="#ShippingFormTalonProps">ShippingFormTalonProps</a></inlineCode></dt>
<dd>

Contains logic for a shipping form component.
It performs effects and returns props data related to rendering a shipping address form.

This talon performs the following effects:

- Manage the updating state of the cart while the mutation for setting the shipping address is in flight

</dd>
<dt><a href="#useShippingMethods">useShippingMethods(props)</a> ⇒ <inlineCode><a href="#ShippingMethodsTalonProps">ShippingMethodsTalonProps</a></inlineCode></dt>
<dd>

Contains logic for a shipping method selector component.
It performs effect and returns props data used to render that component.

This talon performs the following effects:

- Set the shipping form visibility value based on the shipping methods associated with the cart

</dd>
<dt><a href="#useShippingRadios">useShippingRadios(props)</a> ⇒ <inlineCode><a href="#ShippingRadiosTalonProps">ShippingRadiosTalonProps</a></inlineCode></dt>
<dd>

Contains logic for a component that renders a radio selector for shipping.
It performs effects and returns props data used for rendering that component.

This talon performs the following effects:

- Sets the value of the shipping method to a default value if there is no current method selected
- Manage the updating state of the cart while a shipping method is being applied

</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#CouponCodeMutations">CouponCodeMutations</a> : <inlineCode>Object</inlineCode></dt>
<dd>

GraphQL mutations for a cart's coupon code.
This is a type used by the [useCouponCode](#useCouponCode) talon.

</dd>
<dt><a href="#CouponCodeQueries">CouponCodeQueries</a> : <inlineCode>Object</inlineCode></dt>
<dd>

GraphQL queries for a cart's coupon code.
This is a type used by the [useCouponCode](#useCouponCode) talon.

</dd>
<dt><a href="#CouponCodeTalonProps">CouponCodeTalonProps</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Object type returned by the [useCouponCode](#useCouponCode) talon.
It provides props data to use when rendering a coupon code component.

</dd>
<dt><a href="#SelectShippingFields">SelectShippingFields</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Values for the select input fields on the shipping form.
This is a prop used by the [useShippingForm](#useShippingForm) talon.

</dd>
<dt><a href="#ShippingFormMutations">ShippingFormMutations</a> : <inlineCode>Object</inlineCode></dt>
<dd>

GraphQL mutations for the shipping form.
This is a type used by the [useShippingForm](#useShippingForm) talon.

</dd>
<dt><a href="#ShippingFormQueries">ShippingFormQueries</a> : <inlineCode>Object</inlineCode></dt>
<dd>

GraphQL queries for the shipping form.
This is a type used by the [useShippingForm](#useShippingForm) talon.

</dd>
<dt><a href="#ShippingFormTalonProps">ShippingFormTalonProps</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Object type returned by the [useShippingForm](#useShippingForm) talon.
It provides props data to use when rendering a shipping form component.

</dd>
<dt><a href="#ShippingMethodsQueries">ShippingMethodsQueries</a> : <inlineCode>Object</inlineCode></dt>
<dd>

GraphQL queries for shipping methods.
This is a type used in the [useShippingMethods](#useShippingMethods) talon.

</dd>
<dt><a href="#ShippingMethodsTalonProps">ShippingMethodsTalonProps</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Object type returned by the [useShippingMethods](#useShippingMethods) talon.
It provides prop data to use when rendering shipping methods.

</dd>
<dt><a href="#ShippingRadiosMutations">ShippingRadiosMutations</a> : <inlineCode>Object</inlineCode></dt>
<dd>

GraphQL mutations for a shipping radio selector component.
This is a type used by the [useShippingRadios](#useShippingRadios) talon.

</dd>
<dt><a href="#ShippingRadiosTalonProps">ShippingRadiosTalonProps</a> : <inlineCode>Object</inlineCode></dt>
<dd>

Object type returned by the [useShippingRadios](#useShippingRadios) talon.
It provides data to use when rendering a radio selector for shipping methods.

</dd>
</dl>

<a name="useCouponCode" id="useCouponCode"></a>

## useCouponCode(props) ⇒ [`CouponCodeTalonProps`](#CouponCodeTalonProps)

This talon contains the logic for a coupon code form component.
It performs effects and returns props data for rendering the component.

This talon performs the following effects:

- Fetch all coupons associated with the cart
- Manage the updating state of the cart while a coupon is being applied or removed

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| props.setIsCartUpdating | `function` | Callback function for setting the update state for the cart. |
| props.mutations | [`CouponCodeMutations`](#CouponCodeMutations) | GraphQL mutations for a cart's coupon code. |
| props.queries | [`CouponCodeQueries`](#CouponCodeQueries) | GraphQL queries for a cart's coupon code. |

**Example** *(Importing into your project)*  
```js
import { useCouponCode } from '@magento/peregrine/lib/talons/CartPage/PriceAdjustments/useCouponCode';
```
<a name="useShippingForm" id="useShippingForm"></a>

## useShippingForm(props) ⇒ [`ShippingFormTalonProps`](#ShippingFormTalonProps)

Contains logic for a shipping form component.
It performs effects and returns props data related to rendering a shipping address form.

This talon performs the following effects:

- Manage the updating state of the cart while the mutation for setting the shipping address is in flight

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| props.selectedValues | [`SelectShippingFields`](#SelectShippingFields) | The values from the select input fields in the shipping form |
| props.setIsCartUpdating | `function` | Callback function for setting the update state for the cart. |
| props.mutations | [`ShippingFormMutations`](#ShippingFormMutations) | GraphQL mutations for the shipping form. |
| props.queries | [`ShippingFormQueries`](#ShippingFormQueries) | GraphQL queries for the shipping form. |

**Example** *(Importing into your project)*  
```js
import { useShippingForm } from '@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingForm';
```
<a name="useShippingMethods" id="useShippingMethods"></a>

## useShippingMethods(props) ⇒ [`ShippingMethodsTalonProps`](#ShippingMethodsTalonProps)

Contains logic for a shipping method selector component.
It performs effect and returns props data used to render that component.

This talon performs the following effects:

- Set the shipping form visibility value based on the shipping methods associated with the cart

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| props.queries | [`ShippingMethodsQueries`](#ShippingMethodsQueries) | GraphQL queries for shipping methods |

**Example** *(Importing into your project)*  
```js
import { useShippingMethods } from '@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingMethods';
```
<a name="useShippingRadios" id="useShippingRadios"></a>

## useShippingRadios(props) ⇒ [`ShippingRadiosTalonProps`](#ShippingRadiosTalonProps)

Contains logic for a component that renders a radio selector for shipping.
It performs effects and returns props data used for rendering that component.

This talon performs the following effects:

- Sets the value of the shipping method to a default value if there is no current method selected
- Manage the updating state of the cart while a shipping method is being applied

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| props.setIsCartUpdating | `function` | Function for setting the updating state of the shopping cart |
| props.selectedShippingMethod | `String` | A serialized string of <carrier-code>|<method-code>, eg. usps|priority. |
| props.shippingMethods | `Array.<Object>` | An array of available shipping methods |
| props.mutations | [`ShippingRadiosMutations`](#ShippingRadiosMutations) | GraphQL mutations for a shipping radio selector component. |

**Example** *(Importing into your project)*  
```js
import { useShippingRadios } from '@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingRadios';
```
<a name="CouponCodeMutations" id="CouponCodeMutations"></a>

## CouponCodeMutations : `Object`

GraphQL mutations for a cart's coupon code.
This is a type used by the [useCouponCode](#useCouponCode) talon.

**Kind**: global typedef  
**See**: [CouponCode.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.js)
for the queries used Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| applyCouponMutation | `GraphQLAST` | Mutation for applying a coupon code to a cart. |
| removeCouponMutation | `GraphQLAST` | Mutation for removing a coupon code from a cart. |

<a name="CouponCodeQueries" id="CouponCodeQueries"></a>

## CouponCodeQueries : `Object`

GraphQL queries for a cart's coupon code.
This is a type used by the [useCouponCode](#useCouponCode) talon.

**Kind**: global typedef  
**See**: [CouponCode.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.js)
for the queries used Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| getAppliedCouponsQuery | `GraphQLAST` | Query to fetch the currently applied coupons for a cart. |

<a name="CouponCodeTalonProps" id="CouponCodeTalonProps"></a>

## CouponCodeTalonProps : `Object`

Object type returned by the [useCouponCode](#useCouponCode) talon.
It provides props data to use when rendering a coupon code component.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| applyingCoupon | `boolean` | True if a coupon is currently being applied. False otherwise. |
| data | `Object` | Data returned from the `getAppliedCouponsQuery`. |
| errorMessage | `String` | If GraphQL error occurs, this value is set. |
| fetchError | `Object` | The error data object returned by a GraphQL query. |
| handleApplyCoupon | `function` | Function to call for handling the application of a coupon code to a cart. |
| handleRemoveCoupon | `function` | Function to call for handling the removal of a coupon code from a cart |
| removingCoupon | `boolean` | True if a coupon code is currently being removed. False otherwise. |

<a name="SelectShippingFields" id="SelectShippingFields"></a>

## SelectShippingFields : `Object`

Values for the select input fields on the shipping form.
This is a prop used by the [useShippingForm](#useShippingForm) talon.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| country | `String` | Country shipping destination |
| region | `String` | Country's region shipping destination |
| zip | `String` | Country's zip code shipping destination |

<a name="ShippingFormMutations" id="ShippingFormMutations"></a>

## ShippingFormMutations : `Object`

GraphQL mutations for the shipping form.
This is a type used by the [useShippingForm](#useShippingForm) talon.

**Kind**: global typedef  
**See**: [shippingForm.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingForm.js)
for the query used in Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| setShippingAddressMutation | `GraphQLAST` | Mutation for setting the shipping address on a cart |

<a name="ShippingFormQueries" id="ShippingFormQueries"></a>

## ShippingFormQueries : `Object`

GraphQL queries for the shipping form.
This is a type used by the [useShippingForm](#useShippingForm) talon.

**Kind**: global typedef  
**See**: [shippingMethods.gql.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.gql.js)
for the query used in Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| shippingMethodsQuery | `GraphQLAST` | Query for getting data about available shipping methods |

<a name="ShippingFormTalonProps" id="ShippingFormTalonProps"></a>

## ShippingFormTalonProps : `Object`

Object type returned by the [useShippingForm](#useShippingForm) talon.
It provides props data to use when rendering a shipping form component.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| formErrors | `Array.<Error>` | A list of form errors |
| handleOnSubmit | `function` | Callback function to handle form submissions |
| handleZipChange | `function` | Callback function to handle a zip code change |
| isSetShippingLoading | `boolean` | True if the cart shipping information is being set. False otherwise. |

<a name="ShippingMethodsQueries" id="ShippingMethodsQueries"></a>

## ShippingMethodsQueries : `Object`

GraphQL queries for shipping methods.
This is a type used in the [useShippingMethods](#useShippingMethods) talon.

**Kind**: global typedef  
**See**: [shippingMethods.gql.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.gql.js)
for the queries used in Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| getShippingMethodsQuery | `GraphQLAST` | Query to get the available shipping methods. |

<a name="ShippingMethodsTalonProps" id="ShippingMethodsTalonProps"></a>

## ShippingMethodsTalonProps : `Object`

Object type returned by the [useShippingMethods](#useShippingMethods) talon.
It provides prop data to use when rendering shipping methods.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| hasMethods | `number` | Provides the number of shipping methods available. Can be used as a boolean value since having no shipping methods would return 0. |
| isShowingForm | `boolean` | True if the form should be shown. False otherwise. |
| selectedShippingFields | [`SelectShippingFields`](#SelectShippingFields) | Values for the select input fields on the shipping form |
| selectedShippingMethod | `String` | A serialized string of <carrier-code>|<method-code>, eg. usps|priority. |
| shippingMethods | `Array.<Object>` | A list of available shipping methods based on the primary shipping address |
| showForm | `function` | A function that sets the `isShowingForm` value to true. |

<a name="ShippingRadiosMutations" id="ShippingRadiosMutations"></a>

## ShippingRadiosMutations : `Object`

GraphQL mutations for a shipping radio selector component.
This is a type used by the [useShippingRadios](#useShippingRadios) talon.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| setShippingMethodMutation | `GraphQLAST` | Mutation for setting the shipping method on a cart. |

<a name="ShippingRadiosTalonProps" id="ShippingRadiosTalonProps"></a>

## ShippingRadiosTalonProps : `Object`

Object type returned by the [useShippingRadios](#useShippingRadios) talon.
It provides data to use when rendering a radio selector for shipping methods.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| formattedShippingMethods | `Object` | Shipping method data that has been formatted. |
| handleShippingSelection | `function` | Callback function for handling shipping selection form updates. |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/PriceAdjustments/useCouponCode.js).