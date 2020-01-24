import { connect } from 'react-redux';

import ThankYou from '../../components/ThankYou/ThankYou';

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

export default connect(mapStateToProps)(ThankYou);