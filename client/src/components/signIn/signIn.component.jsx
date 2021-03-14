import React, {useState} from 'react';
import {connect} from 'react-redux'; 
//import './signIn.style.scss';
import CustomButton from '../custom-button/custom-button-component';
import FormInput from '../form-input/form-input.component';
import {auth, signInWithGoogle} from '../../fireBase/firebase.utils'
import {SignInContainer,
    TitleContainer,
    ButtonContainer
} from './signIn.style'
import {GoogleSignInStart,EmailSignInStart} from '../../redux/user/user.actions'


const SignIn=({emailSignInStart,googleSignInStart})=>{
    const [userCredentials,setUserCredentials]=useState({email:'',password:''})
    
    const {email,password}=userCredentials;
    const handleSubmit= async event=>{
        event.preventDefault();
        //const {emailSignInStart}=this.props;
        //const {email, password}=this.state;
        // try{
        //     auth.signInWithEmailAndPassword(email,password);
        //     this.setState({'email': "", 'password':""})
        // }
        // catch(error){
        //     console.error(error);
        // }
        emailSignInStart(email,password);
    }

    const handleChange=event=>{
        const {value, name}=event.target;
        setUserCredentials({...userCredentials,[name]:value}); 
       
    }
    
        return(
            
            <SignInContainer>
                <TitleContainer>Sign In</TitleContainer>
                <span> Already Have An Account!! Login Here: </span>
                <form className='signInForm' onSubmit={handleSubmit}>
                    <FormInput 
                        className='email' 
                        type='email'
                        name='email'
                        label='email'
                        value={email}
                        handleChange={handleChange}
                        required
                    />
                    <FormInput 
                        className='password' 
                        type='password'
                        name='password'
                        label='password'
                        value={password}
                        handleChange={handleChange}
                        required
                    />
                    <ButtonContainer>
                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>
                        <CustomButton type='button' type='button' onClick={googleSignInStart} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </ButtonContainer>
                </form>
            </SignInContainer>
        )
    }

const mapDispatchToProps=dispatch=>({
    googleSignInStart:()=>dispatch(GoogleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(EmailSignInStart({email,password}))
})

export default connect(null, mapDispatchToProps)(SignIn); 