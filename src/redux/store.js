import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import products from './modules/products';
import shoppingCart from './modules/shoppingCart';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({ products, shoppingCart }),
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
