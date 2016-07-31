import thunkMiddleware from 'redux-thunk';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import myApp from './reducers';
import App from './components/App';
import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from "./store";
import PortfolioListPage from './components/portfolios/PortfolioListPage';
import PortfolioPage from './components/portfolios/PortfolioPage';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PortfolioListPage}></IndexRoute>
        <Route name="portfolio" path="/portfolio/:portfolioName" component={PortfolioPage}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
