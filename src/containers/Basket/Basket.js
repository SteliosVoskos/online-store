import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Basket from '../../components/Basket/Basket';

import {
    clearBasket,
    deleteBasketItem
} from '../../actions/actions'

const mapStateToProps = ({ products }) => ({
    basket: products.basket,
    totalPrice: products.totalPrice
});

const mapDispatchToProps = dispatch => ({
    clearBasket: bindActionCreators(clearBasket, dispatch),
    deleteBasketItem: bindActionCreators(deleteBasketItem, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);