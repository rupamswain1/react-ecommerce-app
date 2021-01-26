import React from 'react';
import './homepage.style.scss';
import DirectoryMenu from '../../components/directoryMenu.component/directoryMenu.component';
import Header from '../../components/header/header.component'
const HomePage=({history})=>
(
    <div className='homepage'>
        <DirectoryMenu key='homePage'></DirectoryMenu>
    </div>
);

export default HomePage;