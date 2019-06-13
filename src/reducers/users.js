import { combineReducers } from 'redux';
import { ADD_USER } from "../actions/users";
import { initialState } from "./rootReducer";

function addUser(state, action) {
    const newUser = {
        name: action.name,
        age: action.age,
        position: action.position,
    };
    console.log('added')
    return {
        ...state,
        users: [...state.users, newUser]
    };
}

function removeUser(state, action) {

}

function updateUser(state, acton) {

}

export default function users(state = initialState, action) {
    switch(action.type) {
        case ADD_USER:
            return addUser();
        default: return state;
    }
    return state;
}
