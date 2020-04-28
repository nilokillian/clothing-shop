import React from "react";
import { connect, MapStateToProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelectors";
import "./checkOut-style.scss";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";
import { IItemCollection } from "../../interfaces-and-types/collection/ICollection";
import CheckOutItem from "../../components/checkout-item/CheckOutItem.component";

export interface CheckOutPageStateToProps {
  cartItems: IItemCollection[];
  total: number;
}

const CheckOutPage: React.FC<CheckOutPageStateToProps> = ({
  cartItems,
  total,
}): JSX.Element => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL : ${total}</span>
      </div>
    </div>
  );
};

const mapStateToProps: MapStateToProps<
  CheckOutPageStateToProps,
  {},
  IRoot
> = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect<CheckOutPageStateToProps, {}, {}, IRoot>(
  mapStateToProps
)(CheckOutPage);
