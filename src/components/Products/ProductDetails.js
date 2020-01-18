import React, { Component } from 'react';
import styled from 'styled-components';

import { device } from '../../styles/media'

const Heading = styled.h1`
    color: #999999;
    font-family: arial, sans-serif;
    font-size: 2em;
    font-weight: bold;
    margin-top: 1em;
    margin-bottom: 1em;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 1em;
    justify-content: center;
    align-items: center;
    margin-left: 20%;
    @media ${device.mobileL} {
        width: 60%;
    }
`;

const ProductInformation = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const AddToBasket = styled.button`
    padding: 0.5em 2em;
    background-color: #3e647d;
    width: 200px;
    color: white;
    font-size: 1em;
    color: #f2f2f2;
    margin: 0.5em 1.5em 0.5em 0.5em;
    cursor: pointer;
    text-align: center;
    border: transparent;
    :hover {
        background-color: #49728c;
    }

    @media ${device.mobileS} {
        margin-right: 6em; 
    }
`;

export default class ProductDetails extends Component {
    handleAddToBasket = () => {
        this.props.addToBasket(this.props.selectedProduct);
    }

    render() {
        const { selectedProduct } = this.props;
        if (selectedProduct !== null) {
            return (
                <Container>
                    <Heading>Information about {selectedProduct.title}</Heading>
                    <ProductInformation>
                        <img src={selectedProduct.image} />
                        <h2>{selectedProduct.title}</h2>
                        <p>{selectedProduct.description}</p>
                        <p>Rating {selectedProduct.rating}</p>
                        <p>Price: £{selectedProduct.price.toFixed(2)}</p>
                    </ProductInformation>
                    <AddToBasket onClick={this.handleAddToBasket}>Add to basket</AddToBasket>
                </Container>
            )
        }
    
        return null;
    }
}