import React from 'react';
import './App.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import movieSearch from './reducers/movie_reducer';
import createSagaMiddleware from 'redux-saga';
import watchSearchMovie from './middleware/movie_api_saga';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './pages/navbar/NavBar';
import Search from './pages/search/Search';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(movieSearch, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchSearchMovie);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="*" component={NavBar} />
        <Switch>
          <Route path={["/", "/search"]} exact component={Search} />
          <Route path="/movie/:movieId" exact component={Search} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
