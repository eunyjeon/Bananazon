import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import createUserReducer from './newUser';
import allProductReducer from './allProduct';
import singleProductReducer from './singleProduct';
import cartReducer from './cart';

export const reducer = combineReducers({
  user: user,
  newUser: createUserReducer,
  products: allProductReducer,
  product: singleProductReducer,
  cart: cartReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
export * from './user';
