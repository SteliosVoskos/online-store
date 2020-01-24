import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { device } from '../../styles/media';

const InputContainer = styled.div`
  width: 70%;
  display: block;
  padding: 1em;
  background-color: #e4e9ec;
  margin: 1em auto;
  border-radius: 20px;
  @media ${device.mobileS} {
    width: 90%;
  }

  @media ${device.mobileM} {
    width: 90%;
  }
  
  @media ${device.mobileL} {
    width: 90%;
  }
`;

const Input = styled.input`
  padding: 1.5em 1em;
  margin: 1em 0 1em 0.5em;
  border-radius: 5px;
  border: transparent;
  width: 70%;
  :placeholder {
    font-size: 1em;
  }

  @media ${device.mobileS} {
    width: 65%;
  }

  @media ${device.mobileM} {
    width: 65%;
  }
  
  @media ${device.mobileL} {
    width: 65%;
  }
`;

const Button = styled.button`
    padding: 1em 3em;
    background-color: #3e647d;
    color: white;
    font-size: 1em;
    color: #f2f2f2;
    margin: 1em 0 1em 0.5em;
    :hover {
        background-color: #49728c;
    }
`;

export default class CheckoutForm extends Component {
    handleCardNumberChange = event => {
        if (event.target.value.length <= 10) {
            this.props.cardNumberIsChanging(event.target.value);
        }
    }

    handleSecurityNumberChange = event => {
        this.props.securityNumberIsChanging(event.target.value);
    }

    handleExpiryDateChange = event => {
        this.props.expiryDateIsChanging(event.target.value);
    }

    handleNameOnCardIsChanging = event => {
        this.props.nameOnCardIsChanging(event.target.value);
    }

    handleEmailChange = event => {
        this.props.checkoutEmailIsChanging(event.target.value);
    }

    handleFormSubmission = () => {
        console.log(this.props);
        this.props.submitCheckoutForm();
    }

    renderBasketItemDetails() {
        return this.props.basket.map(item => {
            return (
                <div>
                    <h5>{item.title}</h5>
                    <p>£{item.price.toFixed(2)}</p>
                </div>
            )
        });
    }

    renderFormFields() {
        return (
            <InputContainer>
                <h1>Payment and card details</h1>
                <Input
                    placeholder="Email"
                    type="email"
                    onChange={this.handleEmailChange}
                    value={this.props.checkoutEmail}
                />
                <Input
                    placeholder="Name on card"
                    type="text"
                    onChange={this.handleNameOnCardIsChanging}
                    value={this.props.nameOnCard}
                />
                <Input
                    placeholder="Card number"
                    type="password"
                    onChange={this.handleCardNumberChange}
                    value={this.props.cardNumber}
                />
                <Input
                    placeholder="Security number"
                    type="text"
                    onChange={this.handleSecurityNumberChange}
                    value={this.props.securityNumber}
                />
                <Input
                    placeholder="Expiry date"
                    type="text"
                    onChange={this.handleExpiryDateChange}
                    value={this.props.expiryDate}
                />
                <Button onClick={this.handleFormSubmission}>Pay now</Button>
            </InputContainer>
        );
    }

    renderThankyouMessageAndForm() {
        if (this.props.checkoutFormSubmitted) {
            return <Redirect to="/thank-you" />
        }

        return this.renderFormFields();
    }

    renderTotalPrice() {
        if (this.props.basket.length > 0) {
            return (
                <div>
                    <hr />
                    <h1>£{this.props.totalPrice.toFixed(2)}</h1>
                </div>
            )
        }

        return null;
    }

    render() {
        return (
            <div>
                {this.renderBasketItemDetails()}
                {this.renderTotalPrice()}
                {this.renderThankyouMessageAndForm()}
            </div>
        )
    }
}