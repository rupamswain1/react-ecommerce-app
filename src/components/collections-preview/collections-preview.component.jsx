import React from 'react';

const CollectionsPreview=({title,items})=>{
    return(
    <div className='collections-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {items
                .filter((item,index) => index<4)
                .map(item=>
                    (<div key={item.id}>{item.name}
                    </div>)
                    )
            }
        </div>
    </div>
    );

}
export default CollectionsPreview;