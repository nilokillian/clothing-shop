import React from "react";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { Dispatch } from "redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { selectItemsCount } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import {
  ICartReducerAction,
  ICartIconStateToProps,
  ConnectedCartIconDispatchToProps,
} from "../../interfaces-and-types/cart/ICart";
import styles from "./cartIcon.module.scss";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";

const CartIcon: React.FC<ICartIconStateToProps> = ({
  toggleCartHidden,
  itemsCount,
}): JSX.Element => (
  <div className={styles.cartIcon} onClick={toggleCartHidden}>
    <ShoppingIcon className={styles.shoppingIcon} />
    <span className={styles.itemCount}>{itemsCount}</span>
  </div>
);

const mapDispatchToProps: MapDispatchToProps<
  ConnectedCartIconDispatchToProps,
  {}
> = (
  dispatch: Dispatch<ICartReducerAction>
): ConnectedCartIconDispatchToProps => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

type ConnectedCartIconStateToProps = Pick<ICartIconStateToProps, "itemsCount">;

const mapStateToProps: MapStateToProps<
  ConnectedCartIconStateToProps,
  {},
  IRoot
> = createStructuredSelector({
  itemsCount: selectItemsCount,
});

// const mapStateToProps: MapStateToProps<
//   ConnectedCartIconStateToProps,
//   {},
//   IRoot
// > = (state): ConnectedCartIconStateToProps => {
//   console.log("CartIconStateToProps");
//   return { itemsCount: selectItemsCount(state) };
// };

export default connect<
  ConnectedCartIconStateToProps,
  ConnectedCartIconDispatchToProps,
  {},
  IRoot
>(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
