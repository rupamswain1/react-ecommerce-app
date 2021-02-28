import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import HomePage from './pages/homepage/hompage.component';
import CheckOutPage from './pages/checkOutPage/checkoutpage.component';
import Shop from './pages/shop/shop.component';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/signInAndSignOut/signInAndSignOut';
import {auth, createUserProfileDocument} from './fireBase/firebase.utils';
//import {auth, createUserProfileDocument, addCollectionAndDocument} from './fireBase/firebase.utils';
import 'firebase/firestore';
import SetCurrentUser from './redux/user/user.actions'

import {createStructuredSelector} from 'reselect';
import {SelectUserInfo} from './redux/user/user.selector';
//import {SelectShopDataForPreview} from './redux/shop/shop.selector';


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
    const {SetCurrentUser, collectionArray}= this.props;
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
        //addCollectionAndDocument('Collection',collectionArray.map(({title,items})=>({title,items})));
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
          <Route path='/shop' component={Shop}/>
          <Route exact path='/signIn' render={()=>this.props.currentUser? (<Redirect to='/'/>):(<SignInAndSignOut/>)}/>
          <Route exact path='/checkout' component={CheckOutPage}/>
        </Switch>
      </div>
    );
  }
};

const mapStateToProps=createStructuredSelector({
  currentUser:SelectUserInfo,
  //collectionArray:SelectShopDataForPreview

})
const mapDispatchToProps=dispatch=>({
  SetCurrentUser: user=> dispatch(SetCurrentUser(user))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(App); 
 