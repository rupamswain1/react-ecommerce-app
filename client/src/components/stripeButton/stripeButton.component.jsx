import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckOutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51IOSDoHxuuZls0oiYBxEVILbfAu8P3vWSdwEUGMWqES0QgWDmhaXwTjkOwkagPLnN54jRnki2JsXwJ3yDaLprWN000lFyHOjzI';

    const onToken=token=>{
        axios({
            url:'payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token
            }
        }).then(response=>{
            alert('Payment Successful')
        }).catch(error=>{
            console.log('Payment Error ',JSON.parse(error));
            alert('There was an Issue with your payment. Please make sure to use the provided credid card')
        })
    }

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