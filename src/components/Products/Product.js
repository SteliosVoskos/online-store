import React, { Component } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { device } from '../../styles/media';
import Offer from "./Offer";

const ProductContainer = styled.div`
    width: 86%;
    height: 520px;
    margin: 0 0 1em 1em;
    border: 1px solid #bababa;
    
    @media ${device.mobileS} {
        width: 71%;
    }

    @media ${device.mobileM} {
        width: 71%;
    }

    @media ${device.mobileL} {
        width: 71%;
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
`;

const Button = styled.button`
    margin-bottom: 1em;
    margin-left: 15%;
    padding: 0.5em 2em;
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
export default class Product extends Component {
    handleProductClick = id => {
        this.props.onProductClick(id);
    }

    handleAddToBasketClick = id => {
        this.props.onAddToBasketClick(id);
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
            <ProductContainer onClick={this.handleProductClick}>
              <img src={image} alt={title} />
              <DescriptionContainer>
                <p>{title}</p>
                {isFeatured && <div>Featured product</div> }
                {isOffer && <Offer />}
                {isOffer && newPrice !== '' && <div><NewPrice>£{newPrice.toFixed(2)}</NewPrice><PreviousPrice>£{price.toFixed(2)}</PreviousPrice></div>}
                {!isOffer && <span>Price £{price.toFixed(2)}</span>}
                <p>Rating: {rating}</p>
                <p>{isVegan && <Vegan>V</Vegan>}</p>
              </DescriptionContainer>
              <AddToBasket onClick={this.handleAddToBasketClick}>Add to basket</AddToBasket>
            </ProductContainer>
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
    onProductClick: () => {}
}
