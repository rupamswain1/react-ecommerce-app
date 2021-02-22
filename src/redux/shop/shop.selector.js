import { createStore } from 'redux';
import {createSelector} from 'reselect';

const COLLECTION_ID_MAP={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}
const SelectShop=state=>state.shopData;

export const SelectShopData=createSelector(
    [SelectShop],
    shop=>
    shop.shopData
)

export const SelectCollection=collectionUrlParam=>
createSelector(
    [SelectShopData],
    collections=>
        collections.find(
            collection=>collection.id===COLLECTION_ID_MAP[collectionUrlParam]
        )
)