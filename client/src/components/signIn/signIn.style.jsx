import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button-component';

export const SignInContainer=styled.div`
    width: 340px;
    display: flex;
    flex-direction: column;
    margin-left: 3%;
    @media(max-width:360px){
        width: 70vw;
        
    }
`;

export const TitleContainer=styled.h2`
    margin: 10px 0;
`;

export const ButtonContainer=styled.div`
    display:flex;    
    justify-content: space-between;
    @media(max-width:360px){
        display:grid;
        grid-template-columns:1fr;
        grid-gap: 00px;
        margin: auto;
        width: 100%;
    }
`;