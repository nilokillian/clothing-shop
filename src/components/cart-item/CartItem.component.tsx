import React from "react";

import "./cartItem.style.scss";
import { IItemCollection } from "../../interfaces-and-types/collection/ICollection";

const CartItem: React.FC<IItemCollection> = (item): JSX.Element => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
