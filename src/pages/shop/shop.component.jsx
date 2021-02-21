import React from 'react'
import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview.component'
import {Route} from 'react-router-dom'
import CategoryPage from '../category/categoryPage.component'
const Shop=({match})=> (
    <div className='shop-page'>   
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/cat`} component={CategoryPage}/>
    </div>
)



export default Shop;