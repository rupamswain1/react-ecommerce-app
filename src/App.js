import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/hompage.component';
import Shop from './pages/shop/shop.component';
import {Route, Switch, Link} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/signInAndSignOut/signInAndSignOut';
import {auth, createUserProfileDocument} from './fireBase/firebase.utils';
import 'firebase/firestore';

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

  constructor(){
    super();
    this.state={
      'currentUser':null,
    }
  };

  unsubscribeFromAuth=null;
  componentDidMount()
  {
    this.unsubscribeFromAuth=auth.onAuthStateChanged
    (
      async userAuth=>
      {
        if(userAuth)
        {
          
          const userRef=await createUserProfileDocument(userAuth);
          userRef.onSnapshot
          (
            snapShot=>
            {
              this.setState
              (
                {
                  currentUser:
                  {
                    id:snapShot.id,
                    ...snapShot.data() 
                  }
                }
                ,()=>{console.log(this.state);}
              );
            }
          )
          
        }
       
      }
    )
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/signIn' component={SignInAndSignOut}/>
        </Switch>
      </div>
    );
  }
};

export default App;
