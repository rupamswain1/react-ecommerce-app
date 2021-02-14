import CartActionType from './cart.type'
export const toggleCartHidden =()=>({
   type:CartActionType.TOGGLE_CART_HIDDEN,
});


export const addItemsToCart =item=>({
   type:CartActionType.ADD_ITEM_TO_CART,
   payload:item
});

