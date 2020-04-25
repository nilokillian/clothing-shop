import React from "react";

import "./CollectionPreview.style.scss";
import { ICollection } from "../../utils/interfaces";
import CollectionItem from "../collection-item/CollectionItem.component";

import "./CollectionPreview.style.scss";

const CollectionPreview: React.FC<ICollection> = ({
  title,
  items,
}): JSX.Element => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_item, i) => i < 4)
          .map((item) => (
            <CollectionItem {...item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
