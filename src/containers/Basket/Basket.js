import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Basket from '../../components/Basket/Basket';

const mapStateToProps = ({ products }) => ({
    basket: products.basket,
    totalPrice: products.totalPrice
});

export default connect(mapStateToProps)(Basket);