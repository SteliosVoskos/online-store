import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CheckoutForm from '../../components/Basket/CheckoutForm';

import {
    cardNumberIsChanging,
    checkoutEmailIsChanging,
    expiryDateIsChanging,
    nameOnCardIsChanging,
    securityNumberIsChanging,
    submitCheckoutForm
} from '../../actions/actions'

const mapStateToProps = ({ forms, products }) => ({
    firstName: forms.firstName,
    email: forms.email,
    password: forms.password,
    loginEmail: forms.loginEmail,
    loginPassword: forms.loginPassword,
    loginFormSubmitted: forms.loginFormSubmitted,
    registerFormSubmitted: forms.registerFormSubmitted,
    basket: products.basket,
    checkoutFormSubmitted: products.checkoutFormSubmitted,
    totalPrice: products.totalPrice
});

const mapDispatchToProps = dispatch => ({
    cardNumberIsChanging: bindActionCreators(cardNumberIsChanging, dispatch),
    checkoutEmailIsChanging: bindActionCreators(checkoutEmailIsChanging, dispatch),
    expiryDateIsChanging: bindActionCreators(expiryDateIsChanging, dispatch),
    nameOnCardIsChanging: bindActionCreators(nameOnCardIsChanging, dispatch),
    securityNumberIsChanging: bindActionCreators(securityNumberIsChanging, dispatch),
    submitCheckoutForm: bindActionCreators(submitCheckoutForm, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);