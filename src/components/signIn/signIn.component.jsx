import React from 'react';
import './signIn.style.scss';

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
                    <input 
                        className='email' 
                        type='email'
                        name='email'
                        value={this.state.email}
                        required
                        onChange={this.handleChange}
                    />
                    <label>Email</label>
                    <input 
                        className='password' 
                        type='password'
                        name='password'
                        value={this.state.password}
                        required
                        onChange={this.handleChange}
                    />
                    <label>Password</label>
                    <input type='submit' value='Submit Form'/>
                </form>
            </div>
        )
    }
}
export default SignIn;