import SHOP_DATA from './shopData';
const INITIAL_STATE={
    shopData:SHOP_DATA
}

const ShopDataRedux=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default ShopDataRedux;