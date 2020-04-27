import React from "react";
import { Dispatch } from "redux";
import { connect, MapDispatchToProps } from "react-redux";
import CustomButton from "../custom-button/CustomButton.component";
import {
  CollectionItemProps,
  CollectionItemDispatchProps,
  CollectionItemOwnProps,
} from "../../interfaces-and-types/collection/ICollection";
import { addItem } from "../../redux/cart/cartActions";
import "./collectionItem.style.scss";
import { ICartReducerAction } from "../../interfaces-and-types/cart/ICart";

const CollectionItem: React.FC<CollectionItemProps> = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps: MapDispatchToProps<
  CollectionItemDispatchProps,
  CollectionItemOwnProps
> = (dispatch: Dispatch<ICartReducerAction>) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect<{}, CollectionItemDispatchProps, CollectionItemOwnProps>(
  null,
  mapDispatchToProps
)(CollectionItem);
