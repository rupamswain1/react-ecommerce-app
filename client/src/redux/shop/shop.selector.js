import { createStore } from 'redux';
import {createSelector} from 'reselect';


const SelectShop=state=>state.shopData;

export const SelectShopData=createSelector(
    [SelectShop],
    shop=>
    shop.shopData
)

export const SelectShopDataForPreview=createSelector(
    [SelectShopData],
    shopData=>(shopData?Object.keys(shopData).map(key=>shopData[key]):[])
)

export const SelectCollection=collectionUrlParam=>
createSelector(
    [SelectShopData],
    collections=>(collections?collections[collectionUrlParam]:null)
        
)

export const SelectIsCollectionFetching=createSelector(
    [SelectShop],
    shop=>shop.isFetching
)

export const SelectIsCollectionLoaded=createSelector(
    [SelectShop],
    shop=>!!shop.shopData
)