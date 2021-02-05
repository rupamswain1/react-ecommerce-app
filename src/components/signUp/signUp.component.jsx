import React from 'react';
import './signUp.style.scss';
import {auth, createUserProfileDocument} from '../../fireBase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button-component';

class SignUp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            'displayName':"",
            'email':"",
            'password':"",
            'confirmPassword':""
        }
        
    }

    handleSubmit = async event=>{
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
         
        if(password!=confirmPassword){
            alert ('Password and Confirm Password does not match');
            return;
        }
        try{
            const {user}= await auth.createUserWithEmailAndPassword(email,password);
            //console.log(displayName+" on signup component")
            //console.log(user)
            await createUserProfileDocument(user, {displayName});
            this.setState({
                'displayName':"",
                'email':"",
                'password':"",
                'confirmPassword':"",
            });
        }
        catch(error){
            console.error(error);
        }
    }

    handleChange=event=>{
        const {name,value}=event.target;
        this.setState({[name]:value});
    }

    

    render()
    {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do not hava an Account!</h2>
                <span>Sign Up with your Email Id and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        label='Display Name'
                        type='text'
                        name='displayName'
                        className='displayName'
                        value={this.state.displayName}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        className='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        className='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        className='confirmPassword'
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}
export default SignUp;