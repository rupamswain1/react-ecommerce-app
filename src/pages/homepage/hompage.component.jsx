import React from 'react';
import './homepage.style.scss';
import DirectoryMenu from '../../components/directoryMenu.component/directoryMenu.component';
const HomePage=({history})=>
(
    <div className='homepage'>
        <DirectoryMenu key='homePage'></DirectoryMenu>
    </div>
);

export default HomePage;