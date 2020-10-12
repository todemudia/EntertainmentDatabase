import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import NewPage from "./components/pages/NewPage";
import FavouritesPage from "./components/pages/FavouritesPage";
import TVPage from "./components/pages/TVPage";
import MoviePage from "./components/pages/MoviePage";
import Login from "./components/common/Login";

import Nav from "./components/common/Nav";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Nav />
            <HomePage />
          </Route>

          <Route path="/new">
            <Nav />
            <NewPage />
          </Route>

          <Route path="/favourites">
            <Nav />
            <FavouritesPage />
          </Route>

          <Route path="/tv">
            <Nav />
            <TVPage />
          </Route>

          <Route path="/movie">
            <Nav />
            <MoviePage />
          </Route>

          <Route>
            <Nav />
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
