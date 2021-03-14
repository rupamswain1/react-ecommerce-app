//import SHOP_DATA from './shopData';
import {UpadteCollections} from './shop.actions';
import ShopActionTypes from './shop.type'
const INITIAL_STATE={
    shopData:null, //SHOP_DATA
    isFetching:false,
    errorMessage:undefined,
}

const ShopDataRedux=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTION_START:
            console.log('update collections')
            return{
                ...state,
                isFetching:true
            }
        case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
            return{
                ...state,
                isFetching:false,
                shopData:action.payload,
            }
        case ShopActionTypes.FETCH_COLLECTION_FALIURE:
            return{
                ...state,
                isFetching:false,
                errorMessage:action.payload,
            } 
        default:
            
            return state;
    }
}

export default ShopDataRedux;