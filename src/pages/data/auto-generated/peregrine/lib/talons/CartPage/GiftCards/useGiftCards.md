
## Functions
 
[useGiftCards(props)] ⇒ `[GiftCardsTalonProps]`

Handles the logic for a component that renders a list of gift cards.
It performs effects and returns the prop data necessary for rendering
the component.

This talon performs the following effects:

- Fetch the currently applied gift cards for a cart
- Manage the updating state of the cart while a gift card is being applied or removed

[useGiftCard(props)] ⇒ `[GiftCardTalonProps]`

Provide logic for a single gift card component.


## Typedefs
 
[GiftCardsMutations] : `Object`

GraphQL mutations for Gift Cards.

[GiftCardsQueries] : `Object`

GraphQL queries for Gift Cards.

[GiftCardsTalonProps] : `Object`

Props data to use when rendering a list of gift cards.

[GiftCardTalonProps] : `Object`

Props data to use when rendering a single gift card component.


Handles the logic for a component that renders a list of gift cards.
It performs effects and returns the prop data necessary for rendering
the component.

This talon performs the following effects:

- Fetch the currently applied gift cards for a cart
- Manage the updating state of the cart while a gift card is being applied or removed

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| props.setIsCartUpdating | `function` | Callback function for setting the update state for the cart. |
| props.mutations | [`GiftCardsMutations`](#GiftCardsMutations) | GraphQL mutations for Gift Cards |
| props.queries | [`GiftCardsQueries`](#GiftCardsQueries) | GraphQL queries for Gift Cards |

**Example** *(Importing into your project)*

```js
import { useGiftCards } from '@magento/peregrine/lib/talons/CartPage/GiftCards'
```

Provide logic for a single gift card component.

**Returns:**
**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| props | `Object` |  |
| props.code | `String` | Gift card's code |
| props.removeGiftCard | `function` | A function that removes a gift card when provided a code |

**Example** *(Importing into your project)*  

```js
import { useGiftCard } from '@magento/peregrine/lib/talons/CartPage/GiftCards/useGiftCard';
```

GraphQL mutations for Gift Cards.

**See**: [`giftCardQueries.ee.js`](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/GiftCards/giftCardQueries.gql.ee.js)
for queries used in Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| applyGiftCardMutation | `GraphQLAST` | The mutation used to apply a gift card to the cart. |
| removeGiftCardMutation | `GraphQLAST` | The mutation used to remove a gift card from the cart. |

GraphQL queries for Gift Cards.

**See**: [`giftCardQueries.ee.js`](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/GiftCards/giftCardQueries.gql.ee.js)
for queries used in Venia  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| getAppliedGiftCardsQuery | `GraphQLAST` | The query used to get the gift cards currently applied to the cart. |
| getGiftCardBalanceQuery | `GraphQLAST` | The query used to get the gift cards currently applied to the cart. |

Props data to use when rendering a list of gift cards.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| applyGiftCard | `function` | A callback to apply a gift card to the cart. |
| checkBalanceData | `Object` | The giftCardAccount object of the most recent successful check balance GraphQL query. |
| checkGiftCardBalance | `function` | A callback to check the balance of a gift card. |
| errorLoadingGiftCards | `boolean` | Whether there was an error loading the cart's gift cards. |
| errorApplyingCard | `boolean` | Whether there was an error applying the gift card. |
| errorCheckingBalance | `boolean` | Whether there was an error checking the balance of the gift card. |
| errorRemovingCard | `boolean` | Whether there was an error removing the gift card. |
| giftCardsData | `Array` | The applied_gift_cards object of the cart query. |
| isLoadingGiftCards | `boolean` | Whether the cart's gift card data is loading. |
| isApplyingCard | `boolean` | Whether the apply gift card operation is in progress. |
| isCheckingBalance | `boolean` | Whether the check gift card balance operation is in progress. |
| isRemovingCard | `boolean` | Whether the remove gift card operation is in progress. |
| removeGiftCard | `function` | A callback to remove a gift card from the cart. |
| shouldDisplayCardBalance | `boolean` | Whether to display the gift card balance to the user |
| shouldDisplayCardError | `boolean` | Whether to display an error message under the card input field. |

Props data to use when rendering a single gift card component.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| removeGiftCardWithCode | `function` | Function for removing a gift card associated with the code passed into this talon. |

**Source Code**: [pwa-studio/packages/peregrine/lib/talons/CartPage/GiftCards/useGiftCards.js](https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/CartPage/GiftCards/useGiftCards.js)
