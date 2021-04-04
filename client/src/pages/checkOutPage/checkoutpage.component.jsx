import React from 'react';
import './checkOutPage.style.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartTotal,selectCartItems } from '../../redux/cart/cart.selector';
import CheckOutItem from '../../components/checkOutItem/checkOutItem.component'
import StripeCheckOutButton from '../../components/stripeButton/stripeButton.component'
import {Link} from 'react-router-dom';
const CheckOutPage=({cartItems,total})=>{
    
    //console.log(cartItems.length);
    return (
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
            (cartItems.length!=0)?cartItems.map(
                cartItem=>(<CheckOutItem key={cartItem.id+cartItem.name}cartItem={cartItem}></CheckOutItem>)
            ):
            <div className='noItemsContainer'>
                <div className='noItemsMessage'>You Do Not Have Any Items in Cart</div>
                <div className='navigateToHomeContainer'>
                    <Link className='navigateToHomeText' to='/'>Go To Shop</Link>
                </div>
            </div>
        }
        <div className='total-price'>
            <span>Total: &#8377;{total}</span>
        </div>
        <div class='test-warning'>
        *Please use the following Test Credit card for Payment*
        <br/>
        4242 4242 4242 4242 - Exp: 01/29 - CVV:123
        </div>
        <div className={cartItems.length!=0?`checkOutButton`:`checkOutButtonDisable`}>
            <StripeCheckOutButton price={total}/>
        </div>
    </div>
)}

const mapStateToProps=createStructuredSelector({
     cartItems:selectCartItems,
     total:selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);