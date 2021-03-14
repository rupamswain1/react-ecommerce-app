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

export const selectCartHidden=createSelector(
    [selectCart],
    cart=>cart.hidden,
);

export const selectCartTotal=createSelector(
    [selectCartItems],
    cartTotal=>
    cartTotal.reduce(
        (accumulatedPrice,cartItem)=>
        (accumulatedPrice+(cartItem.quantity*cartItem.price)),0
    )
);