import React, { useEffect, Dispatch } from "react";
import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage.component";
import ShopPage from "./pages/shop-page/ShopPage.component";
import Header from "./components/header/Header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/SignInAndSignUp.component";
import { IUser, IUserReducerAction } from "./interfaces-and-types/user/IUser";
import { setCurrentUser } from "./redux/user/userActions";
import { IRoot } from "./interfaces-and-types/redux/IRedux";
import {
  IAppStateToProps,
  ConnectedAppStateToProps,
  ConnectedAppDispatchToProps,
} from "./interfaces-and-types/app/IApp";

import "./App.css";

const App: React.FC<IAppStateToProps> = ({
  setCurrentUser,
  currentUser,
}): JSX.Element => {
  useEffect(() => {
    const unsubscibeFromAuth = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        createUserProfileDocument(userAuth).then((userRef) => {
          userRef?.onSnapshot((snapShot) => {
            const userData = snapShot.data();
            setCurrentUser({
              id: snapShot.id,
              ...(userData as IUser),
            });
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscibeFromAuth();
    };
  }, [setCurrentUser]);
  console.log("currentUser", currentUser);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
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

const mapStateToProps: MapStateToProps<ConnectedAppStateToProps, {}, IRoot> = ({
  user: { currentUser },
}): ConnectedAppStateToProps => ({ currentUser });

const mapDispatchToProps: MapDispatchToProps<
  ConnectedAppDispatchToProps,
  {}
> = (dispatch: Dispatch<IUserReducerAction>): ConnectedAppDispatchToProps => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
