import React from 'react';

const ThankYou = (props) => {
    if (props.checkoutFormSubmitted) {
        if (props.loginFormSubmitted || props.loginFormSubmitted) {
            if ((props.loginPassword === props.password) && (props.loginEmail === props.email) && props.firstName !== "") {
                return (
                    <div>
                        <h1>Thank you, {this.props.firstName}!</h1>
                        <p>We received your payment of £{props.totalPrice.toFixed(2)} and we will deliver your items to your address</p>
                        <p>Your order reference is #{Math.random(10)}</p>
                    </div>
                )
            } 
        }
        return (
            <div>
                <h1>Thank you, customer!</h1>
                <p>We received your payment of £{props.totalPrice.toFixed(2)} and we will deliver your items to your address</p>
                <p>Your order reference is #{Math.random(10)}</p>
            </div>
        )
    }
    return null;
}

export default ThankYou;