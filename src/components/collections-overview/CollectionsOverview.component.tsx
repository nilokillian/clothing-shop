import React from "react";
import { connect, MapStateToProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";

import "./collectionsOverview-style.scss";

import CollectionPreview from "../collection-preview-component/CollectionPreview.component";
import { ICollectionsForPreview } from "../../interfaces-and-types/collection/ICollection";

const CollectionsOverview: React.FC<ICollectionsForPreview> = ({
  collections,
}): JSX.Element => {
  return (
    <div className="collection-overview">
      {collections.map((item) => (
        <CollectionPreview key={item.id} {...item} />
      ))}
    </div>
  );
};

type ShopPageStateToProps = ICollectionsForPreview;

const mapStateToProps: MapStateToProps<
  ShopPageStateToProps,
  {},
  IRoot
> = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect<ShopPageStateToProps, {}, {}, IRoot>(mapStateToProps)(
  CollectionsOverview
);
