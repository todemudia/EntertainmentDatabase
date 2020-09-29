import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import NewPage from "./components/pages/NewPage";
import FavouritesPage from "./components/pages/FavouritesPage";
import SignInPage from "./components/pages/SignIn";

import Nav from "./components/common/Nav";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/new" component={NewPage} />
          <Route path="/favourites" component={FavouritesPage} />
          <Route path="/signin" component={SignInPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
