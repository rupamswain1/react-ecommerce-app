import styled from 'styled-components';

export const SignUpContainer=styled.div`
    display:flex;
    flex-direction: column;
    width:340px;
    @media(max-width:360px){
        width: 70vw;
        align-self: center;
    }
`;


export const TitleContainer=styled.h2`
margin: 10px 0;
@media(max-width:360px){
    
    width: 90vw;
    text-align:center;
    right:0px;
}

`;