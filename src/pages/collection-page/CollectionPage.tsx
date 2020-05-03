import React from "react";
import { connect, MapStateToProps } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelectors";
import CollectionItem from "../../components/collection-item/CollectionItem.component";
import { RouteComponentProps } from "react-router-dom";
import styles from "./collectionPage.module.scss";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";
import { ICollection } from "../../interfaces-and-types/collection/ICollection";

interface MatchParams {
  collectionId: string;
}

type ShopPageStateToProps = { collection: ICollection | null };

const CollectionPage: React.FC<
  RouteComponentProps<MatchParams> & ShopPageStateToProps
> = ({ collection }): JSX.Element | null => {
  const { title, items } = collection!;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.items}>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps: MapStateToProps<
  ShopPageStateToProps,
  RouteComponentProps<MatchParams>,
  IRoot
> = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
