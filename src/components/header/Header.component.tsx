import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect, MapStateToProps } from "react-redux";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropDown from "../cart-dropdown/CartDropDown.component";
import { IHeaderStateProps } from "../../interfaces-and-types/header/IHeader";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cartSelectors";
import { selectCurrentUser } from "../../redux/user/userSelectors";

import styles from "./header.module.scss";

const Header: React.FC<IHeaderStateProps> = ({ currentUser, hidden }) => {
  return (
    <div className={styles.container}>
      <Link className={styles.logoContainer} to="/">
        <Logo className="logo" />
      </Link>
      <div className={styles.options}>
        <Link className={styles.option} to="/shop">
          SHOP
        </Link>
        <Link className={styles.option} to="shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className={styles.option} onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className={styles.option} to="/signin">
            SING IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden ? <CartDropDown /> : null}
    </div>
  );
};

const mapStateToProps: MapStateToProps<
  IHeaderStateProps,
  {},
  IRoot
> = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

// const mapStateToProps: MapStateToProps<IHeaderStateProps, {}, IRoot> = (
//   state: IRoot
// ): IHeaderStateProps => ({
//   currentUser: state.user.currentUser,
//   hidden: state.cart.hidden,
// });

export default connect<IHeaderStateProps, {}, {}, IRoot>(mapStateToProps)(
  Header
);
