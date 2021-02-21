
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.redux'
import DirectoryReducer from './directoryMenu/directoryMenu.redux';
import ShopDataRedux from './shop/shop.redux';
const persitConfig={
    key:'root',
    storage,
    whitelist:['cart']
}


const rootReducer= combineReducers({
    user:userReducer,
    cart: cartReducer,
    directory:DirectoryReducer,
    shopData:ShopDataRedux
});

export default persistReducer(persitConfig,rootReducer);