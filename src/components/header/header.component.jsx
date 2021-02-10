import React from 'react';
import './header.style.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../fireBase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cartIcon/cartIcon.component';
import CartDropDown from '../cartDropDown/cartDropDown.component';
const Header= ({currentUser})=>(
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
            <Link className='option' to='/cart'>
                <CartIcon/>
            </Link>
            <CartDropDown/>
        </div>
    </div>

)

const mapStateToProps=state=>({
  currentUser:state.user.currentUser,
})
  
  
  export default connect(mapStateToProps)(Header);
