import React from 'react';
import './checkOutPage.style.scss';

const CheckOutPage=()=>(
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
    </div>
)

export default CheckOutPage;