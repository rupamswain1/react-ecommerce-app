import SHOP_DATA from './shopData';
import {UpadteCollections} from './shop.actions';
import ShopActionTypes from './shop.type'
const INITIAL_STATE={
    shopData:SHOP_DATA
}

const ShopDataRedux=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ShopActionTypes.UPADTE_COLLECTIONS:
            return{
                ...state,
                collections:action.payload
            }
        default:
            return state;
    }
}

export default ShopDataRedux;