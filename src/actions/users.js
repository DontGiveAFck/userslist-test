export const ADD_USER = 'ADD_USER';

export const addUser = (name, age, position, email) => {
    return {
        type: ADD_USER,
        name,
        age,
        position,
        email
    }
};
