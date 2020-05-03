import React, { Component } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { Route, RouteComponentProps } from "react-router-dom";

import { fetchCollectionsStartAsync } from "../../redux/shop/shopActions";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";
import { ThunkDispatch } from "redux-thunk";
import { IShopActions } from "../../interfaces-and-types/shop/IShop";
import CollectionsOverviewContainer from "../../components/collections-overview/CollectionsOverviewContainer";
import CollectionPageContainer from "../collection-page/CollectionPageContainer";

type ShopPageProps = ConnectedShopPageMapDispatchToProps & RouteComponentProps;

class ShopPage extends Component<ShopPageProps, {}> {
  public componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  }

  public render() {
    return (
      <div className="page-preview">
        <Route
          exact
          path={`${this.props.match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${this.props.match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

type ConnectedShopPageMapDispatchToProps = {
  fetchCollectionsStartAsync: () => void;
};

const mapDispatchToProps: MapDispatchToProps<
  ConnectedShopPageMapDispatchToProps,
  RouteComponentProps
> = (dispatch: ThunkDispatch<IRoot, void, IShopActions>) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
