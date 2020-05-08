import React from "react";
import { connect, MapStateToProps, DispatchProp } from "react-redux";
import CustomButton from "../custom-button/CustomButton.component";
import CartItem from "../cart-item/CartItem.component";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { IItemCollection } from "../../interfaces-and-types/collection/ICollection";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";

import styles from "./cartDropDown.module.scss";
import { ICartActions } from "../../interfaces-and-types/cart/ICart";
import { toggleCartHidden } from "../../redux/cart/cartActions";

interface CartDropDownStateProps {
  cartItems: IItemCollection[];
}

const CartDropDown: React.FC<
  CartDropDownStateProps & RouteComponentProps & DispatchProp<ICartActions>
> = ({ cartItems, history, dispatch }): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.cartItems}>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} {...cartItem} />
          ))
        ) : (
          <span className={styles.emptyMessage}>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps: MapStateToProps<
  CartDropDownStateProps,
  {},
  IRoot
> = createStructuredSelector({
  cartItems: selectCartItems,
});

// const mapStateToProps: MapStateToProps<CartDropDownStateProps, {}, IRoot> = (
//   state
// ): CartDropDownStateProps => ({ cartItems: selectCartItems(state) });

export default withRouter(connect(mapStateToProps)(CartDropDown));
