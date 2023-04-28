import { combineReducers } from 'redux';
import { ShopReducer } from './Shop/ShopReducer.jsx';

// Crate rootReducer
export const RootReducer = combineReducers({
  shop: ShopReducer,
});
