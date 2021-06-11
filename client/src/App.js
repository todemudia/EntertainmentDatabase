import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import NotFoundPage from './components/pages/NotFoundPage';
import FavouritesPage from './components/pages/FavouritesPage';
import TVPage from './components/pages/TVPage';
import MoviePage from './components/pages/MoviePage';
import Login from './components/common/Login';
import Register from './components/common/Register';
import Nav from './components/common/Nav';
import Grid from './components/common/Grid';
import Footer from './components/common/Footer';
import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';
import { loadUser } from './redux/actions/authActions';

const App = () => {
  const store = configureStore();

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <ReduxProvider store={store}>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/login">
              <Nav />
              <Login />
              <Footer />
            </Route>

            <Route path="/register">
              <Nav />
              <Register />
              <Footer />
            </Route>

            <Route path="/grid">
              <Nav />
              <Grid />
              <Footer />
            </Route>

            <Route exact path="/">
              <Nav />
              <HomePage />
              <Footer />
            </Route>

            <Route path="/favourites">
              <Nav />
              <FavouritesPage />
              <Footer />
            </Route>

            <Route path="/tv">
              <Nav />
              <TVPage />
              <Footer />
            </Route>

            <Route path="/movie">
              <Nav />
              <MoviePage />
              <Footer />
            </Route>

            <Route>
              <Nav />
              <NotFoundPage />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </ReduxProvider>
  );
};

export default App;
