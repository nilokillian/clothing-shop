import React, { Dispatch } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cartActions";
import { IItemCollection } from "../../interfaces-and-types/collection/ICollection";
import "./checkout.style.scss";
import { ICartReducerAction } from "../../interfaces-and-types/cart/ICart";

export interface ICheckOutItem {
  cartItem: IItemCollection;
}

const CheckOutItem: React.FC<
  ICheckOutItem & ConnectedCheckOutItemDispatchToProps
> = ({ cartItem, clearItemFromCart, addItem, removeItem }): JSX.Element => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

type ConnectedCheckOutOwnStateToProps = ICheckOutItem;
type ConnectedCheckOutItemDispatchToProps = {
  clearItemFromCart: (item: IItemCollection) => void;
  addItem: (item: IItemCollection) => void;
  removeItem: (item: IItemCollection) => void;
};

const mapDispatchToProps: MapDispatchToProps<
  ConnectedCheckOutItemDispatchToProps,
  ConnectedCheckOutOwnStateToProps
> = (
  dispatch: Dispatch<ICartReducerAction>
): ConnectedCheckOutItemDispatchToProps => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
