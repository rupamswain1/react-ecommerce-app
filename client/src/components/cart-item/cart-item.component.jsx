import React from 'react';
//import './cart-item.style.scss'
import {CartItemContainer,
    ImageContainer,
    NameContainer,
    ItemDetailsContainer
} from './cart-item.style';
const CartItem = ({item: {imageUrl, price,name,quantity}})=>
{
    //console.log(name)
    
    return(
    <CartItemContainer>
        <ImageContainer src={imageUrl} alt='item'/>
        <ItemDetailsContainer>
            <NameContainer>{name}</NameContainer>
            <NameContainer>{quantity} X ${price}</NameContainer>
        </ItemDetailsContainer>
    </CartItemContainer>
)}
export default React.memo(CartItem);