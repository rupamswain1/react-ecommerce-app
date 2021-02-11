import React from 'react';
import {connect} from 'react-redux';
import toggleCartHidden from '../../redux/cart/cart.actions'


import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cartIcon.style.scss';

const CartIcon =({toggleCartHidden})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shoppingIcon'/>
        <span className='item-count'>0</span>
    </div>
);

const MapDispatchToprops= dispatch=>({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})
export default connect(null, MapDispatchToprops)(CartIcon);