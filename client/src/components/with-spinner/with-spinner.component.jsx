import React from 'react';
//import {SpinnerOverlay, SpinnerContainer} from './with-spinner.style';
import Spinner from '../../components/spinner/spinner.component'
export const WithSpinner=WrappedComponent=>{
    const spinner=({isLoading, ...otherProps})=>{
        console.log(isLoading)
    return(
        isLoading?
        (<Spinner/>)
        :
        (<WrappedComponent {...otherProps}/>))
    };
    return spinner;

}
