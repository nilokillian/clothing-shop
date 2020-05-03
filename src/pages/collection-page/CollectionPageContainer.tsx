import { FC } from "react";
import { compose } from "redux";
import { RouteComponentProps } from "react-router-dom";
import { connect, MapStateToProps, ConnectedComponent } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoadaed } from "../../redux/shop/shopSelectors";
import CollectionPage from "../collection-page/CollectionPage";
import WithSpinner from "../../components/with-spinner/WithSpinner.component";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";

type CollectionPageContainerStateToProps = {
  isLoading: boolean;
};

const mapStateToProps: MapStateToProps<
  CollectionPageContainerStateToProps,
  RouteComponentProps,
  IRoot
> = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoadaed(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage) as ConnectedComponent<FC<any>, any>;

export default CollectionPageContainer;
