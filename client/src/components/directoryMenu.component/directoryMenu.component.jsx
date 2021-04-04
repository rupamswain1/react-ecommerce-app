import React,{useEffect,Suspense} from 'react';
import MenuItem from '../menuItem.component/menuItem.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {SelectDirectoryMenuItems} from '../../redux/directoryMenu/directoryMenu.selector'
//import './directoryMenu.style.scss'
import { DirectoryMenuContainer } from "./directoryMenu.style";
import {fetchCollectionStart} from '../../redux/shop/shop.actions'
import Spinner from '../../components/spinner/spinner.component';
const DirectoryMenu=({fetchCollectionStart,directoryMenu})=> {
    useEffect(()=>{
        fetchCollectionStart()
    },[fetchCollectionStart])    
    return(
        <Suspense fallback={Spinner}>        
            <DirectoryMenuContainer>
                {directoryMenu.map(({title,imageUrl,size,id,linkUrl})=>
                    (
                        <MenuItem key={`menu-item-${id}`} title={title} imageUrl={imageUrl} size={size} id={id} link={linkUrl}></MenuItem>
                    )
                )}
                
            </DirectoryMenuContainer>
        </Suspense>

        )
    

};

const mapStateToProps=createStructuredSelector({
  directoryMenu:SelectDirectoryMenuItems
})
const mapDispatchToProps = dispatch => ({
    fetchCollectionStart:()=>dispatch(fetchCollectionStart())
  });



export default connect(mapStateToProps,mapDispatchToProps)(DirectoryMenu); 