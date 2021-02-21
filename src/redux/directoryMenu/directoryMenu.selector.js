import {createSelector} from 'reselect';

const SelectDirectory=state=>state.directory;

export const SelectDirectoryMenuItems=createSelector(
    [SelectDirectory],
    menuItems=>menuItems.section
)