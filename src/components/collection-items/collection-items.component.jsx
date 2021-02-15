import React from 'react';
import './collection-items.style.scss'
import CustomButton from '../custom-button/custom-button-component'

import {connect} from 'react-redux';
import { addItemsToCart } from '../../redux/cart/cart.actions';
const CollectionItems= ({item,addItemsToCart})=>
{
    const{id,name,imageUrl,price}=item;
   //console.log(item);
    return(
        <div className='collection-items'>
            <div 
                className='image'
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className='item-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
                <span>{item.id}</span>
            </div>
            <CustomButton onClick={()=>addItemsToCart(item)} inverted>Add To Cart</CustomButton>
        </div>
    );
   }
const mapDispatchToProps= dispatch=>({
    addItemsToCart: item=>dispatch(addItemsToCart(item))
});
export default connect(null,mapDispatchToProps)(CollectionItems);