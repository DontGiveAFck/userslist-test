import { combineReducers } from 'redux';
import { ADD_USER, REMOVE_USER_ROW } from "../actions/users";
import { initialState } from "./rootReducer";

function addUserRow(state, action) {
    const newUser = {
        name: '',
        age: '',
        position: '',
    };

    return {
        ...state,
        users: [...state.users, newUser]
    };
}

function removeUserRow(state, action) {
    const {users: oldUsers} = state;
    const newUsers = oldUsers.slice();
    newUsers.splice(action.index, 1);
    return {
        ...state,
        users: newUsers
    };
}

function updateUser(state, acton) {

}

export default function users(state = initialState, action) {
    switch(action.type) {
        case ADD_USER:
            return addUserRow(state, action);
        case REMOVE_USER_ROW:
            return removeUserRow(state, action);
        default: return state;
    }
}
