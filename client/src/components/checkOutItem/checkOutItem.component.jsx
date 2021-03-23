import React from 'react';
import './checkOutItem.style.scss';
import {connect} from 'react-redux';
import {clearItemFromCart,addItemsToCart,removeItemFromCart} from '../../redux/cart/cart.actions'
import CartItem from '../cart-item/cart-item.component';

const CheckOutItem=({cartItem,clearItem,addItem,removeItem})=>
{ 
    const {name,imageUrl,price,quantity}=cartItem;

    return(
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10092;</div>
            <span className="value">{quantity}</span>    
            <div className="arrow" onClick={()=>addItem(cartItem)}>&#10093;</div>
        </span>
        <span className='price'>&#8377;{price}</span>
        <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>
        
    </div>
)
}

const mapDispatchToProps=dispatch=>({
    clearItem: item=>dispatch(clearItemFromCart(item)),
    addItem:item=>dispatch(addItemsToCart(item)),
    removeItem:item=>dispatch(removeItemFromCart(item))
})
export default connect(null,mapDispatchToProps)(CheckOutItem);