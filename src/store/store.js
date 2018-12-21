import { createStore, applyMiddleware } from "redux";
import { rootReducer } from '../reducers/reducers';
import thunk from "redux-thunk";

const initialState = {
  }
  
export const store = createStore(rootReducer, initialState,  applyMiddleware(thunk))
