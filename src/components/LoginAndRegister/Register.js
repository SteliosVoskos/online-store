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

const PassowrdStrength = styled.span`
    margin-left: 1em;
    color: ${props => props.passwordStrength === 'Weak' ? 'red' : 'green'};
`;

const SigninPrompt = styled.div`
    display: flex;
    flex-direction: row;
`;

const SigninLink = styled(Link)`
    display: block;
    margin: 1em 0 0 0.4em;
`

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailRegex: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            isFormValid: false,
            passwordStrength: '',
            specialCharsRegex: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
        }
    }
    handleFirstNameChange = event => {
        this.props.firstNameIsUpdating(event.target.value);
    }

    handleSurnameChange = event => {
        this.props.surnameIsUpdating(event.target.value);
    }

    handleEmailChange = event => {
        this.props.emailIsUpdating(event.target.value);
    }

    handlePasswordChange = event => {
        const { value } = event.target;
        this.props.passwordIsUpdating(value)

        if (value.length <= 7) {
            this.setState({
                passwordStrength: 'Weak'
            });
        } else if (value.length > 7 && /[A-Z]/.test(value) === true) {
            this.setState({
                passwordStrength: 'Strong!'
            });
        }
    }

    handleConfirmPasswordChange = event => {
        this.props.confirmPasswordIsUpdating(event.target.value)
    }

    handleFormSubmission = () => {
        this.props.submitRegisterForm()
    }

    render() {
        const {
            email,
            firstName,
            password,
            confirmedPassword,
            registerFormSubmitted,
            surname
        } = this.props;
        const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (registerFormSubmitted && firstName !== '' && surname !== '' && (email !== '' || regex.test(email) === true) && password !== '' && (confirmedPassword === password)) {
            return (
                <div>
                    <p>Thank you for signing up, {firstName}. A confirmation email has been sent at {email}</p>
                    <p>Happy shopping!</p>
                    <p>See our new products <Link to="/products">Here</Link></p>
                </div>
            )
        }
        return (
            <InputContainer>
                <Input type="text" placeholder="First name" onChange={this.handleFirstNameChange} value={firstName} />
                {registerFormSubmitted && firstName === '' && <span>* required field</span>}
                <Input type="text" placeholder="Surname" onChange={this.handleSurnameChange} value={surname} />
                {registerFormSubmitted && surname === '' && <span>* required field</span>}
                <Input type="email" placeholder="Email" onChange={this.handleEmailChange} value={email} />
                {registerFormSubmitted && (regex.test(email) === false) && <span>Invalid email</span>}
                <Input type="password" placeholder="Password" onChange={this.handlePasswordChange} value={password} />
                <PassowrdStrength passwordStrength={this.state.passwordStrength}>{this.state.passwordStrength}</PassowrdStrength>
                <Input type="password" placeholder="Confirm password" onChange={this.handleConfirmPasswordChange} value={confirmedPassword} />
                {registerFormSubmitted && (password !== confirmedPassword) && <span>Passwords do not match</span>}
                <div>
                    <Button onClick={this.handleFormSubmission}>Register</Button>
                </div>
                <SigninPrompt>
                    <p>Already have an account?</p><SigninLink to="/login">Sign-in</SigninLink>
                </SigninPrompt>
            </InputContainer>
        );
    }
}
