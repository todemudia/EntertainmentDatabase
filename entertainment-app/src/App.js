import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import PageNotFound from './components/PageNotFound';
import NowPlaying from './components/nowplaying/NowPlaying';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/nowplaying' component={NowPlaying} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
