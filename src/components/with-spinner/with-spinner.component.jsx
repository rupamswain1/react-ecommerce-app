import React from 'react';
import {SpinnerOverlay, SpinnerContainer} from './with-spinner.style';

export const WithSpinner=WrappedComponent=>{
    const spinner=({isLoading, ...otherProps})=>{
        console.log(isLoading)
    return(
        isLoading?
        (<SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>)
        :
        (<WrappedComponent {...otherProps}/>))
    };
    return spinner;

}
