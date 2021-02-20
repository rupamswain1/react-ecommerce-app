import React from 'react';
import './checkOutPage.style.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartTotal,selectCartItems } from '../../redux/cart/cart.selector';
import CheckOutItem from '../../components/checkOutItem/checkOutItem.component'
const CheckOutPage=({cartItems,total})=>(
    <div className='Checkout-Page'>
        <div className='checkoutHeader'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(
                cartItem=>(<CheckOutItem key={cartItem.id+cartItem.name}cartItem={cartItem}></CheckOutItem>)
            )
        }
        <div className='total-price'>
            <span>Total: ${total}</span>
        </div>
    
    </div>
)

const mapStateToProps=createStructuredSelector({
     cartItems:selectCartItems,
     total:selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);