import React from 'react';
import './categoryPage.style.scss'
import {SelectCollection} from '../../redux/shop/shop.selector';
import {connect} from 'react-redux';
import CollectionItems from '../../components/collection-items/collection-items.component';
const CategoryPage=({collection})=>
{
    console.log({collection})
    const {title,items}=collection;
    return(
    <div className='category-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(
                    item=>(<CollectionItems key={item.id} item={item}/>)
                )
            }
        </div>
    </div>
)}

const mapStateToProps=(state,ownprops)=>({
    collection:SelectCollection(ownprops.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);