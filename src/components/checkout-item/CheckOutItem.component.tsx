import React from "react";

import "./checkout.style.scss";
import { IItemCollection } from "../../interfaces-and-types/collection/ICollection";

export interface ICheckOutItem {
  cartItem: IItemCollection;
}

const CheckOutItem: React.FC<ICheckOutItem> = ({
  cartItem: { name, price, imageUrl, quantity },
}): JSX.Element => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckOutItem;
