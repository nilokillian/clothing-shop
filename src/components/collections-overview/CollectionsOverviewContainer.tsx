import { FC } from "react";
import { compose } from "redux";
import { RouteComponentProps } from "react-router-dom";
import { connect, MapStateToProps, ConnectedComponent } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shopSelectors";
import CollectionsOverview from "../../components/collections-overview/CollectionsOverview.component";
import WithSpinner from "../../components/with-spinner/WithSpinner.component";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";

type CollectionsOverviewContainerStateToProps = {
  isLoading: boolean;
};

const mapStateToProps: MapStateToProps<
  CollectionsOverviewContainerStateToProps,
  RouteComponentProps,
  IRoot
> = createStructuredSelector({
  isLoading: (state) => selectIsCollectionFetching(state),
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview) as ConnectedComponent<FC<any>, any>;

export default CollectionsOverviewContainer;
