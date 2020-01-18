import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

import { device } from '../../styles/media';
import Offer from "./Offer";

const ProductContainer = styled.div`
    margin-right: 0.5em;
    cursor: pointer;
    @media (min-width: 320px) and (max-width: 480px) {
        width: 100%;
        height: 220px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    @media (min-width: 768px) {
        width: 80%;
        max-height: 500px;
        margin-right: 0.5em;
        display: flex;
        flex-direction: row;
    }

    @media (min-width: 1024px) {
        width: 100%;
        max-height: 500px;
        margin-right: 1em;
        display: flex;
        flex-direction: column;
    }

    :hover {
        background-color: #F4F4F4;
    }

    :active {
        background-color: #F4F4F4;
    }
`;

const NewPrice = styled.span`
    font-size: 1.2em;
    color: #d11f52;
    margin-right: 0.5em;
`;

const PreviousPrice = styled.span`
    font-size: 1em;
    text-decoration: line-through;
`

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 0.5em;
`;

const Button = styled.button`
    margin-bottom: 1em;
    margin-left: 15%;
    padding: 0.5em 2em;
`;

const Title = styled.h4`
    font-family: Arial, sans-serif;
    font-weight: 500;
    font-size: 1.2em;
    margin: 0.3em 0;
`;

const Featured = styled.div`
    font-family: Arial, sans-serif;
    background-color: #EE9F72;
    width: 100px;
    text-align: center;
    padding: 0.5em;
    border-radius: 2px;
    margin: 0.5em auto;
    font-size: 0.8em;
`;

const Vegan = styled.span`
    font-weight: bold;
    color: green;
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

const Image = styled.img`
    @media (min-width: 320px) and (max-width: 480px) {
        height: 150px;
        width: 105px;
        margin-top: 1em;
    }
    @media screen and (device-aspect-ratio: 40/71) {
        height: 100px;
        width: 70px;
        margin-top: 1em;
    }
`;

const Rating = styled.div`
    margin-top: 1em;
`
export default class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: 0
        }
    }
    handleProductClick = id => {
        this.props.onProductClick(id);
    }

    changeRating = ( newRating, name ) => {
        this.setState({
          rating: this.props.rating
        });
      }

    render() {
        const {
            image,
            title,
            unit,
            price,
            rating,
            isOffer,
            isFeatured,
            isVegan,
            newPrice
        } = this.props;
        return (
            <div>
                <ProductContainer onClick={this.handleProductClick}>
                    <div>
                        <Image src={image} alt={title} />
                    </div>
                    <DescriptionContainer>
                        <Title>{title}</Title>
                        {isFeatured && <Featured>Featured product</Featured>}
                        {isOffer && <Offer />}
                        {isOffer && newPrice !== '' && <div><NewPrice>£{newPrice.toFixed(2)}</NewPrice><PreviousPrice>£{price.toFixed(2)}</PreviousPrice></div>}
                        {!isOffer && <span>Price £{price.toFixed(2)}</span>}
                        <Rating>
                            <StarRatings
                                rating={this.props.rating}
                                starRatedColor="orange"
                                changeRating={this.changeRating}
                                numberOfStars={5}
                                name='Rating'
                                starDimension="25px"
                            />
                        </Rating>
                        <p>{isVegan && <Vegan>V</Vegan>}</p>
                    </DescriptionContainer>
                </ProductContainer>
            </div>
        );
    }
}

Product.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    unit: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    isOffer: PropTypes.bool,
    isFeatured: PropTypes.bool,
    isVegan: PropTypes.bool,
    newPrice: PropTypes.number,
    onProductClick: PropTypes.func
};

Product.defaultProps = {
    image: '',
    title: '',
    unit: '',
    price: 0,
    rating: 0,
    isOffer: false,
    isFeatured: false,
    isVegan: false,
    newPrice: 0,
    onProductClick: () => { }
}
