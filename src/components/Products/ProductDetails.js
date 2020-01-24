import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    margin-top: 1em;
    font-familt: sans-serif;
    background-color: #F4F4F4;
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

    @media (min-width: 320px) and (max-width: 480px) {
        align-self: center;
    }
`;

export default class ProductDetails extends Component {
    handleAddToBasket = () => {
        this.props.addToBasket(this.props.selectedProduct);
    }

    render() {
        const { selectedProduct, basket } = this.props;
        if (selectedProduct !== null) {
            return (
                <Container>
                    <Heading>Information about {selectedProduct.title}</Heading>
                    <ProductInformation>
                        <img src={selectedProduct.image} alt={selectedProduct.title}/>
                        <h2>{selectedProduct.title}</h2>
                        <p>{selectedProduct.description}</p>
                        <p>Rating {selectedProduct.rating}</p>
                        <p>Price: £{selectedProduct.price.toFixed(2)}</p>
                    </ProductInformation>
                    <AddToBasket onClick={this.handleAddToBasket}>Add to basket</AddToBasket>
                    {basket.length > 0 && <div>Your basket has {basket.length} {basket.length === 1 ? `item` : `items`}. <Link to="/basket">Go to your basket</Link></div>}
                </Container>
            )
        }
    
        return null;
    }
}