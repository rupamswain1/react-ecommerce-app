import React from 'react';
import {connect} from 'react-redux';
import CollectionsPreview from '../../components/collections-preview/collections-preview.component'
import {createStructuredSelector} from 'reselect';
import {SelectShopDataForPreview} from '../../redux/shop/shop.selector';


//import './collectionsOverview.style.scss';
import {CollectionsOverviewContainer} from './collectionOverview.Style';

const CollectionsOverview=({collections})=>(
    <CollectionsOverviewContainer>
        {collections.map(({id,title, items, ...otherProps})=>
                     (<CollectionsPreview key={id} title={title} items={items} {...otherProps}/>)
                    )}
    </CollectionsOverviewContainer>

)

const mapStateToProp=createStructuredSelector(
    { collections:SelectShopDataForPreview}
 )

 export default connect(mapStateToProp)(CollectionsOverview); 