import React, { Component } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import { Route, RouteComponentProps } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/collections-overview/CollectionsOverviewContainer";
import CollectionPageContainer from "../collection-page/CollectionPageContainer";
import { fetchCollectionsStart } from "../../redux/shop/shopActions";
import { IShopActions } from "../../interfaces-and-types/shop/IShop";
import { Dispatch } from "redux";

type ShopPageProps = ConnectedShopPageMapDispatchToProps & RouteComponentProps;

class ShopPage extends Component<ShopPageProps, {}> {
  public componentDidMount() {
    this.props.fetchCollectionsStart();
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
  fetchCollectionsStart: () => any;
};

const mapDispatchToProps: MapDispatchToProps<
  ConnectedShopPageMapDispatchToProps,
  {}
> = (dispatch: Dispatch<IShopActions>) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
