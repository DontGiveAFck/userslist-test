import {maxFieldLength} from "../constants/numberConstants";
import {ERROR_EMPTY_FIELD, ERROR_INVALID_AGE, ERROR_INVALID_EMAIL} from "../constants/text";
import * as EmailValidator from 'email-validator';

export function getFieldLengthError(field) {
    return `Длина поля ${field} не может превышать ${maxFieldLength[field]}`;
}

export function getUserRowErrors(userRow) {
    const errors = [];
    const {email, name, age, position} = userRow;

    if (!email || !name || !age || !position) {
        errors.push(ERROR_EMPTY_FIELD);
    }

    const correctAge = parseInt(age);

    if (!Number.isInteger(correctAge) || correctAge < 1 || correctAge > 99) {
        errors.push(ERROR_INVALID_AGE);
    }
    if (!EmailValidator.validate(email)) {
        errors.push(ERROR_INVALID_EMAIL);
    }

    return errors;
}
