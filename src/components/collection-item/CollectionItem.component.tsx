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
import styles from "./collectionItem.module.scss";
import { ICartActions } from "../../interfaces-and-types/cart/ICart";

const CollectionItem: React.FC<CollectionItemProps> = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className={styles.item}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <CustomButton
        inverted
        customStyle={styles.customButton}
        onClick={() => addItem(item)}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps: MapDispatchToProps<
  CollectionItemDispatchProps,
  CollectionItemOwnProps
> = (dispatch: Dispatch<ICartActions>) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect<{}, CollectionItemDispatchProps, CollectionItemOwnProps>(
  null,
  mapDispatchToProps
)(CollectionItem);
