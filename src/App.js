import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/hompage.component';
import Shop from './pages/shop/shop.component';
import {Route, Switch, Link} from 'react-router-dom';
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/signInAndSignOut/signInAndSignOut';
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

function App() {
  return (
    
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/signIn' component={SignInAndSignOut}/>
      </Switch>
    </div>
  );
}

export default App;
