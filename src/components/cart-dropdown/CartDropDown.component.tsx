import React from "react";
import { connect, MapStateToProps } from "react-redux";
import CustomButton from "../custom-button/CustomButton.component";
import CartItem from "../cart-item/CartItem.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cartDropDown.style.scss";
import { IItemCollection } from "../../interfaces-and-types/collection/ICollection";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";

interface CartDropDownStateProps {
  cartItems: IItemCollection[];
}

const CartDropDown: React.FC<CartDropDownStateProps> = ({
  cartItems,
}): JSX.Element => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

// type ConnectedStateToProps = CartDropDownStateProps;

const mapStateToProps: MapStateToProps<CartDropDownStateProps, {}, IRoot> = (
  state
): CartDropDownStateProps => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropDown);
