import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from '../../components/LoginAndRegister/Login';
import {
    loginEmailIsUpdating,
    loginPasswordIsUpdating,
    submitLoginForm
} from '../../actions/actions';

const mapStateToProps = ({ forms }) => ({
    firstName: forms.firstName,
    email: forms.email,
    password: forms.password,
    loginEmail: forms.loginEmail,
    loginPassword: forms.loginPassword,
    loginFormSubmitted: forms.loginFormSubmitted
});

const mapDispatchToProps = dispatch => ({
    loginEmailIsUpdating: bindActionCreators(loginEmailIsUpdating, dispatch),
    loginPasswordIsUpdating: bindActionCreators(loginPasswordIsUpdating, dispatch),
    submitLoginForm: bindActionCreators(submitLoginForm, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);