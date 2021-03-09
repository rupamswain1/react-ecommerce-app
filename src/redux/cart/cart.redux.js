import CartActionType from './cart.type';
import {updateCartWithItems,removeAndUpdateCart} from './cartUtils';

const INITIAL_STATE={
    hidden:true,
    cartItems:[],
}

const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionType.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden,
            };
        case CartActionType.ADD_ITEM_TO_CART:
            return{
                ...state,
                cartItems:updateCartWithItems(state.cartItems,action.payload),
            };
        case CartActionType.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartItem=>(cartItem.name!=action.payload.name)||(cartItem.id!=action.payload.id)),
            }
        case CartActionType.REMOVE_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:removeAndUpdateCart(state.cartItems,action.payload),
            }  
        case CartActionType.CLEAR_CART:
            return{
                ...state,
                cartItems:[],
            }  
        default:
            return state;

    }
}
export default cartReducer;