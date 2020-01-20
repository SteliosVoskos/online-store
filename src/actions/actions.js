import * as actionTypes from './actionTypes';

export function loadProducts() {
    return {
        type: actionTypes.LOAD_PRODUCTS
    };
}

export function loadVegetableProducts() {
    return {
        type: actionTypes.LOAD_VEGETABLE_PRODUCTS
    };
}

export function loadMeatProducts() {
    return {
        type: actionTypes.LOAD_MEAT_PRODUCTS
    };
}

export function viewProduct(id) {
    return {
        type: actionTypes.VIEW_PRODUCT,
        id
    };
}

export function addToBasket(item) {
    return {
        type: actionTypes.ADD_TO_BASKET,
        item
    }
}

export function firstNameIsUpdating(firstName) {
    return {
        type: actionTypes.FIRST_NAME_IS_UPDATING,
        firstName
    };
}

export function surnameIsUpdating(surname) {
    return {
        type: actionTypes.SURNAME_IS_UPDATING,
        surname
    };
}

export function emailIsUpdating(email) {
    return {
        type: actionTypes.EMAIL_IS_UPDATING,
        email
    };
}

export function passwordIsUpdating(password) {
    return {
        type: actionTypes.PASSWORD_IS_UPDATING,
        password
    };
}

export function confirmPasswordIsUpdating(confirmedPassword) {
    return {
        type: actionTypes.CONFIRM_PASSWORD_IS_UPDATING,
        confirmedPassword
    };
}

export function loginEmailIsUpdating(loginEmail) {
    return {
        type: actionTypes.LOGIN_EMAIL_IS_UPDATING,
        loginEmail
    };
}

export function loginPasswordIsUpdating(loginPassword) {
    return {
        type: actionTypes.LOGIN_PASSWORD_IS_UPDATING,
        loginPassword
    };
}

export function submitLoginForm() {
    return {
        type: actionTypes.LOGIN_FORM_SUBMITTED
    };
}

export function submitRegisterForm() {
    return {
        type: actionTypes.REGISTER_FORM_SUBMITTED
    };
}

export function clearBasket() {
    return {
        type: actionTypes.CLEAR_BASKET
    };
}