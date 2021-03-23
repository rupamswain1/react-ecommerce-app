import React from 'react';
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button-component';
import CartItem from '../cart-item/cart-item.component';
//import './cartDropDown.style.scss';
 import {CartDropDownContainer,
    CartItemsContainer,
    EmptyCartMessageContainer,
    CustomButtonContainerCartDD
} from './cartDropDown.style'

import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/cart.selector'
import { toggleCartHidden } from '../../redux/cart/cart.actions'


const CartDropDown=({cartItems,history,dispatch})=>{
    console.log(cartItems)
    return(
    <CartDropDownContainer>
        <CartItemsContainer>
            {
                cartItems.length?(
                cartItems.map(cartItem=>(
                <CartItem key={cartItem.id+cartItem.name} item={cartItem}/> )))
                :(<EmptyCartMessageContainer>Your Cart Is Emplty</EmptyCartMessageContainer>)
           
        
        }    
        </CartItemsContainer>
        
        <CustomButtonContainerCartDD onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButtonContainerCartDD>
    </CartDropDownContainer>

)}

const mapStateToProps =createStructuredSelector(
    {
        cartItems:selectCartItems
    }
); 
export default withRouter(connect(mapStateToProps)(CartDropDown));