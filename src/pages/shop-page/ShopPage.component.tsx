import React, { useEffect } from "react";
import { connect, MapDispatchToProps } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionPage from "../collection/CollectionPage";
import {
  firestore,
  converCollectionsSnapShotToMap,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shopActions";
import { Dispatch } from "redux";
import { IShopReducerAction } from "../../interfaces-and-types/shop/IShop";
import { ICollection } from "../../interfaces-and-types/collection/ICollection";

export interface IShopPageStateToProps {
  updateCollections: (colectionsMap: { [key: string]: ICollection }) => void;
}

const ShopPage: React.FC<IShopPageStateToProps> = ({
  updateCollections,
}): JSX.Element => {
  const match = useRouteMatch();

  useEffect(() => {
    const unsubscribeFromSnapShot = null;

    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapShot) => {
      const collectionsMap = converCollectionsSnapShotToMap(snapShot);
      updateCollections(collectionsMap);
      //console.log("collectionsMap", collectionsMap);
    });
    return () => {};
  }, [updateCollections]);

  return (
    <div className="page-preview">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

const mapDispatchToProps: MapDispatchToProps<IShopPageStateToProps, {}> = (
  dispatch: Dispatch<IShopReducerAction>
) => ({
  updateCollections: (colectionsMap: { [key: string]: ICollection }) =>
    dispatch(updateCollections(colectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
