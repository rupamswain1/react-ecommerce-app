import ShopActionTypes from './shop.type'

export const UpdateCollections=(collections)=>{
    //console.log(collections)
    return({
    type: ShopActionTypes.UPADTE_COLLECTIONS,
    payload:collections
})}