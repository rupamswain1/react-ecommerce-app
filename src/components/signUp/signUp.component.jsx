import React,{useState} from 'react';
import {connect} from 'react-redux'; 
//import './signUp.style.scss';
import {auth, createUserProfileDocument} from '../../fireBase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button-component';
import {SignUpContainer,TitleContainer} from './signUp.style';
import {SignUpStart} from '../../redux/user/user.actions'
const SignUp =({signUpStart})=>
{
    const [userDetails,setUserDetails]=useState(
   {
            'displayName':"",
            'email':"",
            'password':"",
            'confirmPassword':""
    }
    )    
   
    const { displayName, email, password, confirmPassword } = userDetails;
    const handleSubmit = async event=>{
        event.preventDefault();
        if(password!=confirmPassword){
            alert ('Password and Confirm Password does not match');
            return;
        }
        // try{
        //     const {user}= await auth.createUserWithEmailAndPassword(email,password);
        //     //console.log(displayName+" on signup component")
        //     //console.log(user)
        //     await createUserProfileDocument(user, {displayName});
        //     this.setState({
        //         'displayName':"",
        //         'email':"",
        //         'password':"",
        //         'confirmPassword':"",
        //     });
        // }
        // catch(error){
        //     console.error(error);
        // }
        signUpStart({displayName, email,password});
    }

    const handleChange=event=>{
        const {name,value}=event.target;
        setUserDetails({...userDetails,[name]:value});
    }

        return(
            <SignUpContainer>
                <TitleContainer className='title'>I do not hava an Account!</TitleContainer>
                <span>Sign Up with your Email Id and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput
                        handleChange={handleChange}
                        label='Display Name'
                        type='text'
                        name='displayName'
                        className='displayName'
                        value={displayName}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        className='email'
                        value={email}
                        handleChange={handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        className='password'
                        value={password}
                        handleChange={handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        className='confirmPassword'
                        value={confirmPassword}
                        handleChange={handleChange}
                        label='Password'
                        required
                    />
                    
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        );
    }


const mapDispatchToProps=dispatch=>({
    signUpStart: (userCred)=>dispatch(SignUpStart(userCred))
})

export default connect(null,mapDispatchToProps)(SignUp); 