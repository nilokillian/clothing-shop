import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/homepage/homePage.component";

import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>;
    </Switch>
  );
}

export default App;
