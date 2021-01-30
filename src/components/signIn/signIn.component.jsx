import React from 'react';
import './signIn.style.scss';
import CustomButton from '../custom-button/custom-button-component';
import FormInput from '../form-input/form-input.component';
import {signInWithGoogle} from '../../fireBase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            'email': "",
            'password':"",
        }
    }

    handleSubmit=event=>{
        event.preventDefault();
        this.setState({'email': "", 'password':""})
    }

    handleChange=event=>{
        const {value, name}=event.target;
        this.setState({[name]:value});
       
    }
    render(){
        return(
            <div className='SignIn'>
                <h2>Sign In</h2>
                <span> Already Have An Account!! Login Here: </span>
                <form className='signInForm' onSubmit={this.handleSubmit}>
                    <FormInput 
                        className='email' 
                        type='email'
                        name='email'
                        label='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        className='password' 
                        type='password'
                        name='password'
                        label='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />
                    
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle}>
                        Sign In With Google
                    </CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;