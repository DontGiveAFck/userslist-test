export default class LocalStorage {

    static getValueFromLocalStorage = (key) => {
        return JSON.parse(localStorage.getItem(key));
    };

    static setValueInLocalStorage = (key, value) => {
        return localStorage.setItem(key, JSON.stringify(value));
    };
}
