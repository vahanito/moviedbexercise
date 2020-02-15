import React from 'react';
import './App.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './pages/navbar/NavBar';
import Search from './pages/search/Search';
import allReducers from './reducers';
import rootSaga from './saga';
import MovieDetail from './pages/detail/MovieDetail';
import FavoriteMovies from './pages/favoritemovies/FavoriteMovies';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(allReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="*" component={NavBar} />
        <Switch>
          <Route path={["/", "/search"]} exact component={Search} />
          <Route path="/movie/:movieId" exact component={MovieDetail} />
          <Route path="/favorites" exact component={FavoriteMovies} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
