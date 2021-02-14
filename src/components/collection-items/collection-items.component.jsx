import React from 'react';
import './collection-items.style.scss'
import CustomButton from '../custom-button/custom-button-component'
const CollectionItems= ({id,name,imageUrl,price})=>(
    <div className='collection-items'>
        <div 
            className='image'
            style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className='item-footer'>
            <span className='name'>{name}</span>
            <spane className='price'>{price}</spane>
        </div>
        <CustomButton inverted>Add To Cart</CustomButton>
    </div>
);
   
export default CollectionItems;