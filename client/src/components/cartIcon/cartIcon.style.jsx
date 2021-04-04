import styled from 'styled-components';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
export const CartIconContainer=styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media(max-width:500px){
        
        width: 45px;
        height: 18px;
    }
`;

export const ShoppingIconContainer=styled(ShoppingIcon)`
    width:25px;
    height:24px;
`;
export const ItemCountContainer=styled.span`
    position:absolute;
    font-size:10px;
    font-weight: bold;
    bottom: 12px;
    @media(max-width:500px){
        
        bottom: 0px;
    }
`;
