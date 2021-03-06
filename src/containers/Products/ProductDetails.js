import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductDetails from '../../components/Products/ProductDetails';

import {
    addToBasket
} from '../../actions/actions'

const mapStateToProps = ({ products }) => ({
    selectedProduct: products.selectedProduct,
    basket: products.basket 
});

const mapDispatchToProps = dispatch => ({
    addToBasket: bindActionCreators(addToBasket, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);