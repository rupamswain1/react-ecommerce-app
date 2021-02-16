import {createSelector} from 'reselect';

const selectCart=state=>state.cart;

//udemy Zero To mastery course, video: 128
export const selectCartItems=createSelector(
    [selectCart],
    cart=>cart.cartItems
);

export const selectCartItemCount=createSelector(
    [selectCartItems],
    cartItems=>
    cartItems.reduce(
        (accumulatedQuantity, cartItem)=>
        accumulatedQuantity+cartItem.quantity,0
    )
);