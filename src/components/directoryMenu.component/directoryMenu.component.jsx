import React from 'react';
import MenuItem from '../menuItem.component/menuItem.component';
import './directoryMenu.style.scss';

class DirectoryMenu extends React.Component{
    constructor(){
        super();

        this.state={
            section:[{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              },
            ]
        };
    }

    render(){
        return(
        <div className='directory-menu'>
            {this.state.section.map(({title,imageUrl,size,id,linkUrl})=>
                (
                    <MenuItem key={`menu-item-${id}`} title={title} imageUrl={imageUrl} size={size} id={id} link={linkUrl}></MenuItem>
                )
            )}
            
        </div>
        )}
    

};
export default DirectoryMenu;