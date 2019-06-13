import {
    ADD_USER,
    CHANGE_USER_ROW,
    EDIT_USER_ROW,
    REMOVE_USER_ROW,
    SAVE_USER_ROW
} from "../actions/users";
import { initialState } from "./rootReducer";

function addUserRow(state, action) {
    const newUser = {
        name: '',
        age: '',
        position: '',
        active: true
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

function editUserRow(state, action) {
    const {users: oldUsers} = state;
    const newUsers = oldUsers.slice();
    newUsers[action.index].active = true;

    return {
        ...state,
        users: newUsers
    };
}

function changeUserRow(state, action) {
    const {users: oldUsers} = state;
    const newUsers = oldUsers.slice();
    newUsers[action.index][action.field] = action.value;

    return {
        ...state,
        users: newUsers
    };
}

function saveUserRow(state, action) {
    const {users: oldUsers} = state;
    const newUsers = oldUsers.slice();
    newUsers[action.index].active = false;

    return {
        ...state,
        users: newUsers
    };
}

export default function users(state = initialState, action) {
    switch(action.type) {
        case ADD_USER:
            return addUserRow(state, action);
        case REMOVE_USER_ROW:
            return removeUserRow(state, action);
        case EDIT_USER_ROW:
            return editUserRow(state, action);
        case CHANGE_USER_ROW:
            return changeUserRow(state, action);
        case SAVE_USER_ROW:
                return saveUserRow(state, action);
        default: return state;
    }
}
