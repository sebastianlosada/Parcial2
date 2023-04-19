import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import ReduxPosIt from '../Redux/ReduxPosIt';

const rootReducer = combineReducers({
  posts: ReduxPosIt,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;