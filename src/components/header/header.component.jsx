import React from 'react';
import './header.style.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../fireBase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cartIcon/cartIcon.component';
import CartDropDown from '../cartDropDown/cartDropDown.component';
const Header= ({currentUser, hidden})=>(
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                  SIGN OUT
                </div>
              ) : (
                <Link className='option' to='/signin'>
                  SIGN IN
                </Link>
              )}
            <Link className='option'>
                <CartIcon/>
            </Link>
           { hidden? null:
            <CartDropDown/>}
        </div>
    </div>

)

const mapStateToProps=({user:{currentUser}, cart:{hidden}})=>({
  currentUser,
  hidden
})
  
  
  export default connect(mapStateToProps)(Header);
