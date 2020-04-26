import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { IUserState } from "../../interfaces-and-types/user/IUserState";
import { IHeader } from "../../interfaces-and-types/header/IHeader";
import { IMapStateToProps } from "../../interfaces-and-types/redux/IRedux";

import "./header.style.scss";

const Header: React.FC<IHeader> = ({ currentUser }): JSX.Element => {
  console.log("currentUser", currentUser);
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
      </div>
    </div>
  );
};

const mapStateToProps = (state: IMapStateToProps): IUserState => {
  console.log("state", state);

  return { currentUser: state.user.currentUser };
};

export default connect(mapStateToProps)(Header);
