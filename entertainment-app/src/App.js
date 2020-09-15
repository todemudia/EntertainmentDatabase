import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage";
import NowPlayingPage from "./components/pages/NowPlayingPage";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/nowplaying" component={NowPlayingPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
