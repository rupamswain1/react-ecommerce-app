import React from 'react';
import './signInAndSignOut.style.scss';
import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/signUp.component';
const SignInAndSignOut=()=>(
   
    <div className='signInAndSignOut'>
        <SignIn/>
        <SignUp/>
    </div>
    
);
export default SignInAndSignOut;