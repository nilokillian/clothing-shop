import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage.component";
import ShopPage from "./pages/shop-page/ShopPage.component";
import Header from "./components/header/Header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/SignInAndSignUp.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";
import { IUser } from "./interfaces-and-types/user/IUser";

const App = (): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

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
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscibeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/singin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
