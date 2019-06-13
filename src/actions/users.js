export const ADD_USER = 'ADD_USER';

export const addUserRow = () => {
    return {
        type: ADD_USER,
    }
};

export const REMOVE_USER_ROW = 'REMOVE_USER_ROW';

export const removeUserRow = (index) => {
    return {
        type: REMOVE_USER_ROW,
        index
    }
};

export const EDIT_USER_ROW = 'EDIT_USER_ROW';

export const editUserRow = (index) => {
    return {
        type: EDIT_USER_ROW,
        index
    }
};

export const CHANGE_USER_ROW = 'CHANGE_USER_ROW';

export const changeUserRow = (value, index, field) => {
    return {
        type: CHANGE_USER_ROW,
        value,
        index,
        field
    }
};

export const SAVE_USER_ROW = 'SAVE_USER_ROW';

export const saveUserRow = (index) => {
    return {
        type: SAVE_USER_ROW,
        index,
    }
};
