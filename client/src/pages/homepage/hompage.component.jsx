import React from 'react';
//import './homepage.style.scss';
import {HomePageContainer} from './homepage.component'
import DirectoryMenu from '../../components/directoryMenu.component/directoryMenu.component';
import Header from '../../components/header/header.component'
const HomePage=({history})=>
(
    <HomePageContainer>
        <DirectoryMenu key='homePage'></DirectoryMenu>
    </HomePageContainer>
);

export default HomePage;