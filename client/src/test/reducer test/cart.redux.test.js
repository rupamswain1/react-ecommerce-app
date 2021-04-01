import CartActionType from '../../redux/cart/cart.type';

import cartReducer from '../../redux/cart/cart.redux';

describe('Cart reducer test',()=>{
    const INITIAL_STATE={
        hidden:true,
        cartItems:[],
    }

    it('will test the cart dropdown toggle',()=>{
        expect(cartReducer(INITIAL_STATE,{
            type:CartActionType.TOGGLE_CART_HIDDEN,
            hidden:true
        })).toEqual({hidden:false,cartItems:[]})
        
    })
    it('will test the cart dropdown toggle',()=>{
        const INITIAL_STATE={
            hidden:false,
            cartItems:[],
        }
        expect(cartReducer(INITIAL_STATE,{
            type:CartActionType.TOGGLE_CART_HIDDEN,
            hidden:false
        })).toEqual({hidden:true,cartItems:[]})
        
    })

})