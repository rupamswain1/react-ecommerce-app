import React,{Suspense} from 'react';
import MenuItem from '../menuItem.component/menuItem.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {SelectDirectoryMenuItems} from '../../redux/directoryMenu/directoryMenu.selector'
//import './directoryMenu.style.scss'
import { DirectoryMenuContainer } from "./directoryMenu.style";
import Spinner from '../../components/spinner/spinner.component';
const DirectoryMenu=({directoryMenu})=> {

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

export default connect(mapStateToProps)(DirectoryMenu); 