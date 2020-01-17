import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Products from '../../components/Products/Products';
import {
    addToBasket,
    loadProducts,
    viewProduct
} from '../../actions/actions';

const mapStateToProps = ({ products }) => {
    return {
        basket: products.basket,
        productList: products.productList,
        selectedProduct: products.selectedProduct,
        totalPrice: products.totalPrice
    }; 
};

const mapDispatchToProps = dispatch => ({
    addToBasket: bindActionCreators(addToBasket, dispatch),
    loadProducts: bindActionCreators(loadProducts, dispatch),
    viewProduct: bindActionCreators(viewProduct, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);