import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Register from '../../components/LoginAndRegister/Register';
import {
    firstNameIsUpdating,
    surnameIsUpdating,
    emailIsUpdating,
    passwordIsUpdating,
    confirmPasswordIsUpdating,
    submitRegisterForm
} from '../../actions/actions';
const mapStateToProps = ({ forms }) => ({
    firstName: forms.firstName,
    surname: forms.surname,
    email: forms.email,
    password: forms.password,
    confirmedPassword: forms.confirmedPassword,
    registerFormSubmitted: forms.registerFormSubmitted
});

const mapDispatchToProps = dispatch => ({
    firstNameIsUpdating: bindActionCreators(firstNameIsUpdating, dispatch),
    surnameIsUpdating: bindActionCreators(surnameIsUpdating, dispatch),
    emailIsUpdating: bindActionCreators(emailIsUpdating, dispatch),
    passwordIsUpdating: bindActionCreators(passwordIsUpdating, dispatch),
    confirmPasswordIsUpdating: bindActionCreators(confirmPasswordIsUpdating, dispatch),
    submitRegisterForm: bindActionCreators(submitRegisterForm, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);