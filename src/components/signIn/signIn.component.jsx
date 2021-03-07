import React from 'react';
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


class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            'email': "",
            'password':"",
        }
    }

    handleSubmit= async event=>{
        event.preventDefault();
        const {emailSignInStart}=this.props;
        const {email, password}=this.state;
        // try{
        //     auth.signInWithEmailAndPassword(email,password);
        //     this.setState({'email': "", 'password':""})
        // }
        // catch(error){
        //     console.error(error);
        // }
        emailSignInStart(email,password);
    }

    handleChange=event=>{
        const {value, name}=event.target;
        this.setState({[name]:value}); 
       
    }
    
    render(){
        const {googleSignInStart} = this.props;
        return(
            
            <SignInContainer>
                <TitleContainer>Sign In</TitleContainer>
                <span> Already Have An Account!! Login Here: </span>
                <form className='signInForm' onSubmit={this.handleSubmit}>
                    <FormInput 
                        className='email' 
                        type='email'
                        name='email'
                        label='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        className='password' 
                        type='password'
                        name='password'
                        label='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
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
}
const mapDispatchToProps=dispatch=>({
    googleSignInStart:()=>dispatch(GoogleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(EmailSignInStart({email,password}))
})

export default connect(null, mapDispatchToProps)(SignIn); 