import React,{useEffect,Suspense} from 'react';
import './categoryPage.style.scss'
import {SelectCollection} from '../../redux/shop/shop.selector';
import {connect} from 'react-redux';
import CollectionItems from '../../components/collection-items/collection-items.component';
import {fetchCollectionStart} from '../../redux/shop/shop.actions'
import Spinner from '../../components/spinner/spinner.component';
const CategoryPage=({fetchCollectionStart,collection})=>
{
     
    useEffect(()=>{
        fetchCollectionStart()
    },[fetchCollectionStart])

    console.log({fetchCollectionStart,collection})
    //const {title,items}=collection;
    return(
    collection?(
    <Suspense fallback={Spinner}>
    <div className='category-page'>
        <h2 className='title'>{collection.title}</h2>
        <div className='items'>
            {
                collection.items.map(
                    item=>(<CollectionItems key={item.id} item={item}/>)
                )
            }
        </div>
    </div>
    </Suspense>):<div></div>
)}

const mapStateToProps=(state,ownprops)=>({
    collection:SelectCollection(ownprops.match.params.categoryId)(state)
})
const mapDispatchToProps = dispatch => ({
    fetchCollectionStart:()=>dispatch(fetchCollectionStart())
  });

export default connect(mapStateToProps,mapDispatchToProps)(CategoryPage);