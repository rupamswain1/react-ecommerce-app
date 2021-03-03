import { firestore } from '../../fireBase/firebase.utils'
import ShopActionTypes from './shop.type'
import {firestore, convertCollectionsSnapshotToMap} from '../../fireBase/firebase.utils'; 

export const fetchCollectionStart=()=>({
    type: ShopActionTypes.FETCH_COLLECTION_START
})

export const fetchCollectionSuccess=collectionMap=>
({
    type: ShopActionTypes.fetchCollectionSuccess,
    payload:collectionMap,
})
//complete this
export const fetchCollectionStartAsync=()=>({
    return dispatch=>{
        const collectionsRef=firestore.collections('Collection')
        dispatch(fetchCollectionStart);
        collectionsRef.get().then(snapshot=>
           { const collectionMap=convertCollectionsSnapshotToMap(snapshot);
            dispatchCollectionSuccess:(collection)

            this.state({loading:flase})
        }) 
    }
})

export const UpdateCollections=(collections)=>{
    //console.log(collections)
    return({
    type: ShopActionTypes.UPADTE_COLLECTIONS,
    payload:collections
})}