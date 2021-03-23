import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button-component';

const SetImageOpacity=(opacity)=>{
    if({opacity}){
        //console.log({opacity});
        return {opacity};
    }
    return {opacity:1}
}

export const CollectionItemsContainer=styled.div`
    width:22vw;
    display: flex;
    flex-direction:column;
    height: 350px;
    align-items: center;
    position: relative;
    &:hover{
       ${SetImageOpacity(0.8)}
        button{
            opacity: 0.85;
            display:flex;
               
        }
    }


    @media screen and (max-width:500px){
        width:40vw;
        &:hover{
            ${SetImageOpacity('unset')}
             button{
                 opacity: unset;
                 
                    
             }
         }
    }
`;


export const ImageContainer=styled.div`
    width:100%;
    height: 95%;
    background-size:cover;
    background-position: center;
    margin-bottom:5px;
    background-image: ${({imageUrl})=>`url(${imageUrl})`};
    ${SetImageOpacity()}
    
    
`;

export const CustomButtonContainer=styled(CustomButton)`
    width: 80%;
    opacity : 0.7;
    position: Absolute;
    top:255px;
    display:none;
    
    @media screen and (max-width:500px){
        display:block;
        opacity:0.9;
        min-width:unset;
        padding:0 10px;
    }

`;
export const ItemFooterContainer=styled.div`
    width: 100%;
    height: 5%;
    display:flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const NameContainer=styled.span`
    width: 90%;
    margin-bottom: 15px;
`;

export const PriceContainer=styled.span`
width:10%;
`;