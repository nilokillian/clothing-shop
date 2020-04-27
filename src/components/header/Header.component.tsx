import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect, MapStateToProps } from "react-redux";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropDown from "../cart-dropdown/CartDropDown.component";
import { IHeaderStateProps } from "../../interfaces-and-types/header/IHeader";

import "./header.style.scss";

const Header: React.FC<IHeaderStateProps> = ({ currentUser, hidden }) => {
  console.log("hidden", hidden);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="shop">
          SHOP
        </Link>
        <Link className="option" to="shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SING IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden ? <CartDropDown /> : null}
    </div>
  );
};

const mapStateToProps: MapStateToProps<IHeaderStateProps, {}, IRoot> = (
  state: IRoot
): IHeaderStateProps => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);
