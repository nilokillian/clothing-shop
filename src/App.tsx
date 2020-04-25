import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage.component";
import ShopPage from "./pages/shop-page/ShopPage.component";
import Header from "./components/header/Header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/SignInAndSignUp.component";
import { auth } from "./firebase/firebase.utils";

import "./App.css";
import { User } from "firebase";

const App = (): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>();

  useEffect(() => {
    const unsubscibeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      console.log("unsubscibeFromAuth");
      unsubscibeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/singin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
