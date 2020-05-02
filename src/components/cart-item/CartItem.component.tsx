import React from "react";
import { IItemCollection } from "../../interfaces-and-types/collection/ICollection";

import styles from "./cartItem.module.scss";

const CartItem: React.FC<IItemCollection> = (item): JSX.Element => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className={styles.cartItem}>
      <img src={imageUrl} alt="item" />
      <div className={styles.details}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
