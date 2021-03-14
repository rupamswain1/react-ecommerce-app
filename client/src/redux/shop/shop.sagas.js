import {takeLatest, call,put} from 'redux-saga/effects';
import ShopActionTypes from './shop.type'
import {firestore,convertCollectionsSnapshotToMap} from '../../fireBase/firebase.utils';
import {fetchCollectionSuccess,fetchCollectionFaliure} from '../../redux/shop/shop.actions'
export function* fetchCollectionAsync(){
    try
    {const collectionsRef=firestore.collection('Collection');
    const snapshot= yield collectionsRef.get();
    const collectionsMap=yield call(convertCollectionsSnapshotToMap,snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
    }
    catch(error){
        yield put(fetchCollectionFaliure(error.message));
    }

    // dispatch(fetchCollectionStart());
    // collectionsRef.get().then(snapshot=>
    //    { const collectionMap=convertCollectionsSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionSuccess(collectionMap))
    // }).catch(error=>dispatch(fetchCollectionFaliure(error.errorMessage)))
};



export function* fetchCollectionStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionAsync
    );
}

