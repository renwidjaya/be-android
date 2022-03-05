import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import Reducers from './Reducers';

const store = createStore(Reducers, applyMiddleware(thunk));

export default store;
