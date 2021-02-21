import React from 'react';
import {withRouter} from 'react-router-dom'
import './menuItem.style.scss';


const MenuItem = ({title,imageUrl,size,id,history,link,match}) => {
    
    return(
        
    <div className={`${id} menu-item`} onClick={()=> history.push(`${match.url}${link}` )}>
        <div className={`${id} background-image`} id={`backgroundimage${id}`} 
        
        style={{backgroundImage:`url(${imageUrl})`}}>
        consloe.log(match);
        </div>
        <div className='content' id={`content${id}`}>
            <h1 className='title' id={`title${id}`}>{title.toUpperCase()}</h1>
            <span className='subtitles' id={`subtitles${id}`}>SHOP NOW</span>
        </div>
    </div>)
};
export default withRouter(MenuItem); 