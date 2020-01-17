import React from 'react';
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


const ProductDetails = ({ selectedProduct }) => {
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
            </Container>
        )
    }

    return null;
}

export default ProductDetails;