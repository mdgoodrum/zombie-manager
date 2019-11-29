import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import zombieReducer from './reducers/zombie';

const reducer = combineReducers({
	zombie: zombieReducer
});

export default createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);