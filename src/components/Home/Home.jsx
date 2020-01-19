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
    color: white;
    font-family: arial, sans-serif;
    font-size: 2.5em;
    font-weight: bold;
    margin-top: 0px;
    margin-bottom: 1px;
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 1.15em;
    }

    @media screen and (device-aspect-ratio: 40/71) {
        font-size: 1em;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 2em;
    }
`;

const HeroBannerContainer = styled.div`
    width: 30%;
    position: absolute;
    top: 40%;
    right: 25px;
    @media (min-width: 320px) and (max-width: 480px) {
        top: 20%;
    }
`
// Image by <a href="https://pixabay.com/users/Christoph-47781/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=171653">Christoph</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=171653">Pixabay</a>
export default class Home extends Component {
    render() {
        return (
            <Container>
                <Image src={image} />
                <HeroBannerContainer>
                    <Heading>Selling and making coffee. With meraki.</Heading>
                </HeroBannerContainer>
            </Container>
        )
    }
}