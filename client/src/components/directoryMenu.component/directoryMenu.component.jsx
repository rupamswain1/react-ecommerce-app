import React from 'react';
import MenuItem from '../menuItem.component/menuItem.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {SelectDirectoryMenuItems} from '../../redux/directoryMenu/directoryMenu.selector'
//import './directoryMenu.style.scss'
import { DirectoryMenuContainer } from "./directoryMenu.style";
const DirectoryMenu=({directoryMenu})=> {
        return(
        <DirectoryMenuContainer>
            {directoryMenu.map(({title,imageUrl,size,id,linkUrl})=>
                (
                    <MenuItem key={`menu-item-${id}`} title={title} imageUrl={imageUrl} size={size} id={id} link={linkUrl}></MenuItem>
                )
            )}
            
        </DirectoryMenuContainer>
        )
    

};

const mapStateToProps=createStructuredSelector({
  directoryMenu:SelectDirectoryMenuItems
})



export default connect(mapStateToProps)(DirectoryMenu); 