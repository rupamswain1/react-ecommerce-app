import React from 'react';
//import './collection-items.style.scss'
import {CollectionItemsContainer,
    ImageContainer,
    CustomButtonContainer,
    ItemFooterContainer,
    NameContainer,
    PriceContainer
} from './collection-item.style';
import CustomButton from '../custom-button/custom-button-component'

import {connect} from 'react-redux';
import { addItemsToCart } from '../../redux/cart/cart.actions';
const CollectionItems= ({item,addItemsToCart})=>
{
    const{id,name,imageUrl,price}=item;
   //console.log(item);
    return(
        <CollectionItemsContainer>
            <ImageContainer
                className='image' imageUrl={imageUrl}
            />
            <ItemFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
                </ItemFooterContainer>
            <CustomButtonContainer onClick={()=>addItemsToCart(item)} inverted>Add To Cart</CustomButtonContainer>
        </CollectionItemsContainer>
    );
   }
const mapDispatchToProps= dispatch=>({
    addItemsToCart: item=>dispatch(addItemsToCart(item))
});
export default connect(null,mapDispatchToProps)(CollectionItems); 