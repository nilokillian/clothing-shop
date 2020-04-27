import React from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { Dispatch } from "redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import {
  ICartReducerAction,
  ICartIconStateToProps,
  ConnectedCartIconDispatchToProps,
} from "../../interfaces-and-types/cart/ICart";
import "./cartIcon.style.scss";

const CartIcon: React.FC<ICartIconStateToProps> = ({
  toggleCartHidden,
}): JSX.Element => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps: MapDispatchToProps<
  ConnectedCartIconDispatchToProps,
  {}
> = (
  dispatch: Dispatch<ICartReducerAction>
): ConnectedCartIconDispatchToProps => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect<{}, ICartIconStateToProps, {}>(
  null,
  mapDispatchToProps
)(CartIcon);
