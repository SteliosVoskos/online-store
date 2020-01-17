import React, { Component } from 'react';
import styled from 'styled-components';

import NavigationItem from './NavigationItem';
import routes from './RouteConfigs';
import { device } from '../../styles/media';

const MobileNavigationContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const BurgerMenuContainer = styled.div`
    margin: 0 0.5em 1em 0;
`;
const BurgerMenu = styled.div`
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
`;

const DesktopNavigation = styled.div`
    display: flex;
    justify-content: center;
`

export default class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isBurgerMenuClicked: false
        };
    }

    isMobileOrTablet() {
        return navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
    }

    handleBurgerMenuClick = () => {
        this.setState({
            isBurgerMenuClicked: !this.state.isBurgerMenuClicked
        });
    }

    
    render() {
        if (this.isMobileOrTablet()) {
            return (
                <MobileNavigationContainer>
                    <BurgerMenuContainer onClick={this.handleBurgerMenuClick}>
                        <BurgerMenu></BurgerMenu><BurgerMenu></BurgerMenu><BurgerMenu></BurgerMenu>
                    </BurgerMenuContainer>
                    {this.state.isBurgerMenuClicked && routes.map(route => <NavigationItem key={route.id} {...route} />)}
                </MobileNavigationContainer>
            );
        }
        return <DesktopNavigation>{routes.map(route => <NavigationItem key={route.id} {...route} />)}</DesktopNavigation>
    }
}