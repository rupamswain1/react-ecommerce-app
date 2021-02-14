import CartActionType from './cart.type'
const toggleCartHidden=()=>({
   type:CartActionType.TOGGLE_CART_HIDDEN,
})
export default toggleCartHidden;

const addItemsToCart=(item)=>({
   type:CartActionType.addItemsToCart,
   action:item
})
