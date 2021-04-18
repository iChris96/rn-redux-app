import { combineReducers, createStore } from 'redux';
import * as reducers from '../reducers';
import thunk from 'redux-thunk';

export default createStore(combineReducers({
    ...reducers
}))
