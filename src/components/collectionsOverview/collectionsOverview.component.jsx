import React from 'react';
import {connect} from 'react-redux';
import CollectionsPreview from '../../components/collections-preview/collections-preview.component'
import {createStructuredSelector} from 'reselect';
import {SelectShopDataForPreview} from '../../redux/shop/shop.selector';


import './collectionsOverview.style.scss';

const CollectionsOverview=({collections})=>(
    <div className='collection-overview'>
        {collections.map(({id,title, items, ...otherProps})=>
                     (<CollectionsPreview key={id} title={title} items={items} {...otherProps}/>)
                    )}
    </div>

)

const mapStateToProp=createStructuredSelector(
    { collections:SelectShopDataForPreview}
 )

 export default connect(mapStateToProp)(CollectionsOverview);