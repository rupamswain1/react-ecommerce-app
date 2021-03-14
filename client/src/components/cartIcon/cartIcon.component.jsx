import React from 'react';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemCount, selectCartItems} from '../../redux/cart/cart.selector';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
//import './cartIcon.style.scss';
import {CartIconContainer,
    ShoppingIconContainer,
    ItemCountContainer
} from './cartIcon.style';

const CartIcon =({toggleCartHidden,itemCount})=>{
   
    return(
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer/>
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)};

const mapDispatchToprops= dispatch=>({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

const mapStateToProps=createStructuredSelector(
    {
     itemCount:selectCartItemCount

})
export default connect(mapStateToProps, mapDispatchToprops)(CartIcon);