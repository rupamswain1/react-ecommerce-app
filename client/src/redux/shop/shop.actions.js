
import ShopActionTypes from './shop.type'
import {firestore, convertCollectionsSnapshotToMap} from '../../fireBase/firebase.utils'; 

export const fetchCollectionStart=()=>({
    type: ShopActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess=collectionMap=>
({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload:collectionMap,
})

export const fetchCollectionFaliure=errorMessage=>({
    type:ShopActionTypes.FETCH_COLLECTION_FALIURE,
    payload:errorMessage,
})

//complete this
export const fetchCollectionStartAsync=()=>{
    return dispatch=>{
        const collectionsRef=firestore.collection('Collection');
        dispatch(fetchCollectionStart());
        collectionsRef.get().then(snapshot=>
           { const collectionMap=convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionMap))
        }).catch(error=>dispatch(fetchCollectionFaliure(error.errorMessage)))
    };
}

export const UpdateCollections=(collections)=>{
    //console.log(collections)
    return({
    type: ShopActionTypes.UPADTE_COLLECTIONS,
    payload:collections
})}