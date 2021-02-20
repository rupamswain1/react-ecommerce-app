import CartActionType from './cart.type'
export const toggleCartHidden =()=>({
   type:CartActionType.TOGGLE_CART_HIDDEN,
});


export const addItemsToCart =item=>({
   type:CartActionType.ADD_ITEM_TO_CART,
   payload:item
});

export const clearItemFromCart=item=>(
   {
      type:CartActionType.CLEAR_ITEM_FROM_CART,
      payload:item
   }
)

export const removeItemFromCart=item=>(
   {
      type:CartActionType.REMOVE_ITEM_FROM_CART,
      payload:item
   }
)