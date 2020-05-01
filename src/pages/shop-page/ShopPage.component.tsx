import React from "react";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionPage from "../collection/CollectionPage";

const ShopPage: React.FC = () => {
  const match = useRouteMatch();

  return (
    <div className="page-preview">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
