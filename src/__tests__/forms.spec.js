import forms from '../reducers/forms';
import { initialState } from '../reducers/forms';

import * as actions from '../actions/actions';
describe('Forms reducer', () => {
    describe('Registration', () => {
        it('should update the first name on the registration form', () => {
            expect(forms(initialState, actions.firstNameIsUpdating('Stelios')))
                .toStrictEqual(Object.assign({}, initialState, {
                    firstName: 'Stelios',
                    registerFormSubmitted: false
                }));
        });
        
        it('should update the surname on the registration form', () => {
            expect(forms(initialState, actions.surnameIsUpdating('Voskos')))
                .toStrictEqual(Object.assign({}, initialState, {
                    surname: 'Voskos'
                }));
        });
        
        it('should update the email on the registration form', () => {
            expect(forms(initialState, actions.emailIsUpdating('s.voskos@googlemail.com')))
                .toStrictEqual(Object.assign({}, initialState, {
                    email: 's.voskos@googlemail.com'
                }));
        });
        
        it('should update the password on the registration form', () => {
            expect(forms(initialState, actions.passwordIsUpdating('1234')))
                .toStrictEqual(Object.assign({}, initialState, {
                    password: '1234'
                }));
        });
        
        it('should update the password confirmation on the registration form', () => {
            expect(forms(initialState, actions.confirmPasswordIsUpdating('1234')))
                .toStrictEqual(Object.assign({}, initialState, {
                    confirmedPassword: '1234'
                }));
        });

        it('should make a successful registration form submission', () => {
            expect(forms(initialState, actions.submitRegisterForm()))
                .toStrictEqual(Object.assign({}, initialState, {
                    registerFormSubmitted: true
                }));
        });
    });
    describe('Login', () => {
        it('should update the email address on the login form', () => {
            expect(forms(initialState, actions.loginEmailIsUpdating('s.voskos@googlemail.com')))
                .toStrictEqual(Object.assign({}, initialState, {
                    loginEmail: 's.voskos@googlemail.com',
                    loginFormSubmitted: false
                }));
        });

        it('should update the password on the login form', () => {
            expect(forms(initialState, actions.loginPasswordIsUpdating('1234')))
                .toStrictEqual(Object.assign({}, initialState, {
                    loginPassword: '1234',
                    loginFormSubmitted: false
                }));
        });

        it('should make a successful login form submission', () => {
            expect(forms(initialState, actions.submitLoginForm()))
                .toStrictEqual(Object.assign({}, initialState, {
                    loginFormSubmitted: true
                }));
        });
    });
});