import { combineReducers,createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from '../Reducers/cartReducer';
import productReducer from '../Reducers/productReducer';

const reducer= combineReducers({
    cartReducer,
    productReducer
});

export const store= createStore (reducer,composeWithDevTools());



