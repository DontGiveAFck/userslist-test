import usersReducer from './users'
import { createStore, combineReducers } from "redux";

export const initialState = {
    users: [],
    isSaved: true
};

const rootReducer = usersReducer;

export const store = createStore(
    rootReducer,
    initialState,
    // for redux devtools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
