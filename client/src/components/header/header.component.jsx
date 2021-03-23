import React from 'react';
import {createStructuredSelector} from 'reselect';

//import './header.style.scss';
import {HeadetContainer,LogoContainer,OptionsCotainer,OptionLinkContainer} from './header.style'
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../fireBase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cartIcon/cartIcon.component';
import CartDropDown from '../cartDropDown/cartDropDown.component';
import {SelectUserInfo} from '../../redux/user/user.selector';
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {StartSignOut} from '../../redux/user/user.actions';

const Header= ({currentUser, hidden,signOutUser})=>{
  
  return(
    <HeadetContainer>
        <LogoContainer to='/'>
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsCotainer>
            <OptionLinkContainer to='/shop'>
                SHOP
            </OptionLinkContainer>
            <OptionLinkContainer to='/contact'>
                CONTACT
            </OptionLinkContainer>
            
            {currentUser ? (
                <OptionLinkContainer as='div' onClick={signOutUser}>
                  SIGN OUT
                </OptionLinkContainer>
              ) : (
                <OptionLinkContainer to='/signin'>
                  SIGN IN
                </OptionLinkContainer>
              )}
            <OptionLinkContainer>
                <CartIcon/>
            </OptionLinkContainer>
           { hidden? null:
            <CartDropDown/>}
        </OptionsCotainer>
    </HeadetContainer>

)}

const mapStateToProps=createStructuredSelector({
  currentUser: SelectUserInfo,
  hidden: selectCartHidden
})
  
const mapDispatchToProps=dispatch=>({
  signOutUser:()=>dispatch(StartSignOut())
})
  export default connect(mapStateToProps,mapDispatchToProps)(Header); 
