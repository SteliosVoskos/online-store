import React, { Component } from 'react';
import styled from 'styled-components';

import { device } from '../../styles/media';

const BasketItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid grey;
    padding: 0.7em;
    margin: 1em 1em;
    width: 20%;
    align-items: center;

    @media ${device.mobileS} {
        width: 70%;
        margin: 2em;
    }

    @media ${device.mobileM} {
        width: 70%;
        margin: 2em;
    }

    @media ${device.mobileL} {
        width: 70%;
        margin: 2em;
    }

    @media ${device.tablet} {
        width: 40%;
        margin: 2em;
    }
`;

const Heading = styled.h1`
    color: #999999;
    font-family: arial, sans-serif;
    font-size: 2em;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 1px;
`;

const BasketContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const ProductInfo = styled.p`
    margin: 0.2em 0;
`
export default class Basket extends Component {
    renderBasketItems() {
        const { basket } = this.props;
        return basket.map(product => {
            return (
                <BasketItem key={product.id}>
                    <img src={product.image} />
                    <ProductInfo>{product.title}</ProductInfo>
                    <ProductInfo>{product.description}</ProductInfo>
                    <ProductInfo>£{product.isOffer ? product.newPrice.toFixed(2) : product.price.toFixed(2)}</ProductInfo>
                </BasketItem>
            )
        })
    }
    render() {
        const { basket } = this.props;
        if (!basket.length || !basket) {
            return <p>Your basket is empty</p>;
        }

        return (
            <div>
                <Heading>Your basket has {basket.length} {basket.length === 1 ? `item` : `items`}</Heading>
                <BasketContainer>{this.renderBasketItems()}</BasketContainer>
            </div>
        )
    }
}