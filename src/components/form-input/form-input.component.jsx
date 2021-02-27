
import React from 'react';

//import './form-input.style.scss';
import {GrpupContainer,
  InputContainer,
  LableContainer
} from './form-input.style';

const FormInput = ({ handleChange, label, ...otherProps }) =>{
  return(
  <GrpupContainer>
    <InputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <LableContainer
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </LableContainer>
    ) : null}
  </GrpupContainer>
);
}

export default FormInput; 