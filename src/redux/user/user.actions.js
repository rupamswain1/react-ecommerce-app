import UserActionType from './user.type';
const SetCurrentUser=user=>({
    type:UserActionType.SET_CURRENT_USER,
    payload: user
});

export default SetCurrentUser;