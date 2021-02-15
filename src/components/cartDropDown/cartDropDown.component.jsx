import React from 'react';

import CustomButton from '../custom-button/custom-button-component';
import CartItem from '../cart-item/cart-item.component';
import './cartDropDown.style.scss';

import {connect} from 'react-redux';


const CartDropDown=({cartItems})=>{
    console.log(cartItems)
    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem=>(
                <CartItem key={cartItem.id} item={cartItem}/>        
            ))}    
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>

)}

const mapStateToProps =({cart:{cartItems}})=>(
    {
        cartItems,
    }
);
export default connect(mapStateToProps)(CartDropDown);