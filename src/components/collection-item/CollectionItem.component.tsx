import React from "react";
import { IItemCollection } from "../../interfaces-and-types/collection/ICollection";

import "./collectionItem.style.scss";

const CollectionItem: React.FC<IItemCollection> = ({
  imageUrl,
  name,
  price,
}) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
