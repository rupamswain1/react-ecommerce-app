import styled,{css} from 'styled-components';
import {Link} from 'react-router-dom';


export const HeadetContainer=styled.div`
    height:70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width:500px){
        height:60px;
        padding: 10px;
        margin-bottom:20px
    }
}
`;

export const LinkContainer=styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

`;

export const LogoContainer=styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width:500px){
        width:50px;
        padding:0px;
    }

`;

export const OptionsCotainer=styled.div`
    width: 50%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;

    @media screen and (max-width:500px){
        width:80%;
        
    }
    
`; 

export const OptionLinkContainer=styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

