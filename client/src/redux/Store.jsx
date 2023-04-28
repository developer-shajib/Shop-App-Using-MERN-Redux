import { applyMiddleware, createStore } from 'redux';
import { RootReducer } from './RootReducer.jsx';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];
// Create Store
export const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
