import React from 'react';
import './collection-items.style.scss'

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
    </div>
);
   
export default CollectionItems;