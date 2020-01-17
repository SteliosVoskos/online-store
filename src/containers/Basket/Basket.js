import { connect } from 'react-redux';

import Basket from '../../components/Basket/Basket';

const mapStateToProps = ({ products }) => ({
    basket: products.basket
});

export default connect(mapStateToProps)(Basket);