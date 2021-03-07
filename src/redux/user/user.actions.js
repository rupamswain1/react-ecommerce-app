import UserActionType from './user.type';
export const SetCurrentUser=user=>({
    type:UserActionType.SET_CURRENT_USER,
    payload: user
});

export const GoogleSignInStart=()=>({
    type:UserActionType.GOOGLE_SIGNIN_START,
    
})

export const SignInSuccess=(user)=>({
    type:UserActionType.SIGNIN_SUCCESS,
    payload: user,
})

export const SingInFail=(error)=>({
    type:UserActionType.SIGNIN_FAIL,
    payload:error
})

export const EmailSignInStart=(userNameAndPassword)=>({
    type:UserActionType.EMAIL_SIGNIN_START,
    payload:userNameAndPassword
})



