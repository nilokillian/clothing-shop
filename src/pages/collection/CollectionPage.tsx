import React from "react";
import { connect, MapStateToProps } from "react-redux";
import { selectCollection } from "../../redux/shop/shopSelectors";
import CollectionItem from "../../components/collection-item/CollectionItem.component";
import { RouteComponentProps } from "react-router-dom";
import "./collectionPage.style.scss";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";
import { ICollection } from "../../interfaces-and-types/collection/ICollection";

interface MatchParams {
  collectionId: string;
}

type ShopPageStateToProps = { collection: ICollection };
const CollectionPage: React.FC<
  RouteComponentProps<MatchParams> & ShopPageStateToProps
> = ({ collection, match }): JSX.Element => {
  console.log("collection", collection);

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
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
