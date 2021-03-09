import {all,call,put,takeLatest} from 'redux-saga/effects';
import UserActionType from '../../redux/user/user.type'
import {clearCartAction} from './cart.actions'
export function* clearCart(){
    yield put(clearCartAction());
}

export function* clearCartStart(){
    yield takeLatest(UserActionType.SIGNOUT_SUCCESS, clearCart);
}

export  function* cartSagas(){
    yield all([call(clearCartStart)]) 
}