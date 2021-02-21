import React from 'react';
import MenuItem from '../menuItem.component/menuItem.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {SelectDirectoryMenuItems} from '../../redux/directoryMenu/directoryMenu.selector'
import './directoryMenu.style.scss'
const DirectoryMenu=({directoryMenu})=> {
        return(
        <div className='directory-menu'>
            {directoryMenu.map(({title,imageUrl,size,id,linkUrl})=>
                (
                    <MenuItem key={`menu-item-${id}`} title={title} imageUrl={imageUrl} size={size} id={id} link={linkUrl}></MenuItem>
                )
            )}
            
        </div>
        )
    

};

const mapStateToProps=createStructuredSelector({
  directoryMenu:SelectDirectoryMenuItems
})



export default connect(mapStateToProps)(DirectoryMenu);