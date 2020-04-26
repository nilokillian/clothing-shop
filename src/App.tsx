import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage.component";
import ShopPage from "./pages/shop-page/ShopPage.component";
import Header from "./components/header/Header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/SignInAndSignUp.component";
import { IUser } from "./interfaces-and-types/user/IUser";
import { setCurrentUser } from "./redux/user/userActions";
import { IUserReducerAction } from "./interfaces-and-types/user/IUserReducerAction";
import { IMapStateToProps } from "./interfaces-and-types/redux/IRedux";

import "./App.css";

export interface IAppProps {
  setCurrentUser: (user: IUser | null) => IUserReducerAction;
  currentUser: IUser;
}

const App: React.FC<IAppProps> = ({
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

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route
          exact
          path="/singin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state: IMapStateToProps) => {
  return {
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: IUser | null) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
