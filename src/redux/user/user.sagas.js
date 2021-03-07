import {takeLatest,put,all,call} from 'redux-saga/effects';
import {auth, googleProvider, createUserProfileDocument} from '../../fireBase/firebase.utils';
import UserActionType from './user.type'
import {SignInSuccess,SingInFail} from './user.actions';

export function* setSnapShot(user){
    try{ 
        
        const userRef=yield call(createUserProfileDocument,user);
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

export function* userSagas(){
    yield all([call(googleSignInStart),call(emailSignInStart)]);
}