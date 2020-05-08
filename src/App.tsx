import React, { useEffect } from "react";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/userSelectors";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage.component";
import ShopPage from "./pages/shop-page/ShopPage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/SignInAndSignUp.component";
import CheckOutPage from "./pages/check-out-page/CheckOut.component";
import Header from "./components/header/Header.component";
import { IRoot } from "./interfaces-and-types/redux/IRedux";
import {
  IAppStateToProps,
  ConnectedAppStateToProps,
} from "./interfaces-and-types/app/IApp";
import { checkUserSession } from "./redux/user/userActions";

import "./App.css";
import { IUserActions } from "./interfaces-and-types/user/IUser";
import { Dispatch } from "redux";

const App: React.FC<IAppStateToProps & ConnectedAppDispatchToProps> = ({
  currentUser,
  checkUserSession,
}): JSX.Element => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckOutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps: MapStateToProps<
  ConnectedAppStateToProps,
  {},
  IRoot
> = createStructuredSelector({
  currentUser: selectCurrentUser,
});

type ConnectedAppDispatchToProps = {
  checkUserSession: () => void;
};

const mapDispatchToProps: MapDispatchToProps<
  ConnectedAppDispatchToProps,
  {}
> = (dispatch: Dispatch<IUserActions>): ConnectedAppDispatchToProps => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
