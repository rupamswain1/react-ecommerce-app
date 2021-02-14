import CartActionType from './cart.type';
import {updateCartWithItems} from './cartUtils';
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
        default:
            return state;

    }
}
export default cartReducer;