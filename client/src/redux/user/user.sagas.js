import {takeLatest,put,all,call} from 'redux-saga/effects';
import {auth, googleProvider, createUserProfileDocument,getCurrentUser} from '../../fireBase/firebase.utils';
import UserActionType from './user.type'
import {SignInSuccess,SingInFail,SignOutSuccess,SignOutFail,SignUpFail,SignUpSuccess} from './user.actions';

export function* isUserAuthenticated(){
    try{
        const userAuth=yield getCurrentUser();
        console.log(userAuth)
        if(!userAuth) return;
        yield setSnapShot(userAuth)
    }catch(error){
        yield put(SingInFail(error))
    }
}

export function* signUp({payload:{email,password,displayName}}){
    try{
       const {user}= yield  auth.createUserWithEmailAndPassword(email,password)
       console.log(user) 
       yield put(SignUpSuccess({user,additionalData:{displayName}}))
    }catch(error){
        yield put(SignUpFail(error));
    }
    

}

export function* signInAfterSignUp({payload:{user,additionalData}}){
    yield setSnapShot(user,additionalData);
}

export function* signOutUser(){
    try{
        const userRef=auth.signOut();
        console.log(userRef);
        yield put(SignOutSuccess())
    }catch(error){
        yield put(SignOutFail(error));
    }
}

export function* setSnapShot(user,additionalData){
    try{ 
        
        const userRef=yield call(createUserProfileDocument,user,additionalData);
        const userSnapshot=yield userRef.get();
        yield put(SignInSuccess({id:userSnapshot.id,...userSnapshot.data()}));
    }catch(error){
        yield put(SingInFail(error));
    }
}
export function* signInWithGoogle(){
    try{ 
        const {user}=yield auth.signInWithPopup(googleProvider);
        yield setSnapShot(user);
    }catch(error){
        yield put(SingInFail(error));
    }
}

export function* googleSignInStart(){
    console.log('start')
    yield takeLatest(UserActionType.GOOGLE_SIGNIN_START,signInWithGoogle)
}

export function* signInWithEmail({payload:{email,password}}){
    try{
        //console.log('signInWithEmail called')
        const {user}=yield auth.signInWithEmailAndPassword(email,password);
        yield setSnapShot(user);
    }catch(error){
        put(SingInFail(error));
    }
}

export function* emailSignInStart(){
    yield takeLatest(UserActionType.EMAIL_SIGNIN_START,signInWithEmail)
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionType.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* StartingSignOut(){
    yield takeLatest(UserActionType.SIGNOUT_START, signOutUser)
}

export function* signUpStart(){
    yield takeLatest(UserActionType.SIGNUP_START,signUp)
}

export function* signUpSuccess(){
    yield takeLatest(UserActionType.SIGNUP_SUCCESS,signInAfterSignUp);
}

export function* userSagas(){
    yield all([call(googleSignInStart),call(emailSignInStart), call(onCheckUserSession),call(StartingSignOut),
    call(signUpStart),call(signUpSuccess)])
}

