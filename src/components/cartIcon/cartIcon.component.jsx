import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cartIcon.style.scss';

const CartIcon =()=>(
    <div className='cart-icon'>
        <ShoppingIcon className='shoppingIcon'/>
        <span className='item-count'>0</span>
    </div>
);

export default CartIcon;