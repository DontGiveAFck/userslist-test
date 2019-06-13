export default class LocalStorage {

    static getValueFromLocalStorage = (key) => {
        return localStorage.getItem(key);
    };

    static setValueInLocalStorage = (key, value) => {
        return localStorage.setItem(key, value);
    };
}
