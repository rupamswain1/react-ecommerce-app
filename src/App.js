import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import HomePage from './pages/homepage/hompage.component';
import Shop from './pages/shop/shop.component';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/signInAndSignOut/signInAndSignOut';
import {auth, createUserProfileDocument} from './fireBase/firebase.utils';
import 'firebase/firestore';
import SetCurrentUser from './redux/user/user.actions'

import React from 'react';
// const ProductPage=(props)=>{
//   console.log('Hii');
//   return(
//     <div>
//     <Link to='/productPage/:product'>Product</Link>
//     <button onClick={()=>props.history.push('/')}>HomePage</button>
//     <h1>Product Page</h1>
//     </div>
//     );
//   };

// const Product=(props)=>{
//   console.log(props);
//   return(
    
//     <h1>{props.match.params.product}</h1>);
      // <Route exact path='/productPage' component={ProductPage}/>
      // <Route path='/productPage/:product' component={Product}/>
//   };

class App extends React.Component{


  unsubscribeFromAuth=null;
  componentDidMount()
  {
    const {SetCurrentUser}= this.props;
    this.unsubscribeFromAuth=auth.onAuthStateChanged
    (
      async userAuth=>
      {
        if(userAuth)
        {
          //console.log(userAuth);
          const userRef=await createUserProfileDocument(userAuth);
          //console.log(userRef);
          userRef.onSnapshot
          (
            snapShot=>
            {
              SetCurrentUser
              (
                {
                  currentUser:
                  {
                    id:snapShot.id,
                    ...snapShot.data() 
                  }
                }
                //,()=>{console.log(this.state);}
              );
            }
          )
          
        }
        SetCurrentUser(userAuth);
      }
      
    );
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
    
  }

  render(){
    return (
      
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/signIn' render={()=>this.props.currentUser? (<Redirect to='/'/>):(<SignInAndSignOut/>)}/>
        </Switch>
      </div>
    );
  }
};

const mapStateToProps=({user})=>({
  currentUser:user.currentUser,

})
const mapDispatchToProps=dispatch=>({
  SetCurrentUser: user=> dispatch(SetCurrentUser(user))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(App);
 