import {createSelector} from 'reselect';

const SelectUser= state=>state.user;

export const SelectUserInfo = createSelector(
    [SelectUser],
    (user)=>user.currentUser
);