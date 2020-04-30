import React from "react";
import { connect, MapStateToProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";
import { selectShopItems } from "../../redux/shop/shopSelectors";

import "./collectionsOverview-style.scss";
import { IShopPageState } from "../../interfaces-and-types/shop-page/IShopPageState";
import CollectionPreview from "../collection-preview-component/CollectionPreview.component";

const CollectionsOverview: React.FC<IShopPageState> = ({
  collection,
}): JSX.Element => {
  return (
    <div className="collection-overview">
      {collection.map((item) => (
        <CollectionPreview key={item.id} {...item} />
      ))}
    </div>
  );
};

type ShopPageStateToProps = IShopPageState;

const mapStateToProps: MapStateToProps<
  ShopPageStateToProps,
  {},
  IRoot
> = createStructuredSelector({
  collection: selectShopItems,
});

export default connect<ShopPageStateToProps, {}, {}, IRoot>(mapStateToProps)(
  CollectionsOverview
);
