import { connect } from 'react-redux';

import ProductDetails from '../../components/Products/ProductDetails';

const mapStateToProps = ({ products }) => {
    return {
        selectedProduct: products.selectedProduct
    }; 
};

export default connect(mapStateToProps)(ProductDetails);