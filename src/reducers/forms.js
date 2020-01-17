import * as actionType from '../actions/actionTypes';
const initialState = {
    firstName: '',
    surname: '',
    email: '',
    password: '',
    confirmedPassword: '',
    loginEmail: '',
    loginPassword: '',
    loginFormSubmitted: false,
    registerFormSubmitted: false
};

const forms = (state=initialState, action) => {
    switch(action.type) {
        case actionType.FIRST_NAME_IS_UPDATING:
            return Object.assign({}, state, {
                firstName: action.firstName,
                registerFormSubmitted: false
            });
        case actionType.SURNAME_IS_UPDATING:
            return Object.assign({}, state, {
                surname: action.surname,
                registerFormSubmitted: false
            });
        case actionType.EMAIL_IS_UPDATING:
            return Object.assign({}, state, {
                email: action.email,
                registerFormSubmitted: false
            })
        case actionType.PASSWORD_IS_UPDATING:
            return Object.assign({}, state, {
                password: action.password,
                registerFormSubmitted: false
            });
        case actionType.CONFIRM_PASSWORD_IS_UPDATING:
            return Object.assign({}, state, {
                confirmedPassword: action.confirmedPassword,
                registerFormSubmitted: false
            });
        case actionType.LOGIN_EMAIL_IS_UPDATING:
            return Object.assign({}, state, {
                loginEmail: action.loginEmail,
                loginFormSubmitted: false,
            });
        case actionType.LOGIN_PASSWORD_IS_UPDATING:
            return Object.assign({}, state, {
                loginPassword: action.loginPassword,
                loginFormSubmitted: false,
            });
        case actionType.REGISTER_FORM_SUBMITTED:
            return Object.assign({}, state, {
                registerFormSubmitted: true
            });
        case actionType.LOGIN_FORM_SUBMITTED:
            return Object.assign({}, state, {
                loginFormSubmitted: true
            })
        default:
            return state;
    }
    
};

export default forms;

