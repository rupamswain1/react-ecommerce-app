import * as action from '../../redux/cart/cart.actions';

import CartActionType from '../../redux/cart/cart.type';

it('tests the toggle functionality of cart',()=>{
    const expectedCondition={
        type:CartActionType.TOGGLE_CART_HIDDEN
    }
    expect(action.toggleCartHidden()).toEqual(expectedCondition);
})

it('tests add item to cart',()=>{
    const item='hats';
    const expectedCondition={
        type:CartActionType.ADD_ITEM_TO_CART,
        payload:item
    }
    expect(action.addItemsToCart(item)).toEqual(expectedCondition);
})