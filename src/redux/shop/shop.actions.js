import ShopActionTypes from './shop.type'

export const UpadteCollections=(collections)=>({
    type: ShopActionTypes.UPADTE_COLLECTIONS,
    payload:collections
})