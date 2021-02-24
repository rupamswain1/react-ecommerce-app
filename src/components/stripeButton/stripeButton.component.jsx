import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const onToken=token=>{
    console.log(token);
    alert('Payment Successful');
}
const StripeCheckOutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51IOSDoHxuuZls0oiYBxEVILbfAu8P3vWSdwEUGMWqES0QgWDmhaXwTjkOwkagPLnN54jRnki2JsXwJ3yDaLprWN000lFyHOjzI';

    return(
        <StripeCheckOut
            label='Pay Now'
            name='React Shop'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckOutButton;