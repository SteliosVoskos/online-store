import React, { Component } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

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

const SignUpPrompt = styled.div`
    display: flex;
    flex-direction: row;
`;

const SignUpLink = styled(Link)`
    display: block;
    margin: 1em 0 0 0.4em;
`

export default class Login extends Component {
    handleEmailChange = event => {
        this.props.loginEmailIsUpdating(event.target.value);
    }

    handlePasswordChange = event => {
        this.props.loginPasswordIsUpdating(event.target.value)
    }

    handleSubmission = () => {
        this.props.submitLoginForm();
    }

    renderErrorMessage() {
        if (this.props.loginFormSubmitted && (this.props.loginEmail !== this.props.email)) {
            return (
                <div>
                    <p>The provide login email does not exist. Why not <Link to="/register">Sign-up</Link></p>
                </div>
            );
        } else if (this.props.loginFormSubmitted && (this.props.loginPassword !== this.props.password)) {
            return <p>Invalid password</p>;
        } else {
            return <div />;
        }
    }
    
    render() {
        const { email, loginEmail, loginFormSubmitted, loginPassword, password  } = this.props;
        if (loginFormSubmitted && (loginEmail === email) && (loginPassword === password)) {
            return (
                <div>
                    <p>Welcome back {this.props.name}. Happy shopping</p>
                    <p>See our new products <Link to="/products">Here</Link></p>
                </div>
            );
        }
        return (
            <InputContainer>
                <Input type="text" placeholder="Email" onChange={this.handleEmailChange} value={loginEmail} />
                <Input type="text" placeholder="Password" onChange={this.handlePasswordChange} value={loginPassword} />
                {this.renderErrorMessage()}
                <Button onClick={this.handleSubmission}>Login</Button>
                <SignUpPrompt>
                    <p>Not having an account?</p><SignUpLink to="/register">Sign-up</SignUpLink>
                </SignUpPrompt>
            </InputContainer>
        );
    }
}
