import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';
import productsReducer from './reducers/products';
import checkoutReducer from './reducers/checkout';

const rootReducer = combineReducers({
  products: productsReducer,
  checkout: checkoutReducer,
  form: formReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;