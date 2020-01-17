import React, { Component } from 'react';
import styled from 'styled-components';

import { device } from '../../styles/media';

const BasketItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid grey;
    padding: 1em;
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
export default class Basket extends Component {
    renderBasketItems() {
        const { basket } = this.props;
        return basket.map(product => {
            return (
                <BasketItem>
                    <img src={product.image} />
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>£{product.isOffer ? product.newPrice.toFixed(2) : product.price.toFixed(2)}</p>
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
                <Heading>Your basket has {basket.length} items</Heading>
                <BasketContainer>{this.renderBasketItems()}</BasketContainer>
            </div>
        )
    }
}