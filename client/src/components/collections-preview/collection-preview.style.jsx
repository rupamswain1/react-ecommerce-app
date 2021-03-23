import styled from 'styled-components'

export const CollectionsPreviewContainer=styled.div`
    display: flex;
    flex-direction:column;
    margin-bottom: 30px;
    padding: 40px;

    @media screen and (max-width:500px){
        align-items: center;
        padding: 10px;
    }

`;

export const TitleContainer=styled.h1`
    font-size:20px;
    margin-bottom: 25px;
`;

export const PreviewContainer=styled.div`
    display:flex;
    justify-content: space-between;

    @media screen and (max-width:500px){
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-gap:15px;
    }

`;