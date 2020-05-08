import React, { Dispatch } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cartActions";
import { IItemCollection } from "../../interfaces-and-types/collection/ICollection";
import styles from "./checkout.module.scss";
import { ICartActions } from "../../interfaces-and-types/cart/ICart";

export interface ICheckOutItem {
  cartItem: IItemCollection;
}

const CheckOutItem: React.FC<
  ICheckOutItem & ConnectedCheckOutItemDispatchToProps
> = ({ cartItem, clearItemFromCart, addItem, removeItem }): JSX.Element => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className={styles.checkoutItem}>
      <div className={styles.imageContainer}>
        <img alt="item" src={imageUrl} />
      </div>
      <span className={styles.name}>{name}</span>
      <span className={styles.quantity}>
        <div className={styles.arrow} onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className={styles.value}>{quantity}</span>
        <div className={styles.arrow} onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className={styles.price}>{price}</span>
      <div
        className={styles.removeButton}
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
  dispatch: Dispatch<ICartActions>
): ConnectedCheckOutItemDispatchToProps => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
