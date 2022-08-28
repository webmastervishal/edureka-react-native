import { createStore, applyMiddleware, combineReducers } from "redux";
import currencyReducer from "./../src/components/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  currency: currencyReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

// console.log(store.getState());

export default store;
