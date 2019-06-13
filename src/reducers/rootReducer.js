import usersReducer from './users'
import { createStore } from "redux";
import LocalStorage from "../utils/LocalStorage";

export const initialState = {
    users: LocalStorage.getValueFromLocalStorage('users') || [],
    isSaved: true
};

const rootReducer = usersReducer;

export const store = createStore(
    rootReducer,
    initialState,
    // for redux devtools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
