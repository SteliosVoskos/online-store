import React, { Component } from 'react';
import styled from 'styled-components';

import image from './home.jpg';

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`;

const Image = styled.img`
    margin-top: 2em;
    width: 100%;
    height: auto;
`;

const Heading = styled.h1`
    color: #999999;
    font-family: arial, sans-serif;
    font-size: 2em;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 1px;
`;

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Heading>Welcome to our online grocery store</Heading>
                <Image src={image} />
                <div>
                    <div>

                    </div>
                </div>
            </Container>
        )
    }
}