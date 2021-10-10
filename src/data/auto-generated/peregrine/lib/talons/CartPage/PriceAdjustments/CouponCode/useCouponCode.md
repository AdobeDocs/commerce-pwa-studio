##Functions

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

##Typedefs

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


This talon contains the logic for a coupon code form component.
It performs effects and returns props data for rendering the component.

This talon performs the following effects:

- Fetch all coupons associated with the cart
- Manage the updating state of the cart while a coupon is being applied or removed

*global* *function*
**Example** *(Importing into your project)*  
```js
import { useCouponCode } from '@magento/peregrine/lib/talons/CartPage/PriceAdjustments/CouponCode/useCouponCode';
```

Contains logic for a shipping form component.
It performs effects and returns props data related to rendering a shipping address form.

This talon performs the following effects:

- Manage the updating state of the cart while the mutation for setting the shipping address is in flight

*global* *function*
**Example** *(Importing into your project)*  
```js
import { useShippingForm } from '@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingForm';
```

Contains logic for a shipping method selector component.
It performs effect and returns props data used to render that component.

This talon performs the following effects:

- Set the shipping form visibility value based on the shipping methods associated with the cart

*global* *function*
**Example** *(Importing into your project)*  
```js
import { useShippingMethods } from '@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingMethods';
```

Contains logic for a component that renders a radio selector for shipping.
It performs effects and returns props data used for rendering that component.

This talon performs the following effects:

- Sets the value of the shipping method to a default value if there is no current method selected
- Manage the updating state of the cart while a shipping method is being applied

*global* *function*
**Example** *(Importing into your project)*  
```js
import { useShippingRadios } from '@magento/peregrine/lib/talons/CartPage/PriceAdjustments/ShippingMethods/useShippingRadios';
```

GraphQL mutations for a cart's coupon code.
This is a type used by the [useCouponCode](#useCouponCode) talon.

*global* *typedef*
**See**: [CouponCode.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.js)
for the queries used Venia  

| Prop name | Type | Description |
| --- | --- | --- |
| applyCouponMutation | `GraphQLAST` | Mutation for applying a coupon code to a cart. |
| removeCouponMutation | `GraphQLAST` | Mutation for removing a coupon code from a cart. |


GraphQL queries for a cart's coupon code.
This is a type used by the [useCouponCode](#useCouponCode) talon.

*global* *typedef*
**See**: [CouponCode.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/CouponCode/couponCode.js)
for the queries used Venia  

| Prop name | Type | Description |
| --- | --- | --- |
| getAppliedCouponsQuery | `GraphQLAST` | Query to fetch the currently applied coupons for a cart. |


Object type returned by the [useCouponCode](#useCouponCode) talon.
It provides props data to use when rendering a coupon code component.

*global* *typedef*

| Prop name | Type | Description |
| --- | --- | --- |
| applyingCoupon | `boolean` | True if a coupon is currently being applied. False otherwise. |
| data | `Object` | Data returned from the `getAppliedCouponsQuery`. |
| errorMessage | `String` | If GraphQL error occurs, this value is set. |
| fetchError | `Object` | The error data object returned by a GraphQL query. |
| handleApplyCoupon | `function` | Function to call for handling the application of a coupon code to a cart. |
| handleRemoveCoupon | `function` | Function to call for handling the removal of a coupon code from a cart |
| removingCoupon | `boolean` | True if a coupon code is currently being removed. False otherwise. |


Values for the select input fields on the shipping form.
This is a prop used by the [useShippingForm](#useShippingForm) talon.

*global* *typedef*

| Prop name | Type | Description |
| --- | --- | --- |
| country | `String` | Country shipping destination |
| region | `String` | Country's region shipping destination |
| zip | `String` | Country's zip code shipping destination |


GraphQL mutations for the shipping form.
This is a type used by the [useShippingForm](#useShippingForm) talon.

*global* *typedef*
**See**: [shippingForm.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingForm.js)
for the query used in Venia  

| Prop name | Type | Description |
| --- | --- | --- |
| setShippingAddressMutation | `GraphQLAST` | Mutation for setting the shipping address on a cart |


GraphQL queries for the shipping form.
This is a type used by the [useShippingForm](#useShippingForm) talon.

*global* *typedef*
**See**: [shippingMethods.gql.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.gql.js)
for the query used in Venia  

| Prop name | Type | Description |
| --- | --- | --- |
| shippingMethodsQuery | `GraphQLAST` | Query for getting data about available shipping methods |


Object type returned by the [useShippingForm](#useShippingForm) talon.
It provides props data to use when rendering a shipping form component.

*global* *typedef*

| Prop name | Type | Description |
| --- | --- | --- |
| formErrors | `Array.<Error>` | A list of form errors |
| handleOnSubmit | `function` | Callback function to handle form submissions |
| handleZipChange | `function` | Callback function to handle a zip code change |
| isSetShippingLoading | `boolean` | True if the cart shipping information is being set. False otherwise. |


GraphQL queries for shipping methods.
This is a type used in the [useShippingMethods](#useShippingMethods) talon.

*global* *typedef*
**See**: [shippingMethods.gql.js](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/PriceAdjustments/ShippingMethods/shippingMethods.gql.js)
for the queries used in Venia  

| Prop name | Type | Description |
| --- | --- | --- |
| getShippingMethodsQuery | `GraphQLAST` | Query to get the available shipping methods. |


Object type returned by the [useShippingMethods](#useShippingMethods) talon.
It provides prop data to use when rendering shipping methods.

*global* *typedef*

| Prop name | Type | Description |
| --- | --- | --- |
| hasMethods | `number` | Provides the number of shipping methods available. Can be used as a boolean value since having no shipping methods would return 0. |
| isShowingForm | `boolean` | True if the form should be shown. False otherwise. |
| selectedShippingFields | [`SelectShippingFields`](#SelectShippingFields) | Values for the select input fields on the shipping form |
| selectedShippingMethod | `String` | A serialized string of <inlineCode>${carrier-code}\|${method-code}</inlineCode>, eg. <inlineCode>usps\|priority</inlineCode>. |
| shippingMethods | `Array.<Object>` | A list of available shipping methods based on the primary shipping address |
| showForm | `function` | A function that sets the `isShowingForm` value to true. |


GraphQL mutations for a shipping radio selector component.
This is a type used by the [useShippingRadios](#useShippingRadios) talon.

*global* *typedef*

| Prop name | Type | Description |
| --- | --- | --- |
| setShippingMethodMutation | `GraphQLAST` | Mutation for setting the shipping method on a cart. |


Object type returned by the [useShippingRadios](#useShippingRadios) talon.
It provides data to use when rendering a radio selector for shipping methods.

*global* *typedef*

| Prop name | Type | Description |
| --- | --- | --- |
| formattedShippingMethods | `Object` | Shipping method data that has been formatted. |
| handleShippingSelection | `function` | Callback function for handling shipping selection form updates. |



[pwa-studio/packages/peregrine/lib/talons/CartPage/PriceAdjustments/CouponCode/useCouponCode.js](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/PriceAdjustments/CouponCode/useCouponCode.js)