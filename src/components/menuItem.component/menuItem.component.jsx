import React from 'react';
import {withRouter} from 'react-router-dom'
//import './menuItem.style.scss';
import {MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    TitleContainer,
    SubTitleContainer
} from './menuItem.style'

const MenuItem = ({title,imageUrl,size,id,history,link,match}) => {
    
    return(
        
    <MenuItemContainer size={size} onClick={()=> history.push(`${match.url}${link}` )}>
        <BackgroundImageContainer
        className='backgroundImg'
        imageUrl={imageUrl}>
        </BackgroundImageContainer>
        <ContentContainer className='content' id={`content${id}`}>
            <TitleContainer id={`title${id}`}>{title.toUpperCase()}</TitleContainer>
            <SubTitleContainer id={`subtitles${id}`}>SHOP NOW</SubTitleContainer>
        </ContentContainer>
    </MenuItemContainer>)
};
export default withRouter(MenuItem);