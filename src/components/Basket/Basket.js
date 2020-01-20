import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    display: block;
    color: #999999;
    font-family: arial, sans-serif;
    font-size: 2em;
    font-weight: bold;
    margin-top: 1em;
`;

const BasketContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const ProductInfo = styled.p`
    margin: 0.2em 0;
`;

const EmptyBasket = styled.div`
    margin: 2em 4em 0.5em 4em;
    padding: 1em 2em;
    width: 30%;
    background-color: #e4e9ec;
    font-size: 2em;
    font-weight: 500;

    @media (min-width: 320px) and (max-width: 480px) {
        margin-left: 0;
        width: 70%;
        font-size: 1.5em;
    }

    @media screen and (device-aspect-ratio: 40/71) {
        margin-left: 0;
        width: 70%;
        font-size: 1.3em;
        padding-left: 2em;
    }
`;

const Total = styled.div`
    margin: 2em 4em 0.5em 0;
    padding: 1em 2em;
    background-color: #e4e9ec;
    font-size: 1em;
    font-weight: light;
    font-family: sans-serif;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 80%;
    }
`;

const Button = styled.button`
    padding: 1em 3em;
    background-color: ${props => props.isRemoveFromBasket ? '#F94F4F' : '#3e647d' };
    color: ${props => props.isRemoveFromBasket ? 'black' : 'white' };
    font-size: 1em;
    color: #f2f2f2;
    margin: 1em 0 1em 0.5em;
    :hover {
        background-color: ${props => props.isRemoveFromBasket ? '#FA5252' : '#49728c' };
    }
`;
export default class Basket extends Component {
    handleDeleteBasketItem = id => {
        this.props.deleteBasketItem(id);
    }

    renderBasketItems() {
        const { basket } = this.props;
        return basket.map(product => {
            return (
                <BasketItem key={product.id}>
                    <img src={product.image} />
                    <ProductInfo>{product.title}</ProductInfo>
                    <ProductInfo>{product.description}</ProductInfo>
                    <ProductInfo>£{product.isOffer ? product.newPrice.toFixed(2) : product.price.toFixed(2)}</ProductInfo>
                    <Button isRemoveFromBasket={true} onClick={() => this.handleDeleteBasketItem(product.id)}>Remove item</Button>
                </BasketItem>
            );
        });
    }

    handleClearbasket = () => {
        this.props.clearBasket();
    }

    render() {
        const { basket } = this.props;
        if (!basket.length || !basket) {
            return (
                <div>
                    <EmptyBasket>Your basket is empty. See our products <Link to="/products">here</Link></EmptyBasket>
                </div>
            );
        }

        return (
            <div>
                <Heading>Your basket has {basket.length} {basket.length === 1 ? `item` : `items`}</Heading>
                <BasketContainer>{this.renderBasketItems()}</BasketContainer>
                <hr />
                <Total>
                    <h3>Total: £{this.props.totalPrice.toFixed(2)}</h3>
                </Total>
                <Button onClick={this.props.clearBasket}>Clear basket</Button>
            </div>
        )
    }
}