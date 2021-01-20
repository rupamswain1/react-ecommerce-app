import logo from './logo.svg';
import './App.css';
import HomePage from './pages/hompage.component';
import {Route, Link} from 'react-router-dom';

const ProductPage=(props)=>{
  console.log('Hii');
  return(
    <div>
    <Link to='/productPage/:product'>Product</Link>
    <button onClick={()=>props.history.push('/')}>HomePage</button>
    <h1>Product Page</h1>
    </div>
    );
  };

const Product=(props)=>{
  console.log(props);
  return(
    
    <h1>{props.match.params.product}</h1>);
  };

function App() {
  return (
    <div>
     
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/productPage' component={ProductPage}/>
      <Route path='/productPage/:product' component={Product}/>
    </div>
  );
}

export default App;
