## Functions

<dl>
<dt><a href="#useGiftCards">useGiftCards(props)</a> ⇒ <code><a href="#GiftCardsTalonProps">GiftCardsTalonProps</a></code></dt>
<dd><p>Handles the logic for a component that renders a list of gift cards.
It performs effects and returns the prop data necessary for rendering
the component.</p>
<p>This talon performs the following effects:</p>
<ul>
<li>Fetch the currently applied gift cards for a cart</li>
<li>Manage the updating state of the cart while a gift card is being applied or removed</li>
</ul>
</dd>
<dt><a href="#useGiftCard">useGiftCard(props)</a> ⇒ <code><a href="#GiftCardTalonProps">GiftCardTalonProps</a></code></dt>
<dd><p>Provide logic for a single gift card component.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#GiftCardsMutations">GiftCardsMutations</a> : <code>Object</code></dt>
<dd><p>GraphQL mutations for Gift Cards.</p>
</dd>
<dt><a href="#GiftCardsQueries">GiftCardsQueries</a> : <code>Object</code></dt>
<dd><p>GraphQL queries for Gift Cards.</p>
</dd>
<dt><a href="#GiftCardsTalonProps">GiftCardsTalonProps</a> : <code>Object</code></dt>
<dd><p>Props data to use when rendering a list of gift cards.</p>
</dd>
<dt><a href="#GiftCardTalonProps">GiftCardTalonProps</a> : <code>Object</code></dt>
<dd><p>Props data to use when rendering a single gift card component.</p>
</dd>
</dl>

<a name="useGiftCards"></a>

## useGiftCards(props) ⇒ [<code>GiftCardsTalonProps</code>](#GiftCardsTalonProps)
Handles the logic for a component that renders a list of gift cards.
It performs effects and returns the prop data necessary for rendering
the component.

This talon performs the following effects:

- Fetch the currently applied gift cards for a cart
- Manage the updating state of the cart while a gift card is being applied or removed

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.setIsCartUpdating | <code>function</code> | Callback function for setting the update state for the cart. |
| props.mutations | [<code>GiftCardsMutations</code>](#GiftCardsMutations) | GraphQL mutations for Gift Cards |
| props.queries | [<code>GiftCardsQueries</code>](#GiftCardsQueries) | GraphQL queries for Gift Cards |

**Example** *(Importing into your project)*  
```js
import { useGiftCards } from '@magento/peregrine/lib/talons/CartPage/GiftCards'
```
<a name="useGiftCard"></a>

## useGiftCard(props) ⇒ [<code>GiftCardTalonProps</code>](#GiftCardTalonProps)
Provide logic for a single gift card component.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| props | <code>Object</code> |  |
| props.code | <code>String</code> | Gift card's code |
| props.removeGiftCard | <code>function</code> | A function that removes a gift card when provided a code |

**Example** *(Importing into your project)*  
```js
import { useGiftCard } from '@magento/peregrine/lib/talons/CartPage/GiftCards/useGiftCard';
```
<a name="GiftCardsMutations"></a>

## GiftCardsMutations : <code>Object</code>
GraphQL mutations for Gift Cards.

**Kind**: global typedef  
**See**: [`giftCardQueries.ee.js`](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/GiftCards/giftCardQueries.js)
for queries used in Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| applyGiftCardMutation | <code>GraphQLAST</code> | The mutation used to apply a gift card to the cart. |
| removeGiftCardMutation | <code>GraphQLAST</code> | The mutation used to remove a gift card from the cart. |

<a name="GiftCardsQueries"></a>

## GiftCardsQueries : <code>Object</code>
GraphQL queries for Gift Cards.

**Kind**: global typedef  
**See**: [`giftCardQueries.ee.js`](https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/CartPage/GiftCards/giftCardQueries.js)
for queries used in Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| getAppliedGiftCardsQuery | <code>GraphQLAST</code> | The query used to get the gift cards currently applied to the cart. |
| getGiftCardBalanceQuery | <code>GraphQLAST</code> | The query used to get the gift cards currently applied to the cart. |

<a name="GiftCardsTalonProps"></a>

## GiftCardsTalonProps : <code>Object</code>
Props data to use when rendering a list of gift cards.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| applyGiftCard | <code>function</code> | A callback to apply a gift card to the cart. |
| checkBalanceData | <code>Object</code> | The giftCardAccount object of the most recent successful check balance GraphQL query. |
| checkGiftCardBalance | <code>function</code> | A callback to check the balance of a gift card. |
| errorLoadingGiftCards | <code>boolean</code> | Whether there was an error loading the cart's gift cards. |
| errorApplyingCard | <code>boolean</code> | Whether there was an error applying the gift card. |
| errorCheckingBalance | <code>boolean</code> | Whether there was an error checking the balance of the gift card. |
| errorRemovingCard | <code>boolean</code> | Whether there was an error removing the gift card. |
| giftCardsData | <code>Array</code> | The applied_gift_cards object of the cart query. |
| isLoadingGiftCards | <code>boolean</code> | Whether the cart's gift card data is loading. |
| isApplyingCard | <code>boolean</code> | Whether the apply gift card operation is in progress. |
| isCheckingBalance | <code>boolean</code> | Whether the check gift card balance operation is in progress. |
| isRemovingCard | <code>boolean</code> | Whether the remove gift card operation is in progress. |
| removeGiftCard | <code>function</code> | A callback to remove a gift card from the cart. |
| shouldDisplayCardBalance | <code>boolean</code> | Whether to display the gift card balance to the user |
| shouldDisplayCardError | <code>boolean</code> | Whether to display an error message under the card input field. |

<a name="GiftCardTalonProps"></a>

## GiftCardTalonProps : <code>Object</code>
Props data to use when rendering a single gift card component.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| removeGiftCardWithCode | <code>function</code> | Function for removing a gift card associated with the code passed into this talon. |



For implementation details [**View Source**](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/GiftCards/useGiftCards.js).