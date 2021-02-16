import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemCount, selectCartItems} from '../../redux/cart/cart.selector';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cartIcon.style.scss';

const CartIcon =({toggleCartHidden,itemCount})=>{
   
    return(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shoppingIcon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)};

const mapDispatchToprops= dispatch=>({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

const mapStateToProps=(state)=>(
    {
     itemCount:selectCartItemCount(state),

})
export default connect(mapStateToProps, mapDispatchToprops)(CartIcon);