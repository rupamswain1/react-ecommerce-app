import styled from 'styled-components';

export const CartDropDownContainer=styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 60px;
    right: 25px;
    z-index: 5;
`; 

export const CartItemsContainer=styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const EmptyCartMessageContainer=styled.span`
    font-size: 40px;
    margin: auto;
    text-align: center;
`;