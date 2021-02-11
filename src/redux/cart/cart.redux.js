import CartActionType from './cart.type';

const INITIAL_STATE={
    hidden:true
}

const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionType.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden,
            }    
        default:
            console.log('def')
            return state;

    }
}
export default cartReducer;