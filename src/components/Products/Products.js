import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Product from './Product';

import { device } from '../../styles/media';

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;

    margin: 2em 0 0 0;
    overflow-x: hidden;

    @media ${device.mobileS} {
        display: flex;
        flex-direction: column;
        margin-left: 10%;
    }

    @media ${device.mobileM} {
        display: flex;
        flex-direction: column;
        margin-left: 10%;
    }

    @media ${device.mobileL} {
        display: flex;
        flex-direction: column;
        margin-left: 10%;
    }
`;

const ProductItem = styled.div`
    width: 100%;
`;

const StyledLink = styled(Link) `
    text-decoration: none;
    color: black;
`;

export default class Products extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadProducts();
    }

    handleProductClick = id => {
        this.props.viewProduct(id);
    }

    handleAddProductToBasketClick = id => {
        this.props.addToBasket(id);
    }

    renderProductList() {
        const { productList } = this.props;
        if (!productList || !productList.length) {
            return <div />;
        }
        return productList.map(product => {
            return (
                <div key={product.id}>
                    <StyledLink to={`/products/${product.title}`}>
                        <Product
                            key={product.id}
                            onProductClick={() => this.handleProductClick(product.id)}
                            onAddToBasketClick={() => this.handleAddProductToBasketClick(product.id)}
                            {...product}/>
                    </StyledLink>
                </div>
            )
        })
    }

    render() {
        return (<Wrapper>
            {this.renderProductList()}
        </Wrapper>)
    }
}