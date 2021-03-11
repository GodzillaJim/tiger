import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { openModalReducer } from './reducers/reducer.js';

const reducer = combineReducers({
  openModal: openModalReducer,
});
const initialState = {
  openModal: { openSideBar: true}
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
