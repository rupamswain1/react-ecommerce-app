import React from 'react';
//import './collections-preview.style.scss'
import CollectionItems from '../collection-items/collection-items.component'
import {CollectionsPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './collection-preview.style'

const CollectionsPreview=({title,items})=>{
    return(
    <CollectionsPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {items
                .filter((item,index) => index<4)
                .map(item=>
                    (
                        <CollectionItems key={item.id} id={item.id} item={item}/>
                    )
                    )
            }
        </PreviewContainer>
    </CollectionsPreviewContainer>
    );

}
export default CollectionsPreview; 