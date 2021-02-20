import React from 'react';
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button-component';
import CartItem from '../cart-item/cart-item.component';
import './cartDropDown.style.scss';

import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selector'
import { toggleCartHidden } from '../../redux/cart/cart.actions'


const CartDropDown=({cartItems,history,dispatch})=>{
    console.log(cartItems)
    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length?(
                cartItems.map(cartItem=>(
                <CartItem key={cartItem.id+cartItem.name} item={cartItem}/> )))
                :(<span className="empty-cart-message">Your Cart Is Emplty</span>)
           
        
        }    
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>

)}

const mapStateToProps =createStructuredSelector(
    {
        cartItems:selectCartItems
    }
); 
export default withRouter(connect(mapStateToProps)(CartDropDown));