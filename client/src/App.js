import logo from './logo.svg';
import React, {useEffect,lazy,Suspense} from 'react'
//import './App.css';
import {GlobalStyle} from './global.style';
import {connect} from 'react-redux';
//import HomePage from './pages/homepage/hompage.component';
//import CheckOutPage from './pages/checkOutPage/checkoutpage.component';
//import Shop from './pages/shop/shop.component';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/header/header.component';
//import SignInAndSignOut from './pages/signInAndSignOut/signInAndSignOut';
import {auth, createUserProfileDocument} from './fireBase/firebase.utils';
//import {auth, createUserProfileDocument, addCollectionAndDocument} from './fireBase/firebase.utils';
import 'firebase/firestore';
import {SignInSuccess, checkUserSession} from './redux/user/user.actions'
import Spinner from './components/spinner/spinner.component';

import {createStructuredSelector} from 'reselect';
import {SelectUserInfo} from './redux/user/user.selector';
import ErrorBoundary from './components/error-boundary/error-boundary';
const HomePage=lazy(()=>import('./pages/homepage/hompage.component'));
const Shop=lazy(()=>import('./pages/shop/shop.component'));
const SignInAndSignOut=lazy(()=>import('./pages/signInAndSignOut/signInAndSignOut'));
const CheckOutPage=lazy(()=>import('./pages/checkOutPage/checkoutpage.component'));
//import {SelectShopDataForPreview} from './redux/shop/shop.selector';


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

//class App extends React.Component{
const App =({checkUserSession,currentUser})=>{
  
  //unsubscribeFromAuth=null;
  useEffect(()=>{checkUserSession();},[checkUserSession])
  
  // componentDidMount()
  // {
  //   const {checkUserSession}= this.props;
  //   checkUserSession();
  //   this.unsubscribeFromAuth=auth.onAuthStateChanged
  //   (
  //     async userAuth=>
  //     {
  //       if(userAuth)
  //       {
  //         //console.log(userAuth);
  //         const userRef=await createUserProfileDocument(userAuth);
  //         //console.log(userRef);
  //         userRef.onSnapshot
  //         (
  //           snapShot=>
  //           {
  //             SetCurrentUser
  //             (
  //               {
  //                 currentUser:
  //                 {
  //                   id:snapShot.id,
  //                   ...snapShot.data() 
  //                 }
  //               }
  //               //,()=>{console.log(this.state);}
  //             );
  //           }
  //         )
          
  //       }
  //       SetCurrentUser(userAuth);
  //       //addCollectionAndDocument('Collection',collectionArray.map(({title,items})=>({title,items})));
  //    
      
  //   );
  
  //componentWillUnmount(){
   // this.unsubscribeFromAuth()
    
  

      return (
      
      <div>
      <GlobalStyle/>
        <Header/>
        <Switch>
        <ErrorBoundary>
        <Suspense fallback={<Spinner/>}>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={Shop}/>
            <Route exact path='/signIn' render={()=>currentUser?(<Redirect to='/'/>):(<SignInAndSignOut/>)}/>
            <Route exact path='/checkout' component={CheckOutPage}/>
          </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
    
  }
const mapStateToProps=createStructuredSelector({
  currentUser:SelectUserInfo,
  //collectionArray:SelectShopDataForPreview

})
const mapDispatchToProps=dispatch=>({
  checkUserSession: ()=> dispatch(checkUserSession())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(App); 
 