import React from 'react';
import './categoryPage.style.scss'
import {SelectCollection} from '../../redux/shop/shop.selector';
import {connect} from 'react-redux';
const CategoryPage=({collection})=>
{
    console.log(collection)
    //console.log(match.params.categoryId)
    return(
    <div className='category-page'>
        <h1>ABC</h1>
    </div>
)}

const mapStateToProps=(state,ownprops)=>({
    collection:SelectCollection(ownprops.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);