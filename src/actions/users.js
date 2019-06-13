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
