import React from 'react';
import './collections-preview.style.scss'
import CollectionItems from '../collection-items/collection-items.component'

const CollectionsPreview=({title,items})=>{
    return(
    <div className='collections-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {items
                .filter((item,index) => index<4)
                .map(item=>
                    (
                        <CollectionItems key={item.id} id={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price}/>
                    )
                    )
            }
        </div>
    </div>
    );

}
export default CollectionsPreview;