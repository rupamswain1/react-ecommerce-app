import { createStore } from 'redux';
import {createSelector} from 'reselect';

const SelectShop=state=>state.shopData;

export const SelectShopData=createSelector(
    [SelectShop],
    shop=>shop.shopData
)