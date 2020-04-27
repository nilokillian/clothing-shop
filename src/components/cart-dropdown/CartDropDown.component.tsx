import React from "react";
import CustomButton from "../custom-button/CustomButton.component";

import "./cartDropDown.style.scss";

const CartDropDown = (): JSX.Element => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />

      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropDown;
