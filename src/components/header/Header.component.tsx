import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { IHeader } from "../../utils/interfaces";
import { auth } from "../../firebase/firebase.utils";

const Header: React.FC<IHeader> = ({ currentUser }): JSX.Element => {
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

export default Header;
