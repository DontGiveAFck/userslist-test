import {
    ADD_USER,
    CHANGE_USER_ROW,
    EDIT_USER_ROW,
    REMOVE_USER_ROW,
    SAVE_USER_ROW,
    SAVE_TABLE, CHANGE_SEARCH_NAME, ON_PAGE_CLICK
} from "../actions/users";
import { initialState } from "./rootReducer";
import LocalStorage from "../utils/LocalStorage";
import {getUserRowErrors} from "../utils/errors";
import {USERS_PER_PAGE} from '../constants/numberConstants';

function addUserRow(state, action) {
    const newUser = {
        uniqueId: new Date().valueOf(),
        name: '',
        age: '',
        position: '',
        email: '',
        active: true
    };

    const newTotalUsers = state.users.length + 1;
    const newTotalPages = Math.ceil(newTotalUsers / USERS_PER_PAGE);
    const isNewCurrentPage = newTotalPages !== state.currentPage;

    return {
        ...state,
        users: [...state.users, newUser],
        isSaved: false,
        totalPages: newTotalPages,
        currentPage: isNewCurrentPage ?
            state.currentPage + 1 :
            state.currentPage
    };
}

function removeUserRow(state, action) {
    const { users } = state;
    const newUsers = users.filter(user => user.uniqueId !== action.index);
    const newTotalUsers = newUsers.length;
    const newTotalPages = Math.ceil(newTotalUsers / USERS_PER_PAGE);
    const isNewCurrentPage = newTotalPages !== state.currentPage;

    return {
        ...state,
        users: newUsers,
        isSaved: false,
        errors: [],
        totalPages: newTotalPages,
        currentPage: isNewCurrentPage ?
            state.currentPage - 1 :
            state.currentPage
    };
}

function editUserRow(state, action) {
    const newUsers = [...state.users];
    const editedUser = newUsers.find(user => user.uniqueId === action.index);
    editedUser.active = true;

    return {
        ...state,
        users: newUsers,
        isSaved: false,
    };
}

function changeUserRow(state, action) {
    const {users: oldUsers} = state;
    const newUsers = oldUsers.slice();
    const editedUser = newUsers.find(user => user.uniqueId === action.index);
    editedUser[action.field] = action.value;

    return {
        ...state,
        users: newUsers,
        errors: []
    };
}

function saveUserRow(state, action) {
    const newUsers = [...state.users];
    const userForSave = newUsers.find(user => user.uniqueId === action.index);
    const errors = getUserRowErrors(userForSave);
    if (errors.length) {
        return {
            ...state,
            errors: errors
        }
    }

    userForSave.active = false;

    return {
        ...state,
        users: newUsers,
        isSaved: false,
        errors: []
    };
}

function saveTable(state, action) {
    LocalStorage.setValueToLocalStorage('users', state.users);
    return {
        ...state,
        isSaved: true
    };
}

function changeSearchName(state, action) {
    return {
        ...state,
        searchName: action.value
    }
}

function changePage(state, action) {

    return {
        ...state,
        currentPage: action.number
    }
}

export default function usersTable(state = initialState, action) {
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
        case SAVE_TABLE:
            return saveTable(state, action);
        case CHANGE_SEARCH_NAME:
            return changeSearchName(state, action);
        case ON_PAGE_CLICK:
            return changePage(state, action);
        default: return state;
    }
}
