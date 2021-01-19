import React from 'react';
import './menuItem.style.scss';


const MenuItem = ({title,imageUrl,size,id,linkUrl}) => {
    return(
    <div className={`${size} menu-item`}>
        <div className={`${size} background-image`} id={`backgroundimage${id}`} 
        style={{backgroundImage:`url(${imageUrl})`}}>
        </div>
        <div className='content' id={`content${id}`}>
            <h1 className='title' id={`title${id}`}>{title.toUpperCase()}</h1>
            <span className='subtitles' id={`subtitles${id}`}>SHOP NOW</span>
        </div>
    </div>)
};
export default MenuItem; 